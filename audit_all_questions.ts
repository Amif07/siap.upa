import fs from 'fs';
import { MASTER_UPA_DATABASE } from './src/data/upaQuestions';

console.log(`Auditing MASTER_UPA_DATABASE: ${MASTER_UPA_DATABASE.length} questions`);

const slangWords = [
  'yg', 'tdk', 'dgn', 'utk', 'kpd', 'dpt', 'tsb', 'bkn', 'thd', 'pd', 'sbg', 'org', 'dlm', 'pdhl', 'klo', 'kalo', 'adlh', 'krn', 'sy', 'dgnnya'
];
const slangRegex = new RegExp(`\\b(${slangWords.join('|')})\\b`, 'i');

const leakedHeaders = [
  'HUKUM ACARA PERDATA',
  'HUKUM ACARA PIDANA',
  'HUKUM ACARA PTUN',
  'HUKUM ACARA PERADILAN AGAMA',
  'KODE ETIK ADVOKAT INDONESIA (KEAI)',
  'PERAN, FUNGSI, DAN PERKEMBANGAN ORGANISASI ADVOKAT',
  'HUKUM ACARA PHI',
  'HUKUM ACARA MAHKAMAH KONSTITUSI',
  'UJIAN PROFESI ADVOKAT'
];

interface Finding {
  id: number;
  category: string;
  field: string;
  issue: string;
  text: string;
  fullQuestion: string;
  correctAnswer: string;
}

const findings: Finding[] = [];

MASTER_UPA_DATABASE.forEach((q) => {
  // Check question text
  const qSlang = q.question.match(slangRegex);
  if (qSlang) {
    findings.push({
      id: q.id,
      category: q.category,
      field: 'question',
      issue: `Abbreviation "${qSlang[0]}" in question`,
      text: qSlang[0],
      fullQuestion: q.question,
      correctAnswer: q.correctAnswer
    });
  }
  if (q.question.includes('&')) {
    findings.push({
      id: q.id,
      category: q.category,
      field: 'question',
      issue: 'Question contains ampersand (&)',
      text: '&',
      fullQuestion: q.question,
      correctAnswer: q.correctAnswer
    });
  }

  // Check options
  q.options.forEach((opt) => {
    const text = opt.text || '';
    const slangMatch = text.match(slangRegex);
    if (slangMatch) {
      findings.push({
        id: q.id,
        category: q.category,
        field: `option ${opt.key}`,
        issue: `Abbreviation "${slangMatch[0]}" in option`,
        text: text,
        fullQuestion: q.question,
        correctAnswer: q.correctAnswer
      });
    }

    if (text.includes('&')) {
      findings.push({
        id: q.id,
        category: q.category,
        field: `option ${opt.key}`,
        issue: 'Option contains ampersand (&)',
        text: text,
        fullQuestion: q.question,
        correctAnswer: q.correctAnswer
      });
    }

    // Check leaked headers
    for (const header of leakedHeaders) {
      if (text.toUpperCase().includes(header)) {
        // Only an issue if it ends with it or seems appended
        if (text.toUpperCase().endsWith(header) || text.length > header.length + 5) {
          findings.push({
            id: q.id,
            category: q.category,
            field: `option ${opt.key}`,
            issue: `Leaked header phrase "${header}"`,
            text: text,
            fullQuestion: q.question,
            correctAnswer: q.correctAnswer
          });
        }
      }
    }
  });

  // Check explanation vs key
  const exp = `${q.explanation.summary} ${q.explanation.analysis} ${q.explanation.legalBasis}`;
  const keyMatches = exp.matchAll(/(?:jawaban|pilihan|opsi)\s+(?:yang\s+(?:paling\s+)?benar\s+(?:adalah|ialah)\s+)?([A-D])\b/gi);
  for (const match of keyMatches) {
    const stated = match[1].toUpperCase();
    const context = exp.substring(Math.max(0, (match.index || 0) - 20), Math.min(exp.length, (match.index || 0) + 30));
    if (/jawaban|opsi yang benar|pilihan yang benar|kunci/i.test(context)) {
      if (stated !== q.correctAnswer) {
        findings.push({
          id: q.id,
          category: q.category,
          field: 'correctAnswer',
          issue: `Key mismatch: key=${q.correctAnswer} but text says ${context}`,
          text: context,
          fullQuestion: q.question,
          correctAnswer: q.correctAnswer
        });
      }
    }
  }
});

console.log(`Total findings: ${findings.length}`);
fs.writeFileSync('audit_findings.json', JSON.stringify(findings, null, 2), 'utf-8');
console.log('Saved to audit_findings.json');
