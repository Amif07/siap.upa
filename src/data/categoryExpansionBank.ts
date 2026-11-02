/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UPAQuestion } from '../types/quiz';

/**
 * Bank Soal Penguatan Materi Khusus UPA:
 * - Hukum Acara Peradilan Agama (KHI & UU Peradilan Agama)
 * - Hukum Acara Mahkamah Konstitusi (UU MK & PMK)
 * - Hukum Acara Arbitrase & Alternatif Penyelesaian Sengketa (UU 30/1999 & PERMA Mediasi)
 * - Hukum Acara Peradilan Tata Usaha Negara (UU PTUN)
 * - Hukum Acara Pengadilan Hubungan Industrial (UU 2/2004 PPHI)
 */
export const CATEGORY_EXPANSION_BANK: UPAQuestion[] = [
  // ==========================================
  // --- HUKUM ACARA PERADILAN AGAMA (501 - 515) ---
  // ==========================================
  {
    id: 501,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Kompetensi Absolut Pengadilan Agama',
    question: 'Berdasarkan Pasal 49 UU No. 3 Tahun 2006 tentang Perubahan atas UU No. 7 Tahun 1989 tentang Peradilan Agama, bidang sengketa baru yang menjadi kewenangan absolut Pengadilan Agama adalah:',
    options: [
      { key: 'A', text: 'Sengketa perbankan konvensional yang melibatkan nasabah beragama Islam' },
      { key: 'B', text: 'Ekonomi syariah, termasuk perbankan syariah, asuransi syariah, dan obligasi syariah' },
      { key: 'C', text: 'Tindak pidana penistaan agama yang dilakukan oleh umat Islam' },
      { key: 'D', text: 'Sengketa tanah adat yang belum bersertifikat milik masyarakat Muslim' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Kewenangan absolut Pengadilan Agama diperluas mencakup sengketa ekonomi syariah.',
      legalBasis: 'Pasal 49 huruf i UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.',
      analysis: 'Amandemen UU Peradilan Agama melalui UU No. 3 Tahun 2006 secara eksplisit menambahkan kewenangan mengadili sengketa di bidang Ekonomi Syariah, yang meliputi bank syariah, lembaga keuangan mikro syariah, asuransi syariah, reasuransi syariah, reksadana syariah, obligasi syariah, dan bisnis syariah lainnya.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 502,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Kompetensi Relatif Cerai Talak',
    question: 'Seorang suami bertempat tinggal di Kota Bandung bermaksud menceraikan istrinya yang bertempat tinggal di Kota Surabaya. Di Pengadilan Agama manakah permohonan cerai talak harus diajukan?',
    options: [
      { key: 'A', text: 'Pengadilan Agama Kota Bandung tempat kediaman suami (Pemohon)' },
      { key: 'B', text: 'Pengadilan Agama Kota Surabaya tempat kediaman istri (Termohon)' },
      { key: 'C', text: 'Bebas memilih antara Pengadilan Agama Bandung atau Surabaya' },
      { key: 'D', text: 'Pengadilan Agama tempat perkawinan mereka dahulu dilangsungkan' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Permohonan cerai talak diajukan kepada Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Termohon.',
      legalBasis: 'Pasal 66 ayat (2) UU No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.',
      analysis: 'Pasal 66 ayat (2) UU Peradilan Agama menegaskan bahwa permohonan cerai talak diajukan oleh suami kepada Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Termohon (istri), kecuali apabila Termohon meninggalkan tempat kediaman bersama tanpa izin Pemohon.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 503,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Kompetensi Relatif Cerai Gugat',
    question: 'Seorang istri bermaksud mengajukan gugatan perceraian (cerai gugat) terhadap suaminya. Istri berdomisili di Jakarta Selatan sedangkan suami bertempat tinggal di Yogyakarta. Pengadilan Agama yang berwenang memeriksa gugatan tersebut adalah:',
    options: [
      { key: 'A', text: 'Pengadilan Agama Jakarta Selatan (tempat kediaman Penggugat)' },
      { key: 'B', text: 'Pengadilan Agama Kota Yogyakarta (tempat kediaman Tergugat)' },
      { key: 'C', text: 'Pengadilan Tinggi Agama DKI Jakarta' },
      { key: 'D', text: 'Pengadilan Negeri Jakarta Selatan secara perdata umum' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Gugatan perceraian oleh istri diajukan ke Pengadilan Agama tempat kediaman Penggugat.',
      legalBasis: 'Pasal 73 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 132 KHI.',
      analysis: 'Berdasarkan Pasal 73 ayat (1) UU No. 7 Tahun 1989, gugatan perceraian diajukan oleh istri atau kuasanya kepada Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Penggugat, kecuali apabila Penggugat dengan sengaja meninggalkan tempat kediaman bersama tanpa izin Tergugat.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 504,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Kedaluwarsa Ikrar Talak',
    question: 'Apabila putusan permohonan cerai talak telah berkekuatan hukum tetap dan Pengadilan Agama telah memanggil Pemohon untuk mengikrarkan talak, berapa lama batas waktu bagi Pemohon sebelum hak mengikrarkan talak gugur?',
    options: [
      { key: 'A', text: '30 hari terhitung sejak penetapan hari sidang ikrar talak' },
      { key: 'B', text: '60 hari terhitung sejak putusan berkekuatan hukum tetap' },
      { key: 'C', text: '6 (enam) bulan terhitung sejak hari sidang penyaksian ikrar talak ditetapkan' },
      { key: 'D', text: '1 (satu) tahun sejak putusan inkracht' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Kewenangan mengikrarkan talak gugur jika tidak diucapkan dalam 6 bulan sejak hari sidang ikrar talak.',
      legalBasis: 'Pasal 70 ayat (6) UU No. 7 Tahun 1989 tentang Peradilan Agama.',
      analysis: 'Pasal 70 ayat (6) UU No. 7 Tahun 1989 menentukan bahwa jika suami tidak mengucapkan ikrar talak dalam tenggang waktu 6 (enam) bulan terhitung sejak hari sidang penyaksian ikrar talak yang telah ditetapkan, maka hak suami untuk mengikrarkan talak gugur dan ikatan perkawinan tetap utuh.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 505,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Hadhanah (Hak Asuh Anak)',
    question: 'Menurut Pasal 105 Kompilasi Hukum Islam (KHI), dalam hal terjadinya perceraian, pemeliharaan anak yang belum berumur 12 tahun (belum mumayyiz) adalah:',
    options: [
      { key: 'A', text: 'Hak sepenuhnya bagi ayah karena kewajiban memberi nafkah' },
      { key: 'B', text: 'Hak ibunya, kecuali apabila ibunya terbukti tidak cakap atau berkelakuan buruk' },
      { key: 'C', text: 'Ditentukan oleh undian di depan majelis hakim' },
      { key: 'D', text: 'Wajib diserahkan ke panti asuhan di bawah pengawasan dinas sosial' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Pemeliharaan anak yang belum mumayyiz adalah hak ibunya.',
      legalBasis: 'Pasal 105 huruf a Kompilasi Hukum Islam (KHI).',
      analysis: 'Pasal 105 huruf a KHI mengatur bahwa pemeliharaan anak yang belum mumayyiz atau belum berumur 12 tahun adalah hak ibunya. Setelah anak tersebut mumayyiz, anak tersebut berhak memilih untuk diasuh oleh ayah atau ibunya.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 506,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Bagian Waris Istri',
    question: 'Seorang pewaris pria Muslim meninggal dunia meninggalkan seorang istri dan 2 orang anak kandung. Berapakah bagian warisan yang diperoleh istri menurut Hukum Waris Islam (KHI)?',
    options: [
      { key: 'A', text: '1/2 (setengah) bagian' },
      { key: 'B', text: '1/4 (seperempat) bagian' },
      { key: 'C', text: '1/8 (seperdelapan) bagian' },
      { key: 'D', text: '1/3 (sepertiga) bagian' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Istri mendapat 1/8 bagian jika pewaris meninggalkan anak atau cucu.',
      legalBasis: 'Pasal 180 Kompilasi Hukum Islam (KHI).',
      analysis: 'Berdasarkan Pasal 180 KHI, janda mendapat seperempat bagian bila pewaris tidak meninggalkan anak, dan mendapat seperdelapan (1/8) bagian bila pewaris meninggalkan anak.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 507,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Bagian Waris Suami',
    question: 'Seorang wanita Muslim meninggal dunia tanpa meninggalkan anak kandung maupun keturunan. Suami yang ditinggalkan berhak menerima bagian warisan sebesar:',
    options: [
      { key: 'A', text: '1/2 (setengah) bagian' },
      { key: 'B', text: '1/4 (seperempat) bagian' },
      { key: 'C', text: '2/3 (dua pertiga) bagian' },
      { key: 'D', text: 'Seluruh sisa harta tanpa batas' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Duda mendapat separuh bagian bila pewaris tidak meninggalkan anak.',
      legalBasis: 'Pasal 179 Kompilasi Hukum Islam (KHI).',
      analysis: 'Pasal 179 KHI mengatur: Duda mendapat separuh (1/2) bagian bila pewaris tidak meninggalkan anak, dan bila pewaris meninggalkan anak, maka duda mendapat seperempat (1/4) bagian.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 508,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Harta Bersama Pasca Cerai',
    question: 'Berdasarkan Pasal 97 Kompilasi Hukum Islam (KHI), janda atau duda cerai masing-masing berhak atas harta bersama sebanyak:',
    options: [
      { key: 'A', text: '1/3 untuk istri dan 2/3 untuk suami' },
      { key: 'B', text: '1/2 (seperdua) dari harta bersama sepanjang tidak ditentukan lain dalam perjanjian perkawinan' },
      { key: 'C', text: 'Sepenuhnya menjadi milik pihak yang tidak mengajukan permohonan cerai' },
      { key: 'D', text: 'Dibagikan seluruhnya kepada anak-anak kandung' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Masing-masing janda atau duda berhak 1/2 dari harta bersama.',
      legalBasis: 'Pasal 97 Kompilasi Hukum Islam (KHI).',
      analysis: 'Pasal 97 KHI menyatakan: Janda atau duda cerai masing-masing berhak seperdua (1/2) dari harta bersama sepanjang tidak ditentukan lain dalam perjanjian perkawinan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 509,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Wasiat Wajibah',
    question: 'Menurut Pasal 209 KHI, terhadap anak angkat yang tidak menerima wasiat dari orang tua angkatnya, atau orang tua angkat yang tidak menerima wasiat dari anak angkatnya, diberi wasiat wajibah sebanyak-banyaknya:',
    options: [
      { key: 'A', text: '1/2 (setengah) dari harta peninggalan' },
      { key: 'B', text: '1/3 (sepertiga) dari harta warisan' },
      { key: 'C', text: '1/4 (seperempat) dari harta warisan' },
      { key: 'D', text: 'Sama besar dengan anak kandung laki-laki tertua' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Besarnya wasiat wajibah untuk anak angkat atau orang tua angkat maksimal 1/3 bagian.',
      legalBasis: 'Pasal 209 ayat (1) dan (2) Kompilasi Hukum Islam (KHI).',
      analysis: 'Pasal 209 ayat (2) KHI menetapkan bahwa terhadap anak angkat yang tidak menerima wasiat diberi wasiat wajibah sebanyak-banyaknya 1/3 (sepertiga) dari harta warisan orang tua angkatnya.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 510,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Itsbat Nikah',
    question: 'Permohonan pengesahan nikah (Itsbat Nikah) ke Pengadilan Agama yang diajukan oleh suami dan istri secara bersama-sama merupakan bentuk perkara:',
    options: [
      { key: 'A', text: 'Gugatan kontensius (contentiosa) yang menghasilkan putusan vonnis' },
      { key: 'B', text: 'Permohonan voluntair (jurisdictio voluntaria) yang menghasilkan penetapan (beschikking)' },
      { key: 'C', text: 'Gugatan perlawanan pihak ketiga (derden verzet)' },
      { key: 'D', text: 'Permohonan peninjauan kembali khusus perkawinan' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Permohonan itsbat nikah sepihak/bersama adalah perkara voluntair berwujud penetapan.',
      legalBasis: 'Pasal 7 ayat (2) dan (3) KHI jo. Pedoman Teknis Administrasi Peradilan Agama MA RI.',
      analysis: 'Itsbat nikah yang diajukan oleh suami dan istri secara bersama-sama tidak terdapat pihak lawan (tanpa sengketa), sehingga diperiksa sebagai perkara voluntair dan produk hukumnya berupa Penetapan (Beschikking).'
    },
    difficulty: 'Sedang'
  },

  // ========================================================
  // --- HUKUM ACARA MAHKAMAH KONSTITUSI (511 - 522) ---
  // ========================================================
  {
    id: 511,
    category: 'Hukum Acara Mahkamah Konstitusi',
    topicTag: 'Kewenangan Mahkamah Konstitusi',
    question: 'Berdasarkan Pasal 24C ayat (1) UUD 1945 jo. Pasal 10 ayat (1) UU No. 24 Tahun 2003, Mahkamah Konstitusi berwenang mengadili pada tingkat pertama dan terakhir yang putusannya bersifat final untuk hal berikut, KECUALI:',
    options: [
      { key: 'A', text: 'Menguji undang-undang terhadap Undang-Undang Dasar Negara Republik Indonesia Tahun 1945' },
      { key: 'B', text: 'Memutus sengketa kewenangan lembaga negara yang kewenangannya diberikan oleh UUD 1945' },
      { key: 'C', text: 'Menguji peraturan pemerintah dan peraturan perundang-undangan di bawah undang-undang terhadap undang-undang' },
      { key: 'D', text: 'Memutus pembubaran partai politik dan memutus perselisihan tentang hasil pemilihan umum' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Pengujian peraturan di bawah undang-undang adalah kewenangan Mahkamah Agung, bukan MK.',
      legalBasis: 'Pasal 24A ayat (1) dan Pasal 24C ayat (1) UUD 1945.',
      analysis: 'Pengujian peraturan perundang-undangan di bawah undang-undang terhadap undang-undang (judicial review peraturan di bawah UU) merupakan kewenangan konstitusional Mahkamah Agung (MA) berdasarkan Pasal 24A ayat (1) UUD 1945, bukan kewenangan Mahkamah Konstitusi.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 512,
    category: 'Hukum Acara Mahkamah Konstitusi',
    topicTag: 'Legal Standing Pemohon PUU',
    question: 'Menurut Pasal 51 ayat (1) UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi, pihak yang dapat menjadi Pemohon dalam perkara pengujian undang-undang (PUU) adalah pihak yang menganggap hak dan/atau kewenangan konstitusionalnya dirugikan oleh berlakunya undang-undang, yaitu:',
    options: [
      { key: 'A', text: 'Hanya partai politik yang memiliki kursi di DPR RI' },
      { key: 'B', text: 'Perorangan WNI, kesatuan masyarakat hukum adat, badan hukum publik/privat, atau lembaga negara' },
      { key: 'C', text: 'Khusus advokat yang terdaftar di Mahkamah Agung' },
      { key: 'D', text: 'Warga negara asing yang berdomisili sah di Indonesia' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Pemohon PUU meliputi perorangan WNI, kesatuan masyarakat adat, badan hukum, dan lembaga negara.',
      legalBasis: 'Pasal 51 ayat (1) UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi.',
      analysis: 'Pasal 51 ayat (1) UU MK secara limitatif merumuskan Pemohon adalah: a. perorangan warga negara Indonesia; b. kesatuan masyarakat hukum adat sepanjang masih hidup dan sesuai perkembangan; c. badan hukum publik atau badan hukum privat; atau d. lembaga negara.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 513,
    category: 'Hukum Acara Mahkamah Konstitusi',
    topicTag: 'Sifat Putusan MK',
    question: 'Putusan Mahkamah Konstitusi memperoleh kekuatan hukum tetap sejak selesai diucapkan dalam sidang pleno terbuka untuk umum dan bersifat final and binding, yang bermakna:',
    options: [
      { key: 'A', text: 'Masih dapat diajukan kasasi ke Mahkamah Agung dalam tenggang waktu 14 hari' },
      { key: 'B', text: 'Langsung mengikat seluruh organ negara dan warga negara serta tidak ada upaya hukum apa pun terhadapnya' },
      { key: 'C', text: 'Dapat dibatalkan melalui penetapan Presiden dalam keadaan darurat' },
      { key: 'D', text: 'Wajib mendapatkan ratifikasi terlebih dahulu dari Dewan Perwakilan Rakyat' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Putusan MK bersifat final, mengikat secara hukum (erga omnes), dan tidak ada upaya hukum lanjutan.',
      legalBasis: 'Pasal 24C ayat (1) UUD 1945 jo. Pasal 10 ayat (1) UU No. 24 Tahun 2003.',
      analysis: 'Sifat final and binding putusan MK mengandung arti bahwa putusan tersebut langsung berkekuatan hukum tetap seketika diucapkan dan tidak terbuka upaya hukum biasa maupun luar biasa (seperti banding, kasasi, atau peninjauan kembali).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 514,
    category: 'Hukum Acara Mahkamah Konstitusi',
    topicTag: 'Komposisi Majelis Hakim MK',
    question: 'Dalam memeriksa perkara di Mahkamah Konstitusi, pemeriksaan pendahuluan dilakukan oleh Panel Hakim yang terdiri dari sekurang-kurangnya berapa orang Hakim Konstitusi?',
    options: [
      { key: 'A', text: '1 (satu) orang hakim tunggal' },
      { key: 'B', text: '3 (tiga) orang Hakim Konstitusi' },
      { key: 'C', text: '5 (lima) orang Hakim Konstitusi' },
      { key: 'D', text: '9 (sembilan) orang Hakim Konstitusi' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Pemeriksaan pendahuluan di MK dilakukan oleh Panel Hakim beranggotakan 3 orang hakim konstitusi.',
      legalBasis: 'Pasal 40 ayat (1) UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi.',
      analysis: 'Berdasarkan Pasal 40 ayat (1) UU MK, Mahkamah Konstitusi memeriksa, mengadili, dan memutus dalam sidang pleno dengan 9 orang hakim konstitusi, kecuali dalam keadaan luar biasa dengan 7 orang. Namun untuk pemeriksaan pendahuluan dapat dibentuk Panel Hakim yang terdiri dari sekurang-kurangnya 3 (tiga) orang Hakim Konstitusi.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 515,
    category: 'Hukum Acara Mahkamah Konstitusi',
    topicTag: 'Amar Putusan Tidak Dapat Diterima (NO)',
    question: 'Dalam perkara pengujian undang-undang di Mahkamah Konstitusi, apabila Pemohon tidak memiliki kedudukan hukum (legal standing) atau permohonan kabur (obscuur libel), maka amar putusan Mahkamah Konstitusi berbunyi:',
    options: [
      { key: 'A', text: 'Permohonan Pemohon ditolak untuk seluruhnya' },
      { key: 'B', text: 'Permohonan Pemohon dikabulkan bersyarat' },
      { key: 'C', text: 'Permohonan Pemohon tidak dapat diterima (niet ontvankelijke verklaard)' },
      { key: 'D', text: 'Permohonan Pemohon gugur demi hukum' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Jika syarat formil/legal standing tidak terpenuhi, amar putusan MK adalah Tidak Dapat Diterima.',
      legalBasis: 'Pasal 56 ayat (1) UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi.',
      analysis: 'Pasal 56 ayat (1) UU MK mengatur bahwa dalam hal Pemohon dan/atau permohonannya tidak memenuhi syarat formil sebagaimana dimaksud dalam Pasal 50 dan Pasal 51 (termasuk legal standing), amar putusan menyatakan permohonan tidak dapat diterima (NO).'
    },
    difficulty: 'Mudah'
  },

  // ========================================================
  // --- HUKUM ACARA ARBITRASE & APS (516 - 525) ---
  // ========================================================
  {
    id: 516,
    category: 'Hukum Acara Arbitrase & APS',
    topicTag: 'Klausula Arbitrase Menghapus Wewenang PN',
    question: 'Berdasarkan Pasal 3 jo. Pasal 11 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan Alternatif Penyelesaian Sengketa, adanya perjanjian arbitrase tertulis antara para pihak mengakibatkan:',
    options: [
      { key: 'A', text: 'Pengadilan Negeri tetap berwenang mengadili sengketa apabila salah satu pihak menolak arbitrase' },
      { key: 'B', text: 'Pengadilan Negeri tidak berwenang untuk mengadili sengketa para pihak yang telah terikat dalam perjanjian arbitrase' },
      { key: 'C', text: 'Putusan arbitrase harus diperiksa ulang dari awal oleh Pengadilan Negeri' },
      { key: 'D', text: 'Perkara harus dilimpahkan ke Pengadilan Tinggi Tata Usaha Negara' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Adanya klausula arbitrase meniadakan kewenangan absolut Pengadilan Negeri.',
      legalBasis: 'Pasal 3 jo. Pasal 11 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.',
      analysis: 'Pasal 3 UU No. 30 Tahun 1999 menegaskan bahwa Pengadilan Negeri tidak berwenang untuk mengadili sengketa para pihak yang telah terikat dalam perjanjian arbitrase. Pasal 11 ayat (1) menegaskan kompetensi absolut arbitrase dan PN wajib menolak sengketa tersebut.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 517,
    category: 'Hukum Acara Arbitrase & APS',
    topicTag: 'Pendaftaran Putusan Arbitrase Nasional',
    question: 'Dalam tenggang waktu berapa harikah lembar asli atau salinan otentik putusan arbitrase nasional wajib didaftarkan dan diserahkan oleh arbiter ke Kepaniteraan Pengadilan Negeri terhitung sejak putusan diucapkan?',
    options: [
      { key: 'A', text: '14 (empat belas) hari' },
      { key: 'B', text: '30 (tiga puluh) hari' },
      { key: 'C', text: '60 (enam puluh) hari' },
      { key: 'D', text: '90 (sembilan puluh) hari' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Putusan arbitrase nasional wajib diserahkan dan didaftarkan ke Panitera PN paling lambat 30 hari.',
      legalBasis: 'Pasal 59 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.',
      analysis: 'Pasal 59 ayat (1) UU No. 30 Tahun 1999 menentukan bahwa dalam waktu paling lama 30 (tiga puluh) hari terhitung sejak tanggal putusan diucapkan, lembar asli atau salinan autentik putusan arbitrase diserahkan dan didaftarkan oleh arbiter atau kuasanya kepada Panitera Pengadilan Negeri.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 518,
    category: 'Hukum Acara Arbitrase & APS',
    topicTag: 'Eksekusi Arbitrase Internasional',
    question: 'Pengadilan manakah yang berwenang memberikan perintah pelaksanaan (Exequatur) terhadap putusan Arbitrase Internasional agar dapat dilaksanakan di Indonesia?',
    options: [
      { key: 'A', text: 'Pengadilan Negeri di wilayah domisili Tergugat' },
      { key: 'B', text: 'Ketua Pengadilan Negeri Jakarta Pusat' },
      { key: 'C', text: 'Ketua Mahkamah Agung Republik Indonesia' },
      { key: 'D', text: 'Kementerian Hukum dan Hak Asasi Manusia' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Perintah pelaksanaan (eksekuatur) putusan arbitrase internasional adalah wewenang Ketua PN Jakarta Pusat.',
      legalBasis: 'Pasal 65 jo. Pasal 66 huruf d UU No. 30 Tahun 1999 tentang Arbitrase dan APS.',
      analysis: 'Berdasarkan Pasal 65 UU No. 30 Tahun 1999, yang berwenang menangani masalah pengakuan dan pelaksanaan Putusan Arbitrase Internasional adalah Pengadilan Negeri Jakarta Pusat, di mana permohonan pelaksanaan diajukan kepada Ketua Pengadilan Negeri Jakarta Pusat.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 519,
    category: 'Hukum Acara Arbitrase & APS',
    topicTag: 'Pembatalan Putusan Arbitrase',
    question: 'Berdasarkan Pasal 70 UU No. 30 Tahun 1999, permohonan pembatalan putusan arbitrase dapat diajukan kepada Pengadilan Negeri hanya apabila putusan tersebut diduga mengandung unsur berikut, KECUALI:',
    options: [
      { key: 'A', text: 'Surat atau dokumen yang diajukan dalam pemeriksaan diakui palsu atau dinyatakan palsu' },
      { key: 'B', text: 'Setelah putusan diambil, ditemukan dokumen yang bersifat menentukan yang disembunyikan pihak lawan' },
      { key: 'C', text: 'Putusan diambil dari hasil tipu muslihat yang dilakukan oleh salah satu pihak dalam pemeriksaan sengketa' },
      { key: 'D', text: 'Pertimbangan hukum arbiter dianggap salah menerapkan pasal hukum materiil perdata oleh pihak yang kalah' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Pembatalan arbitrase bersifat limitatif pada alasan tipu muslihat, pemalsuan, atau dokumen disembunyikan.',
      legalBasis: 'Pasal 70 UU No. 30 Tahun 1999 tentang Arbitrase dan APS.',
      analysis: 'Pasal 70 UU No. 30 Tahun 1999 mengatur alasan pembatalan putusan arbitrase secara limitatif (exhausted): dokumen palsu, dokumen disembunyikan, atau tipu muslihat. Kesalahan pertimbangan yuridis bukan merupakan alasan pembatalan putusan arbitrase di Pengadilan Negeri.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 520,
    category: 'Hukum Acara Arbitrase & APS',
    topicTag: 'Jangka Waktu Mediasi Pengadilan',
    question: 'Berdasarkan PERMA No. 1 Tahun 2016 tentang Prosedur Mediasi di Pengadilan, jangka waktu proses mediasi di Pengadilan Negeri berlangsung paling lama berapa hari?',
    options: [
      { key: 'A', text: '14 hari kerja dan tidak dapat diperpanjang' },
      { key: 'B', text: '30 hari terhitung sejak penetapan perintah mediasi dan dapat diperpanjang paling lama 30 hari' },
      { key: 'C', text: '60 hari kerja tanpa perpanjangan' },
      { key: 'D', text: '90 hari sejak sidang pembacaan gugatan' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Mediasi berlangsung maksimal 30 hari dan dapat diperpanjang maksimal 30 hari atas kesepakatan.',
      legalBasis: 'Pasal 24 ayat (2) dan ayat (3) PERMA No. 1 Tahun 2016 tentang Prosedur Mediasi di Pengadilan.',
      analysis: 'Pasal 24 ayat (2) PERMA No. 1 Tahun 2016 menentukan proses mediasi berlangsung paling lama 30 (tiga puluh) hari terhitung sejak penetapan perintah melakukan Mediasi. Atas dasar kesepakatan Para Pihak, jangka waktu Mediasi dapat diperpanjang paling lama 30 (tiga puluh) hari.'
    },
    difficulty: 'Mudah'
  },

  // ========================================================
  // --- HUKUM ACARA PERADILAN TATA USAHA NEGARA (521 - 525) ---
  // ========================================================
  {
    id: 521,
    category: 'Hukum Acara PTUN',
    topicTag: 'Unsur Keputusan TUN (KTUN)',
    question: 'Berdasarkan Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang Perubahan Kedua atas UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara, yang dimaksud dengan Keputusan Tata Usaha Negara (KTUN) adalah penetapan tertulis yang dikeluarkan oleh Badan atau Pejabat TUN yang berisi tindakan hukum TUN yang bersifat:',
    options: [
      { key: 'A', text: 'Umum, abstrak, dan mengikat seluruh masyarakat' },
      { key: 'B', text: 'Konkret, individual, dan final, serta menimbulkan akibat hukum bagi seseorang atau badan hukum perdata' },
      { key: 'C', text: 'Sementara, rekomendatif, dan belum mempunyai kekuatan memaksa' },
      { key: 'D', text: 'Politik kebijakan negara yang tidak dapat diganggu gugat' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'KTUN wajib memenuhi unsur: konkret, individual, dan final serta membawa akibat hukum perdata.',
      legalBasis: 'Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang PTUN.',
      analysis: 'Unsur kumulatif KTUN adalah: 1. penetapan tertulis; 2. dikeluarkan Badan/Pejabat TUN; 3. berisi tindakan hukum TUN; 4. bersifat konkret, individual, dan final; 5. menimbulkan akibat hukum bagi seseorang atau badan hukum perdata.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 522,
    category: 'Hukum Acara PTUN',
    topicTag: 'Tenggang Waktu Menggugat di PTUN',
    question: 'Berdasarkan Pasal 55 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara, gugatan dapat diajukan hanya dalam tenggang waktu:',
    options: [
      { key: 'A', text: '14 hari sejak KTUN diterima' },
      { key: 'B', text: '30 hari sejak KTUN diterbitkan' },
      { key: 'C', text: '90 (sembilan puluh) hari terhitung sejak saat diterimanya atau diumumkannya Keputusan Badan atau Pejabat TUN' },
      { key: 'D', text: '6 bulan sejak timbulnya kerugian materiil' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Tenggang waktu menggugat di PTUN adalah 90 hari sejak diterimanya atau diumumkannya KTUN.',
      legalBasis: 'Pasal 55 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.',
      analysis: 'Pasal 55 UU No. 5 Tahun 1986 menetapkan daluwarsa pengajuan gugatan ke PTUN adalah 90 hari terhitung sejak diterimanya KTUN oleh Penggugat atau sejak diumumkannya keputusan tersebut bila diumumkan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 523,
    category: 'Hukum Acara PTUN',
    topicTag: 'Dismissal Process',
    question: 'Dalam Hukum Acara PTUN, pemeriksaan yang dilakukan oleh Ketua Pengadilan dalam rapat permusyawaratan untuk menyatakan gugatan tidak diterima atau tidak berdasar sebelum persidangan terbuka disebut:',
    options: [
      { key: 'A', text: 'Pemeriksaan Persiapan' },
      { key: 'B', text: 'Prosedur Dismissal (Dismissal Process)' },
      { key: 'C', text: 'Eksepsi Kompetensi Relatif' },
      { key: 'D', text: 'Pemeriksaan Singkat Pidana' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Prosedur dismissal dilakukan Ketua PTUN untuk menyaring gugatan yang tidak memenuhi syarat.',
      legalBasis: 'Pasal 62 UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Berdasarkan Pasal 62 UU No. 5 Tahun 1986, dalam rapat permusyawaratan, Ketua Pengadilan berwenang memutuskan dengan suatu penetapan yang dilengkapi pertimbangan bahwa gugatan dinyatakan tidak diterima atau tidak berdasar (Rapat Permusyawaratan / Dismissal Process).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 524,
    category: 'Hukum Acara PTUN',
    topicTag: 'Larangan Rekonvensi di PTUN',
    question: 'Berbeda dengan Hukum Acara Perdata umum, dalam Hukum Acara Peradilan Tata Usaha Negara (PTUN):',
    options: [
      { key: 'A', text: 'Tergugat diperbolehkan mengajukan gugatan balik (rekonvensi) untuk menuntut ganti rugi' },
      { key: 'B', text: 'Tidak dikenal adanya gugatan rekonvensi (gugatan balik) oleh Badan/Pejabat TUN' },
      { key: 'C', text: 'Penggugat wajib mengajukan permohonan sita jaminan atas gedung kementerian' },
      { key: 'D', text: 'Putusan hakim PTUN selalu berupa pemidanaan penjara bagi pejabat TUN' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Dalam Hukum Acara PTUN tidak dikenal lembaga gugatan rekonvensi.',
      legalBasis: 'Pasal 107 jo. Pasal 100 Undang-Undang No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.',
      analysis: 'Peradilan TUN menguji keabsahan KTUN (rechmatigheid) dari segi wewenang, prosedur, dan substansi. Tergugat (Badan/Pejabat TUN) tidak mempunyai hak mengajukan gugatan balik (rekonvensi) terhadap warga masyarakat Penggugat.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 525,
    category: 'Hukum Acara PTUN',
    topicTag: 'Permohonan Penundaan KTUN',
    question: 'Berdasarkan Pasal 67 ayat (2) UU No. 5 Tahun 1986 tentang PTUN, gugatan tidak menunda pelaksanaan KTUN. Namun Penggugat dapat mengajukan permohonan penundaan pelaksanaan KTUN apabila:',
    options: [
      { key: 'A', text: 'Penggugat tidak sanggup membayar panjar biaya perkara' },
      { key: 'B', text: 'Terdapat keadaan yang sangat mendesak yang mengakibatkan kepentingan Penggugat sangat dirugikan jika KTUN tetap dilaksanakan' },
      { key: 'C', text: 'Pejabat TUN yang bersangkutan sedang cuti tahunan di luar negeri' },
      { key: 'D', text: 'Gugatan diajukan secara bersama-sama oleh lebih dari 100 orang' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Penundaan KTUN dapat dikabulkan jika terdapat keadaan mendesak yang menimbulkan kerugian parah.',
      legalBasis: 'Pasal 67 ayat (2) dan ayat (4) huruf a UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Asas praesumptio iustae causa menyatakan KTUN dianggap sah sampai ada putusan berkekuatan hukum tetap. Pengecualiannya, Penggugat dapat memohon penundaan pelaksanaan KTUN bila terdapat keadaan mendesak yang mengakibatkan kerugian tidak sepadan jika KTUN tetap dilaksanakan.'
    },
    difficulty: 'Sedang'
  }
];
