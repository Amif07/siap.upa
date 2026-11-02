import fs from 'fs';
import { TRYOUT_2025_BANK } from './src/data/tryOut2025Bank';
import { TOAZ_PERADI_BANK } from './src/data/toazPeradiBank';
import { ADVANCED_UPA_BANK } from './src/data/advancedUpaBank';

// 1. Update TRYOUT_2025_BANK
const tryMap: Record<number, string> = {
  207: "Pasal 1 angka 1 jo. Pasal 284 ayat (1) dan Pasal 285 Undang-Undang No. 8 Tahun 1981 tentang KUHAP.",
  235: "Pasal 8 angka 3 Reglement op de Rechtsvordering (Rv) jo. Putusan Mahkamah Agung RI No. 547 K/Sip/1972.",
  237: "Pasal 163 HIR (Staatsblad 1941 No. 44) / Pasal 283 RBg jo. Pasal 1865 KUHPerdata jo. Putusan MA RI No. 556 K/Sip/1971.",
  245: "Pasal 195 ayat (6) HIR (Staatsblad 1941 No. 44) jo. Pasal 206 ayat (6) RBg jo. Pasal 378 - 384 Rv.",
  252: "Pasal 1 angka 1 jo. Pasal 36 Undang-Undang No. 18 Tahun 2003 tentang Advokat.",
  258: "Pasal 32 ayat (1) Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Piagam Deklarasi PERADI tanggal 21 Desember 2004 di Jakarta.",
  260: "Pasal 24C ayat (1) UUD 1945 jo. Pasal 10 ayat (1) Undang-Undang No. 24 Tahun 2003 tentang Mahkamah Konstitusi jo. Putusan MK No. 006/PUU-II/2004.",
  262: "Pasal 28 ayat (3) Undang-Undang No. 18 Tahun 2003 tentang Advokat.",
  263: "Pasal 16 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Putusan Mahkamah Konstitusi No. 26/PUU-XI/2013.",
  264: "Pasal 5 ayat (1) Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Penjelasan Umum UU No. 18 Tahun 2003.",
  265: "Penjelasan Umum Alinea ke-1 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Pasal 3 huruf g KEAI 2002.",
  269: "Pasal 33 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Ketentuan Penutup Kode Etik Advokat Indonesia (KEAI) tanggal 23 Mei 2002.",
  273: "Pasal 1 angka 1 jo. Pasal 144 UU No. 5 Tahun 1986 jo. UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009 tentang PTUN.",
  285: "Pasal 1 angka 1 jo. Pasal 2 Undang-Undang No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.",
  299: "Pasal 1 angka 1 jo. Pasal 125 ayat (1) dan ayat (2) Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
  300: "Pasal 124 Undang-Undang No. 2 Tahun 2004 tentang PPHI jo. Undang-Undang No. 22 Tahun 1957.",
  303: "Pasal 55 jo. Pasal 56 Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI).",
  305: "Pasal 57 jo. Pasal 1 angka 17 Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI)."
};

for (const q of TRYOUT_2025_BANK) {
  if (tryMap[q.id]) {
    q.explanation.legalBasis = tryMap[q.id];
  }
}
fs.writeFileSync('src/data/tryOut2025Bank.ts', `import { UPAQuestion } from '../types/quiz';\n\nexport const TRYOUT_2025_BANK: UPAQuestion[] = ${JSON.stringify(TRYOUT_2025_BANK, null, 2)};\n`, 'utf8');
console.log('Saved tryOut2025Bank.ts');

// 2. Update TOAZ_PERADI_BANK
const toazMap: Record<number, string> = {
  361: "Pasal 1 angka 1 jo. Konsiderans Menimbang UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009 tentang Perubahan Atas UU No. 5 Tahun 1986 tentang PTUN.",
  383: "Pasal 125 ayat (1) dan ayat (2) Undang-Undang No. 2 Tahun 2004 tentang PPHI jo. UU No. 13 Tahun 2003 tentang Ketenagakerjaan."
};

for (const q of TOAZ_PERADI_BANK) {
  if (toazMap[q.id]) {
    q.explanation.legalBasis = toazMap[q.id];
  }
}
fs.writeFileSync('src/data/toazPeradiBank.ts', `import { UPAQuestion } from '../types/quiz';\n\nexport const TOAZ_PERADI_BANK: UPAQuestion[] = ${JSON.stringify(TOAZ_PERADI_BANK, null, 2)};\n`, 'utf8');
console.log('Saved toazPeradiBank.ts');

// 3. Update ADVANCED_UPA_BANK
const advMap: Record<number, string> = {
  400: "Pasal 56 ayat (2) dan ayat (3) jo. Pasal 57 Undang-Undang No. 24 Tahun 2003 tentang Mahkamah Konstitusi jo. UU No. 7 Tahun 2020.",
  401: "Pasal 54 Undang-Undang No. 24 Tahun 2003 tentang Mahkamah Konstitusi jo. Pasal 42 PMK No. 2 Tahun 2021 tentang Tata Beracara PUU.",
  449: "Pasal 14 ayat (1) jo. Pasal 27 Peraturan Mahkamah Konstitusi (PMK) No. 2 Tahun 2021 jo. Pasal 5 ayat (1) UU No. 48 Tahun 2009.",
  459: "Pasal 1 angka 1 jo. Pasal 34 ayat (1) Undang-Undang No. 30 Tahun 1999 tentang Arbitrase dan APS jo. Statuta Pendirian BANI 1977.",
  503: "Pasal 168 huruf c jo. Pasal 184 ayat (1) KUHAP (UU No. 8 Tahun 1981) jo. Yurisprudensi MA RI No. 1986 K/Pid/1989.",
  505: "Pasal 163 jo. Pasal 184 ayat (1) KUHAP (UU No. 8 Tahun 1981) jo. Surat Edaran Mahkamah Agung (SEMA) No. 1 Tahun 1984.",
  509: "Pasal 268 ayat (3) KUHAP (UU No. 8 Tahun 1981) jo. Putusan Mahkamah Konstitusi No. 34/PUU-XI/2013."
};

for (const q of ADVANCED_UPA_BANK) {
  if (advMap[q.id]) {
    q.explanation.legalBasis = advMap[q.id];
  }
}
fs.writeFileSync('src/data/advancedUpaBank.ts', `import { UPAQuestion } from '../types/quiz';\n\nexport const ADVANCED_UPA_BANK: UPAQuestion[] = ${JSON.stringify(ADVANCED_UPA_BANK, null, 2)};\n`, 'utf8');
console.log('Saved advancedUpaBank.ts');
