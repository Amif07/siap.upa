import { MASTER_UPA_DATABASE } from './src/data/upaQuestions';
import { TOAZ_PERADI_BANK } from './src/data/toazPeradiBank';
import { TRYOUT_2025_BANK } from './src/data/tryOut2025Bank';
import { AUTHENTIC_PERADI_BANK_PART2 } from './src/data/authenticUpaQuestions';
import { ADDITIONAL_UPA_BANK_PART1 } from './src/data/additionalUpaQuestions';
import { CATEGORY_EXPANSION_BANK } from './src/data/categoryExpansionBank';
import { ADVANCED_UPA_BANK } from './src/data/advancedUpaBank';
import { OFFICIAL_TRYOUT_QUESTIONS } from './src/data/upaQuestions';

const banks = [
  { name: 'OFFICIAL_TRYOUT_QUESTIONS', data: OFFICIAL_TRYOUT_QUESTIONS },
  { name: 'TRYOUT_2025_BANK', data: TRYOUT_2025_BANK },
  { name: 'TOAZ_PERADI_BANK', data: TOAZ_PERADI_BANK },
  { name: 'AUTHENTIC_PERADI_BANK_PART2', data: AUTHENTIC_PERADI_BANK_PART2 },
  { name: 'ADDITIONAL_UPA_BANK_PART1', data: ADDITIONAL_UPA_BANK_PART1 },
  { name: 'CATEGORY_EXPANSION_BANK', data: CATEGORY_EXPANSION_BANK },
  { name: 'ADVANCED_UPA_BANK', data: ADVANCED_UPA_BANK },
];

for (const b of banks) {
  let countNoPasal = 0;
  let countGeneric = 0;
  b.data.forEach((q: any) => {
    const lb = q.explanation?.legalBasis || '';
    if (!lb.toLowerCase().includes('pasal')) {
      countNoPasal++;
    }
    if (lb.includes('Regulasi Terkait') || lb.includes('SOP') || lb.includes('belum') || lb.length < 15) {
      countGeneric++;
    }
  });
  console.log(`Bank ${b.name}: ${b.data.length} questions. Without 'Pasal': ${countNoPasal}, Generic: ${countGeneric}`);
}
