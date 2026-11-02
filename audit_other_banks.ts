import { AUTHENTIC_PERADI_BANK_PART2 } from './src/data/authenticUpaQuestions';
import { ADDITIONAL_UPA_BANK_PART1 } from './src/data/additionalUpaQuestions';
import { CATEGORY_EXPANSION_BANK } from './src/data/categoryExpansionBank';
import { ADVANCED_UPA_BANK } from './src/data/advancedUpaBank';
import { OFFICIAL_TRYOUT_QUESTIONS } from './src/data/upaQuestions';

const banks = [
  { name: 'AUTHENTIC_PERADI_BANK_PART2', data: AUTHENTIC_PERADI_BANK_PART2 },
  { name: 'ADDITIONAL_UPA_BANK_PART1', data: ADDITIONAL_UPA_BANK_PART1 },
  { name: 'CATEGORY_EXPANSION_BANK', data: CATEGORY_EXPANSION_BANK },
  { name: 'ADVANCED_UPA_BANK', data: ADVANCED_UPA_BANK },
  { name: 'OFFICIAL_TRYOUT_QUESTIONS', data: OFFICIAL_TRYOUT_QUESTIONS },
];

banks.forEach(b => {
  let issues = 0;
  b.data.forEach((q: any) => {
    const opt = q.options.find((o: any) => o.key === q.correctAnswer);
    if (!opt) {
      console.log(`[${b.name}] Q #${q.id}: Invalid key ${q.correctAnswer}`);
      issues++;
      return;
    }
    const exp = q.explanation;
    if (!exp.legalBasis || exp.legalBasis.includes('belum') || exp.legalBasis.includes('Regulasi Terkait') || !exp.legalBasis.toLowerCase().includes('pasal')) {
      // Check if it's really missing pasal
      console.log(`[${b.name}] Q #${q.id}: Weak legal basis: "${exp.legalBasis}"`);
      issues++;
    }
  });
  console.log(`Bank ${b.name}: ${issues} weak legal bases out of ${b.data.length}`);
});
