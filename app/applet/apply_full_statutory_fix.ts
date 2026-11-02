import fs from 'fs';
import path from 'path';

// 1. Update src/data/upaQuestions.ts
const upaPath = path.resolve('src/data/upaQuestions.ts');
let upaContent = fs.readFileSync(upaPath, 'utf8');

const upaReplacements: Record<number, { basis: string; summary?: string; analysis?: string }> = {
  21: {
    basis: "Pasal 33 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Lembar Pengesahan Ketentuan Penutup Kode Etik Advokat Indonesia (KEAI) tanggal 23 Mei 2002.",
    summary: "Kode Etik Advokat Indonesia (KEAI) disahkan di Jakarta pada tanggal 23 Mei 2002 oleh 7 organisasi profesi advokat.",
    analysis: "Kode Etik Advokat Indonesia (KEAI) ditetapkan dan disahkan pada tanggal 23 Mei 2002 di Jakarta oleh Komite Kerja Advokat Indonesia (KKAI) yang terdiri atas 7 organisasi advokat, dan ditegaskan keberlakuannya oleh Pasal 33 UU No. 18 Tahun 2003 tentang Advokat."
  },
  33: {
    basis: "Pasal 17 ayat (1) dan Pasal 18 ayat (1) Kode Etik Advokat Indonesia (KEAI) 2002 jo. Pasal 27 ayat (4) Undang-Undang No. 18 Tahun 2003 tentang Advokat.",
    summary: "Putusan Dewan Kehormatan Daerah belum final dan dapat diajukan banding ke Dewan Kehormatan Pusat dalam 21 hari.",
    analysis: "Berdasarkan Pasal 17 ayat (1) KEAI jo. Pasal 27 ayat (4) UU No. 18 Tahun 2003, keputusan Dewan Kehormatan Cabang/Daerah tidak bersifat final karena pihak pengadu maupun teradu berhak mengajukan upaya banding ke Dewan Kehormatan Pusat."
  },
  42: {
    basis: "Pasal 178 ayat (1) HIR (Staatsblad 1941 No. 44) / Pasal 189 ayat (1) RBg jo. Doktrin Hukum Acara Perdata Prof. Sudikno Mertokusumo.",
    summary: "Putusan condemnatoir adalah putusan yang amarnya bersifat menghukum pihak yang kalah untuk memenuhi suatu prestasi.",
    analysis: "Berdasarkan Pasal 178 ayat (1) HIR / Pasal 189 ayat (1) RBg, putusan condemnatoir memiliki amar yang menghukum Tergugat untuk melakukan atau tidak melakukan sesuatu atau membayar sejumlah uang, dan putusan ini memiliki kekuatan eksekutorial."
  },
  48: {
    basis: "Pasal 19 dan Pasal 20 ayat (2) Undang-Undang No. 48 Tahun 2009 tentang Kekuasaan Kehakiman jo. Pasal 30 ayat (1) Undang-Undang No. 14 Tahun 1985 tentang Mahkamah Agung.",
    summary: "Judex Factie adalah hakim pemeriksa fakta dan alat bukti (Pengadilan Negeri dan Pengadilan Tinggi).",
    analysis: "Hakim tingkat pertama (PN) dan tingkat banding (PT) adalah Judex Factie yang berwenang memeriksa fakta dan pembuktian secara menyeluruh. Sementara Mahkamah Agung pada tingkat kasasi adalah Judex Juris yang menguji penerapan dan penafsiran hukumnya."
  },
  58: {
    basis: "Pasal 1 angka 1 jo. Pasal 43A Undang-Undang No. 31 Tahun 1999 sebagaimana telah diubah dengan Undang-Undang No. 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi.",
    summary: "Dasar hukum Tipikor di Indonesia diatur dalam UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001.",
    analysis: "Ketentuan pidana materiil dan hukum acara khusus pemberantasan korupsi diatur dalam UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi."
  },
  63: {
    basis: "Pasal 1 angka 1 jo. Pasal 108 Undang-Undang No. 11 Tahun 2012 tentang Sistem Peradilan Pidana Anak (SPPA).",
    summary: "Sistem Peradilan Pidana Anak diatur secara khusus dalam UU No. 11 Tahun 2012.",
    analysis: "Undang-Undang No. 11 Tahun 2012 tentang Sistem Peradilan Pidana Anak (SPPA) mengatur keadilan restoratif dan diversi serta perlindungan hak anak yang berhadapan dengan hukum, mencabut UU No. 3 Tahun 1997."
  },
  68: {
    basis: "Pasal 199 ayat (1) dan ayat (2) Regulasi Pembaruan Hukum Acara Pidana jo. Pasal 203 ayat (1) KUHAP (UU No. 8 Tahun 1981).",
    summary: "Plea bargain (pengakuan bersalah) mensyaratkan terdakwa baru pertama kali berbuat, ancaman maksimal 5 tahun, dan bersedia ganti rugi.",
    analysis: "Mekanisme pengakuan bersalah (jalur khusus) mensyaratkan terdakwa mengakui tindak pidana yang ancaman hukumannya maksimal 5 tahun atau denda dan/atau bersedia membayar ganti rugi/restitusi kepada korban."
  },
  69: {
    basis: "Pasal 1 angka 1, angka 2, angka 3, dan angka 4 KUHAP (Undang-Undang No. 8 Tahun 1981) jo. Pasal 138-139 KUHAP.",
    summary: "Penyidik dan Penuntut Umum berkoordinasi dalam Sistem Peradilan Pidana Terpadu (Integrated Criminal Justice System).",
    analysis: "Berdasarkan KUHAP UU No. 8 Tahun 1981, seluruh subsistem penegak hukum (Polri, Kejaksaan, Pengadilan, Pemasyarakatan) bekerja secara terpadu melalui Sistem Peradilan Pidana Terpadu dengan asas diferensiasi fungsional."
  },
  70: {
    basis: "Pasal 5 ayat (1) Peraturan Kejaksaan RI No. 15 Tahun 2020 jo. Pasal 12 Perkapolri No. 8 Tahun 2021 jo. Pasal 109 ayat (2) KUHAP.",
    summary: "Penyelesaian melalui mekanisme keadilan restoratif (Restorative Justice) menjadi dasar penghentian penyidikan (SP3).",
    analysis: "Berdasarkan Perkapolri No. 8 Tahun 2021 dan Perja No. 15 Tahun 2020, tercapainya kesepakatan damai dan pemulihan hak korban melalui keadilan restoratif merupakan dasar penerbitan SP3 demi kepastian dan keadilan hukum."
  },
  73: {
    basis: "Pasal 168 huruf c jo. Pasal 184 ayat (1) KUHAP (UU No. 8 Tahun 1981) jo. Yurisprudensi Mahkamah Agung RI No. 1986 K/Pid/1989.",
    summary: "Saksi mahkota diperiksa untuk mengungkap keterlibatan terdakwa lain dalam perkara pidana penyertaan bersplit.",
    analysis: "Berdasarkan Yurisprudensi MA No. 1986 K/Pid/1989 jo. KUHAP, saksi mahkota sah dihadirkan dari berkas perkara splitsing untuk memberikan kesaksian guna mengungkap keterlibatan terdakwa lain jika pembuktian minim."
  },
  74: {
    basis: "Pasal 5 ayat (1) huruf a dan Pasal 10 ayat (1) Undang-Undang No. 13 Tahun 2006 tentang Perlindungan Saksi dan Korban jo. UU No. 31 Tahun 2014.",
    summary: "Saksi dan korban berhak mendapatkan pelindungan fisik, psikis, dan hukum dari LPSK.",
    analysis: "Berdasarkan Pasal 5 ayat (1) jo. Pasal 10 ayat (1) UU No. 13 Tahun 2006 jo. UU No. 31 Tahun 2014, saksi, korban, pelapor, dan saksi pelaku berhak atas perlindungan menyeluruh dari ancaman fisik, intimidasi, dan gugatan hukum balasan."
  },
  83: {
    basis: "Pasal 54 jo. Pasal 64 Undang-Undang No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama jo. Pasal 195 ayat (1) HIR / Pasal 206 ayat (1) RBg.",
    summary: "Penetapan P3HP adalah produk peradilan voluntair yang tidak memiliki amar condemnatoir sehingga tidak dapat dieksekusi paksa.",
    analysis: "Berdasarkan UU No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009, penetapan ahli waris/P3HP adalah perkara voluntair (permohonan) yang hanya bersifat deklaratif, bukan putusan sengketa yang memuat amar menghukum (condemnatoir), sehingga tidak dapat dimohonkan eksekusi riil atau lelang paksa."
  },
  93: {
    basis: "Pasal 1 angka 1 jo. Pasal 55 dan Pasal 125 ayat (1) Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI).",
    summary: "Penyelesaian perselisihan hubungan industrial diatur dalam UU No. 2 Tahun 2004.",
    analysis: "Penyelesaian perselisihan hak, kepentingan, pemutusan hubungan kerja (PHK), dan antar-serikat pekerja diatur secara komprehensif dalam UU No. 2 Tahun 2004 tentang PPHI."
  },
  110: {
    basis: "Pasal 1 angka 1 jo. Pasal 144 Undang-Undang No. 5 Tahun 1986 jo. UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009 tentang Peradilan Tata Usaha Negara.",
    summary: "Peradilan Tata Usaha Negara diatur dalam UU No. 5 Tahun 1986 jo. UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009.",
    analysis: "Undang-Undang No. 5 Tahun 1986 merupakan dasar pembentukan PTUN, yang kemudian diperbarui oleh UU No. 9 Tahun 2004 dan pembaruan kedua dengan UU No. 51 Tahun 2009."
  }
};

for (const [idStr, data] of Object.entries(upaReplacements)) {
  const id = Number(idStr);
  const regex = new RegExp(`id:\\s*${id},[\\s\\S]*?legalBasis:\\s*'([^']*)'`);
  upaContent = upaContent.replace(regex, (match, oldBasis) => {
    return match.replace(`legalBasis: '${oldBasis}'`, `legalBasis: '${data.basis}'`);
  });
}
fs.writeFileSync(upaPath, upaContent, 'utf8');
console.log('Updated upaQuestions.ts successfully!');

// 2. Update authenticUpaQuestions.ts (180, 181)
const authPath = path.resolve('src/data/authenticUpaQuestions.ts');
let authContent = fs.readFileSync(authPath, 'utf8');
authContent = authContent.replace(
  /id:\s*180,[\s\S]*?legalBasis:\s*'([^']*)'/,
  (match, oldBasis) => match.replace(`legalBasis: '${oldBasis}'`, `legalBasis: 'Pasal 8 angka 3 Reglement op de Rechtsvordering (Rv) jo. Pasal 120 jo. Pasal 121 HIR (Staatsblad 1941 No. 44).'`)
);
authContent = authContent.replace(
  /id:\s*181,[\s\S]*?legalBasis:\s*'([^']*)'/,
  (match, oldBasis) => match.replace(`legalBasis: '${oldBasis}'`, `legalBasis: 'Pasal 178 ayat (1) HIR / Pasal 189 ayat (1) RBg jo. Pasal 163 HIR / Pasal 283 RBg / Pasal 1865 KUHPerdata.'`)
);
fs.writeFileSync(authPath, authContent, 'utf8');
console.log('Updated authenticUpaQuestions.ts successfully!');

// 3. Update additionalUpaQuestions.ts (123)
const addPath = path.resolve('src/data/additionalUpaQuestions.ts');
let addContent = fs.readFileSync(addPath, 'utf8');
addContent = addContent.replace(
  /id:\s*123,[\s\S]*?legalBasis:\s*'([^']*)'/,
  (match, oldBasis) => match.replace(`legalBasis: '${oldBasis}'`, `legalBasis: 'Pasal 125 ayat (2) jo. Pasal 136 HIR / Pasal 149 ayat (2) jo. Pasal 162 RBg jo. Yurisprudensi MA RI No. 582 K/Sip/1973.'`)
);
fs.writeFileSync(addPath, addContent, 'utf8');
console.log('Updated additionalUpaQuestions.ts successfully!');

// 4. Update tryOut2025Bank.ts (207, 235, 237, 245, 252, 258, 260, 262, 263, 264, 265, 269, 273, 285, 299, 300, 303, 305)
const try2025Path = path.resolve('src/data/tryOut2025Bank.ts');
let try2025Content = fs.readFileSync(try2025Path, 'utf8');

const try2025Replacements: Record<number, string> = {
  207: "Pasal 1 angka 1 jo. Pasal 284 ayat (1) dan Pasal 285 Undang-Undang No. 8 Tahun 1981 tentang KUHAP.",
  235: "Pasal 8 angka 3 Reglement op de Rechtsvordering (Rv) jo. Putusan Mahkamah Agung RI No. 547 K/Sip/1972.",
  237: "Pasal 163 HIR (Staatsblad 1941 No. 44) / Pasal 283 RBg jo. Pasal 1865 KUHPerdata jo. Putusan MA RI No. 556 K/Sip/1971.",
  245: "Pasal 195 ayat (6) HIR (Staatsblad 1941 No. 44) jo. Pasal 206 ayat (6) RBg jo. Pasal 378 - 384 Rv.",
  252: "Pasal 1 angka 1 jo. Pasal 36 Undang-Undang No. 18 Tahun 2003 tentang Advokat.",
  258: "Pasal 32 ayat (1) Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Piagam Deklarasi PERADI tanggal 21 Desember 2004.",
  260: "Pasal 24C ayat (1) UUD 1945 jo. Pasal 10 ayat (1) UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi jo. Putusan MK No. 006/PUU-II/2004.",
  262: "Pasal 28 ayat (3) Undang-Undang No. 18 Tahun 2003 tentang Advokat.",
  263: "Pasal 16 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Putusan Mahkamah Konstitusi No. 26/PUU-XI/2013.",
  264: "Pasal 5 ayat (1) Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Penjelasan Umum UU No. 18 Tahun 2003.",
  265: "Penjelasan Umum Alinea ke-1 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Pasal 3 huruf g KEAI 2002.",
  269: "Pasal 33 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Ketentuan Penutup Kode Etik Advokat Indonesia (KEAI) tanggal 23 Mei 2002.",
  273: "Pasal 1 angka 1 jo. Pasal 144 UU No. 5 Tahun 1986 jo. UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009 tentang PTUN.",
  285: "Pasal 1 angka 1 jo. Pasal 2 Undang-Undang No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.",
  299: "Pasal 1 angka 1 jo. Pasal 125 ayat (1) Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
  300: "Pasal 124 Undang-Undang No. 2 Tahun 2004 tentang PPHI jo. UU No. 22 Tahun 1957.",
  303: "Pasal 55 jo. Pasal 56 Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI).",
  305: "Pasal 57 jo. Pasal 1 angka 17 Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI)."
};

for (const [idStr, basis] of Object.entries(try2025Replacements)) {
  const id = Number(idStr);
  const regex = new RegExp(`id:\\s*${id},[\\s\\S]*?legalBasis:\\s*'([^']*)'`);
  try2025Content = try2025Content.replace(regex, (match, oldBasis) => {
    return match.replace(`legalBasis: '${oldBasis}'`, `legalBasis: '${basis}'`);
  });
}
fs.writeFileSync(try2025Path, try2025Content, 'utf8');
console.log('Updated tryOut2025Bank.ts successfully!');

// 5. Update toazPeradiBank.ts (311, 331, 333, 361, 383, 386)
const toazPath = path.resolve('src/data/toazPeradiBank.ts');
let toazContent = fs.readFileSync(toazPath, 'utf8');

const toazReplacements: Record<number, string> = {
  311: "Pasal 1 angka 1 jo. Pasal 284 ayat (1) dan Pasal 285 Undang-Undang No. 8 Tahun 1981 tentang KUHAP.",
  331: "Penjelasan Umum Alinea ke-1 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Pasal 3 huruf g KEAI 2002.",
  333: "Pasal 1 angka 1 jo. Pasal 36 Undang-Undang No. 18 Tahun 2003 tentang Advokat.",
  361: "Konsiderans Menimbang UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009 tentang Peradilan Tata Usaha Negara.",
  383: "Konsiderans Menimbang huruf b dan c UU No. 2 Tahun 2004 jo. UU No. 13 Tahun 2003 tentang Ketenagakerjaan.",
  386: "Pasal 1 angka 1 jo. Pasal 2 Undang-Undang No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama."
};

for (const [idStr, basis] of Object.entries(toazReplacements)) {
  const id = Number(idStr);
  const regex = new RegExp(`id:\\s*${id},[\\s\\S]*?legalBasis:\\s*'([^']*)'`);
  toazContent = toazContent.replace(regex, (match, oldBasis) => {
    return match.replace(`legalBasis: '${oldBasis}'`, `legalBasis: '${basis}'`);
  });
}
fs.writeFileSync(toazPath, toazContent, 'utf8');
console.log('Updated toazPeradiBank.ts successfully!');

// 6. Update advancedUpaBank.ts (400, 401, 449, 459, 503, 505, 509)
const advPath = path.resolve('src/data/advancedUpaBank.ts');
let advContent = fs.readFileSync(advPath, 'utf8');

const advReplacements: Record<number, string> = {
  400: "Pasal 56 ayat (2) dan ayat (3) jo. Pasal 57 Undang-Undang No. 24 Tahun 2003 tentang Mahkamah Konstitusi jo. UU No. 7 Tahun 2020.",
  401: "Pasal 54 Undang-Undang No. 24 Tahun 2003 tentang Mahkamah Konstitusi jo. Pasal 42 PMK No. 2 Tahun 2021.",
  449: "Pasal 14 ayat (1) jo. Pasal 27 PMK No. 2 Tahun 2021 jo. Pasal 5 ayat (1) UU No. 48 Tahun 2009 tentang Kekuasaan Kehakiman.",
  459: "Pasal 1 angka 1 jo. Pasal 34 ayat (1) Undang-Undang No. 30 Tahun 1999 tentang Arbitrase dan APS jo. Statuta BANI 1977.",
  503: "Pasal 168 huruf c jo. Pasal 184 ayat (1) KUHAP (UU No. 8 Tahun 1981) jo. Yurisprudensi MA RI No. 1986 K/Pid/1989.",
  505: "Pasal 163 jo. Pasal 184 ayat (1) KUHAP (UU No. 8 Tahun 1981) jo. Surat Edaran Mahkamah Agung (SEMA) No. 1 Tahun 1984.",
  509: "Pasal 268 ayat (3) KUHAP (UU No. 8 Tahun 1981) jo. Putusan Mahkamah Konstitusi No. 34/PUU-XI/2013."
};

for (const [idStr, basis] of Object.entries(advReplacements)) {
  const id = Number(idStr);
  const regex = new RegExp(`id:\\s*${id},[\\s\\S]*?legalBasis:\\s*'([^']*)'`);
  advContent = advContent.replace(regex, (match, oldBasis) => {
    return match.replace(`legalBasis: '${oldBasis}'`, `legalBasis: '${basis}'`);
  });
}
fs.writeFileSync(advPath, advContent, 'utf8');
console.log('Updated advancedUpaBank.ts successfully!');

// 7. Update categoryExpansionBank.ts (524)
const expPath = path.resolve('src/data/categoryExpansionBank.ts');
let expContent = fs.readFileSync(expPath, 'utf8');

expContent = expContent.replace(
  /id:\s*524,[\s\S]*?legalBasis:\s*'([^']*)'/,
  (match, oldBasis) => match.replace(`legalBasis: '${oldBasis}'`, `legalBasis: 'Pasal 107 jo. Pasal 100 Undang-Undang No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.'`)
);
fs.writeFileSync(expPath, expContent, 'utf8');
console.log('Updated categoryExpansionBank.ts successfully!');
