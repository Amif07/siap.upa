import { MASTER_UPA_DATABASE } from './src/data/upaQuestions';

interface Issue {
  id: number;
  category: string;
  topic?: string;
  question: string;
  correctAnswer: string;
  correctAnswerText: string;
  legalBasis?: string;
  summary?: string;
  analysis?: string;
  issueType: string;
  details: string;
}

const issues: Issue[] = [];

MASTER_UPA_DATABASE.forEach((q) => {
  const opt = q.options.find((o) => o.key === q.correctAnswer);
  if (!opt) {
    issues.push({
      id: q.id,
      category: q.category,
      topic: q.topicTag,
      question: q.question,
      correctAnswer: q.correctAnswer,
      correctAnswerText: 'NOT FOUND',
      issueType: 'MISSING_OPTION',
      details: `Option key ${q.correctAnswer} does not exist in options`,
    });
    return;
  }

  const exp = q.explanation;
  if (!exp) {
    issues.push({
      id: q.id,
      category: q.category,
      topic: q.topicTag,
      question: q.question,
      correctAnswer: q.correctAnswer,
      correctAnswerText: opt.text,
      issueType: 'NO_EXPLANATION',
      details: 'Question has no explanation object',
    });
    return;
  }

  // Check legalBasis presence and quality
  if (!exp.legalBasis || exp.legalBasis.trim().length === 0 || exp.legalBasis.includes('belum') || exp.legalBasis === '-') {
    issues.push({
      id: q.id,
      category: q.category,
      topic: q.topicTag,
      question: q.question,
      correctAnswer: q.correctAnswer,
      correctAnswerText: opt.text,
      legalBasis: exp.legalBasis,
      issueType: 'WEAK_LEGAL_BASIS',
      details: `Legal basis is missing or weak: "${exp.legalBasis}"`,
    });
  }

  // Check if explanation mentions a specific letter/option that contradicts correctAnswer
  const fullExpText = `${exp.summary || ''} ${exp.analysis || ''} ${exp.legalBasis || ''}`;
  const keyLetterMatch = fullExpText.match(/(?:jawaban|pilihan|opsi)\s+(?:yang\s+(?:paling\s+)?benar\s+(?:adalah|ialah)\s+)?\b([A-D])\b/i);
  if (keyLetterMatch) {
    const mentionedKey = keyLetterMatch[1].toUpperCase();
    if (mentionedKey !== q.correctAnswer) {
      issues.push({
        id: q.id,
        category: q.category,
        topic: q.topicTag,
        question: q.question,
        correctAnswer: q.correctAnswer,
        correctAnswerText: opt.text,
        legalBasis: exp.legalBasis,
        summary: exp.summary,
        analysis: exp.analysis,
        issueType: 'KEY_MISMATCH_TEXT',
        details: `Explanation mentions key "${mentionedKey}", but correctAnswer is "${q.correctAnswer}"`,
      });
    }
  }
});

console.log(`Total questions in database: ${MASTER_UPA_DATABASE.length}`);
console.log(`Found ${issues.length} potential issues`);
console.log(JSON.stringify(issues, null, 2));
