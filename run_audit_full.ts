import { OFFICIAL_TRYOUT_QUESTIONS } from './src/data/upaQuestions';
import { ADDITIONAL_UPA_BANK_PART1 } from './src/data/additionalUpaQuestions';
import { AUTHENTIC_PERADI_BANK_PART2 } from './src/data/authenticUpaQuestions';
import { TRYOUT_2025_BANK } from './src/data/tryOut2025Bank';
import { TOAZ_PERADI_BANK } from './src/data/toazPeradiBank';
import { ADVANCED_UPA_BANK } from './src/data/advancedUpaBank';
import { CATEGORY_EXPANSION_BANK } from './src/data/categoryExpansionBank';
import * as fs from 'fs';

const banks = [
  { name: 'OFFICIAL_TRYOUT_QUESTIONS', file: 'upaQuestions.ts', data: OFFICIAL_TRYOUT_QUESTIONS },
  { name: 'TRYOUT_2025_BANK', file: 'tryOut2025Bank.ts', data: TRYOUT_2025_BANK },
  { name: 'TOAZ_PERADI_BANK', file: 'toazPeradiBank.ts', data: TOAZ_PERADI_BANK },
  { name: 'AUTHENTIC_PERADI_BANK_PART2', file: 'authenticUpaQuestions.ts', data: AUTHENTIC_PERADI_BANK_PART2 },
  { name: 'ADDITIONAL_UPA_BANK_PART1', file: 'additionalUpaQuestions.ts', data: ADDITIONAL_UPA_BANK_PART1 },
  { name: 'CATEGORY_EXPANSION_BANK', file: 'categoryExpansionBank.ts', data: CATEGORY_EXPANSION_BANK },
  { name: 'ADVANCED_UPA_BANK', file: 'advancedUpaBank.ts', data: ADVANCED_UPA_BANK },
];

let log = '';

for (const b of banks) {
  log += `\n=================== BANK: ${b.name} (${b.file}) ===================\n`;
  b.data.forEach((q: any) => {
    const isAgama = (q.category && q.category.toLowerCase().includes('agama')) ||
      (q.question && (
        q.question.toLowerCase().includes('nikah') ||
        q.question.toLowerCase().includes('talak') ||
        q.question.toLowerCase().includes('khi') ||
        q.question.toLowerCase().includes('waris') ||
        q.question.toLowerCase().includes('cerai') ||
        q.question.toLowerCase().includes('iddah') ||
        q.question.toLowerCase().includes('li\'an') ||
        q.question.toLowerCase().includes('lian') ||
        q.question.toLowerCase().includes('khuluk') ||
        q.question.toLowerCase().includes('pengadilan agama')
      ));

    if (isAgama) {
      const selectedOpt = q.options.find((o: any) => o.key === q.correctAnswer);
      log += `[ID: ${q.id}] Cat: "${q.category}"\n`;
      log += `  Q: ${q.question}\n`;
      log += `  Key: ${q.correctAnswer} -> "${selectedOpt ? selectedOpt.text : 'UNDEFINED'}"\n`;
      log += `  Options: ${q.options.map((o: any) => `${o.key}: ${o.text}`).join(' | ')}\n`;
      if (typeof q.explanation === 'string') {
        log += `  Exp: ${q.explanation}\n`;
      } else if (q.explanation) {
        log += `  LegalBasis: ${q.explanation.legalBasis} | Summary: ${q.explanation.summary}\n`;
      }
      log += '--------------------------------------------------\n';
    }
  });
}

fs.writeFileSync('audit_output.txt', log, 'utf-8');
console.log('Done writing audit_output.txt. File size:', log.length);
