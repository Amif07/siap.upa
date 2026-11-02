import { TOAZ_PERADI_BANK } from './src/data/toazPeradiBank';
import * as fs from 'fs';

let output = '';
TOAZ_PERADI_BANK.forEach((q) => {
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

fs.writeFileSync('toaz_full_dump.txt', output);
console.log('Done dumping TOAZ bank. Total questions:', TOAZ_PERADI_BANK.length);
