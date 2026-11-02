import * as fs from 'fs';
import { OFFICIAL_TRYOUT_QUESTIONS } from './src/data/upaQuestions';

const text = fs.readFileSync('kunci_tryout_4juli2026_extracted.txt', 'utf-8');

// Parse questions: "JAWABAN: [A-D]"
const regex = /(\d+)\s+([A-Z0-9\s\S]+?)JAWABAN:\s*([A-D])\.?\s*([^\n]+)([\s\S]+?)(?=\n\d+\s+[A-Z0-9]|$)/g;

let matches = 0;
const parsedOfficial: Record<number, { key: string; text: string; explanation: string }> = {};

// Alternatively, let's search for "JAWABAN: [A-D]" patterns
const lines = text.split('\n');
let currentNo = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  const noMatch = line.match(/^(\d{1,3})\s+[A-Z]/);
  // Also look for JAWABAN: X
  const ansMatch = line.match(/JAWABAN:\s*([A-D])/i);
  if (ansMatch) {
    // Find preceding question number
    for (let j = i - 1; j >= Math.max(0, i - 15); j--) {
      const m = lines[j].trim().match(/^(\d{1,3})\s+/);
      if (m && Number(m[1]) >= 1 && Number(m[1]) <= 120) {
        currentNo = Number(m[1]);
        parsedOfficial[currentNo] = {
          key: ansMatch[1].toUpperCase(),
          text: line,
          explanation: lines.slice(i + 1, Math.min(lines.length, i + 8)).join(' '),
        };
        break;
      }
    }
  }
}

console.log('Parsed official keys count:', Object.keys(parsedOfficial).length);

let diffCount = 0;
OFFICIAL_TRYOUT_QUESTIONS.forEach(q => {
  const off = parsedOfficial[q.id];
  if (off && off.key !== q.correctAnswer) {
    diffCount++;
    console.log(`Mismatch Q #${q.id}: App has ${q.correctAnswer}, Official Key has ${off.key}`);
    console.log(`  Q: ${q.question.slice(0, 80)}...`);
  }
});
console.log('Total mismatches in OFFICIAL_TRYOUT_QUESTIONS:', diffCount);
