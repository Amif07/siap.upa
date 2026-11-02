import { TRYOUT_2025_BANK } from './src/data/tryOut2025Bank';
import * as fs from 'fs';

let output = '';
TRYOUT_2025_BANK.forEach((q) => {
  output += `========================================================\n`;
  output += `ID: ${q.id} | Category: ${q.category} | Topic: ${q.topicTag || ''}\n`;
  output += `Question: ${q.question}\n`;
  q.options.forEach((o) => {
    output += `  [${o.key}] ${o.text}\n`;
  });
  output += `Current CorrectAnswer: ${q.correctAnswer}\n`;
  output += `Summary: ${q.explanation?.summary || ''}\n`;
  output += `LegalBasis: ${q.explanation?.legalBasis || ''}\n`;
  output += `Analysis: ${q.explanation?.analysis || ''}\n`;
});

fs.writeFileSync('tryout_2025_full_dump.txt', output);
console.log('Done dumping tryout 2025 bank. Total questions:', TRYOUT_2025_BANK.length);
