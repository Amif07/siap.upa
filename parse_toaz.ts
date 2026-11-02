import * as fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

async function parseToaz() {
  const dataBuffer = fs.readFileSync('public/assets/aistudio/toaz.info-latihan-soal-ujian-advokat-peradi-pr_fbffc7429e73cac029a82c6d5b5ffacd_42856ac0.pdf');
  const data = await pdf(dataBuffer);
  fs.writeFileSync('toaz_pdf_text.txt', data.text, 'utf-8');
  console.log('Toaz PDF pages:', data.numpages, 'Text length:', data.text.length);
}

parseToaz().catch(console.error);
