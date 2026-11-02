import { TOAZ_PERADI_BANK } from './src/data/toazPeradiBank';
import { TRYOUT_2025_BANK } from './src/data/tryOut2025Bank';
import * as fs from 'fs';

let out = '';
out += '=== TOAZ_PERADI_BANK ===\n';
TOAZ_PERADI_BANK.forEach(q => {
  const opt = q.options.find(o => o.key === q.correctAnswer);
  out += `ID: ${q.id} | Cat: ${q.category} | Ans: ${q.correctAnswer} (${opt?.text})\n`;
  out += `  Q: ${q.question}\n`;
  out += `  Options: ${q.options.map(o => `[${o.key}] ${o.text}`).join(' ')}\n`;
  out += `  LB: ${q.explanation.legalBasis}\n`;
  out += `  Sum: ${q.explanation.summary}\n`;
  out += `  Ana: ${q.explanation.analysis}\n\n`;
});

out += '=== TRYOUT_2025_BANK ===\n';
TRYOUT_2025_BANK.forEach(q => {
  const opt = q.options.find(o => o.key === q.correctAnswer);
  out += `ID: ${q.id} | Cat: ${q.category} | Ans: ${q.correctAnswer} (${opt?.text})\n`;
  out += `  Q: ${q.question}\n`;
  out += `  Options: ${q.options.map(o => `[${o.key}] ${o.text}`).join(' ')}\n`;
  out += `  LB: ${q.explanation.legalBasis}\n`;
  out += `  Sum: ${q.explanation.summary}\n`;
  out += `  Ana: ${q.explanation.analysis}\n\n`;
});

fs.writeFileSync('toaz_and_tryout_dump.txt', out);
console.log('Dump written, lines:', out.split('\n').length);
