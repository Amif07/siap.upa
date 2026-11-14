import type { UPAQuestion, UPACategory } from '../types/quiz.ts';
import { TRYOUT_2025_BANK } from './tryOut2025Bank.ts';
import { TOAZ_PERADI_BANK } from './toazPeradiBank.ts';

/**
 * Bank Data Soal Ujian Profesi Advokat (UPA) Indonesia
 * Diintegrasikan langsung dari naskah Try Out Resmi PERADI & UPA 2025/2026:
 * - Kunci Jawaban & Pembahasan PG Try Out 4 Juli 2026 (120 Soal Lengkap)
 * - Try Out UPA 2025 & Bank Latihan Soal Advokat PERADI
 */
export const OFFICIAL_TRYOUT_QUESTIONS: UPAQuestion[] = [
  {
    "id": 1,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Wadah Tunggal Advokat",
    "question": "Pada tanggal 21 Desember 2004, delapan organisasi advokat mendeklarasikan pembentukan satu wadah tunggal profesi advokat sebagai amanat UU No. 18 Tahun 2003, yaitu...",
    "options": [
      {
        "key": "A",
        "text": "Persatuan Advokat Indonesia (PERADIN)"
      },
      {
        "key": "B",
        "text": "Himpunan Advokat dan Pengacara Indonesia (HAPI)"
      },
      {
        "key": "C",
        "text": "Perhimpunan Advokat Indonesia (PERADI)"
      },
      {
        "key": "D",
        "text": "Komite Kerja Advokat Indonesia (KKAI)"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "PERADI dideklarasikan pada 21 Desember 2004 oleh delapan organisasi advokat sebagai wadah tunggal Organisasi Advokat sesuai amanat Pasal 32 ayat (4) UU No. 18 Tahun 2003.",
      "legalBasis": "Pasal 32 ayat (3) dan ayat (4) UU No. 18 Tahun 2003 tentang Advokat jo. Piagam Deklarasi PERADI tanggal 21 Desember 2004.",
      "statuteText": "Dalam waktu paling lambat 2 (dua) tahun setelah berlakunya Undang-Undang ini, Organisasi Advokat telah terbentuk.",
      "analysis": "Pilihan C tepat karena Perhimpunan Advokat Indonesia (PERADI) resmi dideklarasikan pada 21 Desember 2004 oleh delapan organisasi advokat sebagai pelaksanaan Pasal 32 ayat (4) UU No. 18 Tahun 2003 tentang Advokat. Pilihan A keliru karena PERADIN adalah organisasi advokat historis yang berdiri pada 1964 dan bukan delapan organisasi pendiri dalam Pasal 32 ayat (3); Pilihan B keliru karena HAPI merupakan salah satu dari delapan organisasi pendiri, bukan wadah tunggal hasil deklarasi; dan Pilihan D keliru karena KKAI adalah forum kerja sama sementara sebelum PERADI dideklarasikan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 2,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Honorarium Advokat",
    "question": "Berdasarkan Pasal 21 ayat (2) UU No. 18 Tahun 2003 tentang Advokat, besarnya honorarium atas jasa hukum Advokat ditetapkan berdasarkan...",
    "options": [
      {
        "key": "A",
        "text": "Ketentuan Peraturan Pemerintah"
      },
      {
        "key": "B",
        "text": "Ketetapan Undang-Undang"
      },
      {
        "key": "C",
        "text": "Keputusan Organisasi Advokat"
      },
      {
        "key": "D",
        "text": "Persetujuan kedua belah pihak"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Besaran honorarium ditetapkan secara wajar berdasarkan persetujuan kedua belah pihak (Advokat dan Klien).",
      "legalBasis": "Pasal 21 ayat (1) dan ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Advokat berhak menerima Honorarium atas Jasa Hukum yang telah diberikan kepada Kliennya. Besarnya Honorarium atas Jasa Hukum sebagaimana dimaksud pada ayat (1) ditetapkan secara wajar berdasarkan persetujuan kedua belah pihak.",
      "analysis": "Pilihan D tepat karena Pasal 21 ayat (2) UU No. 18 Tahun 2003 secara tegas menentukan bahwa besaran honorarium ditetapkan secara wajar berdasarkan persetujuan antara Advokat dan Klien. Pilihan A, B, dan C keliru karena undang-undang tidak mematok tarif baku melalui Peraturan Pemerintah, ketentuan nominal dalam Undang-Undang, maupun penetapan sepihak oleh Organisasi Advokat."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 3,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Pembelaan Diri Advokat",
    "question": "Ketentuan mengenai hak pembelaan diri bagi Advokat dalam proses pemeriksaan dugaan pelanggaran kode etik profesi diatur di dalam UU No. 18 Tahun 2003 tentang Advokat pada...",
    "options": [
      {
        "key": "A",
        "text": "Pasal 1 angka 1 dan Pasal 2"
      },
      {
        "key": "B",
        "text": "Pasal 7 ayat (1) dan Pasal 8"
      },
      {
        "key": "C",
        "text": "Pasal 16 dan Pasal 19"
      },
      {
        "key": "D",
        "text": "Pasal 1 angka 6 dan Pasal 7 ayat (3)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Hak membela diri bagi Advokat yang diperiksa dalam perkara etik dijamin secara eksplisit pada Pasal 1 angka 6 dan Pasal 7 ayat (3) UU No. 18 Tahun 2003.",
      "legalBasis": "Pasal 1 angka 6 jo. Pasal 7 ayat (3) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Sebelum Advokat dikenai tindakan sebagaimana dimaksud pada ayat (1), kepada yang bersangkutan harus diberikan kesempatan untuk melakukan pembelaan diri.",
      "analysis": "Pilihan D tepat karena Pasal 1 angka 6 mendefinisikan pembelaan diri sebagai pernyataan dan pengajuan bukti oleh Advokat dalam pemeriksaan Dewan Kehormatan, dan Pasal 7 ayat (3) mewajibkan pemberian kesempatan pembelaan diri sebelum tindakan dijatuhkan. Pilihan A keliru karena mengatur definisi Advokat dan syarat pengangkatan; Pilihan B keliru karena Pasal 7 ayat (1) dan Pasal 8 mengatur jenis sanksi dan penyampaian putusan; dan Pilihan C keliru karena Pasal 16 dan Pasal 19 mengatur hak imunitas serta rahasia jabatan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 4,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Advokat Tanpa Izin (Advokat Gadungan)",
    "question": "Berdasarkan rumusan asli Pasal 31 UU No. 18 Tahun 2003 tentang Advokat (sebelum dinyatakan tidak mempunyai kekuatan hukum mengikat oleh Putusan MK No. 006/PUU-II/2004), setiap orang yang dengan sengaja menjalankan pekerjaan profesi Advokat dan bertindak seolah-olah sebagai Advokat tanpa status Advokat diancam pidana penjara...",
    "options": [
      {
        "key": "A",
        "text": "Paling lama 5 (lima) tahun"
      },
      {
        "key": "B",
        "text": "Paling lama 7 (tujuh) tahun"
      },
      {
        "key": "C",
        "text": "Paling lama 3 (tiga) tahun"
      },
      {
        "key": "D",
        "text": "Paling lama 2 (dua) tahun"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Dalam rumusan awal Pasal 31 UU No. 18 Tahun 2003, ancaman pidana bagi advokat gadungan adalah penjara paling lama 5 tahun dan/atau denda paling banyak Rp50.000.000,00 sebelum pasal tersebut dibatalkan oleh Mahkamah Konstitusi.",
      "legalBasis": "Pasal 31 UU No. 18 Tahun 2003 tentang Advokat jo. Putusan Mahkamah Konstitusi No. 006/PUU-II/2004.",
      "statuteText": "Setiap orang yang dengan sengaja menjalankan pekerjaan profesi Advokat dan bertindak seolah-olah sebagai Advokat, tetapi bukan Advokat sebagaimana diatur dalam Undang-Undang ini, dipidana dengan pidana penjara paling lama 5 (lima) tahun dan denda paling banyak Rp50.000.000,00 (lima puluh juta rupiah).",
      "analysis": "Pilihan A tepat sesuai rumusan asli Pasal 31 UU No. 18 Tahun 2003 yang mencantumkan ancaman pidana penjara paling lama 5 tahun (dan denda paling banyak Rp50.000.000,00), yang kemudian dinyatakan tidak mempunyai kekuatan hukum mengikat oleh Putusan MK No. 006/PUU-II/2004 karena berpotensi menghalangi bantuan hukum cuma-cuma di luar profesi advokat. Pilihan B (7 tahun), Pilihan C (3 tahun), dan Pilihan D (2 tahun) keliru karena tidak sesuai dengan ancaman pidana yang tercantum dalam Pasal 31 UU Advokat."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 5,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Bantuan Hukum Nonlitigasi",
    "question": "Pemberian jasa hukum oleh Advokat yang dilakukan di luar proses persidangan pengadilan (seperti konsultasi hukum, negosiasi, dan perancangan kontrak) dikenal dengan istilah...",
    "options": [
      {
        "key": "A",
        "text": "Bantuan hukum aktif"
      },
      {
        "key": "B",
        "text": "Bantuan hukum pasif"
      },
      {
        "key": "C",
        "text": "Bantuan hukum litigasi"
      },
      {
        "key": "D",
        "text": "Bantuan hukum nonlitigasi"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Jasa dan bantuan hukum di luar pengadilan seperti konsultasi hukum, mediasi, negosiasi, dan perancangan perjanjian disebut bantuan hukum nonlitigasi.",
      "legalBasis": "Pasal 1 angka 1 dan angka 2 UU No. 18 Tahun 2003 tentang Advokat jo. Penjelasan Pasal 1 angka 2.",
      "statuteText": "Advokat adalah orang yang berprofesi memberi jasa hukum, baik di dalam maupun di luar pengadilan yang memenuhi persyaratan berdasarkan ketentuan Undang-Undang ini.",
      "analysis": "Pilihan D tepat karena Pasal 1 angka 1 dan angka 2 UU No. 18 Tahun 2003 membagi ruang lingkup pemberian jasa hukum Advokat menjadi di dalam pengadilan (litigasi) dan di luar pengadilan (nonlitigasi). Pilihan A dan B keliru karena bukan terminologi hukum yang dikenal dalam UU Advokat; sedangkan Pilihan C keliru karena bantuan hukum litigasi merujuk pada pendampingan atau pembelaan di dalam sidang pengadilan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 6,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Status Penegak Hukum",
    "question": "Setelah berlakunya UU No. 18 Tahun 2003 tentang Advokat, kedudukan Advokat dalam sistem peradilan Indonesia diakui secara tegas sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Institusi hukum"
      },
      {
        "key": "B",
        "text": "Kuasa hukum"
      },
      {
        "key": "C",
        "text": "Penegak hukum"
      },
      {
        "key": "D",
        "text": "Pendekar hukum"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pasal 5 ayat (1) UU No. 18 Tahun 2003 menegaskan Advokat berstatus sebagai penegak hukum yang bebas dan mandiri.",
      "legalBasis": "Pasal 5 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Advokat berstatus sebagai penegak hukum, bebas dan mandiri yang dijamin oleh hukum dan peraturan perundang-undangan.",
      "analysis": "Pilihan C tepat karena Pasal 5 ayat (1) UU No. 18 Tahun 2003 secara eksplisit menetapkan status Advokat sebagai penegak hukum yang bebas dan mandiri (bagian dari Catur Wangsa penegak hukum). Pilihan A keliru karena Advokat adalah profesi perseorangan, bukan institusi negara; Pilihan B keliru karena kuasa hukum adalah fungsi representasi berdasarkan surat kuasa, bukan status kelembagaan dalam Pasal 5 ayat (1); dan Pilihan D merupakan istilah nonyuridis."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 7,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Peran Organisasi Advokat",
    "question": "Berdasarkan UU No. 18 Tahun 2003 tentang Advokat, peran dan tanggung jawab pokok Organisasi Advokat dalam kehidupan berhukum mencakup...",
    "options": [
      {
        "key": "A",
        "text": "Peran terhadap klien dan keluarga klien saja"
      },
      {
        "key": "B",
        "text": "Peran terhadap sesama penegak hukum lainnya saja"
      },
      {
        "key": "C",
        "text": "Peran terhadap anggota, peran terhadap masyarakat, dan peran terhadap negara"
      },
      {
        "key": "D",
        "text": "Peran terhadap pencari keadilan yang mampu saja"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Organisasi Advokat mengemban tiga peran utama: pembinaan dan pengawasan anggota, pengabdian hukum kepada masyarakat, serta penegakan supremasi hukum bagi negara.",
      "legalBasis": "Pasal 28 ayat (1) jo. Pasal 32 UU No. 18 Tahun 2003 tentang Advokat jo. Pembukaan Kode Etik Advokat Indonesia.",
      "statuteText": "Organisasi Advokat merupakan satu-satunya wadah profesi Advokat yang bebas dan mandiri yang dibentuk sesuai dengan ketentuan Undang-Undang ini dengan maksud dan tujuan untuk meningkatkan kualitas profesi Advokat.",
      "analysis": "Pilihan C tepat karena dalam doktrin dan ketentuan UU No. 18 Tahun 2003, Organisasi Advokat berperan membina serta mengawasi anggota (Pasal 12 dan Pasal 28), melayani masyarakat pencari keadilan termasuk melalui bantuan hukum cuma-cuma (Pasal 22), serta menjaga negara hukum dan hak asasi manusia. Pilihan A, B, dan D keliru karena membatasi ruang lingkup peran Organisasi Advokat hanya pada satu aspek parsial."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 8,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Pengawasan Advokat",
    "question": "Menurut ketentuan Pasal 12 ayat (1) UU No. 18 Tahun 2003 tentang Advokat, pengawasan terhadap Advokat dilakukan secara mandiri oleh...",
    "options": [
      {
        "key": "A",
        "text": "Mahkamah Agung Republik Indonesia"
      },
      {
        "key": "B",
        "text": "Kementerian Hukum dan Hak Asasi Manusia"
      },
      {
        "key": "C",
        "text": "Organisasi Advokat"
      },
      {
        "key": "D",
        "text": "Pengadilan Negeri di wilayah domisili hukum advokat"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pengawasan terhadap Advokat dilakukan secara mandiri oleh Organisasi Advokat melalui Komisi Pengawas.",
      "legalBasis": "Pasal 12 ayat (1) dan ayat (2) jo. Pasal 13 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Pengawasan terhadap Advokat dilakukan oleh Organisasi Advokat.",
      "analysis": "Pilihan C tepat karena Pasal 12 ayat (1) UU No. 18 Tahun 2003 menegaskan pengawasan terhadap Advokat dilakukan oleh Organisasi Advokat (yang dalam pelaksanaannya membentuk Komisi Pengawas sesuai Pasal 13 ayat (1)). Pilihan A, B, dan D keliru karena sejak berlakunya UU No. 18 Tahun 2003, kewenangan pengawasan advokat dicabut dari Mahkamah Agung, Kementerian Hukum, maupun Pengadilan Negeri demi kemandirian profesi (self-regulating profession)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 10,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Ruang Lingkup Jasa Hukum",
    "question": "Berdasarkan Pasal 1 angka 2 UU No. 18 Tahun 2003 tentang Advokat, pengertian \"Jasa Hukum\" yang diberikan Advokat meliputi...",
    "options": [
      {
        "key": "A",
        "text": "Konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, membela, dan melakukan tindakan hukum lain untuk kepentingan hukum klien"
      },
      {
        "key": "B",
        "text": "Menjalankan kuasa dan mewakili kepentingan klien di hadapan pengadilan negeri saja"
      },
      {
        "key": "C",
        "text": "Memberikan konsultasi hukum dan menjalankan kuasa di luar sidang pengadilan saja"
      },
      {
        "key": "D",
        "text": "Memberikan pendapat hukum tertulis dan perancangan kontrak bisnis saja"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Jasa Hukum mencakup seluruh kegiatan konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, membela, dan tindakan hukum lain bagi kepentingan hukum Klien.",
      "legalBasis": "Pasal 1 angka 2 UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Jasa Hukum adalah jasa yang diberikan Advokat berupa memberikan konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, membela, dan melakukan tindakan hukum lain untuk kepentingan hukum klien.",
      "analysis": "Pilihan A tepat karena memuat rumusan lengkap Jasa Hukum sebagaimana tertulis dalam Pasal 1 angka 2 UU No. 18 Tahun 2003. Pilihan B keliru karena jasa hukum tidak terbatas pada litigasi di pengadilan negeri; Pilihan C keliru karena jasa hukum mencakup baik di dalam maupun di luar pengadilan; dan Pilihan D keliru karena mempersempit jasa hukum hanya pada opini hukum dan kontrak."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 14,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Tugas Dewan Kehormatan",
    "question": "Berdasarkan Pasal 26 ayat (1) dan ayat (2) UU No. 18 Tahun 2003 tentang Advokat, Organisasi Advokat wajib membentuk Dewan Kehormatan yang bertugas untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mengangkat dan memberhentikan calon Advokat secara administratif"
      },
      {
        "key": "B",
        "text": "Memeriksa dan mengadili pelanggaran kode etik profesi Advokat"
      },
      {
        "key": "C",
        "text": "Memberikan bantuan hukum secara cuma-cuma kepada masyarakat tidak mampu"
      },
      {
        "key": "D",
        "text": "Menetapkan standar minimal besaran honorarium bagi seluruh Advokat"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Dewan Kehormatan Organisasi Advokat bertugas memeriksa dan mengadili pelanggaran kode etik profesi Advokat.",
      "legalBasis": "Pasal 26 ayat (1) dan ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Untuk menjaga martabat dan kehormatan profesi Advokat, disusun kode etik profesi Advokat oleh Organisasi Advokat. Dewan Kehormatan Organisasi Advokat memeriksa dan mengadili pelanggaran kode etik profesi Advokat berdasarkan tata cara Dewan Kehormatan Organisasi Advokat.",
      "analysis": "Pilihan B tepat karena Pasal 26 ayat (1) jo. ayat (2) UU No. 18 Tahun 2003 menugaskan Dewan Kehormatan Organisasi Advokat untuk memeriksa dan mengadili pelanggaran kode etik profesi Advokat. Pilihan A keliru karena pengangkatan advokat merupakan kewenangan Organisasi Advokat (Pasal 2 ayat (2)); Pilihan C keliru karena bantuan hukum cuma-cuma merupakan kewajiban masing-masing Advokat (Pasal 22); dan Pilihan D keliru karena honorarium ditetapkan berdasarkan persetujuan Advokat dan Klien (Pasal 21 ayat (2))."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 16,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Hak Imunitas Advokat",
    "question": "Berdasarkan Pasal 16 UU No. 18 Tahun 2003 tentang Advokat jo. Putusan Mahkamah Konstitusi No. 26/PUU-XI/2013, ruang lingkup dan syarat berlakunya hak imunitas Advokat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kebal dari segala tuntutan pidana dan perdata secara mutlak tanpa syarat"
      },
      {
        "key": "B",
        "text": "Tidak dapat dituntut secara perdata maupun pidana dalam menjalankan tugas profesi dengan itikad baik, baik di dalam maupun di luar sidang pengadilan"
      },
      {
        "key": "C",
        "text": "Tidak dapat dituntut hanya ketika berbicara di dalam ruang sidang pengadilan saja"
      },
      {
        "key": "D",
        "text": "Bebas dari pemeriksaan Dewan Kehormatan Organisasi Advokat selama memiliki KTPA aktif"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Advokat tidak dapat dituntut baik secara perdata maupun pidana dalam menjalankan tugas profesinya dengan itikad baik untuk kepentingan pembelaan Klien, baik di dalam maupun di luar sidang pengadilan.",
      "legalBasis": "Pasal 16 UU No. 18 Tahun 2003 tentang Advokat jo. Putusan Mahkamah Konstitusi No. 26/PUU-XI/2013.",
      "statuteText": "Advokat tidak dapat dituntut baik secara perdata maupun pidana dalam menjalankan tugas profesinya dengan itikad baik untuk kepentingan pembelaan Klien di dalam maupun di luar sidang pengadilan.",
      "analysis": "Pilihan B tepat karena Putusan MK No. 26/PUU-XI/2013 memperluas makna Pasal 16 UU No. 18 Tahun 2003 sehingga perlindungan hak imunitas berlaku baik di dalam maupun di luar sidang pengadilan, sepanjang dijalankan dengan itikad baik. Pilihan A keliru karena hak imunitas bersyarat itikad baik (bukan kekebalan mutlak); Pilihan C keliru karena membatasi hanya di dalam sidang; dan Pilihan D keliru karena hak imunitas tidak membebaskan Advokat dari pemeriksaan etik oleh Dewan Kehormatan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 17,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Rahasia Jabatan Advokat",
    "question": "Kewajiban Advokat untuk merahasiakan segala sesuatu yang diketahui atau diperoleh dari Kliennya menurut Pasal 19 ayat (1) UU No. 18 Tahun 2003 tentang Advokat wajib dijaga...",
    "options": [
      {
        "key": "A",
        "text": "Hanya selama hubungan kuasa hukum dengan klien masih berlangsung"
      },
      {
        "key": "B",
        "text": "Hanya sepanjang keterangan tersebut diungkapkan di dalam persidangan"
      },
      {
        "key": "C",
        "text": "Selama-lamanya, meskipun hubungan hukum dengan klien telah berakhir, kecuali ditentukan lain oleh undang-undang"
      },
      {
        "key": "D",
        "text": "Hanya sampai putusan pengadilan dalam perkara klien berkekuatan hukum tetap"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Advokat wajib merahasiakan segala sesuatu yang diperoleh dari Klien karena hubungan profesinya untuk selamanya bahkan setelah hubungan dengan Klien berakhir, kecuali ditentukan lain oleh undang-undang.",
      "legalBasis": "Pasal 19 ayat (1) dan ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Advokat wajib merahasiakan segala sesuatu yang diketahui atau diperoleh dari Kliennya karena hubungan profesinya, kecuali ditentukan lain oleh Undang-undang.",
      "analysis": "Pilihan C tepat karena berdasarkan Pasal 19 ayat (1) UU No. 18 Tahun 2003, kewajiban menjaga rahasia jabatan Advokat bersifat terus-menerus dan tidak berakhir meskipun pemberian jasa hukum telah selesai, kecuali undang-undang menentukan lain. Pilihan A dan D keliru karena rahasia jabatan tidak berhenti saat kuasa dicabut atau perkara diputus inkracht; dan Pilihan B keliru karena kerahasiaan juga meliputi konsultasi maupun dokumen di luar persidangan (Pasal 19 ayat (2))."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 18,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Kedudukan Kode Etik 2002",
    "question": "Bagaimanakah status hukum Kode Etik yang ditetapkan pada tanggal 23 Mei 2002 setelah berlakunya UU No. 18 Tahun 2003 tentang Advokat?",
    "options": [
      {
        "key": "A",
        "text": "Tidak berlaku lagi karena langsung digantikan oleh peraturan pemerintah"
      },
      {
        "key": "B",
        "text": "Mempunyai kekuatan hukum secara mutatis mutandis berdasarkan Pasal 33 UU No. 18 Tahun 2003"
      },
      {
        "key": "C",
        "text": "Hanya bersifat pedoman moral yang tidak mempunyai kekuatan mengikat"
      },
      {
        "key": "D",
        "text": "Hanya mengikat bagi Advokat yang diangkat sebelum tahun 2003"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 33 UU No. 18 Tahun 2003 menetapkan bahwa Kode Etik tanggal 23 Mei 2002 mempunyai kekuatan hukum secara mutatis mutandis sampai ada ketentuan baru dari Organisasi Advokat.",
      "legalBasis": "Pasal 33 UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Kode etik dan ketentuan tentang Dewan Kehormatan Profesi Advokat yang telah ditetapkan oleh IKADIN, AAI, IPHI, HAPI, SPI, AKHI, dan HKHPM pada tanggal 23 Mei 2002 dinyatakan mempunyai kekuatan hukum secara mutatis mutandis menurut Undang-Undang ini sampai ada ketentuan yang baru yang dibuat oleh Organisasi Advokat.",
      "analysis": "Pilihan B tepat karena Pasal 33 UU No. 18 Tahun 2003 secara tegas mengakui dan memberlakukan Kode Etik Advokat tanggal 23 Mei 2002 secara mutatis mutandis. Pilihan A dan C keliru karena KEAI 2002 tetap berlaku dan mengikat secara hukum; sedangkan Pilihan D keliru karena KEAI berlaku mengikat bagi seluruh Advokat tanpa membedakan tahun pengangkatannya."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 20,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Kesetaraan Penegak Hukum",
    "question": "Berdasarkan UU No. 18 Tahun 2003 tentang Advokat, dalam menjalankan fungsi selaku penegak hukum di pengadilan, kedudukan Advokat setara dengan...",
    "options": [
      {
        "key": "A",
        "text": "Satuan Polisi Pamong Praja"
      },
      {
        "key": "B",
        "text": "Pejabat pemerintah daerah"
      },
      {
        "key": "C",
        "text": "Polisi, Jaksa, dan Hakim"
      },
      {
        "key": "D",
        "text": "Notaris dan Pejabat Pembuat Akta Tanah"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Sebagai penegak hukum, Advokat memiliki kedudukan yang setara dengan penegak hukum lainnya (Polisi, Jaksa, dan Hakim) dalam menegakkan hukum dan keadilan.",
      "legalBasis": "Pasal 5 ayat (1) beserta Penjelasan Pasal 5 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Yang dimaksud dengan \"Advokat berstatus sebagai penegak hukum\" adalah Advokat sebagai salah satu perangkat dalam proses peradilan yang mempunyai kedudukan setara dengan penegak hukum lainnya dalam menegakkan hukum dan keadilan.",
      "analysis": "Pilihan C tepat karena dalam Penjelasan Pasal 5 ayat (1) UU No. 18 Tahun 2003 dan doktrin Catur Wangsa Penegak Hukum, Advokat berkedudukan setara dengan Polisi, Jaksa, dan Hakim untuk menjamin peradilan yang adil (fair trial). Pilihan A dan B keliru karena Satpol PP dan pejabat pemerintah daerah bukan aparat penegak hukum peradilan; sedangkan Pilihan D keliru karena Notaris dan PPAT adalah pejabat umum pembuat akta otentik, bukan unsur penegak hukum di persidangan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 21,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Tanggal Penetapan Kode Etik",
    "question": "Kode Etik Advokat Indonesia (KEAI) yang disepakati oleh tujuh organisasi advokat dalam Komite Kerja Advokat Indonesia (KKAI) ditetapkan di Jakarta pada tanggal...",
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
      "summary": "Kode Etik Advokat Indonesia (KEAI) ditetapkan dan disahkan di Jakarta pada tanggal 23 Mei 2002, serta diakui kekuatan hukumnya secara mutatis mutandis oleh UU No. 18 Tahun 2003 tentang Advokat.",
      "legalBasis": "Ketentuan Penutup dan Lembar Pengesahan Kode Etik Advokat Indonesia (KEAI) jo. Pasal 33 UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Kode Etik Advokat Indonesia ini ditetapkan di Jakarta pada tanggal 23 Mei 2002 oleh Ikatan Advokat Indonesia (IKADIN), Asosiasi Advokat Indonesia (AAI), Ikatan Penasihat Hukum Indonesia (IPHI), Himpunan Advokat dan Pengacara Indonesia (HAPI), Serikat Pengacara Indonesia (SPI), Asosiasi Konsultan Hukum Indonesia (AKHI), dan Himpunan Konsultan Hukum Pasar Modal (HKHPM).",
      "analysis": "Pilihan C tepat karena KEAI resmi ditetapkan di Jakarta pada tanggal 23 Mei 2002 sebelum lahirnya UU No. 18 Tahun 2003. Pilihan A keliru karena tahun 2003 adalah tahun pengundangan UU No. 18 Tahun 2003 (5 April 2003), bukan penetapan KEAI; Pilihan B keliru mengenai bulan penetapan (Juni, seharusnya Mei); dan Pilihan D keliru karena tahun 2001 adalah sebelum KKAI merumuskan pengesahan KEAI final."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 22,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Akibat Pemberhentian Sementara (Skorsing)",
    "question": "Berdasarkan Pasal 16 ayat (3) Kode Etik Advokat Indonesia (KEAI) jo. Pasal 7 ayat (1) huruf c UU No. 18 Tahun 2003, apabila seorang Advokat dijatuhi sanksi pemberhentian sementara untuk waktu tertentu, akibat hukumnya adalah...",
    "options": [
      {
        "key": "A",
        "text": "Advokat tersebut hanya dapat menjalankan profesinya di luar sidang"
      },
      {
        "key": "B",
        "text": "Advokat tersebut hanya dapat memberikan konsultasi hukum"
      },
      {
        "key": "C",
        "text": "Advokat tersebut masih dapat menjalankan profesinya, baik di dalam maupun di luar sidang"
      },
      {
        "key": "D",
        "text": "Advokat tersebut tidak dapat menjalankan profesinya, baik di dalam maupun di luar sidang"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Sanksi pemberhentian sementara untuk waktu tertentu wajib diikuti larangan menjalankan profesi Advokat secara penuh, baik di dalam maupun di luar pengadilan.",
      "legalBasis": "Pasal 16 ayat (3) Kode Etik Advokat Indonesia (KEAI) jo. Pasal 7 ayat (1) huruf c UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Pemberian sanksi pemberhentian sementara untuk waktu tertentu harus diikuti dengan larangan untuk menjalankan profesi advokat di luar maupun di muka pengadilan.",
      "analysis": "Pilihan D tepat karena Pasal 16 ayat (3) KEAI secara tegas melarang Advokat yang sedang menjalani masa skorsing untuk berpraktik baik di muka pengadilan (litigasi) maupun di luar pengadilan (nonlitigasi). Pilihan A dan B keliru karena sanksi skorsing juga menutup kewenangan jasa hukum di luar sidang termasuk konsultasi hukum; sedangkan Pilihan C keliru karena bertentangan langsung dengan sifat pembekuan sementara izin praktik profesi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 23,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Sidang In Absentia Dewan Kehormatan",
    "question": "Dalam pemeriksaan pengaduan pelanggaran Kode Etik Advokat di hadapan Majelis Dewan Kehormatan Cabang/Daerah, apabila Teradu telah dipanggil secara patut sampai 2 (dua) kali berturut-turut tidak hadir tanpa alasan yang sah, maka pemeriksaan perkara tersebut...",
    "options": [
      {
        "key": "A",
        "text": "Dihentikan sementara sampai Pengadu mampu menghadirkan Teradu di persidangan"
      },
      {
        "key": "B",
        "text": "Ditunda kembali untuk dilakukan pemanggilan ketiga kalinya secara paksa"
      },
      {
        "key": "C",
        "text": "Diteruskan tanpa kehadiran Teradu"
      },
      {
        "key": "D",
        "text": "Ditutup dengan putusan bahwa pengaduan dinyatakan tidak dapat diteruskan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Apabila Teradu telah dipanggil sampai 2 (dua) kali tidak hadir tanpa alasan yang sah, sidang Dewan Kehormatan diteruskan tanpa hadirnya Teradu (in absentia).",
      "legalBasis": "Pasal 13 ayat (9) Kode Etik Advokat Indonesia (KEAI).",
      "statuteText": "Apabila Teradu telah dipanggil sampai 2 (dua) kali tidak datang tanpa alasan yang sah, pemeriksaan diteruskan tanpa hadirnya Teradu, dan Dewan Kehormatan berwenang untuk memberikan keputusan di luar hadirnya yang Teradu, yang mempunyai kekuatan hukum yang sama seperti keputusan biasa.",
      "analysis": "Pilihan C tepat karena Pasal 13 ayat (9) KEAI menetapkan bahwa setelah dua kali pemanggilan patut tidak dihadiri Teradu tanpa alasan sah, pemeriksaan dilanjutkan tanpa hadirnya Teradu agar proses etik tidak terhambat. Pilihan A dan B keliru karena penundaan maksimal 14 hari hanya dilakukan pada ketidakhadiran sidang pertama (Pasal 13 ayat (8)), bukan memanggil ketiga kalinya atau menunggu Pengadu menghadirkan Teradu; sedangkan Pilihan D keliru karena ancaman pengaduan tidak dapat diteruskan/gugur berlaku apabila Pengadu sendiri yang mangkir, bukan Teradu."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 24,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Mantan Hakim Menjadi Advokat",
    "question": "Berdasarkan Pasal 7 huruf h Kode Etik Advokat Indonesia (KEAI), apakah mantan Hakim atau Panitera dibenarkan beralih profesi menjadi Advokat dan beracara di pengadilan?",
    "options": [
      {
        "key": "A",
        "text": "Tidak dapat dibenarkan karena Advokat adalah profesi yang bebas dan mandiri"
      },
      {
        "key": "B",
        "text": "Tidak dapat dibenarkan secara permanen karena menimbulkan benturan kepentingan"
      },
      {
        "key": "C",
        "text": "Dapat langsung beracara di seluruh pengadilan tanpa pembatasan waktu apa pun"
      },
      {
        "key": "D",
        "text": "Dapat, namun dalam jangka waktu 3 (tiga) tahun sejak berhenti ia tidak dibenarkan menangani perkara yang diperiksa di pengadilan tempatnya terakhir bekerja"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Mantan Hakim atau Panitera dibenarkan menjadi Advokat, namun selama 3 (tiga) tahun sejak berhenti dilarang menangani perkara yang diperiksa di pengadilan tempatnya terakhir bekerja.",
      "legalBasis": "Pasal 7 huruf h Kode Etik Advokat Indonesia (KEAI).",
      "statuteText": "Advokat yang sebelumnya pernah menjabat sebagai Hakim atau Panitera dari suatu lembaga peradilan, tidak dibenarkan untuk memegang atau menangani perkara yang diperiksa pengadilan tempatnya terakhir bekerja selama 3 (tiga) tahun semenjak ia berhenti dari pengadilan tersebut.",
      "analysis": "Pilihan D tepat karena Pasal 7 huruf h KEAI membolehkan mantan Hakim atau Panitera berprofesi sebagai Advokat dengan masa tunggu (cooling-off period) 3 tahun khusus untuk tidak menangani perkara di pengadilan tempat terakhirnya bertugas guna mencegah konflik kepentingan dan penyalahgunaan pengaruh. Pilihan A dan B keliru karena KEAI tidak melarang mantan Hakim/Panitera menjadi Advokat secara permanen; sedangkan Pilihan C keliru karena tetap ada pembatasan wilayah pengadilan terakhir selama 3 tahun."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 25,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Kehadiran Sidang Kode Etik",
    "question": "Dalam sidang pemeriksaan perkara pelanggaran Kode Etik Advokat di hadapan Dewan Kehormatan, ketentuan mengenai kehadiran Pengadu dan Teradu menyatakan bahwa keduanya...",
    "options": [
      {
        "key": "A",
        "text": "Harus hadir secara pribadi, namun jika dikehendaki dapat diwakili oleh penasihat"
      },
      {
        "key": "B",
        "text": "Harus hadir secara pribadi dan tidak dapat menguasakan kepada orang lain, tetapi jika dikehendaki masing-masing dapat didampingi oleh penasihat"
      },
      {
        "key": "C",
        "text": "Tidak perlu hadir secara pribadi karena dapat memberikan kuasa kepada Advokat"
      },
      {
        "key": "D",
        "text": "Tidak perlu hadir secara pribadi karena dapat memberikan kuasa kepada orang lain"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pengadu dan Teradu wajib hadir secara pribadi dan tidak dapat menguasakan kehadirannya kepada orang lain, namun masing-masing dapat didampingi oleh penasihat.",
      "legalBasis": "Pasal 13 ayat (7) Kode Etik Advokat Indonesia (KEAI).",
      "statuteText": "Pengadu dan yang teradu harus hadir secara pribadi dan tidak dapat menguasakan kepada orang lain, yang jika dikehendaki masing-masing dapat didampingi oleh penasehat.",
      "analysis": "Pilihan B tepat karena Pasal 13 ayat (7) KEAI menegaskan sifat pemeriksaan kode etik yang personal sehingga mewajibkan kehadiran langsung Pengadu dan Teradu dengan hak didampingi (bukan diwakili) oleh penasihat. Pilihan A keliru karena frasa 'diwakili' berarti penasihat menggantikan kehadiran pihak, padahal yang dibolehkan hanya 'didampingi'; sedangkan Pilihan C dan D keliru karena KEAI melarang tegas pemberian kuasa kepada Advokat maupun orang lain untuk menggantikan kehadiran pribadi para pihak."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 26,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Bantuan Hukum Teman Sejawat",
    "question": "Menurut Pasal 3 huruf e Kode Etik Advokat Indonesia (KEAI), sifat pemberian bantuan dan pembelaan hukum oleh seorang Advokat kepada teman sejawatnya yang sedang didakwa dalam perkara pidana adalah...",
    "options": [
      {
        "key": "A",
        "text": "Wajib apabila diminta oleh Advokat yang didakwa tersebut atau jika ditunjuk oleh organisasi profesi"
      },
      {
        "key": "B",
        "text": "Bersifat fakultatif sepanjang Advokat yang didakwa sanggup memenuhi honorarium yang diminta"
      },
      {
        "key": "C",
        "text": "Dilarang karena Advokat yang didakwa pidana dianggap telah mencemarkan nama baik organisasi"
      },
      {
        "key": "D",
        "text": "Wajib diberikan secara otomatis meskipun tanpa permintaan dari Terdakwa maupun penunjukan organisasi profesi"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pembelaan terhadap teman sejawat yang didakwa dalam perkara pidana bersifat wajib apabila diminta oleh yang bersangkutan atau ditunjuk oleh organisasi profesi.",
      "legalBasis": "Pasal 3 huruf e Kode Etik Advokat Indonesia (KEAI).",
      "statuteText": "Advokat wajib memberikan bantuan dan pembelaan hukum kepada teman sejawatnya yang sedang didakwa dalam suatu perkara pidana, baik atas permintaannya ataupun karena penunjukan organisasi profesi.",
      "analysis": "Pilihan A tepat sesuai rumusan Pasal 3 huruf e KEAI yang menjadikan pembelaan rekan sejawat sebagai kewajiban solidaritas profesi apabila diminta langsung atau ditunjuk oleh organisasi profesi. Pilihan B keliru karena kewajiban etik ini tidak digantungkan pada syarat komersial pemenuhan honorarium; Pilihan C keliru karena melanggar asas praduga tak bersalah dan hak pembelaan hukum; dan Pilihan D keliru karena pemberian kuasa atau penunjukan tetap mensyaratkan adanya permintaan dari Advokat yang didakwa atau penunjukan organisasi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 27,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Kewenangan Pemberhentian Advokat",
    "question": "Berdasarkan Pasal 9 ayat (1) UU No. 18 Tahun 2003 tentang Advokat, seorang Advokat dapat diberhentikan dari profesinya berdasarkan...",
    "options": [
      {
        "key": "A",
        "text": "Keputusan Organisasi Advokat"
      },
      {
        "key": "B",
        "text": "Keputusan Ketua Mahkamah Agung"
      },
      {
        "key": "C",
        "text": "Keputusan Ketua Pengadilan Tinggi"
      },
      {
        "key": "D",
        "text": "Keputusan Menteri Hukum dan Hak Asasi Manusia"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Kewenangan memberhentikan Advokat dari profesinya berada di tangan Organisasi Advokat, dengan salinan keputusan disampaikan kepada Mahkamah Agung, Pengadilan Tinggi, dan lembaga penegak hukum lainnya.",
      "legalBasis": "Pasal 9 ayat (1) dan ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Advokat dapat berhenti atau diberhentikan dari profesinya secara tetap oleh Organisasi Advokat.",
      "analysis": "Pilihan A tepat karena Pasal 9 ayat (1) jo. Pasal 10 ayat (1) UU No. 18 Tahun 2003 memberikan wewenang pemberhentian Advokat secara eksklusif kepada Organisasi Advokat (melalui putusan Dewan Kehormatan atau ketetapan organisasi). Pilihan B, C, dan D keliru karena Mahkamah Agung, Pengadilan Tinggi, dan Menteri Hukum dan HAM hanya menerima salinan surat keputusan pemberhentian berdasarkan Pasal 9 ayat (2), bukan pihak yang memberhentikan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 28,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Jenis Sanksi Kode Etik",
    "question": "Berdasarkan Pasal 16 ayat (1) Kode Etik Advokat Indonesia (KEAI), jenis-jenis hukuman atau sanksi yang dapat dijatuhkan oleh Dewan Kehormatan atas pelanggaran kode etik secara berurutan adalah...",
    "options": [
      {
        "key": "A",
        "text": "Teguran lisan, peringatan keras, atau pemecatan keanggotaan dari organisasi profesi"
      },
      {
        "key": "B",
        "text": "Peringatan biasa, peringatan keras, pemberhentian sementara untuk waktu tertentu, atau pemecatan dari keanggotaan organisasi profesi"
      },
      {
        "key": "C",
        "text": "Teguran administratif, denda profesi, atau pencabutan kartu tanda advokat"
      },
      {
        "key": "D",
        "text": "Teguran tertulis, pembekuan kantor hukum, atau pemberhentian tidak dengan hormat"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Empat jenis hukuman dalam Pasal 16 ayat (1) KEAI secara limitatif adalah peringatan biasa, peringatan keras, pemberhentian sementara untuk waktu tertentu, dan pemecatan dari keanggotaan organisasi profesi.",
      "legalBasis": "Pasal 16 ayat (1) Kode Etik Advokat Indonesia (KEAI) jo. Pasal 7 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Hukuman yang diberikan dalam keputusan dapat berupa: a. Peringatan biasa; b. Peringatan keras; c. Pemberhentian sementara untuk waktu tertentu; d. Pemecatan dari keanggotaan organisasi profesi.",
      "analysis": "Pilihan B tepat karena mencantumkan secara lengkap dan verbatim keempat jenis hukuman dalam Pasal 16 ayat (1) KEAI yang selaras dengan Pasal 7 ayat (1) UU No. 18 Tahun 2003. Pilihan A keliru karena meniadakan sanksi pemberhentian sementara serta menggunakan istilah 'teguran lisan'; sedangkan Pilihan C dan D keliru karena denda profesi, pencabutan kartu secara tersendiri, maupun pembekuan kantor hukum tidak dikenal sebagai jenis hukuman dalam Pasal 16 ayat (1) KEAI."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 30,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Definisi Klien",
    "question": "Menurut ketentuan Pasal 1 angka 3 UU No. 18 Tahun 2003 tentang Advokat, yang dimaksud dengan \"Klien\" adalah...",
    "options": [
      {
        "key": "A",
        "text": "Orang perseorangan yang sedang berperkara di pengadilan saja"
      },
      {
        "key": "B",
        "text": "Badan hukum privat yang didirikan berdasarkan akta notaris saja"
      },
      {
        "key": "C",
        "text": "Lembaga pemerintah atau pejabat tata usaha negara saja"
      },
      {
        "key": "D",
        "text": "Orang, badan hukum, atau lembaga lain yang menerima jasa hukum dari Advokat"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Klien meliputi orang perseorangan, badan hukum, maupun lembaga lain yang menerima jasa hukum dari Advokat.",
      "legalBasis": "Pasal 1 angka 3 UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Klien adalah orang, badan hukum, atau lembaga lain yang menerima jasa hukum dari Advokat.",
      "analysis": "Pilihan D tepat karena mengutip rumusan utuh Pasal 1 angka 3 UU No. 18 Tahun 2003. Pilihan A, B, dan C keliru karena masing-masing membatasi subjek Klien hanya pada satu golongan tertentu saja, padahal undang-undang mencakup seluruh subjek hukum (orang, badan hukum, maupun lembaga lain) baik untuk layanan litigasi maupun nonlitigasi."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 31,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Hak Menolak Perkara",
    "question": "Berdasarkan Pasal 3 huruf a Kode Etik Advokat Indonesia (KEAI), sikap yang dibenarkan bagi seorang Advokat ketika mempertimbangkan untuk menolak permintaan jasa atau bantuan hukum dari calon klien adalah...",
    "options": [
      {
        "key": "A",
        "text": "Dibenarkan menolak dengan pertimbangan tidak sesuai dengan keahliannya dan bertentangan dengan hati nuraninya"
      },
      {
        "key": "B",
        "text": "Dibenarkan menolak apabila calon klien memiliki perbedaan agama, suku, atau keyakinan politik dengan Advokat"
      },
      {
        "key": "C",
        "text": "Tidak dibenarkan menolak calon klien dalam keadaan apa pun karena Advokat mengemban profesi bebas"
      },
      {
        "key": "D",
        "text": "Dibenarkan menolak semata-mata karena calon klien belum pernah berperkara sebelumnya"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Advokat dapat menolak memberikan nasihat dan bantuan hukum dengan pertimbangan tidak sesuai keahliannya dan bertentangan dengan hati nuraninya.",
      "legalBasis": "Pasal 3 huruf a Kode Etik Advokat Indonesia (KEAI).",
      "statuteText": "Advokat dapat menolak untuk memberi nasihat dan bantuan hukum kepada setiap orang yang memerlukan jasa dan atau bantuan hukum dengan pertimbangan oleh karena tidak sesuai dengan keahliannya dan bertentangan dengan hati nuraninya, tetapi tidak dapat menolak dengan alasan karena perbedaan agama, kepercayaan, suku, keturunan, jenis kelamin, keyakinan politik dan kedudukan sosialnya.",
      "analysis": "Pilihan A tepat karena Pasal 3 huruf a KEAI memberikan dasar pembenar bagi Advokat untuk menolak calon klien apabila materi perkara tidak sesuai dengan keahliannya dan bertentangan dengan hati nuraninya. Pilihan B keliru karena alasan agama, suku, maupun keyakinan politik secara tegas dilarang sebagai alasan penolakan (prinsip nondiskriminasi); Pilihan C keliru karena kebebasan profesi justru mencakup kebebasan nurani dan kompetensi keahlian; dan Pilihan D keliru karena pengalaman berperkara calon klien bukan alasan etik penolakan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 32,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Hak Retensi Advokat",
    "question": "Dalam hubungan pemberian kuasa hukum antara Advokat dan klien berdasarkan Pasal 4 huruf k Kode Etik Advokat Indonesia (KEAI) jo. Pasal 1812 KUHPerdata, yang dimaksud dengan \"hak retensi\" adalah...",
    "options": [
      {
        "key": "A",
        "text": "Hak Advokat untuk menentukan honorarium secara sepihak di luar perjanjian kuasa"
      },
      {
        "key": "B",
        "text": "Hak Advokat untuk mengundurkan diri secara mendadak sebelum putusan berkekuatan hukum tetap"
      },
      {
        "key": "C",
        "text": "Hak Advokat untuk menahan surat-surat atau dokumen milik klien hingga kewajiban klien terpenuhi, sepanjang tidak merugikan kepentingan klien"
      },
      {
        "key": "D",
        "text": "Hak Advokat untuk membatalkan surat kuasa tanpa pemberitahuan kepada klien"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Hak retensi adalah hak Advokat untuk menahan berkas atau surat-surat milik klien hingga hak/kewajiban tertentu dipenuhi, yang diakui sepanjang tidak menimbulkan kerugian bagi kepentingan klien.",
      "legalBasis": "Pasal 4 huruf k dan Pasal 5 huruf f Kode Etik Advokat Indonesia (KEAI) jo. Pasal 1812 KUHPerdata.",
      "statuteText": "Hak retensi Advokat terhadap klien diakui sepanjang tidak akan menimbulkan kerugian kepentingan klien.",
      "analysis": "Pilihan C tepat karena Pasal 4 huruf k KEAI jo. Pasal 1812 KUHPerdata mengakui hak retensi penerima kuasa (Advokat) untuk menahan surat-surat/barang milik pemberi kuasa hingga pembayaran kewajibannya dilunasi, dengan batasan etis tidak boleh merugikan kepentingan perkara klien. Pilihan A keliru karena penetapan honorarium wajib disepakati bersama secara wajar (Pasal 21 UU Advokat dan Pasal 4 huruf d KEAI); Pilihan B keliru karena Pasal 4 huruf i KEAI justru melarang pelepasan tugas pada saat merugikan klien; dan Pilihan D keliru karena pencabutan atau pengakhiran kuasa harus diberitahukan secara patut."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 33,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Sifat Putusan Dewan Kehormatan Daerah",
    "question": "Berdasarkan Pasal 17 ayat (1) Kode Etik Advokat Indonesia (KEAI), keputusan Majelis Dewan Kehormatan Cabang/Daerah dalam pemeriksaan tingkat pertama mengenai dugaan pelanggaran Kode Etik Advokat bersifat...",
    "options": [
      {
        "key": "A",
        "text": "Final dan tidak dapat diajukan upaya banding"
      },
      {
        "key": "B",
        "text": "Belum final dan dapat diajukan upaya banding ke Dewan Kehormatan Pusat"
      },
      {
        "key": "C",
        "text": "Mengikat dan mempunyai kekuatan hukum tetap seketika tanpa tenggang waktu banding"
      },
      {
        "key": "D",
        "text": "Dapat langsung dimintakan upaya kasasi ke Mahkamah Agung"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Putusan Dewan Kehormatan Cabang/Daerah sebagai peradilan etik tingkat pertama belum bersifat final karena Pengadu maupun Teradu berhak mengajukan banding ke Dewan Kehormatan Pusat.",
      "legalBasis": "Pasal 17 ayat (1) dan Pasal 18 ayat (1) Kode Etik Advokat Indonesia (KEAI) jo. Pasal 27 ayat (4) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Apabila pengadu atau yang teradu tidak puas dengan keputusan Dewan Kehormatan Cabang/Daerah, ia berhak mengajukan permohonan banding atas keputusan tersebut kepada Dewan Kehormatan Pusat.",
      "analysis": "Pilihan B tepat karena Pasal 17 ayat (1) KEAI jo. Pasal 27 ayat (4) UU No. 18 Tahun 2003 membuka upaya hukum banding ke Dewan Kehormatan Pusat apabila salah satu pihak tidak puas terhadap putusan tingkat pertama. Pilihan A dan C keliru karena sifat final dan mengikat baru melekat pada putusan Dewan Kehormatan Pusat (Pasal 18 ayat (4) KEAI); dan Pilihan D keliru karena penegakan etik profesi merupakan yurisdiksi internal Dewan Kehormatan Organisasi Advokat, bukan lingkungan peradilan umum di bawah Mahkamah Agung."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 34,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Solidaritas Rekan Sejawat",
    "question": "Berdasarkan Pasal 5 huruf a Kode Etik Advokat Indonesia (KEAI), prinsip etis yang wajib melandasi hubungan antar-teman sejawat Advokat dalam menjalankan profesinya adalah...",
    "options": [
      {
        "key": "A",
        "text": "Mengutamakan perdebatan personal untuk menunjukkan keunggulan di persidangan"
      },
      {
        "key": "B",
        "text": "Saling menghormati, saling menghargai, dan saling mempercayai"
      },
      {
        "key": "C",
        "text": "Bersaing secara bebas tanpa kewajiban menjaga kehormatan sesama rekan seprofesi"
      },
      {
        "key": "D",
        "text": "Memandang teman sejawat sebagai pesaing bisnis yang dikecualikan dari solidaritas korps"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Hubungan antara teman sejawat Advokat wajib dilandasi oleh sikap saling menghormati, saling menghargai, dan saling mempercayai.",
      "legalBasis": "Pasal 5 huruf a Kode Etik Advokat Indonesia (KEAI) jo. Pasal 26 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Hubungan antara teman sejawat Advokat harus dilandasi sikap saling menghormati, saling menghargai dan saling mempercayai.",
      "analysis": "Pilihan B tepat karena mengutip langsung norma Pasal 5 huruf a KEAI tentang landasan kolegialitas sesama Advokat dalam Bab Hubungan dengan Teman Sejawat. Pilihan A keliru karena Pasal 5 huruf b KEAI justru melarang penggunaan kata-kata tidak sopan saat berhadapan dengan teman sejawat di dalam maupun di luar sidang; sedangkan Pilihan C dan D keliru karena profesi Advokat sebagai officium nobile menempatkan rekan sejawat sebagai mitra penegak hukum, bukan rival komersial."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 35,
    "category": "Hukum Acara Perdata",
    "topicTag": "Perlawanan Pihak Ketiga (Derden Verzet)",
    "question": "Apabila sebuah bangunan milik orang lain yang sedang disewakan kepada penyewa dikenakan sita eksekusi dalam perkara yang tidak melibatkan penyewa tersebut sehingga mengganggu hak penguasaan sewanya, maka upaya hukum bantahan yang tepat diajukan oleh pihak penyewa adalah...",
    "options": [
      {
        "key": "A",
        "text": "Perlawanan pihak ketiga (derden verzet)"
      },
      {
        "key": "B",
        "text": "Perlawanan terhadap putusan verstek (verzet)"
      },
      {
        "key": "C",
        "text": "Permohonan banding langsung ke Pengadilan Tinggi"
      },
      {
        "key": "D",
        "text": "Permohonan kasasi ke Mahkamah Agung"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pihak ketiga (termasuk penyewa yang hak penguasaannya dirugikan oleh sita eksekusi dalam perkara pihak lain) berhak mengajukan perlawanan pihak ketiga (derden verzet).",
      "legalBasis": "Pasal 378 Rv jo. Pasal 195 ayat (6) HIR / Pasal 206 ayat (6) RBg.",
      "statuteText": "Pihak ketiga berhak mengajukan perlawanan terhadap suatu putusan hakim yang merugikan hak-haknya apabila ia bukan merupakan pihak dalam perkara tersebut; dan perlawanan pihak ketiga terhadap pelaksanaan putusan/sitaan diajukan kepada Pengadilan Negeri yang melaksanakan penyitaan tersebut.",
      "analysis": "Pilihan A tepat karena Pasal 378 Rv jo. Pasal 195 ayat (6) HIR / Pasal 206 ayat (6) RBg memberi hak perlawanan pihak ketiga (derden verzet) kepada pihak di luar perkara yang hak milik atau hak penguasaan bendanya (termasuk penyewa sah) dirugikan oleh sita eksekusi. Pilihan B keliru karena verzet (Pasal 129 HIR / Pasal 153 RBg) khusus disediakan bagi Tergugat yang diputus verstek; sedangkan Pilihan C dan D keliru karena banding dan kasasi hanya dapat diajukan oleh pihak yang berperkara dalam putusan asal, bukan pihak ketiga yang terdampak sita eksekusi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 36,
    "category": "Hukum Acara Perdata",
    "topicTag": "Kompetensi Relatif Tergugat Jamak",
    "question": "Pengajuan gugatan yang ditujukan kepada lebih dari seorang tergugat yang tempat tinggalnya berbeda harus diajukan ke Pengadilan Negeri yang wilayah hukumnya meliputi domisili...",
    "options": [
      {
        "key": "A",
        "text": "Salah satu tergugat secara acak"
      },
      {
        "key": "B",
        "text": "Tergugat yang tempat tinggalnya lebih dekat dengan penggugat"
      },
      {
        "key": "C",
        "text": "Salah satu tergugat menurut pilihan penggugat"
      },
      {
        "key": "D",
        "text": "Di mana barang sengketa tidak bergerak berada"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Apabila tergugat lebih dari seorang dan tidak tinggal dalam satu wilayah hukum yang sama, gugatan diajukan kepada Pengadilan Negeri di tempat tinggal salah seorang dari tergugat menurut pilihan penggugat.",
      "legalBasis": "Pasal 118 ayat (2) HIR / Pasal 142 ayat (2) RBg.",
      "statuteText": "Jika yang digugat lebih dari seorang, sedang mereka tidak tinggal di dalam satu daerah hukum Pengadilan Negeri yang sama, maka gugatan diajukan kepada Ketua Pengadilan Negeri di tempat tinggal salah seorang dari tergugat itu, menurut pilihan penggugat.",
      "analysis": "Berdasarkan Pasal 118 ayat (2) HIR / Pasal 142 ayat (2) RBg, jika terdapat lebih dari satu tergugat dengan domisili berbeda, undang-undang memberikan hak opsi kepada penggugat untuk mengajukan gugatan di Pengadilan Negeri tempat tinggal salah satu tergugat yang dipilihnya (Pilihan C; dalam praktik beracara, tergugat yang domisilinya dipilih tersebut lazim ditempatkan pada urutan pertama sebagai Tergugat I). Sebagai pengecualian, apabila hubungan hukum antar-tergugat adalah debitur pokok dan penjamin (borg), gugatan wajib diajukan di tempat tinggal debitur pokok. Pilihan A keliru karena penentuan domisili merupakan hak opsi penggugat berdasarkan kepentingan beracara yang dipertimbangkan secara hukum, bukan pemilihan acak; Pilihan B keliru karena undang-undang tidak mensyaratkan kedekatan jarak dengan domisili penggugat; dan Pilihan D keliru karena asas forum rei sitae (Pasal 118 ayat (3) HIR / Pasal 142 ayat (5) RBg) hanya berlaku apabila objek sengketanya berupa benda tidak bergerak."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 37,
    "category": "Hukum Acara Perdata",
    "topicTag": "Gugatan Rekonvensi",
    "question": "Berdasarkan Pasal 132b ayat (1) HIR / Pasal 158 ayat (1) RBg, gugatan rekonvensi (gugatan balik) harus diajukan oleh Tergugat...",
    "options": [
      {
        "key": "A",
        "text": "Bersama-sama dengan jawaban Tergugat terhadap gugatan Penggugat"
      },
      {
        "key": "B",
        "text": "Setelah tahap pembuktian surat dan saksi selesai"
      },
      {
        "key": "C",
        "text": "Dalam tenggang waktu 7 hari setelah putusan diucapkan"
      },
      {
        "key": "D",
        "text": "Pada pemeriksaan tingkat banding di Pengadilan Tinggi"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Tergugat wajib mengajukan gugatan rekonvensi bersama-sama dengan jawabannya (baik tertulis maupun lisan) terhadap gugatan konvensi.",
      "legalBasis": "Pasal 132a dan Pasal 132b ayat (1) HIR / Pasal 157 dan Pasal 158 ayat (1) RBg.",
      "statuteText": "Tergugat wajib mengajukan gugatan melawan bersama-sama dengan jawabannya baik dengan surat maupun dengan lisan.",
      "analysis": "Pilihan A tepat karena Pasal 132b ayat (1) HIR / Pasal 158 ayat (1) RBg mewajibkan Tergugat mengajukan gugatan rekonvensi bersama-sama dengan jawabannya pada sidang tingkat pertama (dengan memperhatikan pengecualian Pasal 132a ayat (1) HIR terkait sifat pihak, kompetensi absolut, dan pelaksanaan putusan). Pilihan B keliru karena pengajuan setelah tahap pembuktian sudah terlambat dan menghambat pemeriksaan serentak; Pilihan C keliru karena rekonvensi bukan upaya hukum pascaputusan; dan Pilihan D keliru karena Pasal 132a ayat (2) HIR tegas melarang pengajuan rekonvensi baru pada tingkat banding."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 41,
    "category": "Hukum Acara Perdata",
    "topicTag": "Putusan Serta Merta",
    "question": "Dalam hukum acara perdata, syarat dan pembatasan ketat pelaksanaan Putusan Serta Merta (uitvoerbaar bij voorraad) selain diatur dalam Pasal 180 ayat (1) HIR / Pasal 191 ayat (1) RBg, ditegaskan pula oleh Mahkamah Agung melalui...",
    "options": [
      {
        "key": "A",
        "text": "SEMA Nomor 1 Tahun 2000"
      },
      {
        "key": "B",
        "text": "SEMA Nomor 3 Tahun 2000"
      },
      {
        "key": "C",
        "text": "SEMA Nomor 3 Tahun 2002"
      },
      {
        "key": "D",
        "text": "SEMA Nomor 3 Tahun 2003"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pembatasan dan syarat ketat penjatuhan serta pelaksanaan putusan serta merta (uitvoerbaar bij voorraad) diatur oleh Mahkamah Agung dalam SEMA No. 3 Tahun 2000 jo. SEMA No. 4 Tahun 2001.",
      "legalBasis": "Pasal 180 ayat (1) HIR / Pasal 191 ayat (1) RBg jo. SEMA No. 3 Tahun 2000 jo. SEMA No. 4 Tahun 2001.",
      "statuteText": "Ketua Pengadilan Negeri dapat memerintahkan supaya keputusan itu dijalankan lebih dahulu walaupun ada perlawanan atau banding, jika ada surat yang sah, suatu tulisan yang menurut aturan berlaku dapat diterima sebagai bukti, atau jika ada hukuman lebih dahulu dengan keputusan yang sudah berkekuatan hukum tetap.",
      "analysis": "Pilihan B tepat karena SEMA No. 3 Tahun 2000 tentang Putusan Serta Merta (Uitvoerbaar bij Voorraad) dan Provisionil mengatur secara limitatif perkara yang boleh dijatuhkan serta merta serta mensyaratkan izin Ketua Pengadilan Tinggi dan uang jaminan (SEMA No. 4 Tahun 2001). Pilihan A keliru karena SEMA No. 1 Tahun 2000 mengatur mengenai Lembaga Paksa Badan (Gijzeling); sedangkan Pilihan C dan D keliru karena bukan surat edaran MA yang mengatur syarat putusan serta merta."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 42,
    "category": "Hukum Acara Perdata",
    "topicTag": "Sifat Putusan Condemnatoir",
    "question": "Putusan pengadilan perdata yang amar putusannya menghukum pihak yang dikalahkan untuk memenuhi suatu prestasi (membayar sejumlah uang, menyerahkan barang, atau mengosongkan objek sengketa) disebut...",
    "options": [
      {
        "key": "A",
        "text": "Putusan deklaratoir"
      },
      {
        "key": "B",
        "text": "Putusan konstitutif"
      },
      {
        "key": "C",
        "text": "Putusan condemnatoir"
      },
      {
        "key": "D",
        "text": "Putusan verstek"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Putusan condemnatoir adalah putusan yang amar putusannya bersifat menghukum salah satu pihak untuk melakukan atau tidak melakukan suatu prestasi tertentu.",
      "legalBasis": "Pasal 178 ayat (1) dan Pasal 195 HIR / Pasal 189 ayat (1) dan Pasal 206 RBg.",
      "statuteText": "Hakim karena jabatannya waktu bermusyawarah wajib mencukupkan segala alasan hukum yang tidak dikemukakan oleh kedua belah pihak; dan pelaksanaan putusan pengadilan yang bersifat menghukum dilakukan atas perintah dan pimpinan Ketua Pengadilan Negeri.",
      "analysis": "Pilihan C tepat karena hanya putusan condemnatoir (penghukuman) yang memuat perintah pemenuhan prestasi dan memiliki kekuatan eksekutorial bila tidak dilaksanakan secara sukarela. Pilihan A keliru karena putusan deklaratoir sekadar menyatakan atau menegaskan suatu keadaan hukum (misalnya menyatakan ahli waris atau perjanjian sah); Pilihan B keliru karena putusan konstitutif menciptakan atau meniadakan keadaan hukum baru (misalnya putusan perceraian atau pailit); dan Pilihan D keliru karena putusan verstek merujuk pada cara penjatuhan putusan akibat ketidakhadiran Tergugat, bukan sifat amar penghukuman."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 43,
    "category": "Hukum Acara Perdata",
    "topicTag": "Tenggang Waktu Banding Perdata",
    "question": "Jika suatu putusan perkara perdata di Pengadilan Negeri diucapkan dalam sidang terbuka pada tanggal 11 November 2008 yang dihadiri secara langsung oleh para pihak, maka batas akhir pengajuan permohonan banding adalah...",
    "options": [
      {
        "key": "A",
        "text": "Tanggal 17 November 2008"
      },
      {
        "key": "B",
        "text": "Tanggal 18 November 2008"
      },
      {
        "key": "C",
        "text": "Tanggal 24 November 2008"
      },
      {
        "key": "D",
        "text": "Tanggal 25 November 2008"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Tenggang waktu permohonan banding perkara perdata adalah 14 hari terhitung mulai hari berikutnya sesudah putusan diucapkan atau diberitahukan secara sah.",
      "legalBasis": "Pasal 7 ayat (1) UU No. 20 Tahun 1947 tentang Peradilan Ulangan di Jawa dan Madura / Pasal 199 ayat (1) RBg.",
      "statuteText": "Permintaan untuk pemeriksaan ulangan harus disampaikan dengan surat atau dengan lisan oleh peminta atau wakilnya kepada Panitera Pengadilan Negeri yang menjatuhkan putusan, dalam empat belas hari, terhitung mulai hari berikutnya pengumuman putusan kepada yang berkepentingan.",
      "analysis": "Pilihan D tepat karena sesuai Pasal 7 ayat (1) UU No. 20 Tahun 1947 / Pasal 199 ayat (1) RBg, tenggang waktu 14 hari dihitung mulai hari berikutnya setelah putusan diucapkan di hadapan para pihak (12 November 2008 sebagai hari ke-1), sehingga hari ke-14 jatuh tepat pada tanggal 25 November 2008. Pilihan A dan B keliru karena menggunakan perhitungan 6 atau 7 hari; dan Pilihan C keliru karena menghitung tanggal pengucapan (11 November 2008) sebagai hari ke-1 sehingga jatuh lebih awal sehari."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 44,
    "category": "Hukum Acara Perdata",
    "topicTag": "Actio Pauliana",
    "question": "Dalam hukum perdata menurut Pasal 1341 KUHPerdata, yang dimaksud dengan hak \"Actio Pauliana\" adalah...",
    "options": [
      {
        "key": "A",
        "text": "Kewenangan debitur untuk membatalkan perjanjian utang secara sepihak terhadap kreditur"
      },
      {
        "key": "B",
        "text": "Hak kreditur untuk menuntut pembatalan segala perbuatan hukum debitur yang tidak diwajibkan dan merugikan kreditur"
      },
      {
        "key": "C",
        "text": "Hak pembeli untuk menuntut pengurangan harga pembelian akibat adanya cacat tersembunyi pada barang"
      },
      {
        "key": "D",
        "text": "Hak ahli waris dalam garis lurus untuk menuntut pengembalian bagian mutlak harta warisan yang dilanggar"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Actio Pauliana adalah hak gugat kreditur untuk menuntut pembatalan segala perbuatan hukum debitur yang tidak diwajibkan dan dilakukan dengan iktikad buruk sehingga merugikan kepentingan kreditur.",
      "legalBasis": "Pasal 1341 Kitab Undang-Undang Hukum Perdata (KUHPerdata).",
      "statuteText": "Meskipun demikian, tiap kreditur boleh mengajukan batalnya segala perbuatan yang tidak diwajibkan yang dilakukan oleh debitur, dengan nama apa pun juga, yang merugikan kreditur, asal dibuktikan bahwa ketika perbuatan itu dilakukan, debitur dan orang yang dengannya ia berbuat mengetahui bahwa perbuatan itu membawa akibat yang merugikan para kreditur.",
      "analysis": "Pilihan B tepat karena Pasal 1341 KUHPerdata memberikan hak gugat kepada kreditur untuk membatalkan perbuatan hukum debitur (misalnya menghibahkan atau mengalihkan aset secara curang) yang merugikan pemenuhan piutang kreditur. Pilihan A keliru karena actio pauliana justru melindungi kepentingan kreditur dari perbuatan curang debitur, bukan hak pembatalan sepihak debitur; Pilihan C keliru karena tuntutan pengurangan harga atas cacat tersembunyi adalah actio quanti minoris (Pasal 1507 KUHPerdata); dan Pilihan D keliru karena tuntutan bagian mutlak warisan merupakan hak terkait legitieme portie (Pasal 913 KUHPerdata)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 45,
    "category": "Hukum Acara Perdata",
    "topicTag": "Unsur Wanprestasi",
    "question": "Dalam hukum perikatan menurut KUHPerdata, bentuk-bentuk wanprestasi (ingkar janji) yang dilakukan oleh debitur meliputi...",
    "options": [
      {
        "key": "A",
        "text": "Hanya tidak memenuhi prestasi sama sekali tanpa mencakup keterlambatan pemenuhan prestasi"
      },
      {
        "key": "B",
        "text": "Hanya keterlambatan memenuhi prestasi meskipun prestasi tersebut telah dilaksanakan sempurna"
      },
      {
        "key": "C",
        "text": "Tidak memenuhi prestasi, terlambat memenuhi prestasi, memenuhi prestasi tidak sebagaimana mestinya, atau melakukan hal yang dilarang perjanjian"
      },
      {
        "key": "D",
        "text": "Menolak menandatangani akta perdamaian di pengadilan walaupun seluruh kewajiban perjanjian telah dipenuhi tepat waktu"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Wanprestasi mencakup empat wujud, yakni tidak berprestasi sama sekali, terlambat berprestasi, berprestasi secara keliru atau tidak sebagaimana mestinya, serta melakukan perbuatan yang dilarang perjanjian.",
      "legalBasis": "Pasal 1238, Pasal 1239, dan Pasal 1243 Kitab Undang-Undang Hukum Perdata (KUHPerdata).",
      "statuteText": "Debitur dinyatakan lalai dengan surat perintah, atau dengan akta sejenis itu, atau berdasarkan kekuatan dari perikatan sendiri, yaitu bila perikatan ini mengakibatkan debitur harus dianggap lalai dengan lewatnya waktu yang ditentukan.",
      "analysis": "Pilihan C tepat karena berdasarkan Pasal 1238, Pasal 1239, dan Pasal 1243 KUHPerdata serta doktrin hukum perikatan, wanprestasi terdiri atas empat bentuk: tidak memenuhi prestasi sama sekali, terlambat memenuhi prestasi, memenuhi prestasi tetapi tidak sebagaimana mestinya, atau melakukan perbuatan yang dilarang dalam perjanjian. Pilihan A dan B keliru karena masing-masing hanya menyebut satu unsur secara tidak lengkap; sedangkan Pilihan D keliru karena menolak perdamaian bukan bentuk wanprestasi apabila seluruh kewajiban perikatan telah dilaksanakan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 46,
    "category": "Hukum Acara Perdata",
    "topicTag": "Legitieme Portie (Bagian Mutlak)",
    "question": "Bagian tertentu dari harta peninggalan yang tidak dapat dihapuskan atau dikurangi oleh pewaris terhadap ahli waris dalam garis lurus menurut undang-undang berdasarkan KUHPerdata disebut...",
    "options": [
      {
        "key": "A",
        "text": "Fidei commis"
      },
      {
        "key": "B",
        "text": "Legitieme portie"
      },
      {
        "key": "C",
        "text": "Erfstelling"
      },
      {
        "key": "D",
        "text": "Testamentair executeur"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Legitieme portie adalah bagian mutlak dari harta peninggalan yang wajib diberikan kepada ahli waris dalam garis lurus menurut undang-undang dan tidak boleh dilanggar oleh hibah atau wasiat pewaris.",
      "legalBasis": "Pasal 913 sampai dengan Pasal 929 Kitab Undang-Undang Hukum Perdata (KUHPerdata).",
      "statuteText": "Bagian mutlak (legitieme portie) adalah suatu bagian dari harta benda yang harus diberikan kepada para ahli waris dalam garis lurus menurut undang-undang, yang terhadapnya orang yang meninggal dunia tidak boleh menetapkan sesuatu, baik sebagai hibah antara orang-orang yang masih hidup maupun sebagai wasiat.",
      "analysis": "Pilihan B tepat karena Pasal 913 KUHPerdata mendefinisikan legitieme portie sebagai bagian mutlak yang dilindungi undang-undang bagi legitimaris (ahli waris garis lurus ke bawah maupun ke atas) terhadap hibah maupun wasiat pewaris. Pilihan A keliru karena fidei commis adalah pengangkatan waris secara bertingkat dengan kewajiban menyimpan dan menyerahkan harta warisan kepada pihak berikutnya; Pilihan C keliru karena erfstelling adalah pengangkatan ahli waris melalui surat wasiat; dan Pilihan D keliru karena testamentair executeur adalah pelaksana wasiat yang ditunjuk oleh pewaris."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 47,
    "category": "Hukum Acara Perdata",
    "topicTag": "Upaya Hukum Terhadap Verstek",
    "question": "Terhadap putusan Verstek yang mengabulkan gugatan Penggugat, upaya hukum biasa yang secara khusus disediakan bagi Tergugat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Banding"
      },
      {
        "key": "B",
        "text": "Perlawanan / Verzet"
      },
      {
        "key": "C",
        "text": "Kasasi"
      },
      {
        "key": "D",
        "text": "Peninjauan kembali"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Upaya hukum biasa yang secara khusus disediakan bagi Tergugat yang dihukum dalam putusan verstek adalah perlawanan (verzet).",
      "legalBasis": "Pasal 129 HIR / Pasal 153 RBg.",
      "statuteText": "Tergugat yang dihukum dengan putusan verstek berhak mengajukan perlawanan (verzet) dalam tenggang waktu 14 hari setelah pemberitahuan putusan verstek disampaikan kepadanya secara pribadi.",
      "analysis": "Pilihan B tepat karena berdasarkan Pasal 129 ayat (1) dan ayat (2) HIR / Pasal 153 RBg, Tergugat yang dihukum dengan putusan verstek berhak mengajukan perlawanan (verzet) kepada Pengadilan Negeri yang sama dalam tenggang waktu 14 hari sejak pemberitahuan putusan disampaikan secara sah kepada Tergugat pribadi. Pilihan A keliru karena upaya hukum banding dalam putusan verstek disediakan bagi Penggugat apabila gugatannya ditolak atau dinyatakan tidak dapat diterima (Pasal 125 ayat (3) HIR), sedangkan bagi Tergugat banding baru terbuka setelah putusan atas verzet; Pilihan C keliru karena kasasi diajukan terhadap putusan tingkat banding; dan Pilihan D keliru karena peninjauan kembali merupakan upaya hukum luar biasa atas putusan yang telah berkekuatan hukum tetap."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 48,
    "category": "Hukum Acara Perdata",
    "topicTag": "Judex Facti vs Judex Juris",
    "question": "Hakim pada peradilan tingkat pertama dan tingkat banding yang berwenang memeriksa fakta-fakta peristiwa, alat bukti, serta menilai hasil pembuktian para pihak disebut...",
    "options": [
      {
        "key": "A",
        "text": "Judex facti"
      },
      {
        "key": "B",
        "text": "Judex juris"
      },
      {
        "key": "C",
        "text": "Hakim Pengadilan Negeri saja"
      },
      {
        "key": "D",
        "text": "Hakim Pengadilan Tinggi saja"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Judex facti adalah hakim pemeriksa fakta perkara (meliputi hakim Pengadilan Negeri pada tingkat pertama dan hakim Pengadilan Tinggi pada tingkat banding).",
      "legalBasis": "Pasal 19 dan Pasal 20 ayat (2) UU No. 48 Tahun 2009 tentang Kekuasaan Kehakiman jo. Pasal 30 ayat (1) UU No. 14 Tahun 1985 tentang Mahkamah Agung.",
      "statuteText": "Mahkamah Agung dalam tingkat kasasi membatalkan putusan atau penetapan pengadilan-pengadilan dari semua lingkungan peradilan karena: a. tidak berwenang atau melampaui batas wewenang; b. salah menerapkan atau melanggar hukum yang berlaku; c. lalai memenuhi syarat-syarat yang diwajibkan oleh peraturan perundang-undangan.",
      "analysis": "Pilihan A tepat karena dalam doktrin peradilan Indonesia, Pengadilan Negeri dan Pengadilan Tinggi berkedudukan sebagai judex facti yang berwenang memeriksa peristiwa konkret dan menilai bobot pembuktian. Pilihan B keliru karena judex juris merujuk pada Mahkamah Agung di tingkat kasasi yang hanya memeriksa penerapan hukumnya sesuai Pasal 30 ayat (1) UU Mahkamah Agung; sedangkan Pilihan C dan D keliru karena kedua tingkatan pengadilan tersebut bersama-sama berperan sebagai judex facti, bukan salah satu saja."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 49,
    "category": "Hukum Acara Perdata",
    "topicTag": "Intervensi Voeging",
    "question": "Jika dalam suatu perkara perdata yang sedang berlangsung terdapat pihak ketiga yang masuk menggabungkan diri secara sukarela untuk membela kepentingan salah satu pihak (Penggugat atau Tergugat), maka bentuk intervensi ini disebut...",
    "options": [
      {
        "key": "A",
        "text": "Tussenkomst (menengahi)"
      },
      {
        "key": "B",
        "text": "Voeging (menyertai)"
      },
      {
        "key": "C",
        "text": "Derden verzet (perlawanan pihak ketiga)"
      },
      {
        "key": "D",
        "text": "Vrijwaring (penanggungan)"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Voeging adalah bentuk intervensi pihak ketiga yang masuk secara sukarela ke dalam perkara yang sedang berjalan untuk memihak dan membantu salah satu pihak.",
      "legalBasis": "Pasal 279 sampai dengan Pasal 282 Reglement op de Rechtsvordering (Rv).",
      "statuteText": "Barangsiapa mempunyai kepentingan dalam suatu perkara yang sedang berjalan antara pihak-pihak lain dapat menuntut untuk diizinkan menggabungkan diri atau menengahi dalam perkara tersebut.",
      "analysis": "Pilihan B tepat karena voeging (menyertai) merupakan keikutsertaan sukarela pihak ketiga untuk mendukung posisi Penggugat atau Tergugat sesuai Pasal 279 Rv. Pilihan A keliru karena tussenkomst adalah masuknya pihak ketiga untuk memperjuangkan kepentingannya sendiri melawan Penggugat dan Tergugat sekaligus; Pilihan C keliru karena derden verzet adalah perlawanan terhadap sita atau putusan oleh pihak ketiga di luar persidangan; dan Pilihan D keliru karena vrijwaring adalah penarikan paksa pihak ketiga atas permohonan salah satu pihak (penanggungan)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 50,
    "category": "Hukum Acara Perdata",
    "topicTag": "Perdamaian di Persidangan",
    "question": "Dalam menghadapi suatu perkara perdata yang dihadiri kedua belah pihak pada hari sidang pertama, hakim wajib terlebih dahulu mengupayakan perdamaian antara para pihak. Kewajiban hakim tersebut dalam HIR / RBg diatur pada...",
    "options": [
      {
        "key": "A",
        "text": "Pasal 118 HIR / Pasal 142 RBg"
      },
      {
        "key": "B",
        "text": "Pasal 130 HIR / Pasal 154 RBg"
      },
      {
        "key": "C",
        "text": "Pasal 132 HIR / Pasal 156 RBg"
      },
      {
        "key": "D",
        "text": "Pasal 133 HIR / Pasal 159 RBg"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Kewajiban hakim mengupayakan perdamaian sebelum memeriksa pokok perkara diatur dalam Pasal 130 HIR / Pasal 154 RBg yang pelaksanaannya diintegrasikan melalui PERMA No. 1 Tahun 2016.",
      "legalBasis": "Pasal 130 HIR / Pasal 154 RBg jo. PERMA No. 1 Tahun 2016 tentang Prosedur Mediasi di Pengadilan.",
      "statuteText": "Jika pada hari yang ditentukan itu, kedua belah pihak datang, maka Pengadilan Negeri dengan pertolongan Ketua mencoba akan memperdamaikan mereka; dan jika perdamaian itu tercapai, maka pada waktu bersidang diperbuat sebuah surat (akta) tentang itu, yang kekuatannya sama dengan keputusan hakim pada tingkat penghabisan.",
      "analysis": "Pilihan B tepat karena Pasal 130 HIR / Pasal 154 RBg secara eksplisit mewajibkan hakim mengusahakan perdamaian apabila kedua belah pihak hadir, dan apabila tercapai dituangkan dalam akta perdamaian (acte van dading) yang berkekuatan hukum tetap serta eksekutorial. Pilihan A keliru karena Pasal 118 HIR / Pasal 142 RBg mengatur pengajuan surat gugatan dan kompetensi relatif; Pilihan C keliru karena Pasal 132 HIR / Pasal 156 RBg mengatur bantuan keterangan ketua sidang agar persidangan berjalan teratur; dan Pilihan D keliru karena Pasal 133 HIR / Pasal 159 RBg mengatur eksepsi ketidakwenangan relatif pengadilan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 51,
    "category": "Hukum Acara Perdata",
    "topicTag": "Susunan Alat Bukti Perdata",
    "question": "Berdasarkan Pasal 164 HIR / Pasal 284 RBg jo. Pasal 1866 KUHPerdata, alat-alat bukti yang sah dan diakui secara limitatif dalam hukum acara perdata terdiri atas...",
    "options": [
      {
        "key": "A",
        "text": "Alat bukti surat, saksi, pengetahuan hakim, keyakinan hakim, dan sumpah"
      },
      {
        "key": "B",
        "text": "Alat bukti surat, saksi, yurisprudensi, keyakinan hakim, dan sumpah"
      },
      {
        "key": "C",
        "text": "Alat bukti surat, saksi, persangkaan, keyakinan hakim, dan sumpah"
      },
      {
        "key": "D",
        "text": "Alat bukti surat, saksi, persangkaan, pengakuan, dan sumpah"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Lima alat bukti sah dalam hukum acara perdata menurut Pasal 164 HIR / Pasal 284 RBg adalah surat, saksi, persangkaan, pengakuan, dan sumpah.",
      "legalBasis": "Pasal 164 HIR / Pasal 284 RBg jo. Pasal 1866 KUHPerdata.",
      "statuteText": "Alat-alat bukti ialah: bukti dengan surat, bukti dengan saksi, persangkaan, pengakuan, dan sumpah.",
      "analysis": "Pilihan D tepat karena menyebutkan secara lengkap kelima alat bukti perdata yang bersifat limitatif menurut Pasal 164 HIR / Pasal 284 RBg jo. Pasal 1866 KUHPerdata. Pilihan A, B, dan C keliru karena mencantumkan unsur pengetahuan hakim, yurisprudensi, atau keyakinan hakim (yang merupakan syarat pembuktian pidana dalam Pasal 183 KUHAP, bukan alat bukti acara perdata) serta menghilangkan unsur pengakuan atau persangkaan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 52,
    "category": "Hukum Acara Perdata",
    "topicTag": "Kasus Wanprestasi & Rekonvensi",
    "question": "Amir menggugat Budi di Pengadilan Negeri agar Budi menyerahkan tanah yang dibeli Amir. Namun Amir sendiri belum melunasi sisa pembayaran harga tanah tersebut. Untuk menuntut pelunasan pembayaran dari Amir dalam perkara yang sama, langkah hukum yang tepat bagi Budi adalah...",
    "options": [
      {
        "key": "A",
        "text": "Mengajukan perlawanan pihak ketiga (derden verzet)"
      },
      {
        "key": "B",
        "text": "Mengajukan gugatan rekonvensi terhadap Amir"
      },
      {
        "key": "C",
        "text": "Menunggu hingga putusan perkara asal berkekuatan hukum tetap terlebih dahulu"
      },
      {
        "key": "D",
        "text": "Mengajukan permohonan voluntaria secara sepihak kepada Ketua Pengadilan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Tergugat Budi dapat mengajukan gugatan balik (rekonvensi) terhadap Penggugat Amir bersama jawabannya agar tuntutan pelunasan harga tanah diperiksa dan diputus serentak.",
      "legalBasis": "Pasal 132a dan Pasal 132b HIR / Pasal 157 dan Pasal 158 RBg.",
      "statuteText": "Tergugat berhak dalam tiap-tiap perkara untuk mengajukan tuntutan balik (rekonvensi), dan kedua perkara itu diperiksa dan diputus bersama-sama dalam satu putusan.",
      "analysis": "Pilihan B tepat karena Pasal 132a dan Pasal 132b HIR / Pasal 157 dan Pasal 158 RBg memfasilitasi Tergugat mengajukan gugatan rekonvensi atas tuntutan yang saling berkaitan guna mewujudkan asas peradilan sederhana, cepat, dan biaya ringan serta mencegah putusan yang saling bertentangan. Pilihan A keliru karena derden verzet hanya untuk pihak ketiga di luar perkara; Pilihan C keliru karena penundaan justru menghilangkan kesempatan rekonvensi dan memicu perkara baru; dan Pilihan D keliru karena tuntutan pelunasan utang bersifat sengketa (contentiosa), bukan permohonan sepihak (voluntaria)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 53,
    "category": "Hukum Acara Perdata",
    "topicTag": "Eksepsi Kompetensi Relatif",
    "question": "Eksepsi mengenai tidak berwenangnya suatu Pengadilan Negeri untuk mengadili perkara perdata yang berkaitan dengan batas wilayah hukum (domisili) pengadilan tersebut disebut...",
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
        "text": "Eksepsi peremptoir"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Kewenangan mengadili antar-pengadilan negeri sejenis berdasarkan pembagian wilayah hukum disebut kompetensi relatif, yang bantahannya wajib diajukan pada permulaan sidang sebelum menjawab pokok perkara.",
      "legalBasis": "Pasal 118 ayat (1) dan Pasal 133 HIR / Pasal 142 ayat (1) dan Pasal 159 RBg.",
      "statuteText": "Jika Tergugat dipanggil menghadap Pengadilan Negeri yang tidak berwenang mengadili sengketa itu menurut aturan Pasal 118, ia dapat menuntut supaya hakim menyatakan dirinya tidak berwenang, asal tuntutan itu dimajukan sebelum ia mengajukan pembelaan terhadap pokok perkaranya.",
      "analysis": "Pilihan C tepat karena kompetensi relatif menyangkut pembagian kewenangan teritorial antar-Pengadilan Negeri berdasarkan Pasal 118 HIR / Pasal 142 RBg dan eksepsinya wajib diajukan pada jawaban pertama (Pasal 133 HIR / Pasal 159 RBg). Pilihan A keliru karena kompetensi absolut berkaitan dengan kewenangan antar lingkungan peradilan yang berbeda (misalnya PN vs Pengadilan Agama atau PTUN); Pilihan B keliru karena eksepsi dilatoir menunda pemeriksaan gugatan yang prematur; dan Pilihan D keliru karena eksepsi peremptoir menolak gugatan atas dasar daluwarsa atau ne bis in idem."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 54,
    "category": "Hukum Acara Perdata",
    "topicTag": "Dasar Hukum Gugatan Tertulis",
    "question": "Tata cara pengajuan surat gugatan perdata secara tertulis kepada Ketua Pengadilan Negeri yang berwenang menurut hukum acara perdata diatur secara khusus dalam ketentuan...",
    "options": [
      {
        "key": "A",
        "text": "Pasal 118 ayat (1) HIR / Pasal 142 ayat (1) RBg"
      },
      {
        "key": "B",
        "text": "Pasal 120 HIR / Pasal 144 RBg"
      },
      {
        "key": "C",
        "text": "Pasal 123 ayat (1) HIR / Pasal 147 ayat (1) RBg"
      },
      {
        "key": "D",
        "text": "Pasal 125 ayat (1) HIR / Pasal 149 ayat (1) RBg"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Tata cara pengajuan gugatan perdata secara tertulis kepada Ketua Pengadilan Negeri diatur dalam Pasal 118 ayat (1) HIR / Pasal 142 ayat (1) RBg.",
      "legalBasis": "Pasal 118 ayat (1) HIR / Pasal 142 ayat (1) RBg.",
      "statuteText": "Gugatan perdata, yang pada tingkat pertama masuk kekuasaan Pengadilan Negeri, harus dimasukkan dengan surat permintaan yang ditandatangani oleh penggugat atau oleh wakilnya menurut Pasal 123, kepada Ketua Pengadilan Negeri di daerah hukum siapa tergugat bertempat diam atau jika tidak diketahui tempat diamnya, tempat tinggalnya yang sebenarnya.",
      "analysis": "Pilihan A tepat karena Pasal 118 ayat (1) HIR / Pasal 142 ayat (1) RBg merupakan dasar normatif pengajuan gugatan perdata secara tertulis yang ditandatangani oleh Penggugat atau kuasanya kepada Ketua Pengadilan Negeri yang berwenang. Pilihan B keliru karena Pasal 120 HIR / Pasal 144 RBg secara khusus mengatur pengajuan gugatan secara lisan bagi Penggugat yang tidak pandai membaca dan menulis; Pilihan C keliru karena Pasal 123 ayat (1) HIR / Pasal 147 ayat (1) RBg mengatur surat kuasa khusus; dan Pilihan D keliru karena Pasal 125 ayat (1) HIR / Pasal 149 ayat (1) RBg mengatur penjatuhan putusan verstek apabila Tergugat tidak hadir."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 55,
    "category": "Hukum Acara Pidana",
    "topicTag": "Asas Legalitas & Non-Retroaktif",
    "question": "Budi melakukan perbuatan pidana pada bulan Februari 2026. Jaksa menuntut Budi berdasarkan ketentuan pidana yang baru berlaku setelah perbuatan tersebut dilakukan. Asas hukum yang tepat adalah...",
    "options": [
      {
        "key": "A",
        "text": "Peraturan pidana baru dapat berlaku surut demi kepentingan negara"
      },
      {
        "key": "B",
        "text": "Peraturan pidana hanya berlaku terhadap WNI"
      },
      {
        "key": "C",
        "text": "Tidak seorang pun dapat dipidana berdasarkan aturan yang berlaku setelah perbuatan dilakukan (Non-retroaktif)"
      },
      {
        "key": "D",
        "text": "Hakim bebas menerapkan hukum yang dianggap adil"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Asas legalitas melarang pemberlakuan surut hukum pidana (nullum delictum nulla poena sine praevia lege poenali).",
      "legalBasis": "Pasal 1 ayat (1) KUHP (lama) jo. Pasal 1 ayat (1) & Pasal 3 ayat (1) UU No. 1 Tahun 2023 (KUHP Nasional) jo. Pasal 28I ayat (1) UUD 1945.",
      "statuteText": "Suatu perbuatan tidak dapat dipidana, kecuali berdasarkan kekuatan ketentuan perundang-undangan pidana yang telah ada sebelum perbuatan itu dilakukan.",
      "analysis": "Pilihan C tepat karena asas legalitas (nullum delictum nulla poena sine praevia lege poenali) melarang pemberlakuan surut hukum pidana (non-retroaktif) yang memberatkan pelaku. Pilihan A keliru karena hukum pidana tidak boleh berlaku surut secara bebas, pilihan B keliru karena asas teritorial berlaku bagi setiap orang di wilayah RI bukan hanya WNI, dan pilihan D keliru karena hakim dilarang menjatuhkan pidana tanpa dasar undang-undang.",
      "ruuComparison": "Dalam pembaruan hukum pidana dan RUU KUHAP, prinsip non-retroaktif tetap menjadi pilar utama due process of law; apabila terjadi perubahan peraturan perundang-undangan setelah perbuatan dilakukan, diterapkan ketentuan yang paling menguntungkan bagi tersangka/terdakwa (asas lex mitior)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 56,
    "category": "Hukum Acara Pidana",
    "topicTag": "Percobaan Tindak Pidana (Poging)",
    "question": "Andi berniat membunuh Yoko dengan racun. Racun telah dimasukkan ke minuman, tetapi belum diminum karena diketahui oleh pelayan. Perbuatan Andi termasuk...",
    "options": [
      {
        "key": "A",
        "text": "Persiapan"
      },
      {
        "key": "B",
        "text": "Percobaan tindak pidana (Poging)"
      },
      {
        "key": "C",
        "text": "Turut serta"
      },
      {
        "key": "D",
        "text": "Pembantuan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pelaksanaan telah dimulai namun terhalang bukan karena kehendak sendiri adalah percobaan.",
      "legalBasis": "Pasal 53 ayat (1) KUHP jo. Pasal 17 ayat (1) UU No. 1 Tahun 2023 (KUHP Nasional).",
      "statuteText": "Mencoba melakukan kejahatan dipidana, jika niat untuk itu telah ternyata dari adanya permulaan pelaksanaan, dan tidak selesainya pelaksanaan itu, bukan semata-mata disebabkan karena kehendaknya sendiri.",
      "analysis": "Pilihan B tepat karena niat Andi sudah terwujud dalam permulaan pelaksanaan (memasukkan racun ke minuman) dan gagal bukan karena kehendak Andi sendiri, melainkan diketahui pelayan. Pilihan A keliru karena perbuatan sudah melampaui tahap persiapan, sedangkan pilihan C dan D keliru karena tidak melibatkan pelaku lain (penyertaan/pembantuan).",
      "ruuComparison": "Dalam KUHP Nasional dan sinkronisasi RUU KUHAP, percobaan (poging) tetap mensyaratkan pembuktian niat dan permulaan pelaksanaan secara objektif-subjektif oleh penyidik dan penuntut umum, serta penjatuhan pidana maksimalnya tetap dikurangi sepertiga dari ancaman pokok kecuali ditentukan lain."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 57,
    "category": "Hukum Acara Pidana",
    "topicTag": "Penyertaan (Doen Pleger)",
    "question": "Toni menyuruh Neymar mencuri kendaraan dengan memberikan seluruh rencana, sedangkan Toni sendiri tidak berada di lokasi. Status hukum Toni adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pembantu"
      },
      {
        "key": "B",
        "text": "Pelaku tunggal"
      },
      {
        "key": "C",
        "text": "Orang yang menyuruh melakukan (Doen Pleger)"
      },
      {
        "key": "D",
        "text": "Saksi"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pihak yang menyuruh orang lain melakukan tindak pidana dikualifikasikan sebagai Doen Pleger.",
      "legalBasis": "Pasal 55 ayat (1) ke-1 KUHP jo. Pasal 20 huruf b UU No. 1 Tahun 2023 (KUHP Nasional).",
      "statuteText": "Dipidana sebagai pelaku tindak pidana: mereka yang melakukan, yang menyuruh melakukan, dan yang turut serta melakukan perbuatan.",
      "analysis": "Pilihan C tepat karena Toni merancang kejahatan dan menggerakkan orang lain untuk melakukannya tanpa hadir langsung sebagai eksekutor (doen pleger / menyuruh melakukan). Pilihan A keliru karena pembantuan bersifat sekunder (Pasal 56), pilihan B keliru karena ada dua orang terlibat, dan pilihan D keliru karena Toni justru aktor intelektualnya.",
      "ruuComparison": "KUHP Nasional (Pasal 20) merumuskan kembali bentuk penyertaan secara lebih jelas (pelaku, menyuruh melakukan, turut serta, dan penganjur). Dalam RUU KUHAP, pembuktian peran penyertaan tetap menuntut surat dakwaan penuntut umum menguraikan secara cermat peran masing-masing peserta delik."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 58,
    "category": "Hukum Acara Pidana",
    "topicTag": "UU Tindak Pidana Korupsi",
    "question": "Pengaturan hukum utama mengenai tindak pidana korupsi di Indonesia saat ini diatur dalam...",
    "options": [
      {
        "key": "A",
        "text": "UU No. 31 Tahun 1971"
      },
      {
        "key": "B",
        "text": "UU No. 14 Tahun 1985"
      },
      {
        "key": "C",
        "text": "UU No. 5 Tahun 1999"
      },
      {
        "key": "D",
        "text": "UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Dasar hukum Tipikor adalah UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 43A Undang-Undang No. 31 Tahun 1999 sebagaimana telah diubah dengan Undang-Undang No. 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi.",
      "statuteText": "Setiap orang yang secara melawan hukum melakukan perbuatan memperkaya diri sendiri atau orang lain atau suatu korporasi yang dapat merugikan keuangan negara atau perekonomian negara, dipidana penjara...",
      "analysis": "Pilihan D tepat karena UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 merupakan lex specialis utama pemberantasan tindak pidana korupsi di Indonesia. Pilihan A merupakan UU Tipikor lama yang sudah dicabut, pilihan B mengatur Mahkamah Agung, dan pilihan C mengatur larangan praktik monopoli dan persaingan usaha tidak sehat.",
      "ruuComparison": "RUU KUHAP menegaskan bahwa tindak pidana khusus seperti korupsi tetap tunduk pada hukum acara khusus sepanjang diatur dalam undang-undang sektoralnya (lex specialis derogat legi generali), namun standar perlindungan hak tersangka, praperadilan/Hakim Pemeriksa Pendahuluan, dan pembuktian tetap diselaraskan dengan prinsip umum RUU KUHAP."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 59,
    "category": "Hukum Acara Pidana",
    "topicTag": "Tujuan Penangkapan",
    "question": "Dalam penyidikan, penyidik melakukan penangkapan terhadap tersangka. Tujuan utama penangkapan adalah...",
    "options": [
      {
        "key": "A",
        "text": "Memberikan hukuman awal"
      },
      {
        "key": "B",
        "text": "Mengganti pidana penjara"
      },
      {
        "key": "C",
        "text": "Kepentingan penyidikan sesuai syarat undang-undang"
      },
      {
        "key": "D",
        "text": "Memaksa tersangka mengakui perbuatan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penangkapan adalah tindakan pengekangan sementara guna kepentingan penyidikan, bukan hukuman.",
      "legalBasis": "Pasal 1 angka 20 jo. Pasal 17 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "statuteText": "Penangkapan adalah suatu tindakan penyidik berupa pengekangan sementara waktu kebebasan tersangka atau terdakwa apabila terdapat cukup bukti guna kepentingan penyidikan atau penuntutan dan atau peradilan dalam hal serta menurut cara yang diatur dalam undang-undang ini.",
      "analysis": "Pilihan C tepat karena penangkapan merupakan upaya paksa sementara semata-mata untuk kepentingan penyidikan/penuntutan berdasarkan bukti permulaan yang cukup. Pilihan A dan B keliru karena penangkapan bukan bentuk pemidanaan, dan pilihan D keliru karena melanggar asas non-self-incrimination (larangan pemaksaan pengakuan).",
      "ruuComparison": "Dalam RUU KUHAP, syarat penangkapan diperketat dengan kewajiban adanya sekurang-kurangnya dua alat bukti permulaan dan pengawasan ketat oleh Hakim Pemeriksa Pendahuluan untuk mencegah penyalahgunaan upaya paksa."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 60,
    "category": "Hukum Acara Pidana",
    "topicTag": "Hak Bantuan Hukum di Penyidikan",
    "question": "Pada saat pemeriksaan penyidikan, tersangka meminta didampingi advokat. Tindakan penyidik seharusnya...",
    "options": [
      {
        "key": "A",
        "text": "Menolak permohonan tersebut"
      },
      {
        "key": "B",
        "text": "Menunda tanpa alasan yang jelas"
      },
      {
        "key": "C",
        "text": "Memberikan kesempatan memperoleh bantuan hukum"
      },
      {
        "key": "D",
        "text": "Menunggu persetujuan jaksa penuntut umum"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penyidik wajib memberikan akses dan memberitahukan hak bantuan hukum advokat.",
      "legalBasis": "Pasal 54 jo. Pasal 114 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP) jo. UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Guna kepentingan pembelaan, tersangka atau terdakwa berhak mendapat bantuan hukum dari seorang atau lebih penasihat hukum selama dalam waktu dan pada setiap tingkat pemeriksaan, menurut tata cara yang ditentukan dalam undang-undang ini.",
      "analysis": "Pilihan C tepat karena hak atas bantuan hukum merupakan hak konstitusional dan hak asasi tersangka pada setiap tingkat pemeriksaan. Pilihan A dan B melanggar kewajiban hukum penyidik, sedangkan pilihan D keliru karena bantuan hukum adalah hak tersangka yang tidak bergantung pada izin penuntut umum.",
      "ruuComparison": "RUU KUHAP memperkuat hak bantuan hukum sejak saat dimulainya penyidikan (bahkan saat penangkapan), termasuk kewajiban penyidik menghadirkan advokat secara pro bono bagi tersangka tindak pidana dengan ancaman pidana 5 tahun atau lebih, serta sanksi pembatalan hasil pemeriksaan bila hak tersebut dilanggar."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 61,
    "category": "Hukum Acara Pidana",
    "topicTag": "Pertanggungjawaban Pidana Korporasi",
    "question": "PT XYZ melakukan pencemaran lingkungan hidup melalui kebijakan direksi. Menurut KUHP Nasional (UU No. 1 Tahun 2023)...",
    "options": [
      {
        "key": "A",
        "text": "Hanya direktur yang dapat dipidana"
      },
      {
        "key": "B",
        "text": "Hanya pegawai lapangan yang dipidana"
      },
      {
        "key": "C",
        "text": "Korporasi dapat dimintai pertanggungjawaban pidana"
      },
      {
        "key": "D",
        "text": "Korporasi tidak dapat dipidana"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "KUHP Nasional mengatur secara tegas pertanggungjawaban pidana korporasi.",
      "legalBasis": "Pasal 45, Pasal 47 ayat (1), dan Pasal 48 ayat (1) UU No. 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana (KUHP Nasional).",
      "statuteText": "Korporasi merupakan subjek tindak pidana. Tindak pidana oleh korporasi dapat dipertanggungjawabkan kepada korporasi itu sendiri, pengurus yang mempunyai kedudukan fungsional, pemberi perintah, pemegang kendali, dan/atau pemilik manfaat korporasi.",
      "analysis": "Pilihan C tepat karena KUHP Nasional secara eksplisit menempatkan korporasi sebagai subjek hukum pidana yang dapat dimintai pertanggungjawaban selain pengurus/pengendalinya. Pilihan A dan B keliru karena menyempitkan pertanggungjawaban pada individu saja, dan pilihan D bertentangan dengan Pasal 45 KUHP Nasional.",
      "ruuComparison": "RUU KUHAP mengakomodasi tata cara pemeriksaan korporasi sebagai tersangka/terdakwa (termasuk pemanggilan, penyitaan aset korporasi, hingga penjatuhan pidana tambahan terhadap korporasi), melengkapi PERMA No. 13 Tahun 2016 yang selama ini mengisi kekosongan hukum acara korporasi dalam KUHAP 1981."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 62,
    "category": "Hukum Acara Pidana",
    "topicTag": "Pembelaan Terpaksa (Noodweer)",
    "question": "Zidane memukul Materazzi untuk mempertahankan diri dari serangan pisau yang sedang berlangsung secara seketika. Perbuatan Zidane merupakan...",
    "options": [
      {
        "key": "A",
        "text": "Penganiayaan biasa"
      },
      {
        "key": "B",
        "text": "Pembelaan terpaksa yang melampaui batas (Noodweer Exces)"
      },
      {
        "key": "C",
        "text": "Pembelaan terpaksa (Noodweer)"
      },
      {
        "key": "D",
        "text": "Percobaan pembunuhan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pembelaan seketika dari serangan melawan hukum yang proporsional adalah Noodweer (alasan pembenar).",
      "legalBasis": "Pasal 34 UU No. 1 Tahun 2023 (KUHP Nasional) jo. Pasal 49 ayat (1) KUHP lama.",
      "statuteText": "Setiap orang yang terpaksa melakukan perbuatan yang dilarang tidak dipidana, jika perbuatan tersebut dilakukan karena pembelaan terhadap serangan atau ancaman serangan seketika yang melawan hukum terhadap diri sendiri atau orang lain, kehormatan dalam arti kesusilaan, atau harta benda sendiri atau orang lain.",
      "analysis": "Pilihan C tepat karena tindakan Zidane bersifat proporsional untuk menangkis serangan pisau yang berlangsung seketika dan melawan hukum (alasan pembenar noodweer). Pilihan A dan D keliru karena unsur sifat melawan hukumnya hapus, sedangkan pilihan B keliru karena tidak ada unsur melampaui batas akibat keguncangan jiwa hebat (noodweer exces).",
      "ruuComparison": "Dalam RUU KUHAP, jika dalam pemeriksaan pendahuluan atau persidangan terbukti adanya alasan pembenar seperti pembelaan terpaksa, Hakim Pemeriksa Pendahuluan maupun Majelis Hakim berwenang menghentikan penuntutan atau memutus lepas dari segala tuntutan hukum secara lebih akuntabel."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 63,
    "category": "Hukum Acara Pidana",
    "topicTag": "Sistem Peradilan Pidana Anak",
    "question": "Dasar hukum yang mengatur tentang sistem peradilan pidana anak saat ini adalah...",
    "options": [
      {
        "key": "A",
        "text": "Undang-Undang Nomor 3 Tahun 1997"
      },
      {
        "key": "B",
        "text": "Undang-Undang Nomor 11 Tahun 2012"
      },
      {
        "key": "C",
        "text": "Undang-Undang Nomor 23 Tahun 2002"
      },
      {
        "key": "D",
        "text": "Undang-Undang Nomor 35 Tahun 2014"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Sistem Peradilan Pidana Anak diatur dalam UU No. 11 Tahun 2012 (SPPA).",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 108 Undang-Undang No. 11 Tahun 2012 tentang Sistem Peradilan Pidana Anak (SPPA).",
      "statuteText": "Sistem Peradilan Pidana Anak adalah keseluruhan proses penyelesaian perkara Anak yang berhadapan dengan hukum, mulai tahap penyelidikan sampai dengan tahap pembimbingan setelah menjalani pidana, yang wajib mengutamakan pendekatan Keadilan Restoratif.",
      "analysis": "Pilihan B tepat karena UU No. 11 Tahun 2012 menggantikan UU No. 3 Tahun 1997 dengan mengedepankan diversi dan keadilan restoratif. Pilihan A adalah UU Pengadilan Anak yang sudah dicabut, sedangkan pilihan C dan D mengatur Perlindungan Anak secara umum (bukan hukum acara SPPA).",
      "ruuComparison": "RUU KUHAP memosisikan UU SPPA sebagai hukum acara khusus bagi anak yang berhadapan dengan hukum, sekaligus mengadopsi paradigma keadilan restoratif (restorative justice) dan diversi dari UU SPPA ke dalam sistem peradilan pidana umum bagi orang dewasa."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 64,
    "category": "Hukum Acara Pidana",
    "topicTag": "Tujuan Pemidanaan Modern",
    "question": "Menurut KUHP Nasional, tujuan pemidanaan bukan semata-mata pembalasan. Tujuan pemidanaan meliputi...",
    "options": [
      {
        "key": "A",
        "text": "Balas dendam negara"
      },
      {
        "key": "B",
        "text": "Memiskinkan pelaku"
      },
      {
        "key": "C",
        "text": "Mencegah tindak pidana, membina pelaku, memulihkan keseimbangan, dan mewujudkan keadilan"
      },
      {
        "key": "D",
        "text": "Menghukum seberat-beratnya"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Paradigma pemidanaan KUHP Nasional bergeser ke arah rehabilitatif, edukatif, dan keadilan restoratif.",
      "legalBasis": "Pasal 51 dan Pasal 54 ayat (2) UU No. 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana (KUHP Nasional).",
      "statuteText": "Pemidanaan bertujuan: a. mencegah dilakukannya Tindak Pidana dengan menegakkan norma hukum demi pelindungan dan pengayoman masyarakat; b. memasyarakatkan terpidana dengan mengadakan pembinaan dan pembimbingan; c. menyelesaikan konflik yang ditimbulkan akibat Tindak Pidana, memulihkan keseimbangan, serta mendatangkan rasa aman dan damai; dan d. menumbuhkan rasa penyesalan dan membebaskan rasa bersalah pada terpidana.",
      "analysis": "Pilihan C tepat karena merangkum empat tujuan pemidanaan modern dalam Pasal 51 KUHP Nasional. Pilihan A, B, dan D keliru karena Pasal 54 ayat (2) secara tegas menyatakan pemidanaan tidak dimaksudkan untuk menderitakan dan merendahkan martabat manusia (bukan balas dendam).",
      "ruuComparison": "RUU KUHAP menyelaraskan hukum acara dengan tujuan pemidanaan KUHP Nasional melalui perluasan mekanisme penyelesaian perkara di luar pengadilan (keadilan restoratif), pidana kerja sosial, dan pengawasan pelaksanaan putusan oleh hakim."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 65,
    "category": "Hukum Acara Pidana",
    "topicTag": "Jenis Pidana Pokok KUHP Baru",
    "question": "Menurut Pasal 65 KUHP Nasional (UU No. 1 Tahun 2023), jenis-jenis pidana pokok meliputi...",
    "options": [
      {
        "key": "A",
        "text": "Pidana mati, pidana penjara, pidana kurungan, dan pidana denda"
      },
      {
        "key": "B",
        "text": "Pidana penjara, pidana kerja sosial, dan pidana kurungan"
      },
      {
        "key": "C",
        "text": "Pidana penjara, pidana tutupan, pidana pengawasan, pidana denda, dan pidana kerja sosial"
      },
      {
        "key": "D",
        "text": "Pidana tutupan, pidana pengawasan, dan pencabutan hak tertentu"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pidana pokok terdiri dari pidana penjara, tutupan, pengawasan, denda, dan kerja sosial.",
      "legalBasis": "Pasal 65 ayat (1) UU No. 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana (KUHP Nasional).",
      "statuteText": "Pidana pokok terdiri atas: a. pidana penjara; b. pidana tutupan; c. pidana pengawasan; d. pidana denda; dan e. pidana kerja sosial.",
      "analysis": "Pilihan C tepat karena sesuai persis dengan Pasal 65 ayat (1) KUHP Nasional. Pilihan A merujuk pada KUHP lama (Pasal 10), pilihan B masih mencantumkan pidana kurungan yang telah dihapus dari pidana pokok KUHP baru, dan pilihan D mencampurkan pidana tambahan berupa pencabutan hak tertentu.",
      "ruuComparison": "RUU KUHAP mengatur mekanisme eksekusi dan pengawasan terhadap jenis-jenis pidana baru dalam KUHP Nasional, khususnya tata cara pelaksanaan pidana kerja sosial dan pidana pengawasan agar putusan hakim dapat dieksekusi secara efektif dan humanis."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 66,
    "category": "Hukum Acara Pidana",
    "topicTag": "Alasan Pemaaf",
    "question": "Dalam hukum pidana, penerapan alasan pemaaf (schulduitsluitingsgrond) mengakibatkan...",
    "options": [
      {
        "key": "A",
        "text": "Perbuatan menjadi halal/dibenarkan secara hukum"
      },
      {
        "key": "B",
        "text": "Pelaku tidak dipidana walaupun perbuatannya tetap melawan hukum"
      },
      {
        "key": "C",
        "text": "Barang bukti dikembalikan kepada pelaku"
      },
      {
        "key": "D",
        "text": "Gugatan gugur demi hukum"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Alasan pemaaf menghapus kesalahan pelaku (subjektif), namun perbuatannya tetap bersifat melawan hukum.",
      "legalBasis": "Pasal 38, Pasal 40, dan Pasal 43 UU No. 1 Tahun 2023 (KUHP Nasional).",
      "statuteText": "Setiap orang yang pada waktu melakukan tindak pidana menyandang disabilitas mental dan/atau disabilitas intelektual yang dalam keadaan kekambuhan akut dan disertai gambaran psikotik atau mengalami keterbelakangan intelektual, tidak dapat dipertanggungjawabkan atau dikurangi pidananya.",
      "analysis": "Pilihan B tepat karena alasan pemaaf (schulduitsluitingsgrond) menghapuskan kesalahan si pelaku meskipun perbuatannya tetap melawan hukum, sehingga pelaku tidak dipidana (lepas dari segala tuntutan hukum). Pilihan A adalah akibat alasan pembenar, sedangkan C dan D bukan akibat yuridis langsung dari alasan pemaaf.",
      "ruuComparison": "RUU KUHAP mengatur prosedur pemeriksaan kejiwaan/asesmen forensik psikiatri sejak tahap penyidikan dan kewenangan penuntut umum/hakim untuk menjatuhkan tindakan (maatregel) rehabilitasi atau perawatan alih-alih penahanan rutan biasa."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 67,
    "category": "Hukum Acara Pidana",
    "topicTag": "Yang Bukan Tujuan Pemidanaan",
    "question": "Yang BUKAN merupakan tujuan pemidanaan menurut Pasal 51 KUHP Baru adalah...",
    "options": [
      {
        "key": "A",
        "text": "Mencegah tindak pidana"
      },
      {
        "key": "B",
        "text": "Memasyarakatkan pelaku"
      },
      {
        "key": "C",
        "text": "Memulihkan keseimbangan masyarakat"
      },
      {
        "key": "D",
        "text": "Membalas dendam kepada pelaku"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pembalasan dendam (retributive) murni secara tegas ditolak oleh konsep KUHP modern.",
      "legalBasis": "Pasal 51 jo. Pasal 54 ayat (2) UU No. 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana (KUHP Nasional).",
      "statuteText": "Pemidanaan tidak dimaksudkan untuk menderitakan dan merendahkan martabat manusia.",
      "analysis": "Pilihan D tepat (merupakan jawaban pengecualian) karena teori pembalasan murni (retributif/balas dendam) ditolak secara tegas oleh Pasal 54 ayat (2) KUHP Nasional. Pilihan A, B, dan C seluruhnya merupakan tujuan pemidanaan yang sah sebagaimana tercantum dalam Pasal 51 huruf a, b, dan c KUHP Nasional.",
      "ruuComparison": "RUU KUHAP membumikan prinsip non-retributif tersebut ke dalam hukum acara melalui pengaturan hak-hak korban untuk memperoleh restitusi/kompensasi dan penguatan penyelesaian konflik secara damai sebelum perkara dilimpahkan ke pengadilan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 68,
    "category": "Hukum Acara Pidana",
    "topicTag": "Pengakuan Bersalah (Plea Bargain)",
    "question": "Pengakuan Bersalah (Plea Bargain) menurut pembaruan hukum acara pidana hanya dapat diterapkan apabila...",
    "options": [
      {
        "key": "A",
        "text": "Berlaku untuk semua tindak pidana termasuk tindak pidana berat"
      },
      {
        "key": "B",
        "text": "Terdakwa baru pertama kali melakukan tindak pidana, ancaman pidana penjara paling lama 5 tahun, dan/atau bersedia membayar ganti rugi/restitusi"
      },
      {
        "key": "C",
        "text": "Hanya berlaku bagi perkara korupsi di atas 1 miliar"
      },
      {
        "key": "D",
        "text": "Hanya dapat dilakukan setelah putusan inkracht"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Plea bargain mensyaratkan status pelaku pertama kali, ancaman pidana maksimal 5 tahun, dan kesediaan membayar restitusi.",
      "legalBasis": "Pasal 199 ayat (1) dan ayat (2) Rancangan Pembaruan Hukum Acara Pidana (RUU KUHAP) jo. Pasal 203 ayat (1) KUHAP (UU No. 8 Tahun 1981).",
      "statuteText": "Pada saat penuntut umum membacakan surat dakwaan, terdakwa dapat mengakui semua perbuatan yang didakwakan dan mengaku bersalah melakukan tindak pidana dengan ancaman pidana tidak lebih dari 7 (tujuh) atau 5 (lima) tahun sesuai syarat jalur khusus, yang dicatat dalam berita acara untuk pemeriksaan acara singkat.",
      "analysis": "Pilihan B tepat karena pengakuan bersalah (plea bargain / jalur khusus) dibatasi ketat untuk pelaku yang baru pertama kali melakukan tindak pidana ringan/menengah (ancaman maksimal 5 tahun) serta mengutamakan pemulihan/restitusi. Pilihan A keliru karena tindak pidana berat dikecualikan, pilihan C keliru karena korupsi dikecualikan/bukan syarat khusus, dan pilihan D keliru karena pengakuan bersalah dilakukan sebelum pemeriksaan pokok perkara selesai.",
      "ruuComparison": "Pengaturan Jalur Khusus / Pengakuan Bersalah (Plea Bargain) merupakan salah satu pembaruan fundamental dalam RUU KUHAP guna mempercepat proses peradilan, mengurangi penumpukan perkara, dan meringankan beban lembaga pemasyarakatan melalui acara pemeriksaan singkat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 69,
    "category": "Hukum Acara Pidana",
    "topicTag": "Sistem Peradilan Pidana Terpadu",
    "question": "Koordinasi antara Penyidik dan Penuntut Umum dalam penanganan perkara pidana dilaksanakan dalam kerangka...",
    "options": [
      {
        "key": "A",
        "text": "Arbitrase"
      },
      {
        "key": "B",
        "text": "Sistem Peradilan Pidana Terpadu (Integrated Criminal Justice System)"
      },
      {
        "key": "C",
        "text": "Mediasi Perdata"
      },
      {
        "key": "D",
        "text": "Peradilan Militer"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penyidik dan Penuntut Umum berkoordinasi dalam sistem peradilan pidana terpadu.",
      "legalBasis": "Pasal 1 angka 1, angka 2, angka 3, angka 4 jo. Pasal 138 dan Pasal 139 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "statuteText": "Penyidikan, penuntutan, dan pemeriksaan di sidang pengadilan dilaksanakan secara terpisah secara fungsional namun terkoordinasi antara penyidik, penuntut umum, hakim, dan lembaga pemasyarakatan sesuai kewenangannya masing-masing berdasarkan undang-undang.",
      "analysis": "Pilihan B tepat karena koordinasi fungsional antarinstansi penegak hukum (Kepolisian, Kejaksaan, Pengadilan, Lapas/Advokat) dikenal sebagai Sistem Peradilan Pidana Terpadu (Integrated Criminal Justice System). Pilihan A dan C merupakan mekanisme penyelesaian sengketa perdata/bisnis, sedangkan pilihan D adalah yurisdiksi militer.",
      "ruuComparison": "RUU KUHAP memperjelas mekanisme koordinasi dan prapenuntutan antara Penyidik dan Penuntut Umum (menghapus bolak-balik berkas perkara berulang tanpa batas) serta memperkuat pengawasan yudisial oleh Hakim Pemeriksa Pendahuluan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 70,
    "category": "Hukum Acara Pidana",
    "topicTag": "Keadilan Restoratif di Penyidikan",
    "question": "Salah satu alasan penghentian penyidikan (SP3) dalam pembaruan KUHAP adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyidik sedang cuti tahunan"
      },
      {
        "key": "B",
        "text": "Tercapainya penyelesaian perkara melalui mekanisme Keadilan Restoratif (Restorative Justice)"
      },
      {
        "key": "C",
        "text": "Korban berpindah domisili ke luar kota"
      },
      {
        "key": "D",
        "text": "Saksi berhalangan hadir"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penyelesaian damai melalui keadilan restoratif dapat menjadi dasar penghentian penyidikan.",
      "legalBasis": "Pasal 109 ayat (2) UU No. 8 Tahun 1981 (KUHAP) jo. Pasal 12 Perkapolri No. 8 Tahun 2021 jo. Pasal 5 ayat (1) Peraturan Kejaksaan RI No. 15 Tahun 2020.",
      "statuteText": "Dalam hal penyidik menghentikan penyidikan karena tidak terdapat cukup bukti atau peristiwa tersebut ternyata bukan merupakan tindak pidana atau penyidikan dihentikan demi hukum, penyidik memberitahukan hal itu kepada penuntut umum, tersangka atau keluarganya.",
      "analysis": "Pilihan B tepat karena dalam pembaruan hukum acara pidana serta regulasi Polri dan Kejaksaan, tercapainya kesepakatan Keadilan Restoratif (Restorative Justice) dengan syarat tertentu menjadi alasan sah penghentian perkara demi hukum. Pilihan A, C, dan D bukan merupakan dasar hukum penghentian penyidikan (SP3).",
      "ruuComparison": "RUU KUHAP mengkodifikasi keadilan restoratif (Restorative Justice) langsung di tingkat undang-undang sebagai mekanisme sah penghentian penyidikan dan penuntutan (mengangkat norma yang selama ini tersebar di Perkapolri dan Perja ke level undang-undang)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 71,
    "category": "Hukum Acara Pidana",
    "topicTag": "Kewajiban Memberitahu Hak Bantuan Hukum",
    "question": "Sebelum pemeriksaan penyidikan dimulai, Penyidik wajib memberitahukan kepada Tersangka mengenai...",
    "options": [
      {
        "key": "A",
        "text": "Hak memilih majelis hakim"
      },
      {
        "key": "B",
        "text": "Hak memperoleh Bantuan Hukum atau pendampingan Advokat"
      },
      {
        "key": "C",
        "text": "Hak mengajukan kasasi"
      },
      {
        "key": "D",
        "text": "Hak meminta Peninjauan Kembali"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penyidik wajib memberitahukan hak memperoleh bantuan hukum sebelum BAP dimulai.",
      "legalBasis": "Pasal 114 jo. Pasal 54 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "statuteText": "Dalam hal seorang disangka melakukan suatu tindak pidana sebelum dimulainya pemeriksaan oleh penyidik, penyidik wajib memberitahukan kepadanya tentang haknya untuk mendapatkan bantuan hukum atau bahwa ia dalam perkaranya itu wajib didampingi oleh penasihat hukum sebagaimana dimaksud dalam Pasal 56.",
      "analysis": "Pilihan B tepat karena Pasal 114 KUHAP secara eksplisit mewajibkan penyidik memberitahukan hak tersangka atas bantuan hukum/pendampingan advokat sebelum pemeriksaan dimulai (miranda rule versi Indonesia). Pilihan A, C, dan D merupakan hak pada tahap persidangan/upaya hukum di pengadilan, bukan kewajiban pemberitahuan pra-BAP penyidikan.",
      "ruuComparison": "RUU KUHAP mempertegas kewajiban pemberitahuan hak bantuan hukum disertai ancaman bahwa berita acara pemeriksaan (BAP) yang dibuat tanpa pemberitahuan dan penawaran pendampingan advokat dinyatakan tidak sah dan tidak bernilai sebagai alat bukti."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 72,
    "category": "Hukum Acara Pidana",
    "topicTag": "Advokat Hadapi Intimidasi Penyidik",
    "question": "Apabila Penyidik melakukan intimidasi atau mengajukan pertanyaan menjerat terhadap Tersangka saat pemeriksaan BAP, Advokat berhak...",
    "options": [
      {
        "key": "A",
        "text": "Menghentikan penyidikan secara sepihak"
      },
      {
        "key": "B",
        "text": "Menyatakan keberatan demi melindungi hak hukum tersangka"
      },
      {
        "key": "C",
        "text": "Menahan penyidik di ruangan"
      },
      {
        "key": "D",
        "text": "Membubarkan pemeriksaan kepolisian"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Advokat berhak menyatakan keberatan jika terjadi intimidasi atau pertanyaan yang bersifat menjerat.",
      "legalBasis": "Pasal 115 ayat (1) jo. Pasal 117 ayat (1) UU No. 8 Tahun 1981 (KUHAP) jo. Pasal 16 UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Keterangan tersangka dan atau saksi kepada penyidik diberikan tanpa tekanan dari siapa pun dan atau dalam bentuk apa pun. Dalam hal penyidik sedang melakukan pemeriksaan terhadap tersangka, penasihat hukum dapat mengikuti jalannya pemeriksaan dengan cara melihat serta mendengar pemeriksaan.",
      "analysis": "Pilihan B tepat karena meskipun KUHAP 1981 membatasi peran penasihat hukum di penyidikan sebatas melihat dan mendengar, advokat wajib menyatakan keberatan dan mencatatnya apabila terjadi intimidasi atau pertanyaan menjerat yang melanggar Pasal 117 ayat (1) KUHAP. Pilihan A, C, dan D keliru karena advokat tidak memiliki kewenangan menghentikan paksa atau menahan aparat.",
      "ruuComparison": "RUU KUHAP menggeser peran advokat di tahap penyidikan dari pasif (\"melihat dan mendengar\") menjadi pendampingan aktif yang berhak mengajukan keberatan langsung terhadap pertanyaan yang bersifat menekan/menjerat, serta mewajibkan perekaman audio-visual pemeriksaan tersangka."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 73,
    "category": "Hukum Acara Pidana",
    "topicTag": "Saksi Mahkota (Crown Witness)",
    "question": "Dalam kepentingan penyidikan dan penuntutan, penegak hukum dapat menetapkan Tersangka sebagai saksi mahkota untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mempercepat putusan sela"
      },
      {
        "key": "B",
        "text": "Membantu mengungkap keterlibatan Tersangka lain dalam perkara yang sama"
      },
      {
        "key": "C",
        "text": "Mengurangi jumlah saksi sidang"
      },
      {
        "key": "D",
        "text": "Menggantikan keterangan ahli"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Saksi mahkota dihadirkan untuk membuktikan perbuatan tersangka/terdakwa lain dalam perkara splitzing.",
      "legalBasis": "Pasal 168 huruf c jo. Pasal 184 ayat (1) UU No. 8 Tahun 1981 (KUHAP) jo. Yurisprudensi MA RI No. 1986 K/Pid/1989 jo. Pasal 10A UU No. 31 Tahun 2014 (Justice Collaborator).",
      "statuteText": "Tidak dapat didengar keterangannya dan dapat mengundurkan diri sebagai saksi: ... saudara seibu atau sebapak ... atau terdakwa yang bersama-sama melakukan tindak pidana sepanjang tidak dipisahkan berkas perkaranya (splitsing).",
      "analysis": "Pilihan B tepat karena saksi mahkota adalah salah seorang tersangka/terdakwa dalam tindak pidana penyertaan yang berkasnya dipisah (splitsing) untuk memberikan kesaksian guna mengungkap keterlibatan pelaku lain. Pilihan A, C, dan D bukan tujuan yuridis penetapan saksi mahkota.",
      "ruuComparison": "RUU KUHAP mengatur lebih ketat dan jelas mengenai saksi pelaku yang bekerja sama (justice collaborator / saksi mahkota), termasuk perlindungan hukum, pemisahan penahanan, dan keringanan tuntutan/pidana agar tidak bertentangan dengan hak tidak mempersalahkan diri sendiri (non-self-incrimination)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 74,
    "category": "Hukum Acara Pidana",
    "topicTag": "Perlindungan Saksi & Korban",
    "question": "Setiap pelapor, pengadu, saksi, dan korban dalam tindak pidana berhak memperoleh...",
    "options": [
      {
        "key": "A",
        "text": "Penghapusan pidana mutlak"
      },
      {
        "key": "B",
        "text": "Pelindungan fisik, psikis, dan hukum"
      },
      {
        "key": "C",
        "text": "Imunitas tanpa batas"
      },
      {
        "key": "D",
        "text": "Pengampunan grasi"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Saksi dan korban berhak memperoleh perlindungan keamanan pribadi, keluarga, dan harta bendanya.",
      "legalBasis": "Pasal 5 ayat (1) huruf a dan Pasal 10 ayat (1) UU No. 13 Tahun 2006 jo. UU No. 31 Tahun 2014 tentang Perlindungan Saksi dan Korban.",
      "statuteText": "Seorang Saksi dan Korban berhak: memperoleh pelindungan atas keamanan pribadi, Keluarga, dan harta bendanya, serta bebas dari Ancaman yang berkenaan dengan kesaksian yang akan, sedang, atau telah diberikannya.",
      "analysis": "Pilihan B tepat karena negara melalui LPSK menjamin pelindungan fisik, psikis, dan hukum bagi pelapor, saksi, dan korban. Pilihan A, C, dan D keliru karena pelapor/saksi tidak otomatis memperoleh penghapusan pidana mutlak, imunitas tanpa batas, atau grasi (grasi hanya untuk terpidana).",
      "ruuComparison": "RUU KUHAP memperluas pengakuan hak saksi dan korban di setiap tahapan proses peradilan pidana, termasuk kewajiban aparat memberitahukan hak atas restitusi, bantuan medis/psikologis, serta pemeriksaan kesaksian melalui telekonferensi bila terdapat ancaman keselamatan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 75,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Taklik Talak",
    "question": "Perjanjian yang diucapkan calon mempelai pria setelah akad nikah yang dicantumkan dalam Akta Nikah berupa janji talak yang digantungkan kepada suatu keadaan tertentu disebut...",
    "options": [
      {
        "key": "A",
        "text": "Khulu'"
      },
      {
        "key": "B",
        "text": "Talak Bain Kubraa"
      },
      {
        "key": "C",
        "text": "Taklik Talak"
      },
      {
        "key": "D",
        "text": "Mut'ah"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Taklik talak adalah janji talak yang digantungkan pada syarat tertentu setelah akad nikah.",
      "legalBasis": "Pasal 1 huruf e jo. Pasal 45–46 Kompilasi Hukum Islam (KHI).",
      "analysis": "Jika suami melanggar syarat taklik talak (misal meninggalkan 2 tahun berturut-turut atau tidak memberi nafkah wajib) dan istri tidak ridha lalu membayar iwadl ke pengadilan, gugatan cerai dapat dikabulkan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 76,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Beban Biaya Perkara Perceraian",
    "question": "Biaya perkara dalam bidang perceraian di Pengadilan Agama pada umumnya dibebankan kepada...",
    "options": [
      {
        "key": "A",
        "text": "Pihak Penggugat / Pemohon"
      },
      {
        "key": "B",
        "text": "Pihak yang kalah secara mutlak"
      },
      {
        "key": "C",
        "text": "Pihak Tergugat / Termohon saja"
      },
      {
        "key": "D",
        "text": "Dibagi dua sama rata"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Dalam perkara perceraian, amar putusan umumnya membebankan biaya perkara kepada Penggugat/Pemohon.",
      "legalBasis": "Pasal 89 ayat (1) UU No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.",
      "analysis": "Pasal 89 ayat (1) UU Peradilan Agama menetapkan bahwa biaya perkara dalam bidang perkawinan dibebankan kepada penggugat atau pemohon."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 77,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Nafkah Mut'ah",
    "question": "Apakah yang dimaksud dengan Mut'ah dalam hukum perkawinan Islam?",
    "options": [
      {
        "key": "A",
        "text": "Hak pemeliharaan anak di bawah umur"
      },
      {
        "key": "B",
        "text": "Hak mengasuh anak"
      },
      {
        "key": "C",
        "text": "Pemberian bekas suami kepada istri yang dijatuhi talak berupa benda atau uang sebagai penghibur"
      },
      {
        "key": "D",
        "text": "Perceraian yang terjadi atas permintaan istri dengan tebusan uang"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Mut'ah adalah pemberian kenang-kenangan/penghibur dari bekas suami kepada bekas istri setelah cerai talak.",
      "legalBasis": "Pasal 1 huruf j jo. Pasal 149 huruf a Kompilasi Hukum Islam (KHI).",
      "analysis": "Bekas suami wajib memberikan mut'ah yang layak kepada bekas istrinya, baik berupa uang atau benda, kecuali bekas istri tersebut qabla al-dukhul (belum pernah dicampuri)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 78,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Ikrar Wakaf",
    "question": "Pihak yang hendak mewakafkan tanah miliknya wajib menyatakan ikrar wakaf di hadapan...",
    "options": [
      {
        "key": "A",
        "text": "Pejabat Pembuat Akta Tanah (PPAT)"
      },
      {
        "key": "B",
        "text": "Pejabat Pembuat Akta Ikrar Wakaf (PPAIW)"
      },
      {
        "key": "C",
        "text": "Pejabat Pegawai Negeri Sipil Kecamatan"
      },
      {
        "key": "D",
        "text": "Kepala Desa setempat"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Ikrar wakaf wajib dinyatakan di hadapan Pejabat Pembuat Akta Ikrar Wakaf (PPAIW).",
      "legalBasis": "Pasal 17 UU No. 41 Tahun 2004 tentang Wakaf jo. PP No. 42 Tahun 2006.",
      "analysis": "PPAIW adalah pejabat berwenang yang ditunjuk oleh Menteri Agama (biasanya Kepala KUA) untuk membuat Akta Ikrar Wakaf (AIW)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 79,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Pemohon Itsbat Nikah",
    "question": "Pihak yang berhak untuk mengajukan permohonan pengesahan nikah (Itsbat Nikah) ke Pengadilan Agama adalah...",
    "options": [
      {
        "key": "A",
        "text": "Suami atau istri"
      },
      {
        "key": "B",
        "text": "Saksi nikah saja"
      },
      {
        "key": "C",
        "text": "Jaksa penuntut umum"
      },
      {
        "key": "D",
        "text": "Penghulu KUA"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Itsbat nikah diajukan oleh suami atau istri, anak, wali nikah, atau pihak berkepentingan.",
      "legalBasis": "Pasal 7 ayat (4) Kompilasi Hukum Islam (KHI).",
      "analysis": "Permohonan itsbat nikah diajukan untuk mendapatkan penetapan sahnya perkawinan yang telah terjadi secara syariat tetapi belum tercatat di KUA."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 81,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Sumpah Li'an",
    "question": "Gugatan cerai diajukan atas tuduhan zina namun suami tidak dapat menghadirkan 4 saksi, sementara istri membantah tuduhan tersebut, maka hakim memerintahkan para pihak bersumpah yang disebut acara...",
    "options": [
      {
        "key": "A",
        "text": "Sumpah Pemutus"
      },
      {
        "key": "B",
        "text": "Li'an"
      },
      {
        "key": "C",
        "text": "Islah"
      },
      {
        "key": "D",
        "text": "Takhayyur"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Sumpah khusus atas tuduhan zina suami-istri di pengadilan disebut sumpah Li'an.",
      "legalBasis": "Pasal 125–128 Kompilasi Hukum Islam (KHI).",
      "analysis": "Sumpah Li'an menyebabkan ikatan perkawinan putus untuk selama-lamanya dan anak yang dikandung tidak dinasabkan kepada suami penuduh."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 82,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Bukan Alasan Perceraian",
    "question": "Berikut ini yang BUKAN merupakan alasan sah perceraian menurut peraturan perundang-undangan di Indonesia adalah...",
    "options": [
      {
        "key": "A",
        "text": "Salah satu pihak melakukan zina"
      },
      {
        "key": "B",
        "text": "Salah satu pihak meninggalkan pihak lain selama 2 tahun berturut-turut tanpa izin"
      },
      {
        "key": "C",
        "text": "Salah satu pihak melakukan kekejaman atau penganiayaan berat"
      },
      {
        "key": "D",
        "text": "Salah satu pihak tidak mempunyai pekerjaan tetap"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Tidak memiliki pekerjaan tetap bukan merupakan alasan perceraian yang sah dalam undang-undang.",
      "legalBasis": "Pasal 19 PP No. 9 Tahun 1975 jo. Pasal 116 KHI jo. Pasal 39 UU No. 1 Tahun 1974.",
      "analysis": "Alasan perceraian ditentukan secara limitatif (zina, mabuk/judi, meninggalkan 2 tahun, pidana 5 tahun, KDRT, cacat badan, dan pertengkaran terus-menerus/syiqaq)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 83,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Eksekusi Penetapan P3HP",
    "question": "Apakah permohonan pertolongan pembagian harta peninggalan (P3HP) di Pengadilan Agama dapat langsung dieksekusi?",
    "options": [
      {
        "key": "A",
        "text": "Dapat dieksekusi langsung oleh jurusita"
      },
      {
        "key": "B",
        "text": "Dapat dengan syarat diajukan oleh seluruh ahli waris"
      },
      {
        "key": "C",
        "text": "Tidak dapat, karena produknya penetapan voluntair bukan putusan condemnatoir"
      },
      {
        "key": "D",
        "text": "Dapat jika disetujui BPN"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penetapan P3HP adalah perkara voluntair yang tidak memiliki amar menghukum (condemnatoir) sehingga tidak dapat dieksekusi paksa.",
      "legalBasis": "Pasal 54 jo. Pasal 64 Undang-Undang No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama jo. Pasal 195 ayat (1) HIR / Pasal 206 ayat (1) RBg.",
      "analysis": "Apabila terjadi sengketa antar ahli waris dalam pembagian harta waris, para pihak wajib mengajukan gugatan perdata kontensius tersendiri."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 84,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Domisili Cerai Gugat",
    "question": "Gugatan Cerai yang diajukan oleh Istri (Cerai Gugat) wajib diajukan di Pengadilan Agama tempat kediaman...",
    "options": [
      {
        "key": "A",
        "text": "Istri (Penggugat)"
      },
      {
        "key": "B",
        "text": "Suami (Tergugat)"
      },
      {
        "key": "C",
        "text": "Orang tua Suami"
      },
      {
        "key": "D",
        "text": "Orang tua Istri"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Cerai gugat diajukan ke Pengadilan Agama yang mewilayahi tempat tinggal istri (penggugat).",
      "legalBasis": "Pasal 73 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      "analysis": "Sebagai perlindungan hukum bagi wanita, gugatan cerai istri diajukan di tempat kediaman istri kecuali jika istri meninggalkan tempat tinggal bersama tanpa izin suami."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 85,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Saksi Perkara Syiqaq",
    "question": "Yang dapat dijadikan sebagai saksi dalam perkara perceraian yang didasarkan pada alasan Syiqaq (perselisihan tajam terus-menerus) adalah...",
    "options": [
      {
        "key": "A",
        "text": "Hanya pihak ketiga yang tidak memiliki hubungan keluarga atau kedekatan dengan para pihak"
      },
      {
        "key": "B",
        "text": "Hanya pegawai pencatat nikah dari Kantor Urusan Agama setempat"
      },
      {
        "key": "C",
        "text": "Hanya saksi ahli di bidang psikologi keluarga dan konseling"
      },
      {
        "key": "D",
        "text": "Pihak keluarga (seperti orang tua), pembantu rumah tangga, serta orang-orang yang dekat dengan suami atau istri"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Keluarga dan orang dekat diperbolehkan menjadi saksi dalam perkara perceraian alasan syiqaq.",
      "legalBasis": "Pasal 76 ayat (1) UU Peradilan Agama jo. Pasal 22 ayat (2) PP No. 9 Tahun 1975.",
      "analysis": "Pengecualian larangan saksi keluarga dekat dalam hukum acara perdata diberikan pada perkara perceraian syiqaq sehingga orang tua, anggota keluarga, pembantu rumah tangga, maupun orang terdekat suami istri dapat didengar keterangannya."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 86,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Berlakunya Hukum Acara Perdata Umum di PA",
    "question": "Pasal berapakah dalam UU No. 7 Tahun 1989 yang mengatur bahwa Hukum Acara Perdata yang berlaku pada Pengadilan Agama adalah hukum acara perdata yang berlaku di lingkungan Peradilan Umum?",
    "options": [
      {
        "key": "A",
        "text": "Pasal 45 UU No. 7 Tahun 1989"
      },
      {
        "key": "B",
        "text": "Pasal 54 UU No. 7 Tahun 1989"
      },
      {
        "key": "C",
        "text": "Pasal 62 UU No. 7 Tahun 1989"
      },
      {
        "key": "D",
        "text": "Pasal 70 UU No. 7 Tahun 1989"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 54 UU Peradilan Agama menegaskan berlakunya hukum acara perdata umum di lingkungan Pengadilan Agama.",
      "legalBasis": "Pasal 54 UU No. 7 Tahun 1989 jo. UU No. 50 Tahun 2009.",
      "analysis": "Hukum acara perdata umum (HIR/RBg) berlaku mutatis mutandis di Pengadilan Agama, kecuali ditentukan lain secara khusus dalam UU Peradilan Agama."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 87,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Kewenangan Khusus Pengadilan Agama",
    "question": "Menurut UU No. 7 Tahun 1989 yang telah diubah dengan UU No. 3 Tahun 2006, Pengadilan Agama mempunyai kewenangan memeriksa perkara...",
    "options": [
      {
        "key": "A",
        "text": "Hanya bagi yang beragama Islam dalam bidang perkawinan dan jinayah"
      },
      {
        "key": "B",
        "text": "Perkara perdata dan pidana khusus"
      },
      {
        "key": "C",
        "text": "Perkara perdata menurut hukum Islam saja"
      },
      {
        "key": "D",
        "text": "Perkara perdata tertentu bagi orang-orang yang beragama Islam"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Kewenangan PA meliputi perkawinan, waris, wasiat, hibah, wakaf, zakat, infaq, sedekah, dan ekonomi syariah bagi yang beragama Islam.",
      "legalBasis": "Pasal 49 UU No. 3 Tahun 2006 tentang Perubahan atas UU No. 7 Tahun 1989.",
      "analysis": "Kewenangan Pengadilan Agama diperluas sejak amandemen 2006 mencakup sengketa Perbankan dan Ekonomi Syariah."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 88,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Sumber Hukum Acara PA",
    "question": "Sumber utama Hukum Acara Perdata yang masih diberlakukan dalam lingkungan Peradilan Agama ialah...",
    "options": [
      {
        "key": "A",
        "text": "HIR (Jawa/Madura), RBg (luar Jawa), dan Rv"
      },
      {
        "key": "B",
        "text": "Hanya Kompilasi Hukum Islam"
      },
      {
        "key": "C",
        "text": "UU No. 20 Tahun 1947 saja"
      },
      {
        "key": "D",
        "text": "UU No. 2 Tahun 1986"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Sumber utama hukum acara perdata di PA adalah HIR, RBg, dan ketentuan Rv.",
      "legalBasis": "Pasal 54 UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      "analysis": "Kaidah pemeriksaan persidangan di PA tetap berpijak pada HIR/RBg yang dilengkapi hukum Islam materiil (KHI) dan yurisprudensi Mahkamah Agung."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 89,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Ketentuan Lengkap Masa Iddah",
    "question": "Ketentuan masa tunggu (iddah) menurut Pasal 39 PP No. 9 Tahun 1975 juncto Pasal 153 KHI adalah...",
    "options": [
      {
        "key": "A",
        "text": "Putus karena kematian 90 hari, perceraian 60 hari, dan sedang hamil 130 hari"
      },
      {
        "key": "B",
        "text": "Putus karena kematian 100 hari, perceraian 40 hari, dan sedang hamil 6 bulan"
      },
      {
        "key": "C",
        "text": "Putus karena kematian 120 hari, perceraian 60 hari, dan sedang hamil sampai 3 kali suci"
      },
      {
        "key": "D",
        "text": "Putus karena kematian 130 hari, perceraian 90 hari bagi yang masih haid, dan dalam keadaan hamil sampai melahirkan"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Masa iddah wafat 130 hari, cerai 90 hari, dan hamil sampai melahirkan.",
      "legalBasis": "Pasal 39 PP No. 9 Tahun 1975 jo. Pasal 153 KHI.",
      "analysis": "Menurut Pasal 39 PP No. 9 Tahun 1975 jo. Pasal 153 ayat (2) KHI, waktu tunggu (iddah) ditetapkan 130 hari apabila perkawinan putus karena kematian, 3 kali suci dengan sekurang-kurangnya 90 hari apabila putus karena perceraian bagi yang masih haid, dan sampai melahirkan apabila dalam keadaan hamil."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 90,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Sita Jaminan di Pengadilan Agama",
    "question": "Tuan Budi menggugat pembagian harta bersama (gono-gini) di Pengadilan Agama dan memohonkan sita jaminan (conservatoir beslag). Apakah Pengadilan Agama berwenang meletakkan sita jaminan?",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Agama tidak berwenang"
      },
      {
        "key": "B",
        "text": "Berwenang hanya jika ada izin dari Pengadilan Negeri"
      },
      {
        "key": "C",
        "text": "Pengadilan Agama berwenang melakukan sita jaminan"
      },
      {
        "key": "D",
        "text": "Berwenang hanya bila diajukan bersamaan dengan pidana perzinaan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pengadilan Agama berwenang penuh meletakkan sita jaminan dalam ranah kewenangannya.",
      "legalBasis": "Pasal 54 UU No. 7 Tahun 1989 jo. Pasal 227 HIR.",
      "analysis": "Dalam sengketa harta bersama atau warisan, Pengadilan Agama memiliki kewenangan mandiri meletakkan sita jaminan (conservatoir beslag) tanpa perlu izin Pengadilan Negeri."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 92,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Cerai Domisili Luar Negeri",
    "question": "Dalam gugatan cerai, jika pihak penggugat dan tergugat keduanya bertempat tinggal di luar negeri, maka gugatan cerai diajukan ke...",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Agama tempat kedudukan tergugat"
      },
      {
        "key": "B",
        "text": "Pengadilan Agama tempat kedudukan penggugat"
      },
      {
        "key": "C",
        "text": "Pengadilan Agama Jakarta Pusat"
      },
      {
        "key": "D",
        "text": "Pengadilan Tinggi Agama"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Gugatan cerai pasangan WNI yang sama-sama di luar negeri diajukan ke Pengadilan Agama Jakarta Pusat.",
      "legalBasis": "Pasal 73 ayat (3) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      "analysis": "Pasal 73 ayat (3) menetapkan: Apabila suami dan istri sama-sama bertempat tinggal di luar negeri, gugatan diajukan kepada Pengadilan yang daerah hukumnya meliputi tempat perkawinan dilangsungkan atau kepada Pengadilan Agama Jakarta Pusat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 93,
    "category": "Hukum Acara PHI",
    "topicTag": "Regulasi PPHI",
    "question": "Penyelesaian perselisihan hubungan industrial pada saat ini diatur dalam...",
    "options": [
      {
        "key": "A",
        "text": "Undang-Undang Nomor 2 Tahun 2004"
      },
      {
        "key": "B",
        "text": "Undang-Undang Nomor 4 Tahun 2004"
      },
      {
        "key": "C",
        "text": "Undang-Undang Nomor 2 Tahun 2002"
      },
      {
        "key": "D",
        "text": "Undang-Undang Nomor 4 Tahun 2002"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Penyelesaian Perselisihan Hubungan Industrial diatur dalam UU No. 2 Tahun 2004.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 55 dan Pasal 125 ayat (1) Undang-Undang No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI).",
      "analysis": "UU No. 2 Tahun 2004 merupakan hukum formil ketenagakerjaan menggantikan mekanisme peradilan perburuhan P4D/P4P."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 94,
    "category": "Hukum Acara PHI",
    "topicTag": "Perjanjian Arbitrase PHI",
    "question": "Menurut Pasal 32 UU No. 2 Tahun 2004, kesepakatan para pihak yang berselisih dalam hubungan industrial untuk menempuh arbitrase dinyatakan tertulis dalam...",
    "options": [
      {
        "key": "A",
        "text": "Perjanjian penunjukan"
      },
      {
        "key": "B",
        "text": "Surat perjanjian arbitrase"
      },
      {
        "key": "C",
        "text": "Putusan arbitrase"
      },
      {
        "key": "D",
        "text": "Risalah perundingan bipartit"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penyelesaian melalui arbitrase wajib didasari surat perjanjian arbitrase tertulis.",
      "legalBasis": "Pasal 32 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Surat perjanjian arbitrase dibuat para pihak yang memuat subjek, objek perselisihan, nama arbiter, dan pernyataan tunduk pada putusan arbitrase."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 95,
    "category": "Hukum Acara PHI",
    "topicTag": "Tenggang Waktu Upaya Hukum PHI",
    "question": "Tenggang waktu pengajuan kasasi terhadap putusan Pengadilan Hubungan Industrial adalah 14 hari...",
    "options": [
      {
        "key": "A",
        "text": "Kerja, terhitung sejak putusan diucapkan baik para pihak hadir maupun tidak hadir"
      },
      {
        "key": "B",
        "text": "Kalender, terhitung sejak salinan resmi putusan dikirim melalui pos"
      },
      {
        "key": "C",
        "text": "Kerja, terhitung sejak permohonan mediasi di Dinas Tenaga Kerja dinyatakan gagal"
      },
      {
        "key": "D",
        "text": "Kerja, terhitung sejak putusan diucapkan apabila para pihak hadir atau sejak menerima pemberitahuan putusan apabila tidak hadir"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Batas pengajuan kasasi PHI adalah 14 hari kerja sejak putusan diucapkan jika hadir, atau sejak pemberitahuan putusan diterima jika tidak hadir.",
      "legalBasis": "Pasal 57 jo. Pasal 110 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Berdasarkan Pasal 110 UU No. 2 Tahun 2004 tentang PPHI, permohonan kasasi diajukan selambat-lambatnya 14 hari kerja melalui Sub-Kepaniteraan PHI pada Pengadilan Negeri setempat, terhitung sejak putusan diucapkan apabila para pihak hadir atau sejak tanggal menerima pemberitahuan putusan apabila tidak hadir."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 96,
    "category": "Hukum Acara PHI",
    "topicTag": "Definisi Bipartit",
    "question": "Apa yang dimaksud dengan perundingan Bipartit dalam penyelesaian perselisihan hubungan industrial?",
    "options": [
      {
        "key": "A",
        "text": "Perundingan antara pekerja/serikat pekerja dengan pengusaha dalam satu perusahaan tanpa pihak ketiga"
      },
      {
        "key": "B",
        "text": "Perundingan antara serikat pekerja dengan serikat buruh lain"
      },
      {
        "key": "C",
        "text": "Perundingan antara pekerja, pengusaha, dan Dinas Tenaga Kerja"
      },
      {
        "key": "D",
        "text": "Perundingan di hadapan majelis hakim pengadilan"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Bipartit adalah musyawarah langsung dua pihak (buruh dan majikan) tanpa pihak ketiga.",
      "legalBasis": "Pasal 1 angka 10 UU No. 2 Tahun 2004.",
      "analysis": "Perundingan Bipartit merupakan tahap wajib pertama sebelum sengketa dapat dicatatkan ke instansi ketenagakerjaan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 97,
    "category": "Hukum Acara PHI",
    "topicTag": "Kewenangan Konsiliator",
    "question": "Apa yang menjadi kewenangan Konsiliator dalam penyelesaian perselisihan hubungan industrial?",
    "options": [
      {
        "key": "A",
        "text": "Menyelesaikan perselisihan hak, kepentingan, PHK, dan antar serikat pekerja/buruh"
      },
      {
        "key": "B",
        "text": "Menyelesaikan perselisihan hak dan perselisihan kepentingan saja"
      },
      {
        "key": "C",
        "text": "Menyelesaikan perselisihan hak dan tindak pidana ketenagakerjaan"
      },
      {
        "key": "D",
        "text": "Menyelesaikan perselisihan kepentingan, perselisihan pemutusan hubungan kerja (PHK), dan perselisihan antar serikat pekerja/buruh dalam satu perusahaan"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Konsiliator berwenang menyelesaikan perselisihan kepentingan, PHK, dan antar SP/SB, namun tidak berwenang atas perselisihan hak.",
      "legalBasis": "Pasal 1 angka 13 dan Pasal 17 UU No. 2 Tahun 2004.",
      "analysis": "Berbeda dengan Mediator yang berwenang atas keempat jenis perselisihan, Konsiliator hanya berwenang untuk perselisihan kepentingan, PHK, dan antar serikat buruh dalam satu perusahaan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 99,
    "category": "Hukum Acara PHI",
    "topicTag": "Bukan Tahapan Mediasi",
    "question": "Tahapan penyelesaian perselisihan dalam proses mediasi terdiri dari hal-hal di bawah ini, KECUALI...",
    "options": [
      {
        "key": "A",
        "text": "Penerbitan anjuran tertulis oleh mediator"
      },
      {
        "key": "B",
        "text": "Pencatatan perselisihan di kantor Disnaker"
      },
      {
        "key": "C",
        "text": "Proses mediasi musyawarah para pihak"
      },
      {
        "key": "D",
        "text": "Pembuatan risalah perundingan bipartit"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Risalah perundingan bipartit dibuat pada tahap internal perusahaan, bukan tahapan mediasi.",
      "legalBasis": "Pasal 3 jo. Pasal 8–16 UU No. 2 Tahun 2004.",
      "analysis": "Risalah bipartit adalah syarat awal sebelum mediasi dapat dimulai. Setelah mediasi berjalan, produk mediator adalah Perjanjian Bersama atau Anjuran Tertulis."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 100,
    "category": "Hukum Acara PHI",
    "topicTag": "Gugatan Tanpa Risalah Mediasi",
    "question": "Pengajuan gugatan ke PHI yang tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi maka Hakim Pengadilan Hubungan Industrial...",
    "options": [
      {
        "key": "A",
        "text": "Menolak gugatan penggugat dalam putusan akhir"
      },
      {
        "key": "B",
        "text": "Mengabaikan syarat formal tersebut"
      },
      {
        "key": "C",
        "text": "Wajib mengembalikan gugatan kepada penggugat"
      },
      {
        "key": "D",
        "text": "Melanjutkan sidang secara verstek"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Hakim PHI wajib mengembalikan gugatan yang tidak dilampiri risalah mediasi/konsiliasi.",
      "legalBasis": "Pasal 83 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 83 ayat (1) menegaskan bahwa pengajuan gugatan yang tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi, maka hakim wajib mengembalikan gugatan kepada penggugat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 101,
    "category": "Hukum Acara PHI",
    "topicTag": "Pembebasan Biaya Perkara PHI",
    "question": "Dalam proses beracara di Pengadilan Hubungan Industrial, pihak-pihak yang berperkara tidak dikenakan biaya perkara termasuk biaya eksekusi yang nilai gugatannya...",
    "options": [
      {
        "key": "A",
        "text": "Di bawah Rp50.000.000,00"
      },
      {
        "key": "B",
        "text": "Di bawah Rp150.000.000,00"
      },
      {
        "key": "C",
        "text": "Di bawah Rp200.000.000,00"
      },
      {
        "key": "D",
        "text": "Di bawah Rp300.000.000,00"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Gugatan PHI di bawah Rp150.000.000,00 dibebaskan dari seluruh biaya perkara dan eksekusi.",
      "legalBasis": "Pasal 58 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Pasal 58 menegaskan pembebasan biaya bagi nilai gugatan di bawah 150 juta rupiah guna menjamin akses keadilan buruh."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 102,
    "category": "Hukum Acara PHI",
    "topicTag": "Batas Waktu Putusan PHI",
    "question": "Majelis hakim PHI wajib memberikan putusan penyelesaian sengketa dalam waktu selambat-lambatnya ... terhitung sejak sidang pertama...",
    "options": [
      {
        "key": "A",
        "text": "30 hari kalender"
      },
      {
        "key": "B",
        "text": "50 hari kerja"
      },
      {
        "key": "C",
        "text": "50 hari kalender"
      },
      {
        "key": "D",
        "text": "90 hari kerja"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Putusan PHI wajib diputus paling lambat 50 hari kerja terhitung sejak sidang pertama.",
      "legalBasis": "Pasal 103 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Asas peradilan cepat PHI membatasi majelis hakim wajib menjatuhkan putusan paling lambat 50 hari kerja sejak sidang pertama."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 103,
    "category": "Hukum Acara PHI",
    "topicTag": "Jangka Waktu Perundingan Bipartit",
    "question": "Dalam perselisihan hubungan industrial, upaya perundingan bipartit wajib diselesaikan dalam tenggang waktu...",
    "options": [
      {
        "key": "A",
        "text": "30 hari kerja terhitung sejak tanggal dimulainya perundingan"
      },
      {
        "key": "B",
        "text": "30 hari kalender"
      },
      {
        "key": "C",
        "text": "20 hari kerja"
      },
      {
        "key": "D",
        "text": "14 hari kerja"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Musyawarah bipartit harus diselesaikan paling lama 30 hari kerja.",
      "legalBasis": "Pasal 3 ayat (2) UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Jika dalam tempo 30 hari kerja bipartit gagal atau salah satu pihak menolak, sengketa dapat dicatatkan ke mediator."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 104,
    "category": "Hukum Acara PHI",
    "topicTag": "Yurisdiksi Pengadilan PHI",
    "question": "Jika upaya mediasi dan konsiliasi tidak berhasil, pihak yang berselisih mengajukan gugatan ke PHI pada Pengadilan Negeri...",
    "options": [
      {
        "key": "A",
        "text": "Yang daerah hukumnya meliputi tempat kediaman pekerja"
      },
      {
        "key": "B",
        "text": "Yang daerah hukumnya meliputi domisili kantor pusat pengusaha"
      },
      {
        "key": "C",
        "text": "Yang daerah hukumnya meliputi tempat kerja pekerja/buruh"
      },
      {
        "key": "D",
        "text": "Pengadilan Negeri di mana saja"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Gugatan diajukan ke PN yang membawahi tempat buruh bekerja.",
      "legalBasis": "Pasal 81 UU No. 2 Tahun 2004 tentang PPHI.",
      "analysis": "Asas tempat kerja pekerja bertujuan memudahkan pembuktian dan kehadiran pekerja dalam persidangan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 105,
    "category": "Hukum Acara PTUN",
    "topicTag": "Alat Bukti Sah PTUN",
    "question": "Alat bukti yang sah dipergunakan dalam pembuktian perkara sengketa TUN menurut Pasal 100 UU No. 5 Tahun 1986 adalah...",
    "options": [
      {
        "key": "A",
        "text": "Surat atau tulisan saja"
      },
      {
        "key": "B",
        "text": "Keterangan ahli saja"
      },
      {
        "key": "C",
        "text": "Keterangan saksi dan pengakuan saja"
      },
      {
        "key": "D",
        "text": "Surat/tulisan, keterangan ahli, keterangan saksi, pengakuan para pihak, dan pengetahuan hakim"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "5 alat bukti PTUN: Surat/tulisan, Keterangan ahli, Keterangan saksi, Pengakuan para pihak, dan Pengetahuan hakim.",
      "legalBasis": "Pasal 100 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": "Berbeda dengan perdata, PTUN mengakui alat bukti \"Pengetahuan Hakim\" (wetenschap van de rechter) secara eksplisit dalam undang-undang."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 106,
    "category": "Hukum Acara PTUN",
    "topicTag": "Putusan Tidak Memenuhi Syarat Formil",
    "question": "Putusan pengadilan tata usaha negara yang tidak memuat ketentuan formal Pasal 109 UU PTUN berakibat...",
    "options": [
      {
        "key": "A",
        "text": "Putusan tidak sah"
      },
      {
        "key": "B",
        "text": "Putusan batal"
      },
      {
        "key": "C",
        "text": "Putusan tidak sah dan tidak mempunyai kekuatan hukum"
      },
      {
        "key": "D",
        "text": "Putusan tetap mengikat dan wajib dilaksanakan oleh Pejabat TUN"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Putusan PTUN yang melanggar Pasal 109 tidak sah dan tidak memiliki kekuatan hukum.",
      "legalBasis": "Pasal 109 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "statuteText": "Demi Keadilan Berdasarkan Ketuhanan Yang Maha Esa",
      "analysis": "Pasal 109 mengatur syarat wajib kepala putusan (\"Demi Keadilan Berdasarkan Ketuhanan Yang Maha Esa\"), identitas para pihak, posita, pertimbangan hukum, dan amar putusan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 107,
    "category": "Hukum Acara PTUN",
    "topicTag": "Syarat Tertulis KTUN",
    "question": "Salah satu kualifikasi Keputusan Tata Usaha Negara (KTUN) adalah bersifat tertulis. Maksud dari syarat tertulis ini berkaitan dengan...",
    "options": [
      {
        "key": "A",
        "text": "Persyaratan formalitas administratif semata"
      },
      {
        "key": "B",
        "text": "Muatan keputusan yang harus ditandatangani menteri"
      },
      {
        "key": "C",
        "text": "Untuk memudahkan proses pembuktian di muka pengadilan"
      },
      {
        "key": "D",
        "text": "Bentuk nota dinas rahasia"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Sifat tertulis dimaksudkan agar memudahkan pembuktian adanya tindakan hukum pejabat TUN.",
      "legalBasis": "Penjelasan Pasal 1 angka 9 UU No. 51 Tahun 2009.",
      "analysis": "Penjelasan UU PTUN menyebutkan istilah tertulis tidak mutlak harus berbentuk surat keputusan formal, melainkan memo, disposisi, atau nota tertulis yang memudahkan pembuktian."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 108,
    "category": "Hukum Acara PTUN",
    "topicTag": "Fundamentum Petendi di PTUN",
    "question": "Fundamentum Petendi (posita gugatan) dalam kompetensi Peradilan Tata Usaha Negara memiliki pengertian pokok bahwa...",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan tidak berwenang mengadili"
      },
      {
        "key": "B",
        "text": "Gugatan mengenai wanprestasi perjanjian sewa"
      },
      {
        "key": "C",
        "text": "Wewenang berdasarkan pokok sengketa di bidang hukum perdata"
      },
      {
        "key": "D",
        "text": "Pokok sengketa terletak di lapangan Hukum Publik"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pokok sengketa gugatan PTUN wajib berada di ranah hukum publik administrasi pemerintahan.",
      "legalBasis": "Pasal 47 UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Pengadilan TUN hanya bertugas memeriksa, memutus, dan menyelesaikan sengketa Tata Usaha Negara yang bersumber dari hubungan hukum publik."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 109,
    "category": "Hukum Acara PTUN",
    "topicTag": "Tujuan Tenggang Waktu 90 Hari",
    "question": "Berdasarkan Pasal 55 UU No. 5 Tahun 1986, tenggang waktu mengajukan gugatan ke PTUN (90 hari) merupakan bentuk perlindungan terhadap...",
    "options": [
      {
        "key": "A",
        "text": "Kepentingan pribadi penggugat agar memperoleh ganti rugi sebesar-besarnya"
      },
      {
        "key": "B",
        "text": "Kepentingan majelis hakim untuk mempercepat beban administrasi pengadilan"
      },
      {
        "key": "C",
        "text": "Kepentingan advokat dalam menyusun surat kuasa khusus secara tertulis"
      },
      {
        "key": "D",
        "text": "Kepentingan tergugat sebagai Pejabat TUN sekaligus kepentingan umum yang diembannya demi kepastian hukum"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Batas 90 hari melindungi kepastian hukum pejabat TUN dan kepentingan umum penyelenggaraan negara.",
      "legalBasis": "Pasal 55 UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Tenggang waktu 90 hari mencegah ketidakpastian hukum yang berlarut-larut dalam pelaksanaan kebijakan dan keputusan administrasi negara."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 113,
    "category": "Hukum Acara PTUN",
    "topicTag": "Alasan Gugatan PTUN",
    "question": "Menurut Pasal 53 ayat (2) UU PTUN, alasan-alasan yang dapat digunakan dalam mengajukan gugatan di PTUN adalah...",
    "options": [
      {
        "key": "A",
        "text": "KTUN yang digugat hanya dapat dibatalkan apabila melanggar peraturan menteri saja"
      },
      {
        "key": "B",
        "text": "KTUN merugikan kepentingan finansial pribadi penggugat meskipun sesuai undang-undang"
      },
      {
        "key": "C",
        "text": "KTUN tidak disetujui oleh DPRD atau tokoh masyarakat setempat"
      },
      {
        "key": "D",
        "text": "KTUN bertentangan dengan peraturan perundang-undangan yang berlaku, mengandung penyalahgunaan wewenang, dan/atau bertentangan dengan AUPB"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Alasan gugatan PTUN: bertentangan dengan peraturan perundang-undangan, penyalahgunaan wewenang, atau bertentangan dengan AUPB.",
      "legalBasis": "Pasal 53 ayat (2) UU No. 9 Tahun 2004.",
      "analysis": "Pasca amandemen UU No. 9 Tahun 2004, pelanggaran terhadap peraturan perundang-undangan, penyalahgunaan wewenang, dan pelanggaran Asas-Asas Umum Pemerintahan yang Baik (AUPB) diakui sebagai alasan pengujian KTUN."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 114,
    "category": "Hukum Acara PTUN",
    "topicTag": "Pemeriksaan Acara Cepat",
    "question": "Pemeriksaan sengketa tata usaha negara dengan acara cepat diatur dalam...",
    "options": [
      {
        "key": "A",
        "text": "Pasal 98 UU No. 5 Tahun 1986"
      },
      {
        "key": "B",
        "text": "Pasal 62 UU No. 5 Tahun 1986"
      },
      {
        "key": "C",
        "text": "Pasal 99 UU No. 5 Tahun 1986"
      },
      {
        "key": "D",
        "text": "Pasal 98 dan Pasal 99 UU No. 5 Tahun 1986"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pemeriksaan acara cepat diatur dalam Pasal 98 dan Pasal 99 UU PTUN.",
      "legalBasis": "Pasal 98 dan Pasal 99 UU No. 5 Tahun 1986.",
      "analysis": "Apabila terdapat kepentingan penggugat yang sangat mendesak, penggugat dapat memohon pemeriksaan acara cepat dengan hakim tunggal dalam tempo pemeriksaan 30 hari."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 115,
    "category": "Hukum Acara PTUN",
    "topicTag": "Objek Sengketa PTUN",
    "question": "Dari keputusan-keputusan di bawah ini, manakah yang sah merupakan objek gugatan sengketa Tata Usaha Negara?",
    "options": [
      {
        "key": "A",
        "text": "Keputusan pemecatan notaris oleh Menteri Kehakiman atas usul PN"
      },
      {
        "key": "B",
        "text": "Surat perintah penahanan yang dikeluarkan oleh Penuntut Umum"
      },
      {
        "key": "C",
        "text": "Keputusan Kepala Kantor Pertanahan yang menerbitkan sertifikat hak atas tanah berdasarkan permohonan pemohon"
      },
      {
        "key": "D",
        "text": "Sertifikat tanah yang diterbitkan murni berdasarkan amar eksekusi pengadilan perdata yang inkracht"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penerbitan sertifikat tanah adalah KTUN konkret, individual, final yang menimbulkan akibat hukum bagi perdata.",
      "legalBasis": "Pasal 1 angka 9 UU No. 51 Tahun 2009 jo. Pasal 53 UU PTUN.",
      "analysis": "Tindakan penahanan penuntut umum merupakan wewenang KUHAP (objek praperadilan), dan pelaksanaan putusan perdata yang telah berkekuatan hukum tetap dikecualikan dari sengketa TUN."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 116,
    "category": "Hukum Acara PTUN",
    "topicTag": "Fiktif Negatif",
    "question": "Jika peraturan perundang-undangan tidak menentukan jangka waktu, maka setelah lewat waktu ... sejak diterimanya permohonan, badan atau pejabat TUN yang bergeming/diam dianggap telah mengeluarkan keputusan penolakan (fiktif negatif menurut UU No. 5 Tahun 1986).",
    "options": [
      {
        "key": "A",
        "text": "4 bulan"
      },
      {
        "key": "B",
        "text": "3 bulan"
      },
      {
        "key": "C",
        "text": "60 hari"
      },
      {
        "key": "D",
        "text": "30 hari"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Dalam Pasal 3 ayat (2) UU No. 5 Tahun 1986, batas waktu fiktif negatif adalah 4 bulan.",
      "legalBasis": "Pasal 3 ayat (2) UU No. 5 Tahun 1986 tentang PTUN.",
      "analysis": "Setelah lewat waktu 4 bulan tanpa keputusan dari pejabat TUN, permohonan tersebut secara hukum dianggap ditolak dan dapat langsung digugat ke PTUN."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 117,
    "category": "Hukum Acara PTUN",
    "topicTag": "Komponen Biaya Perkara",
    "question": "Yang TIDAK diperhitungkan dalam perkiraan panjar biaya perkara oleh Undang-Undang Peradilan Tata Usaha Negara adalah...",
    "options": [
      {
        "key": "A",
        "text": "Biaya saksi"
      },
      {
        "key": "B",
        "text": "Biaya ahli"
      },
      {
        "key": "C",
        "text": "Biaya alih bahasa/penerjemah"
      },
      {
        "key": "D",
        "text": "Biaya jasa honorarium advokat"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Komponen biaya perkara PTUN meliputi biaya kepaniteraan dan meterai, biaya saksi, ahli, dan alih bahasa, serta biaya pemeriksaan setempat dan tindakan lain atas perintah Hakim Ketua Sidang; sedangkan honorarium advokat merupakan beban perdata privat antara klien dan advokat sehingga tidak termasuk dalam panjar biaya perkara.",
      "legalBasis": "Pasal 59 ayat (1) jo. Pasal 111 ayat (1) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "analysis": "Pasal 59 ayat (1) UU No. 5 Tahun 1986 mengatur kewajiban penggugat membayar uang muka (panjar) biaya perkara yang ditaksir oleh Panitera, sedangkan rincian komponennya diatur dalam Pasal 111 ayat (1) UU No. 5 Tahun 1986 yang mencakup: (a) biaya kepaniteraan dan biaya meterai, (b) biaya saksi, ahli, dan alih bahasa (Pilihan A, B, dan C), serta (c) biaya pemeriksaan di tempat lain daripada ruangan sidang dan biaya lain yang diperlukan atas perintah Hakim Ketua Sidang. Adapun biaya jasa honorarium advokat (Pilihan D) merupakan kesepakatan keperdataan antara pemberi kuasa dan advokat berdasarkan UU No. 18 Tahun 2003 tentang Advokat, bukan bagian dari panjar biaya perkara pengadilan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 901,
    "category": "Hukum Acara Perdata",
    "topicTag": "Eksepsi Kompetensi Absolut",
    "question": "Berbeda dengan eksepsi kompetensi relatif, eksepsi mengenai tidak berwenangnya pengadilan mengadili perkara berdasarkan pembagian lingkungan peradilan (eksepsi kompetensi absolut) menurut Pasal 134 HIR / Pasal 160 RBg...",
    "options": [
      {
        "key": "A",
        "text": "Hanya dapat diajukan bersama-sama dengan jawaban pertama dan gugur apabila terlambat"
      },
      {
        "key": "B",
        "text": "Dapat diajukan pada setiap tingkatan pemeriksaan selama belum ada putusan, dan hakim wajib menyatakannya secara ex officio"
      },
      {
        "key": "C",
        "text": "Hanya boleh diajukan oleh Penggugat sebelum pembacaan gugatan"
      },
      {
        "key": "D",
        "text": "Baru dapat diajukan pada tingkat kasasi di Mahkamah Agung"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Eksepsi kompetensi absolut dapat diajukan kapan saja sepanjang proses pemeriksaan berlangsung, dan hakim wajib menyatakan tidak berwenang secara ex officio.",
      "legalBasis": "Pasal 134 HIR / Pasal 160 RBg jo. Pasal 132 Rv.",
      "statuteText": "Jika perselisihan itu adalah suatu perkara yang tidak termasuk kuasa pengadilan negeri, maka pada sembarang waktu dalam pemeriksaan perkara itu boleh diminta supaya hakim mengaku tidak berkuasa, dan hakim itu pun wajib pula mengakuinya karena jabatannya.",
      "analysis": "Pilihan B tepat karena kompetensi absolut menyangkut kewenangan atribusi mengadili antar lingkungan peradilan (Peradilan Umum, Agama, TUN, atau Militer) yang bersifat ketertiban umum, sehingga Pasal 134 HIR / Pasal 160 RBg memperkenankan pengajuannya pada setiap tingkat pemeriksaan sekaligus mewajibkan hakim memutus ketidakwenangannya karena jabatan (ex officio). Pilihan A keliru karena pembatasan waktu pada jawaban pertama berlaku bagi eksepsi kompetensi relatif (Pasal 133 HIR / Pasal 159 RBg); Pilihan C keliru karena eksepsi diajukan oleh Tergugat; dan Pilihan D keliru karena ketidakwenangan absolut dapat diajukan dan diputus sejak pemeriksaan tingkat pertama, bukan harus menunggu tingkat kasasi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 902,
    "category": "Hukum Acara Perdata",
    "topicTag": "Putusan Niet Ontvankelijke Verklaard (NO)",
    "question": "Apabila suatu gugatan perdata mengandung cacat formil seperti gugatan kabur (obscuur libel), kurang pihak (plurium litis consortium), atau salah pihak (error in persona), maka putusan yang dijatuhkan oleh hakim adalah...",
    "options": [
      {
        "key": "A",
        "text": "Gugatan ditolak (afgewezen)"
      },
      {
        "key": "B",
        "text": "Gugatan dinyatakan gugur (vervallen)"
      },
      {
        "key": "C",
        "text": "Gugatan tidak dapat diterima (Niet Ontvankelijke Verklaard / NO)"
      },
      {
        "key": "D",
        "text": "Gugatan dikabulkan sebagian"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Cacat formil pada gugatan mengakibatkan putusan menyatakan gugatan tidak dapat diterima (Niet Ontvankelijke Verklaard / NO) tanpa memeriksa pokok perkara.",
      "legalBasis": "Pasal 8 ayat (3) Rv jo. Yurisprudensi Mahkamah Agung RI tentang Syarat Formil Gugatan.",
      "statuteText": "Gugatan harus memuat alasan-alasan dan uraian tuntutan yang jelas serta ditujukan kepada pihak yang tepat agar dapat diperiksa pokok perkaranya; apabila syarat formil gugatan tidak terpenuhi, gugatan dinyatakan tidak dapat diterima (Niet Ontvankelijke Verklaard).",
      "analysis": "Pilihan C tepat karena cacat formil (obscuur libel, error in persona, plurium litis consortium, prematur) mencegah pemeriksaan pokok perkara sehingga diputus tidak dapat diterima (NO) dan tidak melekat ne bis in idem atas pokoknya. Pilihan A keliru karena gugatan ditolak (afgewezen/ontzegd) dijatuhkan setelah pokok perkara diperiksa dan dalil penggugat dinyatakan tidak terbukti; Pilihan B keliru karena gugatan gugur (vervallen) dijatuhkan apabila Penggugat tidak hadir pada sidang pertama meski dipanggil patut (Pasal 124 HIR); dan Pilihan D keliru karena hakim tidak dapat mengabulkan tuntutan apabila syarat formil gugatan cacat."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 903,
    "category": "Hukum Acara Perdata",
    "topicTag": "Intervensi Penanggungan (Vrijwaring)",
    "question": "Bentuk keikutsertaan pihak ketiga dalam perkara perdata atas permintaan salah satu pihak (umumnya Tergugat) untuk ditarik ke dalam perkara guna menanggung atau membebaskan pihak tersebut dari tanggung jawab pembayaran ganti rugi disebut...",
    "options": [
      {
        "key": "A",
        "text": "Voeging"
      },
      {
        "key": "B",
        "text": "Tussenkomst"
      },
      {
        "key": "C",
        "text": "Vrijwaring"
      },
      {
        "key": "D",
        "text": "Derden verzet"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Vrijwaring (penanggungan/pembebasan) adalah penarikan pihak ketiga oleh salah satu pihak yang berperkara untuk ikut bertanggung jawab menanggung akibat gugatan.",
      "legalBasis": "Pasal 70 sampai dengan Pasal 76 Reglement op de Burgerlijke Rechtsvordering (Rv).",
      "statuteText": "Apabila Tergugat atau Penggugat berpendapat bahwa terdapat pihak ketiga yang berkewajiban menanggungnya atas akibat perkara, ia dapat mengajukan permohonan kepada hakim agar pihak ketiga tersebut ditarik sebagai penanggung (vrijwaring).",
      "analysis": "Pilihan C tepat karena vrijwaring adalah penarikan paksa pihak ketiga atas permohonan salah satu pihak (lazimnya Tergugat) guna menanggung akibat gugatan berdasarkan Pasal 70–76 Rv. Pilihan A keliru karena voeging adalah keikutsertaan sukarela pihak ketiga untuk memihak salah satu pihak; Pilihan B keliru karena tussenkomst adalah keikutsertaan sukarela pihak ketiga yang melawan kedua pihak demi haknya sendiri; dan Pilihan D keliru karena derden verzet adalah perlawanan pihak ketiga terhadap sita atau pelaksanaan putusan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 904,
    "category": "Hukum Acara Perdata",
    "topicTag": "Tenggang Waktu Kasasi & Memori Kasasi",
    "question": "Berdasarkan Undang-Undang Mahkamah Agung, tenggang waktu pengajuan permohonan kasasi perkara perdata beserta batas waktu penyerahan memori kasasi ke kepaniteraan pengadilan tingkat pertama masing-masing adalah...",
    "options": [
      {
        "key": "A",
        "text": "7 hari sejak putusan diterima dan 7 hari setelah pendaftaran kasasi"
      },
      {
        "key": "B",
        "text": "14 hari sejak putusan diberitahukan dan 14 hari setelah pendaftaran permohonan kasasi"
      },
      {
        "key": "C",
        "text": "21 hari sejak putusan diucapkan dan 14 hari setelah pendaftaran kasasi"
      },
      {
        "key": "D",
        "text": "30 hari sejak putusan berkekuatan hukum tetap dan 30 hari setelah pendaftaran kasasi"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Permohonan kasasi diajukan dalam 14 hari sejak putusan diberitahukan, dan memori kasasi wajib diserahkan paling lambat 14 hari setelah permohonan kasasi dicatat.",
      "legalBasis": "Pasal 46 ayat (1) dan Pasal 47 ayat (1) UU No. 14 Tahun 1985 sebagaimana diubah dengan UU No. 5 Tahun 2004 dan UU No. 3 Tahun 2009 tentang Mahkamah Agung.",
      "statuteText": "Permohonan kasasi disampaikan secara tertulis atau lisan melalui Panitera Pengadilan Tingkat Pertama yang telah memutus perkaranya, dalam tenggang waktu 14 hari sesudah putusan atau penetapan pengadilan yang dimaksudkan diberitahukan kepada pemohon; dan pemohon kasasi wajib menyampaikan memori kasasi dalam tenggang waktu 14 hari setelah permohonan dimaksud dicatat dalam buku daftar.",
      "analysis": "Pilihan B tepat karena Pasal 46 ayat (1) dan Pasal 47 ayat (1) UU Mahkamah Agung menetapkan kedua tenggang waktu imperatif 14 hari secara terpisah (14 hari pendaftaran kasasi dan 14 hari pengajuan memori kasasi setelah akta kasasi dicatat). Pilihan A dan C keliru karena jangka waktu 7 hari maupun 21 hari tidak berlaku pada kasasi perdata (berbeda dengan kasasi PHI yang 14 hari atau banding etik KEAI yang 21 hari); sedangkan Pilihan D keliru karena 30 hari merupakan tenggang waktu penyampaian akta/jawaban dalam hal tertentu atau batas waktu peninjauan kembali (180 hari), bukan kasasi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 905,
    "category": "Hukum Acara Perdata",
    "topicTag": "Larangan Putusan Ultra Petita",
    "question": "Dalam menjatuhkan putusan perkara perdata, hakim dilarang mengabulkan hal-hal yang tidak dituntut atau memutus melebihi apa yang dimohonkan oleh Penggugat dalam petitumnya. Asas larangan ini dikenal sebagai...",
    "options": [
      {
        "key": "A",
        "text": "Ne bis in idem"
      },
      {
        "key": "B",
        "text": "Ultra petita"
      },
      {
        "key": "C",
        "text": "Res judicata pro veritate habetur"
      },
      {
        "key": "D",
        "text": "Ius curia novit"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Larangan memutus melebihi atau di luar apa yang dituntut dalam petitum disebut larangan ultra petita.",
      "legalBasis": "Pasal 178 ayat (2) dan ayat (3) HIR / Pasal 189 ayat (2) dan ayat (3) RBg jo. Yurisprudensi Mahkamah Agung RI No. 556 K/Sip/1971.",
      "statuteText": "Hakim wajib mengadili segala bagian tuntutan. Ia dilarang menjatuhkan putusan atas perkara yang tidak dituntut, atau akan meluluskan lebih dari pada yang dituntut.",
      "analysis": "Pilihan B tepat karena sesuai Pasal 178 ayat (3) HIR / Pasal 189 ayat (3) RBg dan dipertegas dalam Yurisprudensi Mahkamah Agung RI No. 556 K/Sip/1971, hakim dilarang mengabulkan melebihi tuntutan atau memutus hal yang tidak dituntut (ultra petita), dan pelanggarannya berakibat pembatalan putusan pada tingkat banding maupun kasasi. Pilihan A keliru karena ne bis in idem berarti perkara yang sama tidak boleh diperiksa kembali setelah putusan berkekuatan hukum tetap; Pilihan C keliru karena res judicata pro veritate habetur berarti putusan hakim yang telah tetap harus dianggap benar; dan Pilihan D keliru karena ius curia novit berarti hakim dianggap tahu akan hukumnya."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 910,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Syarat Pengangkatan dan Magang Advokat",
    "question": "Berdasarkan Pasal 3 ayat (1) UU No. 18 Tahun 2003 tentang Advokat jo. Putusan MK No. 138/PUU-XIII/2015, salah satu syarat kumulatif untuk dapat diangkat menjadi Advokat terkait usia minimal dan kewajiban magang adalah...",
    "options": [
      {
        "key": "A",
        "text": "Berusia sekurang-kurangnya 21 tahun dan magang paling singkat 1 tahun"
      },
      {
        "key": "B",
        "text": "Berusia sekurang-kurangnya 25 tahun dan magang sekurang-kurangnya 2 tahun terus-menerus pada kantor Advokat"
      },
      {
        "key": "C",
        "text": "Berusia sekurang-kurangnya 27 tahun dan magang sekurang-kurangnya 3 tahun di pengadilan negeri"
      },
      {
        "key": "D",
        "text": "Berusia sekurang-kurangnya 30 tahun dan pernah menjabat sebagai panitera pengadilan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Calon Advokat wajib berusia sekurang-kurangnya 25 tahun dan menjalani magang sekurang-kurangnya 2 tahun terus-menerus pada kantor Advokat.",
      "legalBasis": "Pasal 3 ayat (1) huruf d dan huruf g UU No. 18 Tahun 2003 tentang Advokat jo. Putusan Mahkamah Konstitusi No. 138/PUU-XIII/2015.",
      "statuteText": "Untuk dapat diangkat menjadi Advokat harus memenuhi persyaratan sebagai berikut: ... d. berusia sekurang-kurangnya 25 (dua puluh lima) tahun; ... g. magang sekurang-kurangnya 2 (dua) tahun terus menerus pada kantor Advokat.",
      "analysis": "Pilihan B tepat karena Pasal 3 ayat (1) huruf d dan huruf g UU No. 18 Tahun 2003 mensyaratkan calon Advokat berusia sekurang-kurangnya 25 tahun serta menjalani magang sekurang-kurangnya 2 tahun terus-menerus pada kantor Advokat (dengan kelonggaran waktu magang dapat dimulai sebelum atau sesudah lulus ujian profesi advokat). Pilihan A, C, dan D keliru karena angka batas usia, lama magang, maupun instansi tempat magang bertentangan dengan rumusan Pasal 3 ayat (1) UU Advokat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 911,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Advokat yang Menjadi Pejabat Negara",
    "question": "Berdasarkan Pasal 20 ayat (3) UU No. 18 Tahun 2003 tentang Advokat, akibat hukum bagi seorang Advokat yang diangkat dan menjabat sebagai Pejabat Negara adalah...",
    "options": [
      {
        "key": "A",
        "text": "Tetap dapat beracara di pengadilan khusus untuk perkara perdata saja"
      },
      {
        "key": "B",
        "text": "Langsung diberhentikan secara tetap dari profesi Advokat dan tidak dapat kembali lagi"
      },
      {
        "key": "C",
        "text": "Tidak melaksanakan tugas profesi Advokat selama memangku jabatan Pejabat Negara tersebut"
      },
      {
        "key": "D",
        "text": "Tetap bebas memberikan jasa hukum litigasi sepanjang memperoleh izin atasan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Advokat yang menjadi pejabat negara tidak melaksanakan tugas profesi Advokat selama memangku jabatan tersebut (nonaktif sementara).",
      "legalBasis": "Pasal 20 ayat (1), ayat (2), dan ayat (3) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Advokat yang menjadi pejabat negara, tidak melaksanakan tugas profesi Advokat selama memangku jabatan tersebut.",
      "analysis": "Pilihan C tepat karena Pasal 20 ayat (3) UU No. 18 Tahun 2003 menentukan bahwa Advokat yang menjadi pejabat negara wajib menonaktifkan pelaksanaan tugas profesinya selama memangku jabatan tersebut untuk mencegah benturan kepentingan. Pilihan A dan D keliru karena larangan praktik berlaku menyeluruh selama menjabat; dan Pilihan B keliru karena statusnya bersifat nonaktif selama menjabat, bukan pemberhentian permanen."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 912,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Ketentuan Advokat Asing",
    "question": "Menurut Pasal 23 ayat (1) dan ayat (2) UU No. 18 Tahun 2003 tentang Advokat, kedudukan dan batas kewenangan Advokat Asing di wilayah Indonesia adalah...",
    "options": [
      {
        "key": "A",
        "text": "Bebas beracara di seluruh pengadilan Indonesia setelah mendaftar di Kementerian Hukum"
      },
      {
        "key": "B",
        "text": "Dilarang beracara di sidang pengadilan, berpraktik, atau membuka kantor jasa hukum di Indonesia, dan hanya dapat bekerja di kantor Advokat Indonesia sebagai karyawan atau tenaga ahli hukum asing"
      },
      {
        "key": "C",
        "text": "Diperbolehkan membuka kantor cabang firma hukum asing dan beracara di Pengadilan Niaga secara mandiri"
      },
      {
        "key": "D",
        "text": "Dilarang sama sekali bekerja di kantor Advokat Indonesia dalam kapasitas apa pun"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Advokat asing dilarang beracara di pengadilan, berpraktik, atau membuka kantor di Indonesia, dan hanya dapat dipekerjakan kantor Advokat Indonesia sebagai tenaga ahli hukum asing atas izin Pemerintah dengan rekomendasi Organisasi Advokat.",
      "legalBasis": "Pasal 23 ayat (1), ayat (2), dan ayat (3) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Advokat asing dilarang beracara di sidang pengadilan, berpraktik dan/atau membuka kantor jasa hukum atau perwakilannya di Indonesia. Kantor Advokat dapat mempekerjakan advokat asing sebagai karyawan atau tenaga ahli dalam bidang hukum asing atas izin Pemerintah dengan rekomendasi Organisasi Advokat.",
      "analysis": "Pilihan B tepat sesuai ketentuan eksplisit Pasal 23 ayat (1) dan ayat (2) UU No. 18 Tahun 2003. Pilihan A dan C keliru karena advokat asing mutlak dilarang beracara di pengadilan maupun membuka kantor jasa hukum sendiri di Indonesia; sedangkan Pilihan D keliru karena kantor Advokat Indonesia diperbolehkan mempekerjakan advokat asing sebagai karyawan atau tenaga ahli di bidang hukum asing dengan izin Pemerintah dan rekomendasi Organisasi Advokat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 913,
    "category": "Peran, Fungsi, dan Perkembangan Organisasi Advokat",
    "topicTag": "Larangan Diskriminasi dan Identifikasi dengan Klien",
    "question": "Berdasarkan Pasal 18 ayat (1) dan ayat (2) UU No. 18 Tahun 2003 tentang Advokat, dalam menjalankan tugas profesinya membela perkara Klien, Advokat...",
    "options": [
      {
        "key": "A",
        "text": "Dapat disamakan kedudukannya dengan kesalahan Klien apabila membela perkara pidana berat"
      },
      {
        "key": "B",
        "text": "Berhak membedakan pelayanan berdasarkan status ekonomi dan afiliasi politik Klien"
      },
      {
        "key": "C",
        "text": "Dilarang membedakan perlakuan terhadap Klien berdasarkan SARA maupun latar belakang sosial, serta tidak dapat diidentikkan dengan Kliennya oleh pihak berwenang atau masyarakat"
      },
      {
        "key": "D",
        "text": "Wajib menolak seluruh calon Klien yang berstatus sebagai terdakwa tindak pidana korupsi"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Advokat dilarang membedakan perlakuan terhadap Klien dan tidak dapat diidentikkan dengan Kliennya dalam membela perkara Klien oleh pihak berwenang maupun masyarakat.",
      "legalBasis": "Pasal 18 ayat (1) dan ayat (2) UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Advokat dalam menjalankan tugas profesinya dilarang membedakan perlakuan terhadap Klien berdasarkan jenis kelamin, agama, politik, keturunan, ras, atau latar belakang sosial dan budaya. Advokat tidak dapat diidentikkan dengan Kliennya dalam membela perkara Klien oleh pihak yang berwenang dan/atau masyarakat.",
      "analysis": "Pilihan C tepat karena merangkum prinsip nondiskriminasi (Pasal 18 ayat (1)) dan prinsip non-identifikasi Advokat dengan Kliennya (Pasal 18 ayat (2)). Pilihan A keliru karena bertentangan langsung dengan prinsip bahwa pembela perkara tidak sama dengan pelaku perkara; Pilihan B keliru karena Advokat dilarang melakukan diskriminasi terhadap Klien; dan Pilihan D keliru karena setiap tersangka/terdakwa berhak atas pembelaan hukum (access to justice)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 914,
    "category": "Kode Etik Advokat Indonesia (KEAI)",
    "topicTag": "Pihak yang Berhak Mengajukan Pengaduan Etik",
    "question": "Berdasarkan Pasal 11 ayat (1) dan ayat (2) Kode Etik Advokat Indonesia (KEAI), pihak-pihak yang berhak mengajukan pengaduan dugaan pelanggaran Kode Etik Advokat kepada Dewan Kehormatan adalah...",
    "options": [
      {
        "key": "A",
        "text": "Hanya klien yang telah menandatangani surat kuasa khusus dengan Advokat yang diadukan"
      },
      {
        "key": "B",
        "text": "Klien, teman sejawat Advokat, pejabat pemerintah, anggota masyarakat, serta Dewan Pimpinan Pusat/Cabang/Daerah organisasi profesi tempat Teradu menjadi anggota"
      },
      {
        "key": "C",
        "text": "Hanya sesama teman sejawat Advokat dan ketua pengadilan negeri setempat"
      },
      {
        "key": "D",
        "text": "Hanya klien yang dirugikan dan penyidik kepolisian yang menangani perkara terkait"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pengaduan pelanggaran KEAI dapat diajukan oleh klien, teman sejawat Advokat, pejabat pemerintah, anggota masyarakat, serta DPP/DPC/DPD organisasi profesi tempat Teradu bernaung.",
      "legalBasis": "Pasal 11 ayat (1) dan ayat (2) Kode Etik Advokat Indonesia (KEAI).",
      "statuteText": "Pengaduan dapat diajukan oleh pihak-pihak yang berkepentingan dan merasa dirugikan, yaitu: a. Klien; b. Teman sejawat Advokat; c. Pejabat Pemerintah; d. Anggota Masyarakat; e. Dewan Pimpinan Pusat/Cabang/Daerah dari organisasi profesi dimana Teradu menjadi anggota.",
      "analysis": "Pilihan B tepat karena menyebutkan secara lengkap kelima subjek hukum yang berwenang mengajukan pengaduan pelanggaran KEAI menurut Pasal 11 ayat (1) dan ayat (2), termasuk kewenangan DPP/DPD/DPC bertindak sebagai pengadu demi kepentingan hukum dan kepentingan umum. Pilihan A keliru karena hak mengadu tidak terbatas hanya pada klien penerima kuasa; Pilihan C keliru karena mempersempit hak mengadu dengan mengecualikan klien dan masyarakat umum; serta Pilihan D keliru karena penyidik kepolisian tidak disebut sebagai kategori khusus, melainkan pejabat pemerintah dan masyarakat tetap berhak mengadu."
    },
    "difficulty": "Sedang"
  }
];

export const UPA_CATEGORIES: UPACategory[] = [
  'Hukum Acara Perdata',
  'Hukum Acara Pidana',
  'Hukum Acara PTUN',
  'Hukum Acara Peradilan Agama',
  'Peran, Fungsi, dan Perkembangan Organisasi Advokat',
  'Kode Etik Advokat Indonesia (KEAI)',
  'Hukum Acara Mahkamah Konstitusi',
  'Hukum Acara PHI',
  'Hukum Acara Arbitrase & APS'
];

/**
 * Mengkompilasi bank data master Ujian Profesi Advokat (UPA)
 * Berdasarkan naskah otentik soal dari dokumen referensi terlampir:
 * - Kunci Jawaban & Pembahasan PG Try Out 4 Juli 2026 (120 Soal Resmi PERADI)
 * - Naskah Try Out UPA 2025 (108 Soal Terverifikasi)
 * - Naskah Latihan Soal Ujian Advokat PERADI Toaz (88 Soal Terverifikasi)
 * Seluruh soal telah ditinjau dan dilengkapi dasar hukum lengkap (ayat, pasal, undang-undang).
 */
export function generateMasterQuestionBank(): UPAQuestion[] {
  const normalizeKey = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

  const base: UPAQuestion[] = [
    ...OFFICIAL_TRYOUT_QUESTIONS,
    ...TRYOUT_2025_BANK,
    ...TOAZ_PERADI_BANK,
  ];

  const seen = new Set<string>();
  const uniqueQuestions: UPAQuestion[] = [];

  for (const q of base) {
    const k = normalizeKey(q.question);
    if (!seen.has(k)) {
      seen.add(k);
      uniqueQuestions.push(q);
    }
  }

  // Re-index consecutive IDs starting from 1
  return uniqueQuestions.map((q, index) => ({
    ...q,
    id: index + 1,
  }));
}

export const MASTER_UPA_DATABASE: UPAQuestion[] = generateMasterQuestionBank();

