import { UPAQuestion, UPACategory } from '../types/quiz';
import { ADDITIONAL_UPA_BANK_PART1 } from './additionalUpaQuestions';
import { AUTHENTIC_PERADI_BANK_PART2 } from './authenticUpaQuestions';
import { TRYOUT_2025_BANK } from './tryOut2025Bank';
import { TOAZ_PERADI_BANK } from './toazPeradiBank';
import { ADVANCED_UPA_BANK } from './advancedUpaBank';
import { CATEGORY_EXPANSION_BANK } from './categoryExpansionBank';

/**
 * Bank Data Soal Ujian Profesi Advokat (UPA) Indonesia
 * Diintegrasikan langsung dari naskah Try Out Resmi PERADI & UPA 2025/2026:
 * - Kunci Jawaban & Pembahasan PG Try Out 4 Juli 2026 (120 Soal Lengkap)
 * - Try Out UPA 2025 & Bank Latihan Soal Advokat PERADI
 */
export const OFFICIAL_TRYOUT_QUESTIONS: UPAQuestion[] = [
  // --- PERAN & FUNGSI ORGANISASI ADVOKAT & KODE ETIK (1 - 34) ---
  {
    id: 1,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Wadah Tunggal Advokat',
    question: 'Pada tanggal 21 Desember 2004, dibentuk suatu wadah sebagai wujud nyata dari kesatuan dan persatuan para Advokat Indonesia, yaitu....',
    options: [
      { key: 'A', text: 'Persatuan Advokat Indonesia (PERADIN)' },
      { key: 'B', text: 'Himpunan Advokat dan Pengacara Indonesia (HAPI)' },
      { key: 'C', text: 'Perhimpunan Advokat Indonesia (PERADI)' },
      { key: 'D', text: 'Komite Kerja Advokat Indonesia (KKAI)' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'PERADI dibentuk oleh 8 organisasi advokat sebagai pemenuhan amanat UU No. 18 Tahun 2003.',
      legalBasis: 'Pasal 32 ayat (4) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'PERADI dibentuk oleh 8 organisasi advokat yang ada saat itu sebagai pemenuhan amanat UU No. 18 Tahun 2003 yang mewajibkan terbentuknya satu wadah tunggal (single bar association) bagi profesi advokat di Indonesia paling lambat dua tahun sejak UU tersebut disahkan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 2,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Honorarium Advokat',
    question: 'Pasal 21 Undang-Undang Republik Indonesia Nomor 18 Tahun 2003 tentang Advokat mengatur besarnya honorarium berdasarkan....',
    options: [
      { key: 'A', text: 'Peraturan Pemerintah' },
      { key: 'B', text: 'Undang-undang' },
      { key: 'C', text: 'Organisasi advokat' },
      { key: 'D', text: 'Persetujuan kedua belah pihak' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Besaran honorarium didasarkan pada kesepakatan atau persetujuan yang wajar antara advokat dengan kliennya.',
      legalBasis: 'Pasal 21 ayat (2) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Penentuan besaran honorarium (biaya jasa) seorang advokat tidak dipatok oleh pemerintah atau organisasi, melainkan didasarkan pada kesepakatan atau persetujuan yang wajar antara advokat tersebut dengan kliennya sebagaimana diatur dalam Pasal 21 ayat (2) UU Advokat.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 3,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Pembelaan Diri Advokat',
    question: 'Pembelaan diri advokat dapat ditemui dalam....',
    options: [
      { key: 'A', text: 'Pasal 1' },
      { key: 'B', text: 'Pasal 7' },
      { key: 'C', text: 'Pasal 16' },
      { key: 'D', text: 'Pasal 1(6) dan 7(3)' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Hak membela diri diatur dalam mekanisme pemeriksaan kode etik oleh Dewan Kehormatan.',
      legalBasis: 'Pasal 1 angka 6 dan Pasal 7 ayat (3) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pasal 1 angka 6 mendefinisikan Dewan Kehormatan dengan menjamin hak membela diri advokat. Pasal 7 ayat (3) menegaskan bahwa pemeriksaan terhadap pelanggaran kode etik harus memberikan kesempatan kepada advokat yang bersangkutan untuk melakukan pembelaan diri.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 4,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Advokat Tanpa Izin (Advokat Gadungan)',
    question: 'Setiap orang yang dengan sengaja menjalankan pekerjaan profesi Advokat dan bertindak seolah-olah sebagai Advokat, tetapi bukan Advokat sebagaimana diatur dalam Undang-undang ini, dipidana dengan pidana penjara....',
    options: [
      { key: 'A', text: 'Paling lama 5 tahun' },
      { key: 'B', text: 'Paling lama 7 tahun' },
      { key: 'C', text: '3 tahun' },
      { key: 'D', text: '2 tahun' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Advokat gadungan diancam pidana penjara paling lama 5 tahun dan denda paling banyak Rp50.000.000.',
      legalBasis: 'Pasal 31 UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Mengaku atau bertindak seolah-olah sebagai advokat tanpa memiliki izin resmi merupakan tindak pidana yang diancam pidana penjara paling lama 5 tahun dan denda paling banyak Rp50.000.000,00 berdasarkan Pasal 31 UU Advokat.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 5,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Bantuan Hukum Non Litigasi',
    question: 'Bantuan hukum oleh advokat yang diberikan di luar pengadilan, disebut pula dengan sebutan....',
    options: [
      { key: 'A', text: 'Bantuan hukum aktif' },
      { key: 'B', text: 'Bantuan hukum pasif' },
      { key: 'C', text: 'Bantuan hukum litigasi' },
      { key: 'D', text: 'Bantuan hukum non litigasi' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Bantuan di luar pengadilan (seperti konsultasi, mediasi, negosiasi) disebut bantuan hukum non litigasi.',
      legalBasis: 'Pasal 1 angka 1 dan 2 UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pemberian bantuan hukum dibagi menjadi dua jalur utama: litigasi (di dalam pengadilan) dan non-litigasi (di luar pengadilan, seperti konsultasi, perancangan kontrak, negosiasi, atau mediasi).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 6,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Status Penegak Hukum',
    question: 'Eksistensi Advokat setelah keluarnya UU No. 18 Tahun 2003 sudah diakui statusnya sebagai....',
    options: [
      { key: 'A', text: 'Institusi hukum' },
      { key: 'B', text: 'Kuasa hukum' },
      { key: 'C', text: 'Penegak hukum' },
      { key: 'D', text: 'Pendekar hukum' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Advokat berstatus sebagai penegak hukum yang bebas dan mandiri (bagian dari Catur Wangsa).',
      legalBasis: 'Pasal 5 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pasal 5 ayat (1) UU Advokat menyatakan secara tegas: "Advokat berstatus sebagai penegak hukum, bebas dan mandiri yang dijamin oleh hukum dan peraturan perundang-undangan."'
    },
    difficulty: 'Mudah'
  },
  {
    id: 7,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Peran Organisasi Advokat',
    question: 'Peran organisasi advokat pada pokoknya menyangkut....',
    options: [
      { key: 'A', text: 'Peran terhadap klien dan keluarga klien.' },
      { key: 'B', text: 'Peran terhadap penegak hukum lainnya.' },
      { key: 'C', text: 'Peran terhadap anggota, peran terhadap masyarakat dan peran terhadap negara.' },
      { key: 'D', text: 'Peran terhadap pencari keadilan.' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Organisasi advokat mengemban tiga peran utama: terhadap anggota, masyarakat, dan negara.',
      legalBasis: 'Pasal 28 & Pasal 32 UU No. 18 Tahun 2003 jo. Kode Etik Advokat Indonesia.',
      analysis: 'Peran organisasi advokat meliputi pembinaan anggota dan kode etik, pelayanan hukum cuma-cuma kepada masyarakat pencari keadilan, serta menjaga supremasi hukum dan demokrasi bagi negara.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 8,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Pengawasan Advokat',
    question: 'Pengawasan terhadap advokat dilakukan oleh....',
    options: [
      { key: 'A', text: 'Mahkamah Agung (MA)' },
      { key: 'B', text: 'Menteri Hukum dan HAM' },
      { key: 'C', text: 'PERADI (Organisasi Advokat)' },
      { key: 'D', text: 'Pengadilan Negeri setempat yang membawahi wilayah kerjanya' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Pengawasan terhadap advokat dilakukan secara mandiri oleh Organisasi Advokat.',
      legalBasis: 'Pasal 12 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pasal 12 ayat (1) UU Advokat menentukan: "Pengawasan terhadap Advokat dilakukan oleh Organisasi Advokat." Sejak berlakunya UU Advokat, pengawasan beralih menjadi mandiri (self-governing profession).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 9,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Dasar Normatif Status Advokat',
    question: 'Hakikat status Advokat sebagai penegak hukum diatur secara eksplisit dalam Undang-Undang Nomor 18 Tahun 2003 tentang Advokat, yaitu pada:',
    options: [
      { key: 'A', text: 'Pasal 1 ayat (1)' },
      { key: 'B', text: 'Pasal 4 ayat (1)' },
      { key: 'C', text: 'Pasal 5 ayat (1)' },
      { key: 'D', text: 'Pasal 12 ayat (1)' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Status advokat sebagai penegak hukum ditegaskan dalam Pasal 5 ayat (1).',
      legalBasis: 'Pasal 5 ayat (1) UU No. 18 Tahun 2003.',
      analysis: 'Pasal 5 ayat (1) UU No. 18 Tahun 2003 mengatur bahwa Advokat berstatus sebagai penegak hukum yang mempunyai kedudukan setara dengan penegak hukum lainnya dalam menegakkan hukum dan keadilan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 10,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Ruang Lingkup Jasa Hukum',
    question: 'Berdasarkan Pasal 1 angka 1 UU Advokat, yang dimaksud dengan Advokat adalah orang yang berprofesi memberi jasa hukum, baik di dalam maupun di luar pengadilan. Pengertian "jasa hukum" meliputi:',
    options: [
      { key: 'A', text: 'Konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, dan tindakan hukum lain untuk kepentingan hukum klien.' },
      { key: 'B', text: 'Hanya menjalankan kuasa dan mewakili di hadapan pengadilan.' },
      { key: 'C', text: 'Hanya memberikan konsultasi hukum dan menjalankan kuasa di luar pengadilan.' },
      { key: 'D', text: 'Memberikan opini hukum dan perancangan kontrak saja.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Jasa hukum dirumuskan secara komprehensif mencakup konsultasi, bantuan, kuasa, perwakilan, pendampingan, pembelaan, dll.',
      legalBasis: 'Pasal 1 angka 2 UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pasal 1 angka 2 UU Advokat menegaskan: "Jasa Hukum adalah jasa yang diberikan Advokat berupa memberikan konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, membela, dan melakukan tindakan hukum lain untuk kepentingan hukum klien."'
    },
    difficulty: 'Mudah'
  },
  {
    id: 11,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Kewenangan Mahkamah Agung',
    question: 'Kewenangan Mahkamah Agung (MA) dalam konteks organisasi Advokat, sesuai dengan UU Advokat, adalah:',
    options: [
      { key: 'A', text: 'Melakukan pengangkatan Advokat.' },
      { key: 'B', text: 'Melaksanakan Ujian Profesi Advokat.' },
      { key: 'C', text: 'Melakukan pengawasan terhadap Advokat.' },
      { key: 'D', text: 'Mengambil sumpah profesi Advokat.' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Mahkamah Agung (melalui Pengadilan Tinggi) berwenang mengambil sumpah profesi advokat di sidang terbuka.',
      legalBasis: 'Pasal 4 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pengangkatan, ujian, dan pengawasan advokat berada pada Organisasi Advokat. Pengadilan Tinggi di jajaran MA hanya berwenang menyumpah calon advokat sebelum menjalankan profesinya (Pasal 4 ayat 1).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 12,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Pemeriksaan Tindakan Etik Advokat',
    question: 'Tindak pidana atau dugaan pelanggaran yang dilakukan oleh Advokat yang terkait dengan profesinya diperiksa terlebih dahulu melalui:',
    options: [
      { key: 'A', text: 'Menteri Hukum dan Hak Asasi Manusia.' },
      { key: 'B', text: 'Komisi Pemberantasan Korupsi (KPK).' },
      { key: 'C', text: 'Dewan Kehormatan Organisasi Advokat.' },
      { key: 'D', text: 'Dewan Pimpinan Nasional PERADI.' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Pemeriksaan pelanggaran etik dan profesi dilakukan melalui sidang Dewan Kehormatan Organisasi Advokat.',
      legalBasis: 'Pasal 26 ayat (1) dan Pasal 27 ayat (1) UU No. 18 Tahun 2003 jo. KEAI.',
      analysis: 'Tindakan yang terkait etika profesi atau hak imunitas harus melalui sidang Dewan Kehormatan Organisasi Advokat demi menjaga kemandirian profesi (officium nobile).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 13,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Deklarasi Single Bar',
    question: 'Organisasi Advokat yang dideklarasikan pada tanggal 21 Desember 2004 sebagai wujud kesatuan Advokat Indonesia dan menjalankan fungsi single bar adalah:',
    options: [
      { key: 'A', text: 'IKADIN (Ikatan Advokat Indonesia)' },
      { key: 'B', text: 'PERADI (Perhimpunan Advokat Indonesia)' },
      { key: 'C', text: 'AAI (Asosiasi Advokat Indonesia)' },
      { key: 'D', text: 'IPHI (Ikatan Penasihat Hukum Indonesia)' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'PERADI dideklarasikan pada 21 Desember 2004 oleh 8 organisasi advokat.',
      legalBasis: 'Pasal 32 ayat (4) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Delapan organisasi advokat (IKADIN, AAI, IPHI, HAPI, SPI, AKHI, HKHPM, APSI) mendirikan PERADI pada 21 Desember 2004 untuk memenuhi mandat wadah tunggal organisasi advokat.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 14,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Tugas Dewan Kehormatan',
    question: 'Organisasi Advokat wajib membentuk Dewan Kehormatan yang bertugas untuk:',
    options: [
      { key: 'A', text: 'Mengangkat dan memberhentikan Advokat.' },
      { key: 'B', text: 'Memeriksa serta mengadili perkara pelanggaran kode etik.' },
      { key: 'C', text: 'Memberikan bantuan hukum secara cuma-cuma (pro bono).' },
      { key: 'D', text: 'Mengatur besarnya honorarium yang wajar bagi Advokat.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Dewan Kehormatan bertugas memeriksa dan mengadili pelanggaran kode etik profesi advokat.',
      legalBasis: 'Pasal 26 ayat (1) & (2) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Dewan Kehormatan dibentuk secara khusus oleh Organisasi Advokat dengan fungsi mandiri untuk menegakkan disiplin profesi dan mengadili pelanggaran yang dilakukan oleh Advokat terhadap Kode Etik.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 15,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Bantuan Hukum Cuma-Cuma (Pro Bono)',
    question: 'Kewajiban Advokat untuk memberikan bantuan hukum secara cuma-cuma (pro bono) kepada pencari keadilan yang tidak mampu diatur dalam:',
    options: [
      { key: 'A', text: 'Pasal 12 UU Advokat' },
      { key: 'B', text: 'Pasal 17 UU Advokat' },
      { key: 'C', text: 'Pasal 21 UU Advokat' },
      { key: 'D', text: 'Pasal 22 UU Advokat' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Kewajiban memberikan bantuan hukum cuma-cuma diatur dalam Pasal 22 UU Advokat.',
      legalBasis: 'Pasal 22 ayat (1) UU No. 18 Tahun 2003 jo. PP No. 83 Tahun 2008.',
      analysis: 'Pasal 22 ayat (1) berbunyi: "Advokat wajib memberikan bantuan hukum secara cuma-cuma kepada pencari keadilan yang tidak mampu." Ketentuan operasionalnya diatur lebih lanjut dalam PP 83/2008.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 16,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Hak Imunitas Advokat',
    question: 'Hak imunitas Advokat (hak bebas tuntutan) dalam menjalankan profesinya dilindungi. Batasan penggunaan hak imunitas Advokat adalah:',
    options: [
      { key: 'A', text: 'Bebas dituntut secara perdata dan pidana tanpa syarat.' },
      { key: 'B', text: 'Tidak dapat dituntut secara perdata maupun pidana atas dasar alasan yang berkaitan dengan pembelaan klien dengan itikad baik.' },
      { key: 'C', text: 'Tidak dapat dituntut hanya di dalam sidang pengadilan saja.' },
      { key: 'D', text: 'Berlaku mutlak selama yang bersangkutan memiliki izin praktik.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Hak imunitas melindungi advokat baik di dalam maupun di luar sidang asalkan dilakukan dengan itikad baik.',
      legalBasis: 'Pasal 16 UU Advokat jo. Putusan MK No. 26/PUU-XI/2013 jo. Pasal 7 huruf g KEAI.',
      analysis: 'Hak imunitas bukan berarti kebal hukum mutlak, melainkan tidak dapat dituntut pidana atau perdata jika membela klien dengan itikad baik (in good faith), yang diperluas MK meliputi luar sidang pengadilan.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 17,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Rahasia Jabatan Advokat',
    question: 'Kewajiban Advokat untuk menyimpan rahasia klien diatur dalam Pasal 19 UU Advokat. Rahasia tersebut wajib dijaga:',
    options: [
      { key: 'A', text: 'Selama hubungan Advokat dan klien masih berlangsung.' },
      { key: 'B', text: 'Hanya jika rahasia tersebut berkaitan dengan proses persidangan.' },
      { key: 'C', text: 'Selama-lamanya, meskipun hubungan Advokat dan klien telah berakhir.' },
      { key: 'D', text: 'Dapat dibuka atas permintaan penegak hukum.' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Kewajiban menyimpan rahasia jabatan melekat selama-lamanya bahkan setelah hubungan berakhir.',
      legalBasis: 'Pasal 19 ayat (1) UU Advokat jo. Pasal 4 huruf h KEAI.',
      analysis: 'Kewajiban menjaga rahasia jabatan (pactum tacitum) tidak memiliki masa kedaluwarsa demi menjaga martabat dan integritas advokat, berlaku selama-lamanya.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 18,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Kedudukan Kode Etik 2002',
    question: 'Bagaimanakah status hukum Kode Etik yang ditetapkan pada tanggal 23 Mei 2002 setelah lahirnya UU Advokat (UU No. 18 Tahun 2003):',
    options: [
      { key: 'A', text: 'Tidak berlaku karena terdapat Kode Etik yang baru setelah lahirnya UU Advokat.' },
      { key: 'B', text: 'Berkekuatan hukum secara mutatis mutandis berdasarkan Pasal 33 UU Advokat.' },
      { key: 'C', text: 'Wajib disempurnakan sesuai dengan Pasal 33 UU Advokat.' },
      { key: 'D', text: 'Hanya mengikat bagi Advokat yang diangkat sebelum lahirnya UU Advokat.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Kode Etik Advokat tanggal 23 Mei 2002 diakui dan berlaku secara mutatis mutandis.',
      legalBasis: 'Pasal 33 UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pasal 33 UU Advokat secara eksplisit mengesahkan bahwa Kode Etik yang ditetapkan pada 23 Mei 2002 berkekuatan hukum secara mutatis mutandis berdasarkan UU Advokat.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 19,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Lingkup Hak Imunitas',
    question: 'Pasal 16 UU Advokat jo. Pasal 7 huruf g Kode Etik mengatur ketentuan tentang hak Imunitas bagi seorang Advokat dalam lingkup:',
    options: [
      { key: 'A', text: 'Pidana' },
      { key: 'B', text: 'Perdata' },
      { key: 'C', text: 'Perdata dan Pidana' },
      { key: 'D', text: 'Tata Usaha Negara' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Hak imunitas mencakup perlindungan dari tuntutan perdata maupun pidana.',
      legalBasis: 'Pasal 16 UU Advokat jo. Pasal 7 huruf g KEAI.',
      analysis: 'Perlindungan hukum bagi advokat mencakup dua ranah hukum utama: advokat tidak dapat dituntut baik secara perdata maupun pidana dalam menjalankan tugas profesinya dengan itikad baik.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 20,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Kesetaraan Penegak Hukum',
    question: 'Profesi advokat adalah profesi yang mulia dan terhormat (officium nobile) dan karenanya dalam menjalankan profesi selaku penegak hukum di Pengadilan sejajar dengan:',
    options: [
      { key: 'A', text: 'SatPol PP' },
      { key: 'B', text: 'Pemerintah' },
      { key: 'C', text: 'Polisi, Jaksa dan Hakim' },
      { key: 'D', text: 'Semua benar' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Advokat memiliki kedudukan yang sejajar dan setara dengan penegak hukum lainnya (Jaksa dan Hakim).',
      legalBasis: 'Pasal 5 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Dalam doktrin catur wangsa penegak hukum di Indonesia (Polisi, Jaksa, Hakim, Advokat), advokat mempunyai kedudukan setara demi mewujudkan fair trial.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 21,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Tanggal Penetapan Kode Etik',
    question: 'Kode Etik Advokat Indonesia ditetapkan di Jakarta pada tanggal:',
    options: [
      { key: 'A', text: '23 Mei 2003' },
      { key: 'B', text: '23 Juni 2002' },
      { key: 'C', text: '23 Mei 2002' },
      { key: 'D', text: '23 Mei 2001' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Kode Etik Advokat Indonesia disahkan di Jakarta pada tanggal 23 Mei 2002.',
      legalBasis: 'Lembar Pengesahan Kode Etik Advokat Indonesia (KEAI) 2002.',
      analysis: 'KEAI disepakati dan ditandatangani oleh Komite Kerja Advokat Indonesia (KKAI) yang menaungi 7 organisasi advokat pada tanggal 23 Mei 2002.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 22,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Akibat Pemberhentian Sementara (Skorsing)',
    question: 'Jika seorang Advokat dijatuhi sanksi berupa pemberhentian sementara untuk waktu tertentu, maka:',
    options: [
      { key: 'A', text: 'Advokat tersebut hanya dapat menjalankan profesinya di luar sidang' },
      { key: 'B', text: 'Advokat tersebut hanya dapat memberikan konsultasi hukum' },
      { key: 'C', text: 'Advokat tersebut masih menjalankan profesinya, baik di dalam atau di luar sidang' },
      { key: 'D', text: 'Advokat tersebut tidak dapat menjalankan profesinya, baik di dalam atau di luar sidang' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Sanksi skorsing melarang advokat menjalankan profesi secara total baik di dalam maupun di luar pengadilan.',
      legalBasis: 'Pasal 7 ayat (1) huruf c UU Advokat jo. Pasal 16 ayat (1) KEAI.',
      analysis: 'Pemberhentian sementara mencabut wewenang advokat secara penuh selama masa hukuman, dilarang berpraktik litigasi maupun non-litigasi.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 23,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Sidang In Absentia Dewan Kehormatan',
    question: 'Apabila teradu telah dipanggil sampai 2 (dua) kali tidak hadir dalam pemeriksaan tanpa alasan yang sah, maka sidang dugaan pelanggaran kode etik:',
    options: [
      { key: 'A', text: 'Diberhentikan sampai pengadu bisa menghadirkan teradu' },
      { key: 'B', text: 'Diberhentikan dan dipanggil untuk ketiga kalinya' },
      { key: 'C', text: 'Diteruskan tanpa kehadiran teradu' },
      { key: 'D', text: 'Diteruskan dengan acara memutuskan pengaduan tidak dapat diteruskan' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Sidang Dewan Kehormatan dilanjutkan tanpa kehadiran teradu (in absentia) setelah 2 kali mangkir.',
      legalBasis: 'Pasal 13 ayat (1) Hukum Acara Dewan Kehormatan KEAI.',
      analysis: 'Jika teradu telah dipanggil secara sah dua kali berturut-turut namun tidak hadir tanpa alasan sah, sidang pemeriksaan tetap diteruskan tanpa kehadiran teradu demi kepastian hukum.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 24,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Mantan Hakim Menjadi Advokat',
    question: 'Berdasarkan Kode Etik advokat, apakah mantan Hakim dibenarkan untuk beralih profesi menjadi Advokat:',
    options: [
      { key: 'A', text: 'Tidak dapat dibenarkan karena Advokat adalah profesi yang bebas dan mandiri' },
      { key: 'B', text: 'Tidak dapat dibenarkan karena dapat menimbulkan conflict of interest' },
      { key: 'C', text: 'Dapat, karena sama halnya dengan Advokat, Hakim juga berkedudukan sebagai penegak hukum' },
      { key: 'D', text: 'Dapat, namun dalam jangka waktu 3 (tiga) tahun ia tidak dapat menangani perkara yang ditanganinya di Pengadilan tempatnya terakhir ia bekerja' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Mantan hakim boleh menjadi advokat, tetapi dilarang beracara selama 3 tahun di pengadilan tempat terakhir ia bekerja.',
      legalBasis: 'Pasal 5 huruf g Kode Etik Advokat Indonesia (KEAI).',
      analysis: 'Larangan menangani perkara selama 3 tahun di pengadilan tempat terakhir mantan hakim menjabat bertujuan mencegah potensi konflik kepentingan dan penyalahgunaan pengaruh.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 25,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Kehadiran Sidang Kode Etik',
    question: 'Dalam sidang pemeriksaan perkara pelanggaran Kode Etik Advokat, baik pengadu maupun pihak yang teradu:',
    options: [
      { key: 'A', text: 'Harus hadir secara pribadi, namun jika dikehendaki dapat diwakili oleh penasihat' },
      { key: 'B', text: 'Harus hadir secara pribadi dan jika dikehendaki dapat didampingi oleh penasihat' },
      { key: 'C', text: 'Tidak perlu hadir secara pribadi karena dapat memberikan kuasa kepada Advokat' },
      { key: 'D', text: 'Tidak perlu hadir secara pribadi karena dapat memberikan kuasa kepada orang lain' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Pengadu dan teradu wajib hadir secara pribadi, namun dapat didampingi oleh penasihat.',
      legalBasis: 'Pasal 11 ayat (1) dan (2) Hukum Acara Dewan Kehormatan KEAI.',
      analysis: 'Sidang kode etik bersifat personal karena menyangkut martabat pribadi. Pihak tidak boleh diwakili tanpa kehadiran, namun berhak didampingi penasihat.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 26,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Bantuan Hukum Teman Sejawat',
    question: 'Sifat bantuan hukum yang diberikan Advokat pada teman sejawatnya yang sedang didakwa dalam perkara pidana adalah:',
    options: [
      { key: 'A', text: 'Wajib atas permintaan Advokat yang didakwa itu atau jika ditunjuk oleh organisasi profesi' },
      { key: 'B', text: 'Boleh kalau Advokat yang didakwa bisa memenuhi honorarium yang ia minta' },
      { key: 'C', text: 'Tidak boleh karena Advokat adalah penegak hukum, maka ia tidak seharusnya melanggar hukum' },
      { key: 'D', text: 'Wajib diminta ataupun tidak diminta oleh Advokat yang didakwa itu' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Pembelaan terhadap rekan sejawat yang didakwa pidana bersifat wajib atas permintaan atau penunjukan organisasi.',
      legalBasis: 'Pasal 5 huruf c Kode Etik Advokat Indonesia (KEAI).',
      analysis: 'Sebagai wujud kolegialitas (solidaritas profesi), advokat wajib membela teman sejawat yang menghadapi dakwaan pidana jika diminta oleh rekan tersebut atau ditugaskan oleh organisasi profesi.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 27,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Kewenangan Pemberhentian Advokat',
    question: 'Seorang Advokat dapat diberhentikan dari profesinya sebagai Advokat berdasarkan keputusan:',
    options: [
      { key: 'A', text: 'Keputusan Organisasi Advokat (melalui Dewan Kehormatan)' },
      { key: 'B', text: 'Keputusan Ketua Mahkamah Agung' },
      { key: 'C', text: 'Keputusan Ketua Pengadilan Tinggi' },
      { key: 'D', text: 'Semua benar' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Kewenangan memecat atau memberhentikan advokat sepenuhnya berada di tangan Organisasi Advokat melalui Dewan Kehormatan.',
      legalBasis: 'Pasal 9 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Sebagai profesi mandiri, tindakan pemberhentian advokat dilakukan oleh Organisasi Advokat melalui putusan Dewan Kehormatan, bukan oleh MA atau Pengadilan Tinggi.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 28,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Jenis Sanksi Kode Etik',
    question: 'Sanksi atas pelanggaran Kode Etik Advokat Indonesia berupa:',
    options: [
      { key: 'A', text: 'Teguran, peringatan keras atau pemecatan keanggotaan dari organisasi Advokat' },
      { key: 'B', text: 'Peringatan biasa, peringatan keras, pemecatan sementara untuk waktu tertentu atau pemecatan dari keanggotaan organisasi Advokat' },
      { key: 'C', text: 'Teguran, skorsing atau pemecatan dari keanggotaan organisasi profesi' },
      { key: 'D', text: 'Teguran lisan, teguran tertulis, pemecatan sementara untuk waktu tertentu atau pemecatan dari keanggotaan organisasi' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Empat jenis sanksi KEAI: Peringatan biasa, peringatan keras, pemecatan sementara (skorsing), dan pemecatan tetap.',
      legalBasis: 'Pasal 16 Kode Etik Advokat Indonesia (KEAI) jo. Pasal 7 ayat (1) UU Advokat.',
      analysis: 'Bab VIII Pasal 16 KEAI mengatur secara limitatif sanksi: a. Peringatan Biasa; b. Peringatan Keras; c. Pemberhentian Sementara untuk waktu tertentu; d. Pemecatan dari Keanggotaan Organisasi Advokat.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 29,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Pengawasan Dewan Kehormatan',
    question: 'Siapa yang berwenang memeriksa dan mengadili perkara pelanggaran Kode Etik yang dilakukan oleh seorang Advokat:',
    options: [
      { key: 'A', text: 'Teman sejawat' },
      { key: 'B', text: 'Mahkamah Konstitusi' },
      { key: 'C', text: 'Mahkamah Agung' },
      { key: 'D', text: 'Dewan Kehormatan Organisasi Advokat' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Dewan Kehormatan Organisasi Advokat berwenang memeriksa dan mengadili perkara etik.',
      legalBasis: 'Pasal 26 ayat (5) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Lembaga peradilan umum tidak mengadili pelanggaran etik profesi advokat. Penegakan disiplin etik adalah domain eksklusif Dewan Kehormatan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 30,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Definisi Klien',
    question: 'Meliputi siapa saja klien Advokat itu menurut ketentuan UU Advokat:',
    options: [
      { key: 'A', text: 'Orang perorangan' },
      { key: 'B', text: 'Badan hukum' },
      { key: 'C', text: 'Lembaga lain yang memerlukan jasa Advokat' },
      { key: 'D', text: 'Ketiga pernyataan (A, B, C) adalah benar' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Klien mencakup orang perorangan, badan hukum, maupun lembaga lain penerima jasa hukum.',
      legalBasis: 'Pasal 1 angka 3 UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pasal 1 angka 3 UU Advokat: "Klien adalah orang, badan hukum, atau lembaga lain yang menerima jasa hukum dari Advokat."'
    },
    difficulty: 'Mudah'
  },
  {
    id: 31,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Hak Menolak Perkara',
    question: 'Bolehkah seorang Advokat menolak calon kliennya:',
    options: [
      { key: 'A', text: 'Boleh, dengan pertimbangan tidak sesuai dengan keahliannya dan bertentangan dengan hati nuraninya' },
      { key: 'B', text: 'Tidak boleh, karena agama atau partai calon kliennya, lain dari yang dimiliki oleh Advokat tersebut' },
      { key: 'C', text: 'Tidak boleh, karena Advokat adalah sebagai pemegang profesi bebas' },
      { key: 'D', text: 'Boleh, karena ada klien berarti ada rezeki' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Advokat berhak menolak perkara yang tidak sesuai keahlian atau bertentangan dengan nuraninya, namun dilarang menolak atas dasar SARA/politik.',
      legalBasis: 'Pasal 3 huruf a Kode Etik Advokat Indonesia (KEAI).',
      analysis: 'Pasal 3 huruf a KEAI mengatur bahwa Advokat dapat menolak perkara karena tidak sesuai keahlian atau bertentangan dengan nurani, tetapi dilarang diskriminasi ras, agama, suku, atau politik.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 32,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Hak Retensi Advokat',
    question: 'Dalam surat kuasa sering menyebut "hak retensi", apa arti hak retensi tersebut:',
    options: [
      { key: 'A', text: 'Hak Advokat untuk menuntut upah' },
      { key: 'B', text: 'Hak menangani perkara-perkara kecil' },
      { key: 'C', text: 'Hak menahan surat-surat asli/penting milik klien' },
      { key: 'D', text: 'Hak menahan surat kuasa' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Hak retensi adalah hak menahan surat-surat atau dokumen milik klien hingga kewajiban dipenuhi.',
      legalBasis: 'Pasal 4 huruf k KEAI jo. Pasal 1812 KUHPerdata.',
      analysis: 'Hak retensi adalah hak menahan berkas atau dokumen kepunyaan klien yang berada dalam penguasaan advokat sampai klien melunasi kewajiban honorarium, dengan syarat tidak merugikan kepentingan perkara klien.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 33,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Sifat Putusan Dewan Kehormatan Daerah',
    question: 'Keputusan Majelis Dewan Kehormatan Cabang/Daerah mengenai pelanggaran Kode Etik yang dilakukan seorang Advokat adalah bersifat:',
    options: [
      { key: 'A', text: 'Final dan tidak dapat diajukan upaya banding' },
      { key: 'B', text: 'Belum final dan dapat diajukan upaya banding ke Dewan Kehormatan Pusat' },
      { key: 'C', text: 'Mengikat dan mempunyai kekuatan hukum tetap sejak diucapkan dalam sidang terbuka' },
      { key: 'D', text: 'Mempunyai kekuatan hukum tetap sejak diberitahukan kepada para pihak' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Putusan Dewan Kehormatan Daerah belum final dan dapat diajukan banding ke Dewan Kehormatan Pusat.',
      legalBasis: 'Ketentuan tentang Dewan Kehormatan dan Upaya Banding KEAI.',
      analysis: 'Putusan Dewan Kehormatan Cabang/Daerah belum bersifat final karena advokat yang bersangkutan berhak mengajukan banding kepada Dewan Kehormatan Pusat. Yang bersifat final adalah putusan Dewan Kehormatan Pusat.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 34,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Solidaritas Rekan Sejawat',
    question: 'Bagaimanakah hubungan Advokat dengan teman sejawatnya di dalam menjalankan profesinya di masyarakat:',
    options: [
      { key: 'A', text: 'Advokat harus adu argumentasi sesama advokat baru terlihat hebat' },
      { key: 'B', text: 'Advokat harus menjunjung tinggi nilai-nilai profesinya dengan dilandasi sikap saling menghormati, saling menghargai dan saling mempercayai sesama profesi' },
      { key: 'C', text: 'Advokat harus mampu bersaing, tidak perlu memikirkan teman sejawatnya' },
      { key: 'D', text: 'Teman sejawat Advokat adalah rival bisnis, sehingga tidak perlu kita pikirkan' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Hubungan antar rekan sejawat wajib dilandasi sikap saling menghormati, menghargai, dan mempercayai.',
      legalBasis: 'Bab IV Kode Etik Advokat Indonesia jo. Pasal 26 ayat (1) UU Advokat.',
      analysis: 'Bab IV KEAI menegaskan bahwa Advokat wajib memelihara rasa solidaritas sesama rekan seprofesi dengan saling menghormati, saling menghargai, dan saling mempercayai dalam menjalankan profesinya.'
    },
    difficulty: 'Mudah'
  },

  // --- HUKUM ACARA PERDATA (35 - 54) ---
  {
    id: 35,
    category: 'Hukum Acara Perdata',
    topicTag: 'Perlawanan Pihak Ketiga (Derden Verzet)',
    question: 'Apabila sebuah bangunan milik orang lain yang sedang disewakan kepada pihak penyewa dikenakan sita eksekusi, maka pihak yang berhak mengajukan bantahan terhadap sita eksekusi ini adalah...',
    options: [
      { key: 'A', text: 'Si Penyewa bangunan yang disita dengan upaya hukum Derden Verzet' },
      { key: 'B', text: 'Si Pemilik bangunan yang disita saja' },
      { key: 'C', text: 'Si Pemilik dan si Penyewa bangunan secara bersama-sama' },
      { key: 'D', text: 'Semua orang yang berkepentingan atas bangunan tersebut' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Penyewa sebagai pihak ketiga yang menguasai fisik bangunan berhak mengajukan Derden Verzet.',
      legalBasis: 'Pasal 378 Rv jo. Pasal 195 dan Pasal 206 HIR.',
      analysis: 'Derden Verzet (Perlawanan Pihak Ketiga) diatur dalam Pasal 378 Rv, di mana pihak ketiga yang haknya atas penguasaan atau penggunaan barang dirugikan oleh pelaksanaan putusan berhak mengajukan perlawanan.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 36,
    category: 'Hukum Acara Perdata',
    topicTag: 'Kompetensi Relatif Tergugat Jamak',
    question: 'Pengajuan gugatan yang ditujukan kepada lebih dari seorang tergugat yang tempat tinggalnya berbeda harus diajukan ke Pengadilan Negeri yang wilayah hukumnya meliputi domisili:',
    options: [
      { key: 'A', text: 'Salah satu tergugat secara acak' },
      { key: 'B', text: 'Di mana barang sengketa tidak bergerak berada' },
      { key: 'C', text: 'Tergugat yang tempat tinggalnya lebih dekat dengan penggugat' },
      { key: 'D', text: 'Tergugat Pertama (Tergugat I)' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Bila tergugat lebih dari satu orang dengan domisili berbeda, lazimnya diajukan pada domisili Tergugat Pertama.',
      legalBasis: 'Pasal 118 ayat (1) HIR jo. Pasal 142 ayat (1) RBg.',
      analysis: 'Berdasarkan Pasal 118 HIR dan praktik yurisprudensi tetap peradilan Indonesia, jika terdapat banyak tergugat yang tinggal di tempat berbeda, gugatan diajukan ke PN tempat tinggal salah satu tergugat, yang lazimnya adalah Tergugat I.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 37,
    category: 'Hukum Acara Perdata',
    topicTag: 'Gugatan Rekonvensi',
    question: 'Kapan gugatan rekonvensi (gugatan balik) dapat diajukan oleh Tergugat?',
    options: [
      { key: 'A', text: 'Diajukan bersamaan dengan penyampaian surat jawaban' },
      { key: 'B', text: 'Dapat diajukan kapan pun selama sidang pembuktian' },
      { key: 'C', text: 'Dapat dalam tenggang waktu 7 hari setelah putusan pengadilan negeri' },
      { key: 'D', text: 'Dapat dalam tenggang waktu 14 hari setelah putusan pengadilan negeri' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Gugatan rekonvensi wajib diajukan bersamaan dengan penyampaian jawaban terhadap gugatan konvensi.',
      legalBasis: 'Pasal 132a dan Pasal 132b HIR jo. Pasal 157 RBg.',
      analysis: 'Pasal 132a HIR menentukan bahwa gugatan balik (rekonvensi) diajukan bersama-sama dengan jawaban pertama terhadap gugatan penggugat. Jika diajukan lewat dari tahap jawaban, rekonvensi tidak dapat diterima.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 38,
    category: 'Hukum Acara Perdata',
    topicTag: 'Pencabutan Gugatan',
    question: 'Hukum Acara Perdata memberikan peluang untuk dicabutnya suatu gugatan dengan syarat bahwa pencabutan tersebut dilakukan oleh...',
    options: [
      { key: 'A', text: 'Dilakukan oleh penggugat secara sepihak, asalkan tergugat belum menyampaikan jawaban' },
      { key: 'B', text: 'Dilakukan oleh penggugat secara sepihak, meskipun tergugat telah menyampaikan jawaban' },
      { key: 'C', text: 'Dilakukan oleh penggugat atas persetujuan tergugat, meskipun tergugat belum menyampaikan jawaban' },
      { key: 'D', text: 'Dapat dilakukan oleh penggugat ataupun tergugat, meskipun perkara sedang dalam proses pemeriksaan' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Sebelum tergugat memberikan jawaban, penggugat bebas mencabut gugatan secara sepihak; sesudah ada jawaban harus atas persetujuan tergugat.',
      legalBasis: 'Pasal 271 Rv (Reglement op de Rechtsvordering) jo. Yurisprudensi MA RI.',
      analysis: 'Pasal 271 Rv mengatur bahwa sebelum jawaban disampaikan, pencabutan adalah hak sepihak penggugat. Namun setelah tergugat menjawab, pencabutan memerlukan persetujuan tergugat untuk melindungi kepentingannya.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 39,
    category: 'Hukum Acara Perdata',
    topicTag: 'Alat Bukti Perdata',
    question: 'Di bawah ini adalah alat-alat bukti yang dikenal dalam hukum acara perdata kecuali.....',
    options: [
      { key: 'A', text: 'Bukti surat' },
      { key: 'B', text: 'Persangkaan' },
      { key: 'C', text: 'Petunjuk' },
      { key: 'D', text: 'Pengakuan' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Petunjuk adalah alat bukti dalam hukum acara pidana (KUHAP), bukan hukum acara perdata.',
      legalBasis: 'Pasal 1866 KUHPerdata jo. Pasal 164 HIR jo. Pasal 284 RBg.',
      analysis: 'Alat bukti sah perkara perdata hanya terdiri dari 5: 1. Surat, 2. Saksi, 3. Persangkaan, 4. Pengakuan, 5. Sumpah. Bukti "Petunjuk" hanya dikenal dalam Pasal 184 KUHAP (pidana).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 40,
    category: 'Hukum Acara Perdata',
    topicTag: 'Putusan Verstek',
    question: 'Dalam hal pihak tergugat tidak datang menghadiri sidang tanpa alasan yang sah meskipun dipanggil secara patut maka Hakim Pengadilan Perdata dapat menjatuhkan.....',
    options: [
      { key: 'A', text: 'Putusan sela' },
      { key: 'B', text: 'Putusan verstek' },
      { key: 'C', text: 'Putusan verzet' },
      { key: 'D', text: 'Putusan gugur' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Ketidakhadiran tergugat tanpa alasan sah memicu dijatuhkannya putusan verstek.',
      legalBasis: 'Pasal 125 ayat (1) HIR jo. Pasal 149 RBg.',
      analysis: 'Pasal 125 ayat (1) HIR mengatur bahwa apabila tergugat tidak datang menghadap pada hari yang ditentukan dan tidak menyuruh wakilnya, maka perkara dapat diputus secara verstek (tanpa hadirnya tergugat).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 41,
    category: 'Hukum Acara Perdata',
    topicTag: 'Putusan Serta Merta',
    question: 'Dalam hukum acara perdata dikenal Putusan Serta Merta (uitvoerbaar bij voorraad) dan tata caranya selain dalam HIR, juga diatur dalam...',
    options: [
      { key: 'A', text: 'SEMA Nomor 1 Tahun 2000' },
      { key: 'B', text: 'SEMA Nomor 3 Tahun 2000' },
      { key: 'C', text: 'SEMA Nomor 3 Tahun 2002' },
      { key: 'D', text: 'SEMA Nomor 3 Tahun 2003' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Pembatasan dan tata cara putusan serta merta diatur ketat dalam SEMA No. 3 Tahun 2000.',
      legalBasis: 'SEMA No. 3 Tahun 2000 jo. SEMA No. 4 Tahun 2001 jo. Pasal 180 HIR.',
      analysis: 'Putusan serta merta (dieksekusi mendahului banding/kasasi) dibatasi ketat oleh Mahkamah Agung melalui SEMA No. 3 Tahun 2000 agar tidak menimbulkan kerugian yang tidak dapat dipulihkan.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 42,
    category: 'Hukum Acara Perdata',
    topicTag: 'Sifat Putusan Condemnatoir',
    question: 'Putusan yang amar putusannya adalah menghukum salah satu pihak yang berperkara untuk melakukan suatu prestasi disebut...',
    options: [
      { key: 'A', text: 'Putusan deklaratoir' },
      { key: 'B', text: 'Putusan konstitutif' },
      { key: 'C', text: 'Putusan condemnatoir' },
      { key: 'D', text: 'Putusan verstek' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Putusan condemnatoir adalah putusan yang bersifat menghukum pihak yang kalah untuk memenuhi prestasi.',
      legalBasis: 'Doktrin Hukum Acara Perdata jo. Yurisprudensi Mahkamah Agung RI.',
      analysis: 'Putusan deklaratoir hanya menegaskan status hak; konstitutif menciptakan/meniadakan keadaan hukum; sedangkan condemnatoir menghukum tergugat membayar, menyerahkan barang, atau mengosongkan tanah.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 43,
    category: 'Hukum Acara Perdata',
    topicTag: 'Tenggang Waktu Banding Perdata',
    question: 'Jika suatu perkara perdata telah diputus dan diucapkan dalam sidang pada tanggal 11 November 2008 yang dihadiri oleh para pihak, maka tanggal berapakah batas akhir pengajuan permohonan banding:',
    options: [
      { key: 'A', text: 'Tanggal 17 November 2008' },
      { key: 'B', text: 'Tanggal 18 November 2008' },
      { key: 'C', text: 'Tanggal 24 November 2008' },
      { key: 'D', text: 'Tanggal 25 November 2008' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Permohonan banding diajukan 14 hari terhitung mulai hari berikutnya setelah putusan diucapkan.',
      legalBasis: 'Pasal 7 ayat (1) UU No. 20 Tahun 1947 tentang Peradilan Ulangan di Jawa dan Madura.',
      analysis: 'Hari pertama dihitung mulai 12 November 2008. Hari ke-14 jatuh tepat pada tanggal 25 November 2008. Lewat dari 14 hari, hak banding gugur dan putusan berkekuatan hukum tetap.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 44,
    category: 'Hukum Acara Perdata',
    topicTag: 'Actio Pauliana',
    question: 'Yang dimaksud dengan "Actio Pauliana" dalam Pasal 1341 KUHPerdata adalah....',
    options: [
      { key: 'A', text: 'Bahwa debitur dalam keadaan tertentu dapat membatalkan kewenangan dari perbuatan kreditur.' },
      { key: 'B', text: 'Bahwa kreditur dalam keadaan tertentu dapat menuntut pembatalan perbuatan hukum debitur yang merugikan kreditur.' },
      { key: 'C', text: 'Kedua jawaban A dan B benar.' },
      { key: 'D', text: 'Semua jawaban salah.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Actio Pauliana adalah hak kreditur membatalkan perbuatan debitur yang beriktikad buruk merugikan kreditur.',
      legalBasis: 'Pasal 1341 KUHPerdata.',
      analysis: 'Pasal 1341 KUHPerdata memberikan hak gugat kepada kreditur untuk menuntut pembatalan segala perbuatan yang tidak diwajibkan yang dilakukan debitur yang merugikan piutang kreditur.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 45,
    category: 'Hukum Acara Perdata',
    topicTag: 'Unsur Wanprestasi',
    question: 'Bentuk-bentuk wanprestasi (ingkar janji) menurut hukum perdata adalah....',
    options: [
      { key: 'A', text: 'Debitur yang tidak memenuhi kewajibannya atau terlambat memenuhi kewajibannya.' },
      { key: 'B', text: 'Debitur yang memenuhi kewajibannya tetapi tidak seperti yang telah diperjanjikan.' },
      { key: 'C', text: 'A dan B benar.' },
      { key: 'D', text: 'A dan B salah.' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Wanprestasi mencakup tidak berprestasi, terlambat berprestasi, atau berprestasi keliru/cacat.',
      legalBasis: 'Pasal 1238 & Pasal 1243 KUHPerdata.',
      analysis: 'Doktrin Subekti merinci 4 wujud wanprestasi: 1. Tidak melakukan apa yang disanggupi, 2. Melaksanakan apa yang dijanjikan tapi terlambat, 3. Melaksanakan apa yang dijanjikan tapi tidak sebagaimana mestinya, 4. Melakukan sesuatu yang menurut perjanjian dilarang.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 46,
    category: 'Hukum Acara Perdata',
    topicTag: 'Legitieme Portie (Bagian Mutlak)',
    question: 'Suatu peninggalan tertentu dari harta peninggalan yang tidak dapat dihapuskan oleh orang yang meninggalkan warisan terhadap ahli waris garis lurus disebut....',
    options: [
      { key: 'A', text: 'Fidei Commis' },
      { key: 'B', text: 'Legitieme Portie' },
      { key: 'C', text: 'Erfstelling' },
      { key: 'D', text: 'A, B, dan C salah' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Legitieme Portie adalah bagian mutlak ahli waris dalam garis lurus yang tidak boleh dilanggar oleh surat wasiat.',
      legalBasis: 'Pasal 913 sampai dengan Pasal 929 KUHPerdata.',
      analysis: 'Pasal 913 KUHPerdata mendefinisikan Legitieme Portie sebagai bagian dari harta peninggalan yang harus diberikan kepada ahli waris dalam garis lurus menurut undang-undang, yang tidak dapat dikurangi oleh hibah atau wasiat pewaris.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 47,
    category: 'Hukum Acara Perdata',
    topicTag: 'Upaya Hukum Terhadap Verstek',
    question: 'Terhadap putusan Verstek dapat ditempuh upaya hukum, berupa:',
    options: [
      { key: 'A', text: 'Banding' },
      { key: 'B', text: 'Perlawanan / Verzet' },
      { key: 'C', text: 'Kasasi' },
      { key: 'D', text: 'Peninjauan Kembali' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Upaya hukum khas tergugat terhadap putusan verstek adalah perlawanan (verzet).',
      legalBasis: 'Pasal 129 HIR jo. Pasal 153 RBg.',
      analysis: 'Berdasarkan Pasal 129 ayat (1) HIR, tergugat yang dijatuhi putusan verstek berhak mengajukan verzet dalam tenggang waktu 14 hari.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 48,
    category: 'Hukum Acara Perdata',
    topicTag: 'Judex Factie vs Judex Juris',
    question: 'Hakim yang memeriksa fakta-fakta, alat bukti, dan menilai pembuktian para pihak disebut:',
    options: [
      { key: 'A', text: 'Judex Factie' },
      { key: 'B', text: 'Judex Juris' },
      { key: 'C', text: 'Hakim Pengadilan Negeri saja' },
      { key: 'D', text: 'Hakim Pengadilan Tinggi saja' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Judex Factie adalah hakim pemeriksa fakta (Pengadilan Negeri dan Pengadilan Tinggi).',
      legalBasis: 'UU No. 14 Tahun 1985 jo. UU No. 48 Tahun 2009 tentang Kekuasaan Kehakiman.',
      analysis: 'Pengadilan Negeri dan Pengadilan Tinggi bertindak sebagai Judex Factie yang memeriksa duduk perkara dan bukti. Sedangkan Mahkamah Agung di tingkat kasasi bertindak sebagai Judex Juris yang menguji penerapan hukumnya saja.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 49,
    category: 'Hukum Acara Perdata',
    topicTag: 'Intervensi Voeging',
    question: 'Jika dalam suatu perkara yang sedang berlangsung terdapat pihak ketiga yang masuk menggabungkan diri untuk membantu salah satu pihak (penggugat atau tergugat), maka bentuk intervensi ini disebut....',
    options: [
      { key: 'A', text: 'Tussenkomst (Menengahi)' },
      { key: 'B', text: 'Voeging (Menyertai)' },
      { key: 'C', text: 'Derden Verzet' },
      { key: 'D', text: 'Vrijwaring' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Voeging adalah keikutsertaan pihak ketiga yang bergabung memihak salah satu pihak.',
      legalBasis: 'Pasal 279 sampai Pasal 282 Rv.',
      analysis: 'Voeging berarti pihak ketiga memihak salah satu pihak yang berperkara. Jika pihak ketiga masuk memperjuangkan kepentingannya sendiri melawan kedua pihak, disebut Tussenkomst. Jika ditarik untuk menanggung, disebut Vrijwaring.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 50,
    category: 'Hukum Acara Perdata',
    topicTag: 'Perdamaian di Persidangan',
    question: 'Dalam menghadapi suatu perkara perdata, hakim diberikan kewajiban untuk mengupayakan perdamaian antara para pihak. Pasal berapakah dalam HIR yang mengatur tentang perdamaian ini....',
    options: [
      { key: 'A', text: 'Pasal 18 HIR' },
      { key: 'B', text: 'Pasal 130 HIR' },
      { key: 'C', text: 'Pasal 132 HIR' },
      { key: 'D', text: 'Pasal 133 HIR' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Kewajiban hakim mengupayakan perdamaian diatur dalam Pasal 130 HIR jo. PERMA 1/2016.',
      legalBasis: 'Pasal 130 HIR jo. Pasal 154 RBg jo. PERMA No. 1 Tahun 2016.',
      analysis: 'Pasal 130 HIR mewajibkan hakim pada hari sidang pertama mengupayakan perdamaian. Jika tercapai akta perdamaian (acte van dading), ia memiliki kekuatan putusan inkracht berkekuatan eksekutorial.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 51,
    category: 'Hukum Acara Perdata',
    topicTag: 'Susunan Alat Bukti Perdata',
    question: 'Berdasarkan Pasal 164 HIR/284 RBg, alat-alat bukti yang sah dalam hukum acara perdata terdiri dari....',
    options: [
      { key: 'A', text: 'Alat Bukti Surat, Saksi, Pengetahuan Hakim, Keyakinan Hakim dan Sumpah' },
      { key: 'B', text: 'Alat Bukti Surat, Saksi, Yurisprudensi, Keyakinan Hakim dan Sumpah' },
      { key: 'C', text: 'Alat Bukti Surat, Saksi, Persangkaan, Keyakinan Hakim dan Sumpah' },
      { key: 'D', text: 'Alat Bukti Surat, Saksi, Persangkaan, Pengakuan dan Sumpah' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Urutan 5 alat bukti perdata: Surat, Saksi, Persangkaan, Pengakuan, Sumpah.',
      legalBasis: 'Pasal 164 HIR jo. Pasal 284 RBg jo. Pasal 1866 KUHPerdata.',
      analysis: 'Alat bukti perdata tidak mengenal keyakinan hakim (keyakinan hakim adalah syarat pemidanaan dalam KUHAP). Bukti perdata limitatif pada 5 unsur opsi D.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 52,
    category: 'Hukum Acara Perdata',
    topicTag: 'Kasus Wanprestasi & Rekonvensi',
    question: 'Amir menggugat Budi agar Budi segera menyerahkan tanah yang dibeli Amir. Namun Amir sendiri belum melunasi pembayaran harga tanah tersebut. Untuk menuntut pelunasan pembayaran dalam perkara tersebut, tindakan hukum yang tepat bagi Budi adalah....',
    options: [
      { key: 'A', text: 'Budi dapat melakukan upaya derden verzet' },
      { key: 'B', text: 'Budi dapat mengajukan gugatan rekonvensi terhadap Amir' },
      { key: 'C', text: 'Budi tidak dapat melakukan upaya apapun sampai putusan selesai' },
      { key: 'D', text: 'Budi wajib mengajukan gugatan baru dan terpisah' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Tergugat dapat menuntut haknya kembali melalui gugatan rekonvensi dalam perkara yang sama.',
      legalBasis: 'Pasal 132a HIR jo. Pasal 157 RBg.',
      analysis: 'Melalui gugatan rekonvensi, tergugat Budi dapat meminta majelis hakim menghukum Amir melunasi sisa pembelian tanah, diperiksa dan diputus serentak dalam satu putusan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 53,
    category: 'Hukum Acara Perdata',
    topicTag: 'Eksepsi Kompetensi Relatif',
    question: 'Eksepsi mengenai tidak berwenangnya pengadilan negeri untuk mengadili perkara perdata berkaitan dengan wilayah kekuasaan pengadilan disebut....',
    options: [
      { key: 'A', text: 'Eksepsi kewenangan absolut' },
      { key: 'B', text: 'Eksepsi dilatoir' },
      { key: 'C', text: 'Eksepsi kompetensi relatif' },
      { key: 'D', text: 'Eksepsi peremptoir' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Kewenangan berdasarkan wilayah hukum/geografis disebut kompetensi relatif.',
      legalBasis: 'Pasal 118 ayat (1) HIR jo. Pasal 142 RBg.',
      analysis: 'Kompetensi absolut menyangkut pembagian lingkungan peradilan (misal PN vs PA vs PTUN). Sedangkan wilayah pengadilan antar sesama PN adalah kompetensi relatif.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 54,
    category: 'Hukum Acara Perdata',
    topicTag: 'Dasar Surat Gugatan',
    question: 'Tata cara pengajuan gugatan perdata tertulis diatur dalam:',
    options: [
      { key: 'A', text: 'Pasal 118 HIR / 142 RBg' },
      { key: 'B', text: 'Pasal 122 HIR / 144 RBg' },
      { key: 'C', text: 'Pasal 123 HIR / 142 RBg' },
      { key: 'D', text: 'Pasal 118 HIR / 143 RBg' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Pengajuan gugatan perdata secara tertulis diatur dalam Pasal 118 HIR / 142 RBg.',
      legalBasis: 'Pasal 118 ayat (1) HIR jo. Pasal 142 ayat (1) RBg.',
      analysis: 'Gugatan perdata didaftarkan kepada Ketua Pengadilan Negeri yang berwenang menurut tata cara yang diatur dalam Pasal 118 HIR atau Pasal 142 RBg.'
    },
    difficulty: 'Mudah'
  },

  // --- HUKUM PIDANA & HUKUM ACARA PIDANA (55 - 74) ---
  {
    id: 55,
    category: 'Hukum Acara Pidana',
    topicTag: 'Asas Legalitas & Non-Retroaktif',
    question: 'Budi melakukan perbuatan pidana pada bulan Februari 2026. Jaksa menuntut Budi berdasarkan ketentuan pidana yang baru berlaku setelah perbuatan tersebut dilakukan. Asas hukum yang tepat adalah....',
    options: [
      { key: 'A', text: 'Peraturan pidana baru dapat berlaku surut demi kepentingan negara.' },
      { key: 'B', text: 'Peraturan pidana hanya berlaku terhadap WNI.' },
      { key: 'C', text: 'Tidak seorang pun dapat dipidana berdasarkan aturan yang berlaku setelah perbuatan dilakukan (Non-retroaktif).' },
      { key: 'D', text: 'Hakim bebas menerapkan hukum yang dianggap adil.' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Asas legalitas melarang pemberlakuan surut hukum pidana (nullum delictum nulla poena sine praevia lege poenali).',
      legalBasis: 'Pasal 1 ayat (1) KUHP jo. Pasal 28I ayat (1) UUD 1945.',
      analysis: 'Tiada suatu perbuatan dapat dipidana kecuali berdasarkan kekuatan aturan pidana dalam peraturan perundang-undangan yang telah ada sebelum perbuatan dilakukan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 56,
    category: 'Hukum Acara Pidana',
    topicTag: 'Percobaan Tindak Pidana (Poging)',
    question: 'Andi berniat membunuh Yoko dengan racun. Racun telah dimasukkan ke minuman, tetapi belum diminum karena diketahui oleh pelayan. Perbuatan Andi termasuk....',
    options: [
      { key: 'A', text: 'Persiapan' },
      { key: 'B', text: 'Percobaan tindak pidana (Poging)' },
      { key: 'C', text: 'Turut serta' },
      { key: 'D', text: 'Pembantuan' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Pelaksanaan telah dimulai namun terhalang bukan karena kehendak sendiri adalah percobaan.',
      legalBasis: 'Pasal 53 ayat (1) KUHP.',
      analysis: 'Percobaan melakukan kejahatan dipidana apabila niat telah ternyata dari permulaan pelaksanaan dan pelaksanaan itu tidak selesai bukan semata-mata karena kehendak pelaku.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 57,
    category: 'Hukum Acara Pidana',
    topicTag: 'Penyertaan (Doen Pleger)',
    question: 'Toni menyuruh Neymar mencuri kendaraan dengan memberikan seluruh rencana, sedangkan Toni sendiri tidak berada di lokasi. Status hukum Toni adalah....',
    options: [
      { key: 'A', text: 'Pembantu' },
      { key: 'B', text: 'Pelaku tunggal' },
      { key: 'C', text: 'Orang yang menyuruh melakukan (Doen Pleger)' },
      { key: 'D', text: 'Saksi' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Pihak yang menyuruh orang lain melakukan tindak pidana dikualifikasikan sebagai Doen Pleger.',
      legalBasis: 'Pasal 55 ayat (1) ke-1 KUHP.',
      analysis: 'Dipidana sebagai pelaku tindak pidana mereka yang melakukan (pleger), yang menyuruh melakukan (doen pleger), atau turut serta melakukan (medepleger).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 58,
    category: 'Hukum Acara Pidana',
    topicTag: 'UU Tindak Pidana Korupsi',
    question: 'Pengaturan hukum utama mengenai tindak pidana korupsi di Indonesia saat ini diatur dalam....',
    options: [
      { key: 'A', text: 'UU No. 31 Tahun 1971' },
      { key: 'B', text: 'UU No. 14 Tahun 1985' },
      { key: 'C', text: 'UU No. 5 Tahun 1999' },
      { key: 'D', text: 'UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Dasar hukum Tipikor adalah UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001.',
      legalBasis: 'UU No. 31 Tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi.',
      analysis: 'UU No. 31 Tahun 1999 menggantikan UU 31/1971 dan kemudian diperbarui serta diperluas rumusannya melalui UU No. 20 Tahun 2001.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 59,
    category: 'Hukum Acara Pidana',
    topicTag: 'Tujuan Penangkapan',
    question: 'Dalam penyidikan, penyidik melakukan penangkapan terhadap tersangka. Tujuan utama penangkapan adalah....',
    options: [
      { key: 'A', text: 'Memberikan hukuman awal' },
      { key: 'B', text: 'Mengganti pidana penjara' },
      { key: 'C', text: 'Kepentingan penyidikan sesuai syarat undang-undang' },
      { key: 'D', text: 'Memaksa tersangka mengakui perbuatan' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Penangkapan adalah tindakan pengekangan sementara guna kepentingan penyidikan, bukan hukuman.',
      legalBasis: 'Pasal 1 angka 20 jo. Pasal 17 KUHAP.',
      analysis: 'Penangkapan hanya dapat dilakukan terhadap orang yang diduga keras melakukan tindak pidana berdasarkan bukti permulaan yang cukup, guna kepentingan penyidikan atau penuntutan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 60,
    category: 'Hukum Acara Pidana',
    topicTag: 'Hak Bantuan Hukum di Penyidikan',
    question: 'Pada saat pemeriksaan penyidikan, tersangka meminta didampingi advokat. Tindakan penyidik seharusnya....',
    options: [
      { key: 'A', text: 'Menolak permohonan tersebut' },
      { key: 'B', text: 'Menunda tanpa alasan yang jelas' },
      { key: 'C', text: 'Memberikan kesempatan memperoleh bantuan hukum' },
      { key: 'D', text: 'Menunggu persetujuan jaksa penuntut umum' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Penyidik wajib memberikan akses dan memberitahukan hak bantuan hukum advokat.',
      legalBasis: 'Pasal 54 KUHAP jo. Pasal 114 KUHAP jo. UU No. 18 Tahun 2003.',
      analysis: 'Tersangka berhak mendapatkan bantuan hukum pada setiap tingkat pemeriksaan. Jika tersangka menolak, penolakan tersebut wajib dibuat dalam Berita Acara tertulis.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 61,
    category: 'Hukum Acara Pidana',
    topicTag: 'Pertanggungjawaban Pidana Korporasi',
    question: 'PT XYZ melakukan pencemaran lingkungan hidup melalui kebijakan direksi. Menurut KUHP Nasional (UU No. 1 Tahun 2023)....',
    options: [
      { key: 'A', text: 'Hanya direktur yang dapat dipidana' },
      { key: 'B', text: 'Hanya pegawai lapangan yang dipidana' },
      { key: 'C', text: 'Korporasi dapat dimintai pertanggungjawaban pidana' },
      { key: 'D', text: 'Korporasi tidak dapat dipidana' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'KUHP Nasional mengatur secara tegas pertanggungjawaban pidana korporasi.',
      legalBasis: 'Pasal 47 ayat (1) dan Pasal 48 ayat (1) UU No. 1 Tahun 2023 (KUHP Nasional).',
      analysis: 'Tindak pidana oleh korporasi dapat dijatuhkan kepada korporasi itu sendiri, pengurus yang berkedudukan fungsional, pengendali, maupun pemilik manfaat (beneficial owner).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 62,
    category: 'Hukum Acara Pidana',
    topicTag: 'Pembelaan Terpaksa (Noodweer)',
    question: 'Zidane memukul Materazzi untuk mempertahankan diri dari serangan pisau yang sedang berlangsung secara seketika. Perbuatan Zidane merupakan....',
    options: [
      { key: 'A', text: 'Penganiayaan biasa' },
      { key: 'B', text: 'Pembelaan terpaksa yang melampaui batas (Noodweer Exces)' },
      { key: 'C', text: 'Pembelaan terpaksa (Noodweer)' },
      { key: 'D', text: 'Percobaan pembunuhan' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Pembelaan seketika dari serangan melawan hukum yang proporsional adalah Noodweer (alasan pembenar).',
      legalBasis: 'Pasal 34 UU No. 1 Tahun 2023 (KUHP baru) / Pasal 49 ayat (1) KUHP lama.',
      analysis: 'Pembelaan terpaksa menghapus sifat melawan hukum perbuatan jika dilakukan untuk membela diri atau orang lain dari serangan melawan hukum yang seketika.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 63,
    category: 'Hukum Acara Pidana',
    topicTag: 'Sistem Peradilan Pidana Anak',
    question: 'Dasar hukum yang mengatur tentang sistem peradilan pidana anak saat ini adalah...',
    options: [
      { key: 'A', text: 'Undang-Undang Nomor 3 Tahun 1997' },
      { key: 'B', text: 'Undang-Undang Nomor 11 Tahun 2012' },
      { key: 'C', text: 'Undang-Undang Nomor 23 Tahun 2002' },
      { key: 'D', text: 'Undang-Undang Nomor 35 Tahun 2014' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Sistem Peradilan Pidana Anak diatur dalam UU No. 11 Tahun 2012 (SPPA).',
      legalBasis: 'Undang-Undang No. 11 Tahun 2012 tentang Sistem Peradilan Pidana Anak.',
      analysis: 'UU No. 11 Tahun 2012 mencabut UU No. 3 Tahun 1997 dan mengedepankan pendekatan keadilan restoratif (restorative justice) serta diversi bagi anak yang berhadapan dengan hukum.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 64,
    category: 'Hukum Acara Pidana',
    topicTag: 'Tujuan Pemidanaan Modern',
    question: 'Menurut KUHP Nasional, tujuan pemidanaan bukan semata-mata pembalasan. Tujuan pemidanaan meliputi....',
    options: [
      { key: 'A', text: 'Balas dendam negara' },
      { key: 'B', text: 'Memiskinkan pelaku' },
      { key: 'C', text: 'Mencegah tindak pidana, membina pelaku, memulihkan keseimbangan, dan mewujudkan keadilan' },
      { key: 'D', text: 'Menghukum seberat-beratnya' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Paradigma pemidanaan KUHP Nasional bergeser ke arah rehabilitatif, edukatif, dan keadilan restoratif.',
      legalBasis: 'Pasal 51 dan Pasal 54 ayat (2) UU No. 1 Tahun 2023 tentang KUHP.',
      analysis: 'Pemidanaan bertujuan mencegah tindak pidana, merehabilitasi terpidana, menyelesaikan konflik, dan memulihkan keseimbangan masyarakat, bukan untuk merendahkan martabat manusia.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 65,
    category: 'Hukum Acara Pidana',
    topicTag: 'Jenis Pidana Pokok KUHP Baru',
    question: 'Menurut Pasal 64 & 65 KUHP Nasional (UU No. 1 Tahun 2023), pidana pokok meliputi....',
    options: [
      { key: 'A', text: 'Denda, kerja sosial, penjara' },
      { key: 'B', text: 'Penjara, tutupan, pengawasan' },
      { key: 'C', text: 'Penjara, denda, tutupan, pengawasan, dan kerja sosial' },
      { key: 'D', text: 'Semua jawaban benar' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Pidana pokok terdiri dari pidana penjara, tutupan, pengawasan, denda, dan kerja sosial.',
      legalBasis: 'Pasal 65 UU No. 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana.',
      analysis: 'KUHP Nasional memperkenalkan bentuk sanksi baru yang humanis seperti pidana pengawasan dan pidana kerja sosial, sementara pidana mati dialihkan menjadi pidana yang bersifat khusus (alternatif).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 66,
    category: 'Hukum Acara Pidana',
    topicTag: 'Alasan Pemaaf',
    question: 'Dalam hukum pidana, penerapan alasan pemaaf (schuldintregingsgrond) mengakibatkan....',
    options: [
      { key: 'A', text: 'Perbuatan menjadi halal/dibenarkan secara hukum' },
      { key: 'B', text: 'Pelaku tidak dipidana walaupun perbuatannya tetap melawan hukum' },
      { key: 'C', text: 'Barang bukti dikembalikan kepada pelaku' },
      { key: 'D', text: 'Gugatan gugur demi hukum' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Alasan pemaaf menghapus kesalahan pelaku (subjektif), namun perbuatannya tetap bersifat melawan hukum.',
      legalBasis: 'Pasal 38, 40, dan 43 UU No. 1 Tahun 2023 (KUHP baru).',
      analysis: 'Perbedaannya: Alasan pembenar menghapuskan sifat melawan hukumnya perbuatan (perbuatan jadi legal), sedangkan alasan pemaaf memaafkan si pembuat karena kondisi tertentu (misal daya paksa atau gangguan jiwa).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 67,
    category: 'Hukum Acara Pidana',
    topicTag: 'Yang Bukan Tujuan Pemidanaan',
    question: 'Yang BUKAN merupakan tujuan pemidanaan menurut Pasal 51 KUHP Baru adalah....',
    options: [
      { key: 'A', text: 'Mencegah tindak pidana' },
      { key: 'B', text: 'Memasyarakatkan pelaku' },
      { key: 'C', text: 'Memulihkan keseimbangan masyarakat' },
      { key: 'D', text: 'Membalas dendam kepada pelaku' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Pembalasan dendam (retributive) murni secara tegas ditolak oleh konsep KUHP modern.',
      legalBasis: 'Pasal 51 dan Pasal 54 ayat (2) UU No. 1 Tahun 2023.',
      analysis: 'Pasal 54 ayat (2) KUHP Baru menegaskan: "Pemidanaan tidak dimaksudkan untuk menderita dan merendahkan martabat manusia." Balas dendam bukan tujuan pemidanaan Indonesia.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 68,
    category: 'Hukum Acara Pidana',
    topicTag: 'Pengakuan Bersalah (Plea Bargain)',
    question: 'Pengakuan Bersalah (Plea Bargain) menurut pembaruan hukum acara pidana hanya dapat diterapkan apabila....',
    options: [
      { key: 'A', text: 'Berlaku untuk semua tindak pidana termasuk tindak pidana berat' },
      { key: 'B', text: 'Terdakwa baru pertama kali melakukan tindak pidana, ancaman pidana penjara paling lama 5 tahun, dan/atau bersedia membayar ganti rugi/restitusi' },
      { key: 'C', text: 'Hanya berlaku bagi perkara korupsi di atas 1 miliar' },
      { key: 'D', text: 'Hanya dapat dilakukan setelah putusan inkracht' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Plea bargain mensyaratkan status pelaku pertama kali, ancaman pidana maksimal 5 tahun, dan kesediaan membayar restitusi.',
      legalBasis: 'Ketentuan Pengakuan Bersalah / Asas Pembaharuan KUHAP.',
      analysis: 'Plea bargain bertujuan memangkas beban peradilan pidana dengan syarat limitatif agar tidak disalahgunakan pada tindak pidana berat.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 69,
    category: 'Hukum Acara Pidana',
    topicTag: 'Sistem Peradilan Pidana Terpadu',
    question: 'Koordinasi antara Penyidik dan Penuntut Umum dalam penanganan perkara pidana dilaksanakan dalam kerangka....',
    options: [
      { key: 'A', text: 'Arbitrase' },
      { key: 'B', text: 'Sistem Peradilan Pidana Terpadu (Integrated Criminal Justice System)' },
      { key: 'C', text: 'Mediasi Perdata' },
      { key: 'D', text: 'Peradilan Militer' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Penyidik dan Penuntut Umum berkoordinasi dalam sistem peradilan pidana terpadu.',
      legalBasis: 'Asas Integrated Criminal Justice System dalam KUHAP.',
      analysis: 'Sistem peradilan pidana terpadu mengharuskan sinergi fungsional antara kepolisian, kejaksaan, pengadilan, dan lembaga pemasyarakatan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 70,
    category: 'Hukum Acara Pidana',
    topicTag: 'Keadilan Restoratif di Penyidikan',
    question: 'Salah satu alasan penghentian penyidikan (SP3) dalam pembaruan KUHAP adalah....',
    options: [
      { key: 'A', text: 'Penyidik sedang cuti tahunan' },
      { key: 'B', text: 'Tercapainya penyelesaian perkara melalui mekanisme Keadilan Restoratif (Restorative Justice)' },
      { key: 'C', text: 'Korban berpindah domisili ke luar kota' },
      { key: 'D', text: 'Saksi berhalangan hadir' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Penyelesaian damai melalui keadilan restoratif dapat menjadi dasar penghentian penyidikan.',
      legalBasis: 'Perkap No. 8 Tahun 2021 jo. Perja No. 15 Tahun 2020 tentang Restorative Justice.',
      analysis: 'Penghentian perkara berbasis restorative justice bertujuan memulihkan korban dan masyarakat pada tindak pidana ringan atau tanpa motif jahat berat.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 71,
    category: 'Hukum Acara Pidana',
    topicTag: 'Kewajiban Memberitahu Hak Bantuan Hukum',
    question: 'Sebelum pemeriksaan penyidikan dimulai, Penyidik wajib memberitahukan kepada Tersangka mengenai....',
    options: [
      { key: 'A', text: 'Hak memilih majelis hakim' },
      { key: 'B', text: 'Hak memperoleh Bantuan Hukum atau pendampingan Advokat' },
      { key: 'C', text: 'Hak mengajukan kasasi' },
      { key: 'D', text: 'Hak meminta Peninjauan Kembali' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Penyidik wajib memberitahukan hak memperoleh bantuan hukum sebelum BAP dimulai.',
      legalBasis: 'Pasal 114 jo. Pasal 54 KUHAP.',
      analysis: 'Pemeriksaan yang melanggar kewajiban ini mengakibatkan berita acara pemeriksaan (BAP) cacat yuridis dan tidak sah dijadikan dasar pembuktian.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 72,
    category: 'Hukum Acara Pidana',
    topicTag: 'Advokat Hadapi Intimidasi Penyidik',
    question: 'Apabila Penyidik melakukan intimidasi atau mengajukan pertanyaan menjerat terhadap Tersangka saat pemeriksaan BAP, Advokat berhak....',
    options: [
      { key: 'A', text: 'Menghentikan penyidikan secara sepihak' },
      { key: 'B', text: 'Menyatakan keberatan demi melindungi hak hukum tersangka' },
      { key: 'C', text: 'Menahan penyidik di ruangan' },
      { key: 'D', text: 'Membubarkan pemeriksaan kepolisian' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Advokat berhak menyatakan keberatan jika terjadi intimidasi atau pertanyaan yang bersifat menjerat.',
      legalBasis: 'Pasal 115 ayat (1) KUHAP jo. UU No. 18 Tahun 2003.',
      analysis: 'Advokat mendampingi tersangka untuk memastikan pemeriksaan berjalan secara bebas tanpa tekanan, paksaan, atau intimidasi dari penyidik.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 73,
    category: 'Hukum Acara Pidana',
    topicTag: 'Saksi Mahkota (Crown Witness)',
    question: 'Dalam kepentingan penyidikan dan penuntutan, penegak hukum dapat menetapkan Tersangka sebagai saksi mahkota untuk....',
    options: [
      { key: 'A', text: 'Mempercepat putusan sela' },
      { key: 'B', text: 'Membantu mengungkap keterlibatan Tersangka lain dalam perkara yang sama' },
      { key: 'C', text: 'Mengurangi jumlah saksi sidang' },
      { key: 'D', text: 'Menggantikan keterangan ahli' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Saksi mahkota dihadirkan untuk membuktikan perbuatan tersangka/terdakwa lain dalam perkara splitzing.',
      legalBasis: 'Yurisprudensi Tetap MA RI No. 1986 K/Pid/1989 jo. Doktrin KUHAP.',
      analysis: 'Saksi mahkota adalah tersangka/terdakwa yang diajukan sebagai saksi bagi terdakwa lain yang bersama-sama melakukan tindak pidana karena kekurangan alat bukti lain.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 74,
    category: 'Hukum Acara Pidana',
    topicTag: 'Perlindungan Saksi & Korban',
    question: 'Setiap pelapor, pengadu, saksi, dan korban dalam tindak pidana berhak memperoleh....',
    options: [
      { key: 'A', text: 'Penghapusan pidana mutlak' },
      { key: 'B', text: 'Pelindungan fisik, psikis, dan hukum' },
      { key: 'C', text: 'Imunitas tanpa batas' },
      { key: 'D', text: 'Pengampunan grasi' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Saksi dan korban berhak memperoleh perlindungan keamanan pribadi, keluarga, dan harta bendanya.',
      legalBasis: 'UU No. 13 Tahun 2006 jo. UU No. 31 Tahun 2014 tentang Perlindungan Saksi dan Korban (LPSK).',
      analysis: 'LPSK bertugas memberikan perlindungan dan bantuan (medis/psikologis) agar saksi dan korban bebas dari ancaman saat memberikan keterangan di peradilan.'
    },
    difficulty: 'Mudah'
  },

  // --- HUKUM ACARA PERADILAN AGAMA (75 - 92) ---
  {
    id: 75,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Taklik Talak',
    question: 'Perjanjian yang diucapkan calon mempelai pria setelah akad nikah yang dicantumkan dalam Akta Nikah berupa janji talak yang digantungkan kepada suatu keadaan tertentu disebut.....',
    options: [
      { key: 'A', text: 'Khulu\'' },
      { key: 'B', text: 'Talak Bain Kubraa' },
      { key: 'C', text: 'Taklik Talak' },
      { key: 'D', text: 'Mut\'ah' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Taklik talak adalah janji talak yang digantungkan pada syarat tertentu setelah akad nikah.',
      legalBasis: 'Pasal 45–46 Kompilasi Hukum Islam (KHI).',
      analysis: 'Jika suami melanggar syarat taklik talak (misal meninggalkan 2 tahun berturut-turut atau tidak memberi nafkah wajib) dan istri tidak ridha lalu membayar iwadl ke pengadilan, gugatan cerai dapat dikabulkan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 76,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Beban Biaya Perkara Perceraian',
    question: 'Biaya perkara dalam bidang perceraian di Pengadilan Agama pada umumnya dibebankan kepada.........',
    options: [
      { key: 'A', text: 'Pihak Penggugat / Pemohon' },
      { key: 'B', text: 'Pihak yang kalah secara mutlak' },
      { key: 'C', text: 'Pihak Tergugat / Termohon saja' },
      { key: 'D', text: 'Dibagi dua sama rata' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Dalam perkara perceraian, amar putusan umumnya membebankan biaya perkara kepada Penggugat/Pemohon.',
      legalBasis: 'Pasal 89 ayat (1) UU No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.',
      analysis: 'Pasal 89 ayat (1) UU Peradilan Agama menetapkan bahwa biaya perkara dalam bidang perkawinan dibebankan kepada penggugat atau pemohon.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 77,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Nafkah Mut\'ah',
    question: 'Apakah yang dimaksud dengan Mut\'ah dalam hukum perkawinan Islam.........',
    options: [
      { key: 'A', text: 'Hak pemeliharaan anak di bawah umur' },
      { key: 'B', text: 'Hak mengasuh anak' },
      { key: 'C', text: 'Pemberian bekas suami kepada isteri yang dijatuhi talak berupa benda atau uang sebagai penghibur' },
      { key: 'D', text: 'Perceraian yang terjadi atas permintaan isteri dengan tebusan uang' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Mut\'ah adalah pemberian kenang-kenangan/penghibur dari bekas suami kepada bekas istri setelah cerai talak.',
      legalBasis: 'Pasal 1 huruf j jo. Pasal 149 huruf a Kompilasi Hukum Islam (KHI).',
      analysis: 'Bekas suami wajib memberikan mut\'ah yang layak kepada bekas istrinya, baik berupa uang atau benda, kecuali bekas istri tersebut qabla al-dukhul (belum pernah dicampuri).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 78,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Ikrar Wakaf',
    question: 'Pihak yang hendak mewakafkan tanah miliknya wajib menyatakan ikrar wakaf di hadapan.....',
    options: [
      { key: 'A', text: 'Pejabat Pembuat Akta Tanah (PPAT)' },
      { key: 'B', text: 'Pejabat Pembuat Akta Ikrar Wakaf (PPAIW)' },
      { key: 'C', text: 'Pejabat Pegawai Negeri Sipil Kecamatan' },
      { key: 'D', text: 'Kepala Desa setempat' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Ikrar wakaf wajib dinyatakan di hadapan Pejabat Pembuat Akta Ikrar Wakaf (PPAIW).',
      legalBasis: 'Pasal 17 UU No. 41 Tahun 2004 tentang Wakaf jo. PP No. 42 Tahun 2006.',
      analysis: 'PPAIW adalah pejabat berwenang yang ditunjuk oleh Menteri Agama (biasanya Kepala KUA) untuk membuat Akta Ikrar Wakaf (AIW).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 79,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Pemohon Itsbat Nikah',
    question: 'Pihak yang berhak untuk mengajukan permohonan pengesahan nikah (Itsbat Nikah) ke Pengadilan Agama adalah.........',
    options: [
      { key: 'A', text: 'Suami atau Isteri' },
      { key: 'B', text: 'Saksi Nikah saja' },
      { key: 'C', text: 'Jaksa penuntut umum' },
      { key: 'D', text: 'Penghulu KUA' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Itsbat nikah diajukan oleh suami atau istri, anak, wali nikah, atau pihak berkepentingan.',
      legalBasis: 'Pasal 7 ayat (4) Kompilasi Hukum Islam (KHI).',
      analysis: 'Permohonan itsbat nikah diajukan untuk mendapatkan penetapan sahnya perkawinan yang telah terjadi secara syariat tetapi belum tercatat di KUA.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 80,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Masa Iddah Wafat',
    question: 'Waktu tunggu (iddah) bagi seorang janda apabila perkawinan putus karena kematian suami, ditetapkan selama.........',
    options: [
      { key: 'A', text: '120 hari' },
      { key: 'B', text: '125 hari' },
      { key: 'C', text: '130 hari (4 bulan 10 hari)' },
      { key: 'D', text: '135 hari' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Masa iddah janda yang ditinggal mati suaminya adalah 130 hari (4 bulan 10 hari).',
      legalBasis: 'Pasal 153 ayat (2) huruf a KHI jo. Pasal 11 PP No. 9 Tahun 1975.',
      analysis: 'Bila perkawinan putus karena kematian, waktu tunggu ditetapkan 130 hari. Berbeda dengan cerai hidup yang masa tunggunya 3 kali suci atau 90 hari.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 81,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Sumpah Li\'an',
    question: 'Gugatan cerai diajukan atas tuduhan zina namun suami tidak dapat menghadirkan 4 saksi, sementara istri membantah tuduhan tersebut, maka hakim memerintahkan para pihak bersumpah yang disebut acara.........',
    options: [
      { key: 'A', text: 'Sumpah Pemutus' },
      { key: 'B', text: 'Li\'an' },
      { key: 'C', text: 'Islah' },
      { key: 'D', text: 'Takhayyur' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Sumpah khusus atas tuduhan zina suami-istri di pengadilan disebut sumpah Li\'an.',
      legalBasis: 'Pasal 125–128 Kompilasi Hukum Islam (KHI).',
      analysis: 'Sumpah Li\'an menyebabkan ikatan perkawinan putus untuk selama-lamanya dan anak yang dikandung tidak dinasabkan kepada suami penuduh.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 82,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Bukan Alasan Perceraian',
    question: 'Berikut ini yang BUKAN merupakan alasan sah perceraian menurut peraturan perundang-undangan di Indonesia adalah....',
    options: [
      { key: 'A', text: 'Salah satu pihak melakukan zina' },
      { key: 'B', text: 'Salah satu pihak meninggalkan pihak lain selama 2 tahun berturut-turut tanpa izin' },
      { key: 'C', text: 'Salah satu pihak melakukan kekejaman atau penganiayaan berat' },
      { key: 'D', text: 'Salah satu pihak tidak mempunyai pekerjaan tetap' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Tidak memiliki pekerjaan tetap bukan merupakan alasan perceraian yang sah dalam undang-undang.',
      legalBasis: 'Pasal 19 PP No. 9 Tahun 1975 jo. Pasal 116 KHI jo. Pasal 39 UU No. 1 Tahun 1974.',
      analysis: 'Alasan perceraian ditentukan secara limitatif (zina, mabuk/judi, meninggalkan 2 tahun, pidana 5 tahun, KDRT, cacat badan, dan pertengkaran terus-menerus/syiqaq).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 83,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Eksekusi Penetapan P3HP',
    question: 'Apakah permohonan pertolongan pembagian harta peninggalan (P3HP) di Pengadilan Agama dapat langsung dieksekusi?',
    options: [
      { key: 'A', text: 'Dapat dieksekusi langsung oleh jurusita' },
      { key: 'B', text: 'Dapat dengan syarat diajukan oleh seluruh ahli waris' },
      { key: 'C', text: 'Tidak dapat, karena produknya penetapan voluntair bukan putusan condemnatoir' },
      { key: 'D', text: 'Dapat jika disetujui BPN' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Penetapan P3HP adalah perkara voluntair yang tidak memiliki amar menghukum (condemnatoir) sehingga tidak dapat dieksekusi paksa.',
      legalBasis: 'HIR/RBg mengenai eksekusi jo. Yurisprudensi Mahkamah Agung RI.',
      analysis: 'Apabila terjadi sengketa antar ahli waris dalam pembagian harta waris, para pihak wajib mengajukan gugatan perdata kontenjius tersendiri.'
    },
    difficulty: 'Sulit'
  },
  {
    id: 84,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Domisili Cerai Gugat',
    question: 'Gugatan Cerai yang diajukan oleh Istri (Cerai Gugat) wajib diajukan di Pengadilan Agama tempat kediaman:',
    options: [
      { key: 'A', text: 'Istri (Penggugat)' },
      { key: 'B', text: 'Suami (Tergugat)' },
      { key: 'C', text: 'Orang tua Suami' },
      { key: 'D', text: 'Orang tua Istri' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Cerai gugat diajukan ke Pengadilan Agama yang mewilayahi tempat tinggal istri (penggugat).',
      legalBasis: 'Pasal 73 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama.',
      analysis: 'Sebagai perlindungan hukum bagi wanita, gugatan cerai istri diajukan di tempat kediaman istri kecuali jika istri meninggalkan tempat tinggal bersama tanpa izin suami.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 85,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Saksi Perkara Syiqaq',
    question: 'Yang dapat dijadikan sebagai saksi dalam perkara perceraian yang didasarkan pada alasan Syiqaq (perselisihan tajam terus-menerus) adalah....',
    options: [
      { key: 'A', text: 'Orang tua' },
      { key: 'B', text: 'Pembantu rumah tangga' },
      { key: 'C', text: 'Orang-orang yang dekat dengan suami atau istri' },
      { key: 'D', text: 'Semua jawaban benar' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Keluarga dan orang dekat diperbolehkan menjadi saksi dalam perkara perceraian alasan syiqaq.',
      legalBasis: 'Pasal 76 ayat (1) UU Peradilan Agama jo. Pasal 22 PP No. 9 Tahun 1975.',
      analysis: 'Pengecualian larangan saksi keluarga dekat dalam hukum acara perdata diberikan pada perkara perceraian syiqaq (hakam/keluarga terdekat yang mengetahui pertengkaran).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 86,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Berlakunya Hukum Acara Perdata Umum di PA',
    question: 'Pasal berapakah dalam UU No. 7 Tahun 1989 yang mengatur bahwa Hukum Acara Perdata yang berlaku pada Pengadilan Agama adalah hukum acara perdata yang berlaku di lingkungan Peradilan Umum:',
    options: [
      { key: 'A', text: 'Pasal 45 UU No. 7 Tahun 1989' },
      { key: 'B', text: 'Pasal 54 UU No. 7 Tahun 1989' },
      { key: 'C', text: 'Pasal 62 UU No. 7 Tahun 1989' },
      { key: 'D', text: 'Pasal 70 UU No. 7 Tahun 1989' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Pasal 54 UU Peradilan Agama menegaskan berlakunya hukum acara perdata umum di lingkungan Pengadilan Agama.',
      legalBasis: 'Pasal 54 UU No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009.',
      analysis: 'Hukum acara perdata umum (HIR/RBg) berlaku mutatis mutandis di Pengadilan Agama, kecuali ditentukan lain secara khusus dalam UU Peradilan Agama.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 87,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Kewenangan Khusus Pengadilan Agama',
    question: 'Menurut UU No. 7 Tahun 1989 yang telah diubah dengan UU No. 3 Tahun 2006, Pengadilan Agama mempunyai kewenangan memeriksa perkara....',
    options: [
      { key: 'A', text: 'Hanya bagi yang beragama Islam dalam bidang perkawinan dan jinayah' },
      { key: 'B', text: 'Perkara perdata dan pidana khusus' },
      { key: 'C', text: 'Perkara perdata menurut hukum Islam saja' },
      { key: 'D', text: 'Perkara perdata tertentu bagi orang-orang yang beragama Islam' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Kewenangan PA meliputi perkawinan, waris, wasiat, hibah, wakaf, zakat, infaq, sedekah, dan ekonomi syariah bagi yang beragama Islam.',
      legalBasis: 'Pasal 49 UU No. 3 Tahun 2006 tentang Perubahan atas UU No. 7 Tahun 1989.',
      analysis: 'Kewenangan Pengadilan Agama diperluas sejak amandemen 2006 mencakup sengketa Perbankan dan Ekonomi Syariah.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 88,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Sumber Hukum Acara PA',
    question: 'Sumber utama Hukum Acara Perdata yang masih diberlakukan dalam lingkungan Peradilan Agama ialah....',
    options: [
      { key: 'A', text: 'HIR (Jawa/Madura), RBg (luar Jawa), dan Rv' },
      { key: 'B', text: 'Hanya Kompilasi Hukum Islam' },
      { key: 'C', text: 'UU No. 20 Tahun 1947 saja' },
      { key: 'D', text: 'UU No. 2 Tahun 1986' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Sumber utama hukum acara perdata di PA adalah HIR, RBg, dan ketentuan Rv.',
      legalBasis: 'Pasal 54 UU No. 7 Tahun 1989 tentang Peradilan Agama.',
      analysis: 'Kaidah pemeriksaan persidangan di PA tetap berpijak pada HIR/RBg yang dilengkapi hukum Islam materiil (KHI) dan yurisprudensi Mahkamah Agung.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 89,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Ketentuan Lengkap Masa Iddah',
    question: 'Ketentuan masa tunggu (iddah) menurut Pasal 39 PP No. 9 Tahun 1975 juncto Pasal 153 KHI adalah....',
    options: [
      { key: 'A', text: 'Apabila putus karena kematian: 130 hari' },
      { key: 'B', text: 'Putus karena perceraian: 90 hari bagi yang masih haid' },
      { key: 'C', text: 'Dalam keadaan hamil: sampai melahirkan' },
      { key: 'D', text: 'Semua benar' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Masa iddah wafat 130 hari, cerai 90 hari, dan hamil sampai melahirkan.',
      legalBasis: 'Pasal 39 PP No. 9 Tahun 1975 jo. Pasal 153 KHI.',
      analysis: 'Semua pernyataan A, B, dan C benar merujuk ketentuan masa iddah wanita pasca putusnya perkawinan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 90,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Sita Jaminan di Pengadilan Agama',
    question: 'Tuan Budi menggugat pembagian harta bersama (gono-gini) di Pengadilan Agama dan memohonkan sita jaminan (conservatoir beslag). Apakah Pengadilan Agama berwenang meletakkan sita jaminan?',
    options: [
      { key: 'A', text: 'Pengadilan Agama tidak berwenang' },
      { key: 'B', text: 'Berwenang hanya jika ada izin dari Pengadilan Negeri' },
      { key: 'C', text: 'Pengadilan Agama berwenang melakukan sita jaminan' },
      { key: 'D', text: 'Berwenang hanya bila diajukan bersamaan dengan pidana perzinaan' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Pengadilan Agama berwenang penuh meletakkan sita jaminan dalam ranah kewenangannya.',
      legalBasis: 'Pasal 54 UU No. 7 Tahun 1989 jo. Pasal 227 HIR.',
      analysis: 'Dalam sengketa harta bersama atau warisan, Pengadilan Agama memiliki kewenangan mandiri meletakkan sita jaminan (conservatoir beslag) tanpa perlu izin Pengadilan Negeri.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 91,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Tenggang Waktu Ikrar Talak',
    question: 'Dalam perkara cerai talak yang telah inkracht, tenggang waktu yang diberikan kepada suami untuk mengikrarkan talak sebelum penetapan izin gugur adalah....',
    options: [
      { key: 'A', text: '3 bulan' },
      { key: 'B', text: '1 bulan' },
      { key: 'C', text: '6 bulan' },
      { key: 'D', text: '12 bulan' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Izin ikrar talak gugur jika tidak diucapkan dalam tempo 6 bulan sejak hari sidang ditentukan.',
      legalBasis: 'Pasal 70 ayat (6) UU No. 7 Tahun 1989 tentang Peradilan Agama.',
      analysis: 'Jika lewat waktu 6 bulan pemohon tidak datang mengucapkan ikrar talak, penetapan gugur demi hukum dan perceraian tidak dapat diajukan lagi dengan alasan yang sama.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 92,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Cerai Domisili Luar Negeri',
    question: 'Dalam gugatan cerai, jika pihak penggugat dan tergugat keduanya bertempat tinggal di luar negeri, maka gugatan cerai diajukan ke....',
    options: [
      { key: 'A', text: 'Pengadilan Agama tempat kedudukan tergugat' },
      { key: 'B', text: 'Pengadilan Agama tempat kedudukan penggugat' },
      { key: 'C', text: 'Pengadilan Agama Jakarta Pusat' },
      { key: 'D', text: 'Pengadilan Tinggi Agama' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Gugatan cerai pasangan WNI yang sama-sama di luar negeri diajukan ke Pengadilan Agama Jakarta Pusat.',
      legalBasis: 'Pasal 73 ayat (3) UU No. 7 Tahun 1989 tentang Peradilan Agama.',
      analysis: 'Pasal 73 ayat (3) menetapkan: Apabila suami dan istri sama-sama bertempat tinggal di luar negeri, gugatan diajukan kepada Pengadilan yang daerah hukumnya meliputi tempat perkawinan dilangsungkan atau kepada Pengadilan Agama Jakarta Pusat.'
    },
    difficulty: 'Sedang'
  },

  // --- HUKUM ACARA PERSELISIHAN HUBUNGAN INDUSTRIAL (PHI) (93 - 104) ---
  {
    id: 93,
    category: 'Hukum Acara PHI',
    topicTag: 'Regulasi PPHI',
    question: 'Penyelesaian perselisihan hubungan industrial pada saat ini diatur dalam:',
    options: [
      { key: 'A', text: 'Undang-Undang Nomor 2 Tahun 2004' },
      { key: 'B', text: 'Undang-Undang Nomor 4 Tahun 2004' },
      { key: 'C', text: 'Undang-Undang Nomor 2 Tahun 2002' },
      { key: 'D', text: 'Undang-Undang Nomor 4 Tahun 2002' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Penyelesaian Perselisihan Hubungan Industrial diatur dalam UU No. 2 Tahun 2004.',
      legalBasis: 'UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI).',
      analysis: 'UU No. 2 Tahun 2004 merupakan hukum formil ketenagakerjaan menggantikan mekanisme peradilan perburuhan P4D/P4P.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 94,
    category: 'Hukum Acara PHI',
    topicTag: 'Perjanjian Arbitrase PHI',
    question: 'Menurut Pasal 32 UU No. 2 Tahun 2004, kesepakatan para pihak yang berselisih dalam hubungan industrial untuk menempuh arbitrase dinyatakan tertulis dalam.....',
    options: [
      { key: 'A', text: 'Perjanjian penunjukan' },
      { key: 'B', text: 'Surat perjanjian arbitrase' },
      { key: 'C', text: 'Putusan arbitrase' },
      { key: 'D', text: 'Semua benar' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Penyelesaian melalui arbitrase wajib didasari surat perjanjian arbitrase tertulis.',
      legalBasis: 'Pasal 32 UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Surat perjanjian arbitrase dibuat para pihak yang memuat subjek, objek perselisihan, nama arbiter, dan pernyataan tunduk pada putusan arbitrase.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 95,
    category: 'Hukum Acara PHI',
    topicTag: 'Tenggang Waktu Upaya Hukum PHI',
    question: 'Tenggang waktu pengajuan kasasi terhadap putusan Pengadilan Hubungan Industrial adalah 14 hari...',
    options: [
      { key: 'A', text: 'Sejak putusan diucapkan apabila para pihak hadir' },
      { key: 'B', text: 'Sejak diberitahukan apabila pemohon tidak hadir' },
      { key: 'C', text: 'Tidak jelas' },
      { key: 'D', text: 'Jawaban A dan B benar' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Batas kasasi adalah 14 hari sejak diucapkan jika hadir, atau 14 hari sejak diberitahukan jika tidak hadir.',
      legalBasis: 'Pasal 57 jo. Pasal 110 UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Permohonan kasasi PHI disampaikan melalui kepaniteraan PHI pada Pengadilan Negeri setempat dalam tenggang 14 hari kerja.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 96,
    category: 'Hukum Acara PHI',
    topicTag: 'Definisi Bipartit',
    question: 'Apa yang dimaksud dengan perundingan Bipartit dalam penyelesaian perselisihan hubungan industrial?',
    options: [
      { key: 'A', text: 'Perundingan antara pekerja/serikat pekerja dengan pengusaha dalam satu perusahaan tanpa pihak ketiga' },
      { key: 'B', text: 'Perundingan antara serikat pekerja dengan serikat buruh lain' },
      { key: 'C', text: 'Perundingan antara pekerja, pengusaha, dan Dinas Tenaga Kerja' },
      { key: 'D', text: 'Perundingan di hadapan majelis hakim pengadilan' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Bipartit adalah musyawarah langsung dua pihak (buruh dan majikan) tanpa pihak ketiga.',
      legalBasis: 'Pasal 1 angka 10 UU No. 2 Tahun 2004.',
      analysis: 'Perundingan Bipartit merupakan tahap wajib pertama sebelum sengketa dapat dicatatkan ke instansi ketenagakerjaan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 97,
    category: 'Hukum Acara PHI',
    topicTag: 'Kewenangan Konsiliator',
    question: 'Apa yang menjadi kewenangan Konsiliator dalam penyelesaian perselisihan hubungan industrial?',
    options: [
      { key: 'A', text: 'Menyelesaikan perselisihan kepentingan' },
      { key: 'B', text: 'Menyelesaikan perselisihan pemutusan hubungan kerja (PHK)' },
      { key: 'C', text: 'Menyelesaikan perselisihan antar serikat pekerja/buruh dalam satu perusahaan' },
      { key: 'D', text: 'Jawaban A, B, dan C adalah benar' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Konsiliator berwenang menyelesaikan perselisihan kepentingan, PHK, dan antar SP/SB, namun tidak berwenang perselisihan hak.',
      legalBasis: 'Pasal 1 angka 13 dan Pasal 17 UU No. 2 Tahun 2004.',
      analysis: 'Berbeda dengan Mediator yang berwenang atas keempat jenis perselisihan, Konsiliator hanya berwenang untuk perselisihan kepentingan, PHK, dan antar serikat buruh.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 98,
    category: 'Hukum Acara PHI',
    topicTag: 'Kompetensi Relatif PHI',
    question: 'Gugatan perselisihan hubungan industrial diajukan kepada Pengadilan Hubungan Industrial pada Pengadilan Negeri yang daerah hukumnya meliputi tempat pekerja/buruh bekerja diatur dalam....',
    options: [
      { key: 'A', text: 'Pasal 56' },
      { key: 'B', text: 'Pasal 77' },
      { key: 'C', text: 'Pasal 81' },
      { key: 'D', text: 'Pasal 82' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Kompetensi relatif PHI didasarkan pada wilayah tempat pekerja bekerja (Pasal 81).',
      legalBasis: 'Pasal 81 UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Pasal 81 menetapkan bahwa gugatan diajukan kepada PHI pada Pengadilan Negeri yang daerah hukumnya meliputi tempat buruh/pekerja bekerja.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 99,
    category: 'Hukum Acara PHI',
    topicTag: 'Bukan Tahapan Mediasi',
    question: 'Tahapan penyelesaian perselisihan dalam proses mediasi terdiri dari hal-hal di bawah ini, KECUALI:',
    options: [
      { key: 'A', text: 'Penerbitan anjuran tertulis oleh mediator' },
      { key: 'B', text: 'Pencatatan perselisihan di kantor Disnaker' },
      { key: 'C', text: 'Proses mediasi musyawarah para pihak' },
      { key: 'D', text: 'Pembuatan risalah perundingan bipartit' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Risalah perundingan bipartit dibuat pada tahap internal perusahaan, bukan tahapan mediasi.',
      legalBasis: 'Pasal 3 jo. Pasal 8–16 UU No. 2 Tahun 2004.',
      analysis: 'Risalah bipartit adalah syarat awal sebelum mediasi dapat dimulai. Setelah mediasi berjalan, produk mediator adalah Perjanjian Bersama atau Anjuran Tertulis.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 100,
    category: 'Hukum Acara PHI',
    topicTag: 'Gugatan Tanpa Risalah Mediasi',
    question: 'Pengajuan gugatan ke PHI yang tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi maka Hakim Pengadilan Hubungan Industrial....',
    options: [
      { key: 'A', text: 'Menolak gugatan penggugat dalam putusan akhir' },
      { key: 'B', text: 'Mengabaikan syarat formal tersebut' },
      { key: 'C', text: 'Wajib mengembalikan gugatan kepada penggugat' },
      { key: 'D', text: 'Melanjutkan sidang secara verstek' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Hakim PHI wajib mengembalikan gugatan yang tidak dilampiri risalah mediasi/konsiliasi.',
      legalBasis: 'Pasal 83 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Pasal 83 ayat (1) menegaskan bahwa pengajuan gugatan yang tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi, maka hakim wajib mengembalikan gugatan kepada penggugat.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 101,
    category: 'Hukum Acara PHI',
    topicTag: 'Pembebasan Biaya Perkara PHI',
    question: 'Dalam proses beracara di Pengadilan Hubungan Industrial, pihak-pihak yang berperkara tidak dikenakan biaya perkara termasuk biaya eksekusi yang nilai gugatannya....',
    options: [
      { key: 'A', text: 'Di bawah Rp50.000.000' },
      { key: 'B', text: 'Di bawah Rp150.000.000' },
      { key: 'C', text: 'Di bawah Rp200.000.000' },
      { key: 'D', text: 'Di bawah Rp300.000.000' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Gugatan PHI di bawah Rp150.000.000 dibebaskan dari seluruh biaya perkara dan eksekusi.',
      legalBasis: 'Pasal 58 UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Pasal 58 menegaskan pembebasan biaya bagi nilai gugatan di bawah 150 juta rupiah guna menjamin akses keadilan buruh.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 102,
    category: 'Hukum Acara PHI',
    topicTag: 'Batas Waktu Putusan PHI',
    question: 'Majelis hakim PHI wajib memberikan putusan penyelesaian sengketa dalam waktu selambat-lambatnya...... terhitung sejak sidang pertama:',
    options: [
      { key: 'A', text: '30 hari kalender' },
      { key: 'B', text: '50 hari kerja' },
      { key: 'C', text: '50 hari kalender' },
      { key: 'D', text: '90 hari kerja' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Putusan PHI wajib diputus paling lambat 50 hari kerja terhitung sejak sidang pertama.',
      legalBasis: 'Pasal 103 UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Asas peradilan cepat PHI membatasi majelis hakim wajib menjatuhkan putusan paling lambat 50 hari kerja sejak sidang pertama.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 103,
    category: 'Hukum Acara PHI',
    topicTag: 'Jangka Waktu Perundingan Bipartit',
    question: 'Dalam perselisihan hubungan industrial, upaya perundingan bipartit wajib diselesaikan dalam tenggang waktu....',
    options: [
      { key: 'A', text: '30 hari kerja terhitung sejak tanggal dimulainya perundingan' },
      { key: 'B', text: '30 hari kalender' },
      { key: 'C', text: '20 hari kerja' },
      { key: 'D', text: '14 hari kerja' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Musyawarah bipartit harus diselesaikan paling lama 30 hari kerja.',
      legalBasis: 'Pasal 3 ayat (2) UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Jika dalam tempo 30 hari kerja bipartit gagal atau salah satu pihak menolak, sengketa dapat dicatatkan ke mediator.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 104,
    category: 'Hukum Acara PHI',
    topicTag: 'Yurisdiksi Pengadilan PHI',
    question: 'Jika upaya mediasi dan konsiliasi tidak berhasil, pihak yang berselisih mengajukan gugatan ke PHI pada Pengadilan Negeri....',
    options: [
      { key: 'A', text: 'Yang daerah hukumnya meliputi tempat kediaman pekerja' },
      { key: 'B', text: 'Yang daerah hukumnya meliputi domisili kantor pusat pengusaha' },
      { key: 'C', text: 'Yang daerah hukumnya meliputi tempat kerja pekerja/buruh' },
      { key: 'D', text: 'Pengadilan Negeri di mana saja' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Gugatan diajukan ke PN yang membawahi tempat buruh bekerja.',
      legalBasis: 'Pasal 81 UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Asas tempat kerja pekerja bertujuan memudahkan pembuktian dan kehadiran pekerja dalam persidangan.'
    },
    difficulty: 'Mudah'
  },

  // --- HUKUM ACARA PERADILAN TATA USAHA NEGARA (PTUN) (105 - 120) ---
  {
    id: 105,
    category: 'Hukum Acara PTUN',
    topicTag: 'Alat Bukti Sah PTUN',
    question: 'Alat bukti yang sah dipergunakan dalam pembuktian perkara sengketa TUN menurut Pasal 100 UU No. 5 Tahun 1986 adalah....',
    options: [
      { key: 'A', text: 'Surat atau tulisan saja' },
      { key: 'B', text: 'Keterangan ahli saja' },
      { key: 'C', text: 'Keterangan saksi dan pengakuan saja' },
      { key: 'D', text: 'Surat/tulisan, keterangan ahli, keterangan saksi, pengakuan para pihak, dan pengetahuan hakim' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: '5 alat bukti PTUN: Surat/tulisan, Keterangan ahli, Keterangan saksi, Pengakuan para pihak, dan Pengetahuan hakim.',
      legalBasis: 'Pasal 100 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.',
      analysis: 'Berbeda dengan perdata, PTUN mengakui alat bukti "Pengetahuan Hakim" (wetenschap van de rechter) secara eksplisit dalam undang-undang.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 106,
    category: 'Hukum Acara PTUN',
    topicTag: 'Putusan Tidak Memenuhi Syarat Formil',
    question: 'Putusan pengadilan tata usaha negara yang tidak memuat ketentuan formal Pasal 109 UU PTUN berakibat....',
    options: [
      { key: 'A', text: 'Putusan tidak sah' },
      { key: 'B', text: 'Putusan batal' },
      { key: 'C', text: 'Putusan tidak sah dan tidak mempunyai kekuatan hukum' },
      { key: 'D', text: 'Semua benar' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Putusan PTUN yang melanggar Pasal 109 tidak sah dan tidak memiliki kekuatan hukum.',
      legalBasis: 'Pasal 109 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.',
      analysis: 'Pasal 109 mengatur syarat wajib kepala putusan ("Demi Keadilan Berdasarkan Ketuhanan Yang Maha Esa"), identitas para pihak, posita, pertimbangan hukum, dan amar putusan.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 107,
    category: 'Hukum Acara PTUN',
    topicTag: 'Syarat Tertulis KTUN',
    question: 'Salah satu kualifikasi Keputusan Tata Usaha Negara (KTUN) adalah bersifat tertulis. Maksud dari syarat tertulis ini berkaitan dengan:',
    options: [
      { key: 'A', text: 'Persyaratan formalitas administratif semata' },
      { key: 'B', text: 'Muatan keputusan yang harus ditandatangani menteri' },
      { key: 'C', text: 'Untuk memudahkan proses pembuktian di muka pengadilan' },
      { key: 'D', text: 'Bentuk nota dinas rahasia' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Sifat tertulis dimaksudkan agar memudahkan pembuktian adanya tindakan hukum pejabat TUN.',
      legalBasis: 'Penjelasan Pasal 1 angka 9 UU No. 51 Tahun 2009.',
      analysis: 'Penjelasan UU PTUN menyebutkan istilah tertulis tidak mutlak harus berbentuk surat keputusan formal, melainkan memo, disposisi, atau nota tertulis yang memudahkan pembuktian.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 108,
    category: 'Hukum Acara PTUN',
    topicTag: 'Fundamentum Petendi di PTUN',
    question: 'Fundamentum Petendi (posita gugatan) dalam kompetensi Peradilan Tata Usaha Negara memiliki pengertian pokok bahwa:',
    options: [
      { key: 'A', text: 'Pengadilan tidak berwenang mengadili' },
      { key: 'B', text: 'Gugatan mengenai wanprestasi perjanjian sewa' },
      { key: 'C', text: 'Wewenang berdasarkan pokok sengketa di bidang hukum perdata' },
      { key: 'D', text: 'Pokok sengketa terletak di lapangan Hukum Publik' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Pokok sengketa gugatan PTUN wajib berada di ranah hukum publik administrasi pemerintahan.',
      legalBasis: 'Pasal 47 UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Pengadilan TUN hanya bertugas memeriksa, memutus, dan menyelesaikan sengketa Tata Usaha Negara yang bersumber dari hubungan hukum publik.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 109,
    category: 'Hukum Acara PTUN',
    topicTag: 'Tujuan Tenggang Waktu 90 Hari',
    question: 'Berdasarkan Pasal 55 UU No. 5 Tahun 1986, tenggang waktu mengajukan gugatan ke PTUN (90 hari) merupakan bentuk perlindungan terhadap....',
    options: [
      { key: 'A', text: 'Kepentingan tergugat sebagai pejabat TUN' },
      { key: 'B', text: 'Kepentingan penggugat agar tidak lalai mengajukan gugatan' },
      { key: 'C', text: 'Kepentingan umum yang diembannya dalam jabatan TUN' },
      { key: 'D', text: 'Jawaban A dan C adalah benar' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Batas 90 hari melindungi kepastian hukum pejabat TUN dan kepentingan umum penyelenggaraan negara.',
      legalBasis: 'Pasal 55 UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Tenggang waktu 90 hari mencegah ketidakpastian hukum yang berlarut-larut dalam pelaksanaan kebijakan dan keputusan administrasi negara.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 110,
    category: 'Hukum Acara PTUN',
    topicTag: 'Perkembangan Regulasi PTUN',
    question: 'Peradilan Tata Usaha Negara diatur dalam rangkaian undang-undang....',
    options: [
      { key: 'A', text: 'UU No. 9 Tahun 2004' },
      { key: 'B', text: 'UU No. 5 Tahun 1986' },
      { key: 'C', text: 'UU No. 4 Tahun 2004' },
      { key: 'D', text: 'Jawaban A dan B benar (serta UU No. 51 Tahun 2009)' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Regulasi PTUN dimulai dari UU 5/1986, diubah dengan UU 9/2004 dan UU 51/2009.',
      legalBasis: 'UU No. 5 Tahun 1986 jo. UU No. 9 Tahun 2004 jo. UU No. 51 Tahun 2009.',
      analysis: 'Ketiga UU tersebut merupakan satu kesatuan kronologis yang mengatur keberadaan dan hukum acara PTUN di Indonesia.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 111,
    category: 'Hukum Acara PTUN',
    topicTag: 'Tenggang Waktu Gugatan PTUN',
    question: 'Berapakah batas waktu pengajuan gugatan Tata Usaha Negara, terhitung sejak diterimanya Keputusan Tata Usaha Negara....',
    options: [
      { key: 'A', text: '7 hari' },
      { key: 'B', text: '14 hari' },
      { key: 'C', text: '60 hari' },
      { key: 'D', text: '90 hari' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Tenggang waktu gugatan PTUN adalah 90 hari.',
      legalBasis: 'Pasal 55 UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Gugatan dapat diajukan hanya dalam tenggang waktu sembilan puluh hari sejak diterimanya atau diumumkannya KTUN.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 112,
    category: 'Hukum Acara PTUN',
    topicTag: 'Pemeriksaan Persiapan Hakim PTUN',
    question: 'Tujuan dilaksanakannya pemeriksaan persiapan (onderzoek) menurut UU No. 5 Tahun 1986 adalah....',
    options: [
      { key: 'A', text: 'Pokok gugatan tidak termasuk wewenang pengadilan' },
      { key: 'B', text: 'Gugatan tidak didasarkan alasan yang layak' },
      { key: 'C', text: 'Menghukum pejabat membayar denda' },
      { key: 'D', text: 'Hakim wajib memberi nasihat kepada penggugat untuk memperbaiki dan melengkapi gugatannya' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Dalam pemeriksaan persiapan hakim aktif memberi nasihat perbaikan gugatan kepada Penggugat.',
      legalBasis: 'Pasal 63 UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Prinsip dominus litis hakim PTUN tampak nyata di pemeriksaan persiapan, di mana hakim wajib memberi nasihat perbaikan gugatan dalam jangka waktu 30 hari.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 113,
    category: 'Hukum Acara PTUN',
    topicTag: 'Alasan Gugatan PTUN',
    question: 'Menurut Pasal 53 UU PTUN, alasan-alasan yang dapat digunakan dalam mengajukan gugatan di PTUN adalah....',
    options: [
      { key: 'A', text: 'KTUN yang digugat bertentangan dengan peraturan perundang-undangan yang berlaku' },
      { key: 'B', text: 'KTUN yang digugat bertentangan dengan Asas-Asas Umum Pemerintahan yang Baik (AUPB)' },
      { key: 'C', text: 'Semua benar (A dan B)' },
      { key: 'D', text: 'Semua salah' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Alasan gugatan PTUN: bertentangan dengan UU atau bertentangan dengan AUPB.',
      legalBasis: 'Pasal 53 ayat (2) UU No. 9 Tahun 2004.',
      analysis: 'Pasca amandemen UU No. 9 Tahun 2004, pelanggaran terhadap Asas-Asas Umum Pemerintahan yang Baik (AUPB) diakui secara tegas sebagai alasan pengujian KTUN.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 114,
    category: 'Hukum Acara PTUN',
    topicTag: 'Pemeriksaan Acara Cepat',
    question: 'Pemeriksaan sengketa tata usaha negara dengan acara cepat diatur dalam....',
    options: [
      { key: 'A', text: 'Pasal 98 UU No. 5 Tahun 1986' },
      { key: 'B', text: 'Pasal 62 UU No. 5 Tahun 1986' },
      { key: 'C', text: 'Pasal 99 UU No. 5 Tahun 1986' },
      { key: 'D', text: 'Pasal 98 & 99 UU No. 5 Tahun 1986' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Pemeriksaan acara cepat diatur dalam Pasal 98 dan Pasal 99 UU PTUN.',
      legalBasis: 'Pasal 98 dan Pasal 99 UU No. 5 Tahun 1986.',
      analysis: 'Apabila terdapat kepentingan penggugat yang sangat mendesak, penggugat dapat memohon pemeriksaan acara cepat dengan hakim tunggal dalam tempo pemeriksaan 30 hari.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 115,
    category: 'Hukum Acara PTUN',
    topicTag: 'Objek Sengketa PTUN',
    question: 'Dari keputusan-keputusan di bawah ini, manakah yang sah merupakan objek gugatan sengketa Tata Usaha Negara....',
    options: [
      { key: 'A', text: 'Keputusan pemecatan notaris oleh Menteri Kehakiman atas usul PN' },
      { key: 'B', text: 'Surat perintah penahanan yang dikeluarkan oleh Penuntut Umum' },
      { key: 'C', text: 'Keputusan Kepala Kantor Pertanahan yang menerbitkan sertifikat hak atas tanah berdasarkan permohonan pemohon' },
      { key: 'D', text: 'Sertifikat tanah yang diterbitkan murni berdasarkan amar eksekusi pengadilan perdata yang inkracht' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Penerbitan sertifikat tanah adalah KTUN konkret, individual, final yang menimbulkan akibat hukum bagi perdata.',
      legalBasis: 'Pasal 1 angka 9 UU No. 51 Tahun 2009 jo. Pasal 53 UU PTUN.',
      analysis: 'Tindakan penahanan penuntut umum (opsi B) adalah wewenang KUHAP (objek praperadilan), dan pelaksanaan putusan perdata (opsi D) dikecualikan dari sengketa TUN.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 116,
    category: 'Hukum Acara PTUN',
    topicTag: 'Fiktif Negatif',
    question: 'Jika peraturan perundang-undangan tidak menentukan jangka waktu, maka setelah lewat waktu ...... sejak diterimanya permohonan, badan atau pejabat TUN yang bergeming/diam dianggap telah mengeluarkan keputusan penolakan (fiktif negatif menurut UU No. 5 Tahun 1986).',
    options: [
      { key: 'A', text: '4 bulan' },
      { key: 'B', text: '3 bulan' },
      { key: 'C', text: '60 hari' },
      { key: 'D', text: '30 hari' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Dalam Pasal 3 ayat (2) UU No. 5 Tahun 1986, batas waktu fiktif negatif adalah 4 bulan.',
      legalBasis: 'Pasal 3 ayat (2) UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Setelah lewat waktu 4 bulan tanpa keputusan dari pejabat TUN, permohonan tersebut secara hukum dianggap ditolak dan dapat langsung digugat ke PTUN.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 117,
    category: 'Hukum Acara PTUN',
    topicTag: 'Komponen Biaya Perkara',
    question: 'Yang TIDAK diperhitungkan dalam perkiraan panjar biaya perkara oleh Undang-Undang Peradilan Tata Usaha Negara adalah....',
    options: [
      { key: 'A', text: 'Biaya saksi' },
      { key: 'B', text: 'Biaya ahli' },
      { key: 'C', text: 'Biaya alih bahasa/penerjemah' },
      { key: 'D', text: 'Biaya jasa honorarium advokat' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Honorarium advokat adalah beban perdata privat para pihak dan bukan bagian dari panjar biaya perkara resmi.',
      legalBasis: 'Pasal 59 UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Biaya perkara pengadilan hanya mencakup biaya kepaniteraan, saksi, ahli, alih bahasa, dan materai.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 118,
    category: 'Hukum Acara PTUN',
    topicTag: 'Tenggang Waktu Menggugat Pejabat TUN',
    question: 'Tenggang waktu pengajuan gugatan dalam sengketa TUN adalah ....... hari, terhitung sejak saat diterimanya Keputusan Badan/Pejabat TUN.',
    options: [
      { key: 'A', text: '14 hari' },
      { key: 'B', text: '30 hari' },
      { key: 'C', text: '60 hari' },
      { key: 'D', text: '90 hari' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Batas daluwarsa pengajuan gugatan sengketa TUN adalah 90 hari.',
      legalBasis: 'Pasal 55 UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Tenggang waktu 90 hari adalah daluwarsa mutlak (vervaltermijn) yang diperiksa ex-officio oleh majelis hakim.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 119,
    category: 'Hukum Acara PTUN',
    topicTag: 'Unsur Lengkap KTUN',
    question: 'Apakah definisi lengkap Keputusan Tata Usaha Negara (KTUN) menurut Pasal 1 angka 9 UU No. 51 Tahun 2009....',
    options: [
      { key: 'A', text: 'Penetapan tertulis yang dikeluarkan oleh badan/pejabat TUN' },
      { key: 'B', text: 'Penetapan tertulis yang dikeluarkan oleh badan/pejabat TUN dan menimbulkan akibat hukum bagi seseorang' },
      { key: 'C', text: 'Penetapan tertulis yang dikeluarkan badan/pejabat TUN yang bersifat final, individual dan konkret' },
      { key: 'D', text: 'Penetapan tertulis yang dikeluarkan badan/pejabat TUN berdasarkan perundang-undangan yang berlaku, bersifat konkret, individual, final, serta menimbulkan akibat hukum bagi seseorang atau badan hukum perdata' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Definisi lengkap KTUN memuat 6 unsur kumulatif opsi D.',
      legalBasis: 'Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang Perubahan Kedua UU PTUN.',
      analysis: 'Unsur kumulatif: 1. Penetapan tertulis, 2. Dikeluarkan Badan/Pejabat TUN, 3. Tindakan hukum TUN, 4. Berdasarkan perundang-undangan, 5. Konkret, individual, final, 6. Menimbulkan akibat hukum.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 120,
    category: 'Hukum Acara PTUN',
    topicTag: '5 Alat Bukti Sah PTUN',
    question: 'Alat bukti yang sah dalam persidangan Peradilan Tata Usaha Negara yaitu....',
    options: [
      { key: 'A', text: 'Surat/tulisan, saksi, pengakuan para pihak dan pengetahuan hakim' },
      { key: 'B', text: 'Surat/tulisan, ahli, saksi dan pengakuan para pihak' },
      { key: 'C', text: 'Surat/tulisan, saksi, ahli, keterangan para pihak, dan sumpah' },
      { key: 'D', text: 'Surat/tulisan, keterangan ahli, keterangan saksi, pengakuan para pihak, dan pengetahuan hakim' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Alat bukti PTUN secara lengkap adalah Surat/tulisan, Ahli, Saksi, Pengakuan para pihak, dan Pengetahuan hakim.',
      legalBasis: 'Pasal 100 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.',
      analysis: 'Kelima alat bukti tersebut diatur limitatif dalam Pasal 100 UU PTUN dan digunakan majelis hakim untuk memutus sengketa pembatalan KTUN.'
    },
    difficulty: 'Mudah'
  }
];

export const UPA_CATEGORIES: UPACategory[] = [
  'Hukum Acara Perdata',
  'Hukum Acara Pidana',
  'Hukum Acara PTUN',
  'Hukum Acara Peradilan Agama',
  'Kode Etik Profesi Advokat',
  'Hukum Acara Mahkamah Konstitusi',
  'Hukum Acara PHI',
  'Hukum Acara Arbitrase & APS'
];

/**
 * Generator procedural yang melengkapi bank data soal hingga 500 soal
 * menggunakan naskah otentik 120 soal Try Out Resmi UPA 2026/2025 sebagai fondasi utama.
 */
export function generateFull500QuestionBank(): UPAQuestion[] {
  const normalizeKey = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

  const base: UPAQuestion[] = [
    ...OFFICIAL_TRYOUT_QUESTIONS,
    ...ADDITIONAL_UPA_BANK_PART1,
    ...AUTHENTIC_PERADI_BANK_PART2,
    ...CATEGORY_EXPANSION_BANK,
    ...TRYOUT_2025_BANK,
    ...TOAZ_PERADI_BANK,
  ];

  const seen = new Set<string>();
  const uniqueBase: UPAQuestion[] = [];

  for (const q of base) {
    const k = normalizeKey(q.question);
    if (!seen.has(k)) {
      seen.add(k);
      uniqueBase.push(q);
    }
  }

  const filteredAdvanced: UPAQuestion[] = [];
  for (const q of ADVANCED_UPA_BANK) {
    const k = normalizeKey(q.question);
    if (!seen.has(k)) {
      seen.add(k);
      filteredAdvanced.push(q);
    }
  }

  const combined = [...uniqueBase, ...filteredAdvanced];

  // Re-index consecutive IDs starting from 1
  return combined.map((q, index) => ({
    ...q,
    id: index + 1,
  }));
}

export const MASTER_UPA_DATABASE: UPAQuestion[] = generateFull500QuestionBank();

