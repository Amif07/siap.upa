// server.ts
import express from "express";
import http from "http";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

// src/data/additionalUpaQuestions.ts
var ADDITIONAL_UPA_BANK_PART1 = [
  // --- HUKUM ACARA PERDATA (121 - 170) ---
  {
    id: 121,
    category: "Hukum Acara Perdata",
    topicTag: "Gugatan Sederhana (Small Claim Court)",
    question: "Berdasarkan PERMA No. 2 Tahun 2015 jo. PERMA No. 4 Tahun 2019 tentang Tata Cara Penyelesaian Gugatan Sederhana, batas maksimal nilai materiil gugatan yang dapat diperiksa adalah...",
    options: [
      { key: "A", text: "Paling banyak Rp200.000.000 (dua ratus juta rupiah)" },
      { key: "B", text: "Paling banyak Rp500.000.000 (lima ratus juta rupiah)" },
      { key: "C", text: "Paling banyak Rp1.000.000.000 (satu miliar rupiah)" },
      { key: "D", text: "Tidak ada batasan nilai materiil asalkan bukan sengketa tanah" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Nilai gugatan materiil dalam Gugatan Sederhana dinaikkan menjadi maksimal Rp500.000.000 oleh PERMA 4/2019.",
      legalBasis: "Pasal 1 angka 1 PERMA No. 4 Tahun 2019 tentang Perubahan atas PERMA No. 2 Tahun 2015.",
      analysis: "PERMA 4/2019 menaikkan batas nilai tuntutan materiil gugatan sederhana dari sebelumnya maksimal Rp200 juta menjadi maksimal Rp500 juta, dengan penyelesaian paling lama 25 hari kerja oleh hakim tunggal."
    },
    difficulty: "Mudah"
  },
  {
    id: 122,
    category: "Hukum Acara Perdata",
    topicTag: "Sita Revindikatoir (Revindicatoir Beslag)",
    question: "Tuan Hendra meminta penyitaan terhadap sebuah mobil antik miliknya yang saat ini dikuasai oleh pihak ketiga tanpa hak. Permohonan sita yang tepat diajukan oleh Hendra adalah...",
    options: [
      { key: "A", text: "Sita Konservatoir (Conservatoir Beslag)" },
      { key: "B", text: "Sita Revindikatoir (Revindicatoir Beslag)" },
      { key: "C", text: "Sita Eksekusi (Executoir Beslag)" },
      { key: "D", text: "Sita Marital (Maritaal Beslag)" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Sita Revindikatoir diajukan oleh pemilik barang bergerak untuk menuntut kembali barang miliknya yang dikuasai orang lain.",
      legalBasis: "Pasal 226 HIR jo. Pasal 714 Rv.",
      analysis: "Pasal 226 HIR mengatur bahwa pemilik barang bergerak berhak memohonkan sita revindikatoir terhadap barang kepunyaannya yang berada di tangan penguasaan pihak ketiga tanpa hak agar barang tersebut tidak dipindahtangankan."
    },
    difficulty: "Sedang"
  },
  {
    id: 123,
    category: "Hukum Acara Perdata",
    topicTag: "Eksepsi Plurium Litis Consortium",
    question: "Tergugat mendalilkan bahwa gugatan Penggugat kurang pihak karena tidak mengikutsertakan salah satu ahli waris yang sah dalam sengketa pembagian waris. Eksepsi yang diajukan Tergugat dinamakan...",
    options: [
      { key: "A", text: "Eksepsi Obscuur Libel" },
      { key: "B", text: "Eksepsi Plurium Litis Consortium" },
      { key: "C", text: "Eksepsi Error in Persona" },
      { key: "D", text: "Eksepsi Ne Bis In Idem" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Eksepsi plurium litis consortium menyatakan bahwa para pihak yang ditarik dalam gugatan tidak lengkap/kurang pihak.",
      legalBasis: "Pasal 125 ayat (2) jo. Pasal 136 HIR / Pasal 149 ayat (2) jo. Pasal 162 RBg jo. Yurisprudensi MA RI No. 582 K/Sip/1973.",
      analysis: "Plurium litis consortium adalah eksepsi yang diajukan pihak tergugat dengan alasan orang-orang yang ditarik sebagai pihak dalam perkara tidak lengkap padahal kepentingannya terikat secara hukum, sehingga gugatan harus dinyatakan tidak dapat diterima (NO)."
    },
    difficulty: "Sedang"
  },
  {
    id: 124,
    category: "Hukum Acara Perdata",
    topicTag: "Kekuatan Pembuktian Akta Otentik",
    question: "Berdasarkan Pasal 1870 KUHPerdata, suatu akta otentik memberikan di antara para pihak beserta ahli warisnya...",
    options: [
      { key: "A", text: "Bukti permulaan tertulis yang membutuhkan tambahan saksi" },
      { key: "B", text: "Bukti bebas yang diserahkan penilaiannya kepada keyakinan hakim" },
      { key: "C", text: "Suatu bukti yang sempurna dan mengikat (volledig en bindend bewijskracht)" },
      { key: "D", text: "Bukti petunjuk yang setara dengan persangkaan hakim" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Akta otentik memiliki nilai pembuktian sempurna dan mengikat bagi para pihak.",
      legalBasis: "Pasal 1870 KUHPerdata jo. Pasal 165 HIR.",
      analysis: "Akta otentik yang dibuat oleh atau di hadapan pejabat umum berwenang (seperti Notaris/PPAT) memiliki 3 kekuatan: pembuktian lahiriah, formal, dan materiil yang bersifat sempurna dan mengikat, kecuali lawan dapat membuktikan kepalsuannya."
    },
    difficulty: "Mudah"
  },
  {
    id: 125,
    category: "Hukum Acara Perdata",
    topicTag: "Dwangsom (Uang Paksa)",
    question: "Hukuman pembayaran dwangsom (uang paksa) dalam putusan perdata TIDAK DAPAT dijatuhkan terhadap tuntutan amar...",
    options: [
      { key: "A", text: "Kewajiban untuk mengosongkan rumah" },
      { key: "B", text: "Kewajiban untuk membongkar bangunan tembok" },
      { key: "C", text: "Kewajiban pembayaran sejumlah uang tertentu" },
      { key: "D", text: "Kewajiban menyerahkan surat sertifikat asli" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Dwangsom tidak dapat dijatuhkan pada penghukuman pembayaran sejumlah uang tertentu.",
      legalBasis: "Pasal 606a Rv jo. Yurisprudensi Mahkamah Agung RI.",
      analysis: "Pasal 606a Rv secara tegas mengatur bahwa dwangsom (uang paksa) hanya dapat dituntut terhadap perbuatan untuk melakukan atau tidak melakukan sesuatu, dan dilarang dikenakan pada amar kewajiban membayar sejumlah uang tunai karena terhadap uang berlaku bunga moratoir."
    },
    difficulty: "Sulit"
  },
  {
    id: 126,
    category: "Hukum Acara Perdata",
    topicTag: "Sumpah Decisoir (Sumpah Pemutus)",
    question: "Sumpah yang dibebankan oleh salah satu pihak yang berperkara kepada pihak lawan untuk memutuskan sengketa ketika tidak ada alat bukti lain sama sekali disebut...",
    options: [
      { key: "A", text: "Sumpah Suppletoir (Pelengkap)" },
      { key: "B", text: "Sumpah Decisoir (Pemutus)" },
      { key: "C", text: "Sumpah Aestimatoir (Penaksir)" },
      { key: "D", text: "Sumpah Jabatan" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Sumpah Decisoir adalah sumpah pemutus yang diperintahkan satu pihak ke pihak lain untuk mengakhiri perkara.",
      legalBasis: "Pasal 1930 KUHPerdata jo. Pasal 156 HIR.",
      analysis: "Sumpah Decisoir bersifat tuntas (decisive). Pihak yang diminta bersumpah dapat mengembalikan sumpah tersebut kepada pihak lawan. Siapa yang bersumpah menang perkaranya, dan pihak yang menolak bersumpah kalah perkaranya."
    },
    difficulty: "Sedang"
  },
  {
    id: 127,
    category: "Hukum Acara Perdata",
    topicTag: "Akibat Hukum Mediasi Tidak Dilaksanakan",
    question: "Berdasarkan PERMA No. 1 Tahun 2016, apabila perkara perdata tingkat pertama diputus tanpa menempuh prosedur mediasi yang diwajibkan, maka putusan tersebut...",
    options: [
      { key: "A", text: "Tetap sah dan berkekuatan hukum tetap" },
      { key: "B", text: "Batal demi hukum (null and void) dan pengadilan tingkat banding wajib memerintahkan mediasi ulang" },
      { key: "C", text: "Dikenakan denda administratif kepada majelis hakim" },
      { key: "D", text: "Hanya dapat diajukan kasasi langsung ke Mahkamah Agung" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Tidak dilaksanakannya mediasi wajib mengakibatkan putusan perdata batal demi hukum.",
      legalBasis: "Pasal 3 ayat (1) dan (2) PERMA No. 1 Tahun 2016.",
      analysis: "PERMA 1/2016 menegaskan setiap hakim pemeriksa perkara perdata wajib memfasilitasi mediasi. Pelanggaran terhadap kewajiban mediasi mengakibatkan putusan batal demi hukum, dan Pengadilan Tinggi/MA memerintahkan PN melakukan mediasi."
    },
    difficulty: "Sedang"
  },
  {
    id: 128,
    category: "Hukum Acara Perdata",
    topicTag: "Ne Bis In Idem",
    question: "Asas Ne Bis In Idem dalam perkara perdata sebagaimana diatur dalam Pasal 1917 KUHPerdata terpenuhi apabila...",
    options: [
      { key: "A", text: "Subjek para pihak, objek gugatan, dan dasar tuntutan (kausa) perkaranya adalah sama persis dengan perkara yang sudah berkekuatan hukum tetap" },
      { key: "B", text: "Hanya objek sengketanya saja yang sama meskipun para pihaknya berbeda" },
      { key: "C", text: "Gugatan diajukan di pengadilan negeri yang sama dalam jangka waktu kurang dari 1 tahun" },
      { key: "D", text: "Salah satu pihak sudah pernah dipidana atas perbuatan yang bersangkutan" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Syarat Ne Bis In Idem: kesamaan subjek para pihak, kesamaan objek perkara, dan kesamaan dasar gugatan.",
      legalBasis: "Pasal 1917 KUHPerdata jo. Yurisprudensi MA RI.",
      analysis: "Pasal 1917 KUHPerdata mensyaratkan 3 unsur kumulatif agar suatu perkara dinyatakan ne bis in idem: barang yang dituntut sama, tuntutan didasarkan pada alasan yang sama, serta diajukan oleh dan terhadap pihak-pihak yang sama dalam hubungan yang sama."
    },
    difficulty: "Mudah"
  },
  {
    id: 129,
    category: "Hukum Acara Perdata",
    topicTag: "Saksi Testimonium de Auditu",
    question: "Bagaimanakah kedudukan keterangan saksi de auditu (mendengar dari cerita orang lain) dalam pembuktian hukum acara perdata menurut yurisprudensi tetap Mahkamah Agung?",
    options: [
      { key: "A", text: "Sama sekali haram digunakan dan wajib dicabut dari berkas perkara" },
      { key: "B", text: "Dapat digunakan sebagai alat bukti persangkaan hakim apabila bersesuaian dengan alat bukti sah lainnya" },
      { key: "C", text: "Otomatis menjadi bukti sempurna yang mengikat hakim" },
      { key: "D", text: "Hanya boleh dipakai apabila disetujui secara tertulis oleh Tergugat" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Kesaksian de auditu dapat digunakan sebagai dasar persangkaan hakim jika berpadu dengan bukti lain.",
      legalBasis: "Yurisprudensi MA RI No. 308 K/Sip/1959 jo. Pasal 171 HIR.",
      analysis: "Meskipun Pasal 171 HIR menentukan saksi harus menerangkan apa yang ia lihat dan alami sendiri, yurisprudensi tetap MA menyatakan keterangan saksi de auditu tidak dilarang mutlak, melainkan dapat dipakai menyusun persangkaan yang menguatkan alat bukti lain."
    },
    difficulty: "Sedang"
  },
  {
    id: 130,
    category: "Hukum Acara Perdata",
    topicTag: "Penetapan Aanmaning",
    question: "Dalam prosedur eksekusi putusan perdata berkekuatan hukum tetap, Ketua Pengadilan Negeri memanggil pihak Tergugat untuk diberikan peringatan (aanmaning). Jangka waktu pemenuhan isi putusan yang diberikan dalam aanmaning adalah...",
    options: [
      { key: "A", text: "Paling lama 3 hari kalender" },
      { key: "B", text: "Paling lama 8 hari terhitung sejak sidang peringatan dilaksanakan" },
      { key: "C", text: "Paling lama 14 hari kerja" },
      { key: "D", text: "Paling lama 30 hari kalender" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Tenggang waktu aanmaning adalah 8 hari sejak sidang peringatan dilakukan.",
      legalBasis: "Pasal 196 HIR jo. Pasal 207 RBg.",
      analysis: "Pasal 196 HIR menetapkan bahwa jika pihak yang kalah tidak mematuhi putusan secara sukarela, Ketua PN memanggilnya dan memberikan tegoran/peringatan agar memenuhi kewajiban selambat-lambatnya dalam waktu 8 hari."
    },
    difficulty: "Mudah"
  },
  // --- HUKUM ACARA PIDANA (131 - 180) ---
  {
    id: 131,
    category: "Hukum Acara Pidana",
    topicTag: "Pemberitahuan Dimulainya Penyidikan (SPDP)",
    question: "Berdasarkan Putusan Mahkamah Konstitusi No. 130/PUU-XIII/2015, penyidik WAJIB menyampaikan Surat Pemberitahuan Dimulainya Penyidikan (SPDP) kepada Penuntut Umum, Terlapor, dan Korban paling lambat...",
    options: [
      { key: "A", text: "1 x 24 jam setelah SPDP diterbitkan" },
      { key: "B", text: "7 (tujuh) hari setelah dikeluarkannya Surat Perintah Penyidikan" },
      { key: "C", text: "14 hari kerja setelah gelar perkara" },
      { key: "D", text: "30 hari sebelum pelimpahan berkas tahap I" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "SPDP wajib disampaikan ke Penuntut Umum, Terlapor, dan Korban maksimal 7 hari setelah Sprindik terbit.",
      legalBasis: "Putusan Mahkamah Konstitusi No. 130/PUU-XIII/2015 jo. Pasal 109 ayat (1) KUHAP.",
      analysis: "MK memutuskan bahwa Pasal 109 ayat (1) KUHAP inkonstitusional bersyarat jika tidak dimaknai penyidik wajib memberitahukan dan menyerahkan SPDP kepada penuntut umum, terlapor, dan korban paling lambat 7 hari demi due process of law."
    },
    difficulty: "Sedang"
  },
  {
    id: 132,
    category: "Hukum Acara Pidana",
    topicTag: "Jangka Waktu Penangkapan",
    question: "Berdasarkan Pasal 19 ayat (1) KUHAP, perintah penangkapan terhadap seseorang yang diduga keras melakukan tindak pidana berlaku paling lama...",
    options: [
      { key: "A", text: "1 (satu) hari atau 1 x 24 jam" },
      { key: "B", text: "2 x 24 jam" },
      { key: "C", text: "3 x 24 jam" },
      { key: "D", text: "7 x 24 jam" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Perintah penangkapan berlaku paling lama 1 hari (1 x 24 jam).",
      legalBasis: "Pasal 19 ayat (1) KUHAP.",
      analysis: "Pasal 19 ayat (1) KUHAP menetapkan secara tegas: Penangkapan sebagaimana dimaksud dalam Pasal 17, dapat dilakukan untuk paling lama satu hari. Setelah lewat 24 jam, penyidik wajib menentukan apakah tersangka ditahan atau dilepaskan."
    },
    difficulty: "Mudah"
  },
  {
    id: 133,
    category: "Hukum Acara Pidana",
    topicTag: "Penahanan Rutan Tingkat Penyidikan",
    question: "Jangka waktu penahanan yang berwenang dikeluarkan oleh Penyidik untuk kepentingan penyidikan adalah paling lama 20 hari, dan dapat diperpanjang oleh...",
    options: [
      { key: "A", text: "Kapolres setempat paling lama 20 hari" },
      { key: "B", text: "Penuntut Umum yang berwenang paling lama 40 hari" },
      { key: "C", text: "Ketua Pengadilan Negeri paling lama 30 hari" },
      { key: "D", text: "Menteri Hukum dan HAM paling lama 60 hari" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Perpanjangan penahanan penyidikan diberikan oleh Penuntut Umum paling lama 40 hari.",
      legalBasis: "Pasal 24 ayat (1) dan (2) KUHAP.",
      analysis: "Pasal 24 KUHAP menentukan penahanan oleh penyidik berlaku paling lama 20 hari. Jika pemeriksaan belum selesai, dapat diperpanjang oleh penuntut umum yang berwenang untuk paling lama 40 hari (total 60 hari)."
    },
    difficulty: "Mudah"
  },
  {
    id: 134,
    category: "Hukum Acara Pidana",
    topicTag: "Gugurnya Praperadilan",
    question: "Berdasarkan Pasal 82 ayat (1) huruf d KUHAP jo. SEMA No. 5 Tahun 2021, permohonan praperadilan dinyatakan gugur apabila...",
    options: [
      { key: "A", text: "Berkas perkara telah dilimpahkan ke kejaksaan (Tahap II)" },
      { key: "B", text: "Perkara pokok pidana telah dilimpahkan ke Pengadilan Negeri dan sidang pertama pokok perkara telah resmi dibuka" },
      { key: "C", text: "Penyidik menerbitkan SP3" },
      { key: "D", text: "Pemohon praperadilan jatuh sakit saat sidang" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Praperadilan gugur saat sidang pertama pokok perkara telah dimulai dan dibuka oleh majelis hakim.",
      legalBasis: "Pasal 82 ayat (1) huruf d KUHAP jo. Putusan MK No. 102/PUU-XIII/2015 jo. SEMA No. 5 Tahun 2021.",
      analysis: "SEMA 5/2021 menegaskan bahwa saat sidang pertama perkara pokok telah dibuka untuk umum dan terdakwa dihadapkan ke muka sidang, maka perkara praperadilan serta merta gugur demi hukum."
    },
    difficulty: "Sedang"
  },
  {
    id: 135,
    category: "Hukum Acara Pidana",
    topicTag: "Batas Minimum Pembuktian Pidana",
    question: "Sistem pembuktian yang dianut oleh KUHAP dalam Pasal 183 adalah Negatief Wettelijk Bewijsstelsel, yang berarti...",
    options: [
      { key: "A", text: "Hakim memutus semata-mata atas dasar keyakinan batinnya tanpa terikat alat bukti" },
      { key: "B", text: "Hakim terikat secara mutlak pada alat bukti undang-undang meskipun batinnya tidak yakin" },
      { key: "C", text: "Hakim tidak boleh menjatuhkan pidana kecuali dengan sekurang-kurangnya 2 alat bukti yang sah dan ia memperoleh keyakinan bahwa tindak pidana benar terjadi dan terdakwalah yang bersalah" },
      { key: "D", text: "Cukup dengan pengakuan terdakwa saja tanpa memerlukan saksi" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Asas pembuktian negatif menurut undang-undang: minimum 2 alat bukti sah + keyakinan hakim.",
      legalBasis: "Pasal 183 KUHAP.",
      analysis: "Pasal 183 KUHAP mengatur: Hakim tidak boleh menjatuhkan pidana kepada seorang kecuali apabila dengan sekurang-kurangnya dua alat bukti yang sah ia memperoleh keyakinan bahwa suatu tindak pidana benar-benar terjadi dan bahwa terdakwalah yang bersalah melakukannya."
    },
    difficulty: "Mudah"
  },
  {
    id: 136,
    category: "Hukum Acara Pidana",
    topicTag: "Syarat Memori Kasasi Pidana",
    question: "Terdakwa mengajukan permohonan kasasi atas vonis Pengadilan Tinggi. Dalam waktu berapakah pemohon kasasi wajib menyerahkan Memori Kasasi kepada panitera?",
    options: [
      { key: "A", text: "Dalam tenggang waktu 7 hari sejak permohonan kasasi didaftarkan" },
      { key: "B", text: "Dalam tenggang waktu 14 hari sejak permohonan kasasi diajukan" },
      { key: "C", text: "Dapat diserahkan kapan saja sebelum berkas dikirim ke Mahkamah Agung" },
      { key: "D", text: "30 hari kerja setelah akta kasasi ditandatangani" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Memori kasasi pidana wajib diserahkan dalam waktu 14 hari setelah permohonan kasasi diajukan.",
      legalBasis: "Pasal 248 ayat (1) KUHAP.",
      analysis: "Pasal 248 ayat (1) KUHAP menentukan pemohon kasasi wajib menyampaikan memori kasasi dalam waktu 14 hari. Jika lewat waktu 14 hari memori kasasi tidak diserahkan, hak kasasi gugur dan kasasi dinyatakan tidak dapat diterima."
    },
    difficulty: "Sedang"
  },
  // --- HUKUM ACARA PTUN (137 - 150) ---
  {
    id: 137,
    category: "Hukum Acara PTUN",
    topicTag: "Tindakan Faktual Pejabat TUN (Onrechtmatige Overheidsdaad)",
    question: "Berdasarkan UU No. 30 Tahun 2014 jo. PERMA No. 2 Tahun 2019, sengketa Perbuatan Melanggar Hukum oleh Badan dan/atau Pejabat Pemerintahan (Onrechtmatige Overheidsdaad / OOD) saat ini diadili oleh...",
    options: [
      { key: "A", text: "Pengadilan Negeri dalam kompetensi perdata murni" },
      { key: "B", text: "Pengadilan Tata Usaha Negara (PTUN)" },
      { key: "C", text: "Komisi Pemberantasan Korupsi (KPK)" },
      { key: "D", text: "Mahkamah Agung di tingkat pertama dan terakhir" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Gugatan perbuatan melawan hukum oleh penguasa (OOD) kini menjadi kompetensi absolut PTUN.",
      legalBasis: "Pasal 2 ayat (1) PERMA No. 2 Tahun 2019 jo. UU No. 30 Tahun 2014.",
      analysis: "PERMA 2/2019 mengalihkan sengketa OOD (tindakan faktual melanggar hukum oleh badan/pejabat administrasi negara) yang semula digugat di PN perdata menjadi wewenang Pengadilan Tata Usaha Negara."
    },
    difficulty: "Sedang"
  },
  {
    id: 138,
    category: "Hukum Acara PTUN",
    topicTag: "Prosedur Dismissal Ketua PTUN",
    question: "Dalam prosedur dismissal menurut Pasal 62 UU PTUN, Ketua Pengadilan berwenang memutuskan bahwa gugatan tidak diterima dalam rapat permusyawaratan apabila...",
    options: [
      { key: "A", text: "Pokok gugatan nyata-nyata tidak termasuk dalam wewenang pengadilan" },
      { key: "B", text: "Gugatan diajukan sebelum lewat tenggang waktu 90 hari" },
      { key: "C", text: "Tergugat belum menyampaikan surat jawaban pertama" },
      { key: "D", text: "Penggugat didampingi oleh lebih dari dua orang advokat" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Ketua PTUN menyaring gugatan yang nyata-nyata tidak termasuk wewenang PTUN dalam rapat permusyawaratan dismissal.",
      legalBasis: "Pasal 62 ayat (1) huruf a UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Pasal 62 ayat (1) menetapkan Ketua Pengadilan berwenang memutuskan gugatan tidak dapat diterima atau tidak berdasar jika pokok gugatan tidak termasuk wewenang pengadilan, syarat gugatan tidak dipenuhi, atau gugatan diajukan sebelum waktunya/lewat waktu."
    },
    difficulty: "Sedang"
  },
  {
    id: 139,
    category: "Hukum Acara PTUN",
    topicTag: "Perlawanan atas Penetapan Dismissal",
    question: "Terhadap penetapan dismissal Ketua Pengadilan yang menyatakan gugatan tidak diterima, pihak Penggugat dapat mengajukan upaya hukum perlawanan (verzet) dalam tenggang waktu...",
    options: [
      { key: "A", text: "7 hari setelah penetapan diucapkan" },
      { key: "B", text: "14 hari setelah penetapan dismissal diberitahukan" },
      { key: "C", text: "30 hari sejak rapat permusyawaratan" },
      { key: "D", text: "Langsung kasasi ke Mahkamah Agung dalam 14 hari" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Perlawanan terhadap penetapan dismissal diajukan dalam waktu 14 hari setelah diberitahukan.",
      legalBasis: "Pasal 62 ayat (3) huruf a UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Pasal 62 ayat (3) huruf a UU PTUN menetapkan terhadap penetapan dismissal dapat diajukan perlawanan kepada Pengadilan dalam tenggang waktu empat belas hari setelah diucapkan atau diberitahukan secara patut."
    },
    difficulty: "Sedang"
  },
  {
    id: 140,
    category: "Hukum Acara PTUN",
    topicTag: "Eksekusi Putusan PTUN (Pasal 116)",
    question: "Apabila pejabat TUN tidak bersedia melaksanakan putusan pengadilan yang telah inkracht setelah 90 hari, sanksi apakah yang dapat dijatuhkan menurut Pasal 116 UU No. 51 Tahun 2009?",
    options: [
      { key: "A", text: "Pejabat TUN tersebut langsung dipenjara selama 5 tahun" },
      { key: "B", text: "Pengenaan pembayaran uang paksa (dwangsom) dan/atau sanksi administratif, serta diumumkan pada media massa cetak" },
      { key: "C", text: "Penyitaan terhadap rumah pribadi milik pejabat TUN yang bersangkutan" },
      { key: "D", text: "Pembubaran instansi pemerintah yang bersangkutan" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Sanksi eksekusi PTUN: uang paksa (dwangsom), sanksi administratif, publikasi media massa, dan laporan ke Presiden.",
      legalBasis: "Pasal 116 ayat (4), (5), (6) UU No. 51 Tahun 2009 tentang PTUN.",
      analysis: "Pasal 116 UU PTUN mengatur sanksi bagi pejabat pembangkang: pembayaran uang paksa, sanksi administratif pemberhentian, pengumuman di media massa cetak oleh panitera, dan dilaporkan kepada Presiden."
    },
    difficulty: "Sedang"
  },
  // --- HUKUM ACARA PERADILAN AGAMA (141 - 150) ---
  {
    id: 141,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Kompetensi Relatif Cerai Talak",
    question: "Permohonan cerai talak yang diajukan oleh Suami terhadap Istri wajib diajukan ke Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman...",
    options: [
      { key: "A", text: "Pemohon (Suami)" },
      { key: "B", text: "Termohon (Istri)" },
      { key: "C", text: "Tempat akad nikah dilangsungkan" },
      { key: "D", text: "Tempat harta bersama berada" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Permohonan cerai talak diajukan di Pengadilan Agama tempat kediaman Termohon (istri).",
      legalBasis: "Pasal 66 ayat (2) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      analysis: "Pasal 66 ayat (2) UU Peradilan Agama menentukan: Permohonan cerai talak diajukan kepada Pengadilan yang daerah hukumnya meliputi tempat kediaman Termohon, kecuali apabila Termohon dengan sengaja meninggalkan tempat kediaman bersama tanpa izin Pemohon."
    },
    difficulty: "Mudah"
  },
  {
    id: 142,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Hadhanah (Hak Asuh Anak)",
    question: "Berdasarkan Pasal 105 Kompilasi Hukum Islam (KHI), dalam hal terjadi perceraian, pemeliharaan anak yang belum mumayyiz (belum berusia 12 tahun) adalah...",
    options: [
      { key: "A", text: "Hak ibunya" },
      { key: "B", text: "Hak ayahnya" },
      { key: "C", text: "Diserahkan kepada kakek dari pihak ayah" },
      { key: "D", text: "Anak bebas memilih secara mandiri di muka sidang" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Hak asuh anak di bawah 12 tahun (belum mumayyiz) adalah hak ibunya.",
      legalBasis: "Pasal 105 huruf a Kompilasi Hukum Islam (KHI).",
      analysis: "Pasal 105 huruf a KHI mengatur bahwa pemeliharaan anak yang belum mumayyiz atau belum berumur 12 tahun adalah hak ibunya, sedangkan anak yang sudah mumayyiz berhak memilih untuk mendapatkan hadhanah dari ayah atau ibunya."
    },
    difficulty: "Mudah"
  },
  // --- HUKUM ACARA MAHKAMAH KONSTITUSI (151 - 160) ---
  {
    id: 143,
    category: "Hukum Acara Mahkamah Konstitusi",
    topicTag: "Kewenangan Mahkamah Konstitusi",
    question: "Berikut ini yang BUKAN merupakan kewenangan Mahkamah Konstitusi menurut Pasal 24C ayat (1) UUD 1945 adalah...",
    options: [
      { key: "A", text: "Menguji undang-undang terhadap UUD 1945" },
      { key: "B", text: "Memutus sengketa kewenangan lembaga negara yang kewenangannya diberikan oleh UUD 1945" },
      { key: "C", text: "Memutus pembubaran partai politik" },
      { key: "D", text: "Menguji peraturan pemerintah dan peraturan perundang-undangan di bawah undang-undang terhadap undang-undang" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Menguji peraturan di bawah undang-undang adalah wewenang Mahkamah Agung, bukan Mahkamah Konstitusi.",
      legalBasis: "Pasal 24A ayat (1) jo. Pasal 24C ayat (1) UUD 1945.",
      analysis: "Kewenangan judicial review terbagi dua: Mahkamah Konstitusi menguji Undang-Undang terhadap UUD 1945, sedangkan Mahkamah Agung menguji peraturan perundang-undangan di bawah UU terhadap UU."
    },
    difficulty: "Mudah"
  },
  {
    id: 144,
    category: "Hukum Acara Mahkamah Konstitusi",
    topicTag: "Sifat Putusan MK",
    question: "Putusan Mahkamah Konstitusi memperoleh kekuatan hukum tetap sejak...",
    options: [
      { key: "A", text: "14 hari setelah salinan putusan dikirimkan kepada DPR dan Presiden" },
      { key: "B", text: "Selesai diucapkan dalam sidang pleno terbuka untuk umum" },
      { key: "C", text: "Diumumkan dalam Lembaran Negara Republik Indonesia" },
      { key: "D", text: "Setelah ditandatangani oleh seluruh hakim konstitusi" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Putusan MK berkekuatan hukum tetap sejak selesai diucapkan dalam sidang pleno terbuka untuk umum.",
      legalBasis: "Pasal 47 UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi.",
      analysis: "Pasal 47 UU MK mengatur putusan MK memperoleh kekuatan hukum tetap sejak selesai diucapkan dalam sidang pleno terbuka untuk umum, bersifat final dan mengikat (erga omnes)."
    },
    difficulty: "Mudah"
  },
  // --- HUKUM ACARA PHI (145 - 150) ---
  {
    id: 145,
    category: "Hukum Acara PHI",
    topicTag: "Tenggang Waktu Mengeluarkan Anjuran Tertulis",
    question: "Berdasarkan UU No. 2 Tahun 2004, dalam hal penyelesaian melalui mediasi tidak mencapai kesepakatan, maka mediator wajib mengeluarkan anjuran tertulis dalam waktu selambat-lambatnya...",
    options: [
      { key: "A", text: "10 hari kerja sejak sidang mediasi pertama" },
      { key: "B", text: "30 hari kerja sejak menerima pelimpahan penyelesaian perselisihan" },
      { key: "C", text: "60 hari kerja" },
      { key: "D", text: "90 hari kalender" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Anjuran tertulis dikeluarkan mediator paling lama 10 hari kerja sejak sidang mediasi pertama.",
      legalBasis: "Pasal 13 ayat (2) huruf a UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Pasal 13 ayat (2) huruf a UU 2/2004 menegaskan bahwa apabila tidak tercapai kesepakatan penyelesaian, mediator mengeluarkan anjuran tertulis dalam waktu selambat-lambatnya 10 hari kerja sejak sidang mediasi pertama."
    },
    difficulty: "Sedang"
  },
  {
    id: 146,
    category: "Hukum Acara PHI",
    topicTag: "Upaya Hukum Terhadap Putusan PHI",
    question: "Terhadap putusan Pengadilan Hubungan Industrial (PHI) mengenai perselisihan hak dan perselisihan pemutusan hubungan kerja (PHK), upaya hukum yang dapat ditempuh adalah...",
    options: [
      { key: "A", text: "Banding ke Pengadilan Tinggi" },
      { key: "B", text: "Kasasi langsung ke Mahkamah Agung" },
      { key: "C", text: "Perlawanan (Verzet)" },
      { key: "D", text: "Tidak ada upaya hukum karena putusan PHI selalu final" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Putusan PHI tidak mengenal upaya hukum banding, melainkan kasasi langsung ke Mahkamah Agung.",
      legalBasis: "Pasal 57 jo. Pasal 110 UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Dalam hukum acara PHI tidak terdapat tingkat peradilan banding. Putusan PHI yang menyangkut perselisihan hak dan perselisihan PHK dapat langsung dimohonkan kasasi ke Mahkamah Agung dalam waktu 14 hari kerja."
    },
    difficulty: "Mudah"
  },
  // --- HUKUM ACARA ARBITRASE & APS (147 - 150) ---
  {
    id: 147,
    category: "Hukum Acara Arbitrase & APS",
    topicTag: "Klausula Arbitrase Menyingkirkan PN",
    question: "Adanya suatu klausula arbitrase yang disepakati secara tertulis oleh para pihak dalam perjanjian mengakibatkan Pengadilan Negeri...",
    options: [
      { key: "A", text: "Tetap berwenang memeriksa jika Penggugat memilih mendaftar di PN" },
      { key: "B", text: "Tidak berwenang mengadili sengketa para pihak yang telah terikat perjanjian arbitrase tersebut" },
      { key: "C", text: "Berwenang memeriksa tingkat pertama, sedangkan arbitrase memeriksa tingkat banding" },
      { key: "D", text: "Berwenang memutus jika nilai sengketa di bawah 1 miliar" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Klausula arbitrase meniadakan kewenangan Pengadilan Negeri untuk mengadili sengketa para pihak.",
      legalBasis: "Pasal 3 dan Pasal 11 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      analysis: "Pasal 3 dan 11 UU 30/1999 menetapkan Pengadilan Negeri tidak berwenang mengadili sengketa para pihak yang telah terikat dalam perjanjian arbitrase. Hakim PN wajib menolak dan tidak campur tangan dalam penyelesaian sengketa tersebut."
    },
    difficulty: "Mudah"
  },
  {
    id: 148,
    category: "Hukum Acara Arbitrase & APS",
    topicTag: "Pendaftaran Putusan Arbitrase",
    question: "Menurut Pasal 59 UU No. 30 Tahun 1999, lembar asli atau salinan autentik putusan arbitrase nasional wajib diserahkan dan didaftarkan oleh arbiter ke Kepaniteraan Pengadilan Negeri dalam waktu paling lama...",
    options: [
      { key: "A", text: "14 hari sejak putusan diucapkan" },
      { key: "B", text: "30 hari terhitung sejak tanggal putusan diucapkan" },
      { key: "C", text: "60 hari kalender" },
      { key: "D", text: "90 hari kalender" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Putusan arbitrase wajib didaftarkan ke Kepaniteraan PN paling lama 30 hari sejak diucapkan.",
      legalBasis: "Pasal 59 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      analysis: "Pasal 59 ayat (1) mengatur bahwa dalam waktu paling lama 30 hari terhitung sejak tanggal putusan diucapkan, lembar asli atau salinan autentik putusan diserahkan dan didaftarkan oleh arbiter ke Panitera Pengadilan Negeri."
    },
    difficulty: "Sedang"
  },
  {
    id: 149,
    category: "Hukum Acara Arbitrase & APS",
    topicTag: "Pembatalan Putusan Arbitrase",
    question: "Berdasarkan Pasal 70 UU No. 30 Tahun 1999, permohonan pembatalan putusan arbitrase dapat diajukan kepada Pengadilan Negeri apabila putusan diduga mengandung unsur...",
    options: [
      { key: "A", text: "Surat atau dokumen palsu yang diakui atau dinyatakan palsu setelah putusan dijatuhkan" },
      { key: "B", text: "Ditemukan dokumen yang menentukan yang disembunyikan oleh pihak lawan" },
      { key: "C", text: "Putusan diambil dari hasil tipu muslihat yang dilakukan oleh salah satu pihak" },
      { key: "D", text: "Semua jawaban A, B, dan C adalah benar" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Ketiga alasan (dokumen palsu, penyembunyian dokumen, tipu muslihat) merupakan dasar pembatalan putusan arbitrase.",
      legalBasis: "Pasal 70 huruf a, b, dan c UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      analysis: "Pasal 70 UU 30/1999 merumuskan secara limitatif 3 alasan permohonan pembatalan putusan arbitrase ke PN, yakni pemalsuan surat/dokumen, penyembunyian dokumen menentukan, atau tipu muslihat dalam pemeriksaan."
    },
    difficulty: "Sedang"
  },
  {
    id: 150,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Larangan Menjamin Kemenangan",
    question: "Dalam Pasal 4 huruf c Kode Etik Advokat Indonesia (KEAI), seorang Advokat tidak dibenarkan untuk...",
    options: [
      { key: "A", text: "Menerima honorarium sebelum persidangan selesai" },
      { key: "B", text: "Menjamin kepada kliennya bahwa perkara yang ditanganinya pasti akan dimenangkan" },
      { key: "C", text: "Mendampingi klien di luar sidang pengadilan" },
      { key: "D", text: "Melakukan penelaahan berkas perkara secara mandiri" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Advokat dilarang keras menjamin kepada klien bahwa perkaranya pasti menang.",
      legalBasis: "Pasal 4 huruf c Kode Etik Advokat Indonesia (KEAI).",
      analysis: "Pasal 4 huruf c KEAI menegaskan: Advokat tidak dibenarkan menjamin kepada kliennya bahwa perkara yang ditanganinya akan menang. Advokat berkewajiban memberikan pembelaan hukum yang optimal, bukan menjamin hasil putusan hakim."
    },
    difficulty: "Mudah"
  }
];

// src/data/authenticUpaQuestions.ts
var AUTHENTIC_PERADI_BANK_PART2 = [
  // --- HUKUM ACARA PIDANA (AUTHENTIC TOAZ PERADI) ---
  {
    id: 151,
    category: "Hukum Acara Pidana",
    topicTag: "Pengertian Laporan",
    question: "Menurut Pasal 1 angka 24 KUHAP, yang dimaksud dengan Laporan adalah...",
    options: [
      { key: "A", text: "Pemberitahuan yang disampaikan oleh seorang karena hak atau kewajiban berdasarkan undang-undang kepada pejabat yang berwenang tentang telah atau sedang atau diduga akan terjadinya peristiwa pidana." },
      { key: "B", text: "Pemberitahuan dan permintaan oleh pihak yang berkepentingan kepada polisi tentang telah terjadi peristiwa pidana." },
      { key: "C", text: "Pemberitahuan disertai penyerahan barang bukti tindak pidana kepada jaksa penuntut umum." },
      { key: "D", text: "Tertangkapnya seseorang beberapa saat sesudah ia melakukan kejahatan." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Laporan adalah pemberitahuan karena hak/kewajiban UU tentang dugaan peristiwa pidana.",
      legalBasis: "Pasal 1 angka 24 KUHAP.",
      analysis: "Pasal 1 angka 24 KUHAP merumuskan: Laporan adalah pemberitahuan yang disampaikan oleh seorang karena hak atau kewajiban berdasarkan undang-undang kepada pejabat yang berwenang tentang telah atau sedang atau diduga akan terjadinya peristiwa pidana."
    },
    difficulty: "Mudah"
  },
  {
    id: 152,
    category: "Hukum Acara Pidana",
    topicTag: "Jenis Pidana Pokok & Tambahan",
    question: "Pasal 10 KUHP mengatur tentang jenis-jenis sanksi pidana, yaitu pidana pokok dan pidana tambahan. Manakah di bawah ini yang BUKAN merupakan pidana tambahan?",
    options: [
      { key: "A", text: "Pencabutan hak-hak tertentu." },
      { key: "B", text: "Perampasan barang-barang tertentu." },
      { key: "C", text: "Pengumuman putusan hakim." },
      { key: "D", text: "Pidana denda." }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Pidana denda adalah pidana pokok, bukan pidana tambahan.",
      legalBasis: "Pasal 10 KUHP.",
      analysis: "Pidana pokok dalam Pasal 10 KUHP terdiri atas: pidana mati, penjara, kurungan, dan denda. Sedangkan pidana tambahan hanya terdiri atas: pencabutan hak-hak tertentu, perampasan barang-barang tertentu, dan pengumuman putusan hakim."
    },
    difficulty: "Mudah"
  },
  {
    id: 153,
    category: "Hukum Acara Pidana",
    topicTag: "Pelimpahan Berkas Perkara Penyidikan",
    question: "Penyidik kepolisian yang telah selesai menyidik suatu perkara tindak pidana, selanjutnya menyerahkan berkas perkara (Tahap I) kepada...",
    options: [
      { key: "A", text: "Ketua Pengadilan Negeri setempat" },
      { key: "B", text: "Tersangka dan penasihat hukumnya" },
      { key: "C", text: "Kejaksaan / Penuntut Umum" },
      { key: "D", text: "Menteri Hukum dan Hak Asasi Manusia" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Berkas perkara hasil penyidikan diserahkan kepada Penuntut Umum (Kejaksaan).",
      legalBasis: "Pasal 8 ayat (3) huruf a jo. Pasal 110 ayat (1) KUHAP.",
      analysis: "Dalam penyerahan berkas tahap I, penyidik menyerahkan berkas perkara hasil penyidikan kepada penuntut umum untuk diteliti kelengkapannya apakah sudah memenuhi syarat formil dan materiil (P-21) atau belum (P-19)."
    },
    difficulty: "Mudah"
  },
  {
    id: 154,
    category: "Hukum Acara Pidana",
    topicTag: "Peran Penasihat Hukum Saat Penyidikan",
    question: "Menurut Pasal 115 KUHAP, peran penasihat hukum dalam mendampingi tersangka pada tingkat pemeriksaan penyidikan adalah...",
    options: [
      { key: "A", text: "Ikut menentukan pertanyaan dan jalannya pemeriksaan penyidikan." },
      { key: "B", text: "Berhak melihat dan mendengar jalannya pemeriksaan terhadap tersangka." },
      { key: "C", text: "Memberikan jawaban secara langsung mewakili tersangka saat ditanya penyidik." },
      { key: "D", text: "Menandatangani Berita Acara Pemeriksaan sebagai pihak pertama." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Advokat berhak melihat dan mendengar jalannya pemeriksaan tersangka oleh penyidik.",
      legalBasis: "Pasal 115 ayat (1) KUHAP.",
      analysis: "Pasal 115 ayat (1) KUHAP mengatur: Dalam hal tertangkap tangan atau dalam hal tersangka diperiksa, penasihat hukum berhak mengikuti jalannya pemeriksaan dengan cara melihat serta mendengar pemeriksaan."
    },
    difficulty: "Mudah"
  },
  {
    id: 155,
    category: "Hukum Acara Pidana",
    topicTag: "Kasasi Demi Kepentingan Hukum",
    question: "Demi kepentingan hukum terhadap semua putusan yang telah memperoleh kekuatan hukum tetap dari pengadilan selain Mahkamah Agung, permohonan kasasi hanya dapat diajukan oleh...",
    options: [
      { key: "A", text: "Jaksa Penuntut Umum pada Kejaksaan Negeri" },
      { key: "B", text: "Jaksa Agung Republik Indonesia" },
      { key: "C", text: "Terdakwa atau keluarga kandungnya" },
      { key: "D", text: "Menteri Koordinator Bidang Hukum dan HAM" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Kasasi demi kepentingan hukum diajukan satu kali secara eksklusif oleh Jaksa Agung.",
      legalBasis: "Pasal 259 ayat (1) KUHAP.",
      analysis: "Pasal 259 ayat (1) KUHAP menentukan: Demi kepentingan hukum terhadap semua putusan yang telah memperoleh kekuatan hukum tetap dari pengadilan lain selain daripada Mahkamah Agung, dapat diajukan satu kali permohonan kasasi oleh Jaksa Agung."
    },
    difficulty: "Sedang"
  },
  {
    id: 156,
    category: "Hukum Acara Pidana",
    topicTag: "Alasan Peninjauan Kembali (PK)",
    question: "Berdasarkan Pasal 263 ayat (2) KUHAP, hal-hal berikut ini merupakan alasan yang dapat dijadikan dasar permintaan Peninjauan Kembali (PK), KECUALI...",
    options: [
      { key: "A", text: "Apabila ditemukan keadaan baru (novum) yang menimbulkan dugaan kuat bahwa terpidana tidak bersalah." },
      { key: "B", text: "Apabila dalam beberapa putusan terdapat hal-hal yang saling bertentangan satu sama lain." },
      { key: "C", text: "Apabila putusan dengan jelas memperlihatkan suatu kekhilafan hakim yang nyata." },
      { key: "D", text: "Apabila hukuman pidana yang dijatuhkan dirasa terlalu berat oleh keluarga terpidana." }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Rasa beratnya hukuman bukan merupakan dasar hukum permohonan Peninjauan Kembali.",
      legalBasis: "Pasal 263 ayat (2) KUHAP.",
      analysis: "Pasal 263 ayat (2) KUHAP merumuskan 3 alasan limitatif PK: a. novum (keadaan baru), b. pernyataan bahwa suatu hal terbukti namun saling bertentangan, c. putusan memuat kekhilafan hakim atau kekeliruan nyata."
    },
    difficulty: "Mudah"
  },
  {
    id: 157,
    category: "Hukum Acara Pidana",
    topicTag: "Jenis-jenis Penahanan",
    question: "Berdasarkan ketentuan Pasal 22 ayat (1) KUHAP, jenis-jenis penahanan terdiri atas...",
    options: [
      { key: "A", text: "Penahanan Rumah Tahanan Negara (Rutan), Penahanan Rumah, dan Penahanan Kota." },
      { key: "B", text: "Penahanan Sel, Penahanan Blok, dan Penahanan Kamar." },
      { key: "C", text: "Penahanan Terbuka dan Penahanan Tertutup." },
      { key: "D", text: "Penahanan Penjara dan Penahanan Pengasingan." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Jenis penahanan: Penahanan Rutan, Penahanan Rumah, dan Penahanan Kota.",
      legalBasis: "Pasal 22 ayat (1) KUHAP.",
      analysis: "Pasal 22 ayat (1) KUHAP membagi jenis penahanan ke dalam 3 bentuk: a. Penahanan rumah tahanan negara (Rutan); b. Penahanan rumah; c. Penahanan kota."
    },
    difficulty: "Mudah"
  },
  {
    id: 158,
    category: "Hukum Acara Pidana",
    topicTag: "Penangkapan Tanpa Surat Perintah",
    question: "Pada umumnya penangkapan wajib dilengkapi dengan Surat Perintah Penangkapan. Namun demikian, penangkapan DAPAT dilakukan tanpa surat perintah dalam hal...",
    options: [
      { key: "A", text: "Tersangka tidak kooperatif kepada penyidik" },
      { key: "B", text: "Tersangka tertangkap tangan (in flagrante delicto)" },
      { key: "C", text: "Terdapat kekhawatiran tersangka melarikan diri ke luar negeri" },
      { key: "D", text: "Perkara merupakan tindak pidana korupsi" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Tertangkap tangan membolehkan penangkapan tanpa surat perintah penangkapan.",
      legalBasis: "Pasal 18 ayat (2) KUHAP.",
      analysis: "Pasal 18 ayat (2) KUHAP mengatur secara tegas bahwa dalam hal tertangkap tangan penangkapan dilakukan tanpa surat perintah, dengan ketentuan bahwa penangkap harus segera menyerahkan tertangkap beserta barang bukti kepada penyidik terdekat."
    },
    difficulty: "Mudah"
  },
  {
    id: 159,
    category: "Hukum Acara Pidana",
    topicTag: "Syarat Sah Surat Dakwaan",
    question: "Surat Dakwaan yang dibuat oleh Penuntut Umum harus diberi tanggal dan ditandatangani serta memuat uraian cermat, jelas, dan lengkap mengenai tindak pidana yang didakwakan dengan menyebutkan...",
    options: [
      { key: "A", text: "Tempat dan waktu tindak pidana itu dilakukan (locus dan tempus delicti)." },
      { key: "B", text: "Nomor rekening dan harta kekayaan tersangka." },
      { key: "C", text: "Daftar nama seluruh keluarga terdakwa." },
      { key: "D", text: "Persetujuan dari penasihat hukum terdakwa." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Syarat materiil surat dakwaan memuat locus dan tempus delicti serta uraian cermat delik.",
      legalBasis: "Pasal 143 ayat (2) huruf b KUHAP.",
      analysis: "Pasal 143 ayat (2) huruf b KUHAP mensyaratkan surat dakwaan memuat uraian secara cermat, jelas, dan lengkap mengenai tindak pidana yang didakwakan dengan menyebutkan waktu dan tempat tindak pidana itu dilakukan (tempus dan locus delicti). Jika tidak, dakwaan batal demi hukum."
    },
    difficulty: "Mudah"
  },
  {
    id: 160,
    category: "Hukum Acara Pidana",
    topicTag: "Pengertian Tersangka",
    question: "Definisi Tersangka menurut Pasal 1 angka 14 KUHAP adalah...",
    options: [
      { key: "A", text: "Seseorang yang karena perbuatannya atau keadaannya, berdasarkan bukti permulaan patut diduga sebagai pelaku tindak pidana." },
      { key: "B", text: "Seseorang yang dituntut dan diadili di sidang pengadilan negeri." },
      { key: "C", text: "Seseorang yang telah dijatuhi vonis pidana oleh pengadilan." },
      { key: "D", text: "Seseorang yang dilaporkan oleh korban ke kantor kepolisian." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Tersangka adalah orang yang berdasarkan bukti permulaan patut diduga sebagai pelaku tindak pidana.",
      legalBasis: "Pasal 1 angka 14 KUHAP.",
      analysis: "Pasal 1 angka 14 KUHAP merumuskan: Tersangka adalah seorang yang karena perbuatannya atau keadaannya berdasarkan bukti permulaan patut diduga sebagai pelaku tindak pidana."
    },
    difficulty: "Mudah"
  },
  {
    id: 161,
    category: "Hukum Acara Pidana",
    topicTag: "Jangka Waktu Putusan Praperadilan",
    question: "Dalam perkara praperadilan, hakim tunggal yang ditunjuk memeriksa perkara wajib menjatuhkan putusan selambat-lambatnya dalam waktu...",
    options: [
      { key: "A", text: "3 (tiga) hari kerja" },
      { key: "B", text: "7 (tujuh) hari kerja sejak sidang pertama" },
      { key: "C", text: "14 hari kerja" },
      { key: "D", text: "30 hari kalender" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Pemeriksaan praperadilan diputus paling lambat dalam waktu 7 hari.",
      legalBasis: "Pasal 82 ayat (1) huruf c KUHAP.",
      analysis: "Pasal 82 ayat (1) huruf c KUHAP menentukan bahwa dalam waktu tujuh hari hakim harus sudah menjatuhkan putusannya dalam sidang pemeriksaan praperadilan."
    },
    difficulty: "Mudah"
  },
  {
    id: 162,
    category: "Hukum Acara Pidana",
    topicTag: "Putusan Lepas dari Segala Tuntutan (Ontslag)",
    question: "Apakah yang dimaksud dengan Putusan Lepas dari Segala Tuntutan Hukum (Ontslag van alle rechtsvervolging)?",
    options: [
      { key: "A", text: "Perbuatan yang didakwakan kepada terdakwa tidak terbukti sama sekali di persidangan." },
      { key: "B", text: "Perbuatan yang didakwakan terbukti secara sah dan meyakinkan, tetapi perbuatan tersebut bukan merupakan tindak pidana." },
      { key: "C", text: "Surat dakwaan penuntut umum dinyatakan batal demi hukum karena tidak cermat." },
      { key: "D", text: "Jaksa penuntut umum mencabut tuntutannya sebelum vonis dijatuhkan." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Ontslag dijatuhkan jika perbuatan terbukti namun bukan merupakan delik pidana.",
      legalBasis: "Pasal 191 ayat (2) KUHAP.",
      analysis: "Pasal 191 ayat (2) KUHAP menegaskan: Jika pengadilan berpendapat bahwa perbuatan yang didakwakan kepada terdakwa terbukti, tetapi perbuatan itu tidak merupakan suatu tindak pidana, maka terdakwa diputus lepas dari segala tuntutan hukum (ontslag)."
    },
    difficulty: "Sedang"
  },
  {
    id: 163,
    category: "Hukum Acara Pidana",
    topicTag: "Alat Bukti Sah Pidana",
    question: "Berdasarkan Pasal 184 ayat (1) KUHAP, alat bukti yang sah dalam persidangan pidana terdiri dari...",
    options: [
      { key: "A", text: "Keterangan saksi, keterangan ahli, surat, petunjuk, dan keterangan terdakwa." },
      { key: "B", text: "Keterangan saksi, pengakuan, keyakinan hakim, dan sumpah." },
      { key: "C", text: "Keterangan pelapor, berita acara kepolisian, dan barang bukti fisik." },
      { key: "D", text: "Keterangan saksi ahli, rekaman video, dan pengakuan polisi." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "5 alat bukti sah KUHAP: keterangan saksi, keterangan ahli, surat, petunjuk, keterangan terdakwa.",
      legalBasis: "Pasal 184 ayat (1) KUHAP.",
      analysis: "Pasal 184 ayat (1) KUHAP mengatur limitatif 5 alat bukti sah dalam peradilan pidana Indonesia: a. Keterangan saksi; b. Keterangan ahli; c. Surat; d. Petunjuk; e. Keterangan terdakwa."
    },
    difficulty: "Mudah"
  },
  {
    id: 164,
    category: "Hukum Acara Pidana",
    topicTag: "Acara Pemeriksaan Tindak Pidana Ringan (Tipiring)",
    question: "Perkara yang diperiksa menurut acara pemeriksaan tindak pidana ringan (tipiring) berdasarkan Pasal 205 KUHAP adalah perkara yang diancam dengan pidana penjara atau kurungan paling lama...",
    options: [
      { key: "A", text: "1 (satu) bulan" },
      { key: "B", text: "3 (tiga) bulan dan/atau denda" },
      { key: "C", text: "6 (enam) bulan" },
      { key: "D", text: "1 (satu) tahun" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Tipiring diperuntukkan bagi ancaman pidana penjara/kurungan paling lama 3 bulan atau denda.",
      legalBasis: "Pasal 205 ayat (1) KUHAP.",
      analysis: "Pasal 205 ayat (1) KUHAP menentukan: Yang diperiksa menurut acara pemeriksaan tindak pidana ringan ialah perkara yang diancam dengan pidana penjara atau kurungan paling lama tiga bulan dan atau denda sebanyak-banyaknya tujuh ribu lima ratus rupiah dan penghinaan ringan."
    },
    difficulty: "Mudah"
  },
  {
    id: 165,
    category: "Hukum Acara Pidana",
    topicTag: "Saksi Memberatkan (A Charge)",
    question: "Saksi yang diajukan oleh Penuntut Umum yang keterangannya memberatkan posisi Terdakwa dinamakan...",
    options: [
      { key: "A", text: "Saksi a charge" },
      { key: "B", text: "Saksi a de charge" },
      { key: "C", text: "Saksi mahkota" },
      { key: "D", text: "Saksi testimonium de auditu" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Saksi memberatkan adalah saksi a charge; saksi meringankan adalah saksi a de charge.",
      legalBasis: "Doktrin Hukum Acara Pidana jo. Pasal 160 KUHAP.",
      analysis: "Dalam terminologi hukum acara pidana, saksi yang memberatkan kesalahan terdakwa disebut saksi a charge (diajukan penuntut umum), sedangkan saksi yang meringankan terdakwa disebut saksi a de charge (diajukan oleh terdakwa/penasihat hukum)."
    },
    difficulty: "Mudah"
  },
  {
    id: 166,
    category: "Hukum Acara Pidana",
    topicTag: "Tenggang Waktu Kasasi Pidana",
    question: "Tenggang waktu pengajuan permohonan kasasi perkara pidana menurut Pasal 245 KUHAP adalah...",
    options: [
      { key: "A", text: "7 hari sejak putusan diucapkan atau diberitahukan" },
      { key: "B", text: "14 hari sesudah putusan pengadilan diberitahukan kepada terdakwa" },
      { key: "C", text: "30 hari kerja" },
      { key: "D", text: "Tidak mengenal batas waktu kedaluwarsa" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Permohonan kasasi pidana diajukan dalam tenggang waktu 14 hari setelah putusan diberitahukan.",
      legalBasis: "Pasal 245 ayat (1) KUHAP.",
      analysis: "Pasal 245 ayat (1) KUHAP menentukan: Permohonan kasasi disampaikan oleh pemohon kepada panitera pengadilan yang telah memutus perkaranya dalam tingkat pertama, dalam tenggang waktu empat belas hari sesudah putusan pengadilan yang dimintakan kasasi itu diberitahukan kepada terdakwa."
    },
    difficulty: "Mudah"
  },
  {
    id: 167,
    category: "Hukum Acara Pidana",
    topicTag: "Pemohon Praperadilan",
    question: "Berdasarkan Pasal 79 KUHAP, permohonan pemeriksaan tentang sah atau tidaknya suatu penangkapan atau penahanan diajukan oleh...",
    options: [
      { key: "A", text: "Tersangka, keluarga, atau kuasanya kepada Ketua Pengadilan Negeri." },
      { key: "B", text: "Penyidik kepada Kejaksaan Tinggi." },
      { key: "C", text: "Kepala Desa tempat tersangka berdomisili." },
      { key: "D", text: "Menteri Hukum dan HAM." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Praperadilan diajukan oleh tersangka, keluarga, atau kuasa hukumnya kepada Ketua PN.",
      legalBasis: "Pasal 79 KUHAP.",
      analysis: "Pasal 79 KUHAP menentukan: Permintaan pemeriksaan tentang sah atau tidaknya suatu penangkapan atau penahanan diajukan oleh tersangka, keluarga atau kuasanya kepada ketua pengadilan negeri dengan menyebutkan alasannya."
    },
    difficulty: "Mudah"
  },
  {
    id: 168,
    category: "Hukum Acara Pidana",
    topicTag: "Pengembalian Berkas Penyidikan (P-19)",
    question: "Apabila berkas perkara hasil penyidikan yang diteliti oleh Penuntut Umum ternyata belum lengkap, tindakan apakah yang dilakukan oleh Penuntut Umum?",
    options: [
      { key: "A", text: "Melimpahkan berkas perkara langsung ke pengadilan negeri untuk disidangkan" },
      { key: "B", text: "Mengembalikan berkas perkara kepada penyidik disertai petunjuk untuk dilengkapi (P-19)" },
      { key: "C", text: "Menghentikan penuntutan perkara seketika" },
      { key: "D", text: "Mengambil alih seluruh proses penyidikan kepolisian" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Penuntut umum mengembalikan berkas belum lengkap kepada penyidik disertai petunjuk (P-19).",
      legalBasis: "Pasal 138 ayat (2) KUHAP.",
      analysis: "Pasal 138 ayat (2) KUHAP menentukan: Dalam hal hasil penyidikan ternyata belum lengkap, penuntut umum mengembalikan berkas perkara kepada penyidik disertai petunjuk tentang hal yang harus dilengkapi."
    },
    difficulty: "Mudah"
  },
  {
    id: 169,
    category: "Hukum Acara Pidana",
    topicTag: "Syarat Saksi Sah KUHAP",
    question: "Berdasarkan Pasal 1 angka 27 KUHAP, keterangan saksi yang sah adalah keterangan mengenai suatu peristiwa pidana yang...",
    options: [
      { key: "A", text: "Ia dengar sendiri, ia lihat sendiri, dan ia alami sendiri dengan menyebut alasan dari pengetahuannya itu." },
      { key: "B", text: "Ia dengar dari cerita rekan kerjanya di kantor." },
      { key: "C", text: "Ia baca dari pemberitaan media massa daring." },
      { key: "D", text: "Hasil kesimpulan dan dugaan pribadinya semata." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Keterangan saksi adalah apa yang ia dengar sendiri, lihat sendiri, dan alami sendiri.",
      legalBasis: "Pasal 1 angka 27 jo. Pasal 185 ayat (1) KUHAP.",
      analysis: "Keterangan saksi sebagai alat bukti sah harus memenuhi kriteria mendengar sendiri, melihat sendiri, atau mengalami sendiri suatu peristiwa hukum pidana (bukan de auditu) dengan mengemukakan alasan pengetahuannya."
    },
    difficulty: "Mudah"
  },
  {
    id: 170,
    category: "Hukum Acara Pidana",
    topicTag: "Penahanan Penyidik Maksimal",
    question: "Penyidik berwenang melakukan penahanan terhadap Tersangka tanpa perpanjangan dari penuntut umum untuk paling lama...",
    options: [
      { key: "A", text: "20 (dua puluh) hari" },
      { key: "B", text: "30 hari" },
      { key: "C", text: "40 hari" },
      { key: "D", text: "60 hari" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Penahanan oleh penyidik tanpa perpanjangan berlaku paling lama 20 hari.",
      legalBasis: "Pasal 24 ayat (1) KUHAP.",
      analysis: "Pasal 24 ayat (1) KUHAP menegaskan: Perintah penahanan yang diberikan oleh penyidik hanya berlaku paling lama dua puluh hari."
    },
    difficulty: "Mudah"
  },
  // --- KODE ETIK ADVOKAT (AUTHENTIC TOAZ & TRYOUT) ---
  {
    id: 171,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Komisi Pengawasan Advokat",
    question: "Berdasarkan Pasal 13 ayat (1) UU No. 18 Tahun 2003 tentang Advokat, Komisi Pengawasan Advokat dibentuk oleh Organisasi Advokat dengan keanggotaan yang terdiri dari unsur...",
    options: [
      { key: "A", text: "Advokat senior, para ahli/akademisi, dan masyarakat." },
      { key: "B", text: "Pensiunan hakim, jaksa agung, dan kepolisian." },
      { key: "C", text: "Hakim aktif dan menteri hukum." },
      { key: "D", text: "Pengurus partai politik dan anggota DPR." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Komisi Pengawasan Advokat beranggotakan advokat senior, ahli/akademisi, dan masyarakat.",
      legalBasis: "Pasal 13 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Pasal 13 ayat (1) UU Advokat menentukan: Pelaksanaan pengawasan sehari-hari dilakukan oleh Komisi Pengawasan yang dibentuk oleh Organisasi Advokat dengan keanggotaan terdiri atas unsur Advokat senior, para ahli atau akademisi, dan masyarakat."
    },
    difficulty: "Sedang"
  },
  {
    id: 172,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Wilayah Kerja Praktek Advokat",
    question: "Sesuai Pasal 5 ayat (2) UU No. 18 Tahun 2003, wilayah kerja praktek seorang Advokat yang telah disumpah meliputi...",
    options: [
      { key: "A", text: "Seluruh wilayah negara Republik Indonesia." },
      { key: "B", text: "Hanya di wilayah hukum Pengadilan Tinggi tempat ia diambil sumpah." },
      { key: "C", text: "Hanya di wilayah domisili kantor hukumnya." },
      { key: "D", text: "Terbatas pada pengadilan tingkat pertama saja." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Wilayah kerja advokat meliputi seluruh wilayah Republik Indonesia.",
      legalBasis: "Pasal 5 ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Pasal 5 ayat (2) UU Advokat menegaskan: Wilayah kerja Advokat meliputi seluruh wilayah negara Republik Indonesia. Advokat berhak beracara di seluruh tingkatan badan peradilan di Indonesia."
    },
    difficulty: "Mudah"
  },
  {
    id: 173,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Alasan Pemberhentian Tetap Advokat",
    question: "Berdasarkan Pasal 10 ayat (1) UU Advokat, seorang Advokat diberhentikan dari profesinya secara tetap karena alasan-alasan berikut, KECUALI...",
    options: [
      { key: "A", text: "Permohonan sendiri." },
      { key: "B", text: "Dijatuhi pidana penjara 4 tahun atau lebih karena tindak pidana yang diancam pidana 4 tahun atau lebih berdasarkan putusan berkekuatan hukum tetap." },
      { key: "C", text: "Berdasarkan keputusan Organisasi Advokat." },
      { key: "D", text: "Kalah dalam persidangan perdata membela klien." }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Kalah dalam persidangan bukan alasan pemberhentian profesi advokat.",
      legalBasis: "Pasal 10 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Pasal 10 ayat (1) menentukan alasan pemberhentian tetap: a. permohonan sendiri; b. dijatuhi pidana yang telah berkekuatan hukum tetap karena tindak pidana dengan ancaman 4 tahun atau lebih; c. keputusan Organisasi Advokat."
    },
    difficulty: "Mudah"
  },
  {
    id: 174,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Surat Bertanda Sans Prejudice",
    question: 'Dalam korespondensi antar advokat, surat yang diberi tanda "Sans Prejudice" memiliki konsekuensi hukum bahwa...',
    options: [
      { key: "A", text: "Surat tersebut tidak dapat dijadikan sebagai alat bukti di muka persidangan pengadilan." },
      { key: "B", text: "Surat tersebut harus segera dilaporkan kepada kepolisian." },
      { key: "C", text: "Surat tersebut otomatis menjadi akta otentik yang mengikat para pihak." },
      { key: "D", text: "Surat tersebut dibuat tanpa bantuan penerjemah tersumpah." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: 'Surat "Sans Prejudice" adalah surat rahasia perundingan damai yang tidak dapat dijadikan alat bukti di sidang.',
      legalBasis: "Pasal 7 huruf e Kode Etik Advokat Indonesia (KEAI).",
      analysis: 'Pasal 7 huruf e KEAI mengatur bahwa surat-surat yang dikirim oleh advokat kepada teman sejawatnya dalam rangka upaya perdamaian yang dibubuhi catatan "Sans Prejudice" tidak dapat diajukan sebagai alat bukti di hadapan hakim pengadilan.'
    },
    difficulty: "Sedang"
  },
  {
    id: 175,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Larangan Mencari Publisitas Berlebihan",
    question: "Bagaimanakah sikap Kode Etik Advokat Indonesia mengenai advokat yang mencari publisitas diri di media massa?",
    options: [
      { key: "A", text: "Dibenarkan seluas-luasnya untuk mempromosikan tarif honorariumnya." },
      { key: "B", text: "Tidak dibenarkan mencari publisitas bagi dirinya melalui media massa untuk menarik perhatian masyarakat yang merugikan rekan sejawat." },
      { key: "C", text: "Boleh jika membayar pajak iklan kepada pemerintah daerah." },
      { key: "D", text: "Boleh asalkan memuat foto seluruh anggota kantor." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Advokat dilarang memasang iklan atau mencari publisitas diri semata untuk menarik perhatian publik.",
      legalBasis: "Pasal 8 huruf b Kode Etik Advokat Indonesia (KEAI).",
      analysis: "Pasal 8 huruf b KEAI melarang advokat memasang iklan semata-mata untuk menarik perhatian orang dan mencari publisitas melalui media massa, demi menjaga kehormatan profesi yang mulia (officium nobile)."
    },
    difficulty: "Mudah"
  },
  {
    id: 176,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Larangan Rangkap Jabatan Pimpinan",
    question: "Berdasarkan Pasal 28 ayat (3) UU No. 18 Tahun 2003 tentang Advokat, pimpinan Organisasi Advokat DILARANG merangkap jabatan sebagai...",
    options: [
      { key: "A", text: "Dosen di fakultas hukum" },
      { key: "B", text: "Pimpinan partai politik, baik di tingkat pusat maupun di tingkat daerah" },
      { key: "C", text: "Pengurus yayasan keagamaan" },
      { key: "D", text: "Penulis buku ilmiah hukum" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Pimpinan organisasi advokat tidak boleh merangkap sebagai pimpinan partai politik.",
      legalBasis: "Pasal 28 ayat (3) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Pasal 28 ayat (3) UU Advokat menegaskan: Pimpinan Organisasi Advokat tidak dapat merangkap sebagai pimpinan partai politik, baik di tingkat pusat maupun di tingkat daerah, demi menjaga independensi profesi advokat dari kepentingan politik partisan."
    },
    difficulty: "Mudah"
  },
  {
    id: 177,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Pemeriksaan Berkas Perkara Pertama Kali",
    question: "Tindakan pertama yang secara etis WAJIB dilakukan oleh seorang Advokat ketika menerima berkas perkara dari calon kliennya adalah...",
    options: [
      { key: "A", text: "Segera meminta pembayaran uang muka honorarium." },
      { key: "B", text: "Menanyakan apakah perkara tersebut sudah pernah dikuasakan kepada advokat lain." },
      { key: "C", text: "Mendaftarkan gugatan ke pengadilan pada hari yang sama." },
      { key: "D", text: "Mengadakan konferensi pers mengenai perkara tersebut." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Advokat wajib memastikan terlebih dahulu apakah perkara sedang ditangani oleh kuasa hukum lain.",
      legalBasis: "Pasal 5 huruf d Kode Etik Advokat Indonesia (KEAI).",
      analysis: "Demi menjunjung solidaritas dan etika profesi, advokat wajib menanyakan apakah perkara tersebut telah diserahkan kuasanya kepada advokat lain guna memastikan tidak terjadi pelanggaran merebut perkara rekan sejawat."
    },
    difficulty: "Mudah"
  },
  // --- HUKUM ACARA PERDATA (AUTHENTIC TOAZ & TRYOUT) ---
  {
    id: 178,
    category: "Hukum Acara Perdata",
    topicTag: "Cacat Tersembunyi (Actio Quanti Minoris)",
    question: "Gugatan perdata yang diajukan oleh pembeli untuk menuntut pengurangan harga barang karena adanya cacat tersembunyi yang tidak diberitahukan oleh penjual disebut...",
    options: [
      { key: "A", text: "Actio Pauliana" },
      { key: "B", text: "Actio Quanti Minoris" },
      { key: "C", text: "Actio Redhibitoria" },
      { key: "D", text: "Actio in Personam" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Actio quanti minoris adalah gugatan menuntut pengurangan harga karena cacat tersembunyi.",
      legalBasis: "Pasal 1504 sampai Pasal 1512 KUHPerdata.",
      analysis: "Pasal 1504 KUHPerdata mengatur kewajiban penjual menanggung cacat tersembunyi. Pembeli dapat memilih: mengembalikan barang dengan menuntut pengembalian harga (actio redhibitoria) atau tetap menahan barang dengan menuntut pengurangan harga (actio quanti minoris)."
    },
    difficulty: "Sedang"
  },
  {
    id: 179,
    category: "Hukum Acara Perdata",
    topicTag: "Kebenaran Formil dalam Perdata",
    question: 'Dalam pemeriksaan perkara perdata, hakim mencari "kebenaran formil" (formele waarheid), yang memiliki arti bahwa...',
    options: [
      { key: "A", text: "Hakim harus mencari kebenaran mutlak materiil sebagaimana halnya dalam perkara pidana." },
      { key: "B", text: "Hakim terikat pada apa yang dikemukakan dan dibuktikan oleh para pihak yang berperkara di muka persidangan." },
      { key: "C", text: "Hakim bebas memutus tanpa dasar alat bukti sah." },
      { key: "D", text: "Kebenaran hanya ditentukan oleh pengakuan sepihak dari Penggugat." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Kebenaran formil adalah kebenaran yang didasarkan pada dalil dan alat bukti yang diajukan para pihak di sidang.",
      legalBasis: "Asas Pembuktian Hukum Acara Perdata jo. Pasal 163 HIR.",
      analysis: "Berbeda dengan perkara pidana yang mencari kebenaran materiil seluas-luasnya, perkara perdata berprinsip hakim bersifat pasif dan mencari kebenaran formil berdasarkan bukti-bukti sah yang diajukan oleh pihak-pihak yang bersengketa."
    },
    difficulty: "Mudah"
  },
  {
    id: 180,
    category: "Hukum Acara Perdata",
    topicTag: "Teori Fundamentum Petendi",
    question: "Teori yang mengajarkan bahwa dalam posita (fundamentum petendi) gugatan harus menguraikan peristiwa konkret yang menjadi sebab timbulnya peristiwa hukum yang menjadi dasar gugatan disebut...",
    options: [
      { key: "A", text: "Substantierings theorie" },
      { key: "B", text: "Individualiserings theorie" },
      { key: "C", text: "Legitieme theorie" },
      { key: "D", text: "Subjectieve theorie" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Substantierings theorie mewajibkan uraian peristiwa konkret sejarah timbulnya hubungan hukum.",
      legalBasis: "Pasal 8 angka 3 Reglement op de Rechtsvordering (Rv) jo. Pasal 120 jo. Pasal 121 HIR (Staatsblad 1941 No. 44).",
      analysis: "Dalam penyusunan posita dikenal dua teori: Substantierings theorie (mengharuskan penggugat menguraikan fakta konkret kronologis timbulnya hak) dan Individualiserings theorie (cukup menyebutkan hubungan hukumnya saja). Praktik peradilan Indonesia menganut Substantierings theorie."
    },
    difficulty: "Sedang"
  },
  {
    id: 181,
    category: "Hukum Acara Perdata",
    topicTag: "Gugatan Ditolak vs Tidak Diterima",
    question: 'Gugatan Penggugat akan diputus "Ditolak" (ontzegd) oleh majelis hakim apabila...',
    options: [
      { key: "A", text: "Gugatan kabur (obscuur libel)" },
      { key: "B", text: "Penggugat tidak memiliki kapasitas hukum (error in persona)" },
      { key: "C", text: "Dalil-dalil gugatan Penggugat tidak terbukti di persidangan setelah pemeriksaan pokok perkara" },
      { key: "D", text: "Surat kuasa khusus penggugat tidak memenuhi syarat formal" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Gugatan ditolak jika dalil pokok perkara tidak terbukti; tidak diterima (NO) jika cacat formil.",
      legalBasis: "Pasal 178 ayat (1) HIR / Pasal 189 ayat (1) RBg jo. Pasal 163 HIR / Pasal 283 RBg / Pasal 1865 KUHPerdata.",
      analysis: "Perbedaan mendasar: Gugatan Tidak Dapat Diterima (Niet Ontvankelijke Verklaard / NO) dijatuhkan bila ada cacat formil (kabur, kurang pihak, tidak berwenang). Sedangkan Gugatan Ditolak dijatuhkan bila gugatan telah diperiksa pokok perkaranya namun dalil penggugat tidak terbukti."
    },
    difficulty: "Mudah"
  },
  {
    id: 182,
    category: "Hukum Acara Perdata",
    topicTag: "Putusan Insidentil",
    question: "Putusan hakim di persidangan yang dijatuhkan sehubungan dengan adanya insiden (misalnya permohonan sita jaminan atau intervensi) sebelum dijatuhkannya putusan akhir disebut...",
    options: [
      { key: "A", text: "Putusan Insidentil" },
      { key: "B", text: "Putusan Deklaratoir" },
      { key: "C", text: "Putusan Perdamaian" },
      { key: "D", text: "Putusan Serta Merta" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Putusan yang memutus peristiwa insidental sebelum putusan akhir adalah putusan insidentil.",
      legalBasis: "Pasal 185 ayat (1) HIR / 196 RBg.",
      analysis: "Putusan sela terdiri atas: putusan preparatoir, interlocutoir, insidentil, dan provisionil. Putusan insidentil adalah putusan sela yang memutus insiden yang timbul di tengah jalannya pemeriksaan, seperti permohonan sita jaminan atau intervensi pihak ketiga."
    },
    difficulty: "Sedang"
  },
  {
    id: 183,
    category: "Hukum Acara Perdata",
    topicTag: "Kompetensi Gugatan Benda Tidak Bergerak",
    question: "Berdasarkan Pasal 118 ayat (3) HIR, gugatan perdata mengenai kepemilikan tanah dan benda tidak bergerak harus diajukan kepada Pengadilan Negeri yang daerah hukumnya meliputi...",
    options: [
      { key: "A", text: "Tempat kediaman Penggugat" },
      { key: "B", text: "Tempat di mana benda tidak bergerak itu terletak (Forum Rei Sitae)" },
      { key: "C", text: "Tempat di mana akta jual beli dibuat" },
      { key: "D", text: "Pengadilan Negeri Jakarta Pusat" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Gugatan benda tidak bergerak diajukan di pengadilan tempat tanah/benda tersebut terletak.",
      legalBasis: "Pasal 118 ayat (3) HIR jo. Pasal 142 ayat (5) RBg.",
      analysis: "Asas Forum Rei Sitae (Forum Domicilii Rei) mengatur pengecualian asas umum: apabila objek sengketa adalah benda tidak bergerak (seperti tanah, rumah), maka gugatan wajib diajukan ke PN yang membawahi wilayah letak benda tidak bergerak tersebut."
    },
    difficulty: "Mudah"
  },
  {
    id: 184,
    category: "Hukum Acara Perdata",
    topicTag: "Gugurnya Gugatan Penggugat",
    question: "Berdasarkan ketentuan Pasal 124 HIR, apabila Penggugat tidak hadir pada hari sidang pertama setelah dipanggil secara sah dan patut dan tidak menyuruh wakilnya yang sah, maka majelis hakim dapat menjatuhkan putusan...",
    options: [
      { key: "A", text: "Putusan Verstek" },
      { key: "B", text: "Menyatakan gugatan Penggugat gugur" },
      { key: "C", text: "Putusan serta merta" },
      { key: "D", text: "Memerintahkan penahanan terhadap Penggugat" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Ketidakhadiran penggugat tanpa alasan sah pada sidang pertama menyebabkan gugatan gugur.",
      legalBasis: "Pasal 124 HIR jo. Pasal 148 RBg.",
      analysis: "Pasal 124 HIR menentukan: Jika penggugat tidak datang menghadap pengadilan negeri pada hari yang ditentukan itu, meskipun telah dipanggil dengan patut, dan tidak menyuruh orang lain menghadap sebagai wakilnya, maka surat gugatannya dinyatakan gugur."
    },
    difficulty: "Mudah"
  },
  {
    id: 185,
    category: "Hukum Acara Perdata",
    topicTag: "Syarat Surat Kuasa Khusus",
    question: "Berdasarkan SEMA No. 6 Tahun 1994 jo. Pasal 123 HIR, surat kuasa khusus untuk beracara di pengadilan perdata harus memenuhi unsur-unsur berikut, KECUALI...",
    options: [
      { key: "A", text: "Menyebutkan secara jelas identitas para pihak (pemberi dan penerima kuasa)." },
      { key: "B", text: "Menyebutkan secara spesifik pokok sengketa dan pihak lawannya." },
      { key: "C", text: "Menyebutkan kompetensi pengadilan tempat gugatan diajukan." },
      { key: "D", text: "Wajib disahkan terlebih dahulu oleh Mahkamah Agung RI." }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Surat kuasa khusus tidak memerlukan pengesahan dari Mahkamah Agung.",
      legalBasis: "SEMA No. 6 Tahun 1994 jo. SEMA No. 1 Tahun 1971 jo. Pasal 123 HIR.",
      analysis: "SEMA 6/1994 merumuskan syarat limitatif surat kuasa khusus: identitas para pihak, objek perkara/materi sengketa, pihak lawan yang digugat, dan pengadilan yang dituju. Cacat pada syarat ini menyebabkan surat kuasa tidak sah dan gugatan dinyatakan NO."
    },
    difficulty: "Mudah"
  },
  {
    id: 186,
    category: "Hukum Acara Perdata",
    topicTag: "Beban Pembuktian (Actori Incumbit Probatio)",
    question: 'Asas pembuktian perdata "Actori Incumbit Probatio" sebagaimana diatur dalam Pasal 163 HIR dan Pasal 1865 KUHPerdata bermakna...',
    options: [
      { key: "A", text: "Barang siapa yang mendalilkan mempunyai suatu hak atau mengemukakan suatu peristiwa, wajib membuktikan adanya hak atau peristiwa tersebut." },
      { key: "B", text: "Tergugat selalu dibebani kewajiban membuktikan ketidakbersalahannya." },
      { key: "C", text: "Hakim wajib aktif mencari alat bukti di luar persidangan." },
      { key: "D", text: "Bukti hanya sah apabila diajukan oleh pejabat pemerintah." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Siapa yang mendalilkan hak wajib membuktikannya (Actori Incumbit Probatio).",
      legalBasis: "Pasal 163 HIR jo. Pasal 1865 KUHPerdata.",
      analysis: "Pasal 163 HIR menetapkan: Barangsiapa yang mengatakan mempunyai barang sesuatu hak atau mengemukakan suatu perbuatan untuk meneguhkan haknya, atau untuk membantah hak orang lain, harus membuktikan adanya hak itu atau adanya perbuatan itu."
    },
    difficulty: "Mudah"
  },
  {
    id: 187,
    category: "Hukum Acara Perdata",
    topicTag: "Gugatan Lisan (Mondelinge Vorderingen)",
    question: "Berdasarkan Pasal 120 HIR, seseorang yang buta huruf (tidak pandai menulis) dapat mengajukan gugatan perdata dengan cara...",
    options: [
      { key: "A", text: "Dilarang mengajukan gugatan sebelum memiliki ijazah sekolah dasar." },
      { key: "B", text: "Mengajukan gugatan secara lisan kepada Ketua Pengadilan Negeri yang kemudian mencatat dan membukukan gugatan tersebut." },
      { key: "C", text: "Wajib memberikan kuasa kepada notaris setempat." },
      { key: "D", text: "Hanya boleh mengajukan permohonan ke kelurahan." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Gugatan lisan diajukan kepada Ketua PN yang mencatat dan merumuskannya secara tertulis.",
      legalBasis: "Pasal 120 HIR jo. Pasal 144 RBg.",
      analysis: "Pasal 120 HIR mengakomodasi akses keadilan bagi masyarakat buta huruf: Jika penggugat tidak pandai menulis, maka ia dapat memasukkan gugatannya secara lisan kepada ketua pengadilan negeri, yang mencatat gugatan itu atau menyuruh mencatatnya."
    },
    difficulty: "Sedang"
  },
  // --- HUKUM ACARA PERADILAN AGAMA (AUTHENTIC TOAZ & TRYOUT) ---
  {
    id: 188,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Panggilan Cerai Alamat Gaib",
    question: "Dalam perkara perceraian di Pengadilan Agama, apabila tempat kediaman Tergugat/Termohon tidak diketahui secara jelas atau berada di alamat gaib, panggilan sidang dilakukan dengan cara...",
    options: [
      { key: "A", text: "Menempelkan panggilan pada papan pengumuman Pengadilan Agama dan mengumumkannya melalui satu atau beberapa surat kabar/media massa." },
      { key: "B", text: "Memanggil melalui kantor kelurahan tempat tinggal Penggugat saja." },
      { key: "C", text: "Gugatan otomatis ditolak dan tidak dapat disidangkan." },
      { key: "D", text: "Menunggu sampai Tergugat ditemukan oleh aparat kepolisian." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Panggilan pihak yang gaib/tidak diketahui dilakukan melalui papan pengumuman PA dan media massa.",
      legalBasis: "Pasal 27 PP No. 9 Tahun 1975 jo. Pasal 138 KHI.",
      analysis: "Pasal 27 PP 9/1975 mengatur bahwa apabila tergugat tidak diketahui tempat kediamannya, panggilan dilakukan dengan menempelkan surat gugatan pada papan pengumuman pengadilan dan mengumumkannya melalui surat kabar atau media massa sebanyak 2 kali dengan tenggang waktu 1 bulan."
    },
    difficulty: "Sedang"
  },
  {
    id: 189,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Talak Ba'in Kubraa",
    question: "Apakah yang dimaksud dengan Talak Ba'in Kubraa dalam hukum perkawinan Islam?",
    options: [
      { key: "A", text: "Talak yang dijatuhkan untuk pertama kalinya dan suami boleh langsung rujuk." },
      { key: "B", text: "Talak yang terjadi untuk ketiga kalinya, di mana bekas suami tidak boleh rujuk atau menikah kembali kecuali bekas istri telah menikah dengan pria lain lalu bercerai dan habis masa iddahnya." },
      { key: "C", text: "Talak yang dijatuhkan di hadapan penghulu KUA." },
      { key: "D", text: "Talak yang disertai dengan pembayaran uang tebusan (iwadl)." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Talak Ba'in Kubraa adalah talak ketiga yang melarang rujuk kecuali ada muhallil.",
      legalBasis: "Pasal 120 Kompilasi Hukum Islam (KHI).",
      analysis: "Pasal 120 KHI menegaskan: Talak ba'in kubraa adalah talak yang terjadi untuk ketiga kalinya. Talak jenis ini tidak dapat dirujuk dan tidak dapat dinikahkan kembali antara bekas suami-istri tersebut, kecuali setelah bekas istri menikah dengan orang lain kemudian bercerai dan habis iddahnya."
    },
    difficulty: "Mudah"
  },
  {
    id: 190,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Alasan Khusus Itsbat Nikah",
    question: "Berdasarkan Pasal 7 ayat (3) KHI, itsbat nikah (pengesahan nikah) yang dapat diajukan ke Pengadilan Agama terbatas mengenai hal-hal berikut, KECUALI...",
    options: [
      { key: "A", text: "Adanya perkawinan dalam rangka penyelesaian perceraian." },
      { key: "B", text: "Hilangnya Akta Nikah." },
      { key: "C", text: "Adanya keraguan tentang sah atau tidaknya salah satu syarat perkawinan." },
      { key: "D", text: "Perkawinan poligami liar tanpa izin pengadilan dan tanpa izin istri pertama." }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Poligami liar tanpa izin tidak dapat disahkan melalui itsbat nikah biasa.",
      legalBasis: "Pasal 7 ayat (3) Kompilasi Hukum Islam (KHI) jo. SEMA No. 3 Tahun 2018.",
      analysis: "SEMA 3/2018 menegaskan bahwa itsbat nikah tidak boleh digunakan untuk melegalisasi poligami liar tanpa izin pengadilan. Pasal 7 ayat (3) KHI membatasi itsbat nikah hanya untuk: nikah sebelum UU 1/1974, akta hilang, keraguan syarat, atau dalam rangka perceraian."
    },
    difficulty: "Sedang"
  },
  {
    id: 191,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Tempat Sahnya Perceraian",
    question: "Berdasarkan Pasal 39 ayat (1) UU No. 1 Tahun 1974 jo. Pasal 115 KHI, perceraian hanya dapat dilakukan dan diakui sah secara hukum apabila...",
    options: [
      { key: "A", text: "Diucapkan secara sepihak oleh suami di rumah bersama." },
      { key: "B", text: "Dilakukan di depan sidang Pengadilan Agama setelah pengadilan berusaha mendamaikan dan tidak berhasil." },
      { key: "C", text: "Dibuatkan surat pernyataan bermeterai di kantor kelurahan." },
      { key: "D", text: "Diumumkan di depan para tetangga dan saksi keluarga." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Perceraian hanya sah jika dilakukan di depan sidang Pengadilan Agama.",
      legalBasis: "Pasal 39 ayat (1) UU No. 1 Tahun 1974 jo. Pasal 115 KHI.",
      analysis: "Pasal 115 KHI secara tegas mengatur: Perceraian hanya dapat dilakukan di depan sidang Pengadilan Agama setelah Pengadilan Agama tersebut berusaha dan tidak berhasil mendamaikan kedua belah pihak. Talak di luar sidang tidak berkekuatan hukum negara."
    },
    difficulty: "Mudah"
  },
  {
    id: 192,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Kepala Putusan Pengadilan Agama",
    question: "Berdasarkan Pasal 57 ayat (1) dan (2) UU No. 7 Tahun 1989 tentang Peradilan Agama, setiap penetapan dan putusan Pengadilan Agama wajib dimulai dengan kalimat...",
    options: [
      { key: "A", text: "BISMILLAHIRRAHMANIRRAHIM diikuti dengan DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA." },
      { key: "B", text: "DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA saja tanpa basmalah." },
      { key: "C", text: "ATAS NAMA NEGARA DAN BANGSA INDONESIA." },
      { key: "D", text: "DENGAN RAHMAT TUHAN YANG MAHA ESA." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Putusan Pengadilan Agama berkepala Basmalah diikuti Irah-irah Demi Keadilan.",
      legalBasis: "Pasal 57 ayat (1) dan (2) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      analysis: 'Karakteristik khas putusan Pengadilan Agama diatur dalam Pasal 57 ayat (2): Pada kepala penetapan dan putusan tersebut dicantumkan kalimat "BISMILLAHIRRAHMANIRRAHIM" yang mendahului "DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA".'
    },
    difficulty: "Mudah"
  },
  // --- HUKUM ACARA PERADILAN TATA USAHA NEGARA (AUTHENTIC TOAZ & TRYOUT) ---
  {
    id: 193,
    category: "Hukum Acara PTUN",
    topicTag: "Objek Sengketa Beschikking",
    question: "Di bawah ini yang secara sah merupakan Keputusan Tata Usaha Negara (beschikking) yang dapat digugat di PTUN adalah...",
    options: [
      { key: "A", text: "Peraturan Pemerintah yang bersifat umum (regeling)." },
      { key: "B", text: "Surat Keputusan Pemberhentian Tidak Dengan Hormat Pegawai Negeri Sipil oleh Walikota." },
      { key: "C", text: "Surat Perjanjian Sewa Beli gedung antara Pemda dan pihak swasta." },
      { key: "D", text: "Surat Penetapan Tersangka oleh Penyidik Kepolisian." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "SK pemberhentian PNS adalah penetapan tertulis konkret, individual, final pejabat TUN.",
      legalBasis: "Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang PTUN.",
      analysis: "SK pemberhentian PNS memenuhi seluruh unsur KTUN: penetapan tertulis, pejabat TUN (Walikota), konkret terhadap orang tertentu, individual, final, dan menimbulkan akibat hukum hilangnya status kepegawaian."
    },
    difficulty: "Mudah"
  },
  {
    id: 194,
    category: "Hukum Acara PTUN",
    topicTag: "Asas Praesumptio Justae Causa",
    question: 'Di dalam Hukum Acara Peradilan Tata Usaha Negara dikenal asas "Praesumptio Justae Causa" yang bermakna...',
    options: [
      { key: "A", text: "Keputusan Tergugat haruslah selalu dianggap benar dan sah menurut hukum sampai ada putusan pengadilan berkekuatan tetap yang membatalkannya." },
      { key: "B", text: "Prinsip praduga bersalah terhadap pejabat administrasi." },
      { key: "C", text: "Tuntutan ganti rugi wajib dibayar sebelum pemeriksaan dimulai." },
      { key: "D", text: "Penggugat dianggap selalu benar dalam posita gugatannya." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Keputusan TUN dianggap sah sebelum dibatalkan putusan berkekuatan hukum tetap.",
      legalBasis: "Pasal 67 ayat (1) UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Asas Praesumptio Justae Causa (Vermoeden van Rechtmatigheid) menetapkan demi kepastian dan kontinuitas pelayanan publik, KTUN tidak gugur atau tertunda berlakunya semata-mata karena adanya gugatan, sebelum pengadilan memutuskannya."
    },
    difficulty: "Mudah"
  },
  {
    id: 195,
    category: "Hukum Acara PTUN",
    topicTag: "Alasan Gugatan di PTUN (Pasal 53)",
    question: "Berdasarkan Pasal 53 ayat (2) UU No. 9 Tahun 2004, alasan-alasan yang dapat digunakan dalam mengajukan gugatan sengketa TUN adalah...",
    options: [
      { key: "A", text: "KTUN yang digugat bertentangan dengan peraturan perundang-undangan yang berlaku." },
      { key: "B", text: "KTUN yang digugat bertentangan dengan Asas-Asas Umum Pemerintahan yang Baik (AUPB)." },
      { key: "C", text: "Kedua alasan A dan B adalah benar." },
      { key: "D", text: "KTUN tidak disetujui oleh keluarga penggugat." }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Alasan gugatan PTUN: bertentangan dengan peraturan perundang-undangan atau AUPB.",
      legalBasis: "Pasal 53 ayat (2) UU No. 9 Tahun 2004 tentang PTUN.",
      analysis: "Pasal 53 ayat (2) UU 9/2004 memperbaharui dasar uji gugatan TUN menjadi dua pilar: a. KTUN bertentangan dengan peraturan perundang-undangan; b. KTUN bertentangan dengan asas-asas umum pemerintahan yang baik (AUPB)."
    },
    difficulty: "Mudah"
  },
  {
    id: 196,
    category: "Hukum Acara PTUN",
    topicTag: "Pemeriksaan Acara Cepat (Versnelde Procedure)",
    question: "Pemeriksaan sengketa Tata Usaha Negara dengan acara cepat diatur dalam Pasal 98 dan Pasal 99 UU PTUN. Pemeriksaan acara cepat dipimpin oleh...",
    options: [
      { key: "A", text: "Hakim Tunggal" },
      { key: "B", text: "Majelis Hakim terdiri dari 3 orang hakim" },
      { key: "C", text: "Ketua Pengadilan Tinggi TUN" },
      { key: "D", text: "Panitera Pengadilan" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Pemeriksaan acara cepat diperiksa dan diputus oleh Hakim Tunggal.",
      legalBasis: "Pasal 99 ayat (1) UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Pasal 99 ayat (1) UU PTUN menentukan bahwa apabila permohonan pemeriksaan acara cepat dikabulkan oleh Ketua Pengadilan karena ada kepentingan mendesak, pemeriksaan dilakukan dengan hakim tunggal dalam tenggang waktu pemeriksaan maksimal 30 hari."
    },
    difficulty: "Sedang"
  },
  {
    id: 197,
    category: "Hukum Acara PTUN",
    topicTag: "Pengetahuan Hakim Sebagai Alat Bukti",
    question: "Salah satu alat bukti yang sah dalam PTUN tetapi TIDAK dikenal sebagai alat bukti sah tersendiri dalam Hukum Acara Perdata (HIR) adalah...",
    options: [
      { key: "A", text: "Surat atau tulisan" },
      { key: "B", text: "Keterangan ahli" },
      { key: "C", text: "Pengetahuan Hakim (Ambtshalve bekend)" },
      { key: "D", text: "Pengakuan para pihak" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Pengetahuan Hakim diakui secara eksplisit sebagai alat bukti sah di PTUN.",
      legalBasis: "Pasal 100 ayat (1) huruf e jo. Pasal 107 UU No. 5 Tahun 1986.",
      analysis: 'Pasal 100 ayat (1) huruf e UU PTUN menempatkan "Pengetahuan Hakim" sebagai salah satu dari lima alat bukti sah. Pengetahuan hakim adalah hal yang olehnya diketahui dan diyakini kebenarannya tanpa perlu dibuktikan lagi (notoire feiten).'
    },
    difficulty: "Sedang"
  },
  // --- HUKUM ACARA PERSLISIHIAN HUBUNGAN INDUSTRIAL (PHI) ---
  {
    id: 198,
    category: "Hukum Acara PHI",
    topicTag: "Musyawarah Bipartit",
    question: "Apakah yang dimaksud dengan perundingan Bipartit dalam perselisihan hubungan industrial menurut Pasal 1 angka 10 UU No. 2 Tahun 2004?",
    options: [
      { key: "A", text: "Perundingan antara pekerja/buruh atau serikat pekerja dengan pengusaha untuk menyelesaikan perselisihan hubungan industrial dalam satu perusahaan." },
      { key: "B", text: "Perundingan antara pengusaha dengan pejabat Dinas Tenaga Kerja." },
      { key: "C", text: "Perundingan damai di hadapan hakim pengadilan hubungan industrial." },
      { key: "D", text: "Perundingan antar serikat buruh dari perusahaan yang berbeda." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Bipartit adalah perundingan langsung buruh dan pengusaha dalam satu perusahaan.",
      legalBasis: "Pasal 1 angka 10 UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Pasal 1 angka 10 UU 2/2004 merumuskan: Perundingan bipartit adalah perundingan antara pekerja/buruh atau serikat pekerja/serikat buruh dengan pengusaha untuk menyelesaikan perselisihan hubungan industrial dalam satu perusahaan."
    },
    difficulty: "Mudah"
  },
  {
    id: 199,
    category: "Hukum Acara PHI",
    topicTag: "Gugatan PHI Tanpa Risalah Mediasi",
    question: "Berdasarkan Pasal 83 ayat (1) UU No. 2 Tahun 2004, apabila gugatan perselisihan hubungan industrial diajukan ke Pengadilan PHI tanpa dilampiri risalah penyelesaian mediasi atau konsiliasi, maka majelis hakim...",
    options: [
      { key: "A", text: "Wajib mengembalikan gugatan kepada penggugat untuk dilengkapi." },
      { key: "B", text: "Langsung menolak gugatan dalam putusan akhir." },
      { key: "C", text: "Menghukum penggugat membayar denda 10 juta rupiah." },
      { key: "D", text: "Melanjutkan sidang secara tertutup." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Hakim PHI wajib mengembalikan gugatan yang tidak dilampiri risalah mediasi/konsiliasi.",
      legalBasis: "Pasal 83 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Pasal 83 ayat (1) menegaskan bahwa pengajuan gugatan yang tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi, maka hakim Pengadilan Hubungan Industrial wajib mengembalikan gugatan kepada penggugat."
    },
    difficulty: "Sedang"
  },
  {
    id: 200,
    category: "Hukum Acara PHI",
    topicTag: "Batas Nilai Gugatan Bebas Biaya",
    question: "Pihak buruh/pekerja yang mengajukan gugatan ke Pengadilan Hubungan Industrial dibebaskan dari seluruh biaya perkara termasuk biaya eksekusi apabila nilai gugatannya...",
    options: [
      { key: "A", text: "Di bawah Rp50.000.000 (lima puluh juta rupiah)" },
      { key: "B", text: "Di bawah Rp150.000.000 (seratus lima puluh juta rupiah)" },
      { key: "C", text: "Di bawah Rp300.000.000 (tiga ratus juta rupiah)" },
      { key: "D", text: "Tidak ada batas nilai rupiah, semua perkara buruh gratis" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Gugatan PHI bernilai di bawah Rp150.000.000 dibebaskan dari seluruh biaya perkara.",
      legalBasis: "Pasal 58 UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Pasal 58 UU 2/2004 menetapkan: Dalam proses beracara di Pengadilan Hubungan Industrial, pihak-pihak yang berperkara tidak dikenakan biaya termasuk biaya eksekusi yang nilai gugatannya di bawah Rp150.000.000,00."
    },
    difficulty: "Mudah"
  }
];

// src/data/tryOut2025Bank.ts
var TRYOUT_2025_BANK = [
  {
    "id": 201,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Salah satu hak terdakwa dalam hukum acara pidana adalah mengajukan eksepsi, yang diajukan terhadap :",
    "options": [
      {
        "key": "A",
        "text": "Surat dakwaan jaksa kabur"
      },
      {
        "key": "B",
        "text": "Surat tuntutan Jaksa"
      },
      {
        "key": "C",
        "text": "Berita Acara Pemeriksaan di Kepolisian"
      },
      {
        "key": "D",
        "text": "Replik Jaksa"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Eksepsi diajukan terhadap surat dakwaan penuntut umum yang batal demi hukum atau kabur.",
      "legalBasis": "Pasal 156 ayat (1) KUHAP.",
      "analysis": "Berdasarkan Pasal 156 ayat (1) KUHAP, terdakwa atau penasihat hukumnya dapat mengajukan keberatan (eksepsi) bahwa pengadilan tidak berwenang mengadili perkaranya atau dakwaan tidak dapat diterima atau surat dakwaan harus dibatalkan karena kabur (obscuur libel)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 202,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Permohonan kasasi demi kepentingan hukum disampaikan oleh :",
    "options": [
      {
        "key": "A",
        "text": "Jaksa Penuntut Umum"
      },
      {
        "key": "B",
        "text": "Majelis Hakim"
      },
      {
        "key": "C",
        "text": "Jaksa Agung"
      },
      {
        "key": "D",
        "text": "Terdakwa"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Kasasi demi kepentingan hukum diajukan secara khusus oleh Jaksa Agung.",
      "legalBasis": "Pasal 259 ayat (1) KUHAP.",
      "analysis": "Pasal 259 ayat (1) KUHAP menentukan bahwa demi kepentingan hukum terhadap semua putusan yang telah memperoleh kekuatan hukum tetap dari pengadilan lain selain Mahkamah Agung, permohonan kasasi hanya dapat diajukan oleh Jaksa Agung kepada Mahkamah Agung."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 203,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Penasihat Hukum berhak menghubungi tersangka sejas saat ditangkap atau ditahan. Dalam Pasal berapa hal ini diatur KUHAP :",
    "options": [
      {
        "key": "A",
        "text": "Pasal 20 KUHAP"
      },
      {
        "key": "B",
        "text": "Pasal 69 KUHAP"
      },
      {
        "key": "C",
        "text": "Pasal 197 KUHAP"
      },
      {
        "key": "D",
        "text": "Pasal 244 KUHAP"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Hak tersangka menghubungi penasihat hukum sejak penangkapan/penahanan diatur dalam Pasal 69 KUHAP.",
      "legalBasis": "Pasal 69 KUHAP.",
      "analysis": "Pasal 69 KUHAP secara tegas menyatakan bahwa setelah seorang tersangka ditangkap atau ditahan, ia berhak menghubungi penasihat hukumnya sesuai dengan ketentuan undang-undang ini."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 204,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Surat dakwaan yang dibuat oleh Jaksa Penuntut Umum harus memenuhi dua syarat yaitu syarat formil dan materiil. Apabila syarat formil tidak terpenuhi maka surat dakwaan tersebut :",
    "options": [
      {
        "key": "A",
        "text": "Batal demi hukum"
      },
      {
        "key": "B",
        "text": "Dapat dibatalkan"
      },
      {
        "key": "C",
        "text": "Batal saja"
      },
      {
        "key": "D",
        "text": "Harus diperbaiki oleh Penuntut Umum"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Syarat formil surat dakwaan jika tidak terpenuhi mengakibatkan dakwaan dapat dibatalkan.",
      "legalBasis": "Pasal 143 ayat (2) & ayat (3) KUHAP.",
      "analysis": "Ketentuan Pasal 143 ayat (3) KUHAP menyatakan surat dakwaan yang tidak memenuhi ketentuan Pasal 143 ayat (2) huruf b (syarat materiil) adalah batal demi hukum. Sedangkan kekurangan syarat formil (huruf a) berakibat surat dakwaan dapat dibatalkan (vernietigbaar) atau diminta perbaikan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 205,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Surat dakwaan yang dibuat oleh Jaksa Penuntut Umum berisi/memuat :",
    "options": [
      {
        "key": "A",
        "text": "Tempat tindak pidana dilakukan"
      },
      {
        "key": "B",
        "text": "Waktu tindak pidana dilakukan"
      },
      {
        "key": "C",
        "text": "Unsur-unsur tindak pidana yang dilakukan"
      },
      {
        "key": "D",
        "text": "Jawaban A, B dan C benar"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Surat dakwaan wajib memuat tempat, waktu (tempus & locus delicti), dan uraian cermat unsur delik.",
      "legalBasis": "Pasal 143 ayat (2) KUHAP.",
      "analysis": "Pasal 143 ayat (2) KUHAP mengharuskan surat dakwaan memuat identitas lengkap tersangka, uraian secara cermat, jelas, dan lengkap mengenai tindak pidana yang didakwakan dengan menyebut waktu dan tempat tindak pidana itu dilakukan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 206,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Keterangan saksi adalah apa yang saksi nyatakan disidang pengadilan mengenai hal :",
    "options": [
      {
        "key": "A",
        "text": "Yang dilihat sendiri oleh Terdakwa"
      },
      {
        "key": "B",
        "text": "Yang dialami sendiri oleh Saksi"
      },
      {
        "key": "C",
        "text": "Yang didengar sendiri oleh Terdakwa"
      },
      {
        "key": "D",
        "text": "Yang diketahui sendiri oleh Penyidik 3"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Keterangan saksi adalah hal yang saksi alami, lihat, atau dengar sendiri.",
      "legalBasis": "Pasal 1 angka 27 jo. Pasal 185 ayat (1) KUHAP.",
      "analysis": "Pasal 1 angka 27 KUHAP mendefinisikan keterangan saksi sebagai salah satu alat bukti dalam perkara pidana yang berupa keterangan dari saksi mengenai suatu peristiwa pidana yang ia dengar sendiri, ia lihat sendiri dan ia alami sendiri dengan menyebut alasan dari pengetahuannya itu."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 207,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Undang-undang yang mengatur Hukum Acara Pidana adalah :",
    "options": [
      {
        "key": "A",
        "text": "UU No. 18 Tahun 1981"
      },
      {
        "key": "B",
        "text": "UU No. 15 Tahun 1991"
      },
      {
        "key": "C",
        "text": "UU No. 8 Tahun 1981"
      },
      {
        "key": "D",
        "text": "UU No. 5 Tahun 1985"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Kitab Undang-Undang Hukum Acara Pidana (KUHAP) diundangkan dalam UU No. 8 Tahun 1981.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 284 ayat (1) dan Pasal 285 Undang-Undang No. 8 Tahun 1981 tentang KUHAP.",
      "analysis": "KUHAP disahkan dan diundangkan pada tanggal 31 Desember 1981 sebagai Undang-Undang Republik Indonesia Nomor 8 Tahun 1981 tentang Hukum Acara Pidana."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 208,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Yang dapat dijadikan alasan penangguhan penahanan, kecuali :",
    "options": [
      {
        "key": "A",
        "text": "Tidak akan menghilangkan barang bukti"
      },
      {
        "key": "B",
        "text": "Tidak akan melarikan diri"
      },
      {
        "key": "C",
        "text": "Tidak akan mengulangi lagi tindak pidana"
      },
      {
        "key": "D",
        "text": "Atas permintaan keluarga Terdakwa"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Syarat penangguhan penahanan adalah tidak melarikan diri, tidak merusak barang bukti, dan tidak mengulangi delik.",
      "legalBasis": "Pasal 31 ayat (1) KUHAP.",
      "analysis": 'Pasal 31 ayat (1) KUHAP mengatur jaminan penangguhan penahanan berupa jaminan orang atau uang dengan syarat tersangka tidak melarikan diri, tidak menghilangkan barang bukti, dan tidak mengulangi tindak pidana. Alasan "permintaan keluarga" bukan merupakan alasan hukum objektif yang diwajibkan KUHAP.'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 209,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "KUHAP menetapkan beberapa jenis penahanan, kecuali :",
    "options": [
      {
        "key": "A",
        "text": "Penahanan rumah tahanan negara"
      },
      {
        "key": "B",
        "text": "Penahanan penjara"
      },
      {
        "key": "C",
        "text": "Penahanan kota"
      },
      {
        "key": "D",
        "text": "Penahanan rumah"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Jenis penahanan menurut KUHAP hanya penahanan rutan, rumah, dan kota. Penahanan penjara bukan jenis penahanan.",
      "legalBasis": "Pasal 22 ayat (1) KUHAP.",
      "analysis": "Pasal 22 ayat (1) KUHAP mengatur limitatif jenis penahanan: a. Penahanan rumah tahanan negara (RUTAN); b. Penahanan rumah; c. Penahanan kota. Penjara merupakan tempat menjalani pidana pokok setelah vonis hakim, bukan tempat penahanan preventif proses peradilan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 210,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Penyidik dapat menahan Tersangka tanpa perpanjangan paling lama :",
    "options": [
      {
        "key": "A",
        "text": "20 hari"
      },
      {
        "key": "B",
        "text": "30 hari"
      },
      {
        "key": "C",
        "text": "60 hari"
      },
      {
        "key": "D",
        "text": "90 hari"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Masa penahanan oleh penyidik tanpa perpanjangan paling lama 20 hari.",
      "legalBasis": "Pasal 24 ayat (1) KUHAP.",
      "analysis": "Pasal 24 ayat (1) KUHAP menyatakan perintah penahanan yang diberikan oleh penyidik hanya berlaku paling lama 20 (dua puluh) hari. Jika diperlukan untuk kepentingan pemeriksaan yang belum selesai, dapat diperpanjang oleh penuntut umum paling lama 40 hari."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 211,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Berapa lama waktu diperlukan bagi penyidik, untuk menentukan sikap apakah seorang Tersangka yang ditangkap, akan diteruskan dengan penahanan atau tidak :",
    "options": [
      {
        "key": "A",
        "text": "2 hari"
      },
      {
        "key": "B",
        "text": "1 hari"
      },
      {
        "key": "C",
        "text": "1 minggu"
      },
      {
        "key": "D",
        "text": "2 minggu"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penangkapan dilakukan paling lama 1 hari (24 jam) untuk menentukan kelanjutan penahanan.",
      "legalBasis": "Pasal 19 ayat (1) KUHAP.",
      "analysis": 'Pasal 19 ayat (1) KUHAP menegaskan: "Penangkapan sebagaimana dimaksud dalam Pasal 17, dapat dilakukan untuk paling lama satu hari."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 212,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Peran Penasehat Hukum, mendampingi Tersangka pada pemeriksaan Penyidikan adalah :",
    "options": [
      {
        "key": "A",
        "text": "Ikut menentukan jalannya pemeriksaan"
      },
      {
        "key": "B",
        "text": "Bekerjasama dengan Penyidik"
      },
      {
        "key": "C",
        "text": "Melihat dan mendengar jalannya pemeriksaan"
      },
      {
        "key": "D",
        "text": "Memberikan jawaban kepada Penyidik"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penasihat hukum dalam pemeriksaan penyidikan berhak melihat dan mendengar jalannya pemeriksaan secara pasif.",
      "legalBasis": "Pasal 115 ayat (1) KUHAP.",
      "analysis": "Pasal 115 ayat (1) KUHAP menentukan bahwa dalam hal penyidik sedang melakukan pemeriksaan terhadap tersangka, penasihat hukum dapat mengikuti jalannya pemeriksaan dengan cara melihat serta mendengar pemeriksaan, guna menjamin hak-hak asasi tersangka tidak dilanggar tanpa mengintervensi substansi pertanyaan penyidik."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 213,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Penyidik telah selesai menyidik suatu perkara, selanjutnya berkas perkara diserahkan kepada:",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Negeri"
      },
      {
        "key": "B",
        "text": "Tersangka"
      },
      {
        "key": "C",
        "text": "Kejaksaan/Penuntut Umum"
      },
      {
        "key": "D",
        "text": "Menunggu keputusan pengadilan 4"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Berkas perkara penyidikan yang telah selesai diserahkan kepada Penuntut Umum (Kejaksaan).",
      "legalBasis": "Pasal 8 ayat (2) jo. Pasal 110 ayat (1) KUHAP.",
      "analysis": "Pasal 110 ayat (1) KUHAP menentukan bahwa dalam hal penyidik telah selesai melakukan penyidikan, penyidik wajib segera menyerahkan berkas perkara itu kepada penuntut umum (Tahap I)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 214,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Berkas perkara yang dipelajari/diteliti oleh Penuntut Umum (PU), ternyata belum lengkap. Untuk itu tindakan Penuntut Umum :",
    "options": [
      {
        "key": "A",
        "text": "Melimpahkan berkas perkara tersebut ke Pengadilan Negeri untuk disidangkan"
      },
      {
        "key": "B",
        "text": "Membuat surat dakwaan"
      },
      {
        "key": "C",
        "text": "Mengembalikan berkas perkara kepada Penyidik, disertai petunjuk"
      },
      {
        "key": "D",
        "text": "Menyidangkan perkara tersebut ke Pengadilan Negeri"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penuntut umum mengembalikan berkas perkara belum lengkap kepada penyidik disertai petunjuk (P-19).",
      "legalBasis": "Pasal 110 ayat (2) jo. Pasal 138 ayat (2) KUHAP.",
      "analysis": "Pasal 138 ayat (2) KUHAP menegaskan jika penuntut umum berpendapat hasil penyidikan belum lengkap, penuntut umum segera mengembalikan berkas perkara kepada penyidik disertai petunjuk untuk dilengkapi."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 215,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Dalam hal penyidikan sudah dianggap selesai penyidik menyerahkan :",
    "options": [
      {
        "key": "A",
        "text": "Tersangka"
      },
      {
        "key": "B",
        "text": "Tanggung jawab tersangka dan barang bukti kepada Kejaksaan/Penuntut Umum"
      },
      {
        "key": "C",
        "text": "Barang bukti"
      },
      {
        "key": "D",
        "text": "Menunggu keputusan Jaksa Penuntut Umum"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penyidik menyerahkan tanggung jawab atas tersangka dan barang bukti kepada penuntut umum (Tahap II).",
      "legalBasis": "Pasal 8 ayat (3) huruf b jo. Pasal 110 ayat (4) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": "Pasal 8 ayat (3) huruf b KUHAP menegaskan setelah penyidikan selesai (Tahap I dinyatakan lengkap/P-21), penyidik menyerahkan tanggung jawab atas tersangka dan barang bukti kepada penuntut umum (Tahap II)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 216,
    "category": "Hukum Acara Pidana",
    "topicTag": "Pemeriksaan Praperadilan (KUHAP)",
    "question": "Berapa lama jangka waktu proses pemeriksaan praperadilan sampai dengan dijatuhkannya putusan oleh Hakim Tunggal menurut KUHAP?",
    "options": [
      {
        "key": "A",
        "text": "3 (tiga) hari"
      },
      {
        "key": "B",
        "text": "7 (tujuh) hari"
      },
      {
        "key": "C",
        "text": "14 (empat belas) hari"
      },
      {
        "key": "D",
        "text": "30 (tiga puluh) hari"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pemeriksaan praperadilan diputus paling lambat 7 hari sejak pemeriksaan dimulai.",
      "legalBasis": "Pasal 82 ayat (1) huruf c UU No. 8 Tahun 1981 (KUHAP).",
      "analysis": "Pasal 82 ayat (1) huruf c KUHAP menegaskan: 'Dalam waktu tujuh hari hakim harus sudah menjatuhkan putusannya.' Pemeriksaan dilakukan secara cepat dengan hakim tunggal."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 217,
    "category": "Hukum Acara Pidana",
    "topicTag": "Alat Bukti Keterangan Ahli",
    "question": "Sebagai pengganti atau pendukung visum et repertum dalam persidangan pidana, Majelis Hakim dapat mendengarkan keterangan yang diberikan oleh:",
    "options": [
      {
        "key": "A",
        "text": "Saksi a de charge (saksi meringankan)"
      },
      {
        "key": "B",
        "text": "Saksi mahkota"
      },
      {
        "key": "C",
        "text": "Bukti-bukti tertulis yang dimiliki korban secara sepihak"
      },
      {
        "key": "D",
        "text": "Saksi Ahli / Keterangan Ahli Kedokteran Kehakiman"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Keterangan Ahli (dokter kehakiman/forensik) adalah alat bukti sah pengganti atau penjelas visum di persidangan.",
      "legalBasis": "Pasal 184 ayat (1) huruf b jo. Pasal 186 UU No. 8 Tahun 1981 (KUHAP).",
      "analysis": "Pasal 186 KUHAP mengatur: 'Keterangan ahli ialah apa yang seorang ahli nyatakan di sidang pengadilan.' Keterangan ahli kedokteran forensik bernilai pembuktian sah untuk memperjelas luka atau penyebab kematian korban."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 218,
    "category": "Hukum Acara Perdata",
    "topicTag": "Syarat Formal Permohonan Kasasi",
    "question": "Permohonan kasasi perdata ke Mahkamah Agung harus dinyatakan tidak dapat diterima (Niet Ontvankelijke Verklaard) apabila:",
    "options": [
      {
        "key": "A",
        "text": "Diajukan lewat tenggang waktu 14 (empat belas) hari setelah putusan diberitahukan"
      },
      {
        "key": "B",
        "text": "Tidak diajukan memori kasasi dalam tenggang waktu 14 hari sejak permohonan didaftarkan"
      },
      {
        "key": "C",
        "text": "Dikirim langsung ke Mahkamah Agung tanpa melalui Kepaniteraan Pengadilan tingkat pertama"
      },
      {
        "key": "D",
        "text": "Semua pernyataan (A, B, dan C) adalah benar"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Permohonan kasasi tidak dapat diterima bila lewat waktu 14 hari, tanpa memori kasasi, atau diajukan tidak melalui pengadilan tingkat pertama.",
      "legalBasis": "Pasal 45A, 46, dan 47 UU No. 14 Tahun 1985 jo. UU No. 5 Tahun 2004 jo. UU No. 3 Tahun 2009 tentang Mahkamah Agung.",
      "analysis": "Syarat formal kasasi adalah limitatif: permohonan diajukan dalam 14 hari melalui panitera pengadilan tingkat pertama, dan memori kasasi wajib disampaikan paling lambat 14 hari setelah permohonan kasasi didaftarkan. Pelanggaran atas syarat-syarat ini menyebabkan permohonan kasasi tidak dapat diterima."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 219,
    "category": "Hukum Acara Pidana",
    "topicTag": "Tahapan Sidang Pidana (Eksepsi)",
    "question": "Menurut KUHAP, tahapan persidangan pidana setelah pembacaan surat dakwaan oleh Penuntut Umum adalah kesempatan bagi Terdakwa atau Penasihat Hukum untuk mengajukan:",
    "options": [
      {
        "key": "A",
        "text": "Pledoi (Nota Pembelaan)"
      },
      {
        "key": "B",
        "text": "Tuntutan Pidana (Requisitoir)"
      },
      {
        "key": "C",
        "text": "Eksepsi (Keberatan terhadap kompetensi atau keabsahan dakwaan)"
      },
      {
        "key": "D",
        "text": "Duplik"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Tahap persidangan setelah dakwaan adalah pengajuan Eksepsi (keberatan) oleh Terdakwa/Penasihat Hukum.",
      "legalBasis": "Pasal 156 ayat (1) UU No. 8 Tahun 1981 (KUHAP).",
      "analysis": "Pasal 156 ayat (1) KUHAP menyatakan: 'Dalam hal terdakwa atau penasihat hukum mengajukan keberatan bahwa pengadilan tidak berwenang mengadili perkaranya atau dakwaan tidak dapat diterima atau surat dakwaan harus dibatalkan, maka setelah diberi kesempatan kepada penuntut umum untuk menyatakan pendapatnya, hakim mempertimbangkan keberatan tersebut untuk selanjutnya mengambil putusan sela.'"
    },
    "difficulty": "Mudah"
  },
  {
    "id": 220,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Dalam hal seorang Terdakwa terbukti bersalah telah melakukan perbuatan pidana, tetapi Terdakwa tidak mempunyai kemampuan untuk bertanggungjawab (idiot, sakit jiwa) maka putusan/vonis yang sesuai adalah :",
    "options": [
      {
        "key": "A",
        "text": "Pembelaan"
      },
      {
        "key": "B",
        "text": "Pelepasan"
      },
      {
        "key": "C",
        "text": "Kurungan"
      },
      {
        "key": "D",
        "text": "Denda"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Terdakwa yang tidak dapat dipertanggungjawabkan karena cacat kejiwaan diputus lepas dari segala tuntutan hukum (onslag van rechtvervolging).",
      "legalBasis": "Pasal 44 KUHP jo. Pasal 191 ayat (2) KUHAP.",
      "analysis": "Perbuatan pidana terbukti secara materil, namun karena terdakwa tidak mampu bertanggung jawab karena jiwa cacat dalam pertumbuhan atau terganggu karena penyakit (Pasal 44 KUHP), maka terdakwa tidak dapat dijatuhi pidana dan diputus lepas dari segala tuntutan hukum."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 221,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Pemberitahuan yang disampaikan oleh seorang karena hak dan kewajiban berdasarkan undang-undang kepada pejabat yang berwenang tentang telah atau sedang atau diduga akan terjadinya peristiwa pidana disebut :",
    "options": [
      {
        "key": "A",
        "text": "Laporan"
      },
      {
        "key": "B",
        "text": "Kesaksian"
      },
      {
        "key": "C",
        "text": "Pengaduan"
      },
      {
        "key": "D",
        "text": "Pengakuan"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pemberitahuan karena hak atau kewajiban undang-undang tentang peristiwa pidana disebut Laporan.",
      "legalBasis": "Pasal 1 angka 24 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": "Pasal 1 angka 24 KUHAP merumuskan Laporan sebagai pemberitahuan yang disampaikan seseorang karena hak atau kewajiban berdasarkan UU kepada pejabat berwenang tentang terjadinya dugaan peristiwa pidana."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 222,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Umumnya penangkapan harus disertai dengan surat perintah penangkapan, Namun penangkapan dapat dilakukan tanpa surat perintah, yaitu dalam hal :",
    "options": [
      {
        "key": "A",
        "text": "Terdapat bukti permulaan yang cukup"
      },
      {
        "key": "B",
        "text": "Jika tersangka tidak mau bekerja sama dengan penyidik"
      },
      {
        "key": "C",
        "text": "Tersangka tertangkap tangan"
      },
      {
        "key": "D",
        "text": "Terdapat upaya tersangka untuk menghilangkan barang bukti"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penangkapan tanpa surat perintah hanya sah dilakukan dalam hal tertangkap tangan.",
      "legalBasis": "Pasal 18 ayat (2) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 18 ayat (2) KUHAP secara tegas menentukan: "Dalam hal tertangkap tangan penangkapan dilakukan tanpa surat perintah, dengan ketentuan bahwa penangkap harus segera menyerahkan tertangkap beserta barang bukti kepada penyidik."'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 223,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Di bawah ini terdapat beberapa alasan dilakukannya penahanan terhadap tersangka atau terdakwa, kecuali :",
    "options": [
      {
        "key": "A",
        "text": "Tersangka atau terdakwa diduga akan melarikan diri"
      },
      {
        "key": "B",
        "text": "Tersangka atau terdakwa dikhawatirkan akan menghilangkan barang bukti"
      },
      {
        "key": "C",
        "text": "Tersangka atau terdakwa melakukan tindak pidana yang diancam dengan pidana penjara kurang dari lima tahun"
      },
      {
        "key": "D",
        "text": "Tersangka atau terdakwa diduga akan mengulangi tindak pidana"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penahanan hanya dapat dikenakan pada tindak pidana berancaman 5 tahun atau lebih, atau delik tertentu yang diatur dalam Pasal 21 ayat (4) huruf b KUHAP.",
      "legalBasis": "Pasal 21 ayat (1) dan ayat (4) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": "Pasal 21 ayat (4) huruf a KUHAP mensyaratkan penahanan hanya terhadap tindak pidana yang diancam dengan pidana penjara 5 tahun atau lebih. Opsi C (kurang dari 5 tahun) adalah pengecualian yang bukan alasan penahanan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 224,
    "category": "Hukum Acara Pidana",
    "topicTag": "Pemeriksaan Saksi (KUHAP)",
    "question": "Jaksa Penuntut Umum dapat mengajukan saksi yang memberatkan, saksi ini disebut sebagai saksi :",
    "options": [
      {
        "key": "A",
        "text": "Saksi a Charge"
      },
      {
        "key": "B",
        "text": "Saksi a De Charge"
      },
      {
        "key": "C",
        "text": "Saksi Testimoniumde auditu"
      },
      {
        "key": "D",
        "text": "Saksi Mahkota"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Saksi yang memberatkan terdakwa yang diajukan oleh Penuntut Umum disebut saksi a charge.",
      "legalBasis": "Pasal 160 ayat (1) huruf c UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": "Dalam hukum acara pidana, saksi a charge adalah saksi yang memberatkan yang diajukan penuntut umum, sedangkan saksi a de charge adalah saksi meringankan yang diajukan pihak terdakwa (Pasal 65 jo. Pasal 116 ayat 3 KUHAP)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 225,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Yang dimaksud dengan istilah tertangkap tangan (opheerterdaad) menurut KUHAP adalah :",
    "options": [
      {
        "key": "A",
        "text": "Tertangkapnya seseorang pada waktu sedang melakukan kejahatan"
      },
      {
        "key": "B",
        "text": "Tertangkapnya seseorang beberapa saat sesudah ia melakukan kejahatan"
      },
      {
        "key": "C",
        "text": "Jawaban A dan B benar"
      },
      {
        "key": "D",
        "text": "Jawaban A dan B salah 6"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Tertangkap tangan adalah tertangkap saat sedang melakukan atau segera beberapa saat sesudah melakukan tindak pidana.",
      "legalBasis": "Pasal 1 angka 19 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": "Pasal 1 angka 19 KUHAP mendefinisikan tertangkap tangan mencakup: sedang melakukan tindak pidana, dengan segera sesudah dilakukan, atau sesaat sesudah diserukan oleh khalayak ramai."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 226,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Yang dimaksud dengan putusan lepas dari segala tuntutan hukum adalah .....",
    "options": [
      {
        "key": "A",
        "text": "Berdasarkan hasil pemeriksaan di pengadilan hakim berpendapat bahwa kesalahan terdakwa atas perbuatan yg didakwakan kepadanya tdk terbukti secara sah & meyakinkan."
      },
      {
        "key": "B",
        "text": "Berdasarkan hasil pembuktian di pengadilan hakim berpendapat bahwa perbuatan yg didakwakan kepada terdakwa terbukti secara sah & meyakinkan, namun perbuatan terdakwa tersebut menurut hakim ternyata bukan termasuk sebagai perbuatan pidana"
      },
      {
        "key": "C",
        "text": "Jawaban a dan b benar"
      },
      {
        "key": "D",
        "text": "Jawaban a dan b salah HUKUM ACARA PERDATA"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Putusan lepas dari segala tuntutan hukum (onslag van rechtvervolging) dijatuhkan bila perbuatan terbukti namun bukan tindak pidana.",
      "legalBasis": "Pasal 191 ayat (2) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 191 ayat (2) KUHAP menyatakan: "Jika pengadilan berpendapat bahwa perbuatan yang didakwakan kepada terdakwa terbukti, tetapi perbuatan itu tidak merupakan suatu tindak pidana, maka terdakwa diputus lepas dari segala tuntutan hukum."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 227,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Gugatan pada dasarnya diajukan pada Pengadilan Negeri ditempat tinggalnya Tergugat, gugatan terhadap benda tak bergerak diajukan pada :",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Negeri tempat tinggal Penggugat"
      },
      {
        "key": "B",
        "text": "Pengadilan Negeri tempat tinggal yang dipilih"
      },
      {
        "key": "C",
        "text": "Pengadilan Negeri di mana benda tidak bergerak itu terletak (forum rei sitae)"
      },
      {
        "key": "D",
        "text": "Pengadilan Negeri yang berwenang"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Gugatan atas benda tidak bergerak diajukan di Pengadilan Negeri tempat benda itu terletak (forum rei sitae).",
      "legalBasis": "Pasal 118 ayat (3) HIR / Pasal 142 ayat (3) RBg.",
      "analysis": "Pasal 118 ayat (3) HIR menetapkan: apabila objek sengketa adalah barang tidak bergerak, maka gugatan diajukan kepada Pengadilan Negeri yang daerah hukumnya meliputi tempat letak barang tidak bergerak tersebut (asas forum rei sitae)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 228,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Gugatan dinyatakan gugur apabila :",
    "options": [
      {
        "key": "A",
        "text": "Para pihak tidak hadir"
      },
      {
        "key": "B",
        "text": "Tergugat tidak hadir"
      },
      {
        "key": "C",
        "text": "Penggugat tidak hadir"
      },
      {
        "key": "D",
        "text": "Penggugat dan Tergugat tidak hadir"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Gugatan dinyatakan gugur apabila Penggugat tidak hadir pada hari sidang pertama setelah dipanggil patut.",
      "legalBasis": "Pasal 124 HIR / Pasal 148 RBg.",
      "analysis": "Pasal 124 HIR menentukan jika penggugat tidak datang pada hari sidang pertama meskipun telah dipanggil secara patut, maka surat gugatannya dinyatakan gugur dan penggugat dihukum membayar biaya perkara."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 229,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Gugatan diputus verstek apabila :",
    "options": [
      {
        "key": "A",
        "text": "Penggugat tidak hadir"
      },
      {
        "key": "B",
        "text": "Para pihak tidak hadir"
      },
      {
        "key": "C",
        "text": "Tergugat tidak hadir"
      },
      {
        "key": "D",
        "text": "Pihak-pihak hadir"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Gugatan diputus verstek apabila Tergugat tidak hadir pada hari sidang pertama tanpa alasan yang sah.",
      "legalBasis": "Pasal 125 ayat (1) HIR / Pasal 149 ayat (1) RBg.",
      "analysis": "Pasal 125 ayat (1) HIR menegaskan jika tergugat tidak datang pada hari sidang pertama dan tidak menyuruh wakilnya yang sah meskipun telah dipanggil dengan patut, gugatan diputus dengan verstek (tanpa hadirnya Tergugat)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 230,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Campur tangan pihak ketiga dalam suatu perkara yang sedang berlangsung dan tidak memihak disebut :",
    "options": [
      {
        "key": "A",
        "text": "Intervensi"
      },
      {
        "key": "B",
        "text": "Voeging"
      },
      {
        "key": "C",
        "text": "Tussenkomst"
      },
      {
        "key": "D",
        "text": "Vridjwaring"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Tussenkomst adalah campur tangan pihak ketiga yang masuk membela haknya sendiri tanpa memihak.",
      "legalBasis": "Pasal 279-282 Reglement op de Rechtsvordering (Rv) jo. Doktrin Hukum Acara Perdata.",
      "analysis": "Tussenkomst adalah intervensi pihak ketiga yang berdiri sendiri untuk mempertahankan hak miliknya melawan Penggugat dan Tergugat sekaligus tanpa memihak salah satu."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 231,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Upaya hukum terhadap putusan verstek disebut :",
    "options": [
      {
        "key": "A",
        "text": "Banding"
      },
      {
        "key": "B",
        "text": "Kasasi"
      },
      {
        "key": "C",
        "text": "Verzet"
      },
      {
        "key": "D",
        "text": "Peninjauan Kembali 7"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Upaya hukum terhadap putusan verstek adalah Verzet (perlawanan).",
      "legalBasis": "Pasal 129 ayat (1) dan (2) HIR / Pasal 153 ayat (1) dan (2) RBg.",
      "analysis": "Berdasarkan Pasal 129 HIR, pihak Tergugat yang dijatuhi putusan verstek berhak mengajukan upaya hukum perlawanan (verzet) dalam tenggang waktu 14 hari."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 232,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Gugatan atas dasar adanya cacat tersembunyi adalah :",
    "options": [
      {
        "key": "A",
        "text": "Actio in personam"
      },
      {
        "key": "B",
        "text": "Actio quanti minoris"
      },
      {
        "key": "C",
        "text": "Actio pauliana"
      },
      {
        "key": "D",
        "text": "Actio des aveu"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Gugatan atas cacat tersembunyi dapat berupa actio quanti minoris (tuntutan pengurangan harga) atau actio redhibitoria.",
      "legalBasis": "Pasal 1504 sampai Pasal 1507 Kitab Undang-Undang Hukum Perdata (KUHPerdata).",
      "analysis": "Pasal 1504 KUHPerdata mengatur kewajiban penjual menanggung cacat tersembunyi, di mana pembeli dapat memilih membatalkan pembelian atau menuntut pengurangan harga melalui actio quanti minoris (Pasal 1507 KUHPerdata)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 233,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Didalam pemeriksaan perkara perdata yang dicari adalah kebenaran formil, yang artinya :",
    "options": [
      {
        "key": "A",
        "text": "Kebenaran mutlak"
      },
      {
        "key": "B",
        "text": "Kebenaran relatif"
      },
      {
        "key": "C",
        "text": "Kebenaran yang didasarkan pada bukti-bukti formil"
      },
      {
        "key": "D",
        "text": "Kebenaran semu"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Kebenaran formil adalah kebenaran yang bersandarkan pada alat bukti sah yang diajukan para pihak di persidangan.",
      "legalBasis": "Pasal 163 jo. Pasal 164 HIR / Pasal 283 jo. Pasal 284 RBg jo. Pasal 1865 KUHPerdata.",
      "analysis": "Hukum acara perdata mencari kebenaran formil (formeel waarheid), yaitu hakim terikat pada dalil dan bukti-bukti sah yang diajukan para pihak tanpa mencari kebenaran materiil di luar persidangan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 234,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Eksepsi adalah bantahan :",
    "options": [
      {
        "key": "A",
        "text": "Terhadap pokok perkara"
      },
      {
        "key": "B",
        "text": "Terhadap gugatan yang tidak menyangkut pokok perkara"
      },
      {
        "key": "C",
        "text": "Bantahan terhadap putusan"
      },
      {
        "key": "D",
        "text": "Bantahan terhadap penetapan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Eksepsi adalah bantahan yang ditujukan terhadap gugatan yang tidak menyangkut pokok perkara.",
      "legalBasis": "Pasal 125 ayat (2) dan Pasal 136 HIR / Pasal 162 RBg.",
      "analysis": "Eksepsi merupakan tangkisan formal Tergugat mengenai formalitas gugatan (kompetensi, keabsahan kuasa, obscuur libel) yang tidak langsung membantah materi pokok perkara."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 235,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Teori yang mengajarkan bahwa fundamentum petendi harus pula menjelaskan/menyebutkan peristiwa konkret yang menjadi sebab timbulnya peristiwa hukum yang menjadi alasan gugatan adalah :",
    "options": [
      {
        "key": "A",
        "text": "Substantierings theorie"
      },
      {
        "key": "B",
        "text": "Individualserings theorie"
      },
      {
        "key": "C",
        "text": "Subjectiefrechtelijke theorie"
      },
      {
        "key": "D",
        "text": "Objectiefrechtelijke theorie"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Substantieringstheorie mewajibkan gugatan menyebut peristiwa konkret yang menjadi dasar timbulnya hubungan hukum.",
      "legalBasis": "Pasal 8 angka 3 Reglement op de Rechtsvordering (Rv) jo. Putusan Mahkamah Agung RI No. 547 K/Sip/1972.",
      "analysis": "Substantieringstheorie mewajibkan Penggugat menguraikan fakta konkret peristiwa hukum dalam posita, sedangkan individualiseringstheorie cukup menyebutkan hubungan hukumnya saja."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 236,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Eksepsi terhadap kewenangan mengadili diajukan bersama-sama dalam :",
    "options": [
      {
        "key": "A",
        "text": "Pokok perkara"
      },
      {
        "key": "B",
        "text": "Jawaban"
      },
      {
        "key": "C",
        "text": "Pembuktian"
      },
      {
        "key": "D",
        "text": "Gugatan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Eksepsi kewenangan relatif wajib diajukan bersama-sama dalam jawaban pertama terhadap gugatan.",
      "legalBasis": "Pasal 125 ayat (2) dan Pasal 133 HIR / Pasal 159 RBg.",
      "analysis": "Pasal 133 HIR menentukan eksepsi kompetensi relatif harus diajukan pada permulaan sidang dalam jawaban pertama sebelum Tergugat menjawab pokok perkara."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 237,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Gugatan akan ditolak oleh hakim jika gugatan dalam keadaan :",
    "options": [
      {
        "key": "A",
        "text": "Kabur"
      },
      {
        "key": "B",
        "text": "Kurang Pihak"
      },
      {
        "key": "C",
        "text": "Tidak berdasarkan hukum"
      },
      {
        "key": "D",
        "text": "Telah lewat waktu"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Gugatan ditolak apabila dalil gugatan tidak terbukti atau tidak berdasar hukum (afgewezen).",
      "legalBasis": "Pasal 163 HIR (Staatsblad 1941 No. 44) / Pasal 283 RBg jo. Pasal 1865 KUHPerdata jo. Putusan MA RI No. 556 K/Sip/1971.",
      "analysis": "Bila gugatan kabur atau kurang pihak, putusannya adalah tidak dapat diterima (NO). Gugatan ditolak (afgewezen) apabila telah diperiksa pokok perkaranya dan ternyata dalil penggugat tidak terbukti menurut hukum."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 238,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Peradilan Agama & KHI",
    "question": "Putusan insidentiil adalah :",
    "options": [
      {
        "key": "A",
        "text": "Putusan akhir"
      },
      {
        "key": "B",
        "text": "Putusan yang mendahului putusan akhir"
      },
      {
        "key": "C",
        "text": "Putusan pokok perkara"
      },
      {
        "key": "D",
        "text": "Putusan deklatoir 8"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Putusan insidentil adalah putusan sela yang dijatuhkan hakim mendahului putusan akhir.",
      "legalBasis": "Pasal 185 ayat (1) HIR / Pasal 196 ayat (1) RBg.",
      "analysis": "Pasal 185 ayat (1) HIR mengatur putusan sela/insidentil yang bukan putusan akhir dijatuhkan untuk memperlancar jalannya pemeriksaan perkara (seperti putusan sela eksepsi kompetensi atau sita jaminan)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 239,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Agenda acara pada hari sidang pertama dalam hukum acara perdata yang dihadiri oleh kedua belah pihak, yaitu :",
    "options": [
      {
        "key": "A",
        "text": "Hakim mewajibkan para pihak agar menempuh mediasi"
      },
      {
        "key": "B",
        "text": "Hakim menjelaskan prosedur mediasi"
      },
      {
        "key": "C",
        "text": "Hakim menunda sidang untuk proses mediasi"
      },
      {
        "key": "D",
        "text": "Jawaban a, b dan c benar"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Sidang pertama perkara perdata yang dihadiri kedua belah pihak diwajibkan menempuh proses mediasi.",
      "legalBasis": "Pasal 130 HIR / Pasal 154 RBg jo. Pasal 17 PERMA No. 1 Tahun 2016 tentang Prosedur Mediasi di Pengadilan.",
      "analysis": "Pasal 17 PERMA 1/2016 mewajibkan majelis hakim pada hari sidang pertama menjelaskan prosedur mediasi dan mewajibkan para pihak menempuh mediasi sebelum pemeriksaan perkara dilanjutkan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 240,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Kapan gugatan rekonvensi itu harus diajukan :",
    "options": [
      {
        "key": "A",
        "text": "Pada saat mengajukan jawaban"
      },
      {
        "key": "B",
        "text": "Sesudah mengajukan jawaban"
      },
      {
        "key": "C",
        "text": "Sebelum putusan pokok perkara"
      },
      {
        "key": "D",
        "text": "Jawaban a, b dan c adalah benar"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Gugatan rekonvensi (gugatan balik) wajib diajukan bersama-sama dengan jawaban Tergugat.",
      "legalBasis": "Pasal 132b ayat (1) HIR / Pasal 158 ayat (1) RBg.",
      "analysis": 'Pasal 132b ayat (1) HIR mengatur secara imperatif: "Tergugat wajib mengajukan gugatan balasan (rekonvensi) bersama-sama dengan jawabannya baik dengan surat maupun dengan lisan."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 241,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "KUHPerdata mengatur hubungan hukum antara :",
    "options": [
      {
        "key": "A",
        "text": "Privat-privat"
      },
      {
        "key": "B",
        "text": "Privat-publik"
      },
      {
        "key": "C",
        "text": "Publik-publik"
      },
      {
        "key": "D",
        "text": "Notaris-Jaksa"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "KUHPerdata mengatur hubungan hukum privat antar individu atau badan hukum perdata.",
      "legalBasis": "Pasal 1 jo. Buku I sampai Buku IV Kitab Undang-Undang Hukum Perdata (Burgerlijk Wetboek).",
      "analysis": "Hukum perdata substantif (KUHPerdata) mengatur hak dan kewajiban hubungan privat-privat antar sesama anggota masyarakat dan subjek hukum perdata."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 242,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Menurut hukum acara perdata, Tergugat adalah :",
    "options": [
      {
        "key": "A",
        "text": "Orang atau badan hukum yang menurut hukum diduga melakukan pelanggaran terhadap hak orang lain atau melakukan pelanggaran terhadap ketentuan undang-undang"
      },
      {
        "key": "B",
        "text": "Orang atau badan hukum yang menurut hukum diduga melakukan pelanggaran terhadap hak orang lain saja"
      },
      {
        "key": "C",
        "text": "Orang atau badan hukum yang menururt hukum diduga melakukan pelanggaran terhadap ketentuan undang-undang saja"
      },
      {
        "key": "D",
        "text": "Semua Jawaban salah"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Tergugat adalah subjek hukum yang ditarik ke pengadilan karena diduga melanggar hak orang lain atau ketentuan undang-undang.",
      "legalBasis": "Pasal 118 ayat (1) HIR / Pasal 142 ayat (1) RBg jo. Doktrin Hukum Acara Perdata.",
      "analysis": "Tergugat adalah pihak yang disengketakan dalam gugatan perdata karena adanya perbuatan melawan hukum atau ingkar janji (wanprestasi) yang merugikan penggugat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 243,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Eksepsi mengenai tidak berwenangnya Pengadilan Negeri untuk mengadili suatu perkara perdata berkaitan dengan wilayah pengadilan disebut :",
    "options": [
      {
        "key": "A",
        "text": "Eksepsi kewenangan absolut"
      },
      {
        "key": "B",
        "text": "Eksepsi dilatoir"
      },
      {
        "key": "C",
        "text": "Eksepsi kompetensi relatif"
      },
      {
        "key": "D",
        "text": "Eksepsi peremptoir 9"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Tangkisan mengenai wilayah kekuasaan pengadilan disebut eksepsi kompetensi relatif.",
      "legalBasis": "Pasal 118 ayat (1) jo. Pasal 133 HIR / Pasal 159 RBg.",
      "analysis": "Kompetensi relatif menyangkut batas wilayah hukum Pengadilan Negeri mana yang berwenang mengadili perkara perdata tersebut berdasarkan tempat tinggal tergugat (actor sequitur forum rei)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 244,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Sita Revindicatoir (revindicatoir beslag) dapat dimintakan terhadap :",
    "options": [
      {
        "key": "A",
        "text": "Barang tidak bergerak milik pihak ketiga yang dikuasai Tergugat"
      },
      {
        "key": "B",
        "text": "Barang tidak bergerak milik Penggugat yang dikuasai oleh Tergugat"
      },
      {
        "key": "C",
        "text": "Barang bergerak milik Penggugat yang dikuasai oleh Tergugat"
      },
      {
        "key": "D",
        "text": "Barang bergerak milik pihak ketiga yang dikuasai Tergugat"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Sita revindikasi hanya dapat dimintakan atas barang bergerak milik Penggugat yang berada di tangan Tergugat.",
      "legalBasis": "Pasal 226 ayat (1) HIR / Pasal 260 ayat (1) RBg.",
      "analysis": "Pasal 226 HIR secara limitatif mengatur bahwa sita revindikasi (revindicatoir beslag) hanya berlaku bagi penuntutan kembali barang bergerak milik penggugat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 245,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Dalam praktek sering dijumpai bahwa penyitaan telah dilakukan terhadap harta kekayaan milik pihak ketiga. Upaya hukum yang dapat dilakukan pihak ketiga untuk mempertahankan hak dan kepentingan tersebut adalah :",
    "options": [
      {
        "key": "A",
        "text": "Perlawanan"
      },
      {
        "key": "B",
        "text": "Gugatan"
      },
      {
        "key": "C",
        "text": "Derden Verzet"
      },
      {
        "key": "D",
        "text": "Verzet"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Derden Verzet",
      "legalBasis": "Pasal 195 ayat (6) HIR (Staatsblad 1941 No. 44) jo. Pasal 206 ayat (6) RBg jo. Pasal 378 - 384 Rv.",
      "analysis": "Berdasarkan ketentuan hukum acara peradilan Indonesia dalam ranah Hukum Acara Perdata, jawaban yang sesuai dengan standar penilaian Ujian Profesi Advokat PERADI adalah pilihan C."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 246,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Apabila Hakim memutus perkara perdata dan ternyata di dapati bahwa surat kuasa penggugat tidak Sempurna, maka putusan perkara seperti ini dapat :",
    "options": [
      {
        "key": "A",
        "text": "Ditolak"
      },
      {
        "key": "B",
        "text": "Diterima"
      },
      {
        "key": "C",
        "text": "Tidak dapat diterima"
      },
      {
        "key": "D",
        "text": "Ketiganya salah"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Surat kuasa khusus yang tidak sempurna atau cacat formil berakibat gugatan dinyatakan tidak dapat diterima (NO).",
      "legalBasis": "Pasal 123 HIR jo. Surat Edaran Mahkamah Agung (SEMA) No. 1 Tahun 1971 dan SEMA No. 6 Tahun 1994.",
      "analysis": "SEMA No. 1/1971 menegaskan bahwa surat kuasa khusus yang tidak menyebutkan secara spesifik pihak lawan, objek perkara, dan pengadilan berakibat gugatan dinilai cacat formil dan diputus tidak dapat diterima (Niet Ontvankelijke Verklaard)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 247,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Untuk mewakili klien beracara di pengadilan disyaratkan menggunakan surat kuasa yang bersifat :",
    "options": [
      {
        "key": "A",
        "text": "Umum dan khusus"
      },
      {
        "key": "B",
        "text": "Umum"
      },
      {
        "key": "C",
        "text": "Khusus"
      },
      {
        "key": "D",
        "text": "Semua benar"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Mewakili pihak beracara di sidang pengadilan secara mutlak mensyaratkan Surat Kuasa Khusus.",
      "legalBasis": "Pasal 123 ayat (1) HIR / Pasal 147 ayat (1) RBg jo. SEMA No. 1 Tahun 1971.",
      "analysis": "Kuasa umum tidak berlaku untuk mewakili di persidangan. Pasal 123 ayat (1) HIR mewajibkan pemberian kuasa khusus yang tertuang dalam surat kuasa khusus."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 248,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Secara umum, Pasal 118 HIR menentukan asas \u201CActor Sequitor Forum Rei\u201D. Yang maksudnya adalah :",
    "options": [
      {
        "key": "A",
        "text": "Gugatan harus diajukan kepengadilan yang yurisdiksinya melingkupi tempat tinggal Tergugat"
      },
      {
        "key": "B",
        "text": "Gugatan harus diajukan kepengadilan yang yurisdiksinya melingkupi tempat tinggal Penggugat"
      },
      {
        "key": "C",
        "text": "Gugatan harus diajukan kepengadilan yang yurisdiksinya melingkupi tempat tinggal saksi dan barang bukti"
      },
      {
        "key": "D",
        "text": "Gugatan harus diajukan kepengadilan yang yurisdiksinya melingkupi tempat tinggal Penggugat dan Turut Tergugat"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Actor sequitur forum rei berarti gugatan diajukan ke Pengadilan Negeri tempat tinggal Tergugat.",
      "legalBasis": "Pasal 118 ayat (1) HIR / Pasal 142 ayat (1) RBg.",
      "analysis": "Asas dasar hukum acara perdata Indonesia menentukan bahwa pihak yang digugat berhak diadili di pengadilan tempat domisilinya (actor sequitur forum rei)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 249,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Pidana (KUHAP)",
    "question": "Unsur-unsur surat gugatan adalah :",
    "options": [
      {
        "key": "A",
        "text": "Identitas para pihak, Fundamentum Petendi, dan Petitum"
      },
      {
        "key": "B",
        "text": "Identitas para pihak, gugatan dan tuntutan"
      },
      {
        "key": "C",
        "text": "Uraian tentang gugatan dan tuntutan"
      },
      {
        "key": "D",
        "text": "Uraian lengkap posita dan petitum 10"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Anatomi surat gugatan terdiri dari Identitas para pihak, Fundamentum Petendi (Posita), dan Petitum.",
      "legalBasis": "Pasal 8 No. 3 Reglement op de Rechtsvordering (Rv) jo. Pasal 118 HIR.",
      "analysis": "Syarat isi surat gugatan meliputi: 1. Identitas para pihak; 2. Fundamentum petendi (uraian fakta peristiwa dan dasar hukum); 3. Petitum (tuntutan yang dimohonkan dikabulkan hakim)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 250,
    "category": "Hukum Acara Perdata",
    "topicTag": "Hukum Acara Perdata (HIR/RBg)",
    "question": "Sita jaminan (conservatoir beslag) dapat dimintakan terhadap :",
    "options": [
      {
        "key": "A",
        "text": "Barang bergerak maupun barang tidak bergerak milik Tergugat"
      },
      {
        "key": "B",
        "text": "Barang bergerak maupun barang tidak bergerak milik Penggugat yang dikuasai Tergugat"
      },
      {
        "key": "C",
        "text": "Barang bergerak milik Penggugat yang dikuasai Tergugat"
      },
      {
        "key": "D",
        "text": "Barang tidak bergerak milik Penggugat yang dikuasai Tergugat"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Sita jaminan (conservatoir beslag) diletakkan atas barang bergerak atau barang tidak bergerak milik Tergugat.",
      "legalBasis": "Pasal 227 ayat (1) HIR / Pasal 261 ayat (1) RBg.",
      "analysis": "Pasal 227 ayat (1) HIR mengatur bahwa sita jaminan dimintakan terhadap barang bergerak maupun barang tidak bergerak kepunyaan Tergugat guna menjamin dipenuhinya tuntutan pembayaran ganti rugi penggugat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 251,
    "category": "Hukum Acara Perdata",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Permohonan peninjauan kembali putusan perkara perdata dapat diajukan berdasarkan alasan :",
    "options": [
      {
        "key": "A",
        "text": "Ditemukan surat-surat bukti yang bersifat menentukan"
      },
      {
        "key": "B",
        "text": "Melanggar hukum yang berlaku"
      },
      {
        "key": "C",
        "text": "Tidak berwenang atau melampaui batas wewenang"
      },
      {
        "key": "D",
        "text": "Semua benar PERAN DAN FUNGSI ORGANISASI ADVOKAT"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Alasan peninjauan kembali perkara perdata adalah ditemukannya bukti surat baru yang menentukan (novum).",
      "legalBasis": "Pasal 67 huruf b UU No. 14 Tahun 1985 jo. UU No. 5 Tahun 2004 jo. UU No. 3 Tahun 2009 tentang Mahkamah Agung.",
      "analysis": "Pasal 67 huruf b UU Mahkamah Agung mengatur permohonan PK dapat diajukan apabila setelah perkara diputus ditemukan surat-surat bukti yang bersifat menentukan yang pada waktu perkara diperiksa tidak dapat ditemukan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 252,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Saat ini ketentuan mengenai Advokat diatur dalam Undang-undang Nomor :",
    "options": [
      {
        "key": "A",
        "text": "Undang-undang Nomor 8 Tahun 2002"
      },
      {
        "key": "B",
        "text": "Undang-undang Nomor 8 Tahun 2003"
      },
      {
        "key": "C",
        "text": "Undang-undang Nomor 18 Tahun 2002"
      },
      {
        "key": "D",
        "text": "Undang-undang Nomor 18 Tahun 2003"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Profesi Advokat diatur dalam Undang-Undang No. 18 Tahun 2003.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 36 Undang-Undang No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "UU No. 18 Tahun 2003 disahkan pada tanggal 5 April 2003 sebagai undang-undang yang mengatur profesi advokat di Indonesia."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 253,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Di bawah ini adalah beberapa organisasi profesi Advokat yang terhimpun dalam PERADI, kecuali :",
    "options": [
      {
        "key": "A",
        "text": "Asosiasi Advokat Indonesia (AAI)"
      },
      {
        "key": "B",
        "text": "Serikat Pengacara Indonesia (SPI)"
      },
      {
        "key": "C",
        "text": "Ikatan Advokat Indonesia (IKADIN)"
      },
      {
        "key": "D",
        "text": "Persatuan Advokat Indonesia (PERADIN)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "PERADIN bukan merupakan salah satu dari 8 organisasi advokat pendiri PERADI dalam Pasal 32 ayat (3) UU Advokat.",
      "legalBasis": "Pasal 32 ayat (3) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Delapan organisasi advokat pendiri PERADI adalah IKADIN, AAI, IPHI, HAPI, SPI, AKHI, HKHPM, dan APSI. PERADIN tidak termasuk dalam 8 organisasi tersebut."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 254,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Tugas seorang Advokat adalah memberikan jasa hukum, antara lain meliputi hal-hal di bawah ini, kecuali :",
    "options": [
      {
        "key": "A",
        "text": "Memberikan Konsultasi Hukum"
      },
      {
        "key": "B",
        "text": "Memberikan Bantuan Hukum"
      },
      {
        "key": "C",
        "text": "Memberikan Pendidikan Hukum"
      },
      {
        "key": "D",
        "text": "Membela Kepentingan Hukum Klien"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Memberikan pendidikan hukum formal bukan merupakan jasa hukum advokat dalam Pasal 1 angka 2 UU Advokat.",
      "legalBasis": "Pasal 1 angka 2 UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Jasa hukum advokat menurut UU adalah konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, membela, dan tindakan hukum lain untuk klien. Menyelenggarakan pendidikan formal bukan kategori jasa hukum."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 255,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Induk Organisasi Advokat yang dibentuk oleh delapan organisasi profesi advokat untuk memenuhi syarat Undang-undang Advokat adalah :",
    "options": [
      {
        "key": "A",
        "text": "FKAI"
      },
      {
        "key": "B",
        "text": "PERADI"
      },
      {
        "key": "C",
        "text": "PERADIN"
      },
      {
        "key": "D",
        "text": "PUSBADHI 11"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Induk organisasi advokat yang dibentuk oleh delapan organisasi profesi advokat adalah PERADI.",
      "legalBasis": "Pasal 32 ayat (4) UU No. 18 Tahun 2003 tentang Advokat jo. Deklarasi Pendirian PERADI 21 Desember 2004.",
      "analysis": "PERADI didirikan pada 21 Desember 2004 sebagai perwujudan satu-satunya wadah tunggal profesi advokat yang diamanatkan oleh UU No. 18 Tahun 2003."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 256,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Wilayah kerja Advokat sesuai dengan Pasal 5 ayat (2) UU No. 18 Tahun 2003 adalah :",
    "options": [
      {
        "key": "A",
        "text": "Domisili Advokat tersebut"
      },
      {
        "key": "B",
        "text": "Domisili klien yang dibelanya"
      },
      {
        "key": "C",
        "text": "Domisili Advokat dan klien yang dibelanya"
      },
      {
        "key": "D",
        "text": "Seluruh wilayah Republik Indonesia"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Wilayah kerja Advokat meliputi seluruh wilayah Negara Republik Indonesia.",
      "legalBasis": "Pasal 5 ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": 'Pasal 5 ayat (2) UU Advokat menyatakan secara tegas: "Wilayah kerja Advokat meliputi seluruh wilayah negara Republik Indonesia."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 257,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Wadah Tunggal Organisasi Advokat",
    "question": "Sebelum lahirnya organisasi Advokat yang dibentuk oleh delapan organisasi, maka delapan organisasi tersebut bersama-sama melakukan kegiatan verifikasi / herregistrasi advokat dengan menggunakan nama :",
    "options": [
      {
        "key": "A",
        "text": "IPHI (Ikatan Pengacara Hukum Indonesia)"
      },
      {
        "key": "B",
        "text": "AAI (Asosiasi Advokat Indonesia)"
      },
      {
        "key": "C",
        "text": "FKAI (Forum Komunikasi Advokat Indonesia)"
      },
      {
        "key": "D",
        "text": "KKAI (Komite Kerja Advokat Indonesia)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Sebelum lahirnya PERADI, 8 organisasi berhimpun dalam KKAI (Komite Kerja Advokat Indonesia).",
      "legalBasis": "Pasal 32 ayat (3) dan (4) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "KKAI dibentuk untuk koordinasi bersama dalam menyusun kode etik bersama tahun 2002 dan verifikasi keanggotaan advokat menjelang berdirinya wadah tunggal PERADI."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 258,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Istilah PERADI, Perhimpunan Advokat Indonesia dapat dilihat :",
    "options": [
      {
        "key": "A",
        "text": "Di dalam Undang-undang Nomor 18 Tahun 2003 tentang Advokat"
      },
      {
        "key": "B",
        "text": "Undang-undang Nomor 20 Tahun 2003"
      },
      {
        "key": "C",
        "text": "Deklarasi Advokat Indonesia, Jakarta 21 Desember 2004"
      },
      {
        "key": "D",
        "text": "Jawaban A, B, C, salah"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Nama PERADI lahir dalam Deklarasi Advokat Indonesia pada tanggal 21 Desember 2004 di Jakarta.",
      "legalBasis": "Pasal 32 ayat (1) Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Piagam Deklarasi PERADI tanggal 21 Desember 2004 di Jakarta.",
      "analysis": "Nama PERADI tidak tertulis dalam teks UU No. 18/2003, melainkan disepakati dan dideklarasikan bersama oleh 8 organisasi pada 21 Desember 2004."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 259,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Eksistensi seorang Advokat setelah keluarnya Undang-undang Nomor 18 Tahun 2003 sudah diakui statusnya sebagai :",
    "options": [
      {
        "key": "A",
        "text": "Institusi Hukum"
      },
      {
        "key": "B",
        "text": "Kuasa Hukum"
      },
      {
        "key": "C",
        "text": "Penegak Hukum"
      },
      {
        "key": "D",
        "text": "Pendekar Hukum"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Advokat berstatus sebagai penegak hukum, bebas dan mandiri.",
      "legalBasis": "Pasal 5 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": 'Pasal 5 ayat (1) UU Advokat: "Advokat berstatus sebagai penegak hukum, bebas dan mandiri yang dijamin oleh hukum dan peraturan perundang-undangan."'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 260,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Beberapa pasal dari Undang-undang Nomor 18 Tahun 2003 tentang Advokat telah dilakukan Judicial Review ke Mahkamah Konstitusi dan telah mendapat keputusan, Pasal-pasal tersebut adalah :",
    "options": [
      {
        "key": "A",
        "text": "Pasal 12 tentang pengawasan dan Pasal 31 tentang ketentuan pidana"
      },
      {
        "key": "B",
        "text": "Pasal 12 tentang pengawasan dan Pasal 23 tentang Advokat Asing"
      },
      {
        "key": "C",
        "text": "Pasal 32 tentang ketentuan peralihan"
      },
      {
        "key": "D",
        "text": "Jawaban B dan C adalah benar"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pasal 12 tentang pengawasan dan Pasal 31 tentang ketentuan pidana",
      "legalBasis": "Pasal 24C ayat (1) UUD 1945 jo. Pasal 10 ayat (1) Undang-Undang No. 24 Tahun 2003 tentang Mahkamah Konstitusi jo. Putusan MK No. 006/PUU-II/2004.",
      "analysis": "Berdasarkan ketentuan hukum acara peradilan Indonesia dalam ranah Kode Etik Profesi Advokat, jawaban yang sesuai dengan standar penilaian Ujian Profesi Advokat PERADI adalah pilihan A."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 261,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Pengertian Advokat sebagaimana disebut dalam Undang-undang No. 18 Tahun 2003 tentang Advokat adalah :",
    "options": [
      {
        "key": "A",
        "text": "Orang yang berprofesi memberi jasa hukum, baik di dalam maupun diluar pengadilan yang memenuhi persyaratan berdasarkan ketentuan Undang-undang ini"
      },
      {
        "key": "B",
        "text": "Orang yang telah diangkat oleh Organisasi Advokat yang bertugas memberi jasa hukum, baik di dalam maupun di luar pengadilan yang memenuhi persyaratan berdasarkan ketentuan Undang- undang 12"
      },
      {
        "key": "C",
        "text": "Orang yang berprofesi memberi pelayanan hukum yang memenuhi persyaratan berdasarkan ketentuan Undang-undang"
      },
      {
        "key": "D",
        "text": "Jawaban A, B, C adalah benar"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pengertian advokat dirumuskan secara tegas dalam Pasal 1 angka 1 UU No. 18 Tahun 2003.",
      "legalBasis": "Pasal 1 angka 1 UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": 'Pasal 1 angka 1 UU Advokat merumuskan: "Advokat adalah orang yang berprofesi memberi jasa hukum, baik di dalam maupun di luar pengadilan yang memenuhi persyaratan berdasarkan ketentuan Undang-Undang ini."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 262,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Berdasarkan Pasal 28 ayat (3) UU Advokat, Pimpinan Organisasi Advokat tidak dapat dirangkap jabatan sebagai :",
    "options": [
      {
        "key": "A",
        "text": "Pimpinan Dewan Kehormatan"
      },
      {
        "key": "B",
        "text": "Pimpinan Partai Politik"
      },
      {
        "key": "C",
        "text": "Pimpinan DPR/MPR"
      },
      {
        "key": "D",
        "text": "Pimpinan Organisasi Terlarang"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pimpinan Partai Politik",
      "legalBasis": "Pasal 28 ayat (3) Undang-Undang No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Berdasarkan ketentuan hukum acara peradilan Indonesia dalam ranah Kode Etik Profesi Advokat, jawaban yang sesuai dengan standar penilaian Ujian Profesi Advokat PERADI adalah pilihan B."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 263,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Dalam Undang-undang Advokat diatur mengenai hak Immunitas Advokat, yaitu :",
    "options": [
      {
        "key": "A",
        "text": "Hak Advokat untuk memperoleh informasi atau data dari instansi pemerintah guna kepentingan suatu perkara"
      },
      {
        "key": "B",
        "text": "Hak Advokat untuk menolak suatu perkara jika diyakini tidak ada dasar hukumnya"
      },
      {
        "key": "C",
        "text": "Hak Advokat untuk dilindungi dari tuntutan pidana atau perdata ketika ia menjalankan tugas profesinya dengan itikad baik untuk kepentingan pembelaan klien dalam sidang pengadilan"
      },
      {
        "key": "D",
        "text": "Jawaban A dan B benar"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Hak Advokat untuk dilindungi dari tuntutan pidana atau perdata ketika ia menjalankan tugas profesinya dengan itikad baik untuk kepentingan pembelaan klien dalam sidang pengadilan",
      "legalBasis": "Pasal 16 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Putusan Mahkamah Konstitusi No. 26/PUU-XI/2013.",
      "analysis": "Berdasarkan ketentuan hukum acara peradilan Indonesia dalam ranah Kode Etik Profesi Advokat, jawaban yang sesuai dengan standar penilaian Ujian Profesi Advokat PERADI adalah pilihan C."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 264,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Hakim, Jaksa, Kepolisian, Avokat sebagai penegak hukum selain diatur oleh Undang- undang, mempunyai fungsi masing-masing :",
    "options": [
      {
        "key": "A",
        "text": "Hakim mewakili kepentingan negara, Jaksa dan Kepolisian mewakili kepentingan Pemerintah, Advokat mewakili kepentingan masyarakat"
      },
      {
        "key": "B",
        "text": "Hakim mewakili kepentingan pemerintah, Jaksa dan Kepolisian mewakili kepentingan negara, Advokat mewakili kepentingan masyarakat"
      },
      {
        "key": "C",
        "text": "Hakim mewakili kepentingan negara, Jaksa, Kepolisian dan Advokat mewakili kepentingan masyarakat"
      },
      {
        "key": "D",
        "text": "Hakim, Jaksa, Kepolisian dan Advokat mewakili kepentingan penegakkan hukum, mendapat keadilan, kemanfaatan dan kepastian hukum KODE ETIK PROFESI ADVOKAT"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Hakim mewakili kepentingan kekuasaan negara, Jaksa/Polisi mewakili penuntutan pemerintah, Advokat mewakili kepentingan masyarakat/klien.",
      "legalBasis": "Pasal 5 ayat (1) Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Penjelasan Umum UU No. 18 Tahun 2003.",
      "analysis": "Dalam doktrin peradilan yang adil (fair trial), hakim menegakkan keadilan atas nama negara, jaksa/polisi mewakili kepentingan umum dan pemerintah, sedangkan advokat mewakili kepentingan hukum masyarakat pencari keadilan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 265,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Etika & Profesi Advokat Indonesia",
    "question": "Profesi Advokat adalah profesi terhormat dan menjadi salah satu pilar dalam menegakkan supremasi hukum dan hak asasi manusia. Dikenal dengan istilah apakah \u201Cprofesi terhormat\u201D tersebut : 13",
    "options": [
      {
        "key": "A",
        "text": "Honour profession"
      },
      {
        "key": "B",
        "text": "Officium Juris"
      },
      {
        "key": "C",
        "text": "Officium Nobile"
      },
      {
        "key": "D",
        "text": "Respected Profession"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Profesi Advokat adalah officium nobile (profesi yang mulia dan terhormat).",
      "legalBasis": "Penjelasan Umum Alinea ke-1 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Pasal 3 huruf g KEAI 2002.",
      "analysis": "Advokat sebagai profesi terhormat dan mulia (officium nobile) menjalankan fungsi penegakan hukum secara bebas dan mandiri serta terikat pada standar moral dan sumpah profesi."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 266,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Honorarium Advokat",
    "question": "Besarnya honorarium Advokat yang diterima dari kliennya ditentukan berdasarkan:",
    "options": [
      {
        "key": "A",
        "text": "Jumlah yang dipatok secara sepihak oleh pimpinan Organisasi Advokat"
      },
      {
        "key": "B",
        "text": "Standar upah minimum regional (UMR)"
      },
      {
        "key": "C",
        "text": "Kesepakatan atau persetujuan kedua belah pihak (Advokat dengan Klien)"
      },
      {
        "key": "D",
        "text": "Keputusan Ketua Pengadilan Negeri setempat"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Besaran honorarium advokat ditentukan atas dasar kesepakatan kedua belah pihak.",
      "legalBasis": "Pasal 21 ayat (2) UU No. 18 Tahun 2003 tentang Advokat jo. Pasal 4 huruf e KEAI.",
      "analysis": "Pasal 21 ayat (2) UU No. 18 Tahun 2003 menetapkan: 'Besarnya honorarium atas Jasa Hukum sebagaimana dimaksud pada ayat (1) ditetapkan secara wajar berdasarkan persetujuan kedua belah pihak.'"
    },
    "difficulty": "Mudah"
  },
  {
    "id": 267,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Keberlakuan Kode Etik Advokat",
    "question": "Bagaimanakah status hukum Kode Etik Advokat yang disahkan pada tanggal 23 Mei 2002 setelah disahkannya Undang-Undang No. 18 Tahun 2003 tentang Advokat?",
    "options": [
      {
        "key": "A",
        "text": "Batal demi hukum karena undang-undang lahir belakangan"
      },
      {
        "key": "B",
        "text": "Dinyatakan mempunyai kekuatan hukum yang mengikat secara mutatis mutandis berdasarkan Pasal 33 UU Advokat"
      },
      {
        "key": "C",
        "text": "Hanya berlaku sebagai norma kesusilaan tanpa sanksi formal"
      },
      {
        "key": "D",
        "text": "Hanya mengikat advokat yang bergabung dalam Komite Kerja Advokat Indonesia (KKAI)"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Kode Etik 23 Mei 2002 berlaku dan berkekuatan hukum mutatis mutandis berdasarkan Pasal 33 UU Advokat.",
      "legalBasis": "Pasal 33 UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Pasal 33 UU No. 18 Tahun 2003 menentukan: 'Kode etik dan ketentuan tentang Dewan Kehormatan Organisasi Advokat yang telah mempunyai kekuatan hukum pada saat Undang-Undang ini mulai berlaku, dinyatakan mempunyai kekuatan hukum yang mengikat secara mutatis mutandis bagi Advokat sampai ada ketentuan yang baru yang dibuat oleh Organisasi Advokat.'"
    },
    "difficulty": "Sedang"
  },
  {
    "id": 268,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Hak Imunitas Advokat",
    "question": "Pasal 16 UU Advokat jo. Putusan Mahkamah Konstitusi No. 26/PUU-XI/2013 mengatur ketentuan tentang Hak Imunitas bagi seorang Advokat dalam lingkup:",
    "options": [
      {
        "key": "A",
        "text": "Tuntutan pidana saja"
      },
      {
        "key": "B",
        "text": "Gugatan perdata saja"
      },
      {
        "key": "C",
        "text": "Tuntutan perdata maupun pidana, baik di dalam maupun di luar sidang pengadilan dengan itikad baik"
      },
      {
        "key": "D",
        "text": "Pemeriksaan administrasi perpajakan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Hak imunitas melindungi advokat dari tuntutan perdata maupun pidana saat menjalankan profesi dengan itikad baik.",
      "legalBasis": "Pasal 16 UU No. 18 Tahun 2003 jo. Putusan MK No. 26/PUU-XI/2013.",
      "analysis": "Pasal 16 UU Advokat pasca Putusan MK No. 26/PUU-XI/2013 menegaskan advokat tidak dapat dituntut baik secara perdata maupun pidana dalam menjalankan tugas profesinya dengan itikad baik untuk kepentingan pembelaan klien di dalam maupun di luar sidang pengadilan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 269,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Pengesahan Kode Etik Advokat Indonesia",
    "question": "Kode Etik Advokat Indonesia (KEAI) ditetapkan dan disahkan di Jakarta pada tanggal:",
    "options": [
      {
        "key": "A",
        "text": "23 Mei 2003"
      },
      {
        "key": "B",
        "text": "23 Juni 2002"
      },
      {
        "key": "C",
        "text": "23 Mei 2002"
      },
      {
        "key": "D",
        "text": "23 Mei 2001"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Kode Etik Advokat Indonesia disahkan di Jakarta pada tanggal 23 Mei 2002 oleh Komite Kerja Advokat Indonesia.",
      "legalBasis": "Pasal 33 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Ketentuan Penutup Kode Etik Advokat Indonesia (KEAI) tanggal 23 Mei 2002.",
      "analysis": "KEAI disepakati dan ditandatangani oleh 7 organisasi profesi advokat (kemudian 8 organisasi) di Jakarta pada tanggal 23 Mei 2002 sebelum diundangkannya UU No. 18 Tahun 2003."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 270,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Surat Tanpa Prasangka (Sans Prejudice)",
    "question": "Surat korespondensi antar Advokat yang diberi tanda 'Sans Prejudice' (tanpa prasangka) maksud dan akibat hukumnya adalah:",
    "options": [
      {
        "key": "A",
        "text": "Surat tersebut dibuat tanpa adanya prasangka dan wajib dibacakan di sidang terbuka"
      },
      {
        "key": "B",
        "text": "Surat tersebut wajib diserahkan kepada penyidik kepolisian"
      },
      {
        "key": "C",
        "text": "Surat tersebut bersifat rahasia dan tidak dapat dijadikan atau diajukan sebagai alat bukti di muka persidangan pengadilan"
      },
      {
        "key": "D",
        "text": "Surat tersebut harus ditunjukkan kepada majelis hakim yang memeriksa perkara"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Surat bertanda Sans Prejudice bersifat rahasia dan tidak dapat dijadikan alat bukti di muka pengadilan.",
      "legalBasis": "Pasal 7 huruf a Kode Etik Advokat Indonesia (KEAI).",
      "analysis": "Pasal 7 huruf a KEAI menegaskan: 'Surat-surat yang dikirim oleh Advokat kepada teman sejawatnya dalam suatu perkara dapat ditunjukkan kepada hakim kecuali jika surat-surat tersebut bersangkutan dengan perkataan 'Sans Prejudice'.' Surat bertanda Sans Prejudice dibuat dalam rangka ikhtiar perdamaian sehingga dilindungi kerahasiaannya."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 271,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Sifat Putusan Dewan Kehormatan Pusat",
    "question": "Keputusan Majelis Dewan Kehormatan Pusat mengenai pelanggaran Kode Etik yang dilakukan seorang Advokat adalah bersifat:",
    "options": [
      {
        "key": "A",
        "text": "Final dan mengikat serta tidak dapat diajukan upaya banding lagi"
      },
      {
        "key": "B",
        "text": "Belum final dan dapat diajukan upaya banding ke Pengadilan Tinggi"
      },
      {
        "key": "C",
        "text": "Dapat diajukan kasasi ke Mahkamah Agung"
      },
      {
        "key": "D",
        "text": "Hanya bersifat rekomendasi kepada Kementerian Hukum"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Putusan Dewan Kehormatan Pusat adalah tingkat terakhir, bersifat final dan mengikat.",
      "legalBasis": "Pasal 27 ayat (5) UU No. 18 Tahun 2003 jo. Pasal 18 KEAI.",
      "analysis": "Dewan Kehormatan Daerah memeriksa dan memutus pada tingkat pertama, sedangkan Dewan Kehormatan Pusat memutus pada tingkat banding/terakhir yang putusannya bersifat final dan mengikat tanpa upaya hukum peradilan umum lagi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 272,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Hubungan dengan Klien",
    "question": "Langkah pertama yang etis dan tepat dilakukan oleh seorang Advokat ketika didatangi calon klien yang membawa berkas perkaranya adalah:",
    "options": [
      {
        "key": "A",
        "text": "Langsung meminta uang jasa pembelaan (fee) sebelum mendengar duduk perkaranya"
      },
      {
        "key": "B",
        "text": "Menanyakan dan memastikan apakah berkas perkara tersebut pernah atau sedang dikuasakan kepada advokat lain"
      },
      {
        "key": "C",
        "text": "Langsung mendaftarkan gugatan ke pengadilan hari itu juga"
      },
      {
        "key": "D",
        "text": "Memaksa klien menandatangani surat kuasa tanpa membaca isinya"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Advokat wajib memastikan apakah perkara tersebut masih dikuasakan kepada advokat lain demi etika sejawat.",
      "legalBasis": "Pasal 5 huruf c dan d Kode Etik Advokat Indonesia (KEAI).",
      "analysis": "Pasal 5 huruf c KEAI melarang advokat merebut klien dari teman sejawatnya. Jika perkara pernah ditangani advokat lain, calon klien wajib menunjukkan bukti pencabutan kuasa atau advokat baru wajib menghubungi rekan terdahulu."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 273,
    "category": "Hukum Acara PTUN",
    "topicTag": "Dasar Hukum Peradilan TUN",
    "question": "Peradilan Tata Usaha Negara (PTUN) di Indonesia dibentuk dan diatur berdasarkan peraturan perundang-undangan:",
    "options": [
      {
        "key": "A",
        "text": "UU No. 5 Tahun 1960 jo. UU No. 8 Tahun 2004"
      },
      {
        "key": "B",
        "text": "UU No. 5 Tahun 1986 jo. UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009"
      },
      {
        "key": "C",
        "text": "UU No. 5 Tahun 1988 jo. UU No. 9 Tahun 2004"
      },
      {
        "key": "D",
        "text": "UU No. 15 Tahun 1986 jo. UU No. 9 Tahun 2004"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Peradilan Tata Usaha Negara diatur dalam UU No. 5 Tahun 1986 yang telah diubah dengan UU No. 9 Tahun 2004 dan UU No. 51 Tahun 2009.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 144 UU No. 5 Tahun 1986 jo. UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009 tentang PTUN.",
      "analysis": "UU No. 5 Tahun 1986 merupakan payung hukum pembentukan Peradilan TUN di Indonesia yang telah dua kali mengalami pembaruan, yaitu UU No. 9/2004 dan UU No. 51/2009."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 274,
    "category": "Hukum Acara PTUN",
    "topicTag": "Kedudukan PTUN",
    "question": "Pada hakikatnya Pengadilan Tata Usaha Negara (PTUN tingkat pertama) berkedudukan di:",
    "options": [
      {
        "key": "A",
        "text": "Ibukota Kecamatan"
      },
      {
        "key": "B",
        "text": "Ibukota Kabupaten atau Kota"
      },
      {
        "key": "C",
        "text": "Ibukota Provinsi dan daerah hukumnya meliputi wilayah provinsi yang bersangkutan"
      },
      {
        "key": "D",
        "text": "Hanya di Ibukota Negara Republik Indonesia (Jakarta)"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "PTUN berkedudukan di ibukota Kabupaten/Kota dengan daerah hukum meliputi kabupaten/kota yang bersangkutan.",
      "legalBasis": "Pasal 6 ayat (1) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": "Pasal 6 ayat (1) UU No. 5 Tahun 1986 menyatakan: 'Pengadilan Tata Usaha Negara berkedudukan di kotamadya atau ibukota kabupaten, dan daerah hukumnya meliputi wilayah kotamadya atau kabupaten.' Sedangkan Pengadilan Tinggi TUN berkedudukan di ibukota provinsi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 275,
    "category": "Hukum Acara PTUN",
    "topicTag": "Tenggang Waktu Gugatan TUN",
    "question": "Tenggang waktu bagi seseorang atau badan hukum perdata untuk dapat mengajukan gugatan sengketa tata usaha negara ke PTUN adalah:",
    "options": [
      {
        "key": "A",
        "text": "14 (empat belas) hari sejak Keputusan TUN diterima"
      },
      {
        "key": "B",
        "text": "30 (tiga puluh) hari sejak Keputusan TUN diterima atau diumumkan"
      },
      {
        "key": "C",
        "text": "60 (enam puluh) hari sejak Keputusan TUN diumumkan"
      },
      {
        "key": "D",
        "text": "90 (sembilan puluh) hari terhitung sejak saat diterimanya atau diumumkannya Keputusan Badan/Pejabat TUN"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Tenggang waktu pengajuan gugatan TUN adalah 90 hari sejak KTUN diterima atau diumumkan.",
      "legalBasis": "Pasal 55 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": "Pasal 55 UU No. 5 Tahun 1986 secara tegas menentukan: 'Gugatan dapat diajukan hanya dalam tenggang waktu sembilan puluh hari terhitung sejak saat diterimanya atau diumumkannya Keputusan Badan atau Pejabat Tata Usaha Negara.' Lewat dari 90 hari gugatan dinyatakan kedaluwarsa (lewat waktu)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 276,
    "category": "Hukum Acara PTUN",
    "topicTag": "Lampiran Gugatan TUN",
    "question": "Berdasarkan Pasal 56 ayat (2) UU No. 5 Tahun 1986, hal apa yang sedapat mungkin wajib dilampirkan Penggugat pada saat mendaftarkan gugatan di Pengadilan TUN?",
    "options": [
      {
        "key": "A",
        "text": "Salinan Keputusan Tata Usaha Negara (KTUN) yang disengketakan"
      },
      {
        "key": "B",
        "text": "Surat rekomendasi dari DPRD setempat"
      },
      {
        "key": "C",
        "text": "Laporan pengaduan tindak pidana ke kepolisian"
      },
      {
        "key": "D",
        "text": "Surat izin dari atasan pejabat yang mengeluarkan keputusan"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Gugatan TUN sedapat mungkin disertai salinan Keputusan TUN yang disengketakan.",
      "legalBasis": "Pasal 56 ayat (2) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": "Pasal 56 ayat (2) UU PTUN mengatur: 'Sedapat mungkin gugatan disertai Keputusan Tata Usaha Negara yang disengketakan oleh penggugat.' Jika keputusan tertulis belum diperoleh karena penolakan pasif, dapat diajukan bukti permohonan yang tidak ditanggapi."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 277,
    "category": "Hukum Acara PTUN",
    "topicTag": "Karakteristik Hukum Acara PTUN",
    "question": "Hukum Acara Peradilan Tata Usaha Negara mengenal lembaga-lembaga hukum khas berikut ini, KECUALI:",
    "options": [
      {
        "key": "A",
        "text": "Rapat Permusyawaratan / Dismissal Process oleh Ketua Pengadilan"
      },
      {
        "key": "B",
        "text": "Pemeriksaan Persiapan oleh Majelis Hakim"
      },
      {
        "key": "C",
        "text": "Upaya Perlawanan (Verzet) terhadap penetapan dismissal"
      },
      {
        "key": "D",
        "text": "Putusan Verstek (di luar hadirnya Tergugat pada sidang pertama)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Hukum Acara PTUN tidak mengenal putusan verstek sebagaimana dalam peradilan perdata umum.",
      "legalBasis": "Pasal 62, 63, dan 71 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": "Dalam PTUN, jika Tergugat tidak hadir setelah dipanggil berulang kali secara patut, pemeriksaan perkara dilanjutkan tanpa hadirnya Tergugat (Pasal 72 UU PTUN), bukan dijatuhkan putusan verstek yang serta merta mengabulkan gugatan. Asas inquisitoir menuntut hakim tetap menguji keabsahan KTUN secara objektif."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 278,
    "category": "Hukum Acara PTUN",
    "topicTag": "Pemeriksaan Persiapan PTUN",
    "question": "Dalam tahap Pemeriksaan Persiapan di PTUN (Pasal 63 UU No. 5 Tahun 1986), Hakim berwenang untuk:",
    "options": [
      {
        "key": "A",
        "text": "Wajib memberi nasihat kepada Penggugat untuk memperbaiki dan melengkapi gugatan"
      },
      {
        "key": "B",
        "text": "Langsung menjatuhkan hukuman denda kepada Pejabat TUN"
      },
      {
        "key": "C",
        "text": "Memaksa para pihak melakukan ganti rugi secara pidana"
      },
      {
        "key": "D",
        "text": "Menghentikan perkara secara diam-diam tanpa berita acara"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Dalam pemeriksaan persiapan, hakim wajib memberi nasihat perbaikan gugatan dan meminta penjelasan kepada badan/pejabat TUN.",
      "legalBasis": "Pasal 63 ayat (2) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": "Pemeriksaan persiapan bertujuan menyempurnakan gugatan Penggugat sebelum disidangkan dalam sidang terbuka untuk umum. Hakim berwenang meminta penjelasan Pejabat TUN dan memberi petunjuk perbaikan dalam tenggang waktu 30 hari."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 279,
    "category": "Hukum Acara PTUN",
    "topicTag": "Objek Sengketa PTUN",
    "question": "Manakah di bawah ini yang merupakan Keputusan Tata Usaha Negara yang SAH menjadi Objek Gugatan di Pengadilan TUN?",
    "options": [
      {
        "key": "A",
        "text": "Keputusan Tata Usaha Negara yang bersifat pengaturan umum (regeling)"
      },
      {
        "key": "B",
        "text": "Keputusan Komisi Pemilihan Umum mengenai hasil pemilihan umum"
      },
      {
        "key": "C",
        "text": "Surat Keputusan Pemberhentian Tidak Dengan Hormat Pegawai Negeri Sipil (PNS) yang dikeluarkan Pejabat Pembina Kepegawaian"
      },
      {
        "key": "D",
        "text": "Perjanjian sewa-menyewa tanah yang merupakan perbuatan hukum keperdataan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "SK Pemberhentian PNS adalah penetapan tertulis konkret, individual, final yang merupakan objek sah gugatan TUN.",
      "legalBasis": "Pasal 1 angka 9 jo. Pasal 2 UU No. 5 Tahun 1986 jo. UU No. 51 Tahun 2009.",
      "analysis": "Surat Keputusan pemecatan PNS memenuhi unsur Pasal 1 angka 9 UU PTUN: penetapan tertulis, dikeluarkan badan/pejabat TUN, konkret, individual, final, dan menimbulkan akibat hukum. Pengaturan umum, hasil pemilu, dan perjanjian perdata dikecualikan oleh Pasal 2 UU PTUN."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 280,
    "category": "Hukum Acara PTUN",
    "topicTag": "Asas Praesumptio Iustae Causa",
    "question": "Di dalam Hukum Administrasi Negara dan Hukum Acara PTUN dikenal asas 'Praesumptio Iustae Causa' (Presumption of Legality), yang artinya adalah:",
    "options": [
      {
        "key": "A",
        "text": "Setiap orang dianggap tidak bersalah sampai ada putusan pidana yang berkekuatan hukum tetap"
      },
      {
        "key": "B",
        "text": "Keputusan Pejabat TUN harus dianggap batal demi hukum seketika saat digugat ke pengadilan"
      },
      {
        "key": "C",
        "text": "Setiap Keputusan Tata Usaha Negara harus selalu dianggap sah dan benar menurut hukum sampai ada putusan pengadilan yang berkekuatan hukum tetap yang membatalkannya"
      },
      {
        "key": "D",
        "text": "Gugatan Penggugat otomatis menghentikan pelaksanaan keputusan tata usaha negara yang disengketakan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Asas Praesumptio Iustae Causa menyatakan KTUN selalu dianggap sah menurut hukum hingga dinyatakan batal oleh pengadilan.",
      "legalBasis": "Pasal 67 ayat (1) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": "Konsekuensi asas ini tertuang dalam Pasal 67 ayat (1) UU PTUN: gugatan tidak menunda atau menghalangi dilaksanakannya Keputusan TUN serta tindakan Pejabat TUN yang bersangkutan, karena keputusan tersebut dipraduga sah menurut hukum sebelum dibatalkan oleh hakim."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 281,
    "category": "Hukum Acara PTUN",
    "topicTag": "Alasan Gugatan TUN",
    "question": "Berdasarkan Pasal 53 ayat (2) UU No. 9 Tahun 2004, alasan-alasan yang sah digunakan dalam mengajukan gugatan pembatalan Keputusan TUN adalah:",
    "options": [
      {
        "key": "A",
        "text": "Keputusan Pejabat TUN tidak menguntungkan finansial bagi Penggugat"
      },
      {
        "key": "B",
        "text": "Keputusan Pejabat TUN tidak disetujui oleh seluruh anggota keluarga Penggugat"
      },
      {
        "key": "C",
        "text": "Keputusan Pejabat TUN didasarkan atas musyawarah mufakat internal instansi"
      },
      {
        "key": "D",
        "text": "Keputusan TUN bertentangan dengan peraturan perundang-undangan yang berlaku dan/atau bertentangan dengan Asas-Asas Umum Pemerintahan yang Baik (AUPB)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Alasan gugatan TUN adalah KTUN bertentangan dengan peraturan perundang-undangan dan/atau AUPB.",
      "legalBasis": "Pasal 53 ayat (2) UU No. 9 Tahun 2004 tentang Perubahan atas UU No. 5 Tahun 1986.",
      "analysis": "Pasal 53 ayat (2) UU No. 9 Tahun 2004 menetapkan 2 alasan pembatalan KTUN: a. KTUN yang digugat bertentangan dengan peraturan perundang-undangan yang berlaku; b. KTUN yang digugat bertentangan dengan asas-asas umum pemerintahan yang baik (AUPB)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 282,
    "category": "Hukum Acara PTUN",
    "topicTag": "Definisi Keputusan TUN (Beschikking)",
    "question": "Berdasarkan Pasal 1 angka 9 UU No. 51 Tahun 2009, yang dimaksud dengan Keputusan Tata Usaha Negara (KTUN) adalah:",
    "options": [
      {
        "key": "A",
        "text": "Suatu penetapan tertulis yang dikeluarkan oleh badan atau pejabat tata usaha negara yang berisi tindakan hukum perdata"
      },
      {
        "key": "B",
        "text": "Suatu aturan lisan yang mengikat seluruh warga negara tanpa batas waktu"
      },
      {
        "key": "C",
        "text": "Peraturan perundang-undangan yang bersifat mengatur secara umum dan abstrak"
      },
      {
        "key": "D",
        "text": "Suatu penetapan tertulis yang dikeluarkan oleh Badan atau Pejabat Tata Usaha Negara yang berisi tindakan hukum Tata Usaha Negara yang berdasarkan peraturan perundang-undangan yang berlaku, yang bersifat konkret, individual, dan final, serta menimbulkan akibat hukum bagi seseorang atau badan hukum perdata"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "KTUN adalah penetapan tertulis oleh Badan/Pejabat TUN, konkret, individual, final, serta menimbulkan akibat hukum.",
      "legalBasis": "Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang Perubahan Kedua atas UU No. 5 Tahun 1986.",
      "analysis": "Unsur-unsur yuridis KTUN: 1. Penetapan tertulis; 2. Dikeluarkan oleh Badan/Pejabat TUN; 3. Berisi tindakan hukum TUN; 4. Berdasarkan peraturan perundang-undangan; 5. Bersifat konkret (nyata, tidak abstrak); 6. Bersifat individual (jelas alamat tujuannya); 7. Bersifat final (definitif menimbulkan hak/kewajiban); 8. Menimbulkan akibat hukum perdata."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 283,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Pemanggilan Pihak Gaib (KHI)",
    "question": "Apabila pihak Tergugat/Termohon tidak diketahui tempat tinggalnya atau tidak jelas, atau tidak mempunyai tempat kediaman yang tetap (gaib), maka dalam perkara perceraian panggilan dilakukan dengan cara:",
    "options": [
      {
        "key": "A",
        "text": "Melalui Bupati atau Walikota tempat tinggal Penggugat"
      },
      {
        "key": "B",
        "text": "Melalui Kepala Desa tempat tinggal Tergugat dahulu"
      },
      {
        "key": "C",
        "text": "Menempelkan panggilan pada papan pengumuman Pengadilan Agama dan mengumumkannya melalui satu atau beberapa surat kabar atau media massa lain"
      },
      {
        "key": "D",
        "text": "Menunggu sampai Tergugat ditemukan oleh aparat penegak hukum"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Panggilan kepada Tergugat/Termohon yang tidak diketahui tempat kediamannya dilakukan melalui papan pengumuman Pengadilan Agama dan surat kabar/media massa.",
      "legalBasis": "Pasal 27 Peraturan Pemerintah No. 9 Tahun 1975 jo. Pasal 138 Kompilasi Hukum Islam (KHI).",
      "analysis": "Menurut Pasal 27 PP No. 9/1975 dan Pasal 138 KHI, apabila tergugat tidak diketahui tempat kediamannya, panggilan disampaikan dengan menempelkan gugatan pada papan pengumuman di Pengadilan Agama dan membacakannya/mengumumkannya melalui satu atau beberapa surat kabar atau media massa yang ditetapkan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 284,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Putusnya Perkawinan (KHI)",
    "question": "Berdasarkan Pasal 38 UU No. 1 Tahun 1974 jo. Pasal 113 Kompilasi Hukum Islam (KHI), suatu perkawinan dapat putus disebabkan karena:",
    "options": [
      {
        "key": "A",
        "text": "Kematian saja"
      },
      {
        "key": "B",
        "text": "Perceraian saja"
      },
      {
        "key": "C",
        "text": "Atas Putusan Pengadilan saja"
      },
      {
        "key": "D",
        "text": "Kematian, perceraian, dan atas putusan Pengadilan"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Perkawinan putus karena kematian, perceraian, dan atas putusan Pengadilan.",
      "legalBasis": "Pasal 38 UU No. 1 Tahun 1974 tentang Perkawinan jo. Pasal 113 Kompilasi Hukum Islam (KHI).",
      "analysis": "Pasal 113 KHI menegaskan: 'Perkawinan dapat putus karena: a. kematian; b. perceraian; dan c. atas putusan Pengadilan.' Ketiga hal tersebut merupakan sebab-sebab sah berakhirnya ikatan perkawinan menurut hukum Islam di Indonesia."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 285,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Dasar Hukum Peradilan Agama",
    "question": "Susunan, kekuasaan, dan hukum acara Peradilan Agama di Indonesia diatur dalam peraturan perundang-undangan:",
    "options": [
      {
        "key": "A",
        "text": "UU No. 7 Tahun 1989 jo. UU No. 8 Tahun 2006"
      },
      {
        "key": "B",
        "text": "UU No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009"
      },
      {
        "key": "C",
        "text": "UU No. 2 Tahun 1989 jo. UU No. 3 Tahun 2006"
      },
      {
        "key": "D",
        "text": "UU No. 5 Tahun 1986 jo. UU No. 5 Tahun 2004"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Peradilan Agama diatur dalam UU No. 7 Tahun 1989 yang telah diubah dengan UU No. 3 Tahun 2006 dan UU No. 50 Tahun 2009.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 2 Undang-Undang No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.",
      "analysis": "Undang-Undang Nomor 7 Tahun 1989 merupakan undang-undang pokok peradilan agama yang kemudian mengalami dua kali perubahan, yaitu Perubahan Pertama melalui UU No. 3 Tahun 2006 dan Perubahan Kedua melalui UU No. 50 Tahun 2009."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 286,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Kewenangan Absolut Peradilan Agama",
    "question": "Di bawah ini adalah bidang-bidang sengketa antara orang-orang yang beragama Islam yang menjadi kewenangan absolut Pengadilan Agama, KECUALI:",
    "options": [
      {
        "key": "A",
        "text": "Perkawinan dan Perceraian"
      },
      {
        "key": "B",
        "text": "Kewarisan, Wasiat, dan Hibah"
      },
      {
        "key": "C",
        "text": "Wakaf, Zakat, Infaq, dan Shadaqah"
      },
      {
        "key": "D",
        "text": "Tindak Pidana Penodaan Agama dan Pengelolaan Baitul Maal"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Tindak pidana bukan kewenangan Pengadilan Agama melainkan kewenangan Peradilan Umum.",
      "legalBasis": "Pasal 49 UU No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009.",
      "analysis": "Berdasarkan Pasal 49 UU No. 3 Tahun 2006, Pengadilan Agama bertugas dan berwenang memeriksa perkara perdata tertentu bagi pemeluk agama Islam di bidang perkawinan, waris, wasiat, hibah, wakaf, zakat, infaq, shadaqah, dan ekonomi syari'ah. Peradilan Agama tidak memiliki kewenangan mengadili tindak pidana."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 287,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Tenggang Waktu Ikrar Talak",
    "question": "Dalam permohonan cerai talak yang telah berkekuatan hukum tetap (inkracht) dan telah ditetapkan sidang penyaksian ikrar talak, maka tenggang waktu yang diberikan kepada Pemohon (suami) untuk mengikrarkan talaknya sebelum izin ikrar gugur adalah:",
    "options": [
      {
        "key": "A",
        "text": "3 (tiga) bulan terhitung sejak penetapan hari sidang ikrar talak"
      },
      {
        "key": "B",
        "text": "1 (satu) bulan terhitung sejak putusan inkracht"
      },
      {
        "key": "C",
        "text": "6 (enam) bulan terhitung sejak hari sidang penyaksian ikrar talak ditetapkan"
      },
      {
        "key": "D",
        "text": "12 (dua belas) bulan sejak putusan permohonan berkekuatan hukum tetap"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Batas waktu pengucapan ikrar talak adalah 6 bulan sejak hari sidang penyaksian ikrar talak ditetapkan.",
      "legalBasis": "Pasal 70 ayat (6) UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 131 ayat (4) KHI.",
      "analysis": "Pasal 70 ayat (6) UU No. 7 Tahun 1989 menentukan bahwa jika suami tidak mengucapkan ikrar talak dalam tempo 6 (enam) bulan terhitung sejak hari sidang penyaksian ikrar talak ditetapkan, maka hak suami untuk mengikrarkan talak gugur dan ikatan perkawinan tetap utuh."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 288,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Akibat Hukum Perceraian",
    "question": "Dalam perkara Cerai Talak di Pengadilan Agama, suatu perceraian dianggap telah resmi terjadi beserta segala akibat-akibat hukumnya terhitung sejak:",
    "options": [
      {
        "key": "A",
        "text": "Saat permohonan talak didaftarkan oleh suami di Kepaniteraan Pengadilan Agama"
      },
      {
        "key": "B",
        "text": "Saat ikrar talak diucapkan oleh suami di depan sidang terbuka Pengadilan Agama"
      },
      {
        "key": "C",
        "text": "Saat penetapan izin mengikrarkan talak dibacakan oleh majelis hakim"
      },
      {
        "key": "D",
        "text": "Saat buku/akta nikah ditarik oleh Pegawai Pencatat Nikah (KUA)"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Perceraian talak terjadi terhitung sejak saat suami mengucapkan ikrar talak di depan sidang Pengadilan Agama.",
      "legalBasis": "Pasal 34 ayat (2) PP No. 9 Tahun 1975 jo. Pasal 66 jo. Pasal 70 UU No. 7 Tahun 1989 jo. Pasal 129-131 KHI.",
      "analysis": "Dalam Cerai Talak, ikatan perkawinan belum putus hanya dengan adanya penetapan izin talak; perkawinan baru resmi putus secara hukum terhitung sejak suami mengikrarkan talaknya di depan sidang terbuka Pengadilan Agama."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 289,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Masa Iddah Karena Kematian (KHI)",
    "question": "Waktu tunggu (masa iddah) bagi seorang janda apabila perkawinan putus karena suaminya meninggal dunia ditetapkan selama:",
    "options": [
      {
        "key": "A",
        "text": "120 (seratus dua puluh) hari"
      },
      {
        "key": "B",
        "text": "125 (seratus dua puluh lima) hari"
      },
      {
        "key": "C",
        "text": "130 (seratus tiga puluh) hari (4 bulan 10 hari)"
      },
      {
        "key": "D",
        "text": "135 (seratus tiga puluh lima) hari"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Masa tunggu janda karena kematian suami adalah 130 hari atau 4 bulan 10 hari.",
      "legalBasis": "Pasal 39 ayat (1) huruf a PP No. 9 Tahun 1975 jo. Pasal 153 ayat (2) huruf a Kompilasi Hukum Islam (KHI).",
      "analysis": "Menurut Pasal 153 ayat (2) huruf a KHI: 'Apabila perkawinan putus karena kematian, walaupun qobla al dukhul, waktu tunggu ditetapkan 130 (seratus tiga puluh) hari.' Waktu ini berkesesuaian dengan ketentuan surah Al-Baqarah ayat 234 yaitu 4 bulan 10 hari."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 290,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Biaya Perkara Perkawinan",
    "question": "Berdasarkan Pasal 89 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama, biaya perkara dalam bidang perkawinan dibebankan kepada:",
    "options": [
      {
        "key": "A",
        "text": "Pihak Penggugat atau Pemohon"
      },
      {
        "key": "B",
        "text": "Pihak yang kalah dalam persidangan"
      },
      {
        "key": "C",
        "text": "Pihak Tergugat atau Termohon secara mutlak"
      },
      {
        "key": "D",
        "text": "Kas Negara melalui DIPA Pengadilan Agama"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Biaya perkara dalam bidang perkawinan dibebankan kepada Penggugat atau Pemohon.",
      "legalBasis": "Pasal 89 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      "analysis": "Berbeda dengan perkara perdata umum di mana biaya perkara umumnya dibebankan kepada pihak yang kalah, dalam perkara perkawinan di Pengadilan Agama berlaku lex specialis berdasarkan Pasal 89 ayat (1) UU No. 7 Tahun 1989, yaitu biaya perkara dibebankan kepada Penggugat atau Pemohon."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 291,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Klasifikasi Talak (KHI)",
    "question": "Dalam Hukum Perkawinan Islam sebagaimana diatur dalam Kompilasi Hukum Islam (KHI), yang dimaksud dengan Talak Ba'in Kubraa adalah:",
    "options": [
      {
        "key": "A",
        "text": "Talak kesatu yang dijatuhkan oleh suami dan masih dapat dirujuk tanpa akad nikah baru"
      },
      {
        "key": "B",
        "text": "Talak yang dijatuhkan dengan tebusan (iwadl) dari istri kepada suami"
      },
      {
        "key": "C",
        "text": "Talak yang terjadi untuk ketiga kalinya, di mana mantan suami dan istri tidak dapat rujuk atau menikah kembali kecuali setelah mantan istri menikah dengan pria lain lalu bercerai dan habis masa iddahnya"
      },
      {
        "key": "D",
        "text": "Talak yang dijatuhkan ketika istri sedang dalam keadaan suci dan belum dicampuri"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Talak Ba'in Kubraa adalah talak ketiga yang menghalangi rujuk/nikah kembali kecuali setelah adanya muhallil.",
      "legalBasis": "Pasal 120 Kompilasi Hukum Islam (KHI).",
      "analysis": "Pasal 120 KHI menyatakan: 'Talak ba'in kubraa adalah talak yang terjadi untuk ketiga kalinya. Talak jenis ini tidak dapat dirujuk dan tidak dapat dinikahkan kembali, kecuali bila pernikahan itu dilakukan setelah bekas isteri, menikah dengan orang lain dan kemudian terjadi perceraian ba'da al dukhul dan habis masa iddahnya.'"
    },
    "difficulty": "Sedang"
  },
  {
    "id": 292,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Taklik Talak (KHI)",
    "question": "Perjanjian yang diucapkan calon mempelai pria setelah akad nikah yang dicantumkan dalam Akta Nikah berupa janji talak yang digantungkan kepada suatu keadaan tertentu yang mungkin terjadi di masa yang akan datang disebut:",
    "options": [
      {
        "key": "A",
        "text": "Khuluk"
      },
      {
        "key": "B",
        "text": "Talak Ba'in Shughra"
      },
      {
        "key": "C",
        "text": "Taklik talak"
      },
      {
        "key": "D",
        "text": "Mut'ah"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Perjanjian janji talak bersyarat setelah akad nikah yang dicantumkan dalam Akta Nikah adalah Taklik-talak.",
      "legalBasis": "Pasal 1 huruf e jo. Pasal 45 Kompilasi Hukum Islam (KHI).",
      "analysis": "Berdasarkan Pasal 1 huruf e KHI: 'Taklik-talak ialah perjanjian yang diucapkan calon mempelai pria setelah akad nikah yang dicantumkan dalam Akta Nikah berupa janji talak yang digantungkan kepada suatu keadaan tertentu yang mungkin terjadi dimasa yang akan datang.' Khuluk adalah perceraian atas tebusan istri, sedangkan mut'ah adalah pemberian hiburan dari mantan suami."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 293,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Itsbat Nikah (KHI)",
    "question": "Dalam hal perkawinan telah sah menurut rukun dan syarat hukum Islam namun tidak dapat dibuktikan dengan Akta Nikah, maka pihak yang berkepentingan dapat mengajukan permohonan ke Pengadilan Agama yaitu perkara:",
    "options": [
      {
        "key": "A",
        "text": "Cerai Talak"
      },
      {
        "key": "B",
        "text": "Cerai Gugat"
      },
      {
        "key": "C",
        "text": "Itsbat Nikah (Pengesahan Nikah)"
      },
      {
        "key": "D",
        "text": "Permohonan Rujuk"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Perkawinan yang tidak tercatat dalam akta nikah dapat diajukan itsbat nikah ke Pengadilan Agama.",
      "legalBasis": "Pasal 7 ayat (2) Kompilasi Hukum Islam (KHI).",
      "analysis": "Pasal 7 ayat (2) KHI menetapkan: 'Dalam hal perkawinan tidak dapat dibuktikan dengan Akta Nikah, dapat diajukan itsbat nikahnya ke Pengadilan Agama.' Tujuannya untuk memberikan kepastian hukum dan perlindungan hak-hak keperdataan suami, istri, maupun anak-anak mereka."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 294,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Alasan Pengajuan Itsbat Nikah",
    "question": "Itsbat nikah yang dapat diajukan ke Pengadilan Agama terbatas mengenai hal-hal yang berkenaan dengan:",
    "options": [
      {
        "key": "A",
        "text": "Adanya perkawinan dalam rangka penyelesaian perceraian"
      },
      {
        "key": "B",
        "text": "Hilangnya Akta Nikah"
      },
      {
        "key": "C",
        "text": "Adanya keraguan tentang sah atau tidaknya salah satu syarat perkawinan"
      },
      {
        "key": "D",
        "text": "Semua pernyataan (A, B, dan C) adalah benar menurut Pasal 7 ayat (3) KHI"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Itsbat nikah terbatas pada perkawinan penyelesaian cerai, hilangnya akta nikah, adanya keraguan syarat nikah, atau perkawinan pra-UU No. 1/1974.",
      "legalBasis": "Pasal 7 ayat (3) Kompilasi Hukum Islam (KHI).",
      "analysis": "Pasal 7 ayat (3) KHI mengatur alasan limitatif diajukannya itsbat nikah: a. adanya perkawinan dalam rangka penyelesaian perceraian; b. hilangnya Akta Nikah; c. adanya keraguan tentang sah atau tidaknya salah satu syarat perkawinan; d. adanya perkawinan yang terjadi sebelum berlakunya UU No. 1/1974; dan e. perkawinan yang dilakukan oleh mereka yang tidak mempunyai halangan perkawinan menurut UU No. 1/1974."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 295,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Prinsip Perceraian di Muka Sidang",
    "question": "Jika upaya perdamaian dan mediasi terhadap pasangan suami isteri tidak tercapai, maka menurut hukum positif Indonesia perceraian hanya dapat sah dilakukan di:",
    "options": [
      {
        "key": "A",
        "text": "Di Kantor Urusan Agama (KUA) setempat"
      },
      {
        "key": "B",
        "text": "Di depan Penghulu atau pemuka agama"
      },
      {
        "key": "C",
        "text": "Di depan sidang Pengadilan Agama setelah pengadilan berusaha dan tidak berhasil mendamaikan kedua belah pihak"
      },
      {
        "key": "D",
        "text": "Di rumah kediaman bersama di depan kedua orang tua para pihak"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Perceraian hanya dapat dilakukan di depan sidang Pengadilan Agama.",
      "legalBasis": "Pasal 39 ayat (1) UU No. 1 Tahun 1974 jo. Pasal 65 UU No. 7 Tahun 1989 jo. Pasal 115 KHI.",
      "analysis": "Pasal 39 ayat (1) UU Perkawinan dan Pasal 115 KHI menegaskan asas penting perceraian di Indonesia: 'Perceraian hanya dapat dilakukan di depan sidang Pengadilan setelah Pengadilan yang bersangkutan berusaha dan tidak berhasil mendamaikan kedua belah pihak.' Talak atau ikrar cerai di luar sidang tidak berkekuatan hukum perdata formal."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 296,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Alasan Perceraian (PP 9/1975 & KHI)",
    "question": "Di bawah ini yang BUKAN merupakan alasan perceraian yang sah menurut Pasal 19 PP No. 9 Tahun 1975 jo. Pasal 116 Kompilasi Hukum Islam (KHI) adalah:",
    "options": [
      {
        "key": "A",
        "text": "Salah satu pihak berbuat zina, menjadi pemabuk, pemadat, penjudi yang sukar disembuhkan"
      },
      {
        "key": "B",
        "text": "Salah satu pihak meninggalkan pihak lain selama 2 (dua) tahun berturut-turut tanpa izin pihak lain dan tanpa alasan yang sah"
      },
      {
        "key": "C",
        "text": "Salah satu pihak melakukan kekejaman atau penganiayaan berat yang membahayakan pihak lain"
      },
      {
        "key": "D",
        "text": "Salah satu pihak tidak mempunyai pekerjaan tetap atau penghasilannya lebih kecil dari pasangannya"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Tidak mempunyai pekerjaan tetap bukan merupakan alasan yuridis perceraian yang diatur dalam undang-undang.",
      "legalBasis": "Pasal 19 Peraturan Pemerintah No. 9 Tahun 1975 jo. Pasal 116 Kompilasi Hukum Islam (KHI).",
      "analysis": "Alasan perceraian bersifat limitatif menurut Pasal 19 PP 9/1975 jo. Pasal 116 KHI, yaitu zina/mabuk/judi, meninggalkan 2 tahun berturut-turut, dihukum penjara 5 tahun, KDRT/penganiayaan berat, cacat badan/penyakit yang menghalangi kewajiban suami-istri, perselisihan terus-menerus (syiqaq), dan peralihan agama (murtad) yang menimbulkan ketidakharmonisan. 'Tidak mempunyai pekerjaan tetap' tidak tercantum sebagai alasan yuridis perceraian."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 297,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Putusnya Perkawinan Selama-lamanya (Li'an)",
    "question": "Berdasarkan Pasal 125 jo. Pasal 162 Kompilasi Hukum Islam (KHI), peristiwa hukum yang menyebabkan putusnya perkawinan antara suami isteri untuk selama-lamanya (tidak dapat rujuk atau menikah kembali selama-lamanya) disebut:",
    "options": [
      {
        "key": "A",
        "text": "Li'an"
      },
      {
        "key": "B",
        "text": "Khuluk"
      },
      {
        "key": "C",
        "text": "Talak Ba'in Kubraa"
      },
      {
        "key": "D",
        "text": "Talak Sunnah"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Li'an menyebabkan putusnya perkawinan antara suami dan isteri untuk selama-lamanya (hurmatul mu'abbad).",
      "legalBasis": "Pasal 125 dan Pasal 162 Kompilasi Hukum Islam (KHI) (Inpres No. 1 Tahun 1991).",
      "analysis": "Pasal 125 KHI menyatakan secara tegas: 'Li'an menyebabkan putusnya perkawinan antara suami isteri untuk selama-lamanya.' Didukung Pasal 162 KHI: 'Akibat yang timbul karena li'an ialah: perkawinan putus untuk selama-lamanya dan anak yang dikandung dinasabkan kepada ibunya.' Sedangkan pada Talak Ba'in Kubra (Pasal 120 KHI), mantan suami-istri masih dimungkinkan menikah kembali bila mantan istri telah menikah dengan pria lain lalu bercerai ba'da al-dukhul dan habis iddahnya."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 298,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Kepala Putusan Peradilan Agama",
    "question": "Berdasarkan Pasal 57 ayat (1) dan ayat (2) UU No. 7 Tahun 1989 tentang Peradilan Agama, setiap penetapan dan putusan Pengadilan Agama wajib dimulai dengan kalimat:",
    "options": [
      {
        "key": "A",
        "text": "Demi Keadilan Berdasarkan Ketuhanan Yang Maha Esa saja"
      },
      {
        "key": "B",
        "text": "BISMILLAHIRRAHMANIRRAHIM diikuti dengan DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA"
      },
      {
        "key": "C",
        "text": "Dengan Rahmat Tuhan Yang Maha Esa, Demi Keadilan Berdasarkan Ketuhanan Yang Maha Esa"
      },
      {
        "key": "D",
        "text": "Atas Nama Keadilan Hukum Islam Republik Indonesia"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Tiap penetapan dan putusan Pengadilan Agama dimulai dengan kalimat BISMILLAHIRRAHMANIRRAHIM diikuti DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA.",
      "legalBasis": "Pasal 57 ayat (1) dan (2) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      "analysis": "Pasal 57 UU No. 7 Tahun 1989 mengatur: '(1) Peradilan dilakukan DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA. (2) Tiap penetapan dan putusan dimulai dengan kalimat BISMILLAHIRRAHMANIRRAHIM diikuti dengan DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA.' Ini merupakan ciri khusus kepala (irah-irah) putusan peradilan agama di Indonesia."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 299,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Perselisihan Hubungan Industrial",
    "question": "Undang-undang Nomor 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial merupakan hukum formil dari Undang-undang :",
    "options": [
      {
        "key": "A",
        "text": "UU No. 12 Tahun 1964 tentang Pemutusan Hubungan Kerja di Perusahaan Swasta"
      },
      {
        "key": "B",
        "text": "UU No. 22 Tahun 1957 tentang Penyelesaian Perselisihan Perburuhan"
      },
      {
        "key": "C",
        "text": "UU No. 13 Tahun 2003 tentang Ketenagakerjaan"
      },
      {
        "key": "D",
        "text": "UU No. 14 Tahun 1969 tentang Ketentuan-ketentuan Pokok mengenai Tenaga Kerja"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "UU No. 13 Tahun 2003 tentang Ketenagakerjaan",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 125 ayat (1) dan ayat (2) Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "analysis": "Berdasarkan ketentuan hukum acara peradilan Indonesia dalam ranah Hukum Acara PHI, jawaban yang sesuai dengan standar penilaian Ujian Profesi Advokat PERADI adalah pilihan C."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 300,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Perselisihan Hubungan Industrial",
    "question": "Sebelum pengadilan hubungan industrial terbentuk, instansi manakah yang berwenang menangani penyelesaian perselisihan hubungan industrial :",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Negeri"
      },
      {
        "key": "B",
        "text": "Pengadilan Tata Usaha Negara"
      },
      {
        "key": "C",
        "text": "Arbitrase"
      },
      {
        "key": "D",
        "text": "P4D/P4P"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "P4D/P4P",
      "legalBasis": "Pasal 124 Undang-Undang No. 2 Tahun 2004 tentang PPHI jo. Undang-Undang No. 22 Tahun 1957.",
      "analysis": "Berdasarkan ketentuan hukum acara peradilan Indonesia dalam ranah Hukum Acara PHI, jawaban yang sesuai dengan standar penilaian Ujian Profesi Advokat PERADI adalah pilihan D."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 301,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Perselisihan Hubungan Industrial",
    "question": "Perselisihan yang timbul karena tidak dipenuhinya hak akibat adanya perbedaan pelaksanaan atau peraturan terhadap ketentuan perundang-undangan, Perjanjian kerja, Peraturan perusahaan atau Perjanjian kerja sama disebut perselisihan :",
    "options": [
      {
        "key": "A",
        "text": "Kepentingan"
      },
      {
        "key": "B",
        "text": "Hak"
      },
      {
        "key": "C",
        "text": "PHK"
      },
      {
        "key": "D",
        "text": "Antar Serikat Pekerja atau Serikat Buruh"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Perselisihan yang timbul karena tidak dipenuhinya hak disebut perselisihan hak.",
      "legalBasis": "Pasal 1 angka 2 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "analysis": 'Pasal 1 angka 2 UU 2/2004: "Perselisihan hak adalah perselisihan yang timbul karena tidak dipenuhinya hak, akibat adanya perbedaan pelaksanaan atau penafsiran terhadap ketentuan peraturan perundang-undangan, perjanjian kerja, peraturan perusahaan, atau perjanjian kerja bersama."'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 302,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Perselisihan Hubungan Industrial",
    "question": "Sebelum berlakunya Undang-undang Nomor 2 Tahun 2004 Perkara yang menyangkut perselisihan Perburuhan di Perusahaan Swasta diperiksa berdasarkan Undang-undang :",
    "options": [
      {
        "key": "A",
        "text": "UU No. 12 Tahun 1964 tentang Pemutusan Hubungan Kerja di Perusahaan Swasta"
      },
      {
        "key": "B",
        "text": "UU No. 22 Tahun 1957 tentang Penyelesaian Perselisihan Perburuhan 21"
      },
      {
        "key": "C",
        "text": "UU No. 13 Tahun 2003 tentang Ketenagakerjaan"
      },
      {
        "key": "D",
        "text": "UU No. 14 Tahun 1969 tentang Ketentuan-ketentuan Pokok mengenai Tenaga Kerja"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Sebelum berlakunya UU No. 2 Tahun 2004, perselisihan perburuhan diatur dalam UU No. 22 Tahun 1957.",
      "legalBasis": "Pasal 125 ayat (1) huruf a UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "analysis": "Sebelum diundangkannya UU 2/2004, penyelesaian sengketa buruh diselesaikan oleh P4D/P4P berdasarkan UU No. 22 Tahun 1957 tentang Penyelesaian Perselisihan Perburuhan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 303,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Perselisihan Hubungan Industrial",
    "question": "Setelah pengadilan hubungan industrial telah terbentuk, terhadap perselisihan hubungan industrial atau PHK yang diselesaikan P4P atau lembaga lain yang setingkat dan belum diputus, maka yang berwenang menyelesaikan adalah Pengadilan :",
    "options": [
      {
        "key": "A",
        "text": "P4P"
      },
      {
        "key": "B",
        "text": "Pengadilan Tata Usaha Negara"
      },
      {
        "key": "C",
        "text": "Pengadilan Hubungan Industrial"
      },
      {
        "key": "D",
        "text": "Mahkamah Agung"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pengadilan Hubungan Industrial",
      "legalBasis": "Pasal 55 jo. Pasal 56 Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI).",
      "analysis": "Berdasarkan ketentuan hukum acara peradilan Indonesia dalam ranah Hukum Acara PHI, jawaban yang sesuai dengan standar penilaian Ujian Profesi Advokat PERADI adalah pilihan C."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 304,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Perselisihan Hubungan Industrial",
    "question": "Perselisihan yang timbul karena tidak adanya kesesuaian pendapat mengenai pengakhiran hubungan kerja yang dilakukan oleh salah satu pihak disebut perselisihan :",
    "options": [
      {
        "key": "A",
        "text": "Kepentingan"
      },
      {
        "key": "B",
        "text": "PHK"
      },
      {
        "key": "C",
        "text": "Hak"
      },
      {
        "key": "D",
        "text": "Antar Serikat Pekerja atau Serikat Buruh"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Perselisihan mengenai pengakhiran hubungan kerja adalah perselisihan pemutusan hubungan kerja (PHK).",
      "legalBasis": "Pasal 1 angka 4 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "analysis": "Pasal 1 angka 4 UU 2/2004 menegaskan perselisihan PHK adalah perselisihan yang timbul karena tidak adanya kesesuaian pendapat mengenai pengakhiran hubungan kerja yang dilakukan oleh salah satu pihak."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 305,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Perselisihan Hubungan Industrial",
    "question": "Pengadilan Hubungan Industrial sebagai Hukum Formil, saat ini diatur dalam Undang- undang :",
    "options": [
      {
        "key": "A",
        "text": "UU No. 13 Tahun 2003"
      },
      {
        "key": "B",
        "text": "UU No. 18 Tahun 2003"
      },
      {
        "key": "C",
        "text": "UU No. 2 Tahun 2004"
      },
      {
        "key": "D",
        "text": "UU No. 32 Tahun 2004"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Hukum formil Pengadilan Hubungan Industrial saat ini diatur dalam UU No. 2 Tahun 2004.",
      "legalBasis": "Pasal 57 jo. Pasal 1 angka 17 Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI).",
      "analysis": "UU No. 2 Tahun 2004 merupakan hukum formil khusus (lex specialis) yang mengatur prosedur beracara dan pembentukan Pengadilan Hubungan Industrial."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 306,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Perselisihan Hubungan Industrial",
    "question": "Apa istilahnya perundingan antara pekerja/buruh atau Serikat Pekerja/Serikat Buruh dengan Pengusaha untuk menyelesaikan perselisihan hubungan industrial :",
    "options": [
      {
        "key": "A",
        "text": "Bipartit"
      },
      {
        "key": "B",
        "text": "Musyawarah mufakat"
      },
      {
        "key": "C",
        "text": "Tripartit"
      },
      {
        "key": "D",
        "text": "Musyawarah"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Perundingan langsung antara pekerja/buruh dengan pengusaha disebut perundingan bipartit.",
      "legalBasis": "Pasal 1 angka 10 jo. Pasal 3 UU No. 2 Tahun 2004.",
      "analysis": "Bipartit adalah perundingan antara pekerja/buruh atau serikat pekerja dengan pengusaha untuk menyelesaikan perselisihan hubungan industrial dalam satu perusahaan sebelum melibatkan pihak ketiga."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 307,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Perselisihan Hubungan Industrial",
    "question": "Berapa lama waktu yang diperlukan untuk berunding sebagai pengusaha dan pekerja dalam menyelesaikan perselisihan hubungan industrial :",
    "options": [
      {
        "key": "A",
        "text": "10 hari"
      },
      {
        "key": "B",
        "text": "20 hari"
      },
      {
        "key": "C",
        "text": "30 hari"
      },
      {
        "key": "D",
        "text": "60 hari"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Jangka waktu perundingan bipartit paling lama 30 hari kerja.",
      "legalBasis": "Pasal 3 ayat (2) UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 3 ayat (2) UU 2/2004 menentukan bahwa perundingan bipartit harus diselesaikan paling lama 30 (tiga puluh) hari kerja sejak tanggal dimulainya perundingan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 308,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Perselisihan Hubungan Industrial",
    "question": "Penyelesaian perselisihan kepentingan, perselisihan PHK atau perselisihan antar serikat pekerja/serikat buruh, hanya dalam satu perusahaan melalui musyawarah disebut :",
    "options": [
      {
        "key": "A",
        "text": "Konsiliasi"
      },
      {
        "key": "B",
        "text": "Mediasi"
      },
      {
        "key": "C",
        "text": "Arbitrase"
      },
      {
        "key": "D",
        "text": "Advokasi"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penyelesaian melalui musyawarah dengan penengah netral pegawai instansi ketenagakerjaan adalah mediasi.",
      "legalBasis": "Pasal 1 angka 11 UU No. 2 Tahun 2004.",
      "analysis": "Mediasi Hubungan Industrial adalah penyelesaian perselisihan hak, kepentingan, PHK, dan antar SP melalui musyawarah yang ditengahi oleh seorang atau lebih mediator yang netral dari instansi ketenagakerjaan."
    },
    "difficulty": "Mudah"
  }
];

// src/data/toazPeradiBank.ts
var TOAZ_PERADI_BANK = [
  {
    "id": 309,
    "category": "Hukum Acara Pidana",
    "topicTag": "Pengertian Laporan (KUHAP)",
    "question": "Menurut KUHAP, yang dimaksud dengan Laporan adalah:",
    "options": [
      {
        "key": "A",
        "text": "Pemberitahuan yang disampaikan oleh seorang karena hak dan kewajiban berdasarkan undang \u2013 undang kepada pejabat yang berwenang tentang telah atau sedang atau diduga akan terjadinya peristiwa pidana."
      },
      {
        "key": "B",
        "text": "Pemberitahuan dan permintaan oleh pihak yang berkepentingan kepada polisi tentang telah atau sedang atau diduga telah terjadi peristiwa pidana"
      },
      {
        "key": "C",
        "text": "Pemberitahuan disertai permintaan oleh pihak yang berkepentingan kepada pejabat yang berwenang untuk menindak menurut hukum seseorang yang telah melakukan tindak pidana aduan yang merugikannya."
      },
      {
        "key": "D",
        "text": "Tertangkapnya seseorang beberapa saat sesudah ia melakukan kejahatan."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Laporan adalah pemberitahuan karena hak/kewajiban UU kepada pejabat berwenang tentang peristiwa pidana.",
      "legalBasis": "Pasal 1 angka 24 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 1 angka 24 KUHAP merumuskan: "Laporan adalah pemberitahuan yang disampaikan oleh seorang karena hak atau kewajiban berdasarkan undang-undang kepada pejabat yang berwenang tentang telah atau sedang atau diduga akan terjadinya peristiwa pidana." Sedangkan opsi C merupakan definisi Pengaduan (Pasal 1 angka 25 KUHAP).'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 310,
    "category": "Hukum Acara Pidana",
    "topicTag": "Jenis Pidana Pokok & Tambahan (KUHP)",
    "question": "Pasal 10 KUHP mengatur tentang jenis \u2013 jenis hukuman, yaitu hukuman pokok dan hukuman tambahan. Berikut ini adalah termasuk hukuman tambahan, KECUALI:",
    "options": [
      {
        "key": "A",
        "text": "Pencabutan hak \u2013 hak tertentu"
      },
      {
        "key": "B",
        "text": "Perampasan barang \u2013 barang tertentu"
      },
      {
        "key": "C",
        "text": "Pengumuman putusan hakim"
      },
      {
        "key": "D",
        "text": "Pidana denda"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pidana denda adalah pidana pokok, bukan pidana tambahan.",
      "legalBasis": "Pasal 10 Kitab Undang-Undang Hukum Pidana (KUHP).",
      "analysis": "Berdasarkan Pasal 10 KUHP, pidana terdiri atas: 1. Pidana Pokok: pidana mati, pidana penjara, pidana kurungan, pidana denda, dan pidana tutupan. 2. Pidana Tambahan: pencabutan hak-hak tertentu, perampasan barang-barang tertentu, dan pengumuman putusan hakim. Jadi yang BUKAN pidana tambahan adalah pidana denda."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 311,
    "category": "Hukum Acara Pidana",
    "topicTag": "Dasar Hukum KUHAP",
    "question": "Undang \u2013 undang yang mengatur tentang Hukum Acara Pidana di Indonesia adalah:",
    "options": [
      {
        "key": "A",
        "text": "UU No. 18 Tahun 1981"
      },
      {
        "key": "B",
        "text": "UU No. 15 Tahun 1991"
      },
      {
        "key": "C",
        "text": "UU No. 8 Tahun 1981"
      },
      {
        "key": "D",
        "text": "UU No. 5 Tahun 1985"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Hukum Acara Pidana diatur dalam UU No. 8 Tahun 1981 (KUHAP).",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 284 ayat (1) dan Pasal 285 Undang-Undang No. 8 Tahun 1981 tentang KUHAP.",
      "analysis": "Kitab Undang-Undang Hukum Acara Pidana (KUHAP) diundangkan sebagai UU No. 8 Tahun 1981 dalam Lembaran Negara Republik Indonesia Tahun 1981 Nomor 76."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 312,
    "category": "Hukum Acara Pidana",
    "topicTag": "Penyerahan Berkas Perkara Penyidikan",
    "question": "Penyidik telah selesai menyidik suatu perkara, selanjutnya berkas perkara diserahkan kepada:",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Negeri"
      },
      {
        "key": "B",
        "text": "Tersangka"
      },
      {
        "key": "C",
        "text": "Kejaksaan / Penuntut Umum"
      },
      {
        "key": "D",
        "text": "Menunggu keputusan pengadilan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Berkas perkara yang selesai disidik diserahkan kepada Penuntut Umum (Tahap I).",
      "legalBasis": "Pasal 8 ayat (2) jo. Pasal 110 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": "Pasal 110 ayat (1) KUHAP menentukan bahwa dalam hal penyidik telah selesai melakukan penyidikan, penyidik wajib segera menyerahkan berkas perkara itu kepada penuntut umum guna diteliti kelengkapannya."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 313,
    "category": "Hukum Acara Pidana",
    "topicTag": "Peran Penasihat Hukum pada Tahap Penyidikan",
    "question": "Peran Penasihat Hukum dalam KUHAP dalam mendampingi tersangka pada pemeriksaan penyidik adalah:",
    "options": [
      {
        "key": "A",
        "text": "Ikut menentukan jalannya pemeriksaan"
      },
      {
        "key": "B",
        "text": "Bekerjasama dengan penyidik"
      },
      {
        "key": "C",
        "text": "Melihat dan mendengar jalannya pemeriksaan"
      },
      {
        "key": "D",
        "text": "Memberikan jawaban langsung kepada penyidik"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penasihat hukum mengikuti pemeriksaan penyidikan dengan melihat dan mendengar jalannya pemeriksaan secara pasif.",
      "legalBasis": "Pasal 115 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 115 ayat (1) KUHAP menyatakan: "Dalam hal penyidik sedang melakukan pemeriksaan terhadap tersangka, penasihat hukum dapat mengikuti jalannya pemeriksaan dengan cara melihat serta mendengar pemeriksaan." Penasihat hukum tidak berhak mengintervensi atau menjawab pertanyaan penyidik.'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 314,
    "category": "Hukum Acara Pidana",
    "topicTag": "Kasasi Demi Kepentingan Hukum",
    "question": "Demi kepentingan hukum terhadap semua putusan yang telah memperoleh kekuatan hukum tetap dari pengadilan lain selain daripada Mahkamah Agung, permohonan kasasi dapat diajukan oleh:",
    "options": [
      {
        "key": "A",
        "text": "Jaksa Penuntut Umum"
      },
      {
        "key": "B",
        "text": "Majelis Hakim"
      },
      {
        "key": "C",
        "text": "Jaksa Agung"
      },
      {
        "key": "D",
        "text": "Terdakwa"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Kasasi demi kepentingan hukum hanya dapat diajukan oleh Jaksa Agung.",
      "legalBasis": "Pasal 259 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 259 ayat (1) KUHAP secara imperatif menentukan: "Demi kepentingan hukum terhadap semua putusan yang telah memperoleh kekuatan hukum tetap dari pengadilan lain selain daripada Mahkamah Agung, permohonan kasasi hanya dapat diajukan oleh Jaksa Agung."'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 315,
    "category": "Hukum Acara Pidana",
    "topicTag": "Alasan Peninjauan Kembali (KUHAP)",
    "question": "Berikut ini adalah alasan \u2013 alasan yang dapat dijadikan dasar permintaan peninjauan kembali yang diatur dalam KUHAP, KECUALI:",
    "options": [
      {
        "key": "A",
        "text": "Apabila ditemukan / terdapat keadaan hukum (novum) baru"
      },
      {
        "key": "B",
        "text": "Apabila terdapat kekhilafan yang nyata dalam pemeriksaan hakim"
      },
      {
        "key": "C",
        "text": "Apabila dalam putusan tersebut terdapat hal yang saling bertentangan"
      },
      {
        "key": "D",
        "text": "Apabila hukum pidana yang dijatuhkan kurang dari 2/3 dari ancaman maksimal dalam undang \u2013 undang."
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Penjatuhan hukuman kurang dari 2/3 bukan alasan Peninjauan Kembali (PK) menurut KUHAP.",
      "legalBasis": "Pasal 263 ayat (2) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": "Pasal 263 ayat (2) KUHAP mengatur 3 alasan limitatif PK: a. novum (keadaan baru yang menimbulkan dugaan kuat bahwa jika diketahui waktu sidang hasilnya akan bebas/lepas/dakwaan tidak terbukti); b. pernyataan bahwa sesuatu telah terbukti ternyata saling bertentangan; c. kekhilafan hakim atau kekeliruan yang nyata."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 316,
    "category": "Hukum Acara Pidana",
    "topicTag": "Jenis-Jenis Penahanan (KUHAP)",
    "question": "Dalam Pasal 22 ayat (1) KUHAP jenis penahanan terdiri atas:",
    "options": [
      {
        "key": "A",
        "text": "Penahanan Rutan"
      },
      {
        "key": "B",
        "text": "Penahanan rumah dan penahanan kota"
      },
      {
        "key": "C",
        "text": "Penahanan badan"
      },
      {
        "key": "D",
        "text": "Jawaban a dan b benar"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Jenis penahanan menurut KUHAP adalah penahanan rutan, penahanan rumah, dan penahanan kota.",
      "legalBasis": "Pasal 22 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 22 ayat (1) KUHAP menentukan: "Jenis penahanan dapat berupa: a. penahanan rumah tahanan negara; b. penahanan rumah; c. penahanan kota."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 317,
    "category": "Hukum Acara Pidana",
    "topicTag": "Definisi Tersangka (KUHAP)",
    "question": "Yang dimaksud dengan Tersangka menurut Pasal 1 angka 14 KUHAP adalah:",
    "options": [
      {
        "key": "A",
        "text": "Seseorang yang karena perbuatannya patut diduga sebagai pelaku perbuatan pidana"
      },
      {
        "key": "B",
        "text": "Seseorang yang karena keadaannya patut diduga sebagai pelaku tindak pidana"
      },
      {
        "key": "C",
        "text": "Seseorang yang karena perbuatannya atau keadaannya patut diduga sebagai pelaku tindak pidana"
      },
      {
        "key": "D",
        "text": "Seseorang yang karena perbuatannya atau keadaannya berdasarkan bukti permulaan patut diduga sebagai pelaku tindak pidana"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Tersangka adalah orang yang karena perbuatan/keadaannya berdasar bukti permulaan patut diduga pelaku pidana.",
      "legalBasis": "Pasal 1 angka 14 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 1 angka 14 KUHAP merumuskan: "Tersangka adalah seorang yang karena perbuatannya atau keadaannya, berdasarkan bukti permulaan patut diduga sebagai pelaku tindak pidana."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 318,
    "category": "Hukum Acara Pidana",
    "topicTag": "Tenggang Waktu Putusan Praperadilan",
    "question": "Perkara praperadilan adalah perkara yang pemeriksaannya termasuk cepat karena harus sudah diputuskan dalam waktu paling lama:",
    "options": [
      {
        "key": "A",
        "text": "14 hari"
      },
      {
        "key": "B",
        "text": "17 hari"
      },
      {
        "key": "C",
        "text": "7 hari"
      },
      {
        "key": "D",
        "text": "4 hari"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pemeriksaan praperadilan wajib diputus dalam waktu 7 (tujuh) hari.",
      "legalBasis": "Pasal 82 ayat (1) huruf c UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 82 ayat (1) huruf c KUHAP menentukan secara tegas: "Dalam waktu tujuh hari hakim harus sudah menjatuhkan putusannya."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 319,
    "category": "Hukum Acara Pidana",
    "topicTag": "Alat Bukti Sah Pidana (KUHAP)",
    "question": "Di bawah ini adalah alat bukti yang sah menurut Pasal 184 ayat (1) KUHAP, KECUALI:",
    "options": [
      {
        "key": "A",
        "text": "Keterangan saksi"
      },
      {
        "key": "B",
        "text": "Keterangan ahli"
      },
      {
        "key": "C",
        "text": "Keterangan terdakwa"
      },
      {
        "key": "D",
        "text": "Keterangan saksi ahli"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Istilah yuridis dalam KUHAP adalah Keterangan Ahli, bukan Keterangan Saksi Ahli.",
      "legalBasis": "Pasal 184 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 184 ayat (1) KUHAP merinci 5 alat bukti sah: a. keterangan saksi; b. keterangan ahli; c. surat; d. petunjuk; e. keterangan terdakwa. Istilah "keterangan saksi ahli" tidak dikenal secara mandiri dalam limitasi KUHAP.'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 320,
    "category": "Hukum Acara Pidana",
    "topicTag": "Acara Pemeriksaan Tindak Pidana Ringan (Tipiring)",
    "question": "Perkara yang diperiksa menurut acara pemeriksaan tindak pidana ringan (Tipiring) menurut Pasal 205 ayat (1) KUHAP adalah:",
    "options": [
      {
        "key": "A",
        "text": "Perkara kejahatan atau pelanggaran yang menurut penuntut umum pembuktiannya mudah dan sederhana"
      },
      {
        "key": "B",
        "text": "Perkara yang diancam dengan pidana penjara atau kurungan paling lama 3 bulan dan / atau denda sebanyak \u2013 banyaknya Rp. 7.500,- dan penghinaan ringan."
      },
      {
        "key": "C",
        "text": "Perkara yang pembuktiannya serta penerapan hukumnya mudah tanpa sanksi denda"
      },
      {
        "key": "D",
        "text": "Perkara kejahatan yang ancaman hukumnya lebih dari 5 tahun."
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Tipiring adalah perkara dengan ancaman penjara/kurungan maksimal 3 bulan dan/atau denda serta penghinaan ringan.",
      "legalBasis": "Pasal 205 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 205 ayat (1) KUHAP mengatur: "Yang diperiksa menurut acara pemeriksaan tindak pidana ringan ialah perkara yang diancam dengan pidana penjara atau kurungan paling lama tiga bulan dan atau denda sebanyak-banyaknya tujuh ribu lima ratus rupiah dan penghinaan ringan kecuali yang ditentukan dalam Paragraf 2 bagian ini."'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 321,
    "category": "Hukum Acara Pidana",
    "topicTag": "Klasifikasi Saksi di Persidangan",
    "question": "Jaksa penuntut umum dapat mengajukan saksi yang memberatkan terdakwa di persidangan, saksi ini disebut:",
    "options": [
      {
        "key": "A",
        "text": "Saksi a charge"
      },
      {
        "key": "B",
        "text": "Saksi a de charge"
      },
      {
        "key": "C",
        "text": "Saksi Testimonium de auditu"
      },
      {
        "key": "D",
        "text": "Saksi Mahkota"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Saksi yang diajukan penuntut umum yang memberatkan disebut saksi a charge.",
      "legalBasis": "Pasal 160 ayat (1) huruf c UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": "Saksi a charge adalah saksi yang memberatkan terdakwa yang diajukan oleh Penuntut Umum berdasarkan Pasal 160 ayat (1) huruf c KUHAP. Sebaliknya, saksi a de charge adalah saksi yang meringankan terdakwa yang diajukan oleh terdakwa/penasihat hukum (Pasal 65 jo. Pasal 116 ayat 3 KUHAP)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 322,
    "category": "Hukum Acara Pidana",
    "topicTag": "Tenggang Waktu Permohonan Kasasi Pidana",
    "question": "Tenggang waktu mengajukan upaya hukum kasasi perkara pidana menurut Pasal 245 ayat (1) KUHAP adalah:",
    "options": [
      {
        "key": "A",
        "text": "7 hari sejak putusan dijatuhkan"
      },
      {
        "key": "B",
        "text": "14 hari setelah putusan diberitahukan kepada terdakwa"
      },
      {
        "key": "C",
        "text": "14 hari setelah putusan dikirim ke Pengadilan Negeri"
      },
      {
        "key": "D",
        "text": "Tidak mengenal tenggang waktu"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Permohonan kasasi pidana diajukan dalam tenggang waktu 14 hari setelah putusan diberitahukan kepada terdakwa.",
      "legalBasis": "Pasal 245 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 245 ayat (1) KUHAP menentukan: "Permohonan kasasi disampaikan oleh pemohon kepada panitera pengadilan yang telah memutus perkaranya dalam tingkat pertama, dalam waktu empat belas hari sesudah putusan pengadilan yang dimintakan kasasi itu diberitahukan kepada terdakwa."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 323,
    "category": "Hukum Acara Pidana",
    "topicTag": "Subjek Pemohon Praperadilan Penangkapan/Penahanan",
    "question": "Pemeriksaan tentang sah atau tidaknya suatu penangkapan atau penahanan dapat diajukan kepada praperadilan oleh:",
    "options": [
      {
        "key": "A",
        "text": "Tersangka, keluarga atau kuasanya"
      },
      {
        "key": "B",
        "text": "Tersangka dan jaksa"
      },
      {
        "key": "C",
        "text": "Tersangka dan keluarga korban dan jaksa"
      },
      {
        "key": "D",
        "text": "Terdakwa di tingkat kasasi"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Permohonan praperadilan penangkapan/penahanan diajukan oleh tersangka, keluarga, atau kuasanya.",
      "legalBasis": "Pasal 79 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 79 KUHAP menyatakan: "Permintaan pemeriksaan tentang sah atau tidaknya suatu penangkapan atau penahanan diajukan oleh tersangka, keluarga atau kuasanya kepada ketua pengadilan negeri dengan menyebutkan alasannya."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 324,
    "category": "Hukum Acara Pidana",
    "topicTag": "Pengembalian Berkas Perkara Belum Lengkap (P-19)",
    "question": "Berkas perkara yang dipelajari / diteliti oleh penuntut umum ternyata belum lengkap. Untuk itu tindakan penuntut umum adalah:",
    "options": [
      {
        "key": "A",
        "text": "Melimpahkan berkas perkara tersebut ke Pengadilan Negeri untuk disidangkan"
      },
      {
        "key": "B",
        "text": "Membuat surat dakwaan"
      },
      {
        "key": "C",
        "text": "Mengembalikan berkas perkara kepada penyidik, disertai petunjuk (P-19)"
      },
      {
        "key": "D",
        "text": "Menyidangkan perkara tersebut ke Pengadilan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penuntut umum mengembalikan berkas perkara belum lengkap kepada penyidik disertai petunjuk (P-19).",
      "legalBasis": "Pasal 110 ayat (2) jo. Pasal 138 ayat (2) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 138 ayat (2) KUHAP menegaskan: "Dalam hal penuntut umum berpendapat bahwa hasil penyidikan tersebut ternyata masih kurang lengkap, penuntut umum segera mengembalikan berkas perkara itu kepada penyidik disertai petunjuk untuk dilengkapi."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 325,
    "category": "Hukum Acara Pidana",
    "topicTag": "Keterangan Saksi yang Bernilai Pembuktian",
    "question": "Keterangan saksi adalah apa yang saksi nyatakan di sidang pengadilan mengenai hal yang:",
    "options": [
      {
        "key": "A",
        "text": "Dilihat sendiri oleh terdakwa"
      },
      {
        "key": "B",
        "text": "Dialami, dilihat, atau didengar sendiri oleh saksi"
      },
      {
        "key": "C",
        "text": "Didengar dari cerita orang lain (testimonium de auditu)"
      },
      {
        "key": "D",
        "text": "Diketahui sendiri oleh penyidik dari laporan intelijen"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Keterangan saksi wajib mengenai hal yang ia dengar, lihat, dan alami sendiri di persidangan.",
      "legalBasis": "Pasal 1 angka 27 jo. Pasal 185 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": "Pasal 1 angka 27 KUHAP menegaskan keterangan saksi adalah keterangan mengenai suatu peristiwa pidana yang ia dengar sendiri, ia lihat sendiri, dan ia alami sendiri dengan menyebut alasan pengetahuannya itu."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 326,
    "category": "Hukum Acara Pidana",
    "topicTag": "Batas Waktu Penangkapan oleh Penyidik",
    "question": "Berapa lama jangka waktu maksimal bagi penyidik untuk melakukan penangkapan guna menentukan apakah tersangka akan ditahan atau tidak?",
    "options": [
      {
        "key": "A",
        "text": "2 hari"
      },
      {
        "key": "B",
        "text": "1 hari (24 jam)"
      },
      {
        "key": "C",
        "text": "1 minggu"
      },
      {
        "key": "D",
        "text": "2 minggu"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penangkapan dapat dilakukan untuk paling lama 1 hari (24 jam).",
      "legalBasis": "Pasal 19 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": 'Pasal 19 ayat (1) KUHAP menegaskan: "Penangkapan sebagaimana dimaksud dalam Pasal 17, dapat dilakukan untuk paling lama satu hari."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 327,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Definisi Klien Menurut UU Advokat",
    "question": "Orang, badan hukum atau lembaga lain yang menerima jasa hukum dari Advokat dikenal dengan sebutan:",
    "options": [
      {
        "key": "A",
        "text": "Justisiabelen"
      },
      {
        "key": "B",
        "text": "Pencari keadilan"
      },
      {
        "key": "C",
        "text": "Klien"
      },
      {
        "key": "D",
        "text": "Pasien"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penerima jasa hukum dari advokat disebut Klien.",
      "legalBasis": "Pasal 1 angka 3 UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": 'Pasal 1 angka 3 UU No. 18 Tahun 2003 merumuskan: "Klien adalah orang, badan hukum, atau lembaga lain yang menerima jasa hukum dari Advokat."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 328,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Hak Memperoleh Berkas Perkara Pembelaan",
    "question": "Sesuai dengan Pasal 72 KUHAP dan Pasal 17 UU Advokat, maka advokat berhak:",
    "options": [
      {
        "key": "A",
        "text": "Mendampingi kliennya hanya saat putusan dibacakan"
      },
      {
        "key": "B",
        "text": "Mendapat berkas / salinan BAP dan dokumen untuk kepentingan pembelaan kliennya"
      },
      {
        "key": "C",
        "text": "Menetapkan vonis perkara bersama majelis hakim"
      },
      {
        "key": "D",
        "text": "Menolak diperiksa oleh Dewan Kehormatan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Advokat berhak memperoleh salinan BAP dan dokumen perkara untuk kepentingan pembelaan klien.",
      "legalBasis": "Pasal 72 UU No. 8 Tahun 1981 (KUHAP) jo. Pasal 17 UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Pasal 72 KUHAP jo. Pasal 17 UU Advokat menjamin hak advokat/tersangka untuk mendapatkan turunan berita acara pemeriksaan guna kepentingan pembelaan sejak perkara dilimpahkan ke pengadilan atau saat dimulainya penahanan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 329,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Hak Imunitas Advokat Beritikad Baik",
    "question": "Dalam Undang \u2013 Undang Advokat diatur mengenai hak imunitas advokat yaitu:",
    "options": [
      {
        "key": "A",
        "text": "Hak advokat untuk bebas dari segala kewajiban pajak negara"
      },
      {
        "key": "B",
        "text": "Hak advokat untuk menolak panggilan persidangan tanpa sanksi"
      },
      {
        "key": "C",
        "text": "Hak advokat untuk dilindungi dari tuntutan pidana atau perdata ketika ia menjalankan tugas profesinya dengan itikad baik untuk kepentingan pembelaan klien dalam maupun di luar sidang pengadilan"
      },
      {
        "key": "D",
        "text": "Hak advokat untuk menahan barang bukti asli kliennya"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Hak imunitas melindungi advokat dari tuntutan perdata/pidana saat bertugas dengan itikad baik.",
      "legalBasis": "Pasal 16 UU No. 18 Tahun 2003 tentang Advokat jo. Putusan Mahkamah Konstitusi No. 26/PUU-XI/2013.",
      "analysis": "Pasal 16 UU Advokat jo. Putusan MK No. 26/PUU-XI/2013 menyatakan advokat tidak dapat dituntut baik secara perdata maupun pidana dalam menjalankan tugas profesinya dengan itikad baik untuk kepentingan pembelaan klien di dalam maupun di luar sidang pengadilan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 330,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Kedudukan Profesi Advokat dalam Pemberian Jasa Hukum",
    "question": 'Menurut Undang \u2013 undang No. 18 Tahun 2003, pernyataan bahwa "satu \u2013 satunya profesi yang memberikan jasa hukum di Indonesia adalah advokat":',
    "options": [
      {
        "key": "A",
        "text": "Pernyataan tersebut tidak benar"
      },
      {
        "key": "B",
        "text": "Pernyataan tersebut benar"
      },
      {
        "key": "C",
        "text": "Pernyataan tersebut diatur mutlak dalam UUD 1945"
      },
      {
        "key": "D",
        "text": "Pernyataan tersebut telah dicabut oleh Presiden"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pernyataan tersebut tidak benar karena instansi lain (LBH/BPH, notaris, konsultan) juga memberikan bantuan hukum tertentu.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 32 ayat (1) UU No. 18 Tahun 2003 jo. UU No. 16 Tahun 2011 tentang Bantuan Hukum.",
      "analysis": "Advokat adalah profesi penegak hukum pemberi jasa hukum secara komprehensif, namun bukan satu-satunya pihak yang berkecimpung memberi layanan/bantuan hukum (organisasi bantuan hukum/LBH terakreditasi dan lembaga kemahiran hukum juga diakui oleh hukum positif Indonesia)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 331,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Gelar Kehormatan Advokat (Officium Nobile)",
    "question": "Profesi Advokat adalah profesi terhormat. Dikenal dengan istilah apakah \u201Cprofesi terhormat dan mulia\u201D tersebut?",
    "options": [
      {
        "key": "A",
        "text": "Honour profession"
      },
      {
        "key": "B",
        "text": "Officium Juris"
      },
      {
        "key": "C",
        "text": "Officium Nobile"
      },
      {
        "key": "D",
        "text": "Respected Profession"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Profesi advokat disebut officium nobile (profesi yang mulia dan terhormat).",
      "legalBasis": "Penjelasan Umum Alinea ke-1 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Pasal 3 huruf g KEAI 2002.",
      "analysis": "Istilah officium nobile menegaskan bahwa profesi advokat mengemban nilai moral, pengabdian keadilan, dan pembelaan hak asasi manusia di atas semata-mata motif materiil."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 332,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Karakter Pendampingan Advokat di Tingkat Penyidikan",
    "question": "Peran dan fungsi advokat di tingkat penyidikan menurut KUHAP pada hakikatnya bersifat:",
    "options": [
      {
        "key": "A",
        "text": "Pasif (melihat dan mendengar jalannya pemeriksaan)"
      },
      {
        "key": "B",
        "text": "Aktif mengarahkan jawaban tersangka"
      },
      {
        "key": "C",
        "text": "Menggantikan tersangka menjawab berita acara"
      },
      {
        "key": "D",
        "text": "Memimpin jalannya pemeriksaan penyidikan"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pendampingan advokat dalam pemeriksaan penyidik bersifat pasif (melihat dan mendengar).",
      "legalBasis": "Pasal 115 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "analysis": "Berdasarkan Pasal 115 ayat (1) KUHAP, peran penasihat hukum di tingkat penyidikan dibatasi secara pasif dengan cara melihat serta mendengar pemeriksaan, guna memastikan tidak terjadi kekerasan fisik atau intimidasi terhadap tersangka."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 333,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Undang-Undang Advokat Indonesia",
    "question": "Undang \u2013 undang yang mengatur tentang Profesi Advokat di Indonesia saat ini adalah:",
    "options": [
      {
        "key": "A",
        "text": "UU No. 14 Tahun 1985"
      },
      {
        "key": "B",
        "text": "UU No. 18 Tahun 2004"
      },
      {
        "key": "C",
        "text": "UU No. 18 Tahun 2003"
      },
      {
        "key": "D",
        "text": "UU No. 20 Tahun 2003"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Profesi Advokat diatur dalam Undang-Undang No. 18 Tahun 2003.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 36 Undang-Undang No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "UU No. 18 Tahun 2003 disahkan pada tanggal 5 April 2003 sebagai landasan hukum formil dan materil bagi profesi advokat di Indonesia."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 334,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Kelahiran Perhimpunan Advokat Indonesia (PERADI)",
    "question": "Perhimpunan Advokat Indonesia (PERADI) resmi didirikan dan dideklarasikan oleh 8 organisasi advokat pada tanggal:",
    "options": [
      {
        "key": "A",
        "text": "21 Desember 2004"
      },
      {
        "key": "B",
        "text": "18 Nopember 2004"
      },
      {
        "key": "C",
        "text": "5 April 2004"
      },
      {
        "key": "D",
        "text": "23 Mei 2002"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "PERADI dideklarasikan dan didirikan pada tanggal 21 Desember 2004 di Jakarta.",
      "legalBasis": "Piagam Deklarasi PERADI tanggal 21 Desember 2004 di Jakarta jo. Pasal 32 ayat (4) UU No. 18 Tahun 2003.",
      "analysis": "Pada tanggal 21 Desember 2004, delapan organisasi profesi advokat (IKADIN, AAI, IPHI, HAPI, SPI, AKHI, HKHPM, APSI) sepakat mendirikan PERADI sebagai pemenuhan amanat wadah tunggal UU Advokat."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 335,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Komposisi Komisi Pengawasan Advokat",
    "question": "Berdasarkan Pasal 13 ayat (2) UU No. 18 Tahun 2003, anggota Komisi Pengawasan Advokat terdiri dari unsur:",
    "options": [
      {
        "key": "A",
        "text": "Advokat senior, Para Ahli / Akademisi, dan Masyarakat"
      },
      {
        "key": "B",
        "text": "Advokat, Para pensiunan hakim, dan LSM"
      },
      {
        "key": "C",
        "text": "Advokat, Jaksa Penuntut Umum, dan Hakim Agung"
      },
      {
        "key": "D",
        "text": "Menteri Hukum, Advokat Senior, dan Kepolisian"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Komisi Pengawasan Advokat terdiri dari Advokat Senior, Ahli/Akademisi, dan Masyarakat.",
      "legalBasis": "Pasal 13 ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": 'Pasal 13 ayat (2) UU Advokat menegaskan: "Keanggotaan Komisi Pengawasan sebagaimana dimaksud pada ayat (1) terdiri atas unsur Advokat senior, para ahli/akademisi, dan masyarakat."'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 336,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Wilayah Kerja Advokat Indonesia",
    "question": "Wilayah hukum kerja praktik seorang advokat berdasarkan Pasal 5 ayat (2) UU No. 18 Tahun 2003 adalah:",
    "options": [
      {
        "key": "A",
        "text": "Seluruh wilayah negara Republik Indonesia"
      },
      {
        "key": "B",
        "text": "Terbatas pada wilayah hukum Pengadilan Tinggi setempat"
      },
      {
        "key": "C",
        "text": "Terbatas hanya di wilayah hukum Pengadilan Negeri domisili kantor"
      },
      {
        "key": "D",
        "text": "Hanya di ibu kota provinsi tempat sumpah advokat diambil"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Wilayah kerja advokat meliputi seluruh wilayah negara Republik Indonesia.",
      "legalBasis": "Pasal 5 ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": 'Pasal 5 ayat (2) UU Advokat menyatakan secara tegas: "Wilayah kerja Advokat meliputi seluruh wilayah negara Republik Indonesia." Dengan demikian tidak ada batasan yurisdiksi kedaerahan bagi advokat Indonesia.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 337,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Ruang Lingkup Jasa Hukum",
    "question": "Tidak termasuk pengertian jasa hukum menurut Pasal 1 angka 2 UU No. 18 Tahun 2003 adalah:",
    "options": [
      {
        "key": "A",
        "text": "Memberikan jasa pengawalan dan keamanan fisik klien"
      },
      {
        "key": "B",
        "text": "Memberikan konsultasi hukum dan bantuan hukum"
      },
      {
        "key": "C",
        "text": "Menjalankan kuasa, mewakili, mendampingi, dan membela klien"
      },
      {
        "key": "D",
        "text": "Melakukan tindakan hukum lain untuk kepentingan hukum klien"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Jasa pengawalan keamanan fisik bukan merupakan jasa hukum advokat.",
      "legalBasis": "Pasal 1 angka 2 UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Pasal 1 angka 2 UU Advokat merumuskan jasa hukum adalah jasa yang diberikan Advokat berupa memberikan konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, membela, dan melakukan tindakan hukum lain untuk kepentingan hukum klien. Pengamanan fisik bukan tindakan profesi hukum."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 338,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Alasan Penindakan terhadap Advokat",
    "question": "Seorang advokat dapat dikenakan tindakan pendisiplinan menurut Pasal 6 UU No. 18 Tahun 2003 karena:",
    "options": [
      {
        "key": "A",
        "text": "Mengabaikan atau menelantarkan kepentingan kliennya"
      },
      {
        "key": "B",
        "text": "Berbuat atau bertingkah laku tidak patut terhadap lawan atau rekan seprofesi"
      },
      {
        "key": "C",
        "text": "Melakukan pelanggaran terhadap peraturan perundang \u2013 undangan atau perbuatan tercela"
      },
      {
        "key": "D",
        "text": "Jawaban semua benar (A, B, dan C benar)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Advokat dapat ditindak karena menelantarkan klien, berbuat tidak patut, atau melanggar hukum/etik.",
      "legalBasis": "Pasal 6 huruf a, b, dan c UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Pasal 6 UU Advokat menyebutkan alasan penindakan terhadap Advokat meliputi: mengabaikan kepentingan klien, bertingkah laku tidak patut, bersikap tidak sopan terhadap penegak hukum, melanggar sumpah/janji dan/atau kode etik profesi."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 339,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Jenis Tindakan terhadap Advokat",
    "question": "Berdasarkan Pasal 7 ayat (1) UU No. 18 Tahun 2003, jenis tindakan yang dapat dikenakan kepada Advokat terdiri dari:",
    "options": [
      {
        "key": "A",
        "text": "Teguran lisan saja"
      },
      {
        "key": "B",
        "text": "Denda materiil dan kurungan badan"
      },
      {
        "key": "C",
        "text": "Teguran lisan, teguran tertulis, pemberhentian sementara (3-12 bulan), dan pemberhentian tetap dari profesi"
      },
      {
        "key": "D",
        "text": "Pencabutan status warga negara"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Tindakan terhadap advokat: teguran lisan, tertulis, pemberhentian sementara 3-12 bulan, dan pemberhentian tetap.",
      "legalBasis": "Pasal 7 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Pasal 7 ayat (1) UU Advokat mengatur secara berjenjang: a. teguran lisan; b. teguran tertulis; c. pemberhentian sementara dari profesinya selama 3 (tiga) sampai 12 (dua belas) bulan; d. pemberhentian tetap dari profesinya."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 340,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Pemberhentian Tetap Advokat",
    "question": "Seorang advokat diberhentikan dari profesinya secara tetap menurut Pasal 10 ayat (1) UU Advokat karena:",
    "options": [
      {
        "key": "A",
        "text": "Permohonan sendiri"
      },
      {
        "key": "B",
        "text": "Dijatuhi pidana yang telah inkracht karena tindak pidana berancaman 4 tahun atau lebih"
      },
      {
        "key": "C",
        "text": "Berdasarkan keputusan Organisasi Advokat"
      },
      {
        "key": "D",
        "text": "Jawaban semua benar (A, B, dan C benar)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Advokat diberhentikan tetap karena permohonan sendiri, vonis pidana inkracht ancaman 4 tahun/lebih, atau keputusan organisasi.",
      "legalBasis": "Pasal 10 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": 'Pasal 10 ayat (1) UU No. 18 Tahun 2003 menyatakan: "Advokat berhenti atau dapat diberhentikan dari profesinya oleh Organisasi Advokat karena: a. permohonan sendiri; b. dijatuhi pidana penjara yang telah berkekuatan hukum tetap karena melakukan tindak pidana yang diancam pidana 4 tahun atau lebih; c. keputusan Organisasi Advokat."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 341,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Ruang Lingkup Hak Imunitas Advokat",
    "question": "Pasal 16 UU Advokat jo. Putusan Mahkamah Konstitusi No. 26/PUU-XI/2013 mengatur ketentuan hak imunitas bagi seorang advokat dalam lingkup:",
    "options": [
      {
        "key": "A",
        "text": "Tuntutan pidana saja"
      },
      {
        "key": "B",
        "text": "Tuntutan perdata saja"
      },
      {
        "key": "C",
        "text": "Tuntutan perdata maupun pidana, baik di dalam maupun di luar sidang pengadilan"
      },
      {
        "key": "D",
        "text": "Gugatan Tata Usaha Negara saja"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Hak imunitas melindungi advokat dari tuntutan perdata maupun pidana baik di dalam maupun di luar pengadilan.",
      "legalBasis": "Pasal 16 UU No. 18 Tahun 2003 tentang Advokat jo. Putusan Mahkamah Konstitusi No. 26/PUU-XI/2013.",
      "analysis": "MK memperluas imunitas advokat: advokat tidak dapat dituntut perdata maupun pidana dalam menjalankan tugas profesi dengan itikad baik untuk kepentingan pembelaan klien, baik di dalam maupun di luar sidang pengadilan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 342,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Kesetaraan Kedudukan Penegak Hukum",
    "question": "Profesi Advokat adalah profesi yang mulia dan terhormat dan karenanya dalam menjalankan profesi selaku penegak hukum di pengadilan sejajar dengan:",
    "options": [
      {
        "key": "A",
        "text": "Satuan Polisi Pamong Praja"
      },
      {
        "key": "B",
        "text": "Lembaga Swadaya Masyarakat"
      },
      {
        "key": "C",
        "text": "Polisi, Jaksa, dan Hakim"
      },
      {
        "key": "D",
        "text": "Panitera dan Juru Sita saja"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Advokat memiliki kedudukan yang sejajar dengan penegak hukum lainnya (Polisi, Jaksa, dan Hakim).",
      "legalBasis": "Pasal 5 ayat (1) UU No. 18 Tahun 2003 tentang Advokat jo. Doktrin Catur Wangsa.",
      "analysis": "Pasal 5 ayat (1) UU Advokat menegaskan status advokat sebagai penegak hukum yang bebas dan mandiri. Dalam konsep Catur Wangsa Penegak Hukum, advokat berdiri sejajar dengan polisi, jaksa, dan hakim."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 343,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Larangan Mencari Publisitas (KEAI)",
    "question": "Bolehkah seorang Advokat mencari publisitas bagi dirinya sendiri di media massa menurut Kode Etik Advokat Indonesia?",
    "options": [
      {
        "key": "A",
        "text": "Boleh, asalkan menggunakan biaya sendiri"
      },
      {
        "key": "B",
        "text": "Boleh, asalkan dilakukan di media sosial pribadi"
      },
      {
        "key": "C",
        "text": "Boleh, agar calon klien mudah menemukan kantor hukumnya"
      },
      {
        "key": "D",
        "text": "Tidak boleh, advokat dilarang mencari publisitas bagi dirinya baik secara langsung maupun melalui perantara"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Advokat dilarang mencari publisitas diri di media massa baik secara langsung maupun melalui perantara.",
      "legalBasis": "Pasal 3 huruf f jo. Pasal 8 huruf f Kode Etik Advokat Indonesia (KEAI) 2002.",
      "analysis": 'Pasal 3 huruf f KEAI melarang tegas: "Advokat tidak dibenarkan mencari publisitas bagi dirinya dan atau melalui perantara dan atau tidak membenarkan siapapun untuk menyiarkan dan mengiklankan hal-hal yang menyangkut dirinya."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 344,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Rahasia Jabatan Advokat",
    "question": "Sampai kapankah kewajiban memegang rahasia jabatan profesi Advokat wajib untuk dijaga?",
    "options": [
      {
        "key": "A",
        "text": "Sampai dengan klien meninggal dunia"
      },
      {
        "key": "B",
        "text": "Selama berlangsungnya proses hukum klien tersebut"
      },
      {
        "key": "C",
        "text": "Selama rahasia tersebut belum dicantumkan dalam putusan pengadilan"
      },
      {
        "key": "D",
        "text": "Selamanya, bahkan setelah berakhirnya hubungan hukum dengan klien"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Kewajiban menjaga rahasia jabatan advokat berlaku selamanya, bahkan setelah hubungan dengan klien berakhir.",
      "legalBasis": "Pasal 19 ayat (2) UU No. 18 Tahun 2003 tentang Advokat jo. Pasal 4 huruf h Kode Etik Advokat Indonesia (KEAI).",
      "analysis": "Pasal 19 ayat (2) UU No. 18 Tahun 2003 dan Pasal 4 huruf h KEAI secara mutlak mewajibkan Advokat merahasiakan segala sesuatu yang diketahui atau diperoleh dari kliennya karena hubungan profesinya, dan kewajiban tersebut tetap berlaku walaupun hubungan hukum antara Advokat dan klien telah berakhir."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 345,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Hak Menolak Perkara",
    "question": "Bolehkah seorang advokat menolak calon kliennya yang meminta bantuan hukum?",
    "options": [
      {
        "key": "A",
        "text": "Boleh, dengan pertimbangan tidak sesuai dengan keahliannya dan bertentangan dengan hati nuraninya"
      },
      {
        "key": "B",
        "text": "Tidak boleh, karena agama atau partai calon klien berbeda dengan yang dimiliki oleh advokat tersebut"
      },
      {
        "key": "C",
        "text": "Tidak boleh, karena advokat wajib menerima setiap orang tanpa kecuali"
      },
      {
        "key": "D",
        "text": "Boleh ditolak hanya apabila calon klien tidak mampu membayar honorarium di muka"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Advokat berhak menolak perkara jika tidak sesuai keahlian atau bertentangan dengan hati nuraninya.",
      "legalBasis": "Pasal 3 huruf a Kode Etik Advokat Indonesia (KEAI) jo. Pasal 18 ayat (1) UU No. 18 Tahun 2003.",
      "analysis": 'Pasal 3 huruf a KEAI menegaskan: "Advokat dapat menolak untuk memberi nasihat dan bantuan hukum kepada setiap orang yang memerlukan jasa dan atau bantuan hukum dengan pertimbangan oleh karena tidak sesuai dengan keahliannya dan bertentangan dengan hati nuraninya." Penolakan tidak boleh didasarkan pada pertimbangan SARA atau gender.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 346,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Sanksi Pemberhentian Sementara (Skorsing)",
    "question": "Jika seorang advokat dijatuhi sanksi berupa pemberhentian sementara untuk waktu tertentu oleh Dewan Kehormatan, maka akibat hukumnya adalah:",
    "options": [
      {
        "key": "A",
        "text": "Advokat tersebut hanya dapat menjalankan profesinya di luar sidang pengadilan"
      },
      {
        "key": "B",
        "text": "Advokat tersebut hanya dapat memberikan konsultasi hukum tertulis"
      },
      {
        "key": "C",
        "text": "Advokat tersebut masih dapat beracara bila didampingi advokat senior"
      },
      {
        "key": "D",
        "text": "Advokat tersebut tidak dapat menjalankan profesinya, baik di dalam maupun di luar sidang pengadilan"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pemberhentian sementara melarang advokat berpraktek baik di dalam maupun di luar pengadilan selama masa sanksi.",
      "legalBasis": "Pasal 7 ayat (1) huruf c Kode Etik Advokat Indonesia jo. Pasal 26 UU No. 18 Tahun 2003.",
      "analysis": "Sanksi pemberhentian sementara (skorsing) berakibat advokat dilarang total menjalankan profesinya, baik di dalam pengadilan (litigasi) maupun di luar pengadilan (non-litigasi/konsultasi) selama jangka waktu berlakunya putusan skorsing tersebut."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 347,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Hubungan Antar Teman Sejawat Advokat",
    "question": "Bagaimanakah hubungan advokat dengan teman sejawatnya dalam menjalankan profesinya di masyarakat?",
    "options": [
      {
        "key": "A",
        "text": "Advokat harus saling menjatuhkan reputasi rekan agar mendapatkan klien terbanyak"
      },
      {
        "key": "B",
        "text": "Advokat harus menjunjung tinggi nilai-nilai profesinya dengan dilandasi sikap saling menghormati, saling menghargai, dan saling mempercayai sesama rekan seprofesi"
      },
      {
        "key": "C",
        "text": "Advokat harus mampu bersaing bebas tanpa perlu memikirkan kode etik antar rekan"
      },
      {
        "key": "D",
        "text": "Teman sejawat advokat semata-mata adalah kompetitor bisnis di pasar jasa hukum"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Hubungan antar teman sejawat advokat dilandasi sikap saling menghormati, menghargai, dan mempercayai.",
      "legalBasis": "Pasal 5 huruf a Kode Etik Advokat Indonesia (KEAI) 2002.",
      "analysis": 'Pasal 5 huruf a KEAI menegaskan: "Hubungan antara teman sejawat Advokat berdasarkan atas sikap saling menghormati, saling menghargai dan saling mempercayai." Sikap menjatuhkan teman sejawat dilarang keras sebagai pelanggaran etik.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 348,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Bantuan Hukum Cuma-Cuma (Pro Bono)",
    "question": "Jasa hukum yang diberikan oleh advokat secara cuma-cuma (tanpa imbalan) kepada klien yang tidak mampu disebut:",
    "options": [
      {
        "key": "A",
        "text": "Honorarium Kontinjensi"
      },
      {
        "key": "B",
        "text": "Bantuan hukum (Pro bono publico)"
      },
      {
        "key": "C",
        "text": "Sumbangan sosial sukarela"
      },
      {
        "key": "D",
        "text": "Retainer fee"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Jasa hukum cuma-cuma bagi masyarakat tidak mampu adalah bantuan hukum (pro bono publico).",
      "legalBasis": "Pasal 22 ayat (1) UU No. 18 Tahun 2003 tentang Advokat jo. Peraturan Pemerintah No. 83 Tahun 2008.",
      "analysis": "Pasal 22 ayat (1) UU No. 18 Tahun 2003 mewajibkan Advokat memberikan bantuan hukum secara cuma-cuma (pro bono publico) kepada pencari keadilan yang tidak mampu."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 349,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Pengambilan Sumpah Advokat",
    "question": "Sebelum menjalankan profesinya, advokat wajib bersumpah menurut agamanya atau berjanji dengan sungguh-sungguh dalam sidang terbuka di:",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Negeri di wilayah domisili hukumnya"
      },
      {
        "key": "B",
        "text": "Pengadilan Tinggi di wilayah domisili hukumnya"
      },
      {
        "key": "C",
        "text": "Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia"
      },
      {
        "key": "D",
        "text": "Gedung Mahkamah Agung Republik Indonesia"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Sumpah/janji advokat dilaksanakan dalam sidang terbuka Pengadilan Tinggi di wilayah domisili hukum advokat.",
      "legalBasis": "Pasal 4 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": 'Pasal 4 ayat (1) UU No. 18 Tahun 2003 menyatakan: "Sebelum menjalankan profesinya, Advokat wajib bersumpah menurut agamanya atau berjanji dengan sungguh-sungguh di sidang terbuka Pengadilan Tinggi di wilayah domisili hukumnya."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 350,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Kewenangan Pengangkatan Advokat",
    "question": "Pengangkatan seorang advokat menurut Undang-Undang No. 18 Tahun 2003 dilakukan oleh:",
    "options": [
      {
        "key": "A",
        "text": "Mahkamah Agung"
      },
      {
        "key": "B",
        "text": "Departemen Hukum dan HAM"
      },
      {
        "key": "C",
        "text": "Kejaksaan Agung"
      },
      {
        "key": "D",
        "text": "Organisasi Advokat"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pengangkatan advokat dilakukan secara mandiri oleh Organisasi Advokat.",
      "legalBasis": "Pasal 2 ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": 'Pasal 2 ayat (2) UU No. 18 Tahun 2003 menegaskan: "Pengangkatan Advokat dilakukan oleh Organisasi Advokat." Salinan surat keputusan pengangkatan tersebut disampaikan kepada Mahkamah Agung dan Menteri Hukum.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 351,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Wewenang Mandiri Organisasi Advokat",
    "question": "Undang-Undang Advokat memberikan kewenangan yang cukup besar kepada Organisasi Advokat, antara lain kewenangan untuk:",
    "options": [
      {
        "key": "A",
        "text": "Mengadakan ujian bagi calon advokat"
      },
      {
        "key": "B",
        "text": "Melakukan pengangkatan advokat"
      },
      {
        "key": "C",
        "text": "Melakukan tindakan pengawasan dan pemberhentian advokat"
      },
      {
        "key": "D",
        "text": "Semua jawaban benar (Ujian, pengangkatan, pengawasan, dan pemberhentian advokat)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Organisasi Advokat berwenang menyelenggarakan ujian, mengangkat, mengawasi, dan memberhentikan advokat.",
      "legalBasis": "Pasal 2 ayat (2), Pasal 3 ayat (1) huruf f, Pasal 12, dan Pasal 26 UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Undang-Undang No. 18 Tahun 2003 memberikan mandat mandiri (self-regulating organization) kepada Organisasi Advokat untuk menguji, mengangkat, mengawasi, serta menindak/memberhentikan anggotanya melalui Dewan Kehormatan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 352,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Larangan Rangkap Jabatan Politik",
    "question": "Berdasarkan Pasal 28 ayat (3) UU No. 18 Tahun 2003, pimpinan Organisasi Advokat dilarang merangkap jabatan sebagai:",
    "options": [
      {
        "key": "A",
        "text": "Dosen atau akademisi di perguruan tinggi"
      },
      {
        "key": "B",
        "text": "Pimpinan Partai Politik, baik di tingkat Pusat maupun Daerah"
      },
      {
        "key": "C",
        "text": "Ketua yayasan sosial atau keagamaan"
      },
      {
        "key": "D",
        "text": "Pengurus organisasi bantuan hukum pro bono"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pimpinan Organisasi Advokat tidak dapat merangkap sebagai pimpinan partai politik.",
      "legalBasis": "Pasal 28 ayat (3) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": 'Pasal 28 ayat (3) UU Advokat secara tegas menentukan: "Pimpinan Organisasi Advokat tidak dapat merangkap sebagai pimpinan partai politik, baik di tingkat Pusat maupun di tingkat Daerah."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 353,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Legitimasi Beracara Advokat di Persidangan",
    "question": "Kelengkapan yuridis apa yang wajib ditunjukkan oleh advokat dalam persidangan di pengadilan agar sah mendampingi atau mewakili kliennya?",
    "options": [
      {
        "key": "A",
        "text": "Kartu Tanda Penduduk (KTP) dan Ijazah Sarjana Hukum"
      },
      {
        "key": "B",
        "text": "Surat Keterangan Catatan Kepolisian (SKCK) dan Pasfoto"
      },
      {
        "key": "C",
        "text": "Kartu Tanda Pengenal Advokat (KTPA) yang masih berlaku dan Surat Kuasa Khusus"
      },
      {
        "key": "D",
        "text": "Surat Rekomendasi dari Kejaksaan Negeri setempat"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Advokat wajib menunjukkan KTPA yang masih berlaku serta Surat Kuasa Khusus yang sah saat sidang pengadilan.",
      "legalBasis": "Pasal 5 jo. Pasal 30 UU No. 18 Tahun 2003 jo. Surat Edaran Mahkamah Agung (SEMA) No. 1 Tahun 1971.",
      "analysis": "Dalam setiap persidangan perkara, Majelis Hakim melakukan pemeriksaan identitas kuasa hukum berupa Kartu Tanda Pengenal Advokat (KTPA)/Berita Acara Sumpah dan Surat Kuasa Khusus yang memenuhi syarat Pasal 123 HIR / Pasal 147 RBg."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 354,
    "category": "Hukum Acara PTUN",
    "topicTag": "Bentuk-Bentuk Putusan PTUN",
    "question": "Berdasarkan Pasal 97 ayat (7) UU No. 5 Tahun 1986, putusan Pengadilan Tata Usaha Negara dapat berupa:",
    "options": [
      {
        "key": "A",
        "text": "Gugatan tidak diterima atau gugur"
      },
      {
        "key": "B",
        "text": "Gugatan ditolak atau dikabulkan"
      },
      {
        "key": "C",
        "text": "Gugatan ditolak atau dikabulkan atau tidak diterima saja"
      },
      {
        "key": "D",
        "text": "Gugatan ditolak, gugatan dikabulkan, gugatan tidak diterima, atau gugatan gugur (Jawaban a dan b benar)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Putusan PTUN berupa gugatan ditolak, gugatan dikabulkan, gugatan tidak diterima, atau gugatan gugur.",
      "legalBasis": "Pasal 97 ayat (7) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": 'Pasal 97 ayat (7) UU PTUN mengatur limitatif bentuk putusan: "Putusan Pengadilan dapat berupa: a. gugatan ditolak; b. gugatan dikabulkan; c. gugatan tidak diterima; d. gugatan gugur."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 355,
    "category": "Hukum Acara PTUN",
    "topicTag": "Upaya Hukum Terhadap Putusan Pemeriksaan Persiapan",
    "question": "Dalam acara pemeriksaan persiapan kepada penggugat diberikan waktu 30 hari untuk memperbaiki gugatan. Apabila dalam jangka waktu itu Penggugat tidak memperbaikinya maka hakim mengeluarkan penetapan gugatan tidak dapat diterima. Terhadap penetapan tersebut Penggugat dapat:",
    "options": [
      {
        "key": "A",
        "text": "Mengajukan gugatan baru"
      },
      {
        "key": "B",
        "text": "Mengajukan banding ke PT.TUN"
      },
      {
        "key": "C",
        "text": "Mengajukan kasasi langsung ke Mahkamah Agung"
      },
      {
        "key": "D",
        "text": "Mengajukan peninjauan kembali"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Terhadap putusan gugatan tidak diterima dalam pemeriksaan persiapan, penggugat tidak dapat banding melainkan dapat mengajukan gugatan baru.",
      "legalBasis": "Pasal 63 ayat (3) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": 'Pasal 63 ayat (3) UU PTUN menyatakan: "Terhadap putusan sebagaimana dimaksud pada ayat (2) tidak dapat digunakan upaya hukum, tetapi dapat diajukan gugatan baru."'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 356,
    "category": "Hukum Acara PTUN",
    "topicTag": "Unsur-Unsur Keputusan TUN (KTUN)",
    "question": "Berikut ini adalah unsur-unsur Keputusan Tata Usaha Negara (KTUN) menurut Pasal 1 angka 9 UU No. 51 Tahun 2009, KECUALI:",
    "options": [
      {
        "key": "A",
        "text": "Penetapan tertulis yang dikeluarkan oleh Badan atau Pejabat TUN"
      },
      {
        "key": "B",
        "text": "Bersifat konkret, individual, dan final"
      },
      {
        "key": "C",
        "text": "Peraturan yang bersifat umum dan abstrak (Regeling)"
      },
      {
        "key": "D",
        "text": "Menimbulkan akibat hukum bagi seseorang atau badan hukum perdata"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Peraturan umum abstrak (regeling) bukan KTUN dan bukan objek sengketa PTUN.",
      "legalBasis": "Pasal 1 angka 9 jo. Pasal 2 huruf a UU No. 5 Tahun 1986 jo. UU No. 51 Tahun 2009 tentang PTUN.",
      "analysis": "KTUN adalah penetapan tertulis konkret, individual, dan final (beschikking). Peraturan yang bersifat umum dan abstrak (regeling) dikecualikan oleh Pasal 2 huruf a UU PTUN dan menjadi ranah uji materiil Mahkamah Agung."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 357,
    "category": "Hukum Acara PTUN",
    "topicTag": "Eksekusi Putusan PTUN & Uang Paksa (Dwangsom)",
    "question": "Setelah putusan PTUN berkekuatan hukum tetap namun Tergugat (pejabat) tidak bersedia melaksanakannya, maka berdasarkan Pasal 116 UU No. 51 Tahun 2009 terhadap pejabat tersebut dapat dikenakan:",
    "options": [
      {
        "key": "A",
        "text": "Sanksi pidana penjara kurungan seumur hidup"
      },
      {
        "key": "B",
        "text": "Penyitaan aset pribadi keluarga pejabat"
      },
      {
        "key": "C",
        "text": "Upaya paksa berupa pembayaran sejumlah uang paksa (dwangsom) dan/atau sanksi administratif serta diumumkan di media massa cetak oleh panitera"
      },
      {
        "key": "D",
        "text": "Pemberhentian tanpa pesangon oleh Pengadilan Negeri"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pejabat yang membangkang putusan PTUN dikenakan uang paksa, sanksi administratif, dan diumumkan di media massa.",
      "legalBasis": "Pasal 116 ayat (4) dan ayat (5) UU No. 51 Tahun 2009 tentang Perubahan Kedua UU PTUN.",
      "analysis": "Pasal 116 ayat (4) dan (5) UU No. 51 Tahun 2009 mengatur instrumen eksekusi PTUN: pengenaan uang paksa (dwangsom), sanksi administratif sedang sampai berat, serta publikasi ketidakpatuhan pejabat di media massa cetak oleh Panitera."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 358,
    "category": "Hukum Acara PTUN",
    "topicTag": "Amar Putusan Pengabulan Gugatan TUN",
    "question": "Dalam hal gugatan dikabulkan, maka berdasarkan Pasal 97 ayat (9) UU No. 5 Tahun 1986 dalam putusan pengadilan dapat ditetapkan kewajiban bagi Badan/Pejabat TUN berupa:",
    "options": [
      {
        "key": "A",
        "text": "Pencabutan Keputusan Tata Usaha Negara yang bersangkutan"
      },
      {
        "key": "B",
        "text": "Pencabutan Keputusan Tata Usaha Negara yang bersangkutan dan menerbitkan keputusan baru"
      },
      {
        "key": "C",
        "text": "Penerbitan keputusan tata usaha negara dalam hal gugatan didasarkan pada Pasal 3"
      },
      {
        "key": "D",
        "text": "Ketiga \u2013 tiganya benar (A, B, dan C benar)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Kewajiban pejabat TUN dalam putusan pengabulan meliputi pencabutan, penerbitan baru, atau penerbitan KTUN yang dimohonkan.",
      "legalBasis": "Pasal 97 ayat (9) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": 'Pasal 97 ayat (9) UU PTUN menentukan: "Kewajiban sebagaimana dimaksud pada ayat (8) berupa: a. pencabutan KTUN; b. pencabutan KTUN dan menerbitkan KTUN baru; atau c. penerbitan KTUN dalam hal gugatan didasarkan pada Pasal 3."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 359,
    "category": "Hukum Acara PTUN",
    "topicTag": "Intervensi Pihak Ketiga dalam Sengketa TUN",
    "question": "Masuknya pihak ketiga dalam sengketa Tata Usaha Negara menurut Pasal 83 UU No. 5 Tahun 1986 dapat terjadi atas:",
    "options": [
      {
        "key": "A",
        "text": "Permohonan pihak ketiga yang berkepentingan"
      },
      {
        "key": "B",
        "text": "Permintaan pihak yang sedang bersengketa"
      },
      {
        "key": "C",
        "text": "Prakarsa Majelis Hakim yang memeriksa perkara"
      },
      {
        "key": "D",
        "text": "Semua jawaban benar (permohonan pihak ketiga, permintaan para pihak, atau prakarsa hakim)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pihak ketiga dapat masuk atas inisiatif sendiri, atas permohonan penggugat/tergugat, atau atas prakarsa hakim.",
      "legalBasis": "Pasal 83 ayat (1) dan ayat (2) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": "Pasal 83 UU PTUN mengatur intervensi: ayat (1) atas permohonan pihak ketiga sendiri; ayat (2) atas permohonan salah satu pihak yang bersengketa atau karena prakarsa Hakim."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 360,
    "category": "Hukum Acara PTUN",
    "topicTag": "Objek Sengketa PTUN (Beschikking)",
    "question": "Objek sengketa pada Peradilan Tata Usaha Negara (PTUN) pada hakikatnya adalah:",
    "options": [
      {
        "key": "A",
        "text": "Beschikking (Keputusan/Penetapan Tertulis Badan atau Pejabat TUN)"
      },
      {
        "key": "B",
        "text": "Regeling (Peraturan perundang-undangan yang bersifat umum abstrak)"
      },
      {
        "key": "C",
        "text": "Hak Uji Materiil terhadap undang-undang"
      },
      {
        "key": "D",
        "text": "Materiele daad (Tindakan fisik pejabat tanpa dasar surat keputusan)"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Objek sengketa PTUN adalah Beschikking (Keputusan Tata Usaha Negara).",
      "legalBasis": "Pasal 1 angka 9 jo. Pasal 53 ayat (1) UU No. 5 Tahun 1986 jo. UU No. 51 Tahun 2009 tentang PTUN.",
      "analysis": "Sengketa TUN berpangkal pada dikeluarkannya Keputusan TUN (beschikking) yang bersifat konkret, individual, dan final yang merugikan kepentingan penggugat."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 361,
    "category": "Hukum Acara PTUN",
    "topicTag": "Perkembangan Regulasi UU PTUN",
    "question": "Undang \u2013 undang tentang Peradilan Tata Usaha Negara telah dua kali mengalami perubahan / penyempurnaan yaitu melalui:",
    "options": [
      {
        "key": "A",
        "text": "UU No. 5/1960 direvisi dengan UU No. 8/2004"
      },
      {
        "key": "B",
        "text": "UU No. 5 Tahun 1986 diubah dengan UU No. 9 Tahun 2004 dan kemudian UU No. 51 Tahun 2009"
      },
      {
        "key": "C",
        "text": "UU No. 9/2004 direvisi dengan UU No. 51/2009 saja"
      },
      {
        "key": "D",
        "text": "UU No. 15/1986 direvisi dengan UU No. 9/2004"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "UU PTUN No. 5/1986 mengalami perubahan pertama melalui UU 9/2004 dan perubahan kedua melalui UU 51/2009.",
      "legalBasis": "Pasal 1 angka 1 jo. Konsiderans Menimbang UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009 tentang Perubahan Atas UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Rezim hukum PTUN Indonesia bertumpu pada UU No. 5 Tahun 1986, yang diamandemen dengan UU No. 9 Tahun 2004 dan diperbarui lagi dengan UU No. 51 Tahun 2009."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 362,
    "category": "Hukum Acara PTUN",
    "topicTag": "Kewenangan Sengketa Kepegawaian",
    "question": "Lembaga peradilan yang berwenang memeriksa, memutus dan menyelesaikan sengketa kepegawaian aparatur sipil negara adalah:",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Umum"
      },
      {
        "key": "B",
        "text": "Pengadilan Hubungan Industrial"
      },
      {
        "key": "C",
        "text": "Pengadilan Tata Usaha Negara (PTUN)"
      },
      {
        "key": "D",
        "text": "Pengadilan Agama"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Sengketa kepegawaian ASN merupakan kewenangan absolut Peradilan Tata Usaha Negara.",
      "legalBasis": "Pasal 35 ayat (1) UU No. 43 Tahun 1999 jo. Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang PTUN.",
      "analysis": "Surat Keputusan mengenai status, hak, dan kewajiban pegawai negeri sipil/ASN adalah Keputusan TUN di bidang kepegawaian yang penyelesaian sengketanya menjadi yurisdiksi Pengadilan Tata Usaha Negara."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 363,
    "category": "Hukum Acara PTUN",
    "topicTag": "Alat Bukti Sah Tata Usaha Negara",
    "question": "Di bawah ini adalah alat-alat bukti yang sah dalam Peradilan Tata Usaha Negara menurut Pasal 100 ayat (1) UU No. 5 Tahun 1986, KECUALI:",
    "options": [
      {
        "key": "A",
        "text": "Surat atau tulisan"
      },
      {
        "key": "B",
        "text": "Keterangan ahli"
      },
      {
        "key": "C",
        "text": "Pengakuan terdakwa"
      },
      {
        "key": "D",
        "text": "Pengetahuan hakim"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pengakuan terdakwa bukan alat bukti PTUN melainkan alat bukti perkara pidana.",
      "legalBasis": "Pasal 100 ayat (1) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": 'Pasal 100 ayat (1) UU PTUN menetapkan 5 alat bukti sah: a. surat atau tulisan; b. keterangan ahli; c. keterangan saksi; d. pengakuan para pihak; e. pengetahuan hakim. "Pengakuan terdakwa" hanya ada dalam hukum acara pidana.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 364,
    "category": "Hukum Acara PTUN",
    "topicTag": "Kedudukan Pengadilan TUN Tingkat Pertama",
    "question": "Pengadilan Tata Usaha Negara (PTUN tingkat pertama) menurut Pasal 6 ayat (1) UU No. 5 Tahun 1986 berkedudukan di:",
    "options": [
      {
        "key": "A",
        "text": "Kotamadya atau di Ibukota Kabupaten"
      },
      {
        "key": "B",
        "text": "Ibukota Provinsi saja"
      },
      {
        "key": "C",
        "text": "Ibukota Negara Republik Indonesia"
      },
      {
        "key": "D",
        "text": "Kecamatan setempat"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "PTUN tingkat pertama berkedudukan di kotamadya atau ibukota kabupaten.",
      "legalBasis": "Pasal 6 ayat (1) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": 'Pasal 6 ayat (1) UU PTUN mengatur: "Pengadilan Tata Usaha Negara berkedudukan di kotamadya atau ibukota kabupaten, dan daerah hukumnya meliputi wilayah kotamadya atau kabupaten." Sedangkan Pengadilan Tinggi TUN berkedudukan di ibukota provinsi (Pasal 6 ayat 2).'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 365,
    "category": "Hukum Acara Perdata",
    "topicTag": "Sita Revindikasi (Revindicatoir Beslag)",
    "question": "Sita Revindikasi (Revindicatoir Beslaag) berdasarkan Pasal 226 HIR / 260 RBg dapat dimintakan terhadap:",
    "options": [
      {
        "key": "A",
        "text": "Barang tidak bergerak milik pihak ketiga yang dikuasai tergugat"
      },
      {
        "key": "B",
        "text": "Barang tidak bergerak milik penggugat yang dikuasai oleh tergugat"
      },
      {
        "key": "C",
        "text": "Barang bergerak milik penggugat yang berada di bawah penguasaan tergugat"
      },
      {
        "key": "D",
        "text": "Barang bergerak milik pihak ketiga yang disengketakan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Sita revindikasi diajukan oleh pemilik barang bergerak untuk menuntut kembali barang bergeraknya yang dikuasai tergugat.",
      "legalBasis": "Pasal 226 ayat (1) HIR / Pasal 260 ayat (1) RBg.",
      "analysis": "Revindicatoir beslag adalah penyitaan atas barang bergerak milik Penggugat sendiri yang berada di tangan Tergugat tanpa hak, guna menuntut pengembalian hak milik tersebut secara utuh."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 366,
    "category": "Hukum Acara Perdata",
    "topicTag": "Kompetensi Relatif (Forum Rei Sitae)",
    "question": "Pada asasnya gugatan perdata diajukan ke Pengadilan Negeri tempat tinggal Tergugat. Namun terhadap gugatan yang objek perkaranya berupa benda tidak bergerak, gugatan diajukan ke:",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Negeri tempat tinggal Penggugat"
      },
      {
        "key": "B",
        "text": "Pengadilan Negeri tempat terjadinya perjanjian utang-piutang"
      },
      {
        "key": "C",
        "text": "Pengadilan Negeri di mana benda tidak bergerak itu terletak (forum rei sitae)"
      },
      {
        "key": "D",
        "text": "Pengadilan Negeri Jakarta Pusat sebagai peradilan umum pusat"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Gugatan atas benda tidak bergerak diajukan di Pengadilan Negeri tempat benda itu terletak (forum rei sitae).",
      "legalBasis": "Pasal 118 ayat (3) HIR / Pasal 142 ayat (3) RBg.",
      "analysis": "Pasal 118 ayat (3) HIR mengatur pengecualian asas actor sequitur forum rei: bilamana gugatan mengenai barang tidak bergerak (tanah/bangunan), gugatan diajukan kepada Pengadilan Negeri yang daerah hukumnya meliputi tempat letak barang tidak bergerak tersebut (forum rei sitae)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 367,
    "category": "Hukum Acara Perdata",
    "topicTag": "Intervensi dalam Perkara Perdata (Voeging)",
    "question": "Suatu aksi hukum oleh pihak ketiga yang berkepentingan dengan jalan masuk ke dalam perkara perdata yang sedang berlangsung antara penggugat dan tergugat untuk memihak salah satu pihak (misalnya bersama tergugat) disebut:",
    "options": [
      {
        "key": "A",
        "text": "Rekonvensi"
      },
      {
        "key": "B",
        "text": "Voeging (Menyertai)"
      },
      {
        "key": "C",
        "text": "Tussenkomst (Menengahi)"
      },
      {
        "key": "D",
        "text": "Vrijwaring (Penjaminan)"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pihak ketiga yang masuk bergabung untuk membela atau memihak salah satu pihak disebut Voeging.",
      "legalBasis": "Pasal 279 Reglement op de Rechtsvordering (Rv) jo. Doktrin Hukum Acara Perdata.",
      "analysis": "Voeging adalah campur tangan pihak ketiga yang berkepentingan untuk bergabung dengan salah satu pihak (Penggugat atau Tergugat). Sedangkan bila pihak ketiga menuntut hak miliknya sendiri melawan Penggugat dan Tergugat sekaligus disebut Tussenkomst."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 368,
    "category": "Hukum Acara Perdata",
    "topicTag": "Upaya Hukum Putusan Verstek (Verzet)",
    "question": "Upaya hukum biasa yang dapat diajukan oleh pihak Tergugat terhadap putusan verstek (putusan tanpa hadirnya Tergugat) adalah:",
    "options": [
      {
        "key": "A",
        "text": "Banding langsung ke Pengadilan Tinggi"
      },
      {
        "key": "B",
        "text": "Kasasi ke Mahkamah Agung"
      },
      {
        "key": "C",
        "text": "Verzet (Perlawanan) kepada Pengadilan Negeri yang memutus"
      },
      {
        "key": "D",
        "text": "Peninjauan Kembali (PK)"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Upaya hukum terhadap putusan verstek adalah Verzet (perlawanan).",
      "legalBasis": "Pasal 129 ayat (1) dan (2) HIR / Pasal 153 ayat (1) dan (2) RBg.",
      "analysis": "Berdasarkan Pasal 129 HIR, Tergugat yang dijatuhi putusan verstek dapat mengajukan verzet (perlawanan) dalam tenggang waktu 14 hari setelah putusan diberitahukan kepadanya secara langsung."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 369,
    "category": "Hukum Acara Perdata",
    "topicTag": "Putusan Verstek",
    "question": "Putusan yang dijatuhkan oleh Majelis Hakim pada sidang pertama karena pihak Tergugat tidak hadir tanpa alasan yang sah meskipun telah dipanggil secara resmi dan patut disebut:",
    "options": [
      {
        "key": "A",
        "text": "Putusan In Absentia"
      },
      {
        "key": "B",
        "text": "Putusan Sela"
      },
      {
        "key": "C",
        "text": "Putusan Verstek"
      },
      {
        "key": "D",
        "text": "Derden Verzet"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Putusan di luar hadirnya Tergugat dalam perkara perdata adalah putusan verstek.",
      "legalBasis": "Pasal 125 ayat (1) HIR / Pasal 149 ayat (1) RBg.",
      "analysis": "Putusan verstek dijatuhkan apabila tergugat tidak datang pada hari sidang yang ditentukan dan tidak menyuruh wakilnya yang sah meskipun telah dipanggil dengan patut, serta tidak mengajukan eksepsi kompetensi."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 370,
    "category": "Hukum Acara Perdata",
    "topicTag": "Pembuktian Surat dan Akta Otentik",
    "question": "Kekuatan pembuktian surat akta di muka sidang pengadilan terutama terletak pada:",
    "options": [
      {
        "key": "A",
        "text": "Keaslian dan kebenaran tanda tangan serta isi yang tertuang di dalamnya"
      },
      {
        "key": "B",
        "text": "Panjangnya tulisan"
      },
      {
        "key": "C",
        "text": "Fotokopi yang dilegalisasi lurah"
      },
      {
        "key": "D",
        "text": "Cap jempol tanpa verifikasi"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Nilai pembuktian akta bertumpu pada keaslian tanda tangan dan kebenaran isi aktanya.",
      "legalBasis": "Pasal 1868-1875 Kitab Undang-Undang Hukum Perdata jo. Pasal 165 HIR / Pasal 285 RBg.",
      "analysis": "Kekuatan pembuktian akta (formal dan materiil) melekat pada keaslian tanda tangan para penandatangan serta kepastian tanggal dan substansi peristiwa hukum yang dituangkan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 371,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Surat Kuasa Khusus",
    "question": "Untuk mewakili klien beracara di muka persidangan pengadilan, disyaratkan secara tegas menggunakan surat kuasa yang bersifat:",
    "options": [
      {
        "key": "A",
        "text": "Kuasa lisan saja"
      },
      {
        "key": "B",
        "text": "Kuasa Umum"
      },
      {
        "key": "C",
        "text": "Surat Kuasa Khusus"
      },
      {
        "key": "D",
        "text": "Kuasa Insidentil dari RT setempat"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Mewakili di pengadilan wajib menggunakan Surat Kuasa Khusus.",
      "legalBasis": "Pasal 123 ayat (1) HIR jo. SEMA No. 1 Tahun 1971 jo. SEMA No. 6 Tahun 1994.",
      "analysis": "SEMA No. 1/1971 dan SEMA No. 6/1994 mewajibkan surat kuasa untuk beracara di pengadilan berbentuk surat kuasa khusus yang menyebutkan para pihak, objek perkara, dan pengadilan yang bersangkutan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 372,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Definisi Mediasi (PERMA 1/2016)",
    "question": "Pengertian mediasi menurut Peraturan Mahkamah Agung (PERMA) No. 1 Tahun 2016 adalah:",
    "options": [
      {
        "key": "A",
        "text": "Penyelesaian sengketa melalui putusan sepihak hakim komisaris"
      },
      {
        "key": "B",
        "text": "Cara penyelesaian sengketa melalui proses perundingan untuk memperoleh kesepakatan Para Pihak dengan dibantu oleh Mediator"
      },
      {
        "key": "C",
        "text": "Proses banding perkara ke Pengadilan Tinggi"
      },
      {
        "key": "D",
        "text": "Penyelesaian sengketa melalui eksekusi lelang paksa"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Mediasi adalah perundingan para pihak dengan bantuan mediator untuk mencapai kesepakatan perdamaian.",
      "legalBasis": "Pasal 1 angka 1 PERMA No. 1 Tahun 2016 tentang Prosedur Mediasi di Pengadilan.",
      "analysis": 'Berdasarkan Pasal 1 angka 1 PERMA No. 1/2016: "Mediasi adalah cara penyelesaian sengketa melalui proses perundingan untuk memperoleh kesepakatan Para Pihak dengan dibantu oleh Mediator."'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 373,
    "category": "Hukum Acara Perdata",
    "topicTag": "Ketentuan Pencabutan Gugatan",
    "question": "Berdasarkan Pasal 271 dan 272 Rv (Reglement op de Rechtsvordering), pencabutan gugatan secara sepihak oleh Penggugat tanpa persetujuan Tergugat dapat dilakukan:",
    "options": [
      {
        "key": "A",
        "text": "Sewaktu-waktu sampai sebelum putusan kasasi dibacakan"
      },
      {
        "key": "B",
        "text": "Setelah Tergugat menyampaikan jawaban pokok perkara"
      },
      {
        "key": "C",
        "text": "Sebelum Tergugat memberikan jawaban atas gugatan"
      },
      {
        "key": "D",
        "text": "Hanya saat tahap pembuktian surat selesai"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pencabutan gugatan dapat dilakukan secara bebas sebelum Tergugat memberikan jawaban.",
      "legalBasis": "Pasal 271 dan Pasal 272 Reglement op de Rechtsvordering (Rv).",
      "analysis": "Penggugat berhak mencabut gugatannya secara sepihak sebelum Tergugat menyampaikan jawabannya. Apabila Tergugat telah menyampaikan jawaban (eksepsi/bantahan pokok perkara), pencabutan hanya sah jika disetujui oleh Tergugat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 374,
    "category": "Hukum Acara Perdata",
    "topicTag": "Anatomi Surat Gugatan (Petitum)",
    "question": "Surat gugatan perdata terdiri atas bagian Identitas, Posita (Fundamentum Petendi), dan Petitum. Yang dimaksud dengan Petitum adalah:",
    "options": [
      {
        "key": "A",
        "text": "Bagian gugatan yang menguraikan identitas lengkap para pihak"
      },
      {
        "key": "B",
        "text": "Bagian gugatan yang memaparkan kronologis fakta dan hubungan hukum peristiwa"
      },
      {
        "key": "C",
        "text": "Bagian gugatan yang memuat hal-hal yang dimohonkan atau dituntut oleh Penggugat untuk diputus oleh hakim"
      },
      {
        "key": "D",
        "text": "Bagian pertimbangan hukum majelis hakim sebelum vonis"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Petitum adalah tuntutan apa saja yang dimintakan oleh penggugat kepada hakim untuk dikabulkan.",
      "legalBasis": "Pasal 118 jo. Pasal 125 HIR jo. Yurisprudensi Mahkamah Agung RI No. 556 K/Sip/1971.",
      "analysis": "Petitum berisi permohonan konkret dari penggugat kepada majelis hakim (misalnya menyatakan tergugat wanprestasi, menghukum ganti rugi, menyatakan sita jaminan sah dan berharga). Posita berisi uraian fakta dan dalil hukum."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 375,
    "category": "Hukum Acara Perdata",
    "topicTag": "Alat Bukti Sah Perdata",
    "question": "Berdasarkan ketentuan Pasal 164 HIR / Pasal 284 RBg jo. Pasal 1866 KUHPerdata, alat-alat bukti yang sah dalam hukum acara perdata terdiri atas:",
    "options": [
      {
        "key": "A",
        "text": "Surat, Saksi, Pengetahuan Hakim, Keyakinan Hakim, dan Sumpah"
      },
      {
        "key": "B",
        "text": "Surat, Saksi, Yurisprudensi, Keyakinan Hakim, dan Sumpah"
      },
      {
        "key": "C",
        "text": "Surat, Keterangan Terdakwa, Petunjuk, dan Saksi Ahli"
      },
      {
        "key": "D",
        "text": "Alat bukti Surat, Saksi, Persangkaan, Pengakuan, dan Sumpah"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Alat bukti perdata menurut Pasal 164 HIR adalah surat, saksi, persangkaan, pengakuan, dan sumpah.",
      "legalBasis": "Pasal 164 HIR / Pasal 284 RBg jo. Pasal 1866 Kitab Undang-Undang Hukum Perdata (KUHPerdata).",
      "analysis": "Pasal 164 HIR mengatur 5 alat bukti sah secara urut: 1. Bukti tulisan/surat; 2. Bukti saksi; 3. Persangkaan (vermoedens); 4. Pengakuan (bekentenis); 5. Sumpah (eed). Keyakinan hakim bukan alat bukti formil melainkan standar penilaian pembuktian pidana."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 376,
    "category": "Hukum Acara Perdata",
    "topicTag": "Beban Pembuktian Perdata (Actori Incumbit Probatio)",
    "question": "Berdasarkan asas pembuktian perdata dalam Pasal 163 HIR jo. Pasal 1865 KUHPerdata, pihak yang berkewajiban membuktikan dalil dalam persidangan adalah:",
    "options": [
      {
        "key": "A",
        "text": "Hanya pihak Penggugat saja tanpa kecuali"
      },
      {
        "key": "B",
        "text": "Hanya pihak Tergugat saja"
      },
      {
        "key": "C",
        "text": "Penggugat dan Tergugat (barangsiapa mendalilkan mempunyai hak atau membantah hak orang lain wajib membuktikannya)"
      },
      {
        "key": "D",
        "text": "Majelis Hakim secara ex-officio aktif mencari barang bukti"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Beban pembuktian dipikul oleh pihak yang mendalilkan hak atau membantah hak pihak lain.",
      "legalBasis": "Pasal 163 HIR / Pasal 283 RBg jo. Pasal 1865 Kitab Undang-Undang Hukum Perdata (KUHPerdata).",
      "analysis": 'Asas "Actori incumbit probatio" menegaskan bahwa penggugat wajib membuktikan dalil gugatannya, dan tergugat wajib membuktikan dalil bantahan atau sangkalannya.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 377,
    "category": "Hukum Acara Perdata",
    "topicTag": "Gugatan Contentiosa vs Permohonan Voluntaria",
    "question": "Tuntutan hak ke pengadilan perdata yang di dalamnya mengandung perselisihan atau sengketa antara dua pihak atau lebih disebut:",
    "options": [
      {
        "key": "A",
        "text": "Gugatan (Jurisdictio Contentiosa)"
      },
      {
        "key": "B",
        "text": "Permohonan (Jurisdictio Voluntaria)"
      },
      {
        "key": "C",
        "text": "Perdamaian di luar sidang"
      },
      {
        "key": "D",
        "text": "Eksaminasi publik"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Tuntutan hak yang mengandung sengketa pihak-pihak disebut gugatan (contentiosa).",
      "legalBasis": "Pasal 118 ayat (1) HIR / Pasal 142 ayat (1) RBg.",
      "analysis": "Perkara perdata dibagi dua: Gugatan (contentiosa) yang mengandung konflik dua pihak (Penggugat vs Tergugat) dan menghasilkan Putusan (vonnis); serta Permohonan (voluntaria) yang bersifat sepihak tanpa sengketa dan menghasilkan Penetapan (beschikking)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 378,
    "category": "Hukum Acara Perdata",
    "topicTag": "Bentuk Pengajuan Gugatan Perdata",
    "question": "Berdasarkan ketentuan Pasal 118 ayat (1) dan Pasal 120 HIR, pengajuan suatu gugatan perdata ke Pengadilan Negeri dapat disampaikan secara:",
    "options": [
      {
        "key": "A",
        "text": "Mutlak wajib tertulis dengan akta notariil"
      },
      {
        "key": "B",
        "text": "Hanya boleh lisan"
      },
      {
        "key": "C",
        "text": "Tertulis, atau secara lisan kepada Ketua Pengadilan Negeri bagi yang buta huruf"
      },
      {
        "key": "D",
        "text": "Melalui siaran pers media elektronik"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Gugatan perdata pada dasarnya diajukan tertulis, namun bagi yang buta huruf diperkenankan secara lisan.",
      "legalBasis": "Pasal 118 ayat (1) jo. Pasal 120 HIR / Pasal 144 RBg.",
      "analysis": "Pasal 120 HIR memberi kemudahan akses keadilan (access to justice) bagi pihak yang buta huruf untuk mengajukan gugatan secara lisan kepada Ketua Pengadilan Negeri, yang selanjutnya mencatat atau menyuruh mencatat gugatan tersebut."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 379,
    "category": "Hukum Acara Perdata",
    "topicTag": "Sita Jaminan (Conservatoir Beslag)",
    "question": "Sita Jaminan (Conservatoir Beslaag) berdasarkan Pasal 227 HIR dapat dimintakan penyitaannya terhadap:",
    "options": [
      {
        "key": "A",
        "text": "Barang bergerak maupun barang tidak bergerak milik Tergugat"
      },
      {
        "key": "B",
        "text": "Barang milik pihak ketiga yang tidak tersangkut perkara"
      },
      {
        "key": "C",
        "text": "Harta warisan milik saksi persidangan"
      },
      {
        "key": "D",
        "text": "Aset lembaga pemerintah yang dilindungi undang-undang keuangan negara"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Sita jaminan diletakkan atas barang bergerak atau tidak bergerak milik Tergugat guna menjamin pelaksanaan putusan.",
      "legalBasis": "Pasal 227 ayat (1) HIR / Pasal 261 ayat (1) RBg.",
      "analysis": "Sita jaminan (conservatoir beslag) bertujuan membekukan aset debitur/tergugat agar tidak dipindahtangankan, disembunyikan, atau dialihkan selama perkara berjalan, sehingga putusan pengadilan tidak menjadi hampa (illusoir)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 380,
    "category": "Hukum Acara PHI",
    "topicTag": "Tenggang Waktu Putusan Pengadilan Hubungan Industrial",
    "question": "Tenggang waktu penyelesaian perselisihan hubungan industrial pada Pengadilan Hubungan Industrial (PHI) sejak sidang pertama menurut UU No. 2 Tahun 2004 adalah:",
    "options": [
      {
        "key": "A",
        "text": "50 (lima puluh) hari kerja sejak sidang pertama"
      },
      {
        "key": "B",
        "text": "30 (tiga puluh) hari kerja sejak sidang pertama"
      },
      {
        "key": "C",
        "text": "90 (sembilan puluh) hari kerja sejak berkas perkara diterima"
      },
      {
        "key": "D",
        "text": "14 (empat belas) hari kerja sejak pembuktian selesai"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Majelis hakim PHI wajib memutus perkara paling lama 50 hari kerja sejak sidang pertama.",
      "legalBasis": "Pasal 103 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "analysis": 'Pasal 103 UU No. 2 Tahun 2004 menegaskan: "Majelis Hakim wajib memberikan putusan penyelesaian perselisihan hubungan industrial dalam waktu selambat-lambatnya 50 (lima puluh) hari kerja terhitung sejak sidang pertama."'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 381,
    "category": "Hukum Acara PHI",
    "topicTag": "Klasifikasi Perselisihan Hubungan Industrial",
    "question": "Berdasarkan Pasal 2 UU No. 2 Tahun 2004, jenis-jenis perselisihan hubungan industrial meliputi hal-hal berikut, KECUALI:",
    "options": [
      {
        "key": "A",
        "text": "Perselisihan hak"
      },
      {
        "key": "B",
        "text": "Perselisihan kepentingan"
      },
      {
        "key": "C",
        "text": "Perselisihan pemutusan hubungan kerja (PHK) dan perselisihan antar serikat pekerja dalam satu perusahaan"
      },
      {
        "key": "D",
        "text": "Perselisihan tindak pidana perburuhan"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Tindak pidana perburuhan bukan objek sengketa hubungan industrial melainkan ranah pidana umum/khusus.",
      "legalBasis": "Pasal 2 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "analysis": "Pasal 2 UU No. 2 Tahun 2004 membagi perselisihan hubungan industrial secara limitatif menjadi 4 jenis: perselisihan hak, perselisihan kepentingan, perselisihan pemutusan hubungan kerja, dan perselisihan antar serikat pekerja/serikat buruh hanya dalam satu perusahaan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 382,
    "category": "Hukum Acara PHI",
    "topicTag": "Syarat Lampiran Gugatan PHI (Risalah Mediasi/Konsiliasi)",
    "question": "Untuk mengajukan gugatan ke Pengadilan Hubungan Industrial, surat gugatan secara imperatif harus dilampiri dengan:",
    "options": [
      {
        "key": "A",
        "text": "Bukti \u2013 bukti tentang adanya hak"
      },
      {
        "key": "B",
        "text": "Keterangan tertulis dari kepolisian"
      },
      {
        "key": "C",
        "text": "Surat izin dari Menteri Ketenagakerjaan"
      },
      {
        "key": "D",
        "text": "Risalah penyelesaian melalui mediasi atau konsiliasi"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Gugatan PHI wajib melampirkan risalah mediasi atau konsiliasi; tanpa itu hakim wajib mengembalikan gugatan.",
      "legalBasis": "Pasal 83 ayat (1) UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "analysis": 'Pasal 83 ayat (1) UU No. 2 Tahun 2004 menetapkan: "Pengajuan gugatan yang tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi, maka hakim Pengadilan Hubungan Industrial wajib mengembalikan gugatan kepada penggugat."'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 383,
    "category": "Hukum Acara PHI",
    "topicTag": "Kedudukan UU 2/2004 sebagai Hukum Formil",
    "question": "Undang \u2013 undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial merupakan hukum formil penegakan dari:",
    "options": [
      {
        "key": "A",
        "text": "UU No. 12 Tahun 1964 tentang Pemutusan Hubungan Kerja di Perusahaan Swasta"
      },
      {
        "key": "B",
        "text": "UU No. 22 Tahun 1957 tentang Penyelesaian Perselisihan Perburuhan"
      },
      {
        "key": "C",
        "text": "UU No. 13 Tahun 2003 tentang Ketenagakerjaan"
      },
      {
        "key": "D",
        "text": "UU No. 14 Tahun 1969 tentang Ketentuan-Ketentuan Pokok Tenaga Kerja"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "UU No. 2 Tahun 2004 adalah hukum formil dari UU No. 13 Tahun 2003 tentang Ketenagakerjaan.",
      "legalBasis": "Pasal 125 ayat (1) dan ayat (2) Undang-Undang No. 2 Tahun 2004 tentang PPHI jo. UU No. 13 Tahun 2003 tentang Ketenagakerjaan.",
      "analysis": "Hukum materiil ketenagakerjaan diatur dalam UU No. 13 Tahun 2003, sedangkan hukum formil/hukum acara penyelesaian sengketanya diatur dalam UU No. 2 Tahun 2004."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 384,
    "category": "Hukum Acara PHI",
    "topicTag": "Pengertian Perundingan Bipartit",
    "question": "Istilah perundingan antara pekerja/buruh atau serikat pekerja/serikat buruh dengan pengusaha untuk menyelesaikan perselisihan hubungan industrial dalam satu perusahaan adalah:",
    "options": [
      {
        "key": "A",
        "text": "Perundingan Bipartit"
      },
      {
        "key": "B",
        "text": "Musyawarah Tripartit"
      },
      {
        "key": "C",
        "text": "Konsiliasi Ketenagakerjaan"
      },
      {
        "key": "D",
        "text": "Arbitrase Hubungan Industrial"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Perundingan langsung antara pekerja dan pengusaha dinamakan Bipartit.",
      "legalBasis": "Pasal 1 angka 10 jo. Pasal 3 ayat (1) UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "analysis": 'Pasal 1 angka 10 UU No. 2 Tahun 2004 merumuskan: "Perundingan bipartit adalah perundingan antara pekerja/buruh atau serikat pekerja/serikat buruh dengan pengusaha untuk menyelesaikan perselisihan hubungan industrial." Perundingan ini wajib ditempuh lebih dahulu.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 385,
    "category": "Hukum Acara PHI",
    "topicTag": "Pembebasan Biaya Perkara PHI (Pasal 58 UU 2/2004)",
    "question": "Ketentuan pembebasan biaya perkara pada Pengadilan Hubungan Industrial (PHI) diatur bagi gugatan yang:",
    "options": [
      {
        "key": "A",
        "text": "Diajukan oleh perusahaan multinasional"
      },
      {
        "key": "B",
        "text": "Nilai gugatannya di bawah Rp150.000.000,00 (tidak dikenakan biaya perkara termasuk biaya eksekusi)"
      },
      {
        "key": "C",
        "text": "Nilai gugatannya di atas Rp500.000.000,00"
      },
      {
        "key": "D",
        "text": "Semua perkara PHI wajib membayar panjar perkara tanpa perkecualian"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Gugatan PHI di bawah Rp150 juta dibebaskan dari biaya perkara termasuk biaya eksekusi.",
      "legalBasis": "Pasal 58 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "analysis": 'Pasal 58 UU No. 2 Tahun 2004 menegaskan: "Pihak-pihak yang berperkara tidak dikenakan biaya, termasuk biaya eksekusi yang nilai gugatannya di bawah Rp 150.000.000,00 (seratus lima puluh juta rupiah)."'
    },
    "difficulty": "Sedang"
  },
  {
    "id": 386,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Dasar Hukum Peradilan Agama",
    "question": "Peradilan Agama di Indonesia dibentuk dan diatur dalam peraturan perundang-undangan:",
    "options": [
      {
        "key": "A",
        "text": "UU No. 7 Tahun 1989 jo. UU No. 8 Tahun 2006"
      },
      {
        "key": "B",
        "text": "UU No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009"
      },
      {
        "key": "C",
        "text": "UU No. 2 Tahun 1989 jo. UU No. 3 Tahun 2006"
      },
      {
        "key": "D",
        "text": "UU No. 5 Tahun 1986 jo. UU No. 5 Tahun 2004"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Peradilan Agama diatur dalam UU No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 2 Undang-Undang No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.",
      "analysis": "Ketentuan pokok mengenai Peradilan Agama diatur dalam Undang-Undang Nomor 7 Tahun 1989, yang kemudian diamandemen dengan UU No. 3 Tahun 2006 dan UU No. 50 Tahun 2009."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 387,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Tenggang Waktu Ikrar Talak",
    "question": "Dalam putusan permohonan talak yang telah berkekuatan hukum tetap dan telah ditetapkan sidang penyaksian ikrar talak, maka tenggang waktu yang diberikan kepada pemohon untuk mengikrarkan talaknya sebelum gugur adalah:",
    "options": [
      {
        "key": "A",
        "text": "3 (tiga) bulan"
      },
      {
        "key": "B",
        "text": "1 (satu) bulan"
      },
      {
        "key": "C",
        "text": "6 (enam) bulan terhitung sejak hari sidang penyaksian ikrar talak ditetapkan"
      },
      {
        "key": "D",
        "text": "12 (dua belas) bulan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Tenggang waktu pengucapan ikrar talak adalah 6 (enam) bulan sejak hari sidang ditetapkan.",
      "legalBasis": "Pasal 70 ayat (6) UU No. 7 Tahun 1989 jo. Pasal 131 ayat (4) Kompilasi Hukum Islam (KHI).",
      "analysis": "Berdasarkan Pasal 70 ayat (6) UU No. 7 Tahun 1989, apabila suami tidak mengucapkan ikrar talak dalam tenggang waktu 6 bulan sejak hari sidang penyaksian ikrar talak ditetapkan, maka hak suami untuk mengikrarkan talak gugur dan perkawinan tetap utuh."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 388,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Masa Iddah Karena Kematian (KHI)",
    "question": "Waktu tunggu (masa iddah) bagi seorang janda apabila perkawinan putus karena kematian suami ditetapkan selama:",
    "options": [
      {
        "key": "A",
        "text": "120 (seratus dua puluh) hari"
      },
      {
        "key": "B",
        "text": "125 (seratus dua puluh lima) hari"
      },
      {
        "key": "C",
        "text": "130 (seratus tiga puluh) hari (4 bulan 10 hari)"
      },
      {
        "key": "D",
        "text": "135 (seratus tiga puluh lima) hari"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Waktu tunggu (iddah) janda yang ditinggal mati suami adalah 130 hari.",
      "legalBasis": "Pasal 39 ayat (1) huruf a PP No. 9 Tahun 1975 jo. Pasal 153 ayat (2) huruf a Kompilasi Hukum Islam (KHI).",
      "analysis": `Menurut Pasal 153 ayat (2) huruf a KHI: "Apabila perkawinan putus karena kematian, walaupun qobla al dukhul, waktu tunggu ditetapkan 130 (seratus tiga puluh) hari." Hal ini sejalan dengan Al-Qur'an Surah Al-Baqarah ayat 234.`
    },
    "difficulty": "Mudah"
  },
  {
    "id": 389,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Taklik Talak (KHI)",
    "question": "Perjanjian yang diucapkan calon mempelai pria setelah akad nikah yang dicantumkan dalam Akta Nikah berupa janji talak yang digantungkan kepada suatu keadaan tertentu yang mungkin terjadi di masa yang akan datang disebut:",
    "options": [
      {
        "key": "A",
        "text": "Khuluk"
      },
      {
        "key": "B",
        "text": "Talak Ba'in Kubraa"
      },
      {
        "key": "C",
        "text": "Taklik talak"
      },
      {
        "key": "D",
        "text": "Mut'ah"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Perjanjian janji talak yang digantungkan pada syarat tertentu dalam Akta Nikah adalah taklik-talak.",
      "legalBasis": "Pasal 1 huruf e jo. Pasal 45 Kompilasi Hukum Islam (KHI) (Inpres No. 1 Tahun 1991).",
      "analysis": "Pasal 1 huruf e KHI mendefinisikan taklik-talak sebagai perjanjian yang diucapkan calon mempelai pria setelah akad nikah yang dicantumkan dalam Akta Nikah berupa janji talak yang digantungkan kepada suatu keadaan tertentu yang mungkin terjadi di masa yang akan datang."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 390,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Itsbat Nikah (KHI)",
    "question": "Dalam hal perkawinan tidak dapat dibuktikan dengan Akta Nikah maka pihak yang berkepentingan dapat mengajukan permohonan ke Pengadilan Agama yaitu perkara:",
    "options": [
      {
        "key": "A",
        "text": "Cerai talak"
      },
      {
        "key": "B",
        "text": "Cerai gugat"
      },
      {
        "key": "C",
        "text": "Itsbat nikah (Pengesahan nikah)"
      },
      {
        "key": "D",
        "text": "Permohonan rujuk"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Perkawinan tanpa akta nikah dapat diajukan permohonan itsbat nikah ke Pengadilan Agama.",
      "legalBasis": "Pasal 7 ayat (2) dan (3) Kompilasi Hukum Islam (KHI).",
      "analysis": 'Pasal 7 ayat (2) KHI menegaskan: "Dalam hal perkawinan tidak dapat dibuktikan dengan Akta Nikah, dapat diajukan itsbat nikahnya ke Pengadilan Agama." Tujuannya demi kepastian status hukum perkawinan dan perlindungan hak anak serta pasangan.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 391,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Saat Terjadinya Perceraian Talak",
    "question": "Dalam perkara Cerai Talak di Pengadilan Agama, ikatan perkawinan secara hukum dinyatakan putus beserta akibat-akibatnya terhitung sejak:",
    "options": [
      {
        "key": "A",
        "text": "Meninggalkan tempat kediaman bersama"
      },
      {
        "key": "B",
        "text": "Putusan permohonan cerai talak dibacakan majelis hakim"
      },
      {
        "key": "C",
        "text": "Ikrar Talak diucapkan oleh suami di depan sidang terbuka Pengadilan Agama"
      },
      {
        "key": "D",
        "text": "Buku nikah diserahkan kembali kepada Kantor Urusan Agama (KUA)"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Perceraian talak terjadi terhitung sejak saat ikrar talak diucapkan di depan sidang Pengadilan Agama.",
      "legalBasis": "Pasal 34 ayat (2) PP No. 9 Tahun 1975 jo. Pasal 70 ayat (1) UU No. 7 Tahun 1989 jo. Pasal 131 KHI.",
      "analysis": "Berdasarkan hukum acara peradilan agama, perkawinan dalam permohonan cerai talak baru sah putus sejak diucapkannya ikrar talak di depan sidang terbuka Pengadilan Agama, bukan sejak putusan izin mengikrarkan talak dijatuhkan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 392,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Rukun Perkawinan (Pasal 14 KHI)",
    "question": "Menurut Pasal 14 Kompilasi Hukum Islam (KHI), rukun perkawinan yang wajib dipenuhi dalam perkawinan Islam meliputi:",
    "options": [
      {
        "key": "A",
        "text": "Calon suami dan calon isteri saja"
      },
      {
        "key": "B",
        "text": "Wali nikah saja"
      },
      {
        "key": "C",
        "text": "Dua orang saksi dan ijab-kabul saja"
      },
      {
        "key": "D",
        "text": "Semua benar (Calon suami, calon isteri, wali nikah, dua orang saksi, dan ijab kabul)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Rukun nikah menurut Pasal 14 KHI terdiri dari calon suami, calon istri, wali nikah, dua orang saksi, dan ijab kabul.",
      "legalBasis": "Pasal 14 Kompilasi Hukum Islam (KHI) (Instruksi Presiden No. 1 Tahun 1991).",
      "analysis": 'Pasal 14 KHI menegaskan: "Untuk melaksanakan perkawinan harus ada: a. Calon Suami; b. Calon Isteri; c. Wali nikah; d. Dua orang saksi; dan e. Ijab dan Kabul." Ketiadaan salah satu rukun ini menyebabkan perkawinan batal atau tidak sah.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 393,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Tujuan Perkawinan (Pasal 3 KHI)",
    "question": "Tujuan perkawinan menurut Pasal 3 Kompilasi Hukum Islam (KHI) adalah:",
    "options": [
      {
        "key": "A",
        "text": "Untuk membentuk keluarga yang bahagia semata dengan memiliki keturunan yang sah"
      },
      {
        "key": "B",
        "text": "Untuk mewujudkan silaturahmi yang kekal dan penyatuan harta kekayaan"
      },
      {
        "key": "C",
        "text": "Untuk mewujudkan kehidupan rumah tangga yang sakinah, mawaddah, dan rahmah"
      },
      {
        "key": "D",
        "text": "Untuk membentuk keluarga yang kekal dan mandiri secara ekonomi"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Perkawinan bertujuan untuk mewujudkan kehidupan rumah tangga yang sakinah, mawaddah, dan rahmah.",
      "legalBasis": "Pasal 3 Kompilasi Hukum Islam (KHI) (Instruksi Presiden No. 1 Tahun 1991).",
      "analysis": 'Pasal 3 KHI menyatakan: "Perkawinan bertujuan untuk mewujudkan kehidupan rumah tangga yang sakinah, mawaddah, dan rahmah." Sedangkan Pasal 1 UU No. 1/1974 menekankan tujuan membentuk keluarga yang bahagia dan kekal berdasarkan Ketuhanan Yang Maha Esa.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 394,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Kompetensi Relatif Cerai Talak",
    "question": "Kepada Pengadilan Agama manakah seorang suami yang bermaksud menceraikan isterinya (Cerai Talak) harus mengajukan permohonan?",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Agama tempat perkawinan dahulu dilangsungkan"
      },
      {
        "key": "B",
        "text": "Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Termohon (isteri)"
      },
      {
        "key": "C",
        "text": "Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Pemohon (suami)"
      },
      {
        "key": "D",
        "text": "Pengadilan Agama di mana harta bersama berada"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Permohonan cerai talak diajukan ke Pengadilan Agama tempat kediaman Termohon (isteri).",
      "legalBasis": "Pasal 66 ayat (2) UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 129 KHI.",
      "analysis": "Pasal 66 ayat (2) UU No. 7 Tahun 1989 mengatur bahwa permohonan cerai talak diajukan kepada Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Termohon, kecuali apabila Termohon dengan sengaja meninggalkan tempat kediaman bersama tanpa izin Pemohon."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 395,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Pengertian Cerai Gugat",
    "question": "Dalam Hukum Acara Peradilan Agama, Cerai Gugat adalah gugatan perceraian yang diajukan oleh:",
    "options": [
      {
        "key": "A",
        "text": "Suami terhadap isteri untuk mendapatkan izin menjatuhkan talak"
      },
      {
        "key": "B",
        "text": "Kedua orang tua atau wali pihak yang bersengketa"
      },
      {
        "key": "C",
        "text": "Isteri atau kuasanya terhadap suami ke Pengadilan Agama"
      },
      {
        "key": "D",
        "text": "Jaksa Penuntut Umum demi ketertiban umum"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Cerai Gugat diajukan oleh isteri atau kuasanya kepada Pengadilan Agama.",
      "legalBasis": "Pasal 73 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 132 ayat (1) KHI.",
      "analysis": 'Gugatan perceraian yang diajukan oleh isteri atau kuasanya dinamakan "Cerai Gugat", sedangkan permohonan perceraian yang diajukan oleh suami dinamakan "Cerai Talak". Keduanya memiliki perbedaan mendasar dalam prosedur formil dan hak-hak pasca perceraian.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 396,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Kompetensi Relatif Cerai Gugat",
    "question": "Kepada Pengadilan Agama manakah seorang isteri mengajukan gugatan perceraian (Cerai Gugat) terhadap suaminya?",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Agama tempat mereka dahulu melangsungkan akad nikah"
      },
      {
        "key": "B",
        "text": "Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Penggugat (isteri)"
      },
      {
        "key": "C",
        "text": "Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Tergugat (suami)"
      },
      {
        "key": "D",
        "text": "Pengadilan Agama tempat orang tua Penggugat bertempat tinggal"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Gugatan cerai oleh isteri diajukan ke Pengadilan Agama tempat kediaman Penggugat (isteri).",
      "legalBasis": "Pasal 73 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 132 ayat (1) KHI.",
      "analysis": "Berdasarkan Pasal 73 ayat (1) UU No. 7 Tahun 1989 jo. Pasal 132 ayat (1) KHI, gugatan perceraian diajukan oleh isteri atau kuasanya kepada Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Penggugat, kecuali apabila Penggugat dengan sengaja meninggalkan tempat kediaman bersama tanpa izin Tergugat."
    },
    "difficulty": "Mudah"
  }
];

// src/data/advancedUpaBank.ts
var ADVANCED_UPA_BANK = [
  {
    "id": 397,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Kewenangan Mahkamah Konstitusi",
    "question": "Berdasarkan Pasal 24C ayat (1) UUD 1945 jo. Pasal 10 ayat (1) UU No. 24 Tahun 2003, manakah yang BUKAN merupakan wewenang Mahkamah Konstitusi?",
    "options": [
      {
        "key": "A",
        "text": "Menguji undang-undang terhadap Undang-Undang Dasar 1945."
      },
      {
        "key": "B",
        "text": "Memutus sengketa kewenangan lembaga negara yang kewenangannya diberikan oleh UUD 1945."
      },
      {
        "key": "C",
        "text": "Menguji peraturan perundang-undangan di bawah undang-undang terhadap undang-undang."
      },
      {
        "key": "D",
        "text": "Memutus pembubaran partai politik dan perselisihan hasil pemilihan umum."
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pengujian peraturan di bawah UU terhadap UU adalah kewenangan Mahkamah Agung, bukan MK.",
      "legalBasis": "Pasal 24A ayat (1) dan Pasal 24C ayat (1) UUD 1945.",
      "analysis": "Pasal 24A ayat (1) UUD 1945 memberikan wewenang pengujian peraturan perundang-undangan di bawah undang-undang terhadap undang-undang kepada Mahkamah Agung (MA). Mahkamah Konstitusi hanya berwenang menguji undang-undang terhadap UUD 1945."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 398,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Kedudukan Hukum (Legal Standing) Pemohon PUU",
    "question": "Berdasarkan Pasal 51 ayat (1) UU No. 24 Tahun 2003, pihak yang TIDAK memiliki kedudukan hukum (legal standing) sebagai Pemohon Pengujian Undang-Undang adalah...",
    "options": [
      {
        "key": "A",
        "text": "Perorangan warga negara Indonesia."
      },
      {
        "key": "B",
        "text": "Kesatuan masyarakat hukum adat sepanjang masih hidup."
      },
      {
        "key": "C",
        "text": "Warga negara asing yang berdomisili di Indonesia lebih dari 5 tahun berturut-turut."
      },
      {
        "key": "D",
        "text": "Badan hukum publik atau badan hukum privat."
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Warga negara asing tidak memiliki hak uji materil UU di MK karena bukan WNI yang memiliki hak konstitusional UUD 1945.",
      "legalBasis": "Pasal 51 ayat (1) UU No. 24 Tahun 2003 tentang MK.",
      "analysis": "Pasal 51 ayat (1) UU MK secara limitatif menentukan pemohon PUU adalah perorangan WNI, kesatuan masyarakat hukum adat, badan hukum publik/privat, atau lembaga negara yang hak konstitusionalnya dirugikan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 399,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Sifat Putusan Mahkamah Konstitusi",
    "question": "Putusan Mahkamah Konstitusi memperoleh kekuatan hukum tetap sejak...",
    "options": [
      {
        "key": "A",
        "text": "Selesai diucapkan dalam sidang pleno terbuka untuk umum."
      },
      {
        "key": "B",
        "text": "14 hari setelah salinan putusan dikirim kepada Presiden."
      },
      {
        "key": "C",
        "text": "Dimuat dalam Berita Negara Republik Indonesia."
      },
      {
        "key": "D",
        "text": "Disetujui oleh Dewan Perwakilan Rakyat."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Putusan MK berkekuatan hukum tetap sejak selesai diucapkan dalam sidang pleno terbuka untuk umum.",
      "legalBasis": "Pasal 47 UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi.",
      "analysis": "Pasal 47 UU MK mengatur bahwa putusan Mahkamah Konstitusi memperoleh kekuatan hukum tetap sejak selesai diucapkan dalam sidang pleno terbuka untuk umum dan bersifat final serta mengikat (erga omnes)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 400,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Putusan Inkonstitusional Bersyarat (Conditionally Unconstitutional)",
    "question": "Dalam praktik peradilan MK, amar putusan yang menyatakan suatu norma undang-undang bertentangan dengan UUD 1945 sepanjang tidak dimaknai sesuai tafsir yang dirumuskan oleh MK dinamakan...",
    "options": [
      {
        "key": "A",
        "text": "Conditionally Constitutional (Konstitusional Bersyarat)"
      },
      {
        "key": "B",
        "text": "Conditionally Unconstitutional (Inkonstitusional Bersyarat)"
      },
      {
        "key": "C",
        "text": "Ultra Petita Putusan"
      },
      {
        "key": "D",
        "text": "Niet Ontvankelijke Verklaard"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Putusan Inkonstitusional Bersyarat menyatakan pasal bertentangan dengan UUD jika tidak dibaca sesuai tafsir MK.",
      "legalBasis": "Pasal 56 ayat (2) dan ayat (3) jo. Pasal 57 Undang-Undang No. 24 Tahun 2003 tentang Mahkamah Konstitusi jo. UU No. 7 Tahun 2020.",
      "analysis": "Conditionally Unconstitutional berarti norma pasal yang diuji bertentangan secara bersyarat dengan konstitusi dan tidak mengikat jika tidak ditafsirkan sebagaimana amar putusan Mahkamah Konstitusi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 401,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Tenggang Waktu Pengujian Formil Undang-Undang",
    "question": "Berdasarkan Pasal 54 UU Mahkamah Konstitusi dan Peraturan MK, permohonan pengujian formil suatu undang-undang wajib diajukan dalam tenggang waktu paling lama...",
    "options": [
      {
        "key": "A",
        "text": "30 hari sejak UU diundangkan dalam Lembaran Negara."
      },
      {
        "key": "B",
        "text": "45 hari sejak UU diundangkan dalam Lembaran Negara."
      },
      {
        "key": "C",
        "text": "90 hari sejak UU disahkan oleh DPR."
      },
      {
        "key": "D",
        "text": "180 hari sejak UU berlaku efektif."
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Tenggang waktu pengujian formil undang-undang ke MK adalah 45 hari sejak diundangkan dalam Lembaran Negara RI.",
      "legalBasis": "Pasal 54 Undang-Undang No. 24 Tahun 2003 tentang Mahkamah Konstitusi jo. Pasal 42 PMK No. 2 Tahun 2021 tentang Tata Beracara PUU.",
      "analysis": "Mahkamah Konstitusi menetapkan bahwa permohonan pengujian formil harus diajukan dalam tenggang waktu 45 (empat puluh lima) hari sejak undang-undang tersebut diundangkan dalam Lembaran Negara Republik Indonesia."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 402,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Komposisi Hakim Konstitusi",
    "question": "Mahkamah Konstitusi mempunyai 9 (sembilan) orang hakim konstitusi yang diajukan masing-masing oleh...",
    "options": [
      {
        "key": "A",
        "text": "3 orang oleh MA, 3 orang oleh DPR, dan 3 orang oleh Presiden."
      },
      {
        "key": "B",
        "text": "4 orang oleh DPR dan 5 orang oleh Presiden."
      },
      {
        "key": "C",
        "text": "3 orang oleh KY, 3 orang oleh MA, dan 3 orang oleh DPR."
      },
      {
        "key": "D",
        "text": "9 orang dipilih langsung oleh rakyat melalui pemilu."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "9 hakim konstitusi diajukan masing-masing 3 orang oleh Mahkamah Agung, DPR, dan Presiden.",
      "legalBasis": "Pasal 24C ayat (3) UUD 1945 jo. Pasal 18 ayat (1) UU No. 24 Tahun 2003.",
      "analysis": "Pasal 24C ayat (3) UUD 1945 menegaskan: Mahkamah Konstitusi mempunyai 9 orang anggota hakim konstitusi yang ditetapkan oleh Presiden, yang diajukan masing-masing 3 orang oleh MA, 3 orang oleh DPR, dan 3 orang oleh Presiden."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 403,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Sengketa Kewenangan Lembaga Negara (SKLN)",
    "question": "Dalam perkara Sengketa Kewenangan Lembaga Negara (SKLN), lembaga negara yang dapat menjadi pihak adalah lembaga negara yang kewenangannya diberikan oleh...",
    "options": [
      {
        "key": "A",
        "text": "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945."
      },
      {
        "key": "B",
        "text": "Undang-Undang pembentukan lembaga negara bersangkutan."
      },
      {
        "key": "C",
        "text": "Peraturan Pemerintah atau Keputusan Presiden."
      },
      {
        "key": "D",
        "text": "Surat Keputusan Menteri Dalam Negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pemohon SKLN wajib merupakan lembaga negara yang kewenangannya diberikan langsung oleh UUD 1945.",
      "legalBasis": "Pasal 61 ayat (1) UU No. 24 Tahun 2003 jo. PMK No. 08/PMK/2006.",
      "analysis": "Pasal 61 ayat (1) UU MK: Pemohon adalah lembaga negara yang kewenangannya diberikan oleh UUD 1945 yang mempunyai kepentingan langsung terhadap kewenangan yang dipersengketakan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 404,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Tenggang Waktu Perbaikan Permohonan di MK",
    "question": "Dalam pemeriksaan pendahuluan di MK, panel hakim memberikan nasihat perbaikan. Jangka waktu yang diberikan kepada Pemohon untuk memperbaiki permohonan adalah...",
    "options": [
      {
        "key": "A",
        "text": "Paling lama 7 hari kerja."
      },
      {
        "key": "B",
        "text": "Paling lama 14 hari."
      },
      {
        "key": "C",
        "text": "Paling lama 30 hari."
      },
      {
        "key": "D",
        "text": "Paling lama 60 hari."
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pemohon diberikan jangka waktu perbaikan permohonan paling lama 14 hari.",
      "legalBasis": "Pasal 39 ayat (2) UU No. 24 Tahun 2003 tentang MK.",
      "analysis": "Berdasarkan Pasal 39 ayat (2) UU Mahkamah Konstitusi, pemohon wajib melengkapi dan/atau memperbaiki permohonan dalam jangka waktu paling lama 14 (empat belas) hari terhitung sejak sidang pemeriksaan pendahuluan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 405,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Perselisihan Hasil Pemilu Presiden dan Wapres (PHPU)",
    "question": "Permohonan keberatan terhadap penetapan hasil pemilihan umum Presiden dan Wakil Presiden wajib diajukan ke Mahkamah Konstitusi dalam tenggang waktu...",
    "options": [
      {
        "key": "A",
        "text": "Paling lama 3 x 24 jam sejak diumumkan penetapan oleh KPU."
      },
      {
        "key": "B",
        "text": "Paling lama 7 hari setelah pengumuman KPU."
      },
      {
        "key": "C",
        "text": "Paling lama 14 hari setelah pemungutan suara."
      },
      {
        "key": "D",
        "text": "Paling lama 30 hari kerja."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Keberatan hasil Pilpres wajib diajukan ke MK paling lambat 3 x 24 jam sejak penetapan KPU.",
      "legalBasis": "Pasal 74 ayat (3) UU No. 24 Tahun 2003 jo. Pasal 475 UU No. 7 Tahun 2017.",
      "analysis": "Pasal 74 ayat (3) UU MK jo. UU Pemilu menetapkan batas waktu ketat permohonan perselisihan hasil pemilu presiden dan wapres yaitu paling lambat 3 x 24 jam (tiga kali dua puluh empat jam) sejak penetapan perolehan suara secara nasional diumumkan oleh KPU."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 406,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Kewajiban MK Terkait Pendapat DPR tentang Pemakzulan",
    "question": "Berdasarkan Pasal 24C ayat (2) UUD 1945, Mahkamah Konstitusi wajib memeriksa, mengadili, dan memutus dengan seadil-adilnya terhadap pendapat DPR mengenai dugaan pelanggaran hukum oleh...",
    "options": [
      {
        "key": "A",
        "text": "Ketua Mahkamah Agung."
      },
      {
        "key": "B",
        "text": "Presiden dan/atau Wakil Presiden."
      },
      {
        "key": "C",
        "text": "Ketua Dewan Komisioner OJK."
      },
      {
        "key": "D",
        "text": "Jaksa Agung Republik Indonesia."
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "MK mengadili pendapat DPR mengenai dugaan pelanggaran hukum oleh Presiden dan/atau Wakil Presiden.",
      "legalBasis": "Pasal 24C ayat (2) jo. Pasal 7B UUD 1945.",
      "analysis": "MK berwenang mengadili pendapat DPR bahwa Presiden dan/atau Wapres telah melakukan pelanggaran hukum berupa pengkhianatan terhadap negara, korupsi, penyuapan, tindak pidana berat lainnya, atau perbuatan tercela."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 407,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Klausula Arbitrase Memutus Kompetensi Pengadilan",
    "question": "Pasal 3 UU No. 30 Tahun 1999 menentukan bahwa adanya klausula arbitrase tertulis dalam perjanjian mengakibatkan Pengadilan Negeri...",
    "options": [
      {
        "key": "A",
        "text": "Tidak berwenang untuk mengadili sengketa para pihak yang telah terikat dalam perjanjian arbitrase."
      },
      {
        "key": "B",
        "text": "Tetap berwenang memeriksa sengketa jika penggugat bersedia membayar panjar perkara."
      },
      {
        "key": "C",
        "text": "Dapat membatalkan klausula arbitrase tersebut secara sepihak."
      },
      {
        "key": "D",
        "text": "Wajib menyidangkan perkara perdata tersebut sampai tingkat banding."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pengadilan Negeri tidak berwenang mengadili sengketa yang telah memuat klausula arbitrase tertulis.",
      "legalBasis": "Pasal 3 jo. Pasal 11 UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      "analysis": "Pasal 3 UU 30/1999 menegaskan: Pengadilan Negeri tidak berwenang untuk mengadili sengketa para pihak yang telah terikat dalam perjanjian arbitrase. Hakim PN wajib menyatakan diri tidak berwenang mengadili (eksepsi kompetensi absolut)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 408,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Pendaftaran Putusan Arbitrase Nasional",
    "question": "Putusan arbitrase nasional wajib didaftarkan oleh arbiter atau kuasanya ke Kepaniteraan Pengadilan Negeri dalam tenggang waktu...",
    "options": [
      {
        "key": "A",
        "text": "Paling lama 14 hari sejak putusan dijatuhkan."
      },
      {
        "key": "B",
        "text": "Paling lama 30 hari sejak tanggal putusan diucapkan."
      },
      {
        "key": "C",
        "text": "Paling lama 90 hari kalender."
      },
      {
        "key": "D",
        "text": "Paling lama 180 hari sejak diterimanya putusan."
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Putusan arbitrase nasional wajib diserahkan dan didaftarkan ke PN dalam waktu 30 hari.",
      "legalBasis": "Pasal 59 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      "analysis": "Pasal 59 ayat (1) UU 30/1999 menegaskan: Dalam waktu paling lama 30 (tiga puluh) hari terhitung sejak tanggal putusan diucapkan, lembar asli atau salinan otentik putusan arbitrase diserahkan dan didaftarkan oleh arbiter atau kuasanya kepada Panitera Pengadilan Negeri."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 409,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Akibat Hukum Tidak Didaftarkannya Putusan Arbitrase",
    "question": "Apabila putusan arbitrase nasional tidak didaftarkan ke Pengadilan Negeri dalam tenggang waktu 30 hari sebagaimana disyaratkan UU No. 30 Tahun 1999, maka akibat hukumnya adalah...",
    "options": [
      {
        "key": "A",
        "text": "Putusan arbitrase tersebut tidak dapat dilaksanakan (non-executable)."
      },
      {
        "key": "B",
        "text": "Arbiter dipidana kurungan 1 tahun."
      },
      {
        "key": "C",
        "text": "Perkara otomatis dilimpahkan ke Pengadilan Tinggi."
      },
      {
        "key": "D",
        "text": "Pihak yang kalah wajib membayar ganti rugi 2 kali lipat."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Putusan arbitrase yang tidak didaftarkan dalam 30 hari tidak dapat dilaksanakan (eksekusi lelang tertutup).",
      "legalBasis": "Pasal 59 ayat (4) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      "analysis": "Pasal 59 ayat (4) UU 30/1999 mengatur sanksi tegas: Tidak dipenuhinya ketentuan pendaftaran dalam 30 hari berakibat putusan arbitrase tidak dapat dilaksanakan eksekusinya."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 410,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Alasan Pembatalan Putusan Arbitrase",
    "question": "Berdasarkan Pasal 70 UU No. 30 Tahun 1999, terhadap putusan arbitrase para pihak dapat mengajukan permohonan pembatalan kepada Pengadilan Negeri apabila...",
    "options": [
      {
        "key": "A",
        "text": "Surat atau dokumen yang diajukan dalam pemeriksaan diakui palsu atau dinyatakan palsu setelah putusan dijatuhkan."
      },
      {
        "key": "B",
        "text": "Nilai ganti rugi yang diputus dirasa terlalu besar oleh salah satu pihak."
      },
      {
        "key": "C",
        "text": "Arbiter tidak bergelar Sarjana Hukum."
      },
      {
        "key": "D",
        "text": "Sidang arbitrase diselenggarakan di hotel berbintang."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Dokumen palsu yang terbukti pasca-putusan adalah alasan sah permohonan pembatalan putusan arbitrase.",
      "legalBasis": "Pasal 70 huruf a UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      "analysis": "Pasal 70 mengatur 3 alasan limitatif pembatalan: a. Surat/dokumen palsu; b. Ditemukan dokumen menentukan yang disembunyikan lawan; c. Putusan diambil dari hasil tipu muslihat yang dilakukan oleh salah satu pihak."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 411,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Tenggang Waktu Mengajukan Pembatalan Putusan Arbitrase",
    "question": "Permohonan pembatalan putusan arbitrase ke Pengadilan Negeri harus diajukan secara tertulis dalam waktu paling lama...",
    "options": [
      {
        "key": "A",
        "text": "14 hari kalender."
      },
      {
        "key": "B",
        "text": "30 hari terhitung sejak hari penyerahan dan pendaftaran putusan arbitrase kepada Panitera PN."
      },
      {
        "key": "C",
        "text": "60 hari sejak tanggal putusan dibacakan."
      },
      {
        "key": "D",
        "text": "90 hari sejak upaya mediasi gagal."
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Permohonan pembatalan putusan arbitrase diajukan paling lama 30 hari sejak pendaftaran putusan di PN.",
      "legalBasis": "Pasal 71 UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      "analysis": "Pasal 71 UU 30/1999 menentukan permohonan pembatalan putusan arbitrase harus diajukan secara tertulis dalam waktu paling lama 30 (tiga puluh) hari terhitung sejak hari penyerahan dan pendaftaran putusan arbitrase kepada Panitera Pengadilan Negeri."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 412,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Eksekusi Putusan Arbitrase Internasional",
    "question": "Berdasarkan Pasal 65 UU No. 30 Tahun 1999, lembaga peradilan di Indonesia yang berwenang menangani masalah pengakuan dan pelaksanaan Putusan Arbitrase Internasional adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Negeri Jakarta Pusat"
      },
      {
        "key": "B",
        "text": "Mahkamah Agung Republik Indonesia"
      },
      {
        "key": "C",
        "text": "Kementerian Luar Negeri"
      },
      {
        "key": "D",
        "text": "Pengadilan Tinggi DKI Jakarta"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pengakuan dan eksekuatur putusan arbitrase internasional adalah wewenang eksklusif PN Jakarta Pusat.",
      "legalBasis": "Pasal 65 UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      "analysis": "Pasal 65 UU 30/1999 menentukan: Yang berwenang menangani masalah pengakuan dan pelaksanaan Putusan Arbitrase Internasional adalah Pengadilan Negeri Jakarta Pusat."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 413,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Kriteria Arbiter Menurut UU 30/1999",
    "question": "Berdasarkan Pasal 12 ayat (1) UU No. 30 Tahun 1999, syarat yang WAJIB dipenuhi untuk dapat diangkat sebagai arbiter adalah...",
    "options": [
      {
        "key": "A",
        "text": "Cakap melakukan tindakan hukum dan berumur paling rendah 35 tahun."
      },
      {
        "key": "B",
        "text": "Merupakan pegawai negeri sipil aktif di kementerian teknis."
      },
      {
        "key": "C",
        "text": "Memiliki hubungan sedarah dengan salah satu pihak berperkara."
      },
      {
        "key": "D",
        "text": "Memiliki izin advokat asing."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Arbiter wajib cakap hukum, berumur minimal 35 tahun, dan tidak memiliki benturan kepentingan.",
      "legalBasis": "Pasal 12 ayat (1) huruf a dan b UU No. 30 Tahun 1999.",
      "analysis": "Syarat arbiter Pasal 12: a. Cakap hukum; b. Berumur paling rendah 35 tahun; c. Tidak memiliki hubungan sedarah/semenda sampai derajat kedua; d. Tidak memiliki kepentingan finansial; e. Memiliki keahlian dan pengalaman kerja minimal 15 tahun."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 414,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Prinsip Ex Aequo Et Bono dalam Arbitrase",
    "question": "Arbiter dapat memutus perkara berdasarkan asas keadilan dan kepatutan (ex aequo et bono) HANYA APABILA...",
    "options": [
      {
        "key": "A",
        "text": "Diberikan wewenang secara tegas oleh para pihak yang bersengketa."
      },
      {
        "key": "B",
        "text": "Tidak ada undang-undang tertulis yang mengatur materi sengketa."
      },
      {
        "key": "C",
        "text": "Disetujui oleh Menteri Hukum dan HAM."
      },
      {
        "key": "D",
        "text": "Tergugat tidak hadir dalam persidangan arbitrase."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Arbiter hanya boleh memutus ex aequo et bono jika diberi kewenangan tegas oleh para pihak.",
      "legalBasis": "Pasal 56 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      "analysis": "Pasal 56 ayat (1) UU 30/1999: Arbiter atau majelis arbitrase memutus sengketa berdasarkan ketentuan hukum, atau berdasarkan keadilan dan kepatutan (ex aequo et bono), apabila para pihak menyetujui."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 415,
    "category": "Hukum Acara PHI",
    "topicTag": "4 Jenis Perselisihan Hubungan Industrial",
    "question": "Berdasarkan Pasal 2 UU No. 2 Tahun 2004, perselisihan hubungan industrial meliputi 4 jenis perselisihan, KECUALI...",
    "options": [
      {
        "key": "A",
        "text": "Perselisihan Hak"
      },
      {
        "key": "B",
        "text": "Perselisihan Kepentingan"
      },
      {
        "key": "C",
        "text": "Perselisihan Pemutusan Hubungan Kerja (PHK)"
      },
      {
        "key": "D",
        "text": "Perselisihan Pidana Penggelapan Uang Perusahaan"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Jenis perselisihan hubungan industrial adalah hak, kepentingan, PHK, dan antar SP dalam satu perusahaan.",
      "legalBasis": "Pasal 2 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 2 UU 2/2004 mengatur limitatif 4 jenis perselisihan hubungan industrial: perselisihan hak, perselisihan kepentingan, perselisihan pemutusan hubungan kerja, dan perselisihan antar serikat pekerja/buruh hanya dalam satu perusahaan. Pidana penggelapan masuk yurisdiksi peradilan pidana umum."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 416,
    "category": "Hukum Acara PHI",
    "topicTag": "Penyelesaian Tripartit Konsiliasi dan Mediasi",
    "question": "Apabila perundingan bipartit gagal, salah satu pihak mencatatkan perselisihan ke instansi ketenagakerjaan setempat. Penyelesaian perselisihan hak HANYA dapat dilimpahkan melalui...",
    "options": [
      {
        "key": "A",
        "text": "Mediasi Hubungan Industrial"
      },
      {
        "key": "B",
        "text": "Konsiliasi Hubungan Industrial"
      },
      {
        "key": "C",
        "text": "Arbitrase Hubungan Industrial"
      },
      {
        "key": "D",
        "text": "Musyawarah RT/RW"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Perselisihan hak hanya dapat diselesaikan melalui mediasi, tidak dapat melalui konsiliasi atau arbitrase.",
      "legalBasis": "Pasal 8 sampai Pasal 14 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 14 jo. Pasal 29 UU 2/2004 mengatur bahwa perselisihan hak hanya dapat ditangani oleh Mediator (pegawai instansi ketenagakerjaan pemerintah). Konsiliasi dan Arbitrase tidak berwenang menyelesaikan perselisihan hak normatif."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 417,
    "category": "Hukum Acara PHI",
    "topicTag": "Anjuran Tertulis Mediator",
    "question": "Dalam hal mediasi tidak mencapai kesepakatan damai, mediator hubungan industrial mengeluarkan...",
    "options": [
      {
        "key": "A",
        "text": "Anjuran Tertulis"
      },
      {
        "key": "B",
        "text": "Putusan Eksekusi"
      },
      {
        "key": "C",
        "text": "Surat Perintah Sita Jaminan"
      },
      {
        "key": "D",
        "text": "Penetapan Denda Administratif"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Mediator mengeluarkan anjuran tertulis jika mediasi tidak menghasilkan kesepakatan damai.",
      "legalBasis": "Pasal 13 ayat (2) huruf a UU No. 2 Tahun 2004.",
      "analysis": "Pasal 13 ayat (2) UU 2/2004 menyatakan bahwa dalam hal tidak tercapai kesepakatan penyelesaian melalui mediasi, maka mediator mengeluarkan anjuran tertulis dalam waktu paling lambat 10 hari sejak sidang mediasi pertama."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 418,
    "category": "Hukum Acara PHI",
    "topicTag": "Tenggang Waktu Jawaban Atas Anjuran Tertulis",
    "question": "Para pihak yang menerima anjuran tertulis dari mediator wajib memberikan jawaban tertulis menyetujui atau menolak dalam jangka waktu...",
    "options": [
      {
        "key": "A",
        "text": "Selambat-lambatnya 10 hari kerja setelah menerima anjuran tertulis."
      },
      {
        "key": "B",
        "text": "Selambat-lambatnya 14 hari kalender."
      },
      {
        "key": "C",
        "text": "Selambat-lambatnya 30 hari."
      },
      {
        "key": "D",
        "text": "Paling lambat 3 hari kerja."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Jawaban atas anjuran mediator wajib diberikan selambat-lambatnya 10 hari kerja.",
      "legalBasis": "Pasal 13 ayat (2) huruf b UU No. 2 Tahun 2004.",
      "analysis": "Pasal 13 ayat (2) huruf b UU 2/2004: Para pihak harus sudah memberikan jawaban secara tertulis kepada mediator yang isinya menyetujui atau menolak anjuran tertulis dalam waktu selambat-lambatnya 10 (sepuluh) hari kerja setelah menerima anjuran tertulis."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 419,
    "category": "Hukum Acara PHI",
    "topicTag": "Gugatan ke Pengadilan Hubungan Industrial",
    "question": "Apabila salah satu pihak menolak anjuran tertulis mediator, para pihak dapat melanjutkan penyelesaian dengan mengajukan gugatan ke...",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Hubungan Industrial pada Pengadilan Negeri setempat."
      },
      {
        "key": "B",
        "text": "Pengadilan Tata Usaha Negara (PTUN)."
      },
      {
        "key": "C",
        "text": "Kementerian Ketenagakerjaan RI secara langsung."
      },
      {
        "key": "D",
        "text": "Pengadilan Niaga."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Jika anjuran ditolak, gugatan diajukan ke Pengadilan Hubungan Industrial pada PN.",
      "legalBasis": "Pasal 14 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 14 ayat (1) UU 2/2004 menentukan jika salah satu pihak menolak anjuran tertulis mediator, salah satu pihak atau para pihak dapat mengajukan gugatan kepada Pengadilan Hubungan Industrial pada Pengadilan Negeri setempat dengan melampirkan risalah mediasi."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 420,
    "category": "Hukum Acara PHI",
    "topicTag": "Upaya Hukum Terhadap Putusan PHI Mengenai Hak dan PHK",
    "question": "Terhadap putusan Pengadilan Hubungan Industrial (PHI) mengenai perselisihan hak dan perselisihan PHK, upaya hukum yang dapat diajukan para pihak adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kasasi langsung ke Mahkamah Agung dalam tenggang waktu 14 hari kerja."
      },
      {
        "key": "B",
        "text": "Banding ke Pengadilan Tinggi dalam tenggang waktu 14 hari."
      },
      {
        "key": "C",
        "text": "Banding administratif ke Menteri Ketenagakerjaan."
      },
      {
        "key": "D",
        "text": "Tidak ada upaya hukum apapun karena putusan PHI selalu inkracht."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Putusan PHI mengenai hak dan PHK dapat langsung diajukan kasasi ke Mahkamah Agung.",
      "legalBasis": "Pasal 110 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 110 UU 2/2004 menegaskan terhadap putusan PHI mengenai perselisihan hak dan PHK tidak ada upaya banding ke PT, melainkan langsung diajukan permohonan kasasi kepada Mahkamah Agung selambat-lambatnya 14 (empat belas) hari kerja."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 421,
    "category": "Hukum Acara PHI",
    "topicTag": "Putusan PHI yang Berkekuatan Hukum Tetap (Final and Binding)",
    "question": "Putusan Pengadilan Hubungan Industrial (PHI) pada Pengadilan Negeri mengenai jenis perselisihan apakah yang bersifat final dan TIDAK dapat diajukan kasasi ke Mahkamah Agung?",
    "options": [
      {
        "key": "A",
        "text": "Perselisihan Kepentingan dan Perselisihan Antar Serikat Pekerja dalam satu perusahaan."
      },
      {
        "key": "B",
        "text": "Perselisihan Hak Normatif Upah Lembur."
      },
      {
        "key": "C",
        "text": "Perselisihan Pemutusan Hubungan Kerja (PHK) sepihak."
      },
      {
        "key": "D",
        "text": "Perselisihan Pesangon Pensiun."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Putusan PHI tingkat pertama mengenai perselisihan kepentingan dan antar SP bersifat akhir dan tetap.",
      "legalBasis": "Pasal 56 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 56 UU 2/2004 menegaskan bahwa Pengadilan Hubungan Industrial bertugas dan berwenang memeriksa dan memutus di tingkat pertama dan terakhir mengenai perselisihan kepentingan dan perselisihan antar serikat pekerja/buruh dalam satu perusahaan."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 422,
    "category": "Hukum Acara PHI",
    "topicTag": "Pembebasan Biaya Perkara PHI di Bawah 150 Juta Rupiah",
    "question": "Berdasarkan Pasal 58 UU No. 2 Tahun 2004, dalam proses beracara di Pengadilan Hubungan Industrial, pihak pekerja/buruh tidak dikenakan biaya perkara apabila nilai gugatannya...",
    "options": [
      {
        "key": "A",
        "text": "Di bawah Rp150.000.000,00 (seratus lima puluh juta rupiah)."
      },
      {
        "key": "B",
        "text": "Di bawah Rp50.000.000,00."
      },
      {
        "key": "C",
        "text": "Di bawah Rp500.000.000,00."
      },
      {
        "key": "D",
        "text": "Bebas biaya perkara hanya jika disetujui presiden."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Gugatan PHI dengan nilai tuntutan di bawah Rp150.000.000,00 dibebaskan dari biaya perkara.",
      "legalBasis": "Pasal 58 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 58 UU 2/2004 mengatur: Dalam proses beracara di Pengadilan Hubungan Industrial, pihak yang nilai gugatannya di bawah Rp150.000.000,00 tidak dikenakan biaya perkara termasuk biaya eksekusi yang dibebankan kepada anggaran negara."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 423,
    "category": "Hukum Acara PTUN",
    "topicTag": "Upaya Administratif Wajib Sebelum Gugat ke PTUN",
    "question": "Berdasarkan Pasal 75 sampai Pasal 78 UU No. 30 Tahun 2014 jo. PERMA No. 6 Tahun 2018, warga masyarakat yang dirugikan oleh Keputusan/Tindakan Administrasi Pemerintahan WAJIB menempuh...",
    "options": [
      {
        "key": "A",
        "text": "Upaya administratif (keberatan dan banding administratif) sebelum mengajukan gugatan ke PTUN."
      },
      {
        "key": "B",
        "text": "Laporan pidana penipuan ke Mabes Polri terlebih dahulu."
      },
      {
        "key": "C",
        "text": "Gugatan perdata ganti rugi PMH ke Pengadilan Negeri."
      },
      {
        "key": "D",
        "text": "Uji materiil ke Mahkamah Konstitusi."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Upaya administratif (keberatan & banding administratif) wajib ditempuh sebelum menggugat ke PTUN.",
      "legalBasis": "Pasal 75 UU No. 30 Tahun 2014 jo. PERMA No. 6 Tahun 2018.",
      "analysis": "Pasal 75 UU 30/2014 jo. PERMA 6/2018 menegaskan Pengadilan TUN berwenang memeriksa sengketa tindakan pemerintahan setelah warga masyarakat menempuh seluruh upaya administratif yang tersedia (keberatan kepada atasan pejabat penerbit KTUN)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 424,
    "category": "Hukum Acara PTUN",
    "topicTag": "Fiktif Positif UU Administrasi Pemerintahan",
    "question": "Berdasarkan Pasal 53 UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan, apabila Badan/Pejabat Pemerintahan tidak menetapkan keputusan dalam batas waktu yang ditentukan, maka permohonan tersebut dianggap...",
    "options": [
      {
        "key": "A",
        "text": "Dikabulkan secara hukum (Fiktif Positif)."
      },
      {
        "key": "B",
        "text": "Ditolak secara diam-diam (Fiktif Negatif)."
      },
      {
        "key": "C",
        "text": "Batal demi hukum."
      },
      {
        "key": "D",
        "text": "Kedaluwarsa dan tidak dapat diajukan kembali."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Diamnya pejabat atas permohonan izin dalam UU 30/2014 diartikan dikabulkan (fiktif positif).",
      "legalBasis": "Pasal 53 UU No. 30 Tahun 2014 jo. PERMA No. 2 Tahun 2019.",
      "analysis": "Berbeda dengan konsep fiktif negatif Pasal 3 UU 5/1986, Pasal 53 UU 30/2014 menganut doktrin fiktif positif di mana tidak dijawabnya permohonan dalam waktu paling lama 10 hari kerja dianggap dikabulkan secara hukum."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 425,
    "category": "Hukum Acara PTUN",
    "topicTag": "Prosedur Dismissal oleh Ketua PTUN",
    "question": "Dalam Rapat Permusyawaratan (Dismissal Process), Ketua PTUN berwenang mengeluarkan penetapan bahwa gugatan tidak dapat diterima atau tidak berdasar apabila...",
    "options": [
      {
        "key": "A",
        "text": "Gugatan tersebut nyata-nyata tidak termasuk dalam wewenang Pengadilan TUN."
      },
      {
        "key": "B",
        "text": "Tergugat merupakan pejabat setingkat menteri."
      },
      {
        "key": "C",
        "text": "Penggugat didampingi oleh lebih dari satu advokat."
      },
      {
        "key": "D",
        "text": "Surat gugatan ditulis dengan huruf kapital semua."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Ketua PTUN menolak gugatan melalui penetapan dismissal jika gugatan bukan wewenang PTUN.",
      "legalBasis": "Pasal 62 ayat (1) huruf a UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Pasal 62 ayat (1) UU 5/1986 mengatur rapat permusyawaratan di mana Ketua Pengadilan berwenang memutus dengan penetapan dismissal jika pokok gugatan tidak termasuk wewenang pengadilan, syarat gugatan tidak dipenuhi, atau gugatan prematur."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 426,
    "category": "Hukum Acara PTUN",
    "topicTag": "Upaya Perlawanan Terhadap Penetapan Dismissal",
    "question": "Terhadap penetapan dismissal Ketua PTUN yang menyatakan gugatan tidak dapat diterima, Penggugat dapat mengajukan upaya hukum...",
    "options": [
      {
        "key": "A",
        "text": "Perlawanan (Verzet) kepada Pengadilan dalam tenggang waktu 14 hari."
      },
      {
        "key": "B",
        "text": "Banding langsung ke Pengadilan Tinggi TUN."
      },
      {
        "key": "C",
        "text": "Kasasi ke Mahkamah Agung."
      },
      {
        "key": "D",
        "text": "Praperadilan ke Pengadilan Negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Upaya hukum terhadap penetapan dismissal adalah Perlawanan (Verzet) dalam waktu 14 hari.",
      "legalBasis": "Pasal 62 ayat (3) UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Pasal 62 ayat (3) UU PTUN: Terhadap penetapan dismissal dapat diajukan perlawanan kepada Pengadilan dalam tenggang waktu empat belas hari setelah penetapan diucapkan atau diberitahukan secara patut."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 427,
    "category": "Hukum Acara PTUN",
    "topicTag": "Penundaan Pelaksanaan KTUN (Schorsing)",
    "question": "Berdasarkan Pasal 67 ayat (2) UU No. 5 Tahun 1986, Penggugat dapat memohon penundaan pelaksanaan KTUN (schorsing) selama pemeriksaan sengketa berlangsung apabila...",
    "options": [
      {
        "key": "A",
        "text": "Terdapat keadaan mendesak yang mengakibatkan kepentingan Penggugat sangat dirugikan jika KTUN tetap dilaksanakan."
      },
      {
        "key": "B",
        "text": "Tergugat belum menyerahkan jawaban pertama."
      },
      {
        "key": "C",
        "text": "Penggugat berjanji memberikan ganti rugi deposit uang ke bank."
      },
      {
        "key": "D",
        "text": "Terdapat sengketa perdata lain di Pengadilan Negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Penundaan KTUN dapat dikabulkan jika ada keadaan sangat mendesak yang merugikan penggugat.",
      "legalBasis": "Pasal 67 ayat (2) dan ayat (4) UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Pasal 67 ayat (4) UU PTUN menyatakan permohonan penundaan dapat dikabulkan hanya apabila terdapat keadaan yang sangat mendesak yang mengakibatkan kepentingan penggugat sangat dirugikan jika KTUN yang digugat itu tetap dilaksanakan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 428,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Hak Imunitas Advokat di Luar Pengadilan",
    "question": "Berdasarkan Putusan Mahkamah Konstitusi No. 26/PUU-XI/2013, hak imunitas advokat menurut Pasal 16 UU No. 18 Tahun 2003 berlaku...",
    "options": [
      {
        "key": "A",
        "text": "Baik di dalam maupun di luar sidang pengadilan dengan itikad baik untuk kepentingan pembelaan klien."
      },
      {
        "key": "B",
        "text": "Hanya terbatas saat advokat berbicara di ruang sidang pengadilan saja."
      },
      {
        "key": "C",
        "text": "Hanya jika didampingi oleh pimpinan organisasi advokat."
      },
      {
        "key": "D",
        "text": "Hanya untuk advokat yang sudah berpraktik lebih dari 10 tahun."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Hak imunitas advokat melindungi advokat baik di dalam maupun di luar pengadilan sepanjang beritikad baik.",
      "legalBasis": "Pasal 16 UU No. 18 Tahun 2003 jo. Putusan MK No. 26/PUU-XI/2013.",
      "analysis": "MK memperluas tafsir Pasal 16 UU Advokat: Advokat tidak dapat dituntut baik secara perdata maupun pidana dalam menjalankan tugas profesinya dengan itikad baik untuk kepentingan pembelaan klien dalam sidang pengadilan maupun di luar sidang pengadilan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 429,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Larangan Menjamin Kemenangan Perkara",
    "question": "Berdasarkan Pasal 4 huruf c Kode Etik Advokat Indonesia (KEAI), advokat TIDAK DIBENARKAN...",
    "options": [
      {
        "key": "A",
        "text": "Menjamin kepada kliennya bahwa perkara yang ditanganinya akan menang."
      },
      {
        "key": "B",
        "text": "Menolak perkara yang bukan bidang keahliannya."
      },
      {
        "key": "C",
        "text": "Menerima honorarium secara bertahap."
      },
      {
        "key": "D",
        "text": "Mengajukan perdamaian di luar persidangan."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Advokat dilarang keras menjamin kepada klien bahwa perkaranya pasti akan menang.",
      "legalBasis": "Pasal 4 huruf c Kode Etik Advokat Indonesia (KEAI) 2002.",
      "analysis": "Pasal 4 huruf c KEAI: Advokat tidak dibenarkan menjamin kepada kliennya bahwa perkara yang ditanganinya akan menang. Advokat terikat pada perikatan ikhtiar (inspanningsverbintenis), bukan perikatan hasil (resultaatverbintenis)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 430,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Larangan Membebani Klien Biaya yang Tidak Perlu",
    "question": "Berdasarkan Pasal 4 huruf d KEAI, dalam menentukan besarnya honorarium, advokat dilarang...",
    "options": [
      {
        "key": "A",
        "text": "Membebani klien dengan biaya-biaya yang tidak perlu."
      },
      {
        "key": "B",
        "text": "Membuat perjanjian honorarium secara tertulis."
      },
      {
        "key": "C",
        "text": "Mempertimbangkan kemampuan finansial klien."
      },
      {
        "key": "D",
        "text": "Memberikan diskon kepada klien miskin."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Advokat dilarang membebani klien dengan biaya honorarium fiktif atau yang tidak perlu.",
      "legalBasis": "Pasal 4 huruf d Kode Etik Advokat Indonesia (KEAI).",
      "analysis": "Pasal 4 huruf d KEAI menegaskan bahwa dalam menentukan besarnya honorarium, advokat wajib mempertimbangkan kemampuan klien dan dilarang membebani klien dengan biaya-biaya yang tidak perlu."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 431,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Hubungan Advokat dengan Teman Sejawat",
    "question": "Berdasarkan Pasal 5 huruf a KEAI, hubungan antara teman sejawat advokat harus dilandasi oleh sikap...",
    "options": [
      {
        "key": "A",
        "text": "Saling menghargai, saling menghormati, dan saling mempercayai."
      },
      {
        "key": "B",
        "text": "Saling bersaing menjatuhkan reputasi di media massa."
      },
      {
        "key": "C",
        "text": "Menolak menyapa jika menjadi lawan perkara."
      },
      {
        "key": "D",
        "text": "Saling merebut klien dengan cara menurunkan tarif honorarium."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Hubungan sesama advokat harus dilandasi sikap saling menghormati dan menghargai.",
      "legalBasis": "Pasal 5 huruf a Kode Etik Advokat Indonesia (KEAI).",
      "analysis": "Pasal 5 huruf a KEAI menentukan bahwa hubungan antara teman sejawat Advokat harus dilandasi sikap saling menghormati, saling menghargai dan saling mempercayai, serta tidak boleh menggunakan kata-kata yang tidak sopan baik lisan maupun tertulis."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 432,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Kerahasiaan Hubungan Advokat dan Klien (Privilege)",
    "question": "Berdasarkan Pasal 19 ayat (1) UU No. 18 Tahun 2003, kewajiban advokat untuk merahasiakan segala sesuatu yang diketahui atau diperoleh dari kliennya...",
    "options": [
      {
        "key": "A",
        "text": "Berlaku karena hubungan profesi dan tetap berlaku meskipun hubungan kerja profesi tersebut telah berakhir."
      },
      {
        "key": "B",
        "text": "Gugur seketika saat perkara telah diputus oleh pengadilan negeri."
      },
      {
        "key": "C",
        "text": "Dapat dibuka kepada siapa saja apabila honorarium belum lunas."
      },
      {
        "key": "D",
        "text": "Hanya berlaku selama surat kuasa khusus belum dicabut."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Kewajiban merahasiakan informasi klien tetap melekat selamanya meski hubungan kerja telah selesai.",
      "legalBasis": "Pasal 19 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Pasal 19 ayat (1) UU Advokat: Advokat wajib merahasiakan segala sesuatu yang diketahui atau diperoleh dari kliennya karena hubungan profesinya, kecuali ditentukan lain oleh atau berdasarkan undang-undang. Kewajiban ini berlaku abadi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 433,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Cerai Talak vs Cerai Gugat",
    "question": "Perbedaan mendasar antara perkara Cerai Talak dengan Cerai Gugat di Pengadilan Agama adalah...",
    "options": [
      {
        "key": "A",
        "text": "Cerai Talak diajukan oleh suami, sedangkan Cerai Gugat diajukan oleh istri atau kuasanya."
      },
      {
        "key": "B",
        "text": "Cerai Talak diajukan ke Pengadilan Negeri, Cerai Gugat ke Pengadilan Agama."
      },
      {
        "key": "C",
        "text": "Cerai Talak tidak memerlukan sidang persidangan."
      },
      {
        "key": "D",
        "text": "Cerai Gugat hanya boleh diajukan oleh pihak keluarga mertua."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Cerai Talak diajukan suami untuk ikrar talak, sedangkan Cerai Gugat diajukan istri.",
      "legalBasis": "Pasal 66 dan Pasal 73 UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      "analysis": "Pasal 66 mengatur permohonan cerai talak diajukan oleh suami kepada Pengadilan Agama, sedangkan Pasal 73 mengatur gugatan perceraian (cerai gugat) diajukan oleh istri atau kuasanya."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 434,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Kompetensi Relatif Cerai Gugat Istri yang Meninggalkan Rumah",
    "question": "Berdasarkan Pasal 73 ayat (1) UU No. 7 Tahun 1989, jika Penggugat (Istri) meninggalkan tempat kediaman bersama tanpa izin Tergugat (Suami), gugatan perceraian diajukan ke Pengadilan Agama yang daerah hukumnya meliputi...",
    "options": [
      {
        "key": "A",
        "text": "Tempat kediaman Tergugat (Suami)."
      },
      {
        "key": "B",
        "text": "Tempat kediaman Penggugat (Istri)."
      },
      {
        "key": "C",
        "text": "Pengadilan Agama Jakarta Pusat."
      },
      {
        "key": "D",
        "text": "Tempat terjadinya akad nikah dahulu."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Istri yang meninggalkan tempat kediaman bersama tanpa izin wajib menggugat di Pengadilan Agama tempat suami.",
      "legalBasis": "Pasal 73 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      "analysis": "Pengecualian Pasal 73 ayat (1): Gugatan cerai diajukan di PA kediaman istri, KECUALI apabila istri meninggalkan tempat kediaman bersama tanpa izin suami, maka gugatan harus diajukan kepada Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman suami."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 435,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Gugatan Waris Islam (Faraidh)",
    "question": "Dalam perkara sengketa kewarisan Islam di Pengadilan Agama, pihak yang berkedudukan sebagai Tergugat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Ahli waris lain yang menguasai harta warisan dan menolak membaginya sesuai faraidh."
      },
      {
        "key": "B",
        "text": "Kepaniteraan Pengadilan Agama setempat."
      },
      {
        "key": "C",
        "text": "Kepala Kantor Urusan Agama (KUA)."
      },
      {
        "key": "D",
        "text": "Petugas Balai Harta Peninggalan (BHP)."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Tergugat waris adalah ahli waris yang menguasai boedel waris dan menolak pembagian.",
      "legalBasis": "Pasal 49 huruf b UU No. 7 Tahun 1989 jo. Kompilasi Hukum Islam (KHI).",
      "analysis": "Dalam perkara waris di Pengadilan Agama, sengketa timbul antara sesama ahli waris di mana pihak penggugat menuntut bagian hak warisnya terhadap ahli waris lain yang menguasai obyek sengketa warisan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 436,
    "category": "Hukum Acara Perdata",
    "topicTag": "Gugatan Sederhana (Small Claim Court)",
    "question": "Berdasarkan PERMA No. 2 Tahun 2015 jo. PERMA No. 4 Tahun 2019, kriteria batas maksimal nilai gugatan materil dalam Gugatan Sederhana adalah...",
    "options": [
      {
        "key": "A",
        "text": "Paling banyak Rp500.000.000,00 (lima ratus juta rupiah)."
      },
      {
        "key": "B",
        "text": "Paling banyak Rp200.000.000,00."
      },
      {
        "key": "C",
        "text": "Paling banyak Rp1.000.000.000,00."
      },
      {
        "key": "D",
        "text": "Paling banyak Rp50.000.000,00."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Nilai gugatan materil dalam gugatan sederhana maksimal Rp500.000.000,00.",
      "legalBasis": "Pasal 1 angka 1 PERMA No. 4 Tahun 2019 tentang Gugatan Sederhana.",
      "analysis": "PERMA No. 4 Tahun 2019 menaikkan batas nilai materiil gugatan sederhana dari semula Rp200 juta menjadi paling banyak Rp500.000.000,00 yang diselesaikan hakim tunggal paling lama 25 hari kerja."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 437,
    "category": "Hukum Acara Perdata",
    "topicTag": "Upaya Hukum Terhadap Putusan Gugatan Sederhana",
    "question": "Terhadap putusan Gugatan Sederhana pada Pengadilan Negeri, para pihak TIDAK DAPAT mengajukan upaya hukum banding atau kasasi, melainkan hanya dapat mengajukan...",
    "options": [
      {
        "key": "A",
        "text": "Keberatan kepada Ketua Pengadilan Negeri dalam tenggang waktu 7 hari."
      },
      {
        "key": "B",
        "text": "Peninjauan Kembali ke Mahkamah Agung."
      },
      {
        "key": "C",
        "text": "Gugatan pembatalan ke PTUN."
      },
      {
        "key": "D",
        "text": "Praperadilan ke hakim pengawas."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Upaya hukum terhadap putusan gugatan sederhana adalah Keberatan ke Ketua PN dalam 7 hari.",
      "legalBasis": "Pasal 21 sampai Pasal 23 PERMA No. 2 Tahun 2015.",
      "analysis": "Pasal 21 PERMA 2/2015 menegaskan terhadap putusan gugatan sederhana tidak dapat diajukan banding, kasasi, atau peninjauan kembali. Upaya hukum satu-satunya adalah Keberatan yang diajukan paling lambat 7 hari kerja setelah putusan diucapkan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 438,
    "category": "Hukum Acara Pidana",
    "topicTag": "Objek Praperadilan Pasca Putusan MK No. 21/PUU-XII/2014",
    "question": "Berdasarkan Putusan Mahkamah Konstitusi No. 21/PUU-XII/2014, objek praperadilan dalam Pasal 77 KUHAP diperluas mencakup pengujian keabsahan...",
    "options": [
      {
        "key": "A",
        "text": "Penetapan Tersangka, Penggeledahan, dan Penyitaan."
      },
      {
        "key": "B",
        "text": "Surat Dakwaan Jaksa Penuntut Umum."
      },
      {
        "key": "C",
        "text": "Surat Tuntutan Pidana Jaksa."
      },
      {
        "key": "D",
        "text": "Vonis Putusan Hakim Pengadilan Negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Objek praperadilan diperluas mencakup penetapan tersangka, penggeledahan, dan penyitaan.",
      "legalBasis": "Pasal 77 huruf a KUHAP jo. Putusan Mahkamah Konstitusi No. 21/PUU-XII/2014.",
      "analysis": "MK memperluas tafsir Pasal 77 huruf a KUHAP sehingga praperadilan berwenang mengadili keabsahan penangkapan, penahanan, penghentian penyidikan/penuntutan, serta penetapan tersangka, penggeledahan, dan penyitaan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 439,
    "category": "Hukum Acara Pidana",
    "topicTag": "Dua Alat Bukti Permulaan yang Cukup",
    "question": "Berdasarkan Putusan MK No. 21/PUU-XII/2014, penetapan seorang menjadi tersangka harus didasarkan pada...",
    "options": [
      {
        "key": "A",
        "text": "Minimal dua alat bukti yang sah sebagaimana diatur dalam Pasal 184 KUHAP dan telah dilakukan pemeriksaan calon tersangka."
      },
      {
        "key": "B",
        "text": "Laporan pengaduan sepihak dari korban saja."
      },
      {
        "key": "C",
        "text": "Kabar burung atau desas-desus di media sosial."
      },
      {
        "key": "D",
        "text": "Surat rekomendasi dari kepala kepolisian sektor."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Penetapan tersangka sah apabila didukung minimal 2 alat bukti sah Pasal 184 KUHAP dan pemeriksaan calon tersangka.",
      "legalBasis": "Pasal 1 angka 14 KUHAP jo. Putusan MK No. 21/PUU-XII/2014.",
      "analysis": 'Mahkamah Konstitusi menyatakan frasa "bukti permulaan yang cukup" dan "bukti yang cukup" harus dimaknai minimal dua alat bukti yang termuat dalam Pasal 184 KUHAP dan disertai dengan pemeriksaan calon tersangka.'
    },
    "difficulty": "Mudah"
  },
  {
    "id": 440,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Amar Putusan Menolak Permohonan",
    "question": "Dalam pengujian undang-undang di Mahkamah Konstitusi, apabila undang-undang yang diuji terbukti TIDAK bertentangan dengan UUD 1945, maka amar putusan MK adalah...",
    "options": [
      {
        "key": "A",
        "text": "Menolak permohonan pemohon"
      },
      {
        "key": "B",
        "text": "Permohonan tidak dapat diterima (NO)"
      },
      {
        "key": "C",
        "text": "Mengabulkan sebagian"
      },
      {
        "key": "D",
        "text": "Membatalkan seluruh undang-undang"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Jika undang-undang tidak bertentangan dengan konstitusi, amar putusan adalah menolak permohonan.",
      "legalBasis": "Pasal 56 ayat (5) UU No. 24 Tahun 2003.",
      "analysis": "Pasal 56 ayat (5) UU MK menegaskan: Dalam hal undang-undang tidak bertentangan dengan UUD 1945, amar putusan menyatakan permohonan ditolak."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 441,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Putusan Permohonan Tidak Dapat Diterima (NO)",
    "question": 'Amar putusan MK menyatakan "Permohonan Pemohon Tidak Dapat Diterima" (Niet Ontvankelijke Verklaard) dijatuhkan apabila...',
    "options": [
      {
        "key": "A",
        "text": "Pemohon tidak memiliki kedudukan hukum (legal standing) atau permohonan kabur."
      },
      {
        "key": "B",
        "text": "Undang-undang terbukti melanggar hak asasi."
      },
      {
        "key": "C",
        "text": "MK kekurangan hakim konstitusi."
      },
      {
        "key": "D",
        "text": "Presiden hadir langsung di persidangan."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Putusan NO dijatuhkan jika pemohon tidak memenuhi syarat formal kedudukan hukum (legal standing).",
      "legalBasis": "Pasal 56 ayat (1) UU No. 24 Tahun 2003.",
      "analysis": "Apabila pemohon tidak memenuhi syarat kedudukan hukum Pasal 51 atau materi permohonan bukan wewenang MK, amar putusan adalah menyatakan permohonan tidak dapat diterima."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 442,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Keterangan Presiden dan DPR di MK",
    "question": "Berdasarkan Pasal 54 UU MK, Mahkamah Konstitusi dapat meminta keterangan dan/atau risalah rapat pembahasan kepada...",
    "options": [
      {
        "key": "A",
        "text": "DPR dan Presiden"
      },
      {
        "key": "B",
        "text": "Komisi Yudisial"
      },
      {
        "key": "C",
        "text": "Kejaksaan Agung"
      },
      {
        "key": "D",
        "text": "Pemerintah Daerah Pengusul"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "MK dapat meminta keterangan dan risalah rapat pembahasan dari DPR dan Presiden.",
      "legalBasis": "Pasal 54 UU No. 24 Tahun 2003.",
      "analysis": "MK dapat meminta keterangan dan risalah rapat pembahasan berkenaan dengan UU yang dimohonkan pengujian kepada Dewan Perwakilan Rakyat dan Presiden sebagai pembentuk undang-undang."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 443,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Alat Bukti di Mahkamah Konstitusi",
    "question": "Berdasarkan Pasal 36 UU No. 24 Tahun 2003, manakah yang BUKAN merupakan alat bukti yang sah dalam persidangan Mahkamah Konstitusi?",
    "options": [
      {
        "key": "A",
        "text": "Surat kabar anonim tanpa identitas penulis"
      },
      {
        "key": "B",
        "text": "Surat atau tulisan"
      },
      {
        "key": "C",
        "text": "Keterangan saksi dan ahli"
      },
      {
        "key": "D",
        "text": "Petunjuk dan pengakuan para pihak"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Alat bukti sah MK meliputi surat/tulisan, saksi, ahli, pengakuan, petunjuk, dan informasi elektronik.",
      "legalBasis": "Pasal 36 ayat (1) UU No. 24 Tahun 2003.",
      "analysis": "Pasal 36 ayat (1) mengatur limitatif alat bukti di MK: surat/tulisan, saksi, ahli, para pihak, petunjuk, dan informasi/dokumen elektronik. Surat kabar anonim tidak memenuhi kualifikasi alat bukti yang sah."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 444,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Prinsip Ius Curia Novit di Mahkamah Konstitusi",
    "question": "Asas Ius Curia Novit dalam peradilan Mahkamah Konstitusi mengandung makna bahwa...",
    "options": [
      {
        "key": "A",
        "text": "Hakim konstitusi dianggap tahu hukum sehingga tidak boleh menolak mengadili perkara pengujian undang-undang."
      },
      {
        "key": "B",
        "text": "MK hanya mengadili perkara yang diajukan oleh sarjana hukum."
      },
      {
        "key": "C",
        "text": "Putusan MK harus disetujui Mahkamah Agung."
      },
      {
        "key": "D",
        "text": "Persidangan MK harus digelar secara tertutup."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Hakim konstitusi tidak boleh menolak memeriksa permohonan dengan dalih hukum tidak jelas.",
      "legalBasis": "Pasal 16 ayat (1) UU No. 48 Tahun 2009 jo. Yurisprudensi MK.",
      "analysis": "Asas ius curia novit mewajibkan hakim memeriksa dan mengadili setiap permohonan yang diajukan dengan dalih hukumnya kurang jelas atau belum ada."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 445,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Putusan Erga Omnes Mahkamah Konstitusi",
    "question": "Sifat mengikat putusan MK yang berlaku bagi siapa saja (tidak hanya bagi para pihak pemohon) dalam doktrin hukum tata negara disebut sifat...",
    "options": [
      {
        "key": "A",
        "text": "Erga Omnes"
      },
      {
        "key": "B",
        "text": "Inter Partes"
      },
      {
        "key": "C",
        "text": "Ex Post Facto"
      },
      {
        "key": "D",
        "text": "Ultra Vires"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Putusan pengujian UU di MK bersifat mengikat umum bagi seluruh warga negara (erga omnes).",
      "legalBasis": "Pasal 24C UUD 1945 jo. Penjelasan UU No. 24 Tahun 2003.",
      "analysis": "Karena objek pengujian norma undang-undang adalah peraturan umum (regeling), maka pembatalan norma oleh putusan MK memiliki kekuatan mengikat secara universal (erga omnes)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 446,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Pembubaran Partai Politik",
    "question": "Dalam perkara pembubaran partai politik, pihak yang berkedudukan sebagai Pemohon adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pemerintah Pusat"
      },
      {
        "key": "B",
        "text": "Partai politik lawan"
      },
      {
        "key": "C",
        "text": "Organisasi kemasyarakatan"
      },
      {
        "key": "D",
        "text": "Komisi Pemilihan Umum"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pemohon pembubaran partai politik adalah Pemerintah Pusat.",
      "legalBasis": "Pasal 68 ayat (1) UU No. 24 Tahun 2003 tentang MK.",
      "analysis": "Pasal 68 ayat (1) UU MK secara limitatif menyatakan bahwa Pemohon dalam pembubaran partai politik adalah Pemerintah."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 447,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Dissenting Opinion Hakim Konstitusi",
    "question": "Pendapat seorang hakim konstitusi yang berbeda secara substansi dan tidak sejalan dengan amar putusan mayoritas hakim disebut...",
    "options": [
      {
        "key": "A",
        "text": "Dissenting Opinion (Pendapat Berbeda)"
      },
      {
        "key": "B",
        "text": "Concurring Opinion (Alasan Berbeda)"
      },
      {
        "key": "C",
        "text": "Declaratoir Opinion"
      },
      {
        "key": "D",
        "text": "Amicus Curiae"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pendapat hakim yang tidak setuju dengan amar putusan mayoritas disebut Dissenting Opinion.",
      "legalBasis": "Pasal 45 ayat (10) UU No. 24 Tahun 2003 tentang MK.",
      "analysis": "Pasal 45 ayat (10) UU MK mengatur apabila musyawarah tidak mufakat, pendapat anggota Majelis yang berbeda (dissenting opinion) wajib dimuat dalam naskah putusan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 448,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Concurring Opinion Hakim Konstitusi",
    "question": "Pendapat hakim konstitusi yang menyetujui amar putusan mayoritas namun mendasarkannya pada pertimbangan hukum atau alasan yang berbeda disebut...",
    "options": [
      {
        "key": "A",
        "text": "Concurring Opinion (Pendapat Sejalan / Alasan Berbeda)"
      },
      {
        "key": "B",
        "text": "Dissenting Opinion"
      },
      {
        "key": "C",
        "text": "Eksepsi Kompetensi"
      },
      {
        "key": "D",
        "text": "Replik Pemohon"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Hakim yang setuju amar tetapi berbeda dasar alasan hukum dicatat sebagai Concurring Opinion.",
      "legalBasis": "Pasal 45 ayat (10) UU No. 24 Tahun 2003.",
      "analysis": "Concurring opinion terjadi saat hakim menyetujui amar putusan (misal: mengabulkan), namun memiliki konstruksi hukum dan penalaran argumentasi yang berbeda dari majelis."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 449,
    "category": "Hukum Acara Mahkamah Konstitusi",
    "topicTag": "Amicus Curiae (Sahabat Pengadilan)",
    "question": "Partisipasi pihak ketiga yang tidak berperkara untuk memberikan masukan tertulis mengenai isu hukum penting kepada majelis hakim konstitusi disebut...",
    "options": [
      {
        "key": "A",
        "text": "Amicus Curiae (Sahabat Pengadilan)"
      },
      {
        "key": "B",
        "text": "Intervensi Voeging"
      },
      {
        "key": "C",
        "text": "Intervensi Tussenkomst"
      },
      {
        "key": "D",
        "text": "Pihak Terkait Tidak Langsung"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pihak ketiga yang menyerahkan opini pertimbangan hukum independen disebut Amicus Curiae.",
      "legalBasis": "Pasal 14 ayat (1) jo. Pasal 27 Peraturan Mahkamah Konstitusi (PMK) No. 2 Tahun 2021 jo. Pasal 5 ayat (1) UU No. 48 Tahun 2009.",
      "analysis": "Amicus curiae adalah mekanisme di mana individu atau organisasi masyarakat menyampaikan pandangan hukum (amicus brief) sebagai bahan pertimbangan moral dan intelektual majelis hakim."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 450,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Bentuk Klausula Pactum de Compromittendo",
    "question": "Klausula arbitrase yang dibuat oleh para pihak SEBELUM timbulnya sengketa dalam kontrak utama dinamakan...",
    "options": [
      {
        "key": "A",
        "text": "Pactum de compromittendo"
      },
      {
        "key": "B",
        "text": "Akta Kompromis"
      },
      {
        "key": "C",
        "text": "Compromis van dading"
      },
      {
        "key": "D",
        "text": "Clausula Rebus Sic Stantibus"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Klausula arbitrase yang disepakati sebelum sengketa lahir disebut pactum de compromittendo.",
      "legalBasis": "Pasal 1 angka 3 UU No. 30 Tahun 1999.",
      "analysis": "Pactum de compromittendo adalah klausula arbitrase yang dicantumkan dalam suatu perjanjian perdata sebelum suatu perselisihan atau perbedaan pendapat terjadi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 451,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Akta Kompromis Setelah Sengketa Lahir",
    "question": "Apabila para pihak belum memuat klausula arbitrase dalam perjanjian awal, namun setelah timbul sengketa sepakat memilih arbitrase, mereka wajib membuat perjanjian tertulis berupa...",
    "options": [
      {
        "key": "A",
        "text": "Akta Kompromis yang ditandatangani kedua belah pihak di hadapan notaris/tertulis."
      },
      {
        "key": "B",
        "text": "Surat pernyataan lisan di hadapan saksi."
      },
      {
        "key": "C",
        "text": "Pemberitahuan lewat pesan singkat SMS."
      },
      {
        "key": "D",
        "text": "Kuitansi pembayaran ganti rugi."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Perjanjian arbitrase setelah sengketa lahir dituangkan dalam akta kompromis tertulis.",
      "legalBasis": "Pasal 9 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      "analysis": "Pasal 9 ayat (1) UU 30/1999 menegaskan dalam hal para pihak sepakat memilih arbitrase setelah sengketa terjadi, persetujuan harus dibuat dalam suatu akta kompromis tertulis yang ditandatangani para pihak."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 452,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Hak Ingkar Terhadap Arbiter",
    "question": "Hak ingkar terhadap arbiter yang ditunjuk wajib diajukan dalam tenggang waktu paling lama...",
    "options": [
      {
        "key": "A",
        "text": "14 hari sejak pengangkatan arbiter diberitahukan kepada para pihak."
      },
      {
        "key": "B",
        "text": "30 hari kerja."
      },
      {
        "key": "C",
        "text": "7 hari setelah putusan."
      },
      {
        "key": "D",
        "text": "60 hari kalender."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Tuntutan ingkar arbiter diajukan paling lambat 14 hari sejak pemberitahuan pengangkatan.",
      "legalBasis": "Pasal 24 ayat (1) UU No. 30 Tahun 1999.",
      "analysis": "Pasal 24 ayat (1) UU 30/1999: Tuntutan ingkar terhadap arbiter harus diajukan dalam waktu paling lama 14 (empat belas) hari terhitung sejak tanggal arbiter tersebut diberitahukan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 453,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Jumlah Arbiter dalam Majelis",
    "question": "Berdasarkan Pasal 13 ayat (1) UU No. 30 Tahun 1999, jumlah arbiter dalam majelis arbitrase harus berjumlah...",
    "options": [
      {
        "key": "A",
        "text": "Ganjil (misalnya 1 atau 3 orang)"
      },
      {
        "key": "B",
        "text": "Genap (misalnya 2 atau 4 orang)"
      },
      {
        "key": "C",
        "text": "Tepat 5 orang"
      },
      {
        "key": "D",
        "text": "Terserah ketua pengadilan negeri"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Jumlah arbiter wajib selalu ganjil untuk mencegah jalan buntu saat voting putusan.",
      "legalBasis": "Pasal 13 ayat (1) UU No. 30 Tahun 1999.",
      "analysis": "Pasal 13 ayat (1) UU 30/1999 menegaskan bahwa dalam hal para pihak telah sepakat memilih majelis, jumlah arbiter harus selalu ganjil (odd number)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 454,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Jangka Waktu Pemeriksaan Arbitrase",
    "question": "Pemeriksaan sengketa arbitrase oleh majelis arbiter harus diselesaikan dalam waktu paling lama...",
    "options": [
      {
        "key": "A",
        "text": "180 hari sejak majelis arbitrase terbentuk."
      },
      {
        "key": "B",
        "text": "90 hari kalender."
      },
      {
        "key": "C",
        "text": "360 hari kerja."
      },
      {
        "key": "D",
        "text": "30 hari sejak sidang pertama."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pemeriksaan sengketa arbitrase diselesaikan dalam jangka waktu maksimal 180 hari.",
      "legalBasis": "Pasal 48 ayat (1) UU No. 30 Tahun 1999.",
      "analysis": "Pasal 48 ayat (1) UU 30/1999: Pemeriksaan atas sengketa harus diselesaikan dalam waktu paling lama 180 (seratus delapan puluh) hari sejak arbiter atau majelis arbitrase terbentuk."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 455,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Kerahasiaan Sidang Arbitrase",
    "question": "Prinsip kerahasiaan dalam persidangan arbitrase berdasarkan Pasal 27 UU No. 30 Tahun 1999 adalah bahwa...",
    "options": [
      {
        "key": "A",
        "text": "Semua pemeriksaan sengketa oleh arbiter dilakukan secara tertutup, kecuali disepakati lain oleh para pihak."
      },
      {
        "key": "B",
        "text": "Sidang arbitrase wajib disiarkan langsung di televisi nasional."
      },
      {
        "key": "C",
        "text": "Masyarakat umum berhak menghadiri sidang arbitrase tanpa izin."
      },
      {
        "key": "D",
        "text": "Berkas perkara arbitrase wajib diunggah ke internet."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Sidang pemeriksaan arbitrase dilakukan secara tertutup demi menjaga kerahasiaan bisnis.",
      "legalBasis": "Pasal 27 UU No. 30 Tahun 1999.",
      "analysis": "Pasal 27 UU 30/1999 menegaskan: Semua pemeriksaan sengketa oleh arbiter atau majelis arbitrase dilakukan secara tertutup, menjamin kerahasiaan reputasi bisnis para pihak."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 456,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Upaya Perdamaian oleh Arbiter",
    "question": "Pada hari sidang pertama pemeriksaan arbitrase, tindakan yang WAJIB diupayakan oleh arbiter atau majelis arbitrase adalah...",
    "options": [
      {
        "key": "A",
        "text": "Mengupayakan perdamaian antara para pihak yang bersengketa."
      },
      {
        "key": "B",
        "text": "Langsung menjatuhkan putusan verstek."
      },
      {
        "key": "C",
        "text": "Menyita seluruh aset bergerak tergugat."
      },
      {
        "key": "D",
        "text": "Menyerahkan perkara ke kejaksaan."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Arbiter wajib terlebih dahulu mengupayakan perdamaian antara para pihak.",
      "legalBasis": "Pasal 45 ayat (1) UU No. 30 Tahun 1999.",
      "analysis": "Pasal 45 ayat (1) UU 30/1999: Dalam sidang pertama, arbiter atau majelis arbitrase terlebih dahulu mengupayakan perdamaian antara para pihak yang bersengketa."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 457,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Akta Perdamaian Arbitrase (Consent Award)",
    "question": "Apabila usaha perdamaian dalam arbitrase berhasil tercapai, arbiter atau majelis arbitrase membuat...",
    "options": [
      {
        "key": "A",
        "text": "Akta Perdamaian (Consent Award) yang bersifat final dan mengikat."
      },
      {
        "key": "B",
        "text": "Surat peringatan pertama."
      },
      {
        "key": "C",
        "text": "Putusan sela penundaan sidang."
      },
      {
        "key": "D",
        "text": "Nota kesepahaman tanpa akibat hukum."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Perdamaian dalam arbitrase dituangkan dalam Akta Perdamaian yang setara putusan inkracht.",
      "legalBasis": "Pasal 45 ayat (2) UU No. 30 Tahun 1999.",
      "analysis": "Pasal 45 ayat (2) UU 30/1999: Apabila usaha perdamaian berhasil, arbiter atau majelis arbitrase membuat suatu akta perdamaian yang mengikat kedua belah pihak."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 458,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "Syarat Eksekuatur Putusan Arbitrase Internasional",
    "question": "Putusan Arbitrase Internasional HANYA dapat diakui dan dilaksanakan di Indonesia apabila memenuhi syarat ketertiban umum (public policy) dan...",
    "options": [
      {
        "key": "A",
        "text": "Diberikan eksekuatur oleh Ketua Pengadilan Negeri Jakarta Pusat."
      },
      {
        "key": "B",
        "text": "Disetujui oleh Presiden melalui Perpres."
      },
      {
        "key": "C",
        "text": "Didaftarkan di Mahkamah Militer."
      },
      {
        "key": "D",
        "text": "Dibayar pajak eksekusi 50%."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Eksekusi putusan arbitrase internasional wajib memperoleh perintah eksekuatur dari Ketua PN Jakpus.",
      "legalBasis": "Pasal 66 huruf d jo. Pasal 67 UU No. 30 Tahun 1999.",
      "analysis": "Pasal 67 ayat (1) UU 30/1999: Permohonan pelaksanaan Putusan Arbitrase Internasional dilakukan setelah putusan tersebut didaftarkan dan memperoleh perintah pelaksanaan (eksekuatur) dari Ketua PN Jakarta Pusat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 459,
    "category": "Hukum Acara Arbitrase & APS",
    "topicTag": "BANI (Badan Arbitrase Nasional Indonesia)",
    "question": "Lembaga arbitrase independen tertua dan terkemuka di Indonesia yang didirikan pada tahun 1977 atas inisiatif KADIN adalah...",
    "options": [
      {
        "key": "A",
        "text": "Badan Arbitrase Nasional Indonesia (BANI)"
      },
      {
        "key": "B",
        "text": "Komisi Pengawas Persaingan Usaha (KPPU)"
      },
      {
        "key": "C",
        "text": "Pusat Mediasi Nasional (PMN)"
      },
      {
        "key": "D",
        "text": "Badan Perlindungan Konsumen Nasional (BPKN)"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "BANI adalah lembaga arbitrase institusional tertua di Indonesia yang didirikan tahun 1977.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 34 ayat (1) Undang-Undang No. 30 Tahun 1999 tentang Arbitrase dan APS jo. Statuta Pendirian BANI 1977.",
      "analysis": "Badan Arbitrase Nasional Indonesia (BANI) didirikan pada tahun 1977 untuk memfasilitasi penyelesaian sengketa perdata bisnis dan perdagangan di luar pengadilan umum."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 460,
    "category": "Hukum Acara PHI",
    "topicTag": "Batas Waktu Mengajukan Gugatan PHK",
    "question": "Berdasarkan Pasal 82 UU No. 2 Tahun 2004, gugatan pemutusan hubungan kerja (PHK) dapat diajukan ke Pengadilan Hubungan Industrial dalam tenggang waktu...",
    "options": [
      {
        "key": "A",
        "text": "Paling lama 1 tahun sejak diterimanya keputusan pemutusan hubungan kerja dari pengusaha."
      },
      {
        "key": "B",
        "text": "Paling lama 30 hari."
      },
      {
        "key": "C",
        "text": "Paling lama 3 tahun."
      },
      {
        "key": "D",
        "text": "Tidak ada batas daluwarsa."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Gugatan PHK daluwarsa setelah lewat waktu 1 tahun sejak diterimanya pemutusan kerja.",
      "legalBasis": "Pasal 82 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 82 UU 2/2004: Gugatan oleh pekerja/buruh atas pemutusan hubungan kerja dapat diajukan hanya dalam tenggang waktu 1 (satu) tahun sejak diterimanya keputusan dari pihak pengusaha."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 461,
    "category": "Hukum Acara PHI",
    "topicTag": "Susunan Majelis Hakim Pengadilan Hubungan Industrial",
    "question": "Majelis hakim pada Pengadilan Hubungan Industrial bersidang dengan susunan majelis yang terdiri dari...",
    "options": [
      {
        "key": "A",
        "text": "1 orang Hakim Karir sebagai Ketua dan 2 orang Hakim Ad-Hoc sebagai Anggota."
      },
      {
        "key": "B",
        "text": "3 orang Hakim Karir PN seluruhnya."
      },
      {
        "key": "C",
        "text": "1 orang Hakim Tunggal tanpa panitera."
      },
      {
        "key": "D",
        "text": "5 orang Hakim Ad-Hoc."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Majelis PHI terdiri dari 1 Hakim Karir dan 2 Hakim Ad-Hoc (unsur pekerja dan unsur pengusaha).",
      "legalBasis": "Pasal 88 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 88 ayat (1) UU 2/2004: Majelis Hakim terdiri atas satu orang Hakim Pengadilan Negeri sebagai Ketua Majelis dan dua orang Hakim Ad-Hoc sebagai Hakim Anggota."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 462,
    "category": "Hukum Acara PHI",
    "topicTag": "Hakim Ad-Hoc PHI",
    "question": "Dua orang Hakim Ad-Hoc pada Pengadilan Hubungan Industrial diusulkan pengangkatannya oleh...",
    "options": [
      {
        "key": "A",
        "text": "Organisasi Serikat Pekerja/Buruh dan Organisasi Pengusaha (APINDO)."
      },
      {
        "key": "B",
        "text": "Komisi Pemberantasan Korupsi (KPK)."
      },
      {
        "key": "C",
        "text": "Menteri Dalam Negeri."
      },
      {
        "key": "D",
        "text": "Partai Politik pemenang pemilu."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Hakim Ad-Hoc PHI diusulkan oleh serikat pekerja dan organisasi pengusaha.",
      "legalBasis": "Pasal 63 ayat (1) UU No. 2 Tahun 2004.",
      "analysis": "Hakim Ad-Hoc PHI mencerminkan keterwakilan tripartit yang diusulkan masing-masing oleh organisasi serikat pekerja/buruh dan organisasi pengusaha."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 463,
    "category": "Hukum Acara PHI",
    "topicTag": "Perselisihan Antar Serikat Pekerja",
    "question": "Perselisihan antara satu serikat pekerja dengan serikat pekerja lainnya yang dapat diadili di PHI HANYA perselisihan yang terjadi...",
    "options": [
      {
        "key": "A",
        "text": "Dalam satu perusahaan yang sama."
      },
      {
        "key": "B",
        "text": "Antara serikat pekerja di tingkat provinsi."
      },
      {
        "key": "C",
        "text": "Antara konfederasi buruh nasional."
      },
      {
        "key": "D",
        "text": "Di seluruh wilayah ASEAN."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Perselisihan antar serikat pekerja yang menjadi yurisdiksi PHI hanya dalam satu perusahaan.",
      "legalBasis": "Pasal 1 angka 5 UU No. 2 Tahun 2004.",
      "analysis": "Pasal 1 angka 5 UU 2/2004: Perselisihan antar serikat pekerja/buruh adalah perselisihan antara serikat pekerja/serikat buruh dengan serikat pekerja/serikat buruh lain hanya dalam satu perusahaan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 464,
    "category": "Hukum Acara PHI",
    "topicTag": "Sifat Putusan Kasasi Mahkamah Agung dalam Perkara PHI",
    "question": "Putusan kasasi Mahkamah Agung dalam perkara perselisihan hubungan industrial wajib diputus dalam tenggang waktu...",
    "options": [
      {
        "key": "A",
        "text": "Paling lama 30 hari kerja terhitung sejak tanggal penerimaan berkas kasasi."
      },
      {
        "key": "B",
        "text": "Paling lama 90 hari."
      },
      {
        "key": "C",
        "text": "Paling lama 180 hari."
      },
      {
        "key": "D",
        "text": "Paling lama 1 tahun."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Mahkamah Agung wajib memutus kasasi perkara PHI paling lama 30 hari kerja.",
      "legalBasis": "Pasal 115 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 115 UU 2/2004: Majelis Hakim Kasasi Mahkamah Agung wajib memutus perkara perselisihan hubungan industrial dalam waktu paling lama 30 (tiga puluh) hari kerja sejak berkas kasasi diterima."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 465,
    "category": "Hukum Acara PHI",
    "topicTag": "Tuntutan Upah Proses Selama Sidang Berlangsung",
    "question": "Berdasarkan Pasal 96 UU No. 2 Tahun 2004 jo. Putusan Mahkamah Konstitusi No. 37/PUU-IX/2011, selama putusan PHK belum inkracht, pengusaha...",
    "options": [
      {
        "key": "A",
        "text": "Wajib tetap membayar upah beserta hak-hak lainnya yang biasa diterima pekerja."
      },
      {
        "key": "B",
        "text": "Boleh memutus upah seketika."
      },
      {
        "key": "C",
        "text": "Hanya wajib membayar 10% uang makan."
      },
      {
        "key": "D",
        "text": "Dilarang memperbolehkan pekerja masuk kantor selamanya."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Upah proses wajib dibayar selama proses perselisihan PHK belum berkekuatan hukum tetap.",
      "legalBasis": "Pasal 96 UU No. 2 Tahun 2004 jo. Putusan MK No. 37/PUU-IX/2011.",
      "analysis": "MK menegaskan selama perkara perselisihan PHK belum inkracht, pengusaha dan pekerja wajib melaksanakan segala kewajibannya termasuk pengusaha membayar upah proses pekerja."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 466,
    "category": "Hukum Acara PHI",
    "topicTag": "Perjanjian Bersama (PB)",
    "question": "Perjanjian Bersama (PB) hasil kesepakatan damai bipartit atau mediasi wajib didaftarkan oleh para pihak di...",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Hubungan Industrial pada Pengadilan Negeri setempat."
      },
      {
        "key": "B",
        "text": "Kementerian Hukum dan HAM."
      },
      {
        "key": "C",
        "text": "Kantor Polsek setempat."
      },
      {
        "key": "D",
        "text": "Notaris pembuat akta tanah."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Perjanjian Bersama wajib didaftarkan di Pengadilan Hubungan Industrial pada PN.",
      "legalBasis": "Pasal 7 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 7 ayat (1) UU 2/2004: Perjanjian Bersama yang telah ditandatangani wajib didaftarkan oleh para pihak pada Pengadilan Hubungan Industrial pada Pengadilan Negeri di wilayah para pihak mengadakan Perjanjian Bersama."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 467,
    "category": "Hukum Acara PHI",
    "topicTag": "Akta Pendaftaran Perjanjian Bersama",
    "question": "Terhadap Perjanjian Bersama yang telah didaftarkan di Pengadilan Hubungan Industrial, Pengadilan memberikan...",
    "options": [
      {
        "key": "A",
        "text": "Akta Bukti Pendaftaran Perjanjian Bersama yang merupakan bagian yang tidak terpisahkan dari PB."
      },
      {
        "key": "B",
        "text": "Surat izin eksekusi lelang instan."
      },
      {
        "key": "C",
        "text": "Vonis pidana bersalah."
      },
      {
        "key": "D",
        "text": "Surat penangguhan pembayaran upah."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pengadilan PHI menerbitkan Akta Bukti Pendaftaran yang memberikan titel eksekutorial pada PB.",
      "legalBasis": "Pasal 7 ayat (2) UU No. 2 Tahun 2004.",
      "analysis": "Pendaftaran PB di PHI menghasilkan Akta Bukti Pendaftaran, sehingga apabila PB tidak dilaksanakan, pihak yang dirugikan dapat langsung mengajukan permohonan eksekusi kepada Pengadilan Hubungan Industrial."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 468,
    "category": "Hukum Acara PHI",
    "topicTag": "Eksekusi Perjanjian Bersama",
    "question": "Apabila pengusaha tidak melaksanakan isi Perjanjian Bersama yang telah didaftarkan, pekerja berhak memohonkan eksekusi langsung kepada...",
    "options": [
      {
        "key": "A",
        "text": "Ketua Pengadilan Hubungan Industrial pada Pengadilan Negeri setempat."
      },
      {
        "key": "B",
        "text": "Menteri Ketenagakerjaan RI."
      },
      {
        "key": "C",
        "text": "Kapolri."
      },
      {
        "key": "D",
        "text": "Dinas Perizinan Terpadu."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Permohonan eksekusi PB diajukan kepada Ketua Pengadilan Hubungan Industrial pada PN.",
      "legalBasis": "Pasal 7 ayat (3) UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 7 ayat (3) UU 2/2004 menyatakan dalam hal Perjanjian Bersama tidak dilaksanakan oleh salah satu pihak, maka pihak yang dirugikan dapat mengajukan permohonan eksekusi kepada Pengadilan Hubungan Industrial pada Pengadilan Negeri."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 469,
    "category": "Hukum Acara PHI",
    "topicTag": "Konsiliasi Hubungan Industrial",
    "question": "Konsiliator Hubungan Industrial adalah tenaga konsiliasi swasta independen yang terdaftar resmi di...",
    "options": [
      {
        "key": "A",
        "text": "Kantor instansi pemerintah yang bertanggung jawab di bidang ketenagakerjaan kabupaten/kota."
      },
      {
        "key": "B",
        "text": "Pengadilan Tinggi."
      },
      {
        "key": "C",
        "text": "Kamar Dagang dan Industri (KADIN)."
      },
      {
        "key": "D",
        "text": "Badan Pengawas Keuangan."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Konsiliator hubungan industrial wajib terdaftar resmi di Disnaker kabupaten/kota.",
      "legalBasis": "Pasal 17 jo. Pasal 19 UU No. 2 Tahun 2004.",
      "analysis": "Pasal 19 UU 2/2004 mengatur konsiliator yang memenuhi syarat terdaftar pada kantor instansi yang bertanggung jawab di bidang ketenagakerjaan kabupaten/kota."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 470,
    "category": "Hukum Acara PTUN",
    "topicTag": "Daluwarsa Mengajukan Gugatan ke PTUN",
    "question": "Berdasarkan Pasal 55 UU No. 5 Tahun 1986, gugatan sengketa Tata Usaha Negara hanya dapat diajukan dalam tenggang waktu...",
    "options": [
      {
        "key": "A",
        "text": "90 hari terhitung sejak saat diterimanya atau diumumkannya Keputusan Badan atau Pejabat Tata Usaha Negara."
      },
      {
        "key": "B",
        "text": "14 hari kalender."
      },
      {
        "key": "C",
        "text": "30 hari kerja."
      },
      {
        "key": "D",
        "text": "1 tahun kalender."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Tenggang waktu mengajukan gugatan ke PTUN adalah 90 hari sejak diterimanya/diumumkannya KTUN.",
      "legalBasis": "Pasal 55 UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Pasal 55 UU 5/1986: Gugatan dapat diajukan hanya dalam tenggang waktu sembilan puluh hari terhitung sejak saat diterimanya atau diumumkannya Keputusan Badan atau Pejabat Tata Usaha Negara."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 471,
    "category": "Hukum Acara PTUN",
    "topicTag": "Tuntutan Ganti Rugi dan Rehabilitasi di PTUN",
    "question": "Selain tuntutan agar KTUN yang digugat dinyatakan batal atau tidak sah, Penggugat dalam gugatan TUN dapat menyertakan tuntutan tambahan berupa...",
    "options": [
      {
        "key": "A",
        "text": "Ganti rugi dan/atau rehabilitasi bagi Pegawai Negeri Sipil."
      },
      {
        "key": "B",
        "text": "Hukuman penjara kurungan bagi pejabat tergugat."
      },
      {
        "key": "C",
        "text": "Penyitaan rumah pribadi bupati."
      },
      {
        "key": "D",
        "text": "Pembubaran instansi dinas terkait."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Petitum tambahan gugatan PTUN hanya dapat berupa ganti rugi dan/atau rehabilitasi.",
      "legalBasis": "Pasal 53 ayat (1) jo. Pasal 97 ayat (10) UU No. 5 Tahun 1986.",
      "analysis": "Pasal 53 ayat (1) UU PTUN menegaskan gugatan dapat disertai tuntutan ganti rugi dan/atau rehabilitasi (pemulihan nama baik dan hak kedudukan PNS)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 472,
    "category": "Hukum Acara PTUN",
    "topicTag": "Pemeriksaan Persiapan di PTUN",
    "question": "Dalam pemeriksaan persiapan berdasarkan Pasal 63 UU No. 5 Tahun 1986, hakim wajib memberikan nasihat kepada penggugat untuk memperbaiki gugatan dalam jangka waktu...",
    "options": [
      {
        "key": "A",
        "text": "Paling lama 30 hari."
      },
      {
        "key": "B",
        "text": "Paling lama 7 hari."
      },
      {
        "key": "C",
        "text": "Paling lama 14 hari."
      },
      {
        "key": "D",
        "text": "Paling lama 60 hari."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Jangka waktu perbaikan gugatan dalam pemeriksaan persiapan PTUN adalah paling lama 30 hari.",
      "legalBasis": "Pasal 63 ayat (3) UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Pasal 63 ayat (3) UU 5/1986: Penggugat diberi tenggang waktu tiga puluh hari untuk menyempurnakan gugatan. Jika lewat 30 hari tidak disempurnakan, hakim memutus gugatan tidak dapat diterima."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 473,
    "category": "Hukum Acara PTUN",
    "topicTag": "Eksepsi Kompetensi Relatif di PTUN",
    "question": "Berdasarkan Pasal 77 UU No. 5 Tahun 1986, eksepsi tentang wewenang relatif pengadilan TUN harus diajukan...",
    "options": [
      {
        "key": "A",
        "text": "Sebelum Tergugat menyampaikan jawaban mengenai pokok sengketa."
      },
      {
        "key": "B",
        "text": "Kapan saja selama sidang pembuktian."
      },
      {
        "key": "C",
        "text": "Pada saat kesimpulan."
      },
      {
        "key": "D",
        "text": "Dalam memori banding di PTTUN."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Eksepsi kompetensi relatif PTUN wajib diajukan sebelum jawaban materi pokok perkara.",
      "legalBasis": "Pasal 77 ayat (1) UU No. 5 Tahun 1986.",
      "analysis": "Pasal 77 ayat (1) UU 5/1986 mengatur eksepsi tentang kewenangan relatif Pengadilan harus diajukan sebelum disampaikan jawaban mengenai pokok perkara."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 474,
    "category": "Hukum Acara PTUN",
    "topicTag": "Eksepsi Kompetensi Absolut di PTUN",
    "question": "Eksepsi mengenai kewenangan absolut Pengadilan Tata Usaha Negara dapat diajukan...",
    "options": [
      {
        "key": "A",
        "text": "Setiap waktu selama pemeriksaan, dan hakim karena jabatannya wajib menyatakan diri tidak berwenang."
      },
      {
        "key": "B",
        "text": "Hanya pada sidang hari pertama."
      },
      {
        "key": "C",
        "text": "Hanya oleh saksi ahli."
      },
      {
        "key": "D",
        "text": "Hanya jika disetujui MA."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Eksepsi kompetensi absolut dapat diajukan setiap saat dan hakim ex officio wajib menilainya.",
      "legalBasis": "Pasal 77 ayat (2) UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Pasal 77 ayat (2) UU PTUN: Eksepsi tentang kewenangan absolut Pengadilan dapat diajukan setiap waktu selama pemeriksaan dan bahkan hakim karena jabatannya wajib menyatakan diri tidak berwenang."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 475,
    "category": "Hukum Acara PTUN",
    "topicTag": "Asas Pembuktian Bebas Terbatas di PTUN",
    "question": "Sistem pembuktian yang dianut dalam peradilan Tata Usaha Negara (Pasal 107 UU No. 5 Tahun 1986) adalah...",
    "options": [
      {
        "key": "A",
        "text": "Asas Pembuktian Bebas Terbatas (vrij bewijs) dengan keyakinan hakim berdasar sekurang-kurangnya dua alat bukti sah."
      },
      {
        "key": "B",
        "text": "Asas Pembuktian Negatif Mutlak."
      },
      {
        "key": "C",
        "text": "Asas Pembuktian Formal KUHPerdata saja."
      },
      {
        "key": "D",
        "text": "Asas Keyakinan Murni tanpa alat bukti."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "PTUN menganut pembuktian bebas terbatas dengan minimal 2 alat bukti sah.",
      "legalBasis": "Pasal 107 UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Pasal 107 UU PTUN menyatakan Hakim menentukan apa yang harus dibuktikan, beban pembuktian serta penilaian pembuktian, dengan sekurang-kurangnya dua alat bukti yang sah."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 476,
    "category": "Hukum Acara PTUN",
    "topicTag": "Alat Bukti Elektronik di PTUN",
    "question": "Berdasarkan Pasal 100 UU No. 5 Tahun 1986 jo. UU No. 11 Tahun 2008 (ITE), informasi elektronik dan/atau dokumen elektronik...",
    "options": [
      {
        "key": "A",
        "text": "Merupakan alat bukti yang sah dan perluasan dari alat bukti surat/petunjuk."
      },
      {
        "key": "B",
        "text": "Tidak diakui sama sekali oleh majelis hakim PTUN."
      },
      {
        "key": "C",
        "text": "Hanya sah jika dicetak di atas kertas segel kuno."
      },
      {
        "key": "D",
        "text": "Hanya boleh diajukan oleh instansi intelijen."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Informasi dan dokumen elektronik merupakan alat bukti hukum yang sah di PTUN.",
      "legalBasis": "Pasal 5 UU No. 11 Tahun 2008 jo. Penjelasan Pasal 100 UU PTUN.",
      "analysis": "Pasal 5 UU ITE menegaskan informasi elektronik dan dokumen elektronik merupakan alat bukti hukum yang sah yang memperluas cakupan alat bukti surat dalam hukum acara peradilan Indonesia."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 477,
    "category": "Hukum Acara PTUN",
    "topicTag": "Pihak Ketiga Intervensi di PTUN",
    "question": "Berdasarkan Pasal 83 UU No. 5 Tahun 1986, selama pemeriksaan sengketa berlangsung, pihak ketiga yang berkepentingan dapat masuk ke dalam sengketa TUN dengan cara...",
    "options": [
      {
        "key": "A",
        "text": "Mengajukan permohonan intervensi (membela kepentingannya sendiri atau bergabung dengan salah satu pihak)."
      },
      {
        "key": "B",
        "text": "Melakukan demo di depan gedung pengadilan."
      },
      {
        "key": "C",
        "text": "Menyandera berkas perkara di panitera."
      },
      {
        "key": "D",
        "text": "Menggugat hakim ke komisi yudisial."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pihak ketiga dapat masuk sebagai pihak intervensi selama sidang PTUN berlangsung.",
      "legalBasis": "Pasal 83 UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Pasal 83 UU 5/1986: Selama pemeriksaan berlangsung, setiap orang yang berkepentingan dapat masuk dalam sengketa TUN dengan mengajukan permohonan intervensi (tussenkomst atau voeging)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 478,
    "category": "Hukum Acara PTUN",
    "topicTag": "Eksekusi Putusan PTUN yang Inkracht",
    "question": "Apabila Pejabat TUN tidak bersedia melaksanakan putusan PTUN yang telah berkekuatan hukum tetap dalam waktu 60 hari kerja, maka akibat hukumnya...",
    "options": [
      {
        "key": "A",
        "text": "Keputusan TUN yang bersangkutan tidak mempunyai kekuatan hukum lagi demi hukum."
      },
      {
        "key": "B",
        "text": "Pejabat dipidana mati."
      },
      {
        "key": "C",
        "text": "Penggugat langsung diangkat menjadi bupati."
      },
      {
        "key": "D",
        "text": "Kantor dinas disegel oleh jurusita perdata."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Jika tidak dilaksanakan dalam 60 hari kerja, KTUN tidak mempunyai kekuatan hukum lagi demi hukum.",
      "legalBasis": "Pasal 116 ayat (2) UU No. 51 Tahun 2009 tentang Perubahan Kedua UU PTUN.",
      "analysis": "Pasal 116 ayat (2) UU 51/2009 menegaskan jika setelah 60 hari kerja putusan inkracht diterima tergugat tidak melaksanakan kewajibannya, KTUN yang disengketakan itu tidak mempunyai kekuatan hukum lagi demi hukum."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 479,
    "category": "Hukum Acara PTUN",
    "topicTag": "Sanksi Publikasi di Media Massa",
    "question": "Berdasarkan Pasal 116 ayat (5) UU No. 51 Tahun 2009, terhadap pejabat TUN yang membangkang tidak melaksanakan putusan pengadilan, Ketua Pengadilan dapat...",
    "options": [
      {
        "key": "A",
        "text": "Mengumumkan pada media massa cetak setempat dan mengajukan kepada Presiden agar dikenakan sanksi administratif."
      },
      {
        "key": "B",
        "text": "Menghapus jabatan dinas tersebut selamanya."
      },
      {
        "key": "C",
        "text": "Menjual gedung dinas melalui lelang terbuka."
      },
      {
        "key": "D",
        "text": "Mencabut hak pilih seluruh pegawai dinas."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pembangkangan eksekusi putusan PTUN dipublikasikan di media massa cetak dan dilaporkan ke Presiden.",
      "legalBasis": "Pasal 116 ayat (5) UU No. 51 Tahun 2009 tentang PTUN.",
      "analysis": "Pasal 116 ayat (5) mengatur instrumen eksekusi moral dan hierarkis: Ketua Pengadilan mengumumkan pada media massa cetak setempat serta memberitahukan kepada Presiden sebagai pemegang kekuasaan pemerintahan tertinggi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 480,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Larangan Memasang Iklan Semata-mata untuk Menarik Klien",
    "question": "Berdasarkan Pasal 8 huruf b Kode Etik Advokat Indonesia (KEAI), pemasangan iklan semata-mata untuk menarik perhatian orang atau mencari klien adalah...",
    "options": [
      {
        "key": "A",
        "text": "Dilarang keras, termasuk memasang papan nama dengan ukuran berlebih-lebihan."
      },
      {
        "key": "B",
        "text": "Diperbolehkan asalkan membayar pajak reklame."
      },
      {
        "key": "C",
        "text": "Dianjurkan untuk advokat pemula."
      },
      {
        "key": "D",
        "text": "Boleh dipasang di billboard jalan tol tanpa batas."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Advokat dilarang memasang iklan semata-mata untuk mencari klien atau papan nama berlebihan.",
      "legalBasis": "Pasal 8 huruf b Kode Etik Advokat Indonesia (KEAI) 2002.",
      "analysis": "Pasal 8 huruf b KEAI secara tegas melarang advokat memasang iklan semata-mata untuk menarik perhatian orang banyak atau memajang papan nama berukuran berlebih-lebihan demi menjaga martabat keluhuran profesi."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 481,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Penetapan Sanksi oleh Dewan Kehormatan",
    "question": "Berdasarkan Pasal 7 UU No. 18 Tahun 2003 jo. Pasal 16 KEAI, jenis sanksi atau tindakan yang dapat dijatuhkan oleh Dewan Kehormatan terhadap advokat pelanggar kode etik adalah, KECUALI...",
    "options": [
      {
        "key": "A",
        "text": "Pidana penjara kurungan di Lembaga Pemasyarakatan"
      },
      {
        "key": "B",
        "text": "Teguran lisan"
      },
      {
        "key": "C",
        "text": "Peringatan keras"
      },
      {
        "key": "D",
        "text": "Pemberhentian sementara atau pemecatan dari keanggotaan organisasi"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Dewan Kehormatan hanya berwenang menjatuhkan sanksi etik organisasi, bukan sanksi pidana penjara.",
      "legalBasis": "Pasal 7 ayat (1) UU No. 18 Tahun 2003 jo. KEAI.",
      "analysis": "Dewan Kehormatan adalah peradilan etik profesi, bukan lembaga peradilan pidana. Sanksi etik meliputi: teguran lisan, peringatan keras, skorsing (pemberhentian sementara), dan pemberhentian tetap."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 482,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Bantuan Hukum Cuma-cuma (Pro Bono)",
    "question": "Berdasarkan Pasal 22 ayat (1) UU No. 18 Tahun 2003, setiap advokat WAJIB memberikan bantuan hukum secara cuma-cuma (pro bono) kepada...",
    "options": [
      {
        "key": "A",
        "text": "Pencari keadilan yang tidak mampu secara ekonomi."
      },
      {
        "key": "B",
        "text": "Pejabat tinggi negara yang terkena OTT KPK."
      },
      {
        "key": "C",
        "text": "Perusahaan multinasional yang menunggak pajak."
      },
      {
        "key": "D",
        "text": "Anggota keluarga dekat sesama advokat kaya."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Advokat wajib memberikan bantuan hukum pro bono kepada masyarakat pencari keadilan yang tidak mampu.",
      "legalBasis": "Pasal 22 ayat (1) UU No. 18 Tahun 2003 jo. PP No. 83 Tahun 2008.",
      "analysis": "Pasal 22 ayat (1) UU 18/2003: Advokat wajib memberikan bantuan hukum secara cuma-cuma (pro bono) kepada pencari keadilan yang tidak mampu, sebagai perwujudan tanggung jawab profesi terhormat (officium nobile)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 483,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Pengunduran Diri dari Pengurusan Perkara",
    "question": "Berdasarkan Pasal 4 huruf g KEAI, advokat yang telah menerima kuasa dapat mengundurkan diri dari pengurusan perkara HANYA JIKA...",
    "options": [
      {
        "key": "A",
        "text": "Timbul perbedaan pendapat mendasar dengan klien mengenai cara penanganan perkara dan tidak merugikan hak hukum klien."
      },
      {
        "key": "B",
        "text": "Klien menolak menambah uang tips pribadi."
      },
      {
        "key": "C",
        "text": "Advokat ditawari honor 5 kali lebih tinggi oleh pihak lawan."
      },
      {
        "key": "D",
        "text": "Advokat sedang ingin berlibur ke luar negeri."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Advokat hanya boleh mundur jika ada alasan patut dan tidak merugikan kepentingan klien.",
      "legalBasis": "Pasal 4 huruf g Kode Etik Advokat Indonesia (KEAI).",
      "analysis": "Pasal 4 huruf g KEAI melarang advokat melepaskan tugas yang dibebankan kepadanya pada saat yang tidak menguntungkan posisi klien atau dengan cara yang dapat merugikan kepentingan hukum klien."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 484,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Benturan Kepentingan (Conflict of Interest)",
    "question": "Berdasarkan Pasal 4 huruf j KEAI, advokat yang mengurus kepentingan bersama dari dua pihak atau lebih...",
    "options": [
      {
        "key": "A",
        "text": "Harus mengundurkan diri sepenuhnya dari pengurusan perkara apabila kemudian timbul pertentangan kepentingan antara pihak-pihak tersebut."
      },
      {
        "key": "B",
        "text": "Wajib membela pihak yang membayar honorarium paling tinggi."
      },
      {
        "key": "C",
        "text": "Boleh mengadu domba kedua klien."
      },
      {
        "key": "D",
        "text": "Tetap membela kedua pihak secara rahasia."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Jika terjadi benturan kepentingan antar klien, advokat wajib mengundurkan diri dari kedua pihak.",
      "legalBasis": "Pasal 4 huruf j Kode Etik Advokat Indonesia (KEAI).",
      "analysis": "Pasal 4 huruf j KEAI: Advokat yang mengurus kepentingan bersama dari dua pihak atau lebih harus mengundurkan diri sepenuhnya dari pengurusan kepentingan-kepentingan tersebut, apabila di kemudian hari timbul pertentangan kepentingan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 485,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Larangan Berkomunikasi Langsung dengan Lawan Beracara",
    "question": "Berdasarkan Pasal 5 huruf e KEAI, apabila pihak lawan telah menunjuk advokat sebagai kuasa hukumnya, maka seorang advokat...",
    "options": [
      {
        "key": "A",
        "text": "Hanya boleh berhubungan dengan advokat rekan sejawat yang menjadi kuasa hukum lawan tersebut, bukan langsung dengan pihak lawan."
      },
      {
        "key": "B",
        "text": "Boleh mendatangi rumah lawan tengah malam untuk intimidasi."
      },
      {
        "key": "C",
        "text": "Boleh membujuk lawan memecat advokatnya secara diam-diam."
      },
      {
        "key": "D",
        "text": "Dilarang berbicara sama sekali di persidangan."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Advokat dilarang berkomunikasi langsung dengan lawan yang telah didampingi advokat rekan sejawat.",
      "legalBasis": "Pasal 5 huruf e Kode Etik Advokat Indonesia (KEAI).",
      "analysis": "Pasal 5 huruf e KEAI: Hubungan dengan pihak lawan yang diketahui telah menunjuk advokat hanya boleh dilakukan melalui advokatnya, guna mencegah manipulasi sepihak."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 486,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Penetapan Honorarium Kontingensi (Contingent Fee)",
    "question": "Dalam Kode Etik Advokat Indonesia, penetapan honorarium yang semata-mata bergantung pada kemenangan perkara tanpa memperhitungkan kepatutan kerja (success fee murni yang eksploitatif)...",
    "options": [
      {
        "key": "A",
        "text": "Harus tetap berpedoman pada asas kepatutan, keadilan, dan tidak boleh memeras klien yang terdesak."
      },
      {
        "key": "B",
        "text": "Merupakan kewajiban mutlak dalam seluruh perkara pidana."
      },
      {
        "key": "C",
        "text": "Dilarang mencantumkannya dalam perjanjian tertulis."
      },
      {
        "key": "D",
        "text": "Hanya boleh ditetapkan dalam mata uang valuta asing."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Honorarium kontingensi wajib berlandaskan prinsip kewajaran, kepatutan, dan tidak memeras klien.",
      "legalBasis": "Pasal 4 huruf d KEAI jo. Sumpah Profesi Advokat.",
      "analysis": "Meskipun succes fee diperkenankan dalam perkara perdata, KEAI mewajibkan advokat tidak menetapkan tarif yang tidak wajar atau memanfaatkan posisi lemah klien demi keuntungan materiil sepihak."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 487,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Larangan Menjadi Pejabat Negara",
    "question": "Berdasarkan Pasal 20 ayat (3) UU No. 18 Tahun 2003, advokat yang menjadi pejabat negara...",
    "options": [
      {
        "key": "A",
        "text": "Tidak boleh melaksanakan tugas profesi advokat selama memangku jabatan tersebut."
      },
      {
        "key": "B",
        "text": "Tetap berhak beracara di pengadilan asalkan pada hari libur."
      },
      {
        "key": "C",
        "text": "Boleh menerima klien asalkan tidak digaji APBN."
      },
      {
        "key": "D",
        "text": "Wajib menyerahkan seluruh honorariumnya kepada menteri keuangan."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Advokat yang menjadi pejabat negara dilarang berpraktik advokat selama menjabat.",
      "legalBasis": "Pasal 20 ayat (3) UU No. 18 Tahun 2003 tentang Advokat.",
      "analysis": "Pasal 20 ayat (3) UU Advokat: Advokat yang menjadi pejabat negara, tidak boleh melaksanakan tugas profesi Advokat selama memangku jabatan tersebut, guna mencegah penyalahgunaan kekuasaan dan benturan kepentingan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 488,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Pemberitahuan Perpindahan Kantor Advokat",
    "question": "Advokat yang berpindah kantor atau membuka kantor cabang baru wajib memberitahukan secara tertulis kepada...",
    "options": [
      {
        "key": "A",
        "text": "Organisasi Advokat dan Pengadilan Negeri setempat."
      },
      {
        "key": "B",
        "text": "Kementerian Perdagangan."
      },
      {
        "key": "C",
        "text": "Lembaga Penjamin Simpanan."
      },
      {
        "key": "D",
        "text": "Kantor Imigrasi."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Perpindahan alamat kantor advokat wajib diberitahukan kepada organisasi advokat dan PN setempat.",
      "legalBasis": "Pasal 5 ayat (1) jo. Pasal 28 UU No. 18 Tahun 2003.",
      "analysis": "Untuk kepentingan administrasi keanggotaan dan kepatutan pemanggilan resmi surat pengadilan, perpindahan kantor advokat wajib dilaporkan kepada Pengadilan Negeri dan DPC Organisasi Advokat terkait."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 489,
    "category": "Kode Etik Profesi Advokat",
    "topicTag": "Banding Putusan Dewan Kehormatan Daerah",
    "question": "Berdasarkan Pasal 17 KEAI, terhadap putusan Dewan Kehormatan Cabang/Daerah, pihak pengadu maupun teradu yang tidak puas dapat mengajukan banding ke...",
    "options": [
      {
        "key": "A",
        "text": "Dewan Kehormatan Pusat Organisasi Advokat."
      },
      {
        "key": "B",
        "text": "Pengadilan Tinggi setempat."
      },
      {
        "key": "C",
        "text": "Mahkamah Agung."
      },
      {
        "key": "D",
        "text": "Menteri Hukum dan HAM."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Banding atas putusan Dewan Kehormatan Daerah diajukan ke Dewan Kehormatan Pusat.",
      "legalBasis": "Pasal 17 ayat (1) Kode Etik Advokat Indonesia (KEAI).",
      "analysis": "Pasal 17 ayat (1) KEAI mengatur bahwa apabila pengadu atau teradu tidak puas terhadap putusan Dewan Kehormatan Daerah, ia berhak mengajukan permohonan banding kepada Dewan Kehormatan Pusat dalam waktu 21 hari."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 490,
    "category": "Hukum Acara Perdata",
    "topicTag": "Sita Eksekusi (Executoir Beslag)",
    "question": "Sita Eksekusi (Executoir Beslag) dalam hukum acara perdata HANYA dapat diletakkan terhadap objek perkara apabila...",
    "options": [
      {
        "key": "A",
        "text": "Telah ada putusan pengadilan yang berkekuatan hukum tetap (inkracht van gewijsde) dan tergugat tidak mau memenuhi amar putusan secara sukarela."
      },
      {
        "key": "B",
        "text": "Penggugat baru saja mendaftarkan surat gugatan."
      },
      {
        "key": "C",
        "text": "Tergugat menolak hadir dalam mediasi."
      },
      {
        "key": "D",
        "text": "Saksi ahli berhalangan hadir."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Sita eksekusi diletakkan setelah ada putusan inkracht dan tergugat ingkar memenuhi amar vonis.",
      "legalBasis": "Pasal 197 HIR / Pasal 208 RBg.",
      "analysis": "Sita eksekusi dilakukan atas perintah Ketua Pengadilan Negeri setelah proses teguran (aanmaning) diabaikan oleh pihak termohon eksekusi, guna melelang aset debitur untuk melunasi kewajiban putusan inkracht."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 491,
    "category": "Hukum Acara Perdata",
    "topicTag": "Aanmaning (Peringatan Eksekusi)",
    "question": "Berdasarkan Pasal 196 HIR / Pasal 207 RBg, sebelum melaksanakan eksekusi lelang putusan inkracht, Ketua Pengadilan Negeri terlebih dahulu memanggil pihak yang kalah untuk...",
    "options": [
      {
        "key": "A",
        "text": "Diberikan peringatan (aanmaning) agar melaksanakan putusan secara sukarela dalam waktu 8 hari."
      },
      {
        "key": "B",
        "text": "Ditahan di rutan selama 30 hari."
      },
      {
        "key": "C",
        "text": "Menyerahkan paspor kepada panitera."
      },
      {
        "key": "D",
        "text": "Menghadiri sidang ulang pembuktian."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Aanmaning adalah teguran resmi Ketua PN agar putusan dilaksanakan sukarela dalam 8 hari.",
      "legalBasis": "Pasal 196 HIR / Pasal 207 RBg.",
      "analysis": "Aanmaning merupakan syarat imperatif formal sebelum sita eksekusi dilaksanakan. Ketua PN menegur debitur agar dalam tempo paling lama 8 (delapan) hari memenuhi putusan tersebut secara sukarela."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 492,
    "category": "Hukum Acara Perdata",
    "topicTag": "Perlawanan Pihak Ketiga (Derden Verzet)",
    "question": "Apabila barang milik pihak ketiga yang tidak bersalah ikut disita dalam proses sita jaminan sengketa antara Penggugat dan Tergugat, upaya hukum yang dapat diajukan pihak ketiga adalah...",
    "options": [
      {
        "key": "A",
        "text": "Derden Verzet (Perlawanan Pihak Ketiga) ke Pengadilan Negeri."
      },
      {
        "key": "B",
        "text": "Gugatan rekonvensi."
      },
      {
        "key": "C",
        "text": "Praperadilan."
      },
      {
        "key": "D",
        "text": "Kasasi demi kepentingan hukum."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pihak ketiga pemilik sah barang yang tersita mengajukan Derden Verzet ke Pengadilan Negeri.",
      "legalBasis": "Pasal 195 ayat (6) jo. Pasal 206 HIR / Pasal 378 Rv.",
      "analysis": "Derden Verzet diajukan oleh pihak ketiga pemilik sejati barang yang merasa hak miliknya dilanggar oleh penyitaan jaminan atau eksekusi dalam perkara orang lain."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 493,
    "category": "Hukum Acara Perdata",
    "topicTag": "Gugatan Rekonvensi",
    "question": "Gugatan balik yang diajukan oleh Tergugat terhadap Penggugat dalam proses pemeriksaan perkara perdata yang sama disebut...",
    "options": [
      {
        "key": "A",
        "text": "Gugatan Rekonvensi"
      },
      {
        "key": "B",
        "text": "Gugatan Konvensi"
      },
      {
        "key": "C",
        "text": "Gugatan Eksepsional"
      },
      {
        "key": "D",
        "text": "Gugatan Komparisi"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Gugatan balik oleh Tergugat terhadap Penggugat disebut gugatan rekonvensi.",
      "legalBasis": "Pasal 132a HIR / Pasal 157 RBg.",
      "analysis": "Pasal 132a HIR menentukan bahwa Tergugat dalam setiap perkara berhak mengajukan gugatan balik (gugatan rekonvensi) bersama-sama dengan surat jawabannya."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 494,
    "category": "Hukum Acara Perdata",
    "topicTag": "Syarat Diterimanya Gugatan Rekonvensi",
    "question": "Berdasarkan Pasal 132a ayat (1) HIR, gugatan rekonvensi TIDAK DAPAT diajukan dalam hal...",
    "options": [
      {
        "key": "A",
        "text": "Penggugat asal bertindak dalam suatu kedudukan dan gugatan balik mengenai dirinya secara pribadi."
      },
      {
        "key": "B",
        "text": "Tergugat menuntut ganti kerugian."
      },
      {
        "key": "C",
        "text": "Perkara disidangkan secara e-court."
      },
      {
        "key": "D",
        "text": "Penggugat didampingi advokat magang."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Gugatan rekonvensi dilarang jika penggugat asal menggugat demi kualitas jabatan orang lain tetapi digugat balik secara pribadi.",
      "legalBasis": "Pasal 132a ayat (1) HIR / Pasal 157 RBg.",
      "analysis": "Pasal 132a ayat (1) angka 1 HIR mengecualikan rekonvensi apabila penggugat bertindak dalam suatu kualitas (misal: wali/pengurus yayasan) sedangkan rekonvensi ditujukan terhadap pribadinya sendiri."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 495,
    "category": "Hukum Acara Perdata",
    "topicTag": "Putusan Sela (Interlocutoir)",
    "question": "Putusan yang dijatuhkan oleh hakim sebelum menjatuhkan putusan akhir dengan tujuan untuk memerintahkan pembuktian atau memperlancar pemeriksaan perkara disebut...",
    "options": [
      {
        "key": "A",
        "text": "Putusan Sela (Interlocutoir)"
      },
      {
        "key": "B",
        "text": "Putusan Akhir (Eindvonnis)"
      },
      {
        "key": "C",
        "text": "Putusan Verstek"
      },
      {
        "key": "D",
        "text": "Putusan Deklaratoir"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Putusan sela dijatuhkan sebelum putusan akhir guna mempermudah kelanjutan pemeriksaan perkara.",
      "legalBasis": "Pasal 185 ayat (1) HIR / Pasal 196 RBg.",
      "analysis": "Pasal 185 ayat (1) HIR membedakan antara putusan akhir (eindvonnis) dan putusan yang bukan putusan akhir (putusan sela), seperti putusan interlocutoir yang memerintahkan pemeriksaan saksi atau sumpah penentu."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 496,
    "category": "Hukum Acara Perdata",
    "topicTag": "Putusan Verstek",
    "question": "Apabila Tergugat yang telah dipanggil secara sah dan patut tidak hadir pada hari sidang pertama dan tidak pula mengirimkan kuasanya tanpa alasan yang sah, maka hakim dapat menjatuhkan...",
    "options": [
      {
        "key": "A",
        "text": "Putusan Verstek (memutus di luar hadirnya Tergugat)"
      },
      {
        "key": "B",
        "text": "Putusan Gugur Gugatan"
      },
      {
        "key": "C",
        "text": "Putusan Dissenting"
      },
      {
        "key": "D",
        "text": "Surat Perintah Penangkapan"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Tergugat yang tidak hadir setelah dipanggil patut dapat dijatuhkan putusan verstek.",
      "legalBasis": "Pasal 125 ayat (1) HIR / Pasal 149 ayat (1) RBg.",
      "analysis": "Pasal 125 ayat (1) HIR: Jika tergugat tidak datang pada hari yang ditentukan dan tidak menyuruh orang lain menghadap sebagai wakilnya, gugatan dikabulkan dengan verstek kecuali jika gugatan melawan hak atau tidak beralasan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 497,
    "category": "Hukum Acara Perdata",
    "topicTag": "Verzet Terhadap Putusan Verstek",
    "question": "Upaya hukum biasa yang dapat diajukan oleh Tergugat terhadap putusan verstek yang merugikannya adalah...",
    "options": [
      {
        "key": "A",
        "text": "Perlawanan (Verzet) dalam tenggang waktu 14 hari sejak pemberitahuan putusan."
      },
      {
        "key": "B",
        "text": "Banding ke Pengadilan Tinggi."
      },
      {
        "key": "C",
        "text": "Kasasi demi hukum."
      },
      {
        "key": "D",
        "text": "Praperadilan perdata."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Upaya hukum terhadap putusan verstek adalah Perlawanan (Verzet) dalam waktu 14 hari.",
      "legalBasis": "Pasal 129 ayat (1) HIR / Pasal 153 RBg.",
      "analysis": "Pasal 129 ayat (1) HIR: Tergugat yang dihukum dengan verstek berhak mengajukan perlawanan (verzet) dalam tempo 14 hari setelah putusan diberitahukan kepadanya secara langsung."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 498,
    "category": "Hukum Acara Perdata",
    "topicTag": "Daluwarsa Mengajukan Banding Perdata",
    "question": "Permohonan banding terhadap putusan Pengadilan Negeri dalam perkara perdata wajib diajukan ke kepaniteraan PN dalam tenggang waktu...",
    "options": [
      {
        "key": "A",
        "text": "14 hari sejak putusan diucapkan atau diberitahukan secara sah."
      },
      {
        "key": "B",
        "text": "30 hari kerja."
      },
      {
        "key": "C",
        "text": "7 hari kalender."
      },
      {
        "key": "D",
        "text": "60 hari sejak vonis."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Tenggang waktu permohonan banding perkara perdata adalah 14 hari kalender.",
      "legalBasis": "Pasal 46 UU No. 20 Tahun 1947 jo. Pasal 199 RBg.",
      "analysis": "Berdasarkan UU No. 20 Tahun 1947 tentang Peradilan Ulangan di Jawa dan Madura serta Pasal 199 RBg untuk luar Jawa/Madura, permohonan banding diajukan paling lambat 14 hari setelah putusan diberitahukan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 499,
    "category": "Hukum Acara Perdata",
    "topicTag": "Daluwarsa Mengajukan Kasasi Perdata",
    "question": "Berdasarkan Pasal 46 ayat (1) UU No. 14 Tahun 1985 jo. UU No. 5 Tahun 2004, permohonan kasasi perdata ke Mahkamah Agung harus diajukan dalam waktu...",
    "options": [
      {
        "key": "A",
        "text": "14 hari setelah putusan atau penetapan pengadilan yang dimohonkan kasasi diberitahukan kepada pemohon."
      },
      {
        "key": "B",
        "text": "30 hari sejak putusan banding."
      },
      {
        "key": "C",
        "text": "60 hari kerja."
      },
      {
        "key": "D",
        "text": "90 hari kalender."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Permohonan kasasi wajib diajukan dalam jangka waktu 14 hari sejak putusan banding diberitahukan.",
      "legalBasis": "Pasal 46 ayat (1) UU No. 14 Tahun 1985 tentang Mahkamah Agung.",
      "analysis": "Pasal 46 ayat (1) UU MA: Permohonan kasasi disampaikan secara tertulis atau lisan melalui Panitera Pengadilan Tingkat Pertama dalam tenggang waktu 14 (empat belas) hari sesudah putusan atau penetapan diberitahukan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 500,
    "category": "Hukum Acara Pidana",
    "topicTag": "Asas In Dubio Pro Reo",
    "question": "Asas fundamental dalam hukum acara pidana yang menyatakan bahwa jika terdapat keragu-raguan mengenai kesalahan terdakwa, maka hakim harus menjatuhkan putusan yang menguntungkan terdakwa disebut...",
    "options": [
      {
        "key": "A",
        "text": "In Dubio Pro Reo"
      },
      {
        "key": "B",
        "text": "Presumption of Innocence"
      },
      {
        "key": "C",
        "text": "Ne Bis In Idem"
      },
      {
        "key": "D",
        "text": "Audi Alteram Partem"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Asas In Dubio Pro Reo: apabila timbul keraguan dalam pembuktian, hakim memutus yang meringankan terdakwa.",
      "legalBasis": "Doktrin Hukum Pidana jo. Pasal 182 ayat (6) KUHAP.",
      "analysis": "In dubio pro reo merupakan doktrin universal di mana apabila hakim ragu-ragu karena bukti tidak mencapai batas minimum pembuktian keyakinan, maka putusan harus menguntungkan terdakwa (membebaskan terdakwa)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 501,
    "category": "Hukum Acara Pidana",
    "topicTag": "Asas Ne Bis In Idem",
    "question": "Berdasarkan Pasal 76 KUHP, seseorang tidak boleh dituntut dua kali karena perbuatan yang terhadapnya telah diputus oleh hakim dengan putusan yang telah inkracht. Asas ini disebut...",
    "options": [
      {
        "key": "A",
        "text": "Ne Bis In Idem"
      },
      {
        "key": "B",
        "text": "Non Retroaktif"
      },
      {
        "key": "C",
        "text": "Lex Specialis Derogat Legi Generali"
      },
      {
        "key": "D",
        "text": "Pacta Sunt Servanda"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Asas Ne Bis In Idem melarang seseorang diadili dua kali atas tindak pidana yang sama yang telah inkracht.",
      "legalBasis": "Pasal 76 Kitab Undang-Undang Hukum Pidana (KUHP).",
      "analysis": "Pasal 76 ayat (1) KUHP: Kecuali dalam hal putusan hakim masih dapat diubah, orang tidak dapat dituntut sekali lagi lantaran perbuatan yang baginya telah diputus oleh hakim Indonesia dengan putusan yang telah berkekuatan hukum tetap."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 502,
    "category": "Hukum Acara Pidana",
    "topicTag": "Saksi De Auditu (Hearsay Evidence)",
    "question": "Keterangan saksi yang diperoleh dari penuturan atau cerita orang lain (bukan yang didengar atau dilihat sendiri oleh saksi) dinamakan saksi...",
    "options": [
      {
        "key": "A",
        "text": "De Auditu (Testimonium de auditu) yang tidak memiliki nilai sebagai alat bukti keterangan saksi yang berdiri sendiri."
      },
      {
        "key": "B",
        "text": "Mahkota"
      },
      {
        "key": "C",
        "text": "A De Charge"
      },
      {
        "key": "D",
        "text": "A Charge"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Saksi de auditu tidak sah sebagai alat bukti keterangan saksi murni karena bukan dialami sendiri.",
      "legalBasis": "Pasal 1 angka 27 KUHAP jo. Yurisprudensi MA No. 308 K/Pid/1959.",
      "analysis": "Berdasarkan Pasal 1 angka 27 KUHAP dan yurisprudensi tetap MA, kesaksian testimonium de auditu tidak bernilai sebagai alat bukti keterangan saksi karena saksi tidak mengalami atau melihat sendiri peristiwa delik."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 503,
    "category": "Hukum Acara Pidana",
    "topicTag": "Saksi Mahkota (Kroongetuige)",
    "question": "Dalam perkara pidana penyertaan (deelneming), saksi yang berasal dari salah satu terdakwa/tersangka yang displitzing berkasnya untuk bersaksi bagi terdakwa lainnya dinamakan...",
    "options": [
      {
        "key": "A",
        "text": "Saksi Mahkota (Kroongetuige)"
      },
      {
        "key": "B",
        "text": "Saksi Ahli"
      },
      {
        "key": "C",
        "text": "Saksi Bisu"
      },
      {
        "key": "D",
        "text": "Saksi Petunjuk"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Saksi mahkota adalah terdakwa yang dijadikan saksi bagi terdakwa lain dalam perkara penyertaan.",
      "legalBasis": "Pasal 168 huruf c jo. Pasal 184 ayat (1) KUHAP (UU No. 8 Tahun 1981) jo. Yurisprudensi MA RI No. 1986 K/Pid/1989.",
      "analysis": "Saksi mahkota diperbolehkan oleh Mahkamah Agung dalam hal kekurangan alat bukti dengan syarat perkara mereka dilakukan pemisahan berkas (splitsing)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 504,
    "category": "Hukum Acara Pidana",
    "topicTag": "Saksi A De Charge dan A Charge",
    "question": "Saksi yang diajukan oleh Terdakwa atau Penasihat Hukumnya guna menguntungkan atau meringankan posisi Terdakwa disebut...",
    "options": [
      {
        "key": "A",
        "text": "Saksi A De Charge (Saksi Meringankan)"
      },
      {
        "key": "B",
        "text": "Saksi A Charge (Saksi Memberatkan)"
      },
      {
        "key": "C",
        "text": "Saksi Verbalisan"
      },
      {
        "key": "D",
        "text": "Saksi Pelapor"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Saksi a de charge adalah saksi yang meringankan pembelaan terdakwa.",
      "legalBasis": "Pasal 65 jo. Pasal 116 ayat (3) KUHAP.",
      "analysis": "Pasal 65 KUHAP menjamin hak tersangka/terdakwa untuk mengusahakan dan mengajukan saksi dan/atau seseorang yang memiliki keahlian khusus guna memberikan keterangan yang menguntungkan bagi dirinya (saksi a de charge)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 505,
    "category": "Hukum Acara Pidana",
    "topicTag": "Saksi Verbalisan (Penyidik Saksi)",
    "question": "Penyidik kepolisian yang dihadirkan di persidangan pengadilan untuk membantah dalil Terdakwa yang mencabut keterangan Berita Acara Pemeriksaan (BAP) dengan alasan mengalami tekanan fisik disebut saksi...",
    "options": [
      {
        "key": "A",
        "text": "Verbalisan (Saksi Penyidik)"
      },
      {
        "key": "B",
        "text": "Ahlul Halli wal Aqdi"
      },
      {
        "key": "C",
        "text": "De Auditu"
      },
      {
        "key": "D",
        "text": "Notaris Pengganti"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Penyidik yang dipanggil menjadi saksi untuk mengklarifikasi BAP disebut saksi verbalisan.",
      "legalBasis": "Pasal 163 jo. Pasal 184 ayat (1) KUHAP (UU No. 8 Tahun 1981) jo. Surat Edaran Mahkamah Agung (SEMA) No. 1 Tahun 1984.",
      "analysis": "Saksi verbalisan adalah penyidik yang memeriksa terdakwa pada tahap penyidikan yang dipanggil ke persidangan untuk memberikan keterangan sumpah mengenai kebenaran proses penyusunan BAP."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 506,
    "category": "Hukum Acara Pidana",
    "topicTag": "Batas Waktu Mengajukan Memori Banding Pidana",
    "question": "Berdasarkan Pasal 233 ayat (2) KUHAP, permohonan banding perkara pidana wajib diajukan ke panitera pengadilan negeri dalam waktu...",
    "options": [
      {
        "key": "A",
        "text": "7 hari sesudah putusan dijatuhkan atau diberitahukan secara patut kepada terdakwa."
      },
      {
        "key": "B",
        "text": "14 hari kerja."
      },
      {
        "key": "C",
        "text": "30 hari kalender."
      },
      {
        "key": "D",
        "text": "3 hari sejak pembacaan vonis."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Permohonan banding perkara pidana wajib diajukan dalam waktu 7 hari setelah putusan.",
      "legalBasis": "Pasal 233 ayat (2) KUHAP.",
      "analysis": "Pasal 233 ayat (2) KUHAP mengatur tenggang waktu banding pidana yang sangat singkat: Permohonan banding hanya dapat diajukan dalam tenggang waktu tujuh hari sesudah putusan dijatuhkan atau setelah putusan diberitahukan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 507,
    "category": "Hukum Acara Pidana",
    "topicTag": "Alasan Peninjauan Kembali (PK) Pidana",
    "question": "Berdasarkan Pasal 263 ayat (2) KUHAP, permohonan Peninjauan Kembali (PK) terhadap putusan pidana yang telah inkracht dapat diajukan atas dasar...",
    "options": [
      {
        "key": "A",
        "text": "Ditemukannya keadaan baru (novum) yang menimbulkan dugaan kuat bahwa jika novum itu sudah diketahui sewaktu sidang, terdakwa akan dibebaskan."
      },
      {
        "key": "B",
        "text": "Jaksa penuntut umum merasa tuntutannya terlalu ringan."
      },
      {
        "key": "C",
        "text": "Terdakwa ingin mengulur waktu eksekusi hukuman."
      },
      {
        "key": "D",
        "text": "Adanya pergantian hakim agung."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "PK diajukan atas dasar ditemukannya novum (keadaan baru) yang menentukan.",
      "legalBasis": "Pasal 263 ayat (2) huruf a KUHAP.",
      "analysis": "Pasal 263 ayat (2) huruf a KUHAP: Apabila terdapat keadaan baru yang menimbulkan dugaan kuat, bahwa jika keadaan itu sudah diketahui sewaktu sidang masih berlangsung, hasilnya akan berupa putusan bebas atau lepas atau tuntutan penuntut umum tidak dapat diterima."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 508,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hak Mengajukan PK Hanya Bagi Terpidana/Ahli Waris",
    "question": "Berdasarkan Putusan Mahkamah Konstitusi No. 33/PUU-XIV/2016, Peninjauan Kembali (PK) dalam perkara pidana HANYA berhak diajukan oleh...",
    "options": [
      {
        "key": "A",
        "text": "Terpidana atau ahli warisnya, dan Jaksa Penuntut Umum TIDAK berhak mengajukan PK."
      },
      {
        "key": "B",
        "text": "Jaksa Penuntut Umum dan Kejaksaan Agung."
      },
      {
        "key": "C",
        "text": "Menteri Hukum dan Hak Asasi Manusia."
      },
      {
        "key": "D",
        "text": "Penyidik kepolisian yang menyidik perkara."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Jaksa penuntut umum dilarang mengajukan PK; PK semata-mata adalah hak terpidana atau ahli warisnya.",
      "legalBasis": "Pasal 263 ayat (1) KUHAP jo. Putusan MK No. 33/PUU-XIV/2016.",
      "analysis": "MK menegaskan Jaksa Penuntut Umum tidak berwenang mengajukan Peninjauan Kembali dalam perkara pidana karena PK diciptakan sebagai instrumen perlindungan hak asasi manusia bagi terpidana terhadap kekhilafan peradilan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 509,
    "category": "Hukum Acara Pidana",
    "topicTag": "Batas Pengajuan Peninjauan Kembali Pasca Putusan MK 34/PUU-XI/2013",
    "question": "Berdasarkan Putusan Mahkamah Konstitusi No. 34/PUU-XI/2013 yang membatalkan Pasal 268 ayat (3) KUHAP, permohonan Peninjauan Kembali (PK)...",
    "options": [
      {
        "key": "A",
        "text": "Dapat diajukan lebih dari 1 (satu) kali sepanjang ditemukan novum baru yang berbeda demi menegakkan keadilan materil."
      },
      {
        "key": "B",
        "text": "Tetap dibatasi mutlak hanya 1 kali saja."
      },
      {
        "key": "C",
        "text": "Wajib mendapat izin tertulis dari Presiden."
      },
      {
        "key": "D",
        "text": "Dibatasi maksimal 2 kali."
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "MK menyatakan pengajuan PK dapat dilakukan lebih dari satu kali jika ditemukan novum baru yang valid.",
      "legalBasis": "Pasal 268 ayat (3) KUHAP (UU No. 8 Tahun 1981) jo. Putusan Mahkamah Konstitusi No. 34/PUU-XI/2013.",
      "analysis": "Mahkamah Konstitusi menyatakan Pasal 268 ayat (3) KUHAP yang membatasi PK hanya satu kali inkonstitusional bersyarat demi mewujudkan keadilan substantif apabila terpidana menemukan novum baru yang fundamental."
    },
    "difficulty": "Sedang"
  }
];

// src/data/categoryExpansionBank.ts
var CATEGORY_EXPANSION_BANK = [
  // ==========================================
  // --- HUKUM ACARA PERADILAN AGAMA (501 - 515) ---
  // ==========================================
  {
    id: 501,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Kompetensi Absolut Pengadilan Agama",
    question: "Berdasarkan Pasal 49 UU No. 3 Tahun 2006 tentang Perubahan atas UU No. 7 Tahun 1989 tentang Peradilan Agama, bidang sengketa baru yang menjadi kewenangan absolut Pengadilan Agama adalah:",
    options: [
      { key: "A", text: "Sengketa perbankan konvensional yang melibatkan nasabah beragama Islam" },
      { key: "B", text: "Ekonomi syariah, termasuk perbankan syariah, asuransi syariah, dan obligasi syariah" },
      { key: "C", text: "Tindak pidana penistaan agama yang dilakukan oleh umat Islam" },
      { key: "D", text: "Sengketa tanah adat yang belum bersertifikat milik masyarakat Muslim" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Kewenangan absolut Pengadilan Agama diperluas mencakup sengketa ekonomi syariah.",
      legalBasis: "Pasal 49 huruf i UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.",
      analysis: "Amandemen UU Peradilan Agama melalui UU No. 3 Tahun 2006 secara eksplisit menambahkan kewenangan mengadili sengketa di bidang Ekonomi Syariah, yang meliputi bank syariah, lembaga keuangan mikro syariah, asuransi syariah, reasuransi syariah, reksadana syariah, obligasi syariah, dan bisnis syariah lainnya."
    },
    difficulty: "Mudah"
  },
  {
    id: 502,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Kompetensi Relatif Cerai Talak",
    question: "Seorang suami bertempat tinggal di Kota Bandung bermaksud menceraikan istrinya yang bertempat tinggal di Kota Surabaya. Di Pengadilan Agama manakah permohonan cerai talak harus diajukan?",
    options: [
      { key: "A", text: "Pengadilan Agama Kota Bandung tempat kediaman suami (Pemohon)" },
      { key: "B", text: "Pengadilan Agama Kota Surabaya tempat kediaman istri (Termohon)" },
      { key: "C", text: "Bebas memilih antara Pengadilan Agama Bandung atau Surabaya" },
      { key: "D", text: "Pengadilan Agama tempat perkawinan mereka dahulu dilangsungkan" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Permohonan cerai talak diajukan kepada Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Termohon.",
      legalBasis: "Pasal 66 ayat (2) UU No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.",
      analysis: "Pasal 66 ayat (2) UU Peradilan Agama menegaskan bahwa permohonan cerai talak diajukan oleh suami kepada Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Termohon (istri), kecuali apabila Termohon meninggalkan tempat kediaman bersama tanpa izin Pemohon."
    },
    difficulty: "Sedang"
  },
  {
    id: 503,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Kompetensi Relatif Cerai Gugat",
    question: "Seorang istri bermaksud mengajukan gugatan perceraian (cerai gugat) terhadap suaminya. Istri berdomisili di Jakarta Selatan sedangkan suami bertempat tinggal di Yogyakarta. Pengadilan Agama yang berwenang memeriksa gugatan tersebut adalah:",
    options: [
      { key: "A", text: "Pengadilan Agama Jakarta Selatan (tempat kediaman Penggugat)" },
      { key: "B", text: "Pengadilan Agama Kota Yogyakarta (tempat kediaman Tergugat)" },
      { key: "C", text: "Pengadilan Tinggi Agama DKI Jakarta" },
      { key: "D", text: "Pengadilan Negeri Jakarta Selatan secara perdata umum" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Gugatan perceraian oleh istri diajukan ke Pengadilan Agama tempat kediaman Penggugat.",
      legalBasis: "Pasal 73 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 132 KHI.",
      analysis: "Berdasarkan Pasal 73 ayat (1) UU No. 7 Tahun 1989, gugatan perceraian diajukan oleh istri atau kuasanya kepada Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman Penggugat, kecuali apabila Penggugat dengan sengaja meninggalkan tempat kediaman bersama tanpa izin Tergugat."
    },
    difficulty: "Sedang"
  },
  {
    id: 504,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Kedaluwarsa Ikrar Talak",
    question: "Apabila putusan permohonan cerai talak telah berkekuatan hukum tetap dan Pengadilan Agama telah memanggil Pemohon untuk mengikrarkan talak, berapa lama batas waktu bagi Pemohon sebelum hak mengikrarkan talak gugur?",
    options: [
      { key: "A", text: "30 hari terhitung sejak penetapan hari sidang ikrar talak" },
      { key: "B", text: "60 hari terhitung sejak putusan berkekuatan hukum tetap" },
      { key: "C", text: "6 (enam) bulan terhitung sejak hari sidang penyaksian ikrar talak ditetapkan" },
      { key: "D", text: "1 (satu) tahun sejak putusan inkracht" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Kewenangan mengikrarkan talak gugur jika tidak diucapkan dalam 6 bulan sejak hari sidang ikrar talak.",
      legalBasis: "Pasal 70 ayat (6) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      analysis: "Pasal 70 ayat (6) UU No. 7 Tahun 1989 menentukan bahwa jika suami tidak mengucapkan ikrar talak dalam tenggang waktu 6 (enam) bulan terhitung sejak hari sidang penyaksian ikrar talak yang telah ditetapkan, maka hak suami untuk mengikrarkan talak gugur dan ikatan perkawinan tetap utuh."
    },
    difficulty: "Sedang"
  },
  {
    id: 505,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Hadhanah (Hak Asuh Anak)",
    question: "Menurut Pasal 105 Kompilasi Hukum Islam (KHI), dalam hal terjadinya perceraian, pemeliharaan anak yang belum berumur 12 tahun (belum mumayyiz) adalah:",
    options: [
      { key: "A", text: "Hak sepenuhnya bagi ayah karena kewajiban memberi nafkah" },
      { key: "B", text: "Hak ibunya, kecuali apabila ibunya terbukti tidak cakap atau berkelakuan buruk" },
      { key: "C", text: "Ditentukan oleh undian di depan majelis hakim" },
      { key: "D", text: "Wajib diserahkan ke panti asuhan di bawah pengawasan dinas sosial" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Pemeliharaan anak yang belum mumayyiz adalah hak ibunya.",
      legalBasis: "Pasal 105 huruf a Kompilasi Hukum Islam (KHI).",
      analysis: "Pasal 105 huruf a KHI mengatur bahwa pemeliharaan anak yang belum mumayyiz atau belum berumur 12 tahun adalah hak ibunya. Setelah anak tersebut mumayyiz, anak tersebut berhak memilih untuk diasuh oleh ayah atau ibunya."
    },
    difficulty: "Mudah"
  },
  {
    id: 506,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Bagian Waris Istri",
    question: "Seorang pewaris pria Muslim meninggal dunia meninggalkan seorang istri dan 2 orang anak kandung. Berapakah bagian warisan yang diperoleh istri menurut Hukum Waris Islam (KHI)?",
    options: [
      { key: "A", text: "1/2 (setengah) bagian" },
      { key: "B", text: "1/4 (seperempat) bagian" },
      { key: "C", text: "1/8 (seperdelapan) bagian" },
      { key: "D", text: "1/3 (sepertiga) bagian" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Istri mendapat 1/8 bagian jika pewaris meninggalkan anak atau cucu.",
      legalBasis: "Pasal 180 Kompilasi Hukum Islam (KHI).",
      analysis: "Berdasarkan Pasal 180 KHI, janda mendapat seperempat bagian bila pewaris tidak meninggalkan anak, dan mendapat seperdelapan (1/8) bagian bila pewaris meninggalkan anak."
    },
    difficulty: "Sedang"
  },
  {
    id: 507,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Bagian Waris Suami",
    question: "Seorang wanita Muslim meninggal dunia tanpa meninggalkan anak kandung maupun keturunan. Suami yang ditinggalkan berhak menerima bagian warisan sebesar:",
    options: [
      { key: "A", text: "1/2 (setengah) bagian" },
      { key: "B", text: "1/4 (seperempat) bagian" },
      { key: "C", text: "2/3 (dua pertiga) bagian" },
      { key: "D", text: "Seluruh sisa harta tanpa batas" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Duda mendapat separuh bagian bila pewaris tidak meninggalkan anak.",
      legalBasis: "Pasal 179 Kompilasi Hukum Islam (KHI).",
      analysis: "Pasal 179 KHI mengatur: Duda mendapat separuh (1/2) bagian bila pewaris tidak meninggalkan anak, dan bila pewaris meninggalkan anak, maka duda mendapat seperempat (1/4) bagian."
    },
    difficulty: "Sedang"
  },
  {
    id: 508,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Harta Bersama Pasca Cerai",
    question: "Berdasarkan Pasal 97 Kompilasi Hukum Islam (KHI), janda atau duda cerai masing-masing berhak atas harta bersama sebanyak:",
    options: [
      { key: "A", text: "1/3 untuk istri dan 2/3 untuk suami" },
      { key: "B", text: "1/2 (seperdua) dari harta bersama sepanjang tidak ditentukan lain dalam perjanjian perkawinan" },
      { key: "C", text: "Sepenuhnya menjadi milik pihak yang tidak mengajukan permohonan cerai" },
      { key: "D", text: "Dibagikan seluruhnya kepada anak-anak kandung" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Masing-masing janda atau duda berhak 1/2 dari harta bersama.",
      legalBasis: "Pasal 97 Kompilasi Hukum Islam (KHI).",
      analysis: "Pasal 97 KHI menyatakan: Janda atau duda cerai masing-masing berhak seperdua (1/2) dari harta bersama sepanjang tidak ditentukan lain dalam perjanjian perkawinan."
    },
    difficulty: "Mudah"
  },
  {
    id: 509,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Wasiat Wajibah",
    question: "Menurut Pasal 209 KHI, terhadap anak angkat yang tidak menerima wasiat dari orang tua angkatnya, atau orang tua angkat yang tidak menerima wasiat dari anak angkatnya, diberi wasiat wajibah sebanyak-banyaknya:",
    options: [
      { key: "A", text: "1/2 (setengah) dari harta peninggalan" },
      { key: "B", text: "1/3 (sepertiga) dari harta warisan" },
      { key: "C", text: "1/4 (seperempat) dari harta warisan" },
      { key: "D", text: "Sama besar dengan anak kandung laki-laki tertua" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Besarnya wasiat wajibah untuk anak angkat atau orang tua angkat maksimal 1/3 bagian.",
      legalBasis: "Pasal 209 ayat (1) dan (2) Kompilasi Hukum Islam (KHI).",
      analysis: "Pasal 209 ayat (2) KHI menetapkan bahwa terhadap anak angkat yang tidak menerima wasiat diberi wasiat wajibah sebanyak-banyaknya 1/3 (sepertiga) dari harta warisan orang tua angkatnya."
    },
    difficulty: "Sedang"
  },
  {
    id: 510,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Itsbat Nikah",
    question: "Permohonan pengesahan nikah (Itsbat Nikah) ke Pengadilan Agama yang diajukan oleh suami dan istri secara bersama-sama merupakan bentuk perkara:",
    options: [
      { key: "A", text: "Gugatan kontensius (contentiosa) yang menghasilkan putusan vonnis" },
      { key: "B", text: "Permohonan voluntair (jurisdictio voluntaria) yang menghasilkan penetapan (beschikking)" },
      { key: "C", text: "Gugatan perlawanan pihak ketiga (derden verzet)" },
      { key: "D", text: "Permohonan peninjauan kembali khusus perkawinan" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Permohonan itsbat nikah sepihak/bersama adalah perkara voluntair berwujud penetapan.",
      legalBasis: "Pasal 7 ayat (2) dan (3) KHI jo. Pedoman Teknis Administrasi Peradilan Agama MA RI.",
      analysis: "Itsbat nikah yang diajukan oleh suami dan istri secara bersama-sama tidak terdapat pihak lawan (tanpa sengketa), sehingga diperiksa sebagai perkara voluntair dan produk hukumnya berupa Penetapan (Beschikking)."
    },
    difficulty: "Sedang"
  },
  // ========================================================
  // --- HUKUM ACARA MAHKAMAH KONSTITUSI (511 - 522) ---
  // ========================================================
  {
    id: 511,
    category: "Hukum Acara Mahkamah Konstitusi",
    topicTag: "Kewenangan Mahkamah Konstitusi",
    question: "Berdasarkan Pasal 24C ayat (1) UUD 1945 jo. Pasal 10 ayat (1) UU No. 24 Tahun 2003, Mahkamah Konstitusi berwenang mengadili pada tingkat pertama dan terakhir yang putusannya bersifat final untuk hal berikut, KECUALI:",
    options: [
      { key: "A", text: "Menguji undang-undang terhadap Undang-Undang Dasar Negara Republik Indonesia Tahun 1945" },
      { key: "B", text: "Memutus sengketa kewenangan lembaga negara yang kewenangannya diberikan oleh UUD 1945" },
      { key: "C", text: "Menguji peraturan pemerintah dan peraturan perundang-undangan di bawah undang-undang terhadap undang-undang" },
      { key: "D", text: "Memutus pembubaran partai politik dan memutus perselisihan tentang hasil pemilihan umum" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Pengujian peraturan di bawah undang-undang adalah kewenangan Mahkamah Agung, bukan MK.",
      legalBasis: "Pasal 24A ayat (1) dan Pasal 24C ayat (1) UUD 1945.",
      analysis: "Pengujian peraturan perundang-undangan di bawah undang-undang terhadap undang-undang (judicial review peraturan di bawah UU) merupakan kewenangan konstitusional Mahkamah Agung (MA) berdasarkan Pasal 24A ayat (1) UUD 1945, bukan kewenangan Mahkamah Konstitusi."
    },
    difficulty: "Mudah"
  },
  {
    id: 512,
    category: "Hukum Acara Mahkamah Konstitusi",
    topicTag: "Legal Standing Pemohon PUU",
    question: "Menurut Pasal 51 ayat (1) UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi, pihak yang dapat menjadi Pemohon dalam perkara pengujian undang-undang (PUU) adalah pihak yang menganggap hak dan/atau kewenangan konstitusionalnya dirugikan oleh berlakunya undang-undang, yaitu:",
    options: [
      { key: "A", text: "Hanya partai politik yang memiliki kursi di DPR RI" },
      { key: "B", text: "Perorangan WNI, kesatuan masyarakat hukum adat, badan hukum publik/privat, atau lembaga negara" },
      { key: "C", text: "Khusus advokat yang terdaftar di Mahkamah Agung" },
      { key: "D", text: "Warga negara asing yang berdomisili sah di Indonesia" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Pemohon PUU meliputi perorangan WNI, kesatuan masyarakat adat, badan hukum, dan lembaga negara.",
      legalBasis: "Pasal 51 ayat (1) UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi.",
      analysis: "Pasal 51 ayat (1) UU MK secara limitatif merumuskan Pemohon adalah: a. perorangan warga negara Indonesia; b. kesatuan masyarakat hukum adat sepanjang masih hidup dan sesuai perkembangan; c. badan hukum publik atau badan hukum privat; atau d. lembaga negara."
    },
    difficulty: "Sedang"
  },
  {
    id: 513,
    category: "Hukum Acara Mahkamah Konstitusi",
    topicTag: "Sifat Putusan MK",
    question: "Putusan Mahkamah Konstitusi memperoleh kekuatan hukum tetap sejak selesai diucapkan dalam sidang pleno terbuka untuk umum dan bersifat final and binding, yang bermakna:",
    options: [
      { key: "A", text: "Masih dapat diajukan kasasi ke Mahkamah Agung dalam tenggang waktu 14 hari" },
      { key: "B", text: "Langsung mengikat seluruh organ negara dan warga negara serta tidak ada upaya hukum apa pun terhadapnya" },
      { key: "C", text: "Dapat dibatalkan melalui penetapan Presiden dalam keadaan darurat" },
      { key: "D", text: "Wajib mendapatkan ratifikasi terlebih dahulu dari Dewan Perwakilan Rakyat" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Putusan MK bersifat final, mengikat secara hukum (erga omnes), dan tidak ada upaya hukum lanjutan.",
      legalBasis: "Pasal 24C ayat (1) UUD 1945 jo. Pasal 10 ayat (1) UU No. 24 Tahun 2003.",
      analysis: "Sifat final and binding putusan MK mengandung arti bahwa putusan tersebut langsung berkekuatan hukum tetap seketika diucapkan dan tidak terbuka upaya hukum biasa maupun luar biasa (seperti banding, kasasi, atau peninjauan kembali)."
    },
    difficulty: "Mudah"
  },
  {
    id: 514,
    category: "Hukum Acara Mahkamah Konstitusi",
    topicTag: "Komposisi Majelis Hakim MK",
    question: "Dalam memeriksa perkara di Mahkamah Konstitusi, pemeriksaan pendahuluan dilakukan oleh Panel Hakim yang terdiri dari sekurang-kurangnya berapa orang Hakim Konstitusi?",
    options: [
      { key: "A", text: "1 (satu) orang hakim tunggal" },
      { key: "B", text: "3 (tiga) orang Hakim Konstitusi" },
      { key: "C", text: "5 (lima) orang Hakim Konstitusi" },
      { key: "D", text: "9 (sembilan) orang Hakim Konstitusi" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Pemeriksaan pendahuluan di MK dilakukan oleh Panel Hakim beranggotakan 3 orang hakim konstitusi.",
      legalBasis: "Pasal 40 ayat (1) UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi.",
      analysis: "Berdasarkan Pasal 40 ayat (1) UU MK, Mahkamah Konstitusi memeriksa, mengadili, dan memutus dalam sidang pleno dengan 9 orang hakim konstitusi, kecuali dalam keadaan luar biasa dengan 7 orang. Namun untuk pemeriksaan pendahuluan dapat dibentuk Panel Hakim yang terdiri dari sekurang-kurangnya 3 (tiga) orang Hakim Konstitusi."
    },
    difficulty: "Sedang"
  },
  {
    id: 515,
    category: "Hukum Acara Mahkamah Konstitusi",
    topicTag: "Amar Putusan Tidak Dapat Diterima (NO)",
    question: "Dalam perkara pengujian undang-undang di Mahkamah Konstitusi, apabila Pemohon tidak memiliki kedudukan hukum (legal standing) atau permohonan kabur (obscuur libel), maka amar putusan Mahkamah Konstitusi berbunyi:",
    options: [
      { key: "A", text: "Permohonan Pemohon ditolak untuk seluruhnya" },
      { key: "B", text: "Permohonan Pemohon dikabulkan bersyarat" },
      { key: "C", text: "Permohonan Pemohon tidak dapat diterima (niet ontvankelijke verklaard)" },
      { key: "D", text: "Permohonan Pemohon gugur demi hukum" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Jika syarat formil/legal standing tidak terpenuhi, amar putusan MK adalah Tidak Dapat Diterima.",
      legalBasis: "Pasal 56 ayat (1) UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi.",
      analysis: "Pasal 56 ayat (1) UU MK mengatur bahwa dalam hal Pemohon dan/atau permohonannya tidak memenuhi syarat formil sebagaimana dimaksud dalam Pasal 50 dan Pasal 51 (termasuk legal standing), amar putusan menyatakan permohonan tidak dapat diterima (NO)."
    },
    difficulty: "Mudah"
  },
  // ========================================================
  // --- HUKUM ACARA ARBITRASE & APS (516 - 525) ---
  // ========================================================
  {
    id: 516,
    category: "Hukum Acara Arbitrase & APS",
    topicTag: "Klausula Arbitrase Menghapus Wewenang PN",
    question: "Berdasarkan Pasal 3 jo. Pasal 11 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan Alternatif Penyelesaian Sengketa, adanya perjanjian arbitrase tertulis antara para pihak mengakibatkan:",
    options: [
      { key: "A", text: "Pengadilan Negeri tetap berwenang mengadili sengketa apabila salah satu pihak menolak arbitrase" },
      { key: "B", text: "Pengadilan Negeri tidak berwenang untuk mengadili sengketa para pihak yang telah terikat dalam perjanjian arbitrase" },
      { key: "C", text: "Putusan arbitrase harus diperiksa ulang dari awal oleh Pengadilan Negeri" },
      { key: "D", text: "Perkara harus dilimpahkan ke Pengadilan Tinggi Tata Usaha Negara" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Adanya klausula arbitrase meniadakan kewenangan absolut Pengadilan Negeri.",
      legalBasis: "Pasal 3 jo. Pasal 11 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      analysis: "Pasal 3 UU No. 30 Tahun 1999 menegaskan bahwa Pengadilan Negeri tidak berwenang untuk mengadili sengketa para pihak yang telah terikat dalam perjanjian arbitrase. Pasal 11 ayat (1) menegaskan kompetensi absolut arbitrase dan PN wajib menolak sengketa tersebut."
    },
    difficulty: "Mudah"
  },
  {
    id: 517,
    category: "Hukum Acara Arbitrase & APS",
    topicTag: "Pendaftaran Putusan Arbitrase Nasional",
    question: "Dalam tenggang waktu berapa harikah lembar asli atau salinan otentik putusan arbitrase nasional wajib didaftarkan dan diserahkan oleh arbiter ke Kepaniteraan Pengadilan Negeri terhitung sejak putusan diucapkan?",
    options: [
      { key: "A", text: "14 (empat belas) hari" },
      { key: "B", text: "30 (tiga puluh) hari" },
      { key: "C", text: "60 (enam puluh) hari" },
      { key: "D", text: "90 (sembilan puluh) hari" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Putusan arbitrase nasional wajib diserahkan dan didaftarkan ke Panitera PN paling lambat 30 hari.",
      legalBasis: "Pasal 59 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      analysis: "Pasal 59 ayat (1) UU No. 30 Tahun 1999 menentukan bahwa dalam waktu paling lama 30 (tiga puluh) hari terhitung sejak tanggal putusan diucapkan, lembar asli atau salinan autentik putusan arbitrase diserahkan dan didaftarkan oleh arbiter atau kuasanya kepada Panitera Pengadilan Negeri."
    },
    difficulty: "Sedang"
  },
  {
    id: 518,
    category: "Hukum Acara Arbitrase & APS",
    topicTag: "Eksekusi Arbitrase Internasional",
    question: "Pengadilan manakah yang berwenang memberikan perintah pelaksanaan (Exequatur) terhadap putusan Arbitrase Internasional agar dapat dilaksanakan di Indonesia?",
    options: [
      { key: "A", text: "Pengadilan Negeri di wilayah domisili Tergugat" },
      { key: "B", text: "Ketua Pengadilan Negeri Jakarta Pusat" },
      { key: "C", text: "Ketua Mahkamah Agung Republik Indonesia" },
      { key: "D", text: "Kementerian Hukum dan Hak Asasi Manusia" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Perintah pelaksanaan (eksekuatur) putusan arbitrase internasional adalah wewenang Ketua PN Jakarta Pusat.",
      legalBasis: "Pasal 65 jo. Pasal 66 huruf d UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      analysis: "Berdasarkan Pasal 65 UU No. 30 Tahun 1999, yang berwenang menangani masalah pengakuan dan pelaksanaan Putusan Arbitrase Internasional adalah Pengadilan Negeri Jakarta Pusat, di mana permohonan pelaksanaan diajukan kepada Ketua Pengadilan Negeri Jakarta Pusat."
    },
    difficulty: "Sedang"
  },
  {
    id: 519,
    category: "Hukum Acara Arbitrase & APS",
    topicTag: "Pembatalan Putusan Arbitrase",
    question: "Berdasarkan Pasal 70 UU No. 30 Tahun 1999, permohonan pembatalan putusan arbitrase dapat diajukan kepada Pengadilan Negeri hanya apabila putusan tersebut diduga mengandung unsur berikut, KECUALI:",
    options: [
      { key: "A", text: "Surat atau dokumen yang diajukan dalam pemeriksaan diakui palsu atau dinyatakan palsu" },
      { key: "B", text: "Setelah putusan diambil, ditemukan dokumen yang bersifat menentukan yang disembunyikan pihak lawan" },
      { key: "C", text: "Putusan diambil dari hasil tipu muslihat yang dilakukan oleh salah satu pihak dalam pemeriksaan sengketa" },
      { key: "D", text: "Pertimbangan hukum arbiter dianggap salah menerapkan pasal hukum materiil perdata oleh pihak yang kalah" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Pembatalan arbitrase bersifat limitatif pada alasan tipu muslihat, pemalsuan, atau dokumen disembunyikan.",
      legalBasis: "Pasal 70 UU No. 30 Tahun 1999 tentang Arbitrase dan APS.",
      analysis: "Pasal 70 UU No. 30 Tahun 1999 mengatur alasan pembatalan putusan arbitrase secara limitatif (exhausted): dokumen palsu, dokumen disembunyikan, atau tipu muslihat. Kesalahan pertimbangan yuridis bukan merupakan alasan pembatalan putusan arbitrase di Pengadilan Negeri."
    },
    difficulty: "Sedang"
  },
  {
    id: 520,
    category: "Hukum Acara Arbitrase & APS",
    topicTag: "Jangka Waktu Mediasi Pengadilan",
    question: "Berdasarkan PERMA No. 1 Tahun 2016 tentang Prosedur Mediasi di Pengadilan, jangka waktu proses mediasi di Pengadilan Negeri berlangsung paling lama berapa hari?",
    options: [
      { key: "A", text: "14 hari kerja dan tidak dapat diperpanjang" },
      { key: "B", text: "30 hari terhitung sejak penetapan perintah mediasi dan dapat diperpanjang paling lama 30 hari" },
      { key: "C", text: "60 hari kerja tanpa perpanjangan" },
      { key: "D", text: "90 hari sejak sidang pembacaan gugatan" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Mediasi berlangsung maksimal 30 hari dan dapat diperpanjang maksimal 30 hari atas kesepakatan.",
      legalBasis: "Pasal 24 ayat (2) dan ayat (3) PERMA No. 1 Tahun 2016 tentang Prosedur Mediasi di Pengadilan.",
      analysis: "Pasal 24 ayat (2) PERMA No. 1 Tahun 2016 menentukan proses mediasi berlangsung paling lama 30 (tiga puluh) hari terhitung sejak penetapan perintah melakukan Mediasi. Atas dasar kesepakatan Para Pihak, jangka waktu Mediasi dapat diperpanjang paling lama 30 (tiga puluh) hari."
    },
    difficulty: "Mudah"
  },
  // ========================================================
  // --- HUKUM ACARA PERADILAN TATA USAHA NEGARA (521 - 525) ---
  // ========================================================
  {
    id: 521,
    category: "Hukum Acara PTUN",
    topicTag: "Unsur Keputusan TUN (KTUN)",
    question: "Berdasarkan Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang Perubahan Kedua atas UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara, yang dimaksud dengan Keputusan Tata Usaha Negara (KTUN) adalah penetapan tertulis yang dikeluarkan oleh Badan atau Pejabat TUN yang berisi tindakan hukum TUN yang bersifat:",
    options: [
      { key: "A", text: "Umum, abstrak, dan mengikat seluruh masyarakat" },
      { key: "B", text: "Konkret, individual, dan final, serta menimbulkan akibat hukum bagi seseorang atau badan hukum perdata" },
      { key: "C", text: "Sementara, rekomendatif, dan belum mempunyai kekuatan memaksa" },
      { key: "D", text: "Politik kebijakan negara yang tidak dapat diganggu gugat" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "KTUN wajib memenuhi unsur: konkret, individual, dan final serta membawa akibat hukum perdata.",
      legalBasis: "Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang PTUN.",
      analysis: "Unsur kumulatif KTUN adalah: 1. penetapan tertulis; 2. dikeluarkan Badan/Pejabat TUN; 3. berisi tindakan hukum TUN; 4. bersifat konkret, individual, dan final; 5. menimbulkan akibat hukum bagi seseorang atau badan hukum perdata."
    },
    difficulty: "Mudah"
  },
  {
    id: 522,
    category: "Hukum Acara PTUN",
    topicTag: "Tenggang Waktu Menggugat di PTUN",
    question: "Berdasarkan Pasal 55 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara, gugatan dapat diajukan hanya dalam tenggang waktu:",
    options: [
      { key: "A", text: "14 hari sejak KTUN diterima" },
      { key: "B", text: "30 hari sejak KTUN diterbitkan" },
      { key: "C", text: "90 (sembilan puluh) hari terhitung sejak saat diterimanya atau diumumkannya Keputusan Badan atau Pejabat TUN" },
      { key: "D", text: "6 bulan sejak timbulnya kerugian materiil" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Tenggang waktu menggugat di PTUN adalah 90 hari sejak diterimanya atau diumumkannya KTUN.",
      legalBasis: "Pasal 55 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      analysis: "Pasal 55 UU No. 5 Tahun 1986 menetapkan daluwarsa pengajuan gugatan ke PTUN adalah 90 hari terhitung sejak diterimanya KTUN oleh Penggugat atau sejak diumumkannya keputusan tersebut bila diumumkan."
    },
    difficulty: "Mudah"
  },
  {
    id: 523,
    category: "Hukum Acara PTUN",
    topicTag: "Dismissal Process",
    question: "Dalam Hukum Acara PTUN, pemeriksaan yang dilakukan oleh Ketua Pengadilan dalam rapat permusyawaratan untuk menyatakan gugatan tidak diterima atau tidak berdasar sebelum persidangan terbuka disebut:",
    options: [
      { key: "A", text: "Pemeriksaan Persiapan" },
      { key: "B", text: "Prosedur Dismissal (Dismissal Process)" },
      { key: "C", text: "Eksepsi Kompetensi Relatif" },
      { key: "D", text: "Pemeriksaan Singkat Pidana" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Prosedur dismissal dilakukan Ketua PTUN untuk menyaring gugatan yang tidak memenuhi syarat.",
      legalBasis: "Pasal 62 UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Berdasarkan Pasal 62 UU No. 5 Tahun 1986, dalam rapat permusyawaratan, Ketua Pengadilan berwenang memutuskan dengan suatu penetapan yang dilengkapi pertimbangan bahwa gugatan dinyatakan tidak diterima atau tidak berdasar (Rapat Permusyawaratan / Dismissal Process)."
    },
    difficulty: "Sedang"
  },
  {
    id: 524,
    category: "Hukum Acara PTUN",
    topicTag: "Larangan Rekonvensi di PTUN",
    question: "Berbeda dengan Hukum Acara Perdata umum, dalam Hukum Acara Peradilan Tata Usaha Negara (PTUN):",
    options: [
      { key: "A", text: "Tergugat diperbolehkan mengajukan gugatan balik (rekonvensi) untuk menuntut ganti rugi" },
      { key: "B", text: "Tidak dikenal adanya gugatan rekonvensi (gugatan balik) oleh Badan/Pejabat TUN" },
      { key: "C", text: "Penggugat wajib mengajukan permohonan sita jaminan atas gedung kementerian" },
      { key: "D", text: "Putusan hakim PTUN selalu berupa pemidanaan penjara bagi pejabat TUN" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Dalam Hukum Acara PTUN tidak dikenal lembaga gugatan rekonvensi.",
      legalBasis: "Pasal 107 jo. Pasal 100 Undang-Undang No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      analysis: "Peradilan TUN menguji keabsahan KTUN (rechmatigheid) dari segi wewenang, prosedur, dan substansi. Tergugat (Badan/Pejabat TUN) tidak mempunyai hak mengajukan gugatan balik (rekonvensi) terhadap warga masyarakat Penggugat."
    },
    difficulty: "Sedang"
  },
  {
    id: 525,
    category: "Hukum Acara PTUN",
    topicTag: "Permohonan Penundaan KTUN",
    question: "Berdasarkan Pasal 67 ayat (2) UU No. 5 Tahun 1986 tentang PTUN, gugatan tidak menunda pelaksanaan KTUN. Namun Penggugat dapat mengajukan permohonan penundaan pelaksanaan KTUN apabila:",
    options: [
      { key: "A", text: "Penggugat tidak sanggup membayar panjar biaya perkara" },
      { key: "B", text: "Terdapat keadaan yang sangat mendesak yang mengakibatkan kepentingan Penggugat sangat dirugikan jika KTUN tetap dilaksanakan" },
      { key: "C", text: "Pejabat TUN yang bersangkutan sedang cuti tahunan di luar negeri" },
      { key: "D", text: "Gugatan diajukan secara bersama-sama oleh lebih dari 100 orang" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Penundaan KTUN dapat dikabulkan jika terdapat keadaan mendesak yang menimbulkan kerugian parah.",
      legalBasis: "Pasal 67 ayat (2) dan ayat (4) huruf a UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Asas praesumptio iustae causa menyatakan KTUN dianggap sah sampai ada putusan berkekuatan hukum tetap. Pengecualiannya, Penggugat dapat memohon penundaan pelaksanaan KTUN bila terdapat keadaan mendesak yang mengakibatkan kerugian tidak sepadan jika KTUN tetap dilaksanakan."
    },
    difficulty: "Sedang"
  }
];

// src/data/upaQuestions.ts
var OFFICIAL_TRYOUT_QUESTIONS = [
  // --- PERAN & FUNGSI ORGANISASI ADVOKAT & KODE ETIK (1 - 34) ---
  {
    id: 1,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Wadah Tunggal Advokat",
    question: "Pada tanggal 21 Desember 2004, dibentuk suatu wadah sebagai wujud nyata dari kesatuan dan persatuan para Advokat Indonesia, yaitu....",
    options: [
      { key: "A", text: "Persatuan Advokat Indonesia (PERADIN)" },
      { key: "B", text: "Himpunan Advokat dan Pengacara Indonesia (HAPI)" },
      { key: "C", text: "Perhimpunan Advokat Indonesia (PERADI)" },
      { key: "D", text: "Komite Kerja Advokat Indonesia (KKAI)" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "PERADI dibentuk oleh 8 organisasi advokat sebagai pemenuhan amanat UU No. 18 Tahun 2003.",
      legalBasis: "Pasal 32 ayat (4) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "PERADI dibentuk oleh 8 organisasi advokat yang ada saat itu sebagai pemenuhan amanat UU No. 18 Tahun 2003 yang mewajibkan terbentuknya satu wadah tunggal (single bar association) bagi profesi advokat di Indonesia paling lambat dua tahun sejak UU tersebut disahkan."
    },
    difficulty: "Mudah"
  },
  {
    id: 2,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Honorarium Advokat",
    question: "Pasal 21 Undang-Undang Republik Indonesia Nomor 18 Tahun 2003 tentang Advokat mengatur besarnya honorarium berdasarkan....",
    options: [
      { key: "A", text: "Peraturan Pemerintah" },
      { key: "B", text: "Undang-undang" },
      { key: "C", text: "Organisasi advokat" },
      { key: "D", text: "Persetujuan kedua belah pihak" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Besaran honorarium didasarkan pada kesepakatan atau persetujuan yang wajar antara advokat dengan kliennya.",
      legalBasis: "Pasal 21 ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Penentuan besaran honorarium (biaya jasa) seorang advokat tidak dipatok oleh pemerintah atau organisasi, melainkan didasarkan pada kesepakatan atau persetujuan yang wajar antara advokat tersebut dengan kliennya sebagaimana diatur dalam Pasal 21 ayat (2) UU Advokat."
    },
    difficulty: "Mudah"
  },
  {
    id: 3,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Pembelaan Diri Advokat",
    question: "Pembelaan diri advokat dapat ditemui dalam....",
    options: [
      { key: "A", text: "Pasal 1" },
      { key: "B", text: "Pasal 7" },
      { key: "C", text: "Pasal 16" },
      { key: "D", text: "Pasal 1(6) dan 7(3)" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Hak membela diri diatur dalam mekanisme pemeriksaan kode etik oleh Dewan Kehormatan.",
      legalBasis: "Pasal 1 angka 6 dan Pasal 7 ayat (3) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Pasal 1 angka 6 mendefinisikan Dewan Kehormatan dengan menjamin hak membela diri advokat. Pasal 7 ayat (3) menegaskan bahwa pemeriksaan terhadap pelanggaran kode etik harus memberikan kesempatan kepada advokat yang bersangkutan untuk melakukan pembelaan diri."
    },
    difficulty: "Sedang"
  },
  {
    id: 4,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Advokat Tanpa Izin (Advokat Gadungan)",
    question: "Setiap orang yang dengan sengaja menjalankan pekerjaan profesi Advokat dan bertindak seolah-olah sebagai Advokat, tetapi bukan Advokat sebagaimana diatur dalam Undang-undang ini, dipidana dengan pidana penjara....",
    options: [
      { key: "A", text: "Paling lama 5 tahun" },
      { key: "B", text: "Paling lama 7 tahun" },
      { key: "C", text: "3 tahun" },
      { key: "D", text: "2 tahun" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Advokat gadungan diancam pidana penjara paling lama 5 tahun dan denda paling banyak Rp50.000.000.",
      legalBasis: "Pasal 31 UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Mengaku atau bertindak seolah-olah sebagai advokat tanpa memiliki izin resmi merupakan tindak pidana yang diancam pidana penjara paling lama 5 tahun dan denda paling banyak Rp50.000.000,00 berdasarkan Pasal 31 UU Advokat."
    },
    difficulty: "Mudah"
  },
  {
    id: 5,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Bantuan Hukum Non Litigasi",
    question: "Bantuan hukum oleh advokat yang diberikan di luar pengadilan, disebut pula dengan sebutan....",
    options: [
      { key: "A", text: "Bantuan hukum aktif" },
      { key: "B", text: "Bantuan hukum pasif" },
      { key: "C", text: "Bantuan hukum litigasi" },
      { key: "D", text: "Bantuan hukum non litigasi" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Bantuan di luar pengadilan (seperti konsultasi, mediasi, negosiasi) disebut bantuan hukum non litigasi.",
      legalBasis: "Pasal 1 angka 1 dan 2 UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Pemberian bantuan hukum dibagi menjadi dua jalur utama: litigasi (di dalam pengadilan) dan non-litigasi (di luar pengadilan, seperti konsultasi, perancangan kontrak, negosiasi, atau mediasi)."
    },
    difficulty: "Mudah"
  },
  {
    id: 6,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Status Penegak Hukum",
    question: "Eksistensi Advokat setelah keluarnya UU No. 18 Tahun 2003 sudah diakui statusnya sebagai....",
    options: [
      { key: "A", text: "Institusi hukum" },
      { key: "B", text: "Kuasa hukum" },
      { key: "C", text: "Penegak hukum" },
      { key: "D", text: "Pendekar hukum" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Advokat berstatus sebagai penegak hukum yang bebas dan mandiri (bagian dari Catur Wangsa).",
      legalBasis: "Pasal 5 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: 'Pasal 5 ayat (1) UU Advokat menyatakan secara tegas: "Advokat berstatus sebagai penegak hukum, bebas dan mandiri yang dijamin oleh hukum dan peraturan perundang-undangan."'
    },
    difficulty: "Mudah"
  },
  {
    id: 7,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Peran Organisasi Advokat",
    question: "Peran organisasi advokat pada pokoknya menyangkut....",
    options: [
      { key: "A", text: "Peran terhadap klien dan keluarga klien." },
      { key: "B", text: "Peran terhadap penegak hukum lainnya." },
      { key: "C", text: "Peran terhadap anggota, peran terhadap masyarakat dan peran terhadap negara." },
      { key: "D", text: "Peran terhadap pencari keadilan." }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Organisasi advokat mengemban tiga peran utama: terhadap anggota, masyarakat, dan negara.",
      legalBasis: "Pasal 28 & Pasal 32 UU No. 18 Tahun 2003 jo. Kode Etik Advokat Indonesia.",
      analysis: "Peran organisasi advokat meliputi pembinaan anggota dan kode etik, pelayanan hukum cuma-cuma kepada masyarakat pencari keadilan, serta menjaga supremasi hukum dan demokrasi bagi negara."
    },
    difficulty: "Mudah"
  },
  {
    id: 8,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Pengawasan Advokat",
    question: "Pengawasan terhadap advokat dilakukan oleh....",
    options: [
      { key: "A", text: "Mahkamah Agung (MA)" },
      { key: "B", text: "Menteri Hukum dan HAM" },
      { key: "C", text: "PERADI (Organisasi Advokat)" },
      { key: "D", text: "Pengadilan Negeri setempat yang membawahi wilayah kerjanya" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Pengawasan terhadap advokat dilakukan secara mandiri oleh Organisasi Advokat.",
      legalBasis: "Pasal 12 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: 'Pasal 12 ayat (1) UU Advokat menentukan: "Pengawasan terhadap Advokat dilakukan oleh Organisasi Advokat." Sejak berlakunya UU Advokat, pengawasan beralih menjadi mandiri (self-governing profession).'
    },
    difficulty: "Mudah"
  },
  {
    id: 9,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Dasar Normatif Status Advokat",
    question: "Hakikat status Advokat sebagai penegak hukum diatur secara eksplisit dalam Undang-Undang Nomor 18 Tahun 2003 tentang Advokat, yaitu pada:",
    options: [
      { key: "A", text: "Pasal 1 ayat (1)" },
      { key: "B", text: "Pasal 4 ayat (1)" },
      { key: "C", text: "Pasal 5 ayat (1)" },
      { key: "D", text: "Pasal 12 ayat (1)" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Status advokat sebagai penegak hukum ditegaskan dalam Pasal 5 ayat (1).",
      legalBasis: "Pasal 5 ayat (1) UU No. 18 Tahun 2003.",
      analysis: "Pasal 5 ayat (1) UU No. 18 Tahun 2003 mengatur bahwa Advokat berstatus sebagai penegak hukum yang mempunyai kedudukan setara dengan penegak hukum lainnya dalam menegakkan hukum dan keadilan."
    },
    difficulty: "Mudah"
  },
  {
    id: 10,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Ruang Lingkup Jasa Hukum",
    question: 'Berdasarkan Pasal 1 angka 1 UU Advokat, yang dimaksud dengan Advokat adalah orang yang berprofesi memberi jasa hukum, baik di dalam maupun di luar pengadilan. Pengertian "jasa hukum" meliputi:',
    options: [
      { key: "A", text: "Konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, dan tindakan hukum lain untuk kepentingan hukum klien." },
      { key: "B", text: "Hanya menjalankan kuasa dan mewakili di hadapan pengadilan." },
      { key: "C", text: "Hanya memberikan konsultasi hukum dan menjalankan kuasa di luar pengadilan." },
      { key: "D", text: "Memberikan opini hukum dan perancangan kontrak saja." }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Jasa hukum dirumuskan secara komprehensif mencakup konsultasi, bantuan, kuasa, perwakilan, pendampingan, pembelaan, dll.",
      legalBasis: "Pasal 1 angka 2 UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: 'Pasal 1 angka 2 UU Advokat menegaskan: "Jasa Hukum adalah jasa yang diberikan Advokat berupa memberikan konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, membela, dan melakukan tindakan hukum lain untuk kepentingan hukum klien."'
    },
    difficulty: "Mudah"
  },
  {
    id: 11,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Kewenangan Mahkamah Agung",
    question: "Kewenangan Mahkamah Agung (MA) dalam konteks organisasi Advokat, sesuai dengan UU Advokat, adalah:",
    options: [
      { key: "A", text: "Melakukan pengangkatan Advokat." },
      { key: "B", text: "Melaksanakan Ujian Profesi Advokat." },
      { key: "C", text: "Melakukan pengawasan terhadap Advokat." },
      { key: "D", text: "Mengambil sumpah profesi Advokat." }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Mahkamah Agung (melalui Pengadilan Tinggi) berwenang mengambil sumpah profesi advokat di sidang terbuka.",
      legalBasis: "Pasal 4 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Pengangkatan, ujian, dan pengawasan advokat berada pada Organisasi Advokat. Pengadilan Tinggi di jajaran MA hanya berwenang menyumpah calon advokat sebelum menjalankan profesinya (Pasal 4 ayat 1)."
    },
    difficulty: "Sedang"
  },
  {
    id: 12,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Pemeriksaan Tindakan Etik Advokat",
    question: "Tindak pidana atau dugaan pelanggaran yang dilakukan oleh Advokat yang terkait dengan profesinya diperiksa terlebih dahulu melalui:",
    options: [
      { key: "A", text: "Menteri Hukum dan Hak Asasi Manusia." },
      { key: "B", text: "Komisi Pemberantasan Korupsi (KPK)." },
      { key: "C", text: "Dewan Kehormatan Organisasi Advokat." },
      { key: "D", text: "Dewan Pimpinan Nasional PERADI." }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Pemeriksaan pelanggaran etik dan profesi dilakukan melalui sidang Dewan Kehormatan Organisasi Advokat.",
      legalBasis: "Pasal 26 ayat (1) dan Pasal 27 ayat (1) UU No. 18 Tahun 2003 jo. KEAI.",
      analysis: "Tindakan yang terkait etika profesi atau hak imunitas harus melalui sidang Dewan Kehormatan Organisasi Advokat demi menjaga kemandirian profesi (officium nobile)."
    },
    difficulty: "Sedang"
  },
  {
    id: 13,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Deklarasi Single Bar",
    question: "Organisasi Advokat yang dideklarasikan pada tanggal 21 Desember 2004 sebagai wujud kesatuan Advokat Indonesia dan menjalankan fungsi single bar adalah:",
    options: [
      { key: "A", text: "IKADIN (Ikatan Advokat Indonesia)" },
      { key: "B", text: "PERADI (Perhimpunan Advokat Indonesia)" },
      { key: "C", text: "AAI (Asosiasi Advokat Indonesia)" },
      { key: "D", text: "IPHI (Ikatan Penasihat Hukum Indonesia)" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "PERADI dideklarasikan pada 21 Desember 2004 oleh 8 organisasi advokat.",
      legalBasis: "Pasal 32 ayat (4) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Delapan organisasi advokat (IKADIN, AAI, IPHI, HAPI, SPI, AKHI, HKHPM, APSI) mendirikan PERADI pada 21 Desember 2004 untuk memenuhi mandat wadah tunggal organisasi advokat."
    },
    difficulty: "Mudah"
  },
  {
    id: 14,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Tugas Dewan Kehormatan",
    question: "Organisasi Advokat wajib membentuk Dewan Kehormatan yang bertugas untuk:",
    options: [
      { key: "A", text: "Mengangkat dan memberhentikan Advokat." },
      { key: "B", text: "Memeriksa serta mengadili perkara pelanggaran kode etik." },
      { key: "C", text: "Memberikan bantuan hukum secara cuma-cuma (pro bono)." },
      { key: "D", text: "Mengatur besarnya honorarium yang wajar bagi Advokat." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Dewan Kehormatan bertugas memeriksa dan mengadili pelanggaran kode etik profesi advokat.",
      legalBasis: "Pasal 26 ayat (1) & (2) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Dewan Kehormatan dibentuk secara khusus oleh Organisasi Advokat dengan fungsi mandiri untuk menegakkan disiplin profesi dan mengadili pelanggaran yang dilakukan oleh Advokat terhadap Kode Etik."
    },
    difficulty: "Mudah"
  },
  {
    id: 15,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Bantuan Hukum Cuma-Cuma (Pro Bono)",
    question: "Kewajiban Advokat untuk memberikan bantuan hukum secara cuma-cuma (pro bono) kepada pencari keadilan yang tidak mampu diatur dalam:",
    options: [
      { key: "A", text: "Pasal 12 UU Advokat" },
      { key: "B", text: "Pasal 17 UU Advokat" },
      { key: "C", text: "Pasal 21 UU Advokat" },
      { key: "D", text: "Pasal 22 UU Advokat" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Kewajiban memberikan bantuan hukum cuma-cuma diatur dalam Pasal 22 UU Advokat.",
      legalBasis: "Pasal 22 ayat (1) UU No. 18 Tahun 2003 jo. PP No. 83 Tahun 2008.",
      analysis: 'Pasal 22 ayat (1) berbunyi: "Advokat wajib memberikan bantuan hukum secara cuma-cuma kepada pencari keadilan yang tidak mampu." Ketentuan operasionalnya diatur lebih lanjut dalam PP 83/2008.'
    },
    difficulty: "Mudah"
  },
  {
    id: 16,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Hak Imunitas Advokat",
    question: "Hak imunitas Advokat (hak bebas tuntutan) dalam menjalankan profesinya dilindungi. Batasan penggunaan hak imunitas Advokat adalah:",
    options: [
      { key: "A", text: "Bebas dituntut secara perdata dan pidana tanpa syarat." },
      { key: "B", text: "Tidak dapat dituntut secara perdata maupun pidana atas dasar alasan yang berkaitan dengan pembelaan klien dengan itikad baik." },
      { key: "C", text: "Tidak dapat dituntut hanya di dalam sidang pengadilan saja." },
      { key: "D", text: "Berlaku mutlak selama yang bersangkutan memiliki izin praktik." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Hak imunitas melindungi advokat baik di dalam maupun di luar sidang asalkan dilakukan dengan itikad baik.",
      legalBasis: "Pasal 16 UU Advokat jo. Putusan MK No. 26/PUU-XI/2013 jo. Pasal 7 huruf g KEAI.",
      analysis: "Hak imunitas bukan berarti kebal hukum mutlak, melainkan tidak dapat dituntut pidana atau perdata jika membela klien dengan itikad baik (in good faith), yang diperluas MK meliputi luar sidang pengadilan."
    },
    difficulty: "Sedang"
  },
  {
    id: 17,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Rahasia Jabatan Advokat",
    question: "Kewajiban Advokat untuk menyimpan rahasia klien diatur dalam Pasal 19 UU Advokat. Rahasia tersebut wajib dijaga:",
    options: [
      { key: "A", text: "Selama hubungan Advokat dan klien masih berlangsung." },
      { key: "B", text: "Hanya jika rahasia tersebut berkaitan dengan proses persidangan." },
      { key: "C", text: "Selama-lamanya, meskipun hubungan Advokat dan klien telah berakhir." },
      { key: "D", text: "Dapat dibuka atas permintaan penegak hukum." }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Kewajiban menyimpan rahasia jabatan melekat selama-lamanya bahkan setelah hubungan berakhir.",
      legalBasis: "Pasal 19 ayat (1) UU Advokat jo. Pasal 4 huruf h KEAI.",
      analysis: "Kewajiban menjaga rahasia jabatan (pactum tacitum) tidak memiliki masa kedaluwarsa demi menjaga martabat dan integritas advokat, berlaku selama-lamanya."
    },
    difficulty: "Mudah"
  },
  {
    id: 18,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Kedudukan Kode Etik 2002",
    question: "Bagaimanakah status hukum Kode Etik yang ditetapkan pada tanggal 23 Mei 2002 setelah lahirnya UU Advokat (UU No. 18 Tahun 2003):",
    options: [
      { key: "A", text: "Tidak berlaku karena terdapat Kode Etik yang baru setelah lahirnya UU Advokat." },
      { key: "B", text: "Berkekuatan hukum secara mutatis mutandis berdasarkan Pasal 33 UU Advokat." },
      { key: "C", text: "Wajib disempurnakan sesuai dengan Pasal 33 UU Advokat." },
      { key: "D", text: "Hanya mengikat bagi Advokat yang diangkat sebelum lahirnya UU Advokat." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Kode Etik Advokat tanggal 23 Mei 2002 diakui dan berlaku secara mutatis mutandis.",
      legalBasis: "Pasal 33 UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Pasal 33 UU Advokat secara eksplisit mengesahkan bahwa Kode Etik yang ditetapkan pada 23 Mei 2002 berkekuatan hukum secara mutatis mutandis berdasarkan UU Advokat."
    },
    difficulty: "Sedang"
  },
  {
    id: 19,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Lingkup Hak Imunitas",
    question: "Pasal 16 UU Advokat jo. Pasal 7 huruf g Kode Etik mengatur ketentuan tentang hak Imunitas bagi seorang Advokat dalam lingkup:",
    options: [
      { key: "A", text: "Pidana" },
      { key: "B", text: "Perdata" },
      { key: "C", text: "Perdata dan Pidana" },
      { key: "D", text: "Tata Usaha Negara" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Hak imunitas mencakup perlindungan dari tuntutan perdata maupun pidana.",
      legalBasis: "Pasal 16 UU Advokat jo. Pasal 7 huruf g KEAI.",
      analysis: "Perlindungan hukum bagi advokat mencakup dua ranah hukum utama: advokat tidak dapat dituntut baik secara perdata maupun pidana dalam menjalankan tugas profesinya dengan itikad baik."
    },
    difficulty: "Mudah"
  },
  {
    id: 20,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Kesetaraan Penegak Hukum",
    question: "Profesi advokat adalah profesi yang mulia dan terhormat (officium nobile) dan karenanya dalam menjalankan profesi selaku penegak hukum di Pengadilan sejajar dengan:",
    options: [
      { key: "A", text: "SatPol PP" },
      { key: "B", text: "Pemerintah" },
      { key: "C", text: "Polisi, Jaksa dan Hakim" },
      { key: "D", text: "Semua benar" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Advokat memiliki kedudukan yang sejajar dan setara dengan penegak hukum lainnya (Jaksa dan Hakim).",
      legalBasis: "Pasal 5 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Dalam doktrin catur wangsa penegak hukum di Indonesia (Polisi, Jaksa, Hakim, Advokat), advokat mempunyai kedudukan setara demi mewujudkan fair trial."
    },
    difficulty: "Mudah"
  },
  {
    id: 21,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Tanggal Penetapan Kode Etik",
    question: "Kode Etik Advokat Indonesia ditetapkan di Jakarta pada tanggal:",
    options: [
      { key: "A", text: "23 Mei 2003" },
      { key: "B", text: "23 Juni 2002" },
      { key: "C", text: "23 Mei 2002" },
      { key: "D", text: "23 Mei 2001" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Kode Etik Advokat Indonesia disahkan di Jakarta pada tanggal 23 Mei 2002.",
      legalBasis: "Pasal 33 Undang-Undang No. 18 Tahun 2003 tentang Advokat jo. Lembar Pengesahan Ketentuan Penutup Kode Etik Advokat Indonesia (KEAI) tanggal 23 Mei 2002.",
      analysis: "KEAI disepakati dan ditandatangani oleh Komite Kerja Advokat Indonesia (KKAI) yang menaungi 7 organisasi advokat pada tanggal 23 Mei 2002."
    },
    difficulty: "Mudah"
  },
  {
    id: 22,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Akibat Pemberhentian Sementara (Skorsing)",
    question: "Jika seorang Advokat dijatuhi sanksi berupa pemberhentian sementara untuk waktu tertentu, maka:",
    options: [
      { key: "A", text: "Advokat tersebut hanya dapat menjalankan profesinya di luar sidang" },
      { key: "B", text: "Advokat tersebut hanya dapat memberikan konsultasi hukum" },
      { key: "C", text: "Advokat tersebut masih menjalankan profesinya, baik di dalam atau di luar sidang" },
      { key: "D", text: "Advokat tersebut tidak dapat menjalankan profesinya, baik di dalam atau di luar sidang" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Sanksi skorsing melarang advokat menjalankan profesi secara total baik di dalam maupun di luar pengadilan.",
      legalBasis: "Pasal 7 ayat (1) huruf c UU Advokat jo. Pasal 16 ayat (1) KEAI.",
      analysis: "Pemberhentian sementara mencabut wewenang advokat secara penuh selama masa hukuman, dilarang berpraktik litigasi maupun non-litigasi."
    },
    difficulty: "Sedang"
  },
  {
    id: 23,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Sidang In Absentia Dewan Kehormatan",
    question: "Apabila teradu telah dipanggil sampai 2 (dua) kali tidak hadir dalam pemeriksaan tanpa alasan yang sah, maka sidang dugaan pelanggaran kode etik:",
    options: [
      { key: "A", text: "Diberhentikan sampai pengadu bisa menghadirkan teradu" },
      { key: "B", text: "Diberhentikan dan dipanggil untuk ketiga kalinya" },
      { key: "C", text: "Diteruskan tanpa kehadiran teradu" },
      { key: "D", text: "Diteruskan dengan acara memutuskan pengaduan tidak dapat diteruskan" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Sidang Dewan Kehormatan dilanjutkan tanpa kehadiran teradu (in absentia) setelah 2 kali mangkir.",
      legalBasis: "Pasal 13 ayat (1) Hukum Acara Dewan Kehormatan KEAI.",
      analysis: "Jika teradu telah dipanggil secara sah dua kali berturut-turut namun tidak hadir tanpa alasan sah, sidang pemeriksaan tetap diteruskan tanpa kehadiran teradu demi kepastian hukum."
    },
    difficulty: "Sedang"
  },
  {
    id: 24,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Mantan Hakim Menjadi Advokat",
    question: "Berdasarkan Kode Etik advokat, apakah mantan Hakim dibenarkan untuk beralih profesi menjadi Advokat:",
    options: [
      { key: "A", text: "Tidak dapat dibenarkan karena Advokat adalah profesi yang bebas dan mandiri" },
      { key: "B", text: "Tidak dapat dibenarkan karena dapat menimbulkan conflict of interest" },
      { key: "C", text: "Dapat, karena sama halnya dengan Advokat, Hakim juga berkedudukan sebagai penegak hukum" },
      { key: "D", text: "Dapat, namun dalam jangka waktu 3 (tiga) tahun ia tidak dapat menangani perkara yang ditanganinya di Pengadilan tempatnya terakhir ia bekerja" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Mantan hakim boleh menjadi advokat, tetapi dilarang beracara selama 3 tahun di pengadilan tempat terakhir ia bekerja.",
      legalBasis: "Pasal 5 huruf g Kode Etik Advokat Indonesia (KEAI).",
      analysis: "Larangan menangani perkara selama 3 tahun di pengadilan tempat terakhir mantan hakim menjabat bertujuan mencegah potensi konflik kepentingan dan penyalahgunaan pengaruh."
    },
    difficulty: "Sedang"
  },
  {
    id: 25,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Kehadiran Sidang Kode Etik",
    question: "Dalam sidang pemeriksaan perkara pelanggaran Kode Etik Advokat, baik pengadu maupun pihak yang teradu:",
    options: [
      { key: "A", text: "Harus hadir secara pribadi, namun jika dikehendaki dapat diwakili oleh penasihat" },
      { key: "B", text: "Harus hadir secara pribadi dan jika dikehendaki dapat didampingi oleh penasihat" },
      { key: "C", text: "Tidak perlu hadir secara pribadi karena dapat memberikan kuasa kepada Advokat" },
      { key: "D", text: "Tidak perlu hadir secara pribadi karena dapat memberikan kuasa kepada orang lain" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Pengadu dan teradu wajib hadir secara pribadi, namun dapat didampingi oleh penasihat.",
      legalBasis: "Pasal 11 ayat (1) dan (2) Hukum Acara Dewan Kehormatan KEAI.",
      analysis: "Sidang kode etik bersifat personal karena menyangkut martabat pribadi. Pihak tidak boleh diwakili tanpa kehadiran, namun berhak didampingi penasihat."
    },
    difficulty: "Sedang"
  },
  {
    id: 26,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Bantuan Hukum Teman Sejawat",
    question: "Sifat bantuan hukum yang diberikan Advokat pada teman sejawatnya yang sedang didakwa dalam perkara pidana adalah:",
    options: [
      { key: "A", text: "Wajib atas permintaan Advokat yang didakwa itu atau jika ditunjuk oleh organisasi profesi" },
      { key: "B", text: "Boleh kalau Advokat yang didakwa bisa memenuhi honorarium yang ia minta" },
      { key: "C", text: "Tidak boleh karena Advokat adalah penegak hukum, maka ia tidak seharusnya melanggar hukum" },
      { key: "D", text: "Wajib diminta ataupun tidak diminta oleh Advokat yang didakwa itu" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Pembelaan terhadap rekan sejawat yang didakwa pidana bersifat wajib atas permintaan atau penunjukan organisasi.",
      legalBasis: "Pasal 5 huruf c Kode Etik Advokat Indonesia (KEAI).",
      analysis: "Sebagai wujud kolegialitas (solidaritas profesi), advokat wajib membela teman sejawat yang menghadapi dakwaan pidana jika diminta oleh rekan tersebut atau ditugaskan oleh organisasi profesi."
    },
    difficulty: "Sedang"
  },
  {
    id: 27,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Kewenangan Pemberhentian Advokat",
    question: "Seorang Advokat dapat diberhentikan dari profesinya sebagai Advokat berdasarkan keputusan:",
    options: [
      { key: "A", text: "Keputusan Organisasi Advokat (melalui Dewan Kehormatan)" },
      { key: "B", text: "Keputusan Ketua Mahkamah Agung" },
      { key: "C", text: "Keputusan Ketua Pengadilan Tinggi" },
      { key: "D", text: "Semua benar" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Kewenangan memecat atau memberhentikan advokat sepenuhnya berada di tangan Organisasi Advokat melalui Dewan Kehormatan.",
      legalBasis: "Pasal 9 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Sebagai profesi mandiri, tindakan pemberhentian advokat dilakukan oleh Organisasi Advokat melalui putusan Dewan Kehormatan, bukan oleh MA atau Pengadilan Tinggi."
    },
    difficulty: "Mudah"
  },
  {
    id: 28,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Jenis Sanksi Kode Etik",
    question: "Sanksi atas pelanggaran Kode Etik Advokat Indonesia berupa:",
    options: [
      { key: "A", text: "Teguran, peringatan keras atau pemecatan keanggotaan dari organisasi Advokat" },
      { key: "B", text: "Peringatan biasa, peringatan keras, pemecatan sementara untuk waktu tertentu atau pemecatan dari keanggotaan organisasi Advokat" },
      { key: "C", text: "Teguran, skorsing atau pemecatan dari keanggotaan organisasi profesi" },
      { key: "D", text: "Teguran lisan, teguran tertulis, pemecatan sementara untuk waktu tertentu atau pemecatan dari keanggotaan organisasi" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Empat jenis sanksi KEAI: Peringatan biasa, peringatan keras, pemecatan sementara (skorsing), dan pemecatan tetap.",
      legalBasis: "Pasal 16 Kode Etik Advokat Indonesia (KEAI) jo. Pasal 7 ayat (1) UU Advokat.",
      analysis: "Bab VIII Pasal 16 KEAI mengatur secara limitatif sanksi: a. Peringatan Biasa; b. Peringatan Keras; c. Pemberhentian Sementara untuk waktu tertentu; d. Pemecatan dari Keanggotaan Organisasi Advokat."
    },
    difficulty: "Mudah"
  },
  {
    id: 29,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Pengawasan Dewan Kehormatan",
    question: "Siapa yang berwenang memeriksa dan mengadili perkara pelanggaran Kode Etik yang dilakukan oleh seorang Advokat:",
    options: [
      { key: "A", text: "Teman sejawat" },
      { key: "B", text: "Mahkamah Konstitusi" },
      { key: "C", text: "Mahkamah Agung" },
      { key: "D", text: "Dewan Kehormatan Organisasi Advokat" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Dewan Kehormatan Organisasi Advokat berwenang memeriksa dan mengadili perkara etik.",
      legalBasis: "Pasal 26 ayat (5) UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Lembaga peradilan umum tidak mengadili pelanggaran etik profesi advokat. Penegakan disiplin etik adalah domain eksklusif Dewan Kehormatan."
    },
    difficulty: "Mudah"
  },
  {
    id: 30,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Definisi Klien",
    question: "Meliputi siapa saja klien Advokat itu menurut ketentuan UU Advokat:",
    options: [
      { key: "A", text: "Orang perorangan" },
      { key: "B", text: "Badan hukum" },
      { key: "C", text: "Lembaga lain yang memerlukan jasa Advokat" },
      { key: "D", text: "Ketiga pernyataan (A, B, C) adalah benar" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Klien mencakup orang perorangan, badan hukum, maupun lembaga lain penerima jasa hukum.",
      legalBasis: "Pasal 1 angka 3 UU No. 18 Tahun 2003 tentang Advokat.",
      analysis: 'Pasal 1 angka 3 UU Advokat: "Klien adalah orang, badan hukum, atau lembaga lain yang menerima jasa hukum dari Advokat."'
    },
    difficulty: "Mudah"
  },
  {
    id: 31,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Hak Menolak Perkara",
    question: "Bolehkah seorang Advokat menolak calon kliennya:",
    options: [
      { key: "A", text: "Boleh, dengan pertimbangan tidak sesuai dengan keahliannya dan bertentangan dengan hati nuraninya" },
      { key: "B", text: "Tidak boleh, karena agama atau partai calon kliennya, lain dari yang dimiliki oleh Advokat tersebut" },
      { key: "C", text: "Tidak boleh, karena Advokat adalah sebagai pemegang profesi bebas" },
      { key: "D", text: "Boleh, karena ada klien berarti ada rezeki" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Advokat berhak menolak perkara yang tidak sesuai keahlian atau bertentangan dengan nuraninya, namun dilarang menolak atas dasar SARA/politik.",
      legalBasis: "Pasal 3 huruf a Kode Etik Advokat Indonesia (KEAI).",
      analysis: "Pasal 3 huruf a KEAI mengatur bahwa Advokat dapat menolak perkara karena tidak sesuai keahlian atau bertentangan dengan nurani, tetapi dilarang diskriminasi ras, agama, suku, atau politik."
    },
    difficulty: "Sedang"
  },
  {
    id: 32,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Hak Retensi Advokat",
    question: 'Dalam surat kuasa sering menyebut "hak retensi", apa arti hak retensi tersebut:',
    options: [
      { key: "A", text: "Hak Advokat untuk menuntut upah" },
      { key: "B", text: "Hak menangani perkara-perkara kecil" },
      { key: "C", text: "Hak menahan surat-surat asli/penting milik klien" },
      { key: "D", text: "Hak menahan surat kuasa" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Hak retensi adalah hak menahan surat-surat atau dokumen milik klien hingga kewajiban dipenuhi.",
      legalBasis: "Pasal 4 huruf k KEAI jo. Pasal 1812 KUHPerdata.",
      analysis: "Hak retensi adalah hak menahan berkas atau dokumen kepunyaan klien yang berada dalam penguasaan advokat sampai klien melunasi kewajiban honorarium, dengan syarat tidak merugikan kepentingan perkara klien."
    },
    difficulty: "Mudah"
  },
  {
    id: 33,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Sifat Putusan Dewan Kehormatan Daerah",
    question: "Keputusan Majelis Dewan Kehormatan Cabang/Daerah mengenai pelanggaran Kode Etik yang dilakukan seorang Advokat adalah bersifat:",
    options: [
      { key: "A", text: "Final dan tidak dapat diajukan upaya banding" },
      { key: "B", text: "Belum final dan dapat diajukan upaya banding ke Dewan Kehormatan Pusat" },
      { key: "C", text: "Mengikat dan mempunyai kekuatan hukum tetap sejak diucapkan dalam sidang terbuka" },
      { key: "D", text: "Mempunyai kekuatan hukum tetap sejak diberitahukan kepada para pihak" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Putusan Dewan Kehormatan Daerah belum final dan dapat diajukan banding ke Dewan Kehormatan Pusat.",
      legalBasis: "Pasal 17 ayat (1) dan Pasal 18 ayat (1) Kode Etik Advokat Indonesia (KEAI) 2002 jo. Pasal 27 ayat (4) Undang-Undang No. 18 Tahun 2003 tentang Advokat.",
      analysis: "Putusan Dewan Kehormatan Cabang/Daerah belum bersifat final karena advokat yang bersangkutan berhak mengajukan banding kepada Dewan Kehormatan Pusat. Yang bersifat final adalah putusan Dewan Kehormatan Pusat."
    },
    difficulty: "Sedang"
  },
  {
    id: 34,
    category: "Kode Etik Profesi Advokat",
    topicTag: "Solidaritas Rekan Sejawat",
    question: "Bagaimanakah hubungan Advokat dengan teman sejawatnya di dalam menjalankan profesinya di masyarakat:",
    options: [
      { key: "A", text: "Advokat harus adu argumentasi sesama advokat baru terlihat hebat" },
      { key: "B", text: "Advokat harus menjunjung tinggi nilai-nilai profesinya dengan dilandasi sikap saling menghormati, saling menghargai dan saling mempercayai sesama profesi" },
      { key: "C", text: "Advokat harus mampu bersaing, tidak perlu memikirkan teman sejawatnya" },
      { key: "D", text: "Teman sejawat Advokat adalah rival bisnis, sehingga tidak perlu kita pikirkan" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Hubungan antar rekan sejawat wajib dilandasi sikap saling menghormati, menghargai, dan mempercayai.",
      legalBasis: "Bab IV Kode Etik Advokat Indonesia jo. Pasal 26 ayat (1) UU Advokat.",
      analysis: "Bab IV KEAI menegaskan bahwa Advokat wajib memelihara rasa solidaritas sesama rekan seprofesi dengan saling menghormati, saling menghargai, dan saling mempercayai dalam menjalankan profesinya."
    },
    difficulty: "Mudah"
  },
  // --- HUKUM ACARA PERDATA (35 - 54) ---
  {
    id: 35,
    category: "Hukum Acara Perdata",
    topicTag: "Perlawanan Pihak Ketiga (Derden Verzet)",
    question: "Apabila sebuah bangunan milik orang lain yang sedang disewakan kepada pihak penyewa dikenakan sita eksekusi, maka pihak yang berhak mengajukan bantahan terhadap sita eksekusi ini adalah...",
    options: [
      { key: "A", text: "Si Penyewa bangunan yang disita dengan upaya hukum Derden Verzet" },
      { key: "B", text: "Si Pemilik bangunan yang disita saja" },
      { key: "C", text: "Si Pemilik dan si Penyewa bangunan secara bersama-sama" },
      { key: "D", text: "Semua orang yang berkepentingan atas bangunan tersebut" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Penyewa sebagai pihak ketiga yang menguasai fisik bangunan berhak mengajukan Derden Verzet.",
      legalBasis: "Pasal 378 Rv jo. Pasal 195 dan Pasal 206 HIR.",
      analysis: "Derden Verzet (Perlawanan Pihak Ketiga) diatur dalam Pasal 378 Rv, di mana pihak ketiga yang haknya atas penguasaan atau penggunaan barang dirugikan oleh pelaksanaan putusan berhak mengajukan perlawanan."
    },
    difficulty: "Sedang"
  },
  {
    id: 36,
    category: "Hukum Acara Perdata",
    topicTag: "Kompetensi Relatif Tergugat Jamak",
    question: "Pengajuan gugatan yang ditujukan kepada lebih dari seorang tergugat yang tempat tinggalnya berbeda harus diajukan ke Pengadilan Negeri yang wilayah hukumnya meliputi domisili:",
    options: [
      { key: "A", text: "Salah satu tergugat secara acak" },
      { key: "B", text: "Di mana barang sengketa tidak bergerak berada" },
      { key: "C", text: "Tergugat yang tempat tinggalnya lebih dekat dengan penggugat" },
      { key: "D", text: "Tergugat Pertama (Tergugat I)" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Bila tergugat lebih dari satu orang dengan domisili berbeda, lazimnya diajukan pada domisili Tergugat Pertama.",
      legalBasis: "Pasal 118 ayat (1) HIR jo. Pasal 142 ayat (1) RBg.",
      analysis: "Berdasarkan Pasal 118 HIR dan praktik yurisprudensi tetap peradilan Indonesia, jika terdapat banyak tergugat yang tinggal di tempat berbeda, gugatan diajukan ke PN tempat tinggal salah satu tergugat, yang lazimnya adalah Tergugat I."
    },
    difficulty: "Sedang"
  },
  {
    id: 37,
    category: "Hukum Acara Perdata",
    topicTag: "Gugatan Rekonvensi",
    question: "Kapan gugatan rekonvensi (gugatan balik) dapat diajukan oleh Tergugat?",
    options: [
      { key: "A", text: "Diajukan bersamaan dengan penyampaian surat jawaban" },
      { key: "B", text: "Dapat diajukan kapan pun selama sidang pembuktian" },
      { key: "C", text: "Dapat dalam tenggang waktu 7 hari setelah putusan pengadilan negeri" },
      { key: "D", text: "Dapat dalam tenggang waktu 14 hari setelah putusan pengadilan negeri" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Gugatan rekonvensi wajib diajukan bersamaan dengan penyampaian jawaban terhadap gugatan konvensi.",
      legalBasis: "Pasal 132a dan Pasal 132b HIR jo. Pasal 157 RBg.",
      analysis: "Pasal 132a HIR menentukan bahwa gugatan balik (rekonvensi) diajukan bersama-sama dengan jawaban pertama terhadap gugatan penggugat. Jika diajukan lewat dari tahap jawaban, rekonvensi tidak dapat diterima."
    },
    difficulty: "Mudah"
  },
  {
    id: 38,
    category: "Hukum Acara Perdata",
    topicTag: "Pencabutan Gugatan",
    question: "Hukum Acara Perdata memberikan peluang untuk dicabutnya suatu gugatan dengan syarat bahwa pencabutan tersebut dilakukan oleh...",
    options: [
      { key: "A", text: "Dilakukan oleh penggugat secara sepihak, asalkan tergugat belum menyampaikan jawaban" },
      { key: "B", text: "Dilakukan oleh penggugat secara sepihak, meskipun tergugat telah menyampaikan jawaban" },
      { key: "C", text: "Dilakukan oleh penggugat atas persetujuan tergugat, meskipun tergugat belum menyampaikan jawaban" },
      { key: "D", text: "Dapat dilakukan oleh penggugat ataupun tergugat, meskipun perkara sedang dalam proses pemeriksaan" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Sebelum tergugat memberikan jawaban, penggugat bebas mencabut gugatan secara sepihak; sesudah ada jawaban harus atas persetujuan tergugat.",
      legalBasis: "Pasal 271 Rv (Reglement op de Rechtsvordering) jo. Yurisprudensi MA RI.",
      analysis: "Pasal 271 Rv mengatur bahwa sebelum jawaban disampaikan, pencabutan adalah hak sepihak penggugat. Namun setelah tergugat menjawab, pencabutan memerlukan persetujuan tergugat untuk melindungi kepentingannya."
    },
    difficulty: "Sedang"
  },
  {
    id: 39,
    category: "Hukum Acara Perdata",
    topicTag: "Alat Bukti Perdata",
    question: "Di bawah ini adalah alat-alat bukti yang dikenal dalam hukum acara perdata kecuali.....",
    options: [
      { key: "A", text: "Bukti surat" },
      { key: "B", text: "Persangkaan" },
      { key: "C", text: "Petunjuk" },
      { key: "D", text: "Pengakuan" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Petunjuk adalah alat bukti dalam hukum acara pidana (KUHAP), bukan hukum acara perdata.",
      legalBasis: "Pasal 1866 KUHPerdata jo. Pasal 164 HIR jo. Pasal 284 RBg.",
      analysis: 'Alat bukti sah perkara perdata hanya terdiri dari 5: 1. Surat, 2. Saksi, 3. Persangkaan, 4. Pengakuan, 5. Sumpah. Bukti "Petunjuk" hanya dikenal dalam Pasal 184 KUHAP (pidana).'
    },
    difficulty: "Mudah"
  },
  {
    id: 40,
    category: "Hukum Acara Perdata",
    topicTag: "Putusan Verstek",
    question: "Dalam hal pihak tergugat tidak datang menghadiri sidang tanpa alasan yang sah meskipun dipanggil secara patut maka Hakim Pengadilan Perdata dapat menjatuhkan.....",
    options: [
      { key: "A", text: "Putusan sela" },
      { key: "B", text: "Putusan verstek" },
      { key: "C", text: "Putusan verzet" },
      { key: "D", text: "Putusan gugur" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Ketidakhadiran tergugat tanpa alasan sah memicu dijatuhkannya putusan verstek.",
      legalBasis: "Pasal 125 ayat (1) HIR jo. Pasal 149 RBg.",
      analysis: "Pasal 125 ayat (1) HIR mengatur bahwa apabila tergugat tidak datang menghadap pada hari yang ditentukan dan tidak menyuruh wakilnya, maka perkara dapat diputus secara verstek (tanpa hadirnya tergugat)."
    },
    difficulty: "Mudah"
  },
  {
    id: 41,
    category: "Hukum Acara Perdata",
    topicTag: "Putusan Serta Merta",
    question: "Dalam hukum acara perdata dikenal Putusan Serta Merta (uitvoerbaar bij voorraad) dan tata caranya selain dalam HIR, juga diatur dalam...",
    options: [
      { key: "A", text: "SEMA Nomor 1 Tahun 2000" },
      { key: "B", text: "SEMA Nomor 3 Tahun 2000" },
      { key: "C", text: "SEMA Nomor 3 Tahun 2002" },
      { key: "D", text: "SEMA Nomor 3 Tahun 2003" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Pembatasan dan tata cara putusan serta merta diatur ketat dalam SEMA No. 3 Tahun 2000.",
      legalBasis: "SEMA No. 3 Tahun 2000 jo. SEMA No. 4 Tahun 2001 jo. Pasal 180 HIR.",
      analysis: "Putusan serta merta (dieksekusi mendahului banding/kasasi) dibatasi ketat oleh Mahkamah Agung melalui SEMA No. 3 Tahun 2000 agar tidak menimbulkan kerugian yang tidak dapat dipulihkan."
    },
    difficulty: "Sedang"
  },
  {
    id: 42,
    category: "Hukum Acara Perdata",
    topicTag: "Sifat Putusan Condemnatoir",
    question: "Putusan yang amar putusannya adalah menghukum salah satu pihak yang berperkara untuk melakukan suatu prestasi disebut...",
    options: [
      { key: "A", text: "Putusan deklaratoir" },
      { key: "B", text: "Putusan konstitutif" },
      { key: "C", text: "Putusan condemnatoir" },
      { key: "D", text: "Putusan verstek" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Putusan condemnatoir adalah putusan yang bersifat menghukum pihak yang kalah untuk memenuhi prestasi.",
      legalBasis: "Pasal 178 ayat (1) HIR (Staatsblad 1941 No. 44) / Pasal 189 ayat (1) RBg jo. Doktrin Hukum Acara Perdata Prof. Sudikno Mertokusumo.",
      analysis: "Putusan deklaratoir hanya menegaskan status hak; konstitutif menciptakan/meniadakan keadaan hukum; sedangkan condemnatoir menghukum tergugat membayar, menyerahkan barang, atau mengosongkan tanah."
    },
    difficulty: "Mudah"
  },
  {
    id: 43,
    category: "Hukum Acara Perdata",
    topicTag: "Tenggang Waktu Banding Perdata",
    question: "Jika suatu perkara perdata telah diputus dan diucapkan dalam sidang pada tanggal 11 November 2008 yang dihadiri oleh para pihak, maka tanggal berapakah batas akhir pengajuan permohonan banding:",
    options: [
      { key: "A", text: "Tanggal 17 November 2008" },
      { key: "B", text: "Tanggal 18 November 2008" },
      { key: "C", text: "Tanggal 24 November 2008" },
      { key: "D", text: "Tanggal 25 November 2008" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Permohonan banding diajukan 14 hari terhitung mulai hari berikutnya setelah putusan diucapkan.",
      legalBasis: "Pasal 7 ayat (1) UU No. 20 Tahun 1947 tentang Peradilan Ulangan di Jawa dan Madura.",
      analysis: "Hari pertama dihitung mulai 12 November 2008. Hari ke-14 jatuh tepat pada tanggal 25 November 2008. Lewat dari 14 hari, hak banding gugur dan putusan berkekuatan hukum tetap."
    },
    difficulty: "Sedang"
  },
  {
    id: 44,
    category: "Hukum Acara Perdata",
    topicTag: "Actio Pauliana",
    question: 'Yang dimaksud dengan "Actio Pauliana" dalam Pasal 1341 KUHPerdata adalah....',
    options: [
      { key: "A", text: "Bahwa debitur dalam keadaan tertentu dapat membatalkan kewenangan dari perbuatan kreditur." },
      { key: "B", text: "Bahwa kreditur dalam keadaan tertentu dapat menuntut pembatalan perbuatan hukum debitur yang merugikan kreditur." },
      { key: "C", text: "Kedua jawaban A dan B benar." },
      { key: "D", text: "Semua jawaban salah." }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Actio Pauliana adalah hak kreditur membatalkan perbuatan debitur yang beriktikad buruk merugikan kreditur.",
      legalBasis: "Pasal 1341 KUHPerdata.",
      analysis: "Pasal 1341 KUHPerdata memberikan hak gugat kepada kreditur untuk menuntut pembatalan segala perbuatan yang tidak diwajibkan yang dilakukan debitur yang merugikan piutang kreditur."
    },
    difficulty: "Sedang"
  },
  {
    id: 45,
    category: "Hukum Acara Perdata",
    topicTag: "Unsur Wanprestasi",
    question: "Bentuk-bentuk wanprestasi (ingkar janji) menurut hukum perdata adalah....",
    options: [
      { key: "A", text: "Debitur yang tidak memenuhi kewajibannya atau terlambat memenuhi kewajibannya." },
      { key: "B", text: "Debitur yang memenuhi kewajibannya tetapi tidak seperti yang telah diperjanjikan." },
      { key: "C", text: "A dan B benar." },
      { key: "D", text: "A dan B salah." }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Wanprestasi mencakup tidak berprestasi, terlambat berprestasi, atau berprestasi keliru/cacat.",
      legalBasis: "Pasal 1238 & Pasal 1243 KUHPerdata.",
      analysis: "Doktrin Subekti merinci 4 wujud wanprestasi: 1. Tidak melakukan apa yang disanggupi, 2. Melaksanakan apa yang dijanjikan tapi terlambat, 3. Melaksanakan apa yang dijanjikan tapi tidak sebagaimana mestinya, 4. Melakukan sesuatu yang menurut perjanjian dilarang."
    },
    difficulty: "Mudah"
  },
  {
    id: 46,
    category: "Hukum Acara Perdata",
    topicTag: "Legitieme Portie (Bagian Mutlak)",
    question: "Suatu peninggalan tertentu dari harta peninggalan yang tidak dapat dihapuskan oleh orang yang meninggalkan warisan terhadap ahli waris garis lurus disebut....",
    options: [
      { key: "A", text: "Fidei Commis" },
      { key: "B", text: "Legitieme Portie" },
      { key: "C", text: "Erfstelling" },
      { key: "D", text: "A, B, dan C salah" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Legitieme Portie adalah bagian mutlak ahli waris dalam garis lurus yang tidak boleh dilanggar oleh surat wasiat.",
      legalBasis: "Pasal 913 sampai dengan Pasal 929 KUHPerdata.",
      analysis: "Pasal 913 KUHPerdata mendefinisikan Legitieme Portie sebagai bagian dari harta peninggalan yang harus diberikan kepada ahli waris dalam garis lurus menurut undang-undang, yang tidak dapat dikurangi oleh hibah atau wasiat pewaris."
    },
    difficulty: "Mudah"
  },
  {
    id: 47,
    category: "Hukum Acara Perdata",
    topicTag: "Upaya Hukum Terhadap Verstek",
    question: "Terhadap putusan Verstek dapat ditempuh upaya hukum, berupa:",
    options: [
      { key: "A", text: "Banding" },
      { key: "B", text: "Perlawanan / Verzet" },
      { key: "C", text: "Kasasi" },
      { key: "D", text: "Peninjauan Kembali" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Upaya hukum khas tergugat terhadap putusan verstek adalah perlawanan (verzet).",
      legalBasis: "Pasal 129 HIR jo. Pasal 153 RBg.",
      analysis: "Berdasarkan Pasal 129 ayat (1) HIR, tergugat yang dijatuhi putusan verstek berhak mengajukan verzet dalam tenggang waktu 14 hari."
    },
    difficulty: "Mudah"
  },
  {
    id: 48,
    category: "Hukum Acara Perdata",
    topicTag: "Judex Factie vs Judex Juris",
    question: "Hakim yang memeriksa fakta-fakta, alat bukti, dan menilai pembuktian para pihak disebut:",
    options: [
      { key: "A", text: "Judex Factie" },
      { key: "B", text: "Judex Juris" },
      { key: "C", text: "Hakim Pengadilan Negeri saja" },
      { key: "D", text: "Hakim Pengadilan Tinggi saja" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Judex Factie adalah hakim pemeriksa fakta (Pengadilan Negeri dan Pengadilan Tinggi).",
      legalBasis: "Pasal 19 dan Pasal 20 ayat (2) Undang-Undang No. 48 Tahun 2009 tentang Kekuasaan Kehakiman jo. Pasal 30 ayat (1) Undang-Undang No. 14 Tahun 1985 tentang Mahkamah Agung.",
      analysis: "Pengadilan Negeri dan Pengadilan Tinggi bertindak sebagai Judex Factie yang memeriksa duduk perkara dan bukti. Sedangkan Mahkamah Agung di tingkat kasasi bertindak sebagai Judex Juris yang menguji penerapan hukumnya saja."
    },
    difficulty: "Mudah"
  },
  {
    id: 49,
    category: "Hukum Acara Perdata",
    topicTag: "Intervensi Voeging",
    question: "Jika dalam suatu perkara yang sedang berlangsung terdapat pihak ketiga yang masuk menggabungkan diri untuk membantu salah satu pihak (penggugat atau tergugat), maka bentuk intervensi ini disebut....",
    options: [
      { key: "A", text: "Tussenkomst (Menengahi)" },
      { key: "B", text: "Voeging (Menyertai)" },
      { key: "C", text: "Derden Verzet" },
      { key: "D", text: "Vrijwaring" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Voeging adalah keikutsertaan pihak ketiga yang bergabung memihak salah satu pihak.",
      legalBasis: "Pasal 279 sampai Pasal 282 Rv.",
      analysis: "Voeging berarti pihak ketiga memihak salah satu pihak yang berperkara. Jika pihak ketiga masuk memperjuangkan kepentingannya sendiri melawan kedua pihak, disebut Tussenkomst. Jika ditarik untuk menanggung, disebut Vrijwaring."
    },
    difficulty: "Sedang"
  },
  {
    id: 50,
    category: "Hukum Acara Perdata",
    topicTag: "Perdamaian di Persidangan",
    question: "Dalam menghadapi suatu perkara perdata, hakim diberikan kewajiban untuk mengupayakan perdamaian antara para pihak. Pasal berapakah dalam HIR yang mengatur tentang perdamaian ini....",
    options: [
      { key: "A", text: "Pasal 18 HIR" },
      { key: "B", text: "Pasal 130 HIR" },
      { key: "C", text: "Pasal 132 HIR" },
      { key: "D", text: "Pasal 133 HIR" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Kewajiban hakim mengupayakan perdamaian diatur dalam Pasal 130 HIR jo. PERMA 1/2016.",
      legalBasis: "Pasal 130 HIR jo. Pasal 154 RBg jo. PERMA No. 1 Tahun 2016.",
      analysis: "Pasal 130 HIR mewajibkan hakim pada hari sidang pertama mengupayakan perdamaian. Jika tercapai akta perdamaian (acte van dading), ia memiliki kekuatan putusan inkracht berkekuatan eksekutorial."
    },
    difficulty: "Mudah"
  },
  {
    id: 51,
    category: "Hukum Acara Perdata",
    topicTag: "Susunan Alat Bukti Perdata",
    question: "Berdasarkan Pasal 164 HIR/284 RBg, alat-alat bukti yang sah dalam hukum acara perdata terdiri dari....",
    options: [
      { key: "A", text: "Alat Bukti Surat, Saksi, Pengetahuan Hakim, Keyakinan Hakim dan Sumpah" },
      { key: "B", text: "Alat Bukti Surat, Saksi, Yurisprudensi, Keyakinan Hakim dan Sumpah" },
      { key: "C", text: "Alat Bukti Surat, Saksi, Persangkaan, Keyakinan Hakim dan Sumpah" },
      { key: "D", text: "Alat Bukti Surat, Saksi, Persangkaan, Pengakuan dan Sumpah" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Urutan 5 alat bukti perdata: Surat, Saksi, Persangkaan, Pengakuan, Sumpah.",
      legalBasis: "Pasal 164 HIR jo. Pasal 284 RBg jo. Pasal 1866 KUHPerdata.",
      analysis: "Alat bukti perdata tidak mengenal keyakinan hakim (keyakinan hakim adalah syarat pemidanaan dalam KUHAP). Bukti perdata limitatif pada 5 unsur opsi D."
    },
    difficulty: "Mudah"
  },
  {
    id: 52,
    category: "Hukum Acara Perdata",
    topicTag: "Kasus Wanprestasi & Rekonvensi",
    question: "Amir menggugat Budi agar Budi segera menyerahkan tanah yang dibeli Amir. Namun Amir sendiri belum melunasi pembayaran harga tanah tersebut. Untuk menuntut pelunasan pembayaran dalam perkara tersebut, tindakan hukum yang tepat bagi Budi adalah....",
    options: [
      { key: "A", text: "Budi dapat melakukan upaya derden verzet" },
      { key: "B", text: "Budi dapat mengajukan gugatan rekonvensi terhadap Amir" },
      { key: "C", text: "Budi tidak dapat melakukan upaya apapun sampai putusan selesai" },
      { key: "D", text: "Budi wajib mengajukan gugatan baru dan terpisah" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Tergugat dapat menuntut haknya kembali melalui gugatan rekonvensi dalam perkara yang sama.",
      legalBasis: "Pasal 132a HIR jo. Pasal 157 RBg.",
      analysis: "Melalui gugatan rekonvensi, tergugat Budi dapat meminta majelis hakim menghukum Amir melunasi sisa pembelian tanah, diperiksa dan diputus serentak dalam satu putusan."
    },
    difficulty: "Mudah"
  },
  {
    id: 53,
    category: "Hukum Acara Perdata",
    topicTag: "Eksepsi Kompetensi Relatif",
    question: "Eksepsi mengenai tidak berwenangnya pengadilan negeri untuk mengadili perkara perdata berkaitan dengan wilayah kekuasaan pengadilan disebut....",
    options: [
      { key: "A", text: "Eksepsi kewenangan absolut" },
      { key: "B", text: "Eksepsi dilatoir" },
      { key: "C", text: "Eksepsi kompetensi relatif" },
      { key: "D", text: "Eksepsi peremptoir" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Kewenangan berdasarkan wilayah hukum/geografis disebut kompetensi relatif.",
      legalBasis: "Pasal 118 ayat (1) HIR jo. Pasal 142 RBg.",
      analysis: "Kompetensi absolut menyangkut pembagian lingkungan peradilan (misal PN vs PA vs PTUN). Sedangkan wilayah pengadilan antar sesama PN adalah kompetensi relatif."
    },
    difficulty: "Mudah"
  },
  {
    id: 54,
    category: "Hukum Acara Perdata",
    topicTag: "Dasar Surat Gugatan",
    question: "Tata cara pengajuan gugatan perdata tertulis diatur dalam:",
    options: [
      { key: "A", text: "Pasal 118 HIR / 142 RBg" },
      { key: "B", text: "Pasal 122 HIR / 144 RBg" },
      { key: "C", text: "Pasal 123 HIR / 142 RBg" },
      { key: "D", text: "Pasal 118 HIR / 143 RBg" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Pengajuan gugatan perdata secara tertulis diatur dalam Pasal 118 HIR / 142 RBg.",
      legalBasis: "Pasal 118 ayat (1) HIR jo. Pasal 142 ayat (1) RBg.",
      analysis: "Gugatan perdata didaftarkan kepada Ketua Pengadilan Negeri yang berwenang menurut tata cara yang diatur dalam Pasal 118 HIR atau Pasal 142 RBg."
    },
    difficulty: "Mudah"
  },
  // --- HUKUM PIDANA & HUKUM ACARA PIDANA (55 - 74) ---
  {
    id: 55,
    category: "Hukum Acara Pidana",
    topicTag: "Asas Legalitas & Non-Retroaktif",
    question: "Budi melakukan perbuatan pidana pada bulan Februari 2026. Jaksa menuntut Budi berdasarkan ketentuan pidana yang baru berlaku setelah perbuatan tersebut dilakukan. Asas hukum yang tepat adalah....",
    options: [
      { key: "A", text: "Peraturan pidana baru dapat berlaku surut demi kepentingan negara." },
      { key: "B", text: "Peraturan pidana hanya berlaku terhadap WNI." },
      { key: "C", text: "Tidak seorang pun dapat dipidana berdasarkan aturan yang berlaku setelah perbuatan dilakukan (Non-retroaktif)." },
      { key: "D", text: "Hakim bebas menerapkan hukum yang dianggap adil." }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Asas legalitas melarang pemberlakuan surut hukum pidana (nullum delictum nulla poena sine praevia lege poenali).",
      legalBasis: "Pasal 1 ayat (1) KUHP jo. Pasal 28I ayat (1) UUD 1945.",
      analysis: "Tiada suatu perbuatan dapat dipidana kecuali berdasarkan kekuatan aturan pidana dalam peraturan perundang-undangan yang telah ada sebelum perbuatan dilakukan."
    },
    difficulty: "Mudah"
  },
  {
    id: 56,
    category: "Hukum Acara Pidana",
    topicTag: "Percobaan Tindak Pidana (Poging)",
    question: "Andi berniat membunuh Yoko dengan racun. Racun telah dimasukkan ke minuman, tetapi belum diminum karena diketahui oleh pelayan. Perbuatan Andi termasuk....",
    options: [
      { key: "A", text: "Persiapan" },
      { key: "B", text: "Percobaan tindak pidana (Poging)" },
      { key: "C", text: "Turut serta" },
      { key: "D", text: "Pembantuan" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Pelaksanaan telah dimulai namun terhalang bukan karena kehendak sendiri adalah percobaan.",
      legalBasis: "Pasal 53 ayat (1) KUHP.",
      analysis: "Percobaan melakukan kejahatan dipidana apabila niat telah ternyata dari permulaan pelaksanaan dan pelaksanaan itu tidak selesai bukan semata-mata karena kehendak pelaku."
    },
    difficulty: "Mudah"
  },
  {
    id: 57,
    category: "Hukum Acara Pidana",
    topicTag: "Penyertaan (Doen Pleger)",
    question: "Toni menyuruh Neymar mencuri kendaraan dengan memberikan seluruh rencana, sedangkan Toni sendiri tidak berada di lokasi. Status hukum Toni adalah....",
    options: [
      { key: "A", text: "Pembantu" },
      { key: "B", text: "Pelaku tunggal" },
      { key: "C", text: "Orang yang menyuruh melakukan (Doen Pleger)" },
      { key: "D", text: "Saksi" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Pihak yang menyuruh orang lain melakukan tindak pidana dikualifikasikan sebagai Doen Pleger.",
      legalBasis: "Pasal 55 ayat (1) ke-1 KUHP.",
      analysis: "Dipidana sebagai pelaku tindak pidana mereka yang melakukan (pleger), yang menyuruh melakukan (doen pleger), atau turut serta melakukan (medepleger)."
    },
    difficulty: "Sedang"
  },
  {
    id: 58,
    category: "Hukum Acara Pidana",
    topicTag: "UU Tindak Pidana Korupsi",
    question: "Pengaturan hukum utama mengenai tindak pidana korupsi di Indonesia saat ini diatur dalam....",
    options: [
      { key: "A", text: "UU No. 31 Tahun 1971" },
      { key: "B", text: "UU No. 14 Tahun 1985" },
      { key: "C", text: "UU No. 5 Tahun 1999" },
      { key: "D", text: "UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Dasar hukum Tipikor adalah UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001.",
      legalBasis: "Pasal 1 angka 1 jo. Pasal 43A Undang-Undang No. 31 Tahun 1999 sebagaimana telah diubah dengan Undang-Undang No. 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi.",
      analysis: "UU No. 31 Tahun 1999 menggantikan UU 31/1971 dan kemudian diperbarui serta diperluas rumusannya melalui UU No. 20 Tahun 2001."
    },
    difficulty: "Mudah"
  },
  {
    id: 59,
    category: "Hukum Acara Pidana",
    topicTag: "Tujuan Penangkapan",
    question: "Dalam penyidikan, penyidik melakukan penangkapan terhadap tersangka. Tujuan utama penangkapan adalah....",
    options: [
      { key: "A", text: "Memberikan hukuman awal" },
      { key: "B", text: "Mengganti pidana penjara" },
      { key: "C", text: "Kepentingan penyidikan sesuai syarat undang-undang" },
      { key: "D", text: "Memaksa tersangka mengakui perbuatan" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Penangkapan adalah tindakan pengekangan sementara guna kepentingan penyidikan, bukan hukuman.",
      legalBasis: "Pasal 1 angka 20 jo. Pasal 17 KUHAP.",
      analysis: "Penangkapan hanya dapat dilakukan terhadap orang yang diduga keras melakukan tindak pidana berdasarkan bukti permulaan yang cukup, guna kepentingan penyidikan atau penuntutan."
    },
    difficulty: "Mudah"
  },
  {
    id: 60,
    category: "Hukum Acara Pidana",
    topicTag: "Hak Bantuan Hukum di Penyidikan",
    question: "Pada saat pemeriksaan penyidikan, tersangka meminta didampingi advokat. Tindakan penyidik seharusnya....",
    options: [
      { key: "A", text: "Menolak permohonan tersebut" },
      { key: "B", text: "Menunda tanpa alasan yang jelas" },
      { key: "C", text: "Memberikan kesempatan memperoleh bantuan hukum" },
      { key: "D", text: "Menunggu persetujuan jaksa penuntut umum" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Penyidik wajib memberikan akses dan memberitahukan hak bantuan hukum advokat.",
      legalBasis: "Pasal 54 KUHAP jo. Pasal 114 KUHAP jo. UU No. 18 Tahun 2003.",
      analysis: "Tersangka berhak mendapatkan bantuan hukum pada setiap tingkat pemeriksaan. Jika tersangka menolak, penolakan tersebut wajib dibuat dalam Berita Acara tertulis."
    },
    difficulty: "Mudah"
  },
  {
    id: 61,
    category: "Hukum Acara Pidana",
    topicTag: "Pertanggungjawaban Pidana Korporasi",
    question: "PT XYZ melakukan pencemaran lingkungan hidup melalui kebijakan direksi. Menurut KUHP Nasional (UU No. 1 Tahun 2023)....",
    options: [
      { key: "A", text: "Hanya direktur yang dapat dipidana" },
      { key: "B", text: "Hanya pegawai lapangan yang dipidana" },
      { key: "C", text: "Korporasi dapat dimintai pertanggungjawaban pidana" },
      { key: "D", text: "Korporasi tidak dapat dipidana" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "KUHP Nasional mengatur secara tegas pertanggungjawaban pidana korporasi.",
      legalBasis: "Pasal 47 ayat (1) dan Pasal 48 ayat (1) UU No. 1 Tahun 2023 (KUHP Nasional).",
      analysis: "Tindak pidana oleh korporasi dapat dijatuhkan kepada korporasi itu sendiri, pengurus yang berkedudukan fungsional, pengendali, maupun pemilik manfaat (beneficial owner)."
    },
    difficulty: "Sedang"
  },
  {
    id: 62,
    category: "Hukum Acara Pidana",
    topicTag: "Pembelaan Terpaksa (Noodweer)",
    question: "Zidane memukul Materazzi untuk mempertahankan diri dari serangan pisau yang sedang berlangsung secara seketika. Perbuatan Zidane merupakan....",
    options: [
      { key: "A", text: "Penganiayaan biasa" },
      { key: "B", text: "Pembelaan terpaksa yang melampaui batas (Noodweer Exces)" },
      { key: "C", text: "Pembelaan terpaksa (Noodweer)" },
      { key: "D", text: "Percobaan pembunuhan" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Pembelaan seketika dari serangan melawan hukum yang proporsional adalah Noodweer (alasan pembenar).",
      legalBasis: "Pasal 34 UU No. 1 Tahun 2023 (KUHP baru) / Pasal 49 ayat (1) KUHP lama.",
      analysis: "Pembelaan terpaksa menghapus sifat melawan hukum perbuatan jika dilakukan untuk membela diri atau orang lain dari serangan melawan hukum yang seketika."
    },
    difficulty: "Mudah"
  },
  {
    id: 63,
    category: "Hukum Acara Pidana",
    topicTag: "Sistem Peradilan Pidana Anak",
    question: "Dasar hukum yang mengatur tentang sistem peradilan pidana anak saat ini adalah...",
    options: [
      { key: "A", text: "Undang-Undang Nomor 3 Tahun 1997" },
      { key: "B", text: "Undang-Undang Nomor 11 Tahun 2012" },
      { key: "C", text: "Undang-Undang Nomor 23 Tahun 2002" },
      { key: "D", text: "Undang-Undang Nomor 35 Tahun 2014" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Sistem Peradilan Pidana Anak diatur dalam UU No. 11 Tahun 2012 (SPPA).",
      legalBasis: "Pasal 1 angka 1 jo. Pasal 108 Undang-Undang No. 11 Tahun 2012 tentang Sistem Peradilan Pidana Anak (SPPA).",
      analysis: "UU No. 11 Tahun 2012 mencabut UU No. 3 Tahun 1997 dan mengedepankan pendekatan keadilan restoratif (restorative justice) serta diversi bagi anak yang berhadapan dengan hukum."
    },
    difficulty: "Mudah"
  },
  {
    id: 64,
    category: "Hukum Acara Pidana",
    topicTag: "Tujuan Pemidanaan Modern",
    question: "Menurut KUHP Nasional, tujuan pemidanaan bukan semata-mata pembalasan. Tujuan pemidanaan meliputi....",
    options: [
      { key: "A", text: "Balas dendam negara" },
      { key: "B", text: "Memiskinkan pelaku" },
      { key: "C", text: "Mencegah tindak pidana, membina pelaku, memulihkan keseimbangan, dan mewujudkan keadilan" },
      { key: "D", text: "Menghukum seberat-beratnya" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Paradigma pemidanaan KUHP Nasional bergeser ke arah rehabilitatif, edukatif, dan keadilan restoratif.",
      legalBasis: "Pasal 51 dan Pasal 54 ayat (2) UU No. 1 Tahun 2023 tentang KUHP.",
      analysis: "Pemidanaan bertujuan mencegah tindak pidana, merehabilitasi terpidana, menyelesaikan konflik, dan memulihkan keseimbangan masyarakat, bukan untuk merendahkan martabat manusia."
    },
    difficulty: "Mudah"
  },
  {
    id: 65,
    category: "Hukum Acara Pidana",
    topicTag: "Jenis Pidana Pokok KUHP Baru",
    question: "Menurut Pasal 64 & 65 KUHP Nasional (UU No. 1 Tahun 2023), pidana pokok meliputi....",
    options: [
      { key: "A", text: "Denda, kerja sosial, penjara" },
      { key: "B", text: "Penjara, tutupan, pengawasan" },
      { key: "C", text: "Penjara, denda, tutupan, pengawasan, dan kerja sosial" },
      { key: "D", text: "Semua jawaban benar" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Pidana pokok terdiri dari pidana penjara, tutupan, pengawasan, denda, dan kerja sosial.",
      legalBasis: "Pasal 65 UU No. 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana.",
      analysis: "KUHP Nasional memperkenalkan bentuk sanksi baru yang humanis seperti pidana pengawasan dan pidana kerja sosial, sementara pidana mati dialihkan menjadi pidana yang bersifat khusus (alternatif)."
    },
    difficulty: "Sedang"
  },
  {
    id: 66,
    category: "Hukum Acara Pidana",
    topicTag: "Alasan Pemaaf",
    question: "Dalam hukum pidana, penerapan alasan pemaaf (schuldintregingsgrond) mengakibatkan....",
    options: [
      { key: "A", text: "Perbuatan menjadi halal/dibenarkan secara hukum" },
      { key: "B", text: "Pelaku tidak dipidana walaupun perbuatannya tetap melawan hukum" },
      { key: "C", text: "Barang bukti dikembalikan kepada pelaku" },
      { key: "D", text: "Gugatan gugur demi hukum" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Alasan pemaaf menghapus kesalahan pelaku (subjektif), namun perbuatannya tetap bersifat melawan hukum.",
      legalBasis: "Pasal 38, 40, dan 43 UU No. 1 Tahun 2023 (KUHP baru).",
      analysis: "Perbedaannya: Alasan pembenar menghapuskan sifat melawan hukumnya perbuatan (perbuatan jadi legal), sedangkan alasan pemaaf memaafkan si pembuat karena kondisi tertentu (misal daya paksa atau gangguan jiwa)."
    },
    difficulty: "Sedang"
  },
  {
    id: 67,
    category: "Hukum Acara Pidana",
    topicTag: "Yang Bukan Tujuan Pemidanaan",
    question: "Yang BUKAN merupakan tujuan pemidanaan menurut Pasal 51 KUHP Baru adalah....",
    options: [
      { key: "A", text: "Mencegah tindak pidana" },
      { key: "B", text: "Memasyarakatkan pelaku" },
      { key: "C", text: "Memulihkan keseimbangan masyarakat" },
      { key: "D", text: "Membalas dendam kepada pelaku" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Pembalasan dendam (retributive) murni secara tegas ditolak oleh konsep KUHP modern.",
      legalBasis: "Pasal 51 dan Pasal 54 ayat (2) UU No. 1 Tahun 2023.",
      analysis: 'Pasal 54 ayat (2) KUHP Baru menegaskan: "Pemidanaan tidak dimaksudkan untuk menderita dan merendahkan martabat manusia." Balas dendam bukan tujuan pemidanaan Indonesia.'
    },
    difficulty: "Mudah"
  },
  {
    id: 68,
    category: "Hukum Acara Pidana",
    topicTag: "Pengakuan Bersalah (Plea Bargain)",
    question: "Pengakuan Bersalah (Plea Bargain) menurut pembaruan hukum acara pidana hanya dapat diterapkan apabila....",
    options: [
      { key: "A", text: "Berlaku untuk semua tindak pidana termasuk tindak pidana berat" },
      { key: "B", text: "Terdakwa baru pertama kali melakukan tindak pidana, ancaman pidana penjara paling lama 5 tahun, dan/atau bersedia membayar ganti rugi/restitusi" },
      { key: "C", text: "Hanya berlaku bagi perkara korupsi di atas 1 miliar" },
      { key: "D", text: "Hanya dapat dilakukan setelah putusan inkracht" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Plea bargain mensyaratkan status pelaku pertama kali, ancaman pidana maksimal 5 tahun, dan kesediaan membayar restitusi.",
      legalBasis: "Pasal 199 ayat (1) dan ayat (2) Regulasi Pembaruan Hukum Acara Pidana jo. Pasal 203 ayat (1) KUHAP (UU No. 8 Tahun 1981).",
      analysis: "Plea bargain bertujuan memangkas beban peradilan pidana dengan syarat limitatif agar tidak disalahgunakan pada tindak pidana berat."
    },
    difficulty: "Sedang"
  },
  {
    id: 69,
    category: "Hukum Acara Pidana",
    topicTag: "Sistem Peradilan Pidana Terpadu",
    question: "Koordinasi antara Penyidik dan Penuntut Umum dalam penanganan perkara pidana dilaksanakan dalam kerangka....",
    options: [
      { key: "A", text: "Arbitrase" },
      { key: "B", text: "Sistem Peradilan Pidana Terpadu (Integrated Criminal Justice System)" },
      { key: "C", text: "Mediasi Perdata" },
      { key: "D", text: "Peradilan Militer" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Penyidik dan Penuntut Umum berkoordinasi dalam sistem peradilan pidana terpadu.",
      legalBasis: "Pasal 1 angka 1, angka 2, angka 3, dan angka 4 KUHAP (Undang-Undang No. 8 Tahun 1981) jo. Pasal 138-139 KUHAP.",
      analysis: "Sistem peradilan pidana terpadu mengharuskan sinergi fungsional antara kepolisian, kejaksaan, pengadilan, dan lembaga pemasyarakatan."
    },
    difficulty: "Mudah"
  },
  {
    id: 70,
    category: "Hukum Acara Pidana",
    topicTag: "Keadilan Restoratif di Penyidikan",
    question: "Salah satu alasan penghentian penyidikan (SP3) dalam pembaruan KUHAP adalah....",
    options: [
      { key: "A", text: "Penyidik sedang cuti tahunan" },
      { key: "B", text: "Tercapainya penyelesaian perkara melalui mekanisme Keadilan Restoratif (Restorative Justice)" },
      { key: "C", text: "Korban berpindah domisili ke luar kota" },
      { key: "D", text: "Saksi berhalangan hadir" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Penyelesaian damai melalui keadilan restoratif dapat menjadi dasar penghentian penyidikan.",
      legalBasis: "Pasal 5 ayat (1) Peraturan Kejaksaan RI No. 15 Tahun 2020 jo. Pasal 12 Perkapolri No. 8 Tahun 2021 jo. Pasal 109 ayat (2) KUHAP.",
      analysis: "Penghentian perkara berbasis restorative justice bertujuan memulihkan korban dan masyarakat pada tindak pidana ringan atau tanpa motif jahat berat."
    },
    difficulty: "Mudah"
  },
  {
    id: 71,
    category: "Hukum Acara Pidana",
    topicTag: "Kewajiban Memberitahu Hak Bantuan Hukum",
    question: "Sebelum pemeriksaan penyidikan dimulai, Penyidik wajib memberitahukan kepada Tersangka mengenai....",
    options: [
      { key: "A", text: "Hak memilih majelis hakim" },
      { key: "B", text: "Hak memperoleh Bantuan Hukum atau pendampingan Advokat" },
      { key: "C", text: "Hak mengajukan kasasi" },
      { key: "D", text: "Hak meminta Peninjauan Kembali" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Penyidik wajib memberitahukan hak memperoleh bantuan hukum sebelum BAP dimulai.",
      legalBasis: "Pasal 114 jo. Pasal 54 KUHAP.",
      analysis: "Pemeriksaan yang melanggar kewajiban ini mengakibatkan berita acara pemeriksaan (BAP) cacat yuridis dan tidak sah dijadikan dasar pembuktian."
    },
    difficulty: "Mudah"
  },
  {
    id: 72,
    category: "Hukum Acara Pidana",
    topicTag: "Advokat Hadapi Intimidasi Penyidik",
    question: "Apabila Penyidik melakukan intimidasi atau mengajukan pertanyaan menjerat terhadap Tersangka saat pemeriksaan BAP, Advokat berhak....",
    options: [
      { key: "A", text: "Menghentikan penyidikan secara sepihak" },
      { key: "B", text: "Menyatakan keberatan demi melindungi hak hukum tersangka" },
      { key: "C", text: "Menahan penyidik di ruangan" },
      { key: "D", text: "Membubarkan pemeriksaan kepolisian" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Advokat berhak menyatakan keberatan jika terjadi intimidasi atau pertanyaan yang bersifat menjerat.",
      legalBasis: "Pasal 115 ayat (1) KUHAP jo. UU No. 18 Tahun 2003.",
      analysis: "Advokat mendampingi tersangka untuk memastikan pemeriksaan berjalan secara bebas tanpa tekanan, paksaan, atau intimidasi dari penyidik."
    },
    difficulty: "Sedang"
  },
  {
    id: 73,
    category: "Hukum Acara Pidana",
    topicTag: "Saksi Mahkota (Crown Witness)",
    question: "Dalam kepentingan penyidikan dan penuntutan, penegak hukum dapat menetapkan Tersangka sebagai saksi mahkota untuk....",
    options: [
      { key: "A", text: "Mempercepat putusan sela" },
      { key: "B", text: "Membantu mengungkap keterlibatan Tersangka lain dalam perkara yang sama" },
      { key: "C", text: "Mengurangi jumlah saksi sidang" },
      { key: "D", text: "Menggantikan keterangan ahli" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Saksi mahkota dihadirkan untuk membuktikan perbuatan tersangka/terdakwa lain dalam perkara splitzing.",
      legalBasis: "Pasal 168 huruf c jo. Pasal 184 ayat (1) KUHAP (UU No. 8 Tahun 1981) jo. Yurisprudensi Mahkamah Agung RI No. 1986 K/Pid/1989.",
      analysis: "Saksi mahkota adalah tersangka/terdakwa yang diajukan sebagai saksi bagi terdakwa lain yang bersama-sama melakukan tindak pidana karena kekurangan alat bukti lain."
    },
    difficulty: "Sedang"
  },
  {
    id: 74,
    category: "Hukum Acara Pidana",
    topicTag: "Perlindungan Saksi & Korban",
    question: "Setiap pelapor, pengadu, saksi, dan korban dalam tindak pidana berhak memperoleh....",
    options: [
      { key: "A", text: "Penghapusan pidana mutlak" },
      { key: "B", text: "Pelindungan fisik, psikis, dan hukum" },
      { key: "C", text: "Imunitas tanpa batas" },
      { key: "D", text: "Pengampunan grasi" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Saksi dan korban berhak memperoleh perlindungan keamanan pribadi, keluarga, dan harta bendanya.",
      legalBasis: "Pasal 5 ayat (1) huruf a dan Pasal 10 ayat (1) Undang-Undang No. 13 Tahun 2006 tentang Perlindungan Saksi dan Korban jo. UU No. 31 Tahun 2014.",
      analysis: "LPSK bertugas memberikan perlindungan dan bantuan (medis/psikologis) agar saksi dan korban bebas dari ancaman saat memberikan keterangan di peradilan."
    },
    difficulty: "Mudah"
  },
  // --- HUKUM ACARA PERADILAN AGAMA (75 - 92) ---
  {
    id: 75,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Taklik Talak",
    question: "Perjanjian yang diucapkan calon mempelai pria setelah akad nikah yang dicantumkan dalam Akta Nikah berupa janji talak yang digantungkan kepada suatu keadaan tertentu disebut.....",
    options: [
      { key: "A", text: "Khulu'" },
      { key: "B", text: "Talak Bain Kubraa" },
      { key: "C", text: "Taklik Talak" },
      { key: "D", text: "Mut'ah" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Taklik talak adalah janji talak yang digantungkan pada syarat tertentu setelah akad nikah.",
      legalBasis: "Pasal 45\u201346 Kompilasi Hukum Islam (KHI).",
      analysis: "Jika suami melanggar syarat taklik talak (misal meninggalkan 2 tahun berturut-turut atau tidak memberi nafkah wajib) dan istri tidak ridha lalu membayar iwadl ke pengadilan, gugatan cerai dapat dikabulkan."
    },
    difficulty: "Mudah"
  },
  {
    id: 76,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Beban Biaya Perkara Perceraian",
    question: "Biaya perkara dalam bidang perceraian di Pengadilan Agama pada umumnya dibebankan kepada.........",
    options: [
      { key: "A", text: "Pihak Penggugat / Pemohon" },
      { key: "B", text: "Pihak yang kalah secara mutlak" },
      { key: "C", text: "Pihak Tergugat / Termohon saja" },
      { key: "D", text: "Dibagi dua sama rata" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Dalam perkara perceraian, amar putusan umumnya membebankan biaya perkara kepada Penggugat/Pemohon.",
      legalBasis: "Pasal 89 ayat (1) UU No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.",
      analysis: "Pasal 89 ayat (1) UU Peradilan Agama menetapkan bahwa biaya perkara dalam bidang perkawinan dibebankan kepada penggugat atau pemohon."
    },
    difficulty: "Sedang"
  },
  {
    id: 77,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Nafkah Mut'ah",
    question: "Apakah yang dimaksud dengan Mut'ah dalam hukum perkawinan Islam.........",
    options: [
      { key: "A", text: "Hak pemeliharaan anak di bawah umur" },
      { key: "B", text: "Hak mengasuh anak" },
      { key: "C", text: "Pemberian bekas suami kepada isteri yang dijatuhi talak berupa benda atau uang sebagai penghibur" },
      { key: "D", text: "Perceraian yang terjadi atas permintaan isteri dengan tebusan uang" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Mut'ah adalah pemberian kenang-kenangan/penghibur dari bekas suami kepada bekas istri setelah cerai talak.",
      legalBasis: "Pasal 1 huruf j jo. Pasal 149 huruf a Kompilasi Hukum Islam (KHI).",
      analysis: "Bekas suami wajib memberikan mut'ah yang layak kepada bekas istrinya, baik berupa uang atau benda, kecuali bekas istri tersebut qabla al-dukhul (belum pernah dicampuri)."
    },
    difficulty: "Mudah"
  },
  {
    id: 78,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Ikrar Wakaf",
    question: "Pihak yang hendak mewakafkan tanah miliknya wajib menyatakan ikrar wakaf di hadapan.....",
    options: [
      { key: "A", text: "Pejabat Pembuat Akta Tanah (PPAT)" },
      { key: "B", text: "Pejabat Pembuat Akta Ikrar Wakaf (PPAIW)" },
      { key: "C", text: "Pejabat Pegawai Negeri Sipil Kecamatan" },
      { key: "D", text: "Kepala Desa setempat" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Ikrar wakaf wajib dinyatakan di hadapan Pejabat Pembuat Akta Ikrar Wakaf (PPAIW).",
      legalBasis: "Pasal 17 UU No. 41 Tahun 2004 tentang Wakaf jo. PP No. 42 Tahun 2006.",
      analysis: "PPAIW adalah pejabat berwenang yang ditunjuk oleh Menteri Agama (biasanya Kepala KUA) untuk membuat Akta Ikrar Wakaf (AIW)."
    },
    difficulty: "Mudah"
  },
  {
    id: 79,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Pemohon Itsbat Nikah",
    question: "Pihak yang berhak untuk mengajukan permohonan pengesahan nikah (Itsbat Nikah) ke Pengadilan Agama adalah.........",
    options: [
      { key: "A", text: "Suami atau Isteri" },
      { key: "B", text: "Saksi Nikah saja" },
      { key: "C", text: "Jaksa penuntut umum" },
      { key: "D", text: "Penghulu KUA" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Itsbat nikah diajukan oleh suami atau istri, anak, wali nikah, atau pihak berkepentingan.",
      legalBasis: "Pasal 7 ayat (4) Kompilasi Hukum Islam (KHI).",
      analysis: "Permohonan itsbat nikah diajukan untuk mendapatkan penetapan sahnya perkawinan yang telah terjadi secara syariat tetapi belum tercatat di KUA."
    },
    difficulty: "Mudah"
  },
  {
    id: 80,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Masa Iddah Wafat",
    question: "Waktu tunggu (iddah) bagi seorang janda apabila perkawinan putus karena kematian suami, ditetapkan selama.........",
    options: [
      { key: "A", text: "120 hari" },
      { key: "B", text: "125 hari" },
      { key: "C", text: "130 hari (4 bulan 10 hari)" },
      { key: "D", text: "135 hari" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Masa iddah janda yang ditinggal mati suaminya adalah 130 hari (4 bulan 10 hari).",
      legalBasis: "Pasal 153 ayat (2) huruf a KHI jo. Pasal 11 PP No. 9 Tahun 1975.",
      analysis: "Bila perkawinan putus karena kematian, waktu tunggu ditetapkan 130 hari. Berbeda dengan cerai hidup yang masa tunggunya 3 kali suci atau 90 hari."
    },
    difficulty: "Mudah"
  },
  {
    id: 81,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Sumpah Li'an",
    question: "Gugatan cerai diajukan atas tuduhan zina namun suami tidak dapat menghadirkan 4 saksi, sementara istri membantah tuduhan tersebut, maka hakim memerintahkan para pihak bersumpah yang disebut acara.........",
    options: [
      { key: "A", text: "Sumpah Pemutus" },
      { key: "B", text: "Li'an" },
      { key: "C", text: "Islah" },
      { key: "D", text: "Takhayyur" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Sumpah khusus atas tuduhan zina suami-istri di pengadilan disebut sumpah Li'an.",
      legalBasis: "Pasal 125\u2013128 Kompilasi Hukum Islam (KHI).",
      analysis: "Sumpah Li'an menyebabkan ikatan perkawinan putus untuk selama-lamanya dan anak yang dikandung tidak dinasabkan kepada suami penuduh."
    },
    difficulty: "Sedang"
  },
  {
    id: 82,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Bukan Alasan Perceraian",
    question: "Berikut ini yang BUKAN merupakan alasan sah perceraian menurut peraturan perundang-undangan di Indonesia adalah....",
    options: [
      { key: "A", text: "Salah satu pihak melakukan zina" },
      { key: "B", text: "Salah satu pihak meninggalkan pihak lain selama 2 tahun berturut-turut tanpa izin" },
      { key: "C", text: "Salah satu pihak melakukan kekejaman atau penganiayaan berat" },
      { key: "D", text: "Salah satu pihak tidak mempunyai pekerjaan tetap" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Tidak memiliki pekerjaan tetap bukan merupakan alasan perceraian yang sah dalam undang-undang.",
      legalBasis: "Pasal 19 PP No. 9 Tahun 1975 jo. Pasal 116 KHI jo. Pasal 39 UU No. 1 Tahun 1974.",
      analysis: "Alasan perceraian ditentukan secara limitatif (zina, mabuk/judi, meninggalkan 2 tahun, pidana 5 tahun, KDRT, cacat badan, dan pertengkaran terus-menerus/syiqaq)."
    },
    difficulty: "Mudah"
  },
  {
    id: 83,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Eksekusi Penetapan P3HP",
    question: "Apakah permohonan pertolongan pembagian harta peninggalan (P3HP) di Pengadilan Agama dapat langsung dieksekusi?",
    options: [
      { key: "A", text: "Dapat dieksekusi langsung oleh jurusita" },
      { key: "B", text: "Dapat dengan syarat diajukan oleh seluruh ahli waris" },
      { key: "C", text: "Tidak dapat, karena produknya penetapan voluntair bukan putusan condemnatoir" },
      { key: "D", text: "Dapat jika disetujui BPN" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Penetapan P3HP adalah perkara voluntair yang tidak memiliki amar menghukum (condemnatoir) sehingga tidak dapat dieksekusi paksa.",
      legalBasis: "Pasal 54 jo. Pasal 64 Undang-Undang No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama jo. Pasal 195 ayat (1) HIR / Pasal 206 ayat (1) RBg.",
      analysis: "Apabila terjadi sengketa antar ahli waris dalam pembagian harta waris, para pihak wajib mengajukan gugatan perdata kontenjius tersendiri."
    },
    difficulty: "Sulit"
  },
  {
    id: 84,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Domisili Cerai Gugat",
    question: "Gugatan Cerai yang diajukan oleh Istri (Cerai Gugat) wajib diajukan di Pengadilan Agama tempat kediaman:",
    options: [
      { key: "A", text: "Istri (Penggugat)" },
      { key: "B", text: "Suami (Tergugat)" },
      { key: "C", text: "Orang tua Suami" },
      { key: "D", text: "Orang tua Istri" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Cerai gugat diajukan ke Pengadilan Agama yang mewilayahi tempat tinggal istri (penggugat).",
      legalBasis: "Pasal 73 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      analysis: "Sebagai perlindungan hukum bagi wanita, gugatan cerai istri diajukan di tempat kediaman istri kecuali jika istri meninggalkan tempat tinggal bersama tanpa izin suami."
    },
    difficulty: "Mudah"
  },
  {
    id: 85,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Saksi Perkara Syiqaq",
    question: "Yang dapat dijadikan sebagai saksi dalam perkara perceraian yang didasarkan pada alasan Syiqaq (perselisihan tajam terus-menerus) adalah....",
    options: [
      { key: "A", text: "Orang tua" },
      { key: "B", text: "Pembantu rumah tangga" },
      { key: "C", text: "Orang-orang yang dekat dengan suami atau istri" },
      { key: "D", text: "Semua jawaban benar" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Keluarga dan orang dekat diperbolehkan menjadi saksi dalam perkara perceraian alasan syiqaq.",
      legalBasis: "Pasal 76 ayat (1) UU Peradilan Agama jo. Pasal 22 PP No. 9 Tahun 1975.",
      analysis: "Pengecualian larangan saksi keluarga dekat dalam hukum acara perdata diberikan pada perkara perceraian syiqaq (hakam/keluarga terdekat yang mengetahui pertengkaran)."
    },
    difficulty: "Sedang"
  },
  {
    id: 86,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Berlakunya Hukum Acara Perdata Umum di PA",
    question: "Pasal berapakah dalam UU No. 7 Tahun 1989 yang mengatur bahwa Hukum Acara Perdata yang berlaku pada Pengadilan Agama adalah hukum acara perdata yang berlaku di lingkungan Peradilan Umum:",
    options: [
      { key: "A", text: "Pasal 45 UU No. 7 Tahun 1989" },
      { key: "B", text: "Pasal 54 UU No. 7 Tahun 1989" },
      { key: "C", text: "Pasal 62 UU No. 7 Tahun 1989" },
      { key: "D", text: "Pasal 70 UU No. 7 Tahun 1989" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Pasal 54 UU Peradilan Agama menegaskan berlakunya hukum acara perdata umum di lingkungan Pengadilan Agama.",
      legalBasis: "Pasal 54 UU No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009.",
      analysis: "Hukum acara perdata umum (HIR/RBg) berlaku mutatis mutandis di Pengadilan Agama, kecuali ditentukan lain secara khusus dalam UU Peradilan Agama."
    },
    difficulty: "Sedang"
  },
  {
    id: 87,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Kewenangan Khusus Pengadilan Agama",
    question: "Menurut UU No. 7 Tahun 1989 yang telah diubah dengan UU No. 3 Tahun 2006, Pengadilan Agama mempunyai kewenangan memeriksa perkara....",
    options: [
      { key: "A", text: "Hanya bagi yang beragama Islam dalam bidang perkawinan dan jinayah" },
      { key: "B", text: "Perkara perdata dan pidana khusus" },
      { key: "C", text: "Perkara perdata menurut hukum Islam saja" },
      { key: "D", text: "Perkara perdata tertentu bagi orang-orang yang beragama Islam" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Kewenangan PA meliputi perkawinan, waris, wasiat, hibah, wakaf, zakat, infaq, sedekah, dan ekonomi syariah bagi yang beragama Islam.",
      legalBasis: "Pasal 49 UU No. 3 Tahun 2006 tentang Perubahan atas UU No. 7 Tahun 1989.",
      analysis: "Kewenangan Pengadilan Agama diperluas sejak amandemen 2006 mencakup sengketa Perbankan dan Ekonomi Syariah."
    },
    difficulty: "Mudah"
  },
  {
    id: 88,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Sumber Hukum Acara PA",
    question: "Sumber utama Hukum Acara Perdata yang masih diberlakukan dalam lingkungan Peradilan Agama ialah....",
    options: [
      { key: "A", text: "HIR (Jawa/Madura), RBg (luar Jawa), dan Rv" },
      { key: "B", text: "Hanya Kompilasi Hukum Islam" },
      { key: "C", text: "UU No. 20 Tahun 1947 saja" },
      { key: "D", text: "UU No. 2 Tahun 1986" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Sumber utama hukum acara perdata di PA adalah HIR, RBg, dan ketentuan Rv.",
      legalBasis: "Pasal 54 UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      analysis: "Kaidah pemeriksaan persidangan di PA tetap berpijak pada HIR/RBg yang dilengkapi hukum Islam materiil (KHI) dan yurisprudensi Mahkamah Agung."
    },
    difficulty: "Mudah"
  },
  {
    id: 89,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Ketentuan Lengkap Masa Iddah",
    question: "Ketentuan masa tunggu (iddah) menurut Pasal 39 PP No. 9 Tahun 1975 juncto Pasal 153 KHI adalah....",
    options: [
      { key: "A", text: "Apabila putus karena kematian: 130 hari" },
      { key: "B", text: "Putus karena perceraian: 90 hari bagi yang masih haid" },
      { key: "C", text: "Dalam keadaan hamil: sampai melahirkan" },
      { key: "D", text: "Semua benar" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Masa iddah wafat 130 hari, cerai 90 hari, dan hamil sampai melahirkan.",
      legalBasis: "Pasal 39 PP No. 9 Tahun 1975 jo. Pasal 153 KHI.",
      analysis: "Semua pernyataan A, B, dan C benar merujuk ketentuan masa iddah wanita pasca putusnya perkawinan."
    },
    difficulty: "Mudah"
  },
  {
    id: 90,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Sita Jaminan di Pengadilan Agama",
    question: "Tuan Budi menggugat pembagian harta bersama (gono-gini) di Pengadilan Agama dan memohonkan sita jaminan (conservatoir beslag). Apakah Pengadilan Agama berwenang meletakkan sita jaminan?",
    options: [
      { key: "A", text: "Pengadilan Agama tidak berwenang" },
      { key: "B", text: "Berwenang hanya jika ada izin dari Pengadilan Negeri" },
      { key: "C", text: "Pengadilan Agama berwenang melakukan sita jaminan" },
      { key: "D", text: "Berwenang hanya bila diajukan bersamaan dengan pidana perzinaan" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Pengadilan Agama berwenang penuh meletakkan sita jaminan dalam ranah kewenangannya.",
      legalBasis: "Pasal 54 UU No. 7 Tahun 1989 jo. Pasal 227 HIR.",
      analysis: "Dalam sengketa harta bersama atau warisan, Pengadilan Agama memiliki kewenangan mandiri meletakkan sita jaminan (conservatoir beslag) tanpa perlu izin Pengadilan Negeri."
    },
    difficulty: "Sedang"
  },
  {
    id: 91,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Tenggang Waktu Ikrar Talak",
    question: "Dalam perkara cerai talak yang telah inkracht, tenggang waktu yang diberikan kepada suami untuk mengikrarkan talak sebelum penetapan izin gugur adalah....",
    options: [
      { key: "A", text: "3 bulan" },
      { key: "B", text: "1 bulan" },
      { key: "C", text: "6 bulan" },
      { key: "D", text: "12 bulan" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Izin ikrar talak gugur jika tidak diucapkan dalam tempo 6 bulan sejak hari sidang ditentukan.",
      legalBasis: "Pasal 70 ayat (6) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      analysis: "Jika lewat waktu 6 bulan pemohon tidak datang mengucapkan ikrar talak, penetapan gugur demi hukum dan perceraian tidak dapat diajukan lagi dengan alasan yang sama."
    },
    difficulty: "Sedang"
  },
  {
    id: 92,
    category: "Hukum Acara Peradilan Agama",
    topicTag: "Cerai Domisili Luar Negeri",
    question: "Dalam gugatan cerai, jika pihak penggugat dan tergugat keduanya bertempat tinggal di luar negeri, maka gugatan cerai diajukan ke....",
    options: [
      { key: "A", text: "Pengadilan Agama tempat kedudukan tergugat" },
      { key: "B", text: "Pengadilan Agama tempat kedudukan penggugat" },
      { key: "C", text: "Pengadilan Agama Jakarta Pusat" },
      { key: "D", text: "Pengadilan Tinggi Agama" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Gugatan cerai pasangan WNI yang sama-sama di luar negeri diajukan ke Pengadilan Agama Jakarta Pusat.",
      legalBasis: "Pasal 73 ayat (3) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      analysis: "Pasal 73 ayat (3) menetapkan: Apabila suami dan istri sama-sama bertempat tinggal di luar negeri, gugatan diajukan kepada Pengadilan yang daerah hukumnya meliputi tempat perkawinan dilangsungkan atau kepada Pengadilan Agama Jakarta Pusat."
    },
    difficulty: "Sedang"
  },
  // --- HUKUM ACARA PERSELISIHAN HUBUNGAN INDUSTRIAL (PHI) (93 - 104) ---
  {
    id: 93,
    category: "Hukum Acara PHI",
    topicTag: "Regulasi PPHI",
    question: "Penyelesaian perselisihan hubungan industrial pada saat ini diatur dalam:",
    options: [
      { key: "A", text: "Undang-Undang Nomor 2 Tahun 2004" },
      { key: "B", text: "Undang-Undang Nomor 4 Tahun 2004" },
      { key: "C", text: "Undang-Undang Nomor 2 Tahun 2002" },
      { key: "D", text: "Undang-Undang Nomor 4 Tahun 2002" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Penyelesaian Perselisihan Hubungan Industrial diatur dalam UU No. 2 Tahun 2004.",
      legalBasis: "Pasal 1 angka 1 jo. Pasal 55 dan Pasal 125 ayat (1) Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI).",
      analysis: "UU No. 2 Tahun 2004 merupakan hukum formil ketenagakerjaan menggantikan mekanisme peradilan perburuhan P4D/P4P."
    },
    difficulty: "Mudah"
  },
  {
    id: 94,
    category: "Hukum Acara PHI",
    topicTag: "Perjanjian Arbitrase PHI",
    question: "Menurut Pasal 32 UU No. 2 Tahun 2004, kesepakatan para pihak yang berselisih dalam hubungan industrial untuk menempuh arbitrase dinyatakan tertulis dalam.....",
    options: [
      { key: "A", text: "Perjanjian penunjukan" },
      { key: "B", text: "Surat perjanjian arbitrase" },
      { key: "C", text: "Putusan arbitrase" },
      { key: "D", text: "Semua benar" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Penyelesaian melalui arbitrase wajib didasari surat perjanjian arbitrase tertulis.",
      legalBasis: "Pasal 32 UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Surat perjanjian arbitrase dibuat para pihak yang memuat subjek, objek perselisihan, nama arbiter, dan pernyataan tunduk pada putusan arbitrase."
    },
    difficulty: "Mudah"
  },
  {
    id: 95,
    category: "Hukum Acara PHI",
    topicTag: "Tenggang Waktu Upaya Hukum PHI",
    question: "Tenggang waktu pengajuan kasasi terhadap putusan Pengadilan Hubungan Industrial adalah 14 hari...",
    options: [
      { key: "A", text: "Sejak putusan diucapkan apabila para pihak hadir" },
      { key: "B", text: "Sejak diberitahukan apabila pemohon tidak hadir" },
      { key: "C", text: "Tidak jelas" },
      { key: "D", text: "Jawaban A dan B benar" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Batas kasasi adalah 14 hari sejak diucapkan jika hadir, atau 14 hari sejak diberitahukan jika tidak hadir.",
      legalBasis: "Pasal 57 jo. Pasal 110 UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Permohonan kasasi PHI disampaikan melalui kepaniteraan PHI pada Pengadilan Negeri setempat dalam tenggang 14 hari kerja."
    },
    difficulty: "Sedang"
  },
  {
    id: 96,
    category: "Hukum Acara PHI",
    topicTag: "Definisi Bipartit",
    question: "Apa yang dimaksud dengan perundingan Bipartit dalam penyelesaian perselisihan hubungan industrial?",
    options: [
      { key: "A", text: "Perundingan antara pekerja/serikat pekerja dengan pengusaha dalam satu perusahaan tanpa pihak ketiga" },
      { key: "B", text: "Perundingan antara serikat pekerja dengan serikat buruh lain" },
      { key: "C", text: "Perundingan antara pekerja, pengusaha, dan Dinas Tenaga Kerja" },
      { key: "D", text: "Perundingan di hadapan majelis hakim pengadilan" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Bipartit adalah musyawarah langsung dua pihak (buruh dan majikan) tanpa pihak ketiga.",
      legalBasis: "Pasal 1 angka 10 UU No. 2 Tahun 2004.",
      analysis: "Perundingan Bipartit merupakan tahap wajib pertama sebelum sengketa dapat dicatatkan ke instansi ketenagakerjaan."
    },
    difficulty: "Mudah"
  },
  {
    id: 97,
    category: "Hukum Acara PHI",
    topicTag: "Kewenangan Konsiliator",
    question: "Apa yang menjadi kewenangan Konsiliator dalam penyelesaian perselisihan hubungan industrial?",
    options: [
      { key: "A", text: "Menyelesaikan perselisihan kepentingan" },
      { key: "B", text: "Menyelesaikan perselisihan pemutusan hubungan kerja (PHK)" },
      { key: "C", text: "Menyelesaikan perselisihan antar serikat pekerja/buruh dalam satu perusahaan" },
      { key: "D", text: "Jawaban A, B, dan C adalah benar" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Konsiliator berwenang menyelesaikan perselisihan kepentingan, PHK, dan antar SP/SB, namun tidak berwenang perselisihan hak.",
      legalBasis: "Pasal 1 angka 13 dan Pasal 17 UU No. 2 Tahun 2004.",
      analysis: "Berbeda dengan Mediator yang berwenang atas keempat jenis perselisihan, Konsiliator hanya berwenang untuk perselisihan kepentingan, PHK, dan antar serikat buruh."
    },
    difficulty: "Sedang"
  },
  {
    id: 98,
    category: "Hukum Acara PHI",
    topicTag: "Kompetensi Relatif PHI",
    question: "Gugatan perselisihan hubungan industrial diajukan kepada Pengadilan Hubungan Industrial pada Pengadilan Negeri yang daerah hukumnya meliputi tempat pekerja/buruh bekerja diatur dalam....",
    options: [
      { key: "A", text: "Pasal 56" },
      { key: "B", text: "Pasal 77" },
      { key: "C", text: "Pasal 81" },
      { key: "D", text: "Pasal 82" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Kompetensi relatif PHI didasarkan pada wilayah tempat pekerja bekerja (Pasal 81).",
      legalBasis: "Pasal 81 UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Pasal 81 menetapkan bahwa gugatan diajukan kepada PHI pada Pengadilan Negeri yang daerah hukumnya meliputi tempat buruh/pekerja bekerja."
    },
    difficulty: "Sedang"
  },
  {
    id: 99,
    category: "Hukum Acara PHI",
    topicTag: "Bukan Tahapan Mediasi",
    question: "Tahapan penyelesaian perselisihan dalam proses mediasi terdiri dari hal-hal di bawah ini, KECUALI:",
    options: [
      { key: "A", text: "Penerbitan anjuran tertulis oleh mediator" },
      { key: "B", text: "Pencatatan perselisihan di kantor Disnaker" },
      { key: "C", text: "Proses mediasi musyawarah para pihak" },
      { key: "D", text: "Pembuatan risalah perundingan bipartit" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Risalah perundingan bipartit dibuat pada tahap internal perusahaan, bukan tahapan mediasi.",
      legalBasis: "Pasal 3 jo. Pasal 8\u201316 UU No. 2 Tahun 2004.",
      analysis: "Risalah bipartit adalah syarat awal sebelum mediasi dapat dimulai. Setelah mediasi berjalan, produk mediator adalah Perjanjian Bersama atau Anjuran Tertulis."
    },
    difficulty: "Mudah"
  },
  {
    id: 100,
    category: "Hukum Acara PHI",
    topicTag: "Gugatan Tanpa Risalah Mediasi",
    question: "Pengajuan gugatan ke PHI yang tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi maka Hakim Pengadilan Hubungan Industrial....",
    options: [
      { key: "A", text: "Menolak gugatan penggugat dalam putusan akhir" },
      { key: "B", text: "Mengabaikan syarat formal tersebut" },
      { key: "C", text: "Wajib mengembalikan gugatan kepada penggugat" },
      { key: "D", text: "Melanjutkan sidang secara verstek" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Hakim PHI wajib mengembalikan gugatan yang tidak dilampiri risalah mediasi/konsiliasi.",
      legalBasis: "Pasal 83 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Pasal 83 ayat (1) menegaskan bahwa pengajuan gugatan yang tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi, maka hakim wajib mengembalikan gugatan kepada penggugat."
    },
    difficulty: "Sedang"
  },
  {
    id: 101,
    category: "Hukum Acara PHI",
    topicTag: "Pembebasan Biaya Perkara PHI",
    question: "Dalam proses beracara di Pengadilan Hubungan Industrial, pihak-pihak yang berperkara tidak dikenakan biaya perkara termasuk biaya eksekusi yang nilai gugatannya....",
    options: [
      { key: "A", text: "Di bawah Rp50.000.000" },
      { key: "B", text: "Di bawah Rp150.000.000" },
      { key: "C", text: "Di bawah Rp200.000.000" },
      { key: "D", text: "Di bawah Rp300.000.000" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Gugatan PHI di bawah Rp150.000.000 dibebaskan dari seluruh biaya perkara dan eksekusi.",
      legalBasis: "Pasal 58 UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Pasal 58 menegaskan pembebasan biaya bagi nilai gugatan di bawah 150 juta rupiah guna menjamin akses keadilan buruh."
    },
    difficulty: "Mudah"
  },
  {
    id: 102,
    category: "Hukum Acara PHI",
    topicTag: "Batas Waktu Putusan PHI",
    question: "Majelis hakim PHI wajib memberikan putusan penyelesaian sengketa dalam waktu selambat-lambatnya...... terhitung sejak sidang pertama:",
    options: [
      { key: "A", text: "30 hari kalender" },
      { key: "B", text: "50 hari kerja" },
      { key: "C", text: "50 hari kalender" },
      { key: "D", text: "90 hari kerja" }
    ],
    correctAnswer: "B",
    explanation: {
      summary: "Putusan PHI wajib diputus paling lambat 50 hari kerja terhitung sejak sidang pertama.",
      legalBasis: "Pasal 103 UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Asas peradilan cepat PHI membatasi majelis hakim wajib menjatuhkan putusan paling lambat 50 hari kerja sejak sidang pertama."
    },
    difficulty: "Sedang"
  },
  {
    id: 103,
    category: "Hukum Acara PHI",
    topicTag: "Jangka Waktu Perundingan Bipartit",
    question: "Dalam perselisihan hubungan industrial, upaya perundingan bipartit wajib diselesaikan dalam tenggang waktu....",
    options: [
      { key: "A", text: "30 hari kerja terhitung sejak tanggal dimulainya perundingan" },
      { key: "B", text: "30 hari kalender" },
      { key: "C", text: "20 hari kerja" },
      { key: "D", text: "14 hari kerja" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Musyawarah bipartit harus diselesaikan paling lama 30 hari kerja.",
      legalBasis: "Pasal 3 ayat (2) UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Jika dalam tempo 30 hari kerja bipartit gagal atau salah satu pihak menolak, sengketa dapat dicatatkan ke mediator."
    },
    difficulty: "Mudah"
  },
  {
    id: 104,
    category: "Hukum Acara PHI",
    topicTag: "Yurisdiksi Pengadilan PHI",
    question: "Jika upaya mediasi dan konsiliasi tidak berhasil, pihak yang berselisih mengajukan gugatan ke PHI pada Pengadilan Negeri....",
    options: [
      { key: "A", text: "Yang daerah hukumnya meliputi tempat kediaman pekerja" },
      { key: "B", text: "Yang daerah hukumnya meliputi domisili kantor pusat pengusaha" },
      { key: "C", text: "Yang daerah hukumnya meliputi tempat kerja pekerja/buruh" },
      { key: "D", text: "Pengadilan Negeri di mana saja" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Gugatan diajukan ke PN yang membawahi tempat buruh bekerja.",
      legalBasis: "Pasal 81 UU No. 2 Tahun 2004 tentang PPHI.",
      analysis: "Asas tempat kerja pekerja bertujuan memudahkan pembuktian dan kehadiran pekerja dalam persidangan."
    },
    difficulty: "Mudah"
  },
  // --- HUKUM ACARA PERADILAN TATA USAHA NEGARA (PTUN) (105 - 120) ---
  {
    id: 105,
    category: "Hukum Acara PTUN",
    topicTag: "Alat Bukti Sah PTUN",
    question: "Alat bukti yang sah dipergunakan dalam pembuktian perkara sengketa TUN menurut Pasal 100 UU No. 5 Tahun 1986 adalah....",
    options: [
      { key: "A", text: "Surat atau tulisan saja" },
      { key: "B", text: "Keterangan ahli saja" },
      { key: "C", text: "Keterangan saksi dan pengakuan saja" },
      { key: "D", text: "Surat/tulisan, keterangan ahli, keterangan saksi, pengakuan para pihak, dan pengetahuan hakim" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "5 alat bukti PTUN: Surat/tulisan, Keterangan ahli, Keterangan saksi, Pengakuan para pihak, dan Pengetahuan hakim.",
      legalBasis: "Pasal 100 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      analysis: 'Berbeda dengan perdata, PTUN mengakui alat bukti "Pengetahuan Hakim" (wetenschap van de rechter) secara eksplisit dalam undang-undang.'
    },
    difficulty: "Mudah"
  },
  {
    id: 106,
    category: "Hukum Acara PTUN",
    topicTag: "Putusan Tidak Memenuhi Syarat Formil",
    question: "Putusan pengadilan tata usaha negara yang tidak memuat ketentuan formal Pasal 109 UU PTUN berakibat....",
    options: [
      { key: "A", text: "Putusan tidak sah" },
      { key: "B", text: "Putusan batal" },
      { key: "C", text: "Putusan tidak sah dan tidak mempunyai kekuatan hukum" },
      { key: "D", text: "Semua benar" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Putusan PTUN yang melanggar Pasal 109 tidak sah dan tidak memiliki kekuatan hukum.",
      legalBasis: "Pasal 109 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      analysis: 'Pasal 109 mengatur syarat wajib kepala putusan ("Demi Keadilan Berdasarkan Ketuhanan Yang Maha Esa"), identitas para pihak, posita, pertimbangan hukum, dan amar putusan.'
    },
    difficulty: "Sedang"
  },
  {
    id: 107,
    category: "Hukum Acara PTUN",
    topicTag: "Syarat Tertulis KTUN",
    question: "Salah satu kualifikasi Keputusan Tata Usaha Negara (KTUN) adalah bersifat tertulis. Maksud dari syarat tertulis ini berkaitan dengan:",
    options: [
      { key: "A", text: "Persyaratan formalitas administratif semata" },
      { key: "B", text: "Muatan keputusan yang harus ditandatangani menteri" },
      { key: "C", text: "Untuk memudahkan proses pembuktian di muka pengadilan" },
      { key: "D", text: "Bentuk nota dinas rahasia" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Sifat tertulis dimaksudkan agar memudahkan pembuktian adanya tindakan hukum pejabat TUN.",
      legalBasis: "Penjelasan Pasal 1 angka 9 UU No. 51 Tahun 2009.",
      analysis: "Penjelasan UU PTUN menyebutkan istilah tertulis tidak mutlak harus berbentuk surat keputusan formal, melainkan memo, disposisi, atau nota tertulis yang memudahkan pembuktian."
    },
    difficulty: "Sedang"
  },
  {
    id: 108,
    category: "Hukum Acara PTUN",
    topicTag: "Fundamentum Petendi di PTUN",
    question: "Fundamentum Petendi (posita gugatan) dalam kompetensi Peradilan Tata Usaha Negara memiliki pengertian pokok bahwa:",
    options: [
      { key: "A", text: "Pengadilan tidak berwenang mengadili" },
      { key: "B", text: "Gugatan mengenai wanprestasi perjanjian sewa" },
      { key: "C", text: "Wewenang berdasarkan pokok sengketa di bidang hukum perdata" },
      { key: "D", text: "Pokok sengketa terletak di lapangan Hukum Publik" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Pokok sengketa gugatan PTUN wajib berada di ranah hukum publik administrasi pemerintahan.",
      legalBasis: "Pasal 47 UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Pengadilan TUN hanya bertugas memeriksa, memutus, dan menyelesaikan sengketa Tata Usaha Negara yang bersumber dari hubungan hukum publik."
    },
    difficulty: "Sedang"
  },
  {
    id: 109,
    category: "Hukum Acara PTUN",
    topicTag: "Tujuan Tenggang Waktu 90 Hari",
    question: "Berdasarkan Pasal 55 UU No. 5 Tahun 1986, tenggang waktu mengajukan gugatan ke PTUN (90 hari) merupakan bentuk perlindungan terhadap....",
    options: [
      { key: "A", text: "Kepentingan tergugat sebagai pejabat TUN" },
      { key: "B", text: "Kepentingan penggugat agar tidak lalai mengajukan gugatan" },
      { key: "C", text: "Kepentingan umum yang diembannya dalam jabatan TUN" },
      { key: "D", text: "Jawaban A dan C adalah benar" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Batas 90 hari melindungi kepastian hukum pejabat TUN dan kepentingan umum penyelenggaraan negara.",
      legalBasis: "Pasal 55 UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Tenggang waktu 90 hari mencegah ketidakpastian hukum yang berlarut-larut dalam pelaksanaan kebijakan dan keputusan administrasi negara."
    },
    difficulty: "Sedang"
  },
  {
    id: 110,
    category: "Hukum Acara PTUN",
    topicTag: "Perkembangan Regulasi PTUN",
    question: "Peradilan Tata Usaha Negara diatur dalam rangkaian undang-undang....",
    options: [
      { key: "A", text: "UU No. 9 Tahun 2004" },
      { key: "B", text: "UU No. 5 Tahun 1986" },
      { key: "C", text: "UU No. 4 Tahun 2004" },
      { key: "D", text: "Jawaban A dan B benar (serta UU No. 51 Tahun 2009)" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Regulasi PTUN dimulai dari UU 5/1986, diubah dengan UU 9/2004 dan UU 51/2009.",
      legalBasis: "Pasal 1 angka 1 jo. Pasal 144 Undang-Undang No. 5 Tahun 1986 jo. UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009 tentang Peradilan Tata Usaha Negara.",
      analysis: "Ketiga UU tersebut merupakan satu kesatuan kronologis yang mengatur keberadaan dan hukum acara PTUN di Indonesia."
    },
    difficulty: "Mudah"
  },
  {
    id: 111,
    category: "Hukum Acara PTUN",
    topicTag: "Tenggang Waktu Gugatan PTUN",
    question: "Berapakah batas waktu pengajuan gugatan Tata Usaha Negara, terhitung sejak diterimanya Keputusan Tata Usaha Negara....",
    options: [
      { key: "A", text: "7 hari" },
      { key: "B", text: "14 hari" },
      { key: "C", text: "60 hari" },
      { key: "D", text: "90 hari" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Tenggang waktu gugatan PTUN adalah 90 hari.",
      legalBasis: "Pasal 55 UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Gugatan dapat diajukan hanya dalam tenggang waktu sembilan puluh hari sejak diterimanya atau diumumkannya KTUN."
    },
    difficulty: "Mudah"
  },
  {
    id: 112,
    category: "Hukum Acara PTUN",
    topicTag: "Pemeriksaan Persiapan Hakim PTUN",
    question: "Tujuan dilaksanakannya pemeriksaan persiapan (onderzoek) menurut UU No. 5 Tahun 1986 adalah....",
    options: [
      { key: "A", text: "Pokok gugatan tidak termasuk wewenang pengadilan" },
      { key: "B", text: "Gugatan tidak didasarkan alasan yang layak" },
      { key: "C", text: "Menghukum pejabat membayar denda" },
      { key: "D", text: "Hakim wajib memberi nasihat kepada penggugat untuk memperbaiki dan melengkapi gugatannya" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Dalam pemeriksaan persiapan hakim aktif memberi nasihat perbaikan gugatan kepada Penggugat.",
      legalBasis: "Pasal 63 UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Prinsip dominus litis hakim PTUN tampak nyata di pemeriksaan persiapan, di mana hakim wajib memberi nasihat perbaikan gugatan dalam jangka waktu 30 hari."
    },
    difficulty: "Sedang"
  },
  {
    id: 113,
    category: "Hukum Acara PTUN",
    topicTag: "Alasan Gugatan PTUN",
    question: "Menurut Pasal 53 UU PTUN, alasan-alasan yang dapat digunakan dalam mengajukan gugatan di PTUN adalah....",
    options: [
      { key: "A", text: "KTUN yang digugat bertentangan dengan peraturan perundang-undangan yang berlaku" },
      { key: "B", text: "KTUN yang digugat bertentangan dengan Asas-Asas Umum Pemerintahan yang Baik (AUPB)" },
      { key: "C", text: "Semua benar (A dan B)" },
      { key: "D", text: "Semua salah" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Alasan gugatan PTUN: bertentangan dengan UU atau bertentangan dengan AUPB.",
      legalBasis: "Pasal 53 ayat (2) UU No. 9 Tahun 2004.",
      analysis: "Pasca amandemen UU No. 9 Tahun 2004, pelanggaran terhadap Asas-Asas Umum Pemerintahan yang Baik (AUPB) diakui secara tegas sebagai alasan pengujian KTUN."
    },
    difficulty: "Mudah"
  },
  {
    id: 114,
    category: "Hukum Acara PTUN",
    topicTag: "Pemeriksaan Acara Cepat",
    question: "Pemeriksaan sengketa tata usaha negara dengan acara cepat diatur dalam....",
    options: [
      { key: "A", text: "Pasal 98 UU No. 5 Tahun 1986" },
      { key: "B", text: "Pasal 62 UU No. 5 Tahun 1986" },
      { key: "C", text: "Pasal 99 UU No. 5 Tahun 1986" },
      { key: "D", text: "Pasal 98 & 99 UU No. 5 Tahun 1986" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Pemeriksaan acara cepat diatur dalam Pasal 98 dan Pasal 99 UU PTUN.",
      legalBasis: "Pasal 98 dan Pasal 99 UU No. 5 Tahun 1986.",
      analysis: "Apabila terdapat kepentingan penggugat yang sangat mendesak, penggugat dapat memohon pemeriksaan acara cepat dengan hakim tunggal dalam tempo pemeriksaan 30 hari."
    },
    difficulty: "Sedang"
  },
  {
    id: 115,
    category: "Hukum Acara PTUN",
    topicTag: "Objek Sengketa PTUN",
    question: "Dari keputusan-keputusan di bawah ini, manakah yang sah merupakan objek gugatan sengketa Tata Usaha Negara....",
    options: [
      { key: "A", text: "Keputusan pemecatan notaris oleh Menteri Kehakiman atas usul PN" },
      { key: "B", text: "Surat perintah penahanan yang dikeluarkan oleh Penuntut Umum" },
      { key: "C", text: "Keputusan Kepala Kantor Pertanahan yang menerbitkan sertifikat hak atas tanah berdasarkan permohonan pemohon" },
      { key: "D", text: "Sertifikat tanah yang diterbitkan murni berdasarkan amar eksekusi pengadilan perdata yang inkracht" }
    ],
    correctAnswer: "C",
    explanation: {
      summary: "Penerbitan sertifikat tanah adalah KTUN konkret, individual, final yang menimbulkan akibat hukum bagi perdata.",
      legalBasis: "Pasal 1 angka 9 UU No. 51 Tahun 2009 jo. Pasal 53 UU PTUN.",
      analysis: "Tindakan penahanan penuntut umum (opsi B) adalah wewenang KUHAP (objek praperadilan), dan pelaksanaan putusan perdata (opsi D) dikecualikan dari sengketa TUN."
    },
    difficulty: "Sedang"
  },
  {
    id: 116,
    category: "Hukum Acara PTUN",
    topicTag: "Fiktif Negatif",
    question: "Jika peraturan perundang-undangan tidak menentukan jangka waktu, maka setelah lewat waktu ...... sejak diterimanya permohonan, badan atau pejabat TUN yang bergeming/diam dianggap telah mengeluarkan keputusan penolakan (fiktif negatif menurut UU No. 5 Tahun 1986).",
    options: [
      { key: "A", text: "4 bulan" },
      { key: "B", text: "3 bulan" },
      { key: "C", text: "60 hari" },
      { key: "D", text: "30 hari" }
    ],
    correctAnswer: "A",
    explanation: {
      summary: "Dalam Pasal 3 ayat (2) UU No. 5 Tahun 1986, batas waktu fiktif negatif adalah 4 bulan.",
      legalBasis: "Pasal 3 ayat (2) UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Setelah lewat waktu 4 bulan tanpa keputusan dari pejabat TUN, permohonan tersebut secara hukum dianggap ditolak dan dapat langsung digugat ke PTUN."
    },
    difficulty: "Sedang"
  },
  {
    id: 117,
    category: "Hukum Acara PTUN",
    topicTag: "Komponen Biaya Perkara",
    question: "Yang TIDAK diperhitungkan dalam perkiraan panjar biaya perkara oleh Undang-Undang Peradilan Tata Usaha Negara adalah....",
    options: [
      { key: "A", text: "Biaya saksi" },
      { key: "B", text: "Biaya ahli" },
      { key: "C", text: "Biaya alih bahasa/penerjemah" },
      { key: "D", text: "Biaya jasa honorarium advokat" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Honorarium advokat adalah beban perdata privat para pihak dan bukan bagian dari panjar biaya perkara resmi.",
      legalBasis: "Pasal 59 UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Biaya perkara pengadilan hanya mencakup biaya kepaniteraan, saksi, ahli, alih bahasa, dan materai."
    },
    difficulty: "Mudah"
  },
  {
    id: 118,
    category: "Hukum Acara PTUN",
    topicTag: "Tenggang Waktu Menggugat Pejabat TUN",
    question: "Tenggang waktu pengajuan gugatan dalam sengketa TUN adalah ....... hari, terhitung sejak saat diterimanya Keputusan Badan/Pejabat TUN.",
    options: [
      { key: "A", text: "14 hari" },
      { key: "B", text: "30 hari" },
      { key: "C", text: "60 hari" },
      { key: "D", text: "90 hari" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Batas daluwarsa pengajuan gugatan sengketa TUN adalah 90 hari.",
      legalBasis: "Pasal 55 UU No. 5 Tahun 1986 tentang PTUN.",
      analysis: "Tenggang waktu 90 hari adalah daluwarsa mutlak (vervaltermijn) yang diperiksa ex-officio oleh majelis hakim."
    },
    difficulty: "Mudah"
  },
  {
    id: 119,
    category: "Hukum Acara PTUN",
    topicTag: "Unsur Lengkap KTUN",
    question: "Apakah definisi lengkap Keputusan Tata Usaha Negara (KTUN) menurut Pasal 1 angka 9 UU No. 51 Tahun 2009....",
    options: [
      { key: "A", text: "Penetapan tertulis yang dikeluarkan oleh badan/pejabat TUN" },
      { key: "B", text: "Penetapan tertulis yang dikeluarkan oleh badan/pejabat TUN dan menimbulkan akibat hukum bagi seseorang" },
      { key: "C", text: "Penetapan tertulis yang dikeluarkan badan/pejabat TUN yang bersifat final, individual dan konkret" },
      { key: "D", text: "Penetapan tertulis yang dikeluarkan badan/pejabat TUN berdasarkan perundang-undangan yang berlaku, bersifat konkret, individual, final, serta menimbulkan akibat hukum bagi seseorang atau badan hukum perdata" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Definisi lengkap KTUN memuat 6 unsur kumulatif opsi D.",
      legalBasis: "Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang Perubahan Kedua UU PTUN.",
      analysis: "Unsur kumulatif: 1. Penetapan tertulis, 2. Dikeluarkan Badan/Pejabat TUN, 3. Tindakan hukum TUN, 4. Berdasarkan perundang-undangan, 5. Konkret, individual, final, 6. Menimbulkan akibat hukum."
    },
    difficulty: "Mudah"
  },
  {
    id: 120,
    category: "Hukum Acara PTUN",
    topicTag: "5 Alat Bukti Sah PTUN",
    question: "Alat bukti yang sah dalam persidangan Peradilan Tata Usaha Negara yaitu....",
    options: [
      { key: "A", text: "Surat/tulisan, saksi, pengakuan para pihak dan pengetahuan hakim" },
      { key: "B", text: "Surat/tulisan, ahli, saksi dan pengakuan para pihak" },
      { key: "C", text: "Surat/tulisan, saksi, ahli, keterangan para pihak, dan sumpah" },
      { key: "D", text: "Surat/tulisan, keterangan ahli, keterangan saksi, pengakuan para pihak, dan pengetahuan hakim" }
    ],
    correctAnswer: "D",
    explanation: {
      summary: "Alat bukti PTUN secara lengkap adalah Surat/tulisan, Ahli, Saksi, Pengakuan para pihak, dan Pengetahuan hakim.",
      legalBasis: "Pasal 100 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      analysis: "Kelima alat bukti tersebut diatur limitatif dalam Pasal 100 UU PTUN dan digunakan majelis hakim untuk memutus sengketa pembatalan KTUN."
    },
    difficulty: "Mudah"
  }
];
function generateFull500QuestionBank() {
  const normalizeKey = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const base = [
    ...OFFICIAL_TRYOUT_QUESTIONS,
    ...ADDITIONAL_UPA_BANK_PART1,
    ...AUTHENTIC_PERADI_BANK_PART2,
    ...CATEGORY_EXPANSION_BANK,
    ...TRYOUT_2025_BANK,
    ...TOAZ_PERADI_BANK
  ];
  const seen = /* @__PURE__ */ new Set();
  const uniqueBase = [];
  for (const q of base) {
    const k = normalizeKey(q.question);
    if (!seen.has(k)) {
      seen.add(k);
      uniqueBase.push(q);
    }
  }
  const filteredAdvanced = [];
  for (const q of ADVANCED_UPA_BANK) {
    const k = normalizeKey(q.question);
    if (!seen.has(k)) {
      seen.add(k);
      filteredAdvanced.push(q);
    }
  }
  const combined = [...uniqueBase, ...filteredAdvanced];
  return combined.map((q, index) => ({
    ...q,
    id: index + 1
  }));
}
var MASTER_UPA_DATABASE = generateFull500QuestionBank();

// server.ts
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var lockedRoomStore = /* @__PURE__ */ new Map();
function createServerRNG(seedStr) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 16777619);
  }
  return function() {
    h += h << 13;
    h ^= h >>> 7;
    h += h << 3;
    h ^= h >>> 17;
    return ((h += h << 5) >>> 0) / 4294967296;
  };
}
function lockRoomQuestions(roomId, questionCount, categoryFilter) {
  const existing = lockedRoomStore.get(roomId);
  if (existing) {
    return existing.questions;
  }
  const rng = createServerRNG(roomId + "-upa-room-lock-2026");
  const pool = !categoryFilter || categoryFilter === "Semua Materi" ? [...MASTER_UPA_DATABASE] : MASTER_UPA_DATABASE.filter((q) => q.category === categoryFilter);
  const available = pool.length > 0 ? pool : [...MASTER_UPA_DATABASE];
  const targetCount = Math.min(questionCount || 20, available.length);
  const shuffledPool = [...available];
  for (let i = shuffledPool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffledPool[i], shuffledPool[j]] = [shuffledPool[j], shuffledPool[i]];
  }
  const selected = shuffledPool.slice(0, targetCount);
  const optionKeys = ["A", "B", "C", "D"];
  const fixedQuestions = selected.map((q, idx) => {
    const originalCorrectOption = q.options.find((o) => o.key === q.correctAnswer);
    const correctText = originalCorrectOption ? originalCorrectOption.text : q.options[0]?.text;
    const shuffledOptions = [...q.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    let newCorrectKey = "A";
    const finalOptions = shuffledOptions.map((opt, optIdx) => {
      const key = optionKeys[optIdx] || "A";
      if (opt.text === correctText) {
        newCorrectKey = key;
      }
      return {
        key,
        text: opt.text
      };
    });
    return {
      ...q,
      options: finalOptions,
      correctAnswer: newCorrectKey
    };
  });
  lockedRoomStore.set(roomId, {
    roomId,
    createdAt: Date.now(),
    questionIds: fixedQuestions.map((q) => q.id),
    questions: fixedQuestions
  });
  return fixedQuestions;
}
async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3e3;
  const isDev = process.env.NODE_ENV !== "production";
  app.use(express.json());
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", time: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/rooms/:roomId/lock-questions", (req, res) => {
    const { roomId } = req.params;
    const { questionCount = 20, categoryFilter = "Semua Materi" } = req.body;
    if (!roomId) {
      return res.status(400).json({ error: "Room ID wajib disertakan" });
    }
    const questions = lockRoomQuestions(roomId, Number(questionCount), String(categoryFilter));
    const questionIds = questions.map((q) => q.id);
    res.json({
      success: true,
      roomId,
      totalQuestions: questions.length,
      questionIds,
      questions
    });
  });
  app.get("/api/rooms/:roomId/questions", (req, res) => {
    const { roomId } = req.params;
    const session = lockedRoomStore.get(roomId);
    if (!session) {
      return res.status(404).json({
        success: false,
        error: `Room ${roomId} belum mengunci paket soal. Host belum memulai ujian.`
      });
    }
    res.json({
      success: true,
      roomId,
      totalQuestions: session.questions.length,
      questionIds: session.questionIds,
      questions: session.questions
    });
  });
  setInterval(() => {
    const now = Date.now();
    for (const [id, session] of lockedRoomStore.entries()) {
      if (now - session.createdAt > 4 * 60 * 60 * 1e3) {
        lockedRoomStore.delete(id);
      }
    }
  }, 60 * 60 * 1e3);
  const httpServer = http.createServer(app);
  if (isDev) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        host: "0.0.0.0",
        allowedHosts: true,
        hmr: {
          server: httpServer
        }
      },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }
  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`AdvokatQuiz Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer().catch((err) => {
  console.error("Failed to start AdvokatQuiz server:", err);
  process.exit(1);
});
export {
  lockRoomQuestions
};
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
