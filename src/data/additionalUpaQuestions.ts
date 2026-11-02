/**
 * Additional Comprehensive Question Pool for Master 500 UPA Bank
 * Unique substantive legal questions with concrete statutes and analytical grounds.
 */
import { UPAQuestion } from '../types/quiz';

export const ADDITIONAL_UPA_BANK_PART1: UPAQuestion[] = [
  // --- HUKUM ACARA PERDATA (121 - 170) ---
  {
    id: 121,
    category: 'Hukum Acara Perdata',
    topicTag: 'Gugatan Sederhana (Small Claim Court)',
    question: 'Berdasarkan PERMA No. 2 Tahun 2015 jo. PERMA No. 4 Tahun 2019 tentang Tata Cara Penyelesaian Gugatan Sederhana, batas maksimal nilai materiil gugatan yang dapat diperiksa adalah...',
    options: [
      { key: 'A', text: 'Paling banyak Rp200.000.000 (dua ratus juta rupiah)' },
      { key: 'B', text: 'Paling banyak Rp500.000.000 (lima ratus juta rupiah)' },
      { key: 'C', text: 'Paling banyak Rp1.000.000.000 (satu miliar rupiah)' },
      { key: 'D', text: 'Tidak ada batasan nilai materiil asalkan bukan sengketa tanah' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Nilai gugatan materiil dalam Gugatan Sederhana dinaikkan menjadi maksimal Rp500.000.000 oleh PERMA 4/2019.',
      legalBasis: 'Pasal 1 angka 1 PERMA No. 4 Tahun 2019 tentang Perubahan atas PERMA No. 2 Tahun 2015.',
      analysis: 'PERMA 4/2019 menaikkan batas nilai tuntutan materiil gugatan sederhana dari sebelumnya maksimal Rp200 juta menjadi maksimal Rp500 juta, dengan penyelesaian paling lama 25 hari kerja oleh hakim tunggal.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 122,
    category: 'Hukum Acara Perdata',
    topicTag: 'Sita Revindikatoir (Revindicatoir Beslag)',
    question: 'Tuan Hendra meminta penyitaan terhadap sebuah mobil antik miliknya yang saat ini dikuasai oleh pihak ketiga tanpa hak. Permohonan sita yang tepat diajukan oleh Hendra adalah...',
    options: [
      { key: 'A', text: 'Sita Konservatoir (Conservatoir Beslag)' },
      { key: 'B', text: 'Sita Revindikatoir (Revindicatoir Beslag)' },
      { key: 'C', text: 'Sita Eksekusi (Executoir Beslag)' },
      { key: 'D', text: 'Sita Marital (Maritaal Beslag)' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Sita Revindikatoir diajukan oleh pemilik barang bergerak untuk menuntut kembali barang miliknya yang dikuasai orang lain.',
      legalBasis: 'Pasal 226 HIR jo. Pasal 714 Rv.',
      analysis: 'Pasal 226 HIR mengatur bahwa pemilik barang bergerak berhak memohonkan sita revindikatoir terhadap barang kepunyaannya yang berada di tangan penguasaan pihak ketiga tanpa hak agar barang tersebut tidak dipindahtangankan.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 123,
    category: 'Hukum Acara Perdata',
    topicTag: 'Eksepsi Plurium Litis Consortium',
    question: 'Tergugat mendalilkan bahwa gugatan Penggugat kurang pihak karena tidak mengikutsertakan salah satu ahli waris yang sah dalam sengketa pembagian waris. Eksepsi yang diajukan Tergugat dinamakan...',
    options: [
      { key: 'A', text: 'Eksepsi Obscuur Libel' },
      { key: 'B', text: 'Eksepsi Plurium Litis Consortium' },
      { key: 'C', text: 'Eksepsi Error in Persona' },
      { key: 'D', text: 'Eksepsi Ne Bis In Idem' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Eksepsi plurium litis consortium menyatakan bahwa para pihak yang ditarik dalam gugatan tidak lengkap/kurang pihak.',
      legalBasis: 'Pasal 125 ayat (2) jo. Pasal 136 HIR / Pasal 149 ayat (2) jo. Pasal 162 RBg jo. Yurisprudensi MA RI No. 582 K/Sip/1973.',
      analysis: 'Plurium litis consortium adalah eksepsi yang diajukan pihak tergugat dengan alasan orang-orang yang ditarik sebagai pihak dalam perkara tidak lengkap padahal kepentingannya terikat secara hukum, sehingga gugatan harus dinyatakan tidak dapat diterima (NO).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 124,
    category: 'Hukum Acara Perdata',
    topicTag: 'Kekuatan Pembuktian Akta Otentik',
    question: 'Berdasarkan Pasal 1870 KUHPerdata, suatu akta otentik memberikan di antara para pihak beserta ahli warisnya...',
    options: [
      { key: 'A', text: 'Bukti permulaan tertulis yang membutuhkan tambahan saksi' },
      { key: 'B', text: 'Bukti bebas yang diserahkan penilaiannya kepada keyakinan hakim' },
      { key: 'C', text: 'Suatu bukti yang sempurna dan mengikat (volledig en bindend bewijskracht)' },
      { key: 'D', text: 'Bukti petunjuk yang setara dengan persangkaan hakim' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Akta otentik memiliki nilai pembuktian sempurna dan mengikat bagi para pihak.',
      legalBasis: 'Pasal 1870 KUHPerdata jo. Pasal 165 HIR.',
      analysis: 'Akta otentik yang dibuat oleh atau di hadapan pejabat umum berwenang (seperti Notaris/PPAT) memiliki 3 kekuatan: pembuktian lahiriah, formal, dan materiil yang bersifat sempurna dan mengikat, kecuali lawan dapat membuktikan kepalsuannya.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 125,
    category: 'Hukum Acara Perdata',
    topicTag: 'Dwangsom (Uang Paksa)',
    question: 'Hukuman pembayaran dwangsom (uang paksa) dalam putusan perdata TIDAK DAPAT dijatuhkan terhadap tuntutan amar...',
    options: [
      { key: 'A', text: 'Kewajiban untuk mengosongkan rumah' },
      { key: 'B', text: 'Kewajiban untuk membongkar bangunan tembok' },
      { key: 'C', text: 'Kewajiban pembayaran sejumlah uang tertentu' },
      { key: 'D', text: 'Kewajiban menyerahkan surat sertifikat asli' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Dwangsom tidak dapat dijatuhkan pada penghukuman pembayaran sejumlah uang tertentu.',
      legalBasis: 'Pasal 606a Rv jo. Yurisprudensi Mahkamah Agung RI.',
      analysis: 'Pasal 606a Rv secara tegas mengatur bahwa dwangsom (uang paksa) hanya dapat dituntut terhadap perbuatan untuk melakukan atau tidak melakukan sesuatu, dan dilarang dikenakan pada amar kewajiban membayar sejumlah uang tunai karena terhadap uang berlaku bunga moratoir.'
    },
    difficulty: 'Sulit'
  },
  {
    id: 126,
    category: 'Hukum Acara Perdata',
    topicTag: 'Sumpah Decisoir (Sumpah Pemutus)',
    question: 'Sumpah yang dibebankan oleh salah satu pihak yang berperkara kepada pihak lawan untuk memutuskan sengketa ketika tidak ada alat bukti lain sama sekali disebut...',
    options: [
      { key: 'A', text: 'Sumpah Suppletoir (Pelengkap)' },
      { key: 'B', text: 'Sumpah Decisoir (Pemutus)' },
      { key: 'C', text: 'Sumpah Aestimatoir (Penaksir)' },
      { key: 'D', text: 'Sumpah Jabatan' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Sumpah Decisoir adalah sumpah pemutus yang diperintahkan satu pihak ke pihak lain untuk mengakhiri perkara.',
      legalBasis: 'Pasal 1930 KUHPerdata jo. Pasal 156 HIR.',
      analysis: 'Sumpah Decisoir bersifat tuntas (decisive). Pihak yang diminta bersumpah dapat mengembalikan sumpah tersebut kepada pihak lawan. Siapa yang bersumpah menang perkaranya, dan pihak yang menolak bersumpah kalah perkaranya.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 127,
    category: 'Hukum Acara Perdata',
    topicTag: 'Akibat Hukum Mediasi Tidak Dilaksanakan',
    question: 'Berdasarkan PERMA No. 1 Tahun 2016, apabila perkara perdata tingkat pertama diputus tanpa menempuh prosedur mediasi yang diwajibkan, maka putusan tersebut...',
    options: [
      { key: 'A', text: 'Tetap sah dan berkekuatan hukum tetap' },
      { key: 'B', text: 'Batal demi hukum (null and void) dan pengadilan tingkat banding wajib memerintahkan mediasi ulang' },
      { key: 'C', text: 'Dikenakan denda administratif kepada majelis hakim' },
      { key: 'D', text: 'Hanya dapat diajukan kasasi langsung ke Mahkamah Agung' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Tidak dilaksanakannya mediasi wajib mengakibatkan putusan perdata batal demi hukum.',
      legalBasis: 'Pasal 3 ayat (1) dan (2) PERMA No. 1 Tahun 2016.',
      analysis: 'PERMA 1/2016 menegaskan setiap hakim pemeriksa perkara perdata wajib memfasilitasi mediasi. Pelanggaran terhadap kewajiban mediasi mengakibatkan putusan batal demi hukum, dan Pengadilan Tinggi/MA memerintahkan PN melakukan mediasi.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 128,
    category: 'Hukum Acara Perdata',
    topicTag: 'Ne Bis In Idem',
    question: 'Asas Ne Bis In Idem dalam perkara perdata sebagaimana diatur dalam Pasal 1917 KUHPerdata terpenuhi apabila...',
    options: [
      { key: 'A', text: 'Subjek para pihak, objek gugatan, dan dasar tuntutan (kausa) perkaranya adalah sama persis dengan perkara yang sudah berkekuatan hukum tetap' },
      { key: 'B', text: 'Hanya objek sengketanya saja yang sama meskipun para pihaknya berbeda' },
      { key: 'C', text: 'Gugatan diajukan di pengadilan negeri yang sama dalam jangka waktu kurang dari 1 tahun' },
      { key: 'D', text: 'Salah satu pihak sudah pernah dipidana atas perbuatan yang bersangkutan' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Syarat Ne Bis In Idem: kesamaan subjek para pihak, kesamaan objek perkara, dan kesamaan dasar gugatan.',
      legalBasis: 'Pasal 1917 KUHPerdata jo. Yurisprudensi MA RI.',
      analysis: 'Pasal 1917 KUHPerdata mensyaratkan 3 unsur kumulatif agar suatu perkara dinyatakan ne bis in idem: barang yang dituntut sama, tuntutan didasarkan pada alasan yang sama, serta diajukan oleh dan terhadap pihak-pihak yang sama dalam hubungan yang sama.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 129,
    category: 'Hukum Acara Perdata',
    topicTag: 'Saksi Testimonium de Auditu',
    question: 'Bagaimanakah kedudukan keterangan saksi de auditu (mendengar dari cerita orang lain) dalam pembuktian hukum acara perdata menurut yurisprudensi tetap Mahkamah Agung?',
    options: [
      { key: 'A', text: 'Sama sekali haram digunakan dan wajib dicabut dari berkas perkara' },
      { key: 'B', text: 'Dapat digunakan sebagai alat bukti persangkaan hakim apabila bersesuaian dengan alat bukti sah lainnya' },
      { key: 'C', text: 'Otomatis menjadi bukti sempurna yang mengikat hakim' },
      { key: 'D', text: 'Hanya boleh dipakai apabila disetujui secara tertulis oleh Tergugat' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Kesaksian de auditu dapat digunakan sebagai dasar persangkaan hakim jika berpadu dengan bukti lain.',
      legalBasis: 'Yurisprudensi MA RI No. 308 K/Sip/1959 jo. Pasal 171 HIR.',
      analysis: 'Meskipun Pasal 171 HIR menentukan saksi harus menerangkan apa yang ia lihat dan alami sendiri, yurisprudensi tetap MA menyatakan keterangan saksi de auditu tidak dilarang mutlak, melainkan dapat dipakai menyusun persangkaan yang menguatkan alat bukti lain.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 130,
    category: 'Hukum Acara Perdata',
    topicTag: 'Penetapan Aanmaning',
    question: 'Dalam prosedur eksekusi putusan perdata berkekuatan hukum tetap, Ketua Pengadilan Negeri memanggil pihak Tergugat untuk diberikan peringatan (aanmaning). Jangka waktu pemenuhan isi putusan yang diberikan dalam aanmaning adalah...',
    options: [
      { key: 'A', text: 'Paling lama 3 hari kalender' },
      { key: 'B', text: 'Paling lama 8 hari terhitung sejak sidang peringatan dilaksanakan' },
      { key: 'C', text: 'Paling lama 14 hari kerja' },
      { key: 'D', text: 'Paling lama 30 hari kalender' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Tenggang waktu aanmaning adalah 8 hari sejak sidang peringatan dilakukan.',
      legalBasis: 'Pasal 196 HIR jo. Pasal 207 RBg.',
      analysis: 'Pasal 196 HIR menetapkan bahwa jika pihak yang kalah tidak mematuhi putusan secara sukarela, Ketua PN memanggilnya dan memberikan tegoran/peringatan agar memenuhi kewajiban selambat-lambatnya dalam waktu 8 hari.'
    },
    difficulty: 'Mudah'
  },

  // --- HUKUM ACARA PIDANA (131 - 180) ---
  {
    id: 131,
    category: 'Hukum Acara Pidana',
    topicTag: 'Pemberitahuan Dimulainya Penyidikan (SPDP)',
    question: 'Berdasarkan Putusan Mahkamah Konstitusi No. 130/PUU-XIII/2015, penyidik WAJIB menyampaikan Surat Pemberitahuan Dimulainya Penyidikan (SPDP) kepada Penuntut Umum, Terlapor, dan Korban paling lambat...',
    options: [
      { key: 'A', text: '1 x 24 jam setelah SPDP diterbitkan' },
      { key: 'B', text: '7 (tujuh) hari setelah dikeluarkannya Surat Perintah Penyidikan' },
      { key: 'C', text: '14 hari kerja setelah gelar perkara' },
      { key: 'D', text: '30 hari sebelum pelimpahan berkas tahap I' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'SPDP wajib disampaikan ke Penuntut Umum, Terlapor, dan Korban maksimal 7 hari setelah Sprindik terbit.',
      legalBasis: 'Putusan Mahkamah Konstitusi No. 130/PUU-XIII/2015 jo. Pasal 109 ayat (1) KUHAP.',
      analysis: 'MK memutuskan bahwa Pasal 109 ayat (1) KUHAP inkonstitusional bersyarat jika tidak dimaknai penyidik wajib memberitahukan dan menyerahkan SPDP kepada penuntut umum, terlapor, dan korban paling lambat 7 hari demi due process of law.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 132,
    category: 'Hukum Acara Pidana',
    topicTag: 'Jangka Waktu Penangkapan',
    question: 'Berdasarkan Pasal 19 ayat (1) KUHAP, perintah penangkapan terhadap seseorang yang diduga keras melakukan tindak pidana berlaku paling lama...',
    options: [
      { key: 'A', text: '1 (satu) hari atau 1 x 24 jam' },
      { key: 'B', text: '2 x 24 jam' },
      { key: 'C', text: '3 x 24 jam' },
      { key: 'D', text: '7 x 24 jam' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Perintah penangkapan berlaku paling lama 1 hari (1 x 24 jam).',
      legalBasis: 'Pasal 19 ayat (1) KUHAP.',
      analysis: 'Pasal 19 ayat (1) KUHAP menetapkan secara tegas: Penangkapan sebagaimana dimaksud dalam Pasal 17, dapat dilakukan untuk paling lama satu hari. Setelah lewat 24 jam, penyidik wajib menentukan apakah tersangka ditahan atau dilepaskan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 133,
    category: 'Hukum Acara Pidana',
    topicTag: 'Penahanan Rutan Tingkat Penyidikan',
    question: 'Jangka waktu penahanan yang berwenang dikeluarkan oleh Penyidik untuk kepentingan penyidikan adalah paling lama 20 hari, dan dapat diperpanjang oleh...',
    options: [
      { key: 'A', text: 'Kapolres setempat paling lama 20 hari' },
      { key: 'B', text: 'Penuntut Umum yang berwenang paling lama 40 hari' },
      { key: 'C', text: 'Ketua Pengadilan Negeri paling lama 30 hari' },
      { key: 'D', text: 'Menteri Hukum dan HAM paling lama 60 hari' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Perpanjangan penahanan penyidikan diberikan oleh Penuntut Umum paling lama 40 hari.',
      legalBasis: 'Pasal 24 ayat (1) dan (2) KUHAP.',
      analysis: 'Pasal 24 KUHAP menentukan penahanan oleh penyidik berlaku paling lama 20 hari. Jika pemeriksaan belum selesai, dapat diperpanjang oleh penuntut umum yang berwenang untuk paling lama 40 hari (total 60 hari).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 134,
    category: 'Hukum Acara Pidana',
    topicTag: 'Gugurnya Praperadilan',
    question: 'Berdasarkan Pasal 82 ayat (1) huruf d KUHAP jo. SEMA No. 5 Tahun 2021, permohonan praperadilan dinyatakan gugur apabila...',
    options: [
      { key: 'A', text: 'Berkas perkara telah dilimpahkan ke kejaksaan (Tahap II)' },
      { key: 'B', text: 'Perkara pokok pidana telah dilimpahkan ke Pengadilan Negeri dan sidang pertama pokok perkara telah resmi dibuka' },
      { key: 'C', text: 'Penyidik menerbitkan SP3' },
      { key: 'D', text: 'Pemohon praperadilan jatuh sakit saat sidang' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Praperadilan gugur saat sidang pertama pokok perkara telah dimulai dan dibuka oleh majelis hakim.',
      legalBasis: 'Pasal 82 ayat (1) huruf d KUHAP jo. Putusan MK No. 102/PUU-XIII/2015 jo. SEMA No. 5 Tahun 2021.',
      analysis: 'SEMA 5/2021 menegaskan bahwa saat sidang pertama perkara pokok telah dibuka untuk umum dan terdakwa dihadapkan ke muka sidang, maka perkara praperadilan serta merta gugur demi hukum.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 135,
    category: 'Hukum Acara Pidana',
    topicTag: 'Batas Minimum Pembuktian Pidana',
    question: 'Sistem pembuktian yang dianut oleh KUHAP dalam Pasal 183 adalah Negatief Wettelijk Bewijsstelsel, yang berarti...',
    options: [
      { key: 'A', text: 'Hakim memutus semata-mata atas dasar keyakinan batinnya tanpa terikat alat bukti' },
      { key: 'B', text: 'Hakim terikat secara mutlak pada alat bukti undang-undang meskipun batinnya tidak yakin' },
      { key: 'C', text: 'Hakim tidak boleh menjatuhkan pidana kecuali dengan sekurang-kurangnya 2 alat bukti yang sah dan ia memperoleh keyakinan bahwa tindak pidana benar terjadi dan terdakwalah yang bersalah' },
      { key: 'D', text: 'Cukup dengan pengakuan terdakwa saja tanpa memerlukan saksi' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Asas pembuktian negatif menurut undang-undang: minimum 2 alat bukti sah + keyakinan hakim.',
      legalBasis: 'Pasal 183 KUHAP.',
      analysis: 'Pasal 183 KUHAP mengatur: Hakim tidak boleh menjatuhkan pidana kepada seorang kecuali apabila dengan sekurang-kurangnya dua alat bukti yang sah ia memperoleh keyakinan bahwa suatu tindak pidana benar-benar terjadi dan bahwa terdakwalah yang bersalah melakukannya.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 136,
    category: 'Hukum Acara Pidana',
    topicTag: 'Syarat Memori Kasasi Pidana',
    question: 'Terdakwa mengajukan permohonan kasasi atas vonis Pengadilan Tinggi. Dalam waktu berapakah pemohon kasasi wajib menyerahkan Memori Kasasi kepada panitera?',
    options: [
      { key: 'A', text: 'Dalam tenggang waktu 7 hari sejak permohonan kasasi didaftarkan' },
      { key: 'B', text: 'Dalam tenggang waktu 14 hari sejak permohonan kasasi diajukan' },
      { key: 'C', text: 'Dapat diserahkan kapan saja sebelum berkas dikirim ke Mahkamah Agung' },
      { key: 'D', text: '30 hari kerja setelah akta kasasi ditandatangani' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Memori kasasi pidana wajib diserahkan dalam waktu 14 hari setelah permohonan kasasi diajukan.',
      legalBasis: 'Pasal 248 ayat (1) KUHAP.',
      analysis: 'Pasal 248 ayat (1) KUHAP menentukan pemohon kasasi wajib menyampaikan memori kasasi dalam waktu 14 hari. Jika lewat waktu 14 hari memori kasasi tidak diserahkan, hak kasasi gugur dan kasasi dinyatakan tidak dapat diterima.'
    },
    difficulty: 'Sedang'
  },

  // --- HUKUM ACARA PTUN (137 - 150) ---
  {
    id: 137,
    category: 'Hukum Acara PTUN',
    topicTag: 'Tindakan Faktual Pejabat TUN (Onrechtmatige Overheidsdaad)',
    question: 'Berdasarkan UU No. 30 Tahun 2014 jo. PERMA No. 2 Tahun 2019, sengketa Perbuatan Melanggar Hukum oleh Badan dan/atau Pejabat Pemerintahan (Onrechtmatige Overheidsdaad / OOD) saat ini diadili oleh...',
    options: [
      { key: 'A', text: 'Pengadilan Negeri dalam kompetensi perdata murni' },
      { key: 'B', text: 'Pengadilan Tata Usaha Negara (PTUN)' },
      { key: 'C', text: 'Komisi Pemberantasan Korupsi (KPK)' },
      { key: 'D', text: 'Mahkamah Agung di tingkat pertama dan terakhir' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Gugatan perbuatan melawan hukum oleh penguasa (OOD) kini menjadi kompetensi absolut PTUN.',
      legalBasis: 'Pasal 2 ayat (1) PERMA No. 2 Tahun 2019 jo. UU No. 30 Tahun 2014.',
      analysis: 'PERMA 2/2019 mengalihkan sengketa OOD (tindakan faktual melanggar hukum oleh badan/pejabat administrasi negara) yang semula digugat di PN perdata menjadi wewenang Pengadilan Tata Usaha Negara.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 138,
    category: 'Hukum Acara PTUN',
    topicTag: 'Prosedur Dismissal Ketua PTUN',
    question: 'Dalam prosedur dismissal menurut Pasal 62 UU PTUN, Ketua Pengadilan berwenang memutuskan bahwa gugatan tidak diterima dalam rapat permusyawaratan apabila...',
    options: [
      { key: 'A', text: 'Pokok gugatan nyata-nyata tidak termasuk dalam wewenang pengadilan' },
      { key: 'B', text: 'Gugatan diajukan sebelum lewat tenggang waktu 90 hari' },
      { key: 'C', text: 'Tergugat belum menyampaikan surat jawaban pertama' },
      { key: 'D', text: 'Penggugat didampingi oleh lebih dari dua orang advokat' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Ketua PTUN menyaring gugatan yang nyata-nyata tidak termasuk wewenang PTUN dalam rapat permusyawaratan dismissal.',
      legalBasis: 'Pasal 62 ayat (1) huruf a UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Pasal 62 ayat (1) menetapkan Ketua Pengadilan berwenang memutuskan gugatan tidak dapat diterima atau tidak berdasar jika pokok gugatan tidak termasuk wewenang pengadilan, syarat gugatan tidak dipenuhi, atau gugatan diajukan sebelum waktunya/lewat waktu.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 139,
    category: 'Hukum Acara PTUN',
    topicTag: 'Perlawanan atas Penetapan Dismissal',
    question: 'Terhadap penetapan dismissal Ketua Pengadilan yang menyatakan gugatan tidak diterima, pihak Penggugat dapat mengajukan upaya hukum perlawanan (verzet) dalam tenggang waktu...',
    options: [
      { key: 'A', text: '7 hari setelah penetapan diucapkan' },
      { key: 'B', text: '14 hari setelah penetapan dismissal diberitahukan' },
      { key: 'C', text: '30 hari sejak rapat permusyawaratan' },
      { key: 'D', text: 'Langsung kasasi ke Mahkamah Agung dalam 14 hari' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Perlawanan terhadap penetapan dismissal diajukan dalam waktu 14 hari setelah diberitahukan.',
      legalBasis: 'Pasal 62 ayat (3) huruf a UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Pasal 62 ayat (3) huruf a UU PTUN menetapkan terhadap penetapan dismissal dapat diajukan perlawanan kepada Pengadilan dalam tenggang waktu empat belas hari setelah diucapkan atau diberitahukan secara patut.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 140,
    category: 'Hukum Acara PTUN',
    topicTag: 'Eksekusi Putusan PTUN (Pasal 116)',
    question: 'Apabila pejabat TUN tidak bersedia melaksanakan putusan pengadilan yang telah inkracht setelah 90 hari, sanksi apakah yang dapat dijatuhkan menurut Pasal 116 UU No. 51 Tahun 2009?',
    options: [
      { key: 'A', text: 'Pejabat TUN tersebut langsung dipenjara selama 5 tahun' },
      { key: 'B', text: 'Pengenaan pembayaran uang paksa (dwangsom) dan/atau sanksi administratif, serta diumumkan pada media massa cetak' },
      { key: 'C', text: 'Penyitaan terhadap rumah pribadi milik pejabat TUN yang bersangkutan' },
      { key: 'D', text: 'Pembubaran instansi pemerintah yang bersangkutan' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Sanksi eksekusi PTUN: uang paksa (dwangsom), sanksi administratif, publikasi media massa, dan laporan ke Presiden.',
      legalBasis: 'Pasal 116 ayat (4), (5), (6) UU No. 51 Tahun 2009 tentang PTUN.',
      analysis: 'Pasal 116 UU PTUN mengatur sanksi bagi pejabat pembangkang: pembayaran uang paksa, sanksi administratif pemberhentian, pengumuman di media massa cetak oleh panitera, dan dilaporkan kepada Presiden.'
    },
    difficulty: 'Sedang'
  },

  // --- HUKUM ACARA PERADILAN AGAMA (141 - 150) ---
  {
    id: 141,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Kompetensi Relatif Cerai Talak',
    question: 'Permohonan cerai talak yang diajukan oleh Suami terhadap Istri wajib diajukan ke Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman...',
    options: [
      { key: 'A', text: 'Pemohon (Suami)' },
      { key: 'B', text: 'Termohon (Istri)' },
      { key: 'C', text: 'Tempat akad nikah dilangsungkan' },
      { key: 'D', text: 'Tempat harta bersama berada' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Permohonan cerai talak diajukan di Pengadilan Agama tempat kediaman Termohon (istri).',
      legalBasis: 'Pasal 66 ayat (2) UU No. 7 Tahun 1989 tentang Peradilan Agama.',
      analysis: 'Pasal 66 ayat (2) UU Peradilan Agama menentukan: Permohonan cerai talak diajukan kepada Pengadilan yang daerah hukumnya meliputi tempat kediaman Termohon, kecuali apabila Termohon dengan sengaja meninggalkan tempat kediaman bersama tanpa izin Pemohon.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 142,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Hadhanah (Hak Asuh Anak)',
    question: 'Berdasarkan Pasal 105 Kompilasi Hukum Islam (KHI), dalam hal terjadi perceraian, pemeliharaan anak yang belum mumayyiz (belum berusia 12 tahun) adalah...',
    options: [
      { key: 'A', text: 'Hak ibunya' },
      { key: 'B', text: 'Hak ayahnya' },
      { key: 'C', text: 'Diserahkan kepada kakek dari pihak ayah' },
      { key: 'D', text: 'Anak bebas memilih secara mandiri di muka sidang' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Hak asuh anak di bawah 12 tahun (belum mumayyiz) adalah hak ibunya.',
      legalBasis: 'Pasal 105 huruf a Kompilasi Hukum Islam (KHI).',
      analysis: 'Pasal 105 huruf a KHI mengatur bahwa pemeliharaan anak yang belum mumayyiz atau belum berumur 12 tahun adalah hak ibunya, sedangkan anak yang sudah mumayyiz berhak memilih untuk mendapatkan hadhanah dari ayah atau ibunya.'
    },
    difficulty: 'Mudah'
  },

  // --- HUKUM ACARA MAHKAMAH KONSTITUSI (151 - 160) ---
  {
    id: 143,
    category: 'Hukum Acara Mahkamah Konstitusi',
    topicTag: 'Kewenangan Mahkamah Konstitusi',
    question: 'Berikut ini yang BUKAN merupakan kewenangan Mahkamah Konstitusi menurut Pasal 24C ayat (1) UUD 1945 adalah...',
    options: [
      { key: 'A', text: 'Menguji undang-undang terhadap UUD 1945' },
      { key: 'B', text: 'Memutus sengketa kewenangan lembaga negara yang kewenangannya diberikan oleh UUD 1945' },
      { key: 'C', text: 'Memutus pembubaran partai politik' },
      { key: 'D', text: 'Menguji peraturan pemerintah dan peraturan perundang-undangan di bawah undang-undang terhadap undang-undang' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Menguji peraturan di bawah undang-undang adalah wewenang Mahkamah Agung, bukan Mahkamah Konstitusi.',
      legalBasis: 'Pasal 24A ayat (1) jo. Pasal 24C ayat (1) UUD 1945.',
      analysis: 'Kewenangan judicial review terbagi dua: Mahkamah Konstitusi menguji Undang-Undang terhadap UUD 1945, sedangkan Mahkamah Agung menguji peraturan perundang-undangan di bawah UU terhadap UU.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 144,
    category: 'Hukum Acara Mahkamah Konstitusi',
    topicTag: 'Sifat Putusan MK',
    question: 'Putusan Mahkamah Konstitusi memperoleh kekuatan hukum tetap sejak...',
    options: [
      { key: 'A', text: '14 hari setelah salinan putusan dikirimkan kepada DPR dan Presiden' },
      { key: 'B', text: 'Selesai diucapkan dalam sidang pleno terbuka untuk umum' },
      { key: 'C', text: 'Diumumkan dalam Lembaran Negara Republik Indonesia' },
      { key: 'D', text: 'Setelah ditandatangani oleh seluruh hakim konstitusi' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Putusan MK berkekuatan hukum tetap sejak selesai diucapkan dalam sidang pleno terbuka untuk umum.',
      legalBasis: 'Pasal 47 UU No. 24 Tahun 2003 tentang Mahkamah Konstitusi.',
      analysis: 'Pasal 47 UU MK mengatur putusan MK memperoleh kekuatan hukum tetap sejak selesai diucapkan dalam sidang pleno terbuka untuk umum, bersifat final dan mengikat (erga omnes).'
    },
    difficulty: 'Mudah'
  },

  // --- HUKUM ACARA PHI (145 - 150) ---
  {
    id: 145,
    category: 'Hukum Acara PHI',
    topicTag: 'Tenggang Waktu Mengeluarkan Anjuran Tertulis',
    question: 'Berdasarkan UU No. 2 Tahun 2004, dalam hal penyelesaian melalui mediasi tidak mencapai kesepakatan, maka mediator wajib mengeluarkan anjuran tertulis dalam waktu selambat-lambatnya...',
    options: [
      { key: 'A', text: '10 hari kerja sejak sidang mediasi pertama' },
      { key: 'B', text: '30 hari kerja sejak menerima pelimpahan penyelesaian perselisihan' },
      { key: 'C', text: '60 hari kerja' },
      { key: 'D', text: '90 hari kalender' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Anjuran tertulis dikeluarkan mediator paling lama 10 hari kerja sejak sidang mediasi pertama.',
      legalBasis: 'Pasal 13 ayat (2) huruf a UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Pasal 13 ayat (2) huruf a UU 2/2004 menegaskan bahwa apabila tidak tercapai kesepakatan penyelesaian, mediator mengeluarkan anjuran tertulis dalam waktu selambat-lambatnya 10 hari kerja sejak sidang mediasi pertama.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 146,
    category: 'Hukum Acara PHI',
    topicTag: 'Upaya Hukum Terhadap Putusan PHI',
    question: 'Terhadap putusan Pengadilan Hubungan Industrial (PHI) mengenai perselisihan hak dan perselisihan pemutusan hubungan kerja (PHK), upaya hukum yang dapat ditempuh adalah...',
    options: [
      { key: 'A', text: 'Banding ke Pengadilan Tinggi' },
      { key: 'B', text: 'Kasasi langsung ke Mahkamah Agung' },
      { key: 'C', text: 'Perlawanan (Verzet)' },
      { key: 'D', text: 'Tidak ada upaya hukum karena putusan PHI selalu final' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Putusan PHI tidak mengenal upaya hukum banding, melainkan kasasi langsung ke Mahkamah Agung.',
      legalBasis: 'Pasal 57 jo. Pasal 110 UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Dalam hukum acara PHI tidak terdapat tingkat peradilan banding. Putusan PHI yang menyangkut perselisihan hak dan perselisihan PHK dapat langsung dimohonkan kasasi ke Mahkamah Agung dalam waktu 14 hari kerja.'
    },
    difficulty: 'Mudah'
  },

  // --- HUKUM ACARA ARBITRASE & APS (147 - 150) ---
  {
    id: 147,
    category: 'Hukum Acara Arbitrase & APS',
    topicTag: 'Klausula Arbitrase Menyingkirkan PN',
    question: 'Adanya suatu klausula arbitrase yang disepakati secara tertulis oleh para pihak dalam perjanjian mengakibatkan Pengadilan Negeri...',
    options: [
      { key: 'A', text: 'Tetap berwenang memeriksa jika Penggugat memilih mendaftar di PN' },
      { key: 'B', text: 'Tidak berwenang mengadili sengketa para pihak yang telah terikat perjanjian arbitrase tersebut' },
      { key: 'C', text: 'Berwenang memeriksa tingkat pertama, sedangkan arbitrase memeriksa tingkat banding' },
      { key: 'D', text: 'Berwenang memutus jika nilai sengketa di bawah 1 miliar' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Klausula arbitrase meniadakan kewenangan Pengadilan Negeri untuk mengadili sengketa para pihak.',
      legalBasis: 'Pasal 3 dan Pasal 11 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.',
      analysis: 'Pasal 3 dan 11 UU 30/1999 menetapkan Pengadilan Negeri tidak berwenang mengadili sengketa para pihak yang telah terikat dalam perjanjian arbitrase. Hakim PN wajib menolak dan tidak campur tangan dalam penyelesaian sengketa tersebut.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 148,
    category: 'Hukum Acara Arbitrase & APS',
    topicTag: 'Pendaftaran Putusan Arbitrase',
    question: 'Menurut Pasal 59 UU No. 30 Tahun 1999, lembar asli atau salinan autentik putusan arbitrase nasional wajib diserahkan dan didaftarkan oleh arbiter ke Kepaniteraan Pengadilan Negeri dalam waktu paling lama...',
    options: [
      { key: 'A', text: '14 hari sejak putusan diucapkan' },
      { key: 'B', text: '30 hari terhitung sejak tanggal putusan diucapkan' },
      { key: 'C', text: '60 hari kalender' },
      { key: 'D', text: '90 hari kalender' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Putusan arbitrase wajib didaftarkan ke Kepaniteraan PN paling lama 30 hari sejak diucapkan.',
      legalBasis: 'Pasal 59 ayat (1) UU No. 30 Tahun 1999 tentang Arbitrase dan APS.',
      analysis: 'Pasal 59 ayat (1) mengatur bahwa dalam waktu paling lama 30 hari terhitung sejak tanggal putusan diucapkan, lembar asli atau salinan autentik putusan diserahkan dan didaftarkan oleh arbiter ke Panitera Pengadilan Negeri.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 149,
    category: 'Hukum Acara Arbitrase & APS',
    topicTag: 'Pembatalan Putusan Arbitrase',
    question: 'Berdasarkan Pasal 70 UU No. 30 Tahun 1999, permohonan pembatalan putusan arbitrase dapat diajukan kepada Pengadilan Negeri apabila putusan diduga mengandung unsur...',
    options: [
      { key: 'A', text: 'Surat atau dokumen palsu yang diakui atau dinyatakan palsu setelah putusan dijatuhkan' },
      { key: 'B', text: 'Ditemukan dokumen yang menentukan yang disembunyikan oleh pihak lawan' },
      { key: 'C', text: 'Putusan diambil dari hasil tipu muslihat yang dilakukan oleh salah satu pihak' },
      { key: 'D', text: 'Semua jawaban A, B, dan C adalah benar' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Ketiga alasan (dokumen palsu, penyembunyian dokumen, tipu muslihat) merupakan dasar pembatalan putusan arbitrase.',
      legalBasis: 'Pasal 70 huruf a, b, dan c UU No. 30 Tahun 1999 tentang Arbitrase dan APS.',
      analysis: 'Pasal 70 UU 30/1999 merumuskan secara limitatif 3 alasan permohonan pembatalan putusan arbitrase ke PN, yakni pemalsuan surat/dokumen, penyembunyian dokumen menentukan, atau tipu muslihat dalam pemeriksaan.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 150,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Larangan Menjamin Kemenangan',
    question: 'Dalam Pasal 4 huruf c Kode Etik Advokat Indonesia (KEAI), seorang Advokat tidak dibenarkan untuk...',
    options: [
      { key: 'A', text: 'Menerima honorarium sebelum persidangan selesai' },
      { key: 'B', text: 'Menjamin kepada kliennya bahwa perkara yang ditanganinya pasti akan dimenangkan' },
      { key: 'C', text: 'Mendampingi klien di luar sidang pengadilan' },
      { key: 'D', text: 'Melakukan penelaahan berkas perkara secara mandiri' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Advokat dilarang keras menjamin kepada klien bahwa perkaranya pasti menang.',
      legalBasis: 'Pasal 4 huruf c Kode Etik Advokat Indonesia (KEAI).',
      analysis: 'Pasal 4 huruf c KEAI menegaskan: Advokat tidak dibenarkan menjamin kepada kliennya bahwa perkara yang ditanganinya akan menang. Advokat berkewajiban memberikan pembelaan hukum yang optimal, bukan menjamin hasil putusan hakim.'
    },
    difficulty: 'Mudah'
  }
];
