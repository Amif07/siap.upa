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
      "analysis": "Perhimpunan Advokat Indonesia (PERADI) adalah jawaban yang tepat karena resmi dideklarasikan pada 21 Desember 2004 oleh delapan organisasi advokat sebagai pelaksanaan Pasal 32 ayat (4) UU No. 18 Tahun 2003 tentang Advokat. Opsi PERADIN keliru karena merupakan organisasi advokat historis yang berdiri pada 1964 dan bukan delapan organisasi pendiri dalam Pasal 32 ayat (3); opsi HAPI keliru karena merupakan salah satu dari delapan organisasi pendiri, bukan wadah tunggal hasil deklarasi; dan opsi KKAI keliru karena merupakan forum kerja sama sementara sebelum PERADI dideklarasikan."
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
      "analysis": "Penetapan berdasarkan persetujuan kedua belah pihak adalah jawaban yang tepat karena Pasal 21 ayat (2) UU No. 18 Tahun 2003 secara tegas menentukan bahwa besaran honorarium ditetapkan secara wajar berdasarkan persetujuan antara Advokat dan Klien. Opsi mengenai Peraturan Pemerintah, ketetapan Undang-Undang, maupun keputusan Organisasi Advokat keliru karena undang-undang tidak mematok tarif baku melalui Peraturan Pemerintah, ketentuan nominal dalam Undang-Undang, ataupun penetapan sepihak oleh Organisasi Advokat."
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
      "analysis": "Pasal 1 angka 6 dan Pasal 7 ayat (3) adalah jawaban yang tepat karena Pasal 1 angka 6 mendefinisikan pembelaan diri sebagai pernyataan dan pengajuan bukti oleh Advokat dalam pemeriksaan Dewan Kehormatan, dan Pasal 7 ayat (3) mewajibkan pemberian kesempatan pembelaan diri sebelum tindakan dijatuhkan. Opsi Pasal 1 angka 1 dan Pasal 2 keliru karena mengatur definisi Advokat dan syarat pengangkatan; opsi Pasal 7 ayat (1) dan Pasal 8 keliru karena mengatur jenis sanksi dan penyampaian putusan; serta opsi Pasal 16 dan Pasal 19 keliru karena mengatur hak imunitas dan rahasia jabatan."
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
      "analysis": "Ancaman pidana penjara paling lama 5 (lima) tahun tepat sesuai rumusan asli Pasal 31 UU No. 18 Tahun 2003 (disertai denda paling banyak Rp50.000.000,00), yang kemudian dinyatakan tidak mempunyai kekuatan hukum mengikat oleh Putusan MK No. 006/PUU-II/2004 karena berpotensi menghalangi bantuan hukum cuma-cuma di luar profesi advokat. Adapun opsi paling lama 7 tahun, 3 tahun, maupun 2 tahun keliru karena tidak sesuai dengan ancaman pidana yang tercantum dalam Pasal 31 UU Advokat."
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
      "analysis": "Bantuan hukum nonlitigasi adalah jawaban yang tepat karena Pasal 1 angka 1 dan angka 2 UU No. 18 Tahun 2003 membagi ruang lingkup pemberian jasa hukum Advokat menjadi di dalam pengadilan (litigasi) dan di luar pengadilan (nonlitigasi). Opsi bantuan hukum aktif maupun bantuan hukum pasif keliru karena bukan terminologi hukum yang dikenal dalam UU Advokat; sedangkan opsi bantuan hukum litigasi keliru karena merujuk pada pendampingan atau pembelaan di dalam sidang pengadilan."
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
      "analysis": "Penegak hukum adalah jawaban yang tepat karena Pasal 5 ayat (1) UU No. 18 Tahun 2003 secara eksplisit menetapkan status Advokat sebagai penegak hukum yang bebas dan mandiri (bagian dari Catur Wangsa penegak hukum). Opsi institusi hukum keliru karena Advokat adalah profesi perseorangan, bukan institusi negara; opsi kuasa hukum keliru karena merupakan fungsi representasi berdasarkan surat kuasa, bukan status kelembagaan dalam Pasal 5 ayat (1); dan opsi pendekar hukum merupakan istilah nonyuridis."
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
      "analysis": "Peran terhadap anggota, masyarakat, dan negara adalah jawaban yang tepat karena dalam doktrin dan ketentuan UU No. 18 Tahun 2003, Organisasi Advokat berperan membina serta mengawasi anggota (Pasal 12 dan Pasal 28), melayani masyarakat pencari keadilan termasuk melalui bantuan hukum cuma-cuma (Pasal 22), serta menjaga negara hukum dan hak asasi manusia. Opsi yang hanya menyebut peran terhadap klien dan keluarganya, sesama penegak hukum saja, ataupun pencari keadilan yang mampu saja keliru karena membatasi ruang lingkup peran Organisasi Advokat hanya pada satu aspek parsial."
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
      "analysis": "Organisasi Advokat adalah jawaban yang tepat karena Pasal 12 ayat (1) UU No. 18 Tahun 2003 menegaskan pengawasan terhadap Advokat dilakukan oleh Organisasi Advokat (yang dalam pelaksanaannya membentuk Komisi Pengawas sesuai Pasal 13 ayat (1)). Opsi Mahkamah Agung, Kementerian Hukum dan HAM, maupun Pengadilan Negeri keliru karena sejak berlakunya UU No. 18 Tahun 2003, kewenangan pengawasan advokat dicabut dari lembaga-lembaga tersebut demi kemandirian profesi (self-regulating profession)."
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
      "analysis": "Opsi yang mencakup konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, membela, dan tindakan hukum lain tepat karena memuat rumusan lengkap Jasa Hukum sebagaimana tertulis dalam Pasal 1 angka 2 UU No. 18 Tahun 2003. Opsi yang membatasi pada pengadilan negeri saja keliru karena jasa hukum tidak terbatas pada litigasi di pengadilan negeri; opsi di luar sidang pengadilan saja keliru karena jasa hukum mencakup baik di dalam maupun di luar pengadilan; dan opsi pendapat hukum serta kontrak saja keliru karena mempersempit cakupan jasa hukum Advokat."
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
      "analysis": "Memeriksa dan mengadili pelanggaran kode etik profesi Advokat adalah jawaban yang tepat karena merupakan tugas utama Dewan Kehormatan menurut Pasal 26 ayat (1) jo. ayat (2) UU No. 18 Tahun 2003. Opsi mengangkat dan memberhentikan calon Advokat keliru karena pengangkatan advokat merupakan kewenangan Organisasi Advokat (Pasal 2 ayat (2)); opsi bantuan hukum cuma-cuma keliru karena merupakan kewajiban masing-masing Advokat (Pasal 22); dan opsi menetapkan standar minimal honorarium keliru karena honorarium ditetapkan berdasarkan persetujuan Advokat dan Klien (Pasal 21 ayat (2))."
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
      "analysis": "Tidak dapat dituntut baik secara perdata maupun pidana dengan itikad baik di dalam maupun di luar sidang pengadilan adalah jawaban yang tepat karena Putusan MK No. 26/PUU-XI/2013 memperluas makna Pasal 16 UU No. 18 Tahun 2003 sehingga perlindungan hak imunitas berlaku di dalam dan di luar sidang pengadilan sepanjang dijalankan dengan itikad baik. Opsi kebal mutlak tanpa syarat keliru karena hak imunitas bersyarat itikad baik; opsi hanya di dalam ruang sidang pengadilan saja keliru karena bertentangan dengan Putusan MK tersebut; dan opsi bebas dari pemeriksaan Dewan Kehormatan keliru karena hak imunitas tidak membebaskan Advokat dari pemeriksaan etik profesi."
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
      "analysis": "Kewajiban menjaga kerahasiaan selama-lamanya meskipun hubungan hukum telah berakhir (kecuali ditentukan lain oleh undang-undang) adalah jawaban yang tepat sesuai Pasal 19 ayat (1) UU No. 18 Tahun 2003. Opsi yang membatasi hanya selama hubungan kuasa berlangsung atau sampai putusan berkekuatan hukum tetap keliru karena rahasia jabatan bersifat terus-menerus dan tidak berhenti saat kuasa dicabut atau perkara diputus inkracht; dan opsi hanya sepanjang keterangan di persidangan keliru karena kerahasiaan juga meliputi konsultasi maupun dokumen di luar persidangan (Pasal 19 ayat (2))."
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
      "analysis": "Mempunyai kekuatan hukum secara mutatis mutandis berdasarkan Pasal 33 UU No. 18 Tahun 2003 adalah jawaban yang tepat karena undang-undang secara tegas mengakui dan memberlakukan Kode Etik Advokat tanggal 23 Mei 2002 sampai ada ketentuan baru. Opsi tidak berlaku lagi atau hanya pedoman moral tanpa kekuatan mengikat keliru karena KEAI 2002 tetap berlaku dan mengikat secara hukum; sedangkan opsi hanya mengikat bagi Advokat sebelum tahun 2003 keliru karena KEAI berlaku mengikat bagi seluruh Advokat tanpa membedakan tahun pengangkatannya."
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
      "analysis": "Kedudukan setara dengan Polisi, Jaksa, dan Hakim adalah jawaban yang tepat karena dalam Penjelasan Pasal 5 ayat (1) UU No. 18 Tahun 2003 dan doktrin Catur Wangsa Penegak Hukum, Advokat berkedudukan setara dengan unsur penegak hukum tersebut guna menjamin peradilan yang adil (fair trial). Opsi Satpol PP dan pejabat pemerintah daerah keliru karena keduanya bukan aparat penegak hukum peradilan; sedangkan opsi Notaris dan PPAT keliru karena merupakan pejabat umum pembuat akta otentik, bukan unsur penegak hukum di persidangan."
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
      "analysis": "Tanggal 23 Mei 2002 adalah jawaban yang tepat karena KEAI resmi ditetapkan di Jakarta pada tanggal tersebut sebelum lahirnya UU No. 18 Tahun 2003. Opsi 23 Mei 2003 keliru karena tahun 2003 adalah tahun pengundangan UU No. 18 Tahun 2003 (5 April 2003), bukan penetapan KEAI; opsi 23 Juni 2002 keliru mengenai bulan penetapan (seharusnya Mei); dan opsi 23 Mei 2001 keliru karena tahun 2001 adalah sebelum KKAI merumuskan pengesahan KEAI final."
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
      "analysis": "Tidak dapat menjalankan profesinya baik di dalam maupun di luar sidang adalah jawaban yang tepat karena Pasal 16 ayat (3) KEAI secara tegas melarang Advokat yang sedang menjalani masa skorsing untuk berpraktik baik di muka pengadilan (litigasi) maupun di luar pengadilan (nonlitigasi). Opsi yang membolehkan berpraktik di luar sidang atau hanya memberikan konsultasi hukum keliru karena sanksi skorsing juga menutup kewenangan jasa hukum di luar sidang termasuk konsultasi hukum; sedangkan opsi tetap dapat berpraktik di dalam maupun di luar sidang keliru karena bertentangan langsung dengan sifat pembekuan sementara izin praktik profesi."
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
      "analysis": "Diteruskan tanpa kehadiran Teradu adalah jawaban yang tepat karena Pasal 13 ayat (9) KEAI menetapkan bahwa setelah dua kali pemanggilan patut tidak dihadiri Teradu tanpa alasan sah, pemeriksaan dilanjutkan tanpa hadirnya Teradu agar proses etik tidak terhambat. Opsi menghentikan sementara atau menunda untuk panggilan ketiga kalinya keliru karena penundaan maksimal 14 hari hanya dilakukan pada ketidakhadiran sidang pertama (Pasal 13 ayat (8)), bukan memanggil ketiga kalinya atau menunggu Pengadu menghadirkan Teradu; sedangkan opsi menutup pengaduan sebagai tidak dapat diteruskan keliru karena konsekuensi gugur berlaku apabila Pengadu sendiri yang mangkir, bukan Teradu."
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
      "analysis": "Dapat beralih profesi dengan pembatasan 3 tahun tidak menangani perkara di pengadilan tempatnya terakhir bekerja adalah jawaban yang tepat karena Pasal 7 huruf h KEAI menetapkan masa tunggu (cooling-off period) 3 tahun pada pengadilan terakhirnya bertugas guna mencegah konflik kepentingan dan penyalahgunaan pengaruh. Opsi tidak dapat dibenarkan atau dilarang secara permanen keliru karena KEAI tidak melarang mantan Hakim/Panitera menjadi Advokat secara permanen; sedangkan opsi langsung beracara tanpa pembatasan waktu apa pun keliru karena tetap ada larangan selama 3 tahun di pengadilan tempat terakhirnya bekerja."
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
      "analysis": "Harus hadir secara pribadi dan tidak dapat menguasakan kepada orang lain (dengan hak didampingi penasihat) adalah jawaban yang tepat karena Pasal 13 ayat (7) KEAI menegaskan sifat pemeriksaan kode etik yang personal. Opsi yang menyebut dapat diwakili oleh penasihat keliru karena kata 'diwakili' berarti penasihat menggantikan kehadiran pihak, padahal yang dibolehkan hanya 'didampingi'; sedangkan opsi tidak perlu hadir secara pribadi karena dapat memberikan kuasa kepada Advokat atau orang lain keliru karena KEAI melarang tegas pemberian kuasa untuk menggantikan kehadiran pribadi para pihak."
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
      "analysis": "Wajib apabila diminta oleh Advokat yang didakwa atau jika ditunjuk oleh organisasi profesi adalah jawaban yang tepat sesuai rumusan Pasal 3 huruf e KEAI tentang solidaritas profesi. Opsi bersifat fakultatif sepanjang sanggup membayar honorarium keliru karena kewajiban etik ini tidak digantungkan pada syarat komersial; opsi dilarang karena mencemarkan nama baik organisasi keliru karena melanggar asas praduga tak bersalah dan hak pembelaan hukum; dan opsi wajib secara otomatis tanpa permintaan atau penunjukan keliru karena pemberian bantuan hukum tetap mensyaratkan permintaan dari Advokat yang didakwa atau penunjukan organisasi profesi."
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
      "analysis": "Keputusan Organisasi Advokat adalah jawaban yang tepat karena Pasal 9 ayat (1) jo. Pasal 10 ayat (1) UU No. 18 Tahun 2003 memberikan wewenang pemberhentian Advokat secara eksklusif kepada Organisasi Advokat (melalui putusan Dewan Kehormatan atau ketetapan organisasi). Opsi Ketua Mahkamah Agung, Ketua Pengadilan Tinggi, dan Menteri Hukum dan HAM keliru karena lembaga-lembaga tersebut hanya menerima salinan surat keputusan pemberhentian berdasarkan Pasal 9 ayat (2), bukan pihak yang berwenang memberhentikan."
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
      "analysis": "Peringatan biasa, peringatan keras, pemberhentian sementara untuk waktu tertentu, atau pemecatan dari keanggotaan organisasi profesi adalah jawaban yang tepat karena mencantumkan secara lengkap keempat jenis hukuman dalam Pasal 16 ayat (1) KEAI yang selaras dengan Pasal 7 ayat (1) UU No. 18 Tahun 2003. Opsi teguran lisan/peringatan keras/pemecatan keliru karena meniadakan sanksi pemberhentian sementara serta menggunakan istilah 'teguran lisan'; sedangkan opsi denda profesi, pencabutan kartu secara tersendiri, maupun pembekuan kantor hukum keliru karena tidak dikenal sebagai jenis hukuman dalam Pasal 16 ayat (1) KEAI."
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
      "analysis": "Orang, badan hukum, atau lembaga lain yang menerima jasa hukum dari Advokat adalah jawaban yang tepat karena mengutip rumusan utuh Pasal 1 angka 3 UU No. 18 Tahun 2003. Opsi yang membatasi hanya pada orang perseorangan yang berperkara di pengadilan, badan hukum privat, atau lembaga pemerintah saja keliru karena masing-masing membatasi subjek Klien hanya pada satu golongan tertentu, padahal undang-undang mencakup seluruh subjek hukum baik untuk layanan litigasi maupun nonlitigasi."
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
      "analysis": "Dibenarkan menolak dengan pertimbangan tidak sesuai keahliannya dan bertentangan dengan hati nuraninya adalah jawaban yang tepat sesuai Pasal 3 huruf a KEAI. Opsi menolak karena perbedaan agama, suku, atau keyakinan politik keliru karena secara tegas dilarang oleh prinsip nondiskriminasi; opsi tidak dibenarkan menolak dalam keadaan apa pun keliru karena kebebasan profesi justru mencakup kebebasan nurani dan kompetensi keahlian; dan opsi menolak karena calon klien belum pernah berperkara keliru karena bukan alasan etik penolakan."
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
      "analysis": "Hak menahan surat-surat atau dokumen milik klien hingga kewajiban klien terpenuhi sepanjang tidak merugikan kepentingan klien adalah jawaban yang tepat sesuai Pasal 4 huruf k KEAI jo. Pasal 1812 KUHPerdata. Opsi menentukan honorarium sepihak keliru karena honorarium wajib disepakati bersama secara wajar (Pasal 21 UU Advokat dan Pasal 4 huruf d KEAI); opsi mengundurkan diri mendadak keliru karena Pasal 4 huruf i KEAI justru melarang pelepasan tugas pada saat merugikan klien; dan opsi membatalkan surat kuasa tanpa pemberitahuan keliru karena pengakhiran kuasa harus diberitahukan secara patut."
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
      "analysis": "Belum final dan dapat diajukan upaya banding ke Dewan Kehormatan Pusat adalah jawaban yang tepat karena Pasal 17 ayat (1) KEAI jo. Pasal 27 ayat (4) UU No. 18 Tahun 2003 membuka upaya hukum banding apabila salah satu pihak tidak puas atas putusan tingkat pertama. Opsi yang menyatakan final atau berkekuatan hukum tetap seketika keliru karena sifat final dan mengikat baru melekat pada putusan Dewan Kehormatan Pusat (Pasal 18 ayat (4) KEAI); dan opsi kasasi ke Mahkamah Agung keliru karena penegakan etik profesi merupakan yurisdiksi internal Dewan Kehormatan Organisasi Advokat, bukan lingkungan peradilan umum di bawah Mahkamah Agung."
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
      "analysis": "Saling menghormati, saling menghargai, dan saling mempercayai adalah jawaban yang tepat karena mengutip langsung norma Pasal 5 huruf a KEAI tentang landasan kolegialitas sesama Advokat. Opsi mengutamakan perdebatan personal keliru karena Pasal 5 huruf b KEAI justru melarang penggunaan kata-kata tidak sopan terhadap teman sejawat di dalam maupun di luar sidang; sedangkan opsi bersaing bebas tanpa kewajiban menjaga kehormatan maupun memandang rekan sejawat sebagai pesaing bisnis keliru karena profesi Advokat sebagai officium nobile menempatkan rekan sejawat sebagai mitra penegak hukum, bukan rival komersial."
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
      "analysis": "Perlawanan pihak ketiga (derden verzet) adalah jawaban yang tepat karena Pasal 378 Rv jo. Pasal 195 ayat (6) HIR / Pasal 206 ayat (6) RBg memberi hak perlawanan kepada pihak di luar perkara yang hak milik atau hak penguasaan bendanya (termasuk penyewa sah) dirugikan oleh sita eksekusi. Opsi verzet terhadap putusan verstek keliru karena verzet (Pasal 129 HIR / Pasal 153 RBg) khusus disediakan bagi Tergugat yang diputus verstek; sedangkan opsi banding dan kasasi keliru karena kedua upaya hukum tersebut hanya dapat diajukan oleh pihak yang berperkara dalam putusan asal, bukan pihak ketiga yang terdampak sita eksekusi."
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
      "analysis": "Berdasarkan Pasal 118 ayat (2) HIR / Pasal 142 ayat (2) RBg, jika terdapat lebih dari satu tergugat dengan domisili berbeda, undang-undang memberikan hak opsi kepada penggugat untuk mengajukan gugatan di Pengadilan Negeri tempat tinggal salah satu tergugat menurut pilihan penggugat (dalam praktik beracara, tergugat yang domisilinya dipilih tersebut lazim ditempatkan pada urutan pertama sebagai Tergugat I). Sebagai pengecualian, apabila hubungan hukum antar-tergugat adalah debitur pokok dan penjamin (borg), gugatan wajib diajukan di tempat tinggal debitur pokok. Opsi penunjukan secara acak keliru karena penentuan domisili merupakan hak opsi penggugat yang dipertimbangkan secara hukum; opsi domisili yang lebih dekat dengan penggugat keliru karena undang-undang tidak mensyaratkan kedekatan jarak dengan penggugat; dan opsi letak barang sengketa tidak bergerak keliru karena asas forum rei sitae (Pasal 118 ayat (3) HIR / Pasal 142 ayat (5) RBg) hanya berlaku apabila objek sengketanya berupa benda tidak bergerak."
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
      "analysis": "Bersama-sama dengan jawaban Tergugat adalah jawaban yang tepat karena Pasal 132b ayat (1) HIR / Pasal 158 ayat (1) RBg mewajibkan Tergugat mengajukan gugatan rekonvensi bersama jawabannya pada sidang tingkat pertama (dengan memperhatikan pengecualian Pasal 132a ayat (1) HIR terkait sifat pihak, kompetensi absolut, dan pelaksanaan putusan). Opsi setelah tahap pembuktian keliru karena sudah terlambat dan menghambat pemeriksaan serentak; opsi 7 hari setelah putusan diucapkan keliru karena rekonvensi bukan upaya hukum pascaputusan; dan opsi pada tingkat banding keliru karena Pasal 132a ayat (2) HIR tegas melarang pengajuan rekonvensi baru pada tingkat banding."
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
      "analysis": "SEMA Nomor 3 Tahun 2000 adalah jawaban yang tepat karena mengatur tentang Putusan Serta Merta (Uitvoerbaar bij Voorraad) dan Provisionil secara limitatif serta mensyaratkan izin Ketua Pengadilan Tinggi dan uang jaminan (SEMA No. 4 Tahun 2001). Opsi SEMA Nomor 1 Tahun 2000 keliru karena mengatur mengenai Lembaga Paksa Badan (Gijzeling); sedangkan opsi SEMA Nomor 3 Tahun 2002 dan SEMA Nomor 3 Tahun 2003 keliru karena bukan surat edaran MA yang mengatur syarat putusan serta merta."
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
      "analysis": "Putusan condemnatoir adalah jawaban yang tepat karena hanya putusan penghukuman yang memuat perintah pemenuhan prestasi dan memiliki kekuatan eksekutorial bila tidak dilaksanakan secara sukarela. Opsi putusan deklaratoir keliru karena sekadar menyatakan atau menegaskan suatu keadaan hukum (misalnya menyatakan ahli waris atau perjanjian sah); opsi putusan konstitutif keliru karena menciptakan atau meniadakan keadaan hukum baru (misalnya putusan perceraian atau pailit); dan opsi putusan verstek keliru karena merujuk pada cara penjatuhan putusan akibat ketidakhadiran Tergugat, bukan sifat amar penghukuman."
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
      "analysis": "Tanggal 25 November 2008 adalah jawaban yang tepat karena sesuai Pasal 7 ayat (1) UU No. 20 Tahun 1947 / Pasal 199 ayat (1) RBg, tenggang waktu 14 hari dihitung mulai hari berikutnya setelah putusan diucapkan di hadapan para pihak (12 November 2008 sebagai hari ke-1), sehingga hari ke-14 jatuh tepat pada tanggal 25 November 2008. Opsi tanggal 17 November 2008 dan 18 November 2008 keliru karena menggunakan perhitungan 6 atau 7 hari; dan opsi tanggal 24 November 2008 keliru karena menghitung tanggal pengucapan (11 November 2008) sebagai hari ke-1 sehingga jatuh lebih awal sehari."
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
      "analysis": "Hak kreditur untuk menuntut pembatalan segala perbuatan hukum debitur yang tidak diwajibkan dan merugikan kreditur adalah jawaban yang tepat sesuai Pasal 1341 KUHPerdata (misalnya menghibahkan atau mengalihkan aset secara curang). Opsi kewenangan debitur membatalkan perjanjian utang sepihak keliru karena actio pauliana justru melindungi kepentingan kreditur dari perbuatan curang debitur; opsi hak pembeli menuntut pengurangan harga akibat cacat tersembunyi keliru karena hal itu adalah actio quanti minoris (Pasal 1507 KUHPerdata); dan opsi hak ahli waris garis lurus menuntut bagian mutlak warisan keliru karena berkaitan dengan legitieme portie (Pasal 913 KUHPerdata)."
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
      "analysis": "Opsi yang mencakup tidak memenuhi prestasi, terlambat memenuhi prestasi, memenuhi prestasi tidak sebagaimana mestinya, atau melakukan hal yang dilarang perjanjian adalah jawaban yang tepat berdasarkan Pasal 1238, Pasal 1239, dan Pasal 1243 KUHPerdata serta doktrin hukum perikatan. Opsi yang hanya menyebut tidak memenuhi prestasi sama sekali atau hanya keterlambatan memenuhi prestasi keliru karena masing-masing hanya menyebut satu unsur secara parsial; sedangkan opsi menolak menandatangani akta perdamaian keliru karena bukan bentuk wanprestasi apabila seluruh kewajiban perikatan telah dilaksanakan tepat waktu."
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
      "analysis": "Legitieme portie adalah jawaban yang tepat karena Pasal 913 KUHPerdata mendefinisikannya sebagai bagian mutlak yang dilindungi undang-undang bagi legitimaris (ahli waris garis lurus ke bawah maupun ke atas) terhadap hibah maupun wasiat pewaris. Opsi fidei commis keliru karena merupakan pengangkatan waris bertingkat dengan kewajiban menyimpan dan menyerahkan harta warisan kepada pihak berikutnya; opsi erfstelling keliru karena merupakan pengangkatan ahli waris melalui surat wasiat; dan opsi testamentair executeur keliru karena merupakan pelaksana wasiat yang ditunjuk oleh pewaris."
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
      "analysis": "Perlawanan / Verzet adalah jawaban yang tepat karena berdasarkan Pasal 129 ayat (1) dan ayat (2) HIR / Pasal 153 RBg, Tergugat yang dihukum dengan putusan verstek berhak mengajukan perlawanan kepada Pengadilan Negeri yang sama dalam tenggang waktu 14 hari sejak pemberitahuan putusan disampaikan secara sah kepada Tergugat pribadi. Opsi banding keliru karena dalam putusan verstek upaya banding disediakan bagi Penggugat apabila gugatannya ditolak atau dinyatakan tidak dapat diterima (Pasal 125 ayat (3) HIR), sedangkan bagi Tergugat banding baru terbuka setelah putusan atas verzet; opsi kasasi keliru karena diajukan terhadap putusan tingkat banding; dan opsi peninjauan kembali keliru karena merupakan upaya hukum luar biasa atas putusan yang telah berkekuatan hukum tetap."
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
      "analysis": "Judex facti adalah jawaban yang tepat karena dalam doktrin peradilan Indonesia, Pengadilan Negeri dan Pengadilan Tinggi berkedudukan sebagai pemeriksa fakta perkara yang berwenang memeriksa peristiwa konkret dan menilai bobot pembuktian. Opsi judex juris keliru karena merujuk pada Mahkamah Agung di tingkat kasasi yang hanya memeriksa penerapan hukumnya sesuai Pasal 30 ayat (1) UU Mahkamah Agung; sedangkan opsi Hakim Pengadilan Negeri saja dan Hakim Pengadilan Tinggi saja keliru karena kedua tingkatan pengadilan tersebut bersama-sama berperan sebagai judex facti, bukan salah satu saja."
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
      "analysis": "Voeging (menyertai) adalah jawaban yang tepat karena merupakan keikutsertaan sukarela pihak ketiga untuk mendukung posisi Penggugat atau Tergugat sesuai Pasal 279 Rv. Opsi tussenkomst keliru karena merupakan masuknya pihak ketiga untuk memperjuangkan kepentingannya sendiri melawan Penggugat dan Tergugat sekaligus; opsi derden verzet keliru karena merupakan perlawanan terhadap sita atau putusan oleh pihak ketiga di luar persidangan; dan opsi vrijwaring keliru karena merupakan penarikan paksa pihak ketiga atas permohonan salah satu pihak (penanggungan)."
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
      "analysis": "Pasal 130 HIR / Pasal 154 RBg adalah jawaban yang tepat karena secara eksplisit mewajibkan hakim mengusahakan perdamaian apabila kedua belah pihak hadir, dan apabila tercapai dituangkan dalam akta perdamaian (acte van dading) yang berkekuatan hukum tetap serta eksekutorial. Opsi Pasal 118 HIR / Pasal 142 RBg keliru karena mengatur pengajuan surat gugatan dan kompetensi relatif; opsi Pasal 132 HIR / Pasal 156 RBg keliru karena mengatur bantuan keterangan ketua sidang agar persidangan berjalan teratur; dan opsi Pasal 133 HIR / Pasal 159 RBg keliru karena mengatur eksepsi ketidakwenangan relatif pengadilan."
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
      "analysis": "Opsi alat bukti surat, saksi, persangkaan, pengakuan, dan sumpah tepat karena menyebutkan secara lengkap kelima alat bukti perdata yang bersifat limitatif menurut Pasal 164 HIR / Pasal 284 RBg jo. Pasal 1866 KUHPerdata. Opsi lainnya yang mencantumkan unsur pengetahuan hakim, yurisprudensi, atau keyakinan hakim keliru karena unsur keyakinan hakim merupakan syarat pembuktian pidana dalam Pasal 183 KUHAP (bukan alat bukti acara perdata) serta opsi-opsi tersebut menghilangkan unsur pengakuan atau persangkaan."
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
      "analysis": "Mengajukan gugatan rekonvensi terhadap Amir adalah jawaban yang tepat karena Pasal 132a dan Pasal 132b HIR / Pasal 157 dan Pasal 158 RBg memfasilitasi Tergugat mengajukan gugatan balik atas tuntutan yang saling berkaitan guna mewujudkan asas peradilan sederhana, cepat, dan biaya ringan serta mencegah putusan yang saling bertentangan. Opsi perlawanan pihak ketiga keliru karena derden verzet hanya untuk pihak ketiga di luar perkara; opsi menunggu putusan berkekuatan hukum tetap keliru karena penundaan justru menghilangkan kesempatan rekonvensi dan memicu perkara baru; dan opsi permohonan voluntaria secara sepihak keliru karena tuntutan pelunasan utang bersifat sengketa (contentiosa), bukan permohonan tanpa lawan."
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
      "analysis": "Eksepsi kompetensi relatif adalah jawaban yang tepat karena menyangkut pembagian kewenangan teritorial antar-Pengadilan Negeri berdasarkan Pasal 118 HIR / Pasal 142 RBg dan eksepsinya wajib diajukan pada jawaban pertama (Pasal 133 HIR / Pasal 159 RBg). Opsi eksepsi kewenangan absolut keliru karena berkaitan dengan kewenangan antar lingkungan peradilan yang berbeda (misalnya PN vs Pengadilan Agama atau PTUN); opsi eksepsi dilatoir keliru karena menunda pemeriksaan gugatan yang prematur; dan opsi eksepsi peremptoir keliru karena menolak gugatan atas dasar daluwarsa atau ne bis in idem."
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
      "analysis": "Pasal 118 ayat (1) HIR / Pasal 142 ayat (1) RBg adalah jawaban yang tepat karena merupakan dasar normatif pengajuan gugatan perdata secara tertulis yang ditandatangani oleh Penggugat atau kuasanya kepada Ketua Pengadilan Negeri yang berwenang. Opsi Pasal 120 HIR / Pasal 144 RBg keliru karena secara khusus mengatur pengajuan gugatan secara lisan bagi Penggugat yang tidak pandai membaca dan menulis; opsi Pasal 123 ayat (1) HIR / Pasal 147 ayat (1) RBg keliru karena mengatur surat kuasa khusus; dan opsi Pasal 125 ayat (1) HIR / Pasal 149 ayat (1) RBg keliru karena mengatur penjatuhan putusan verstek apabila Tergugat tidak hadir."
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
      "analysis": "Prinsip tidak seorang pun dapat dipidana berdasarkan aturan yang berlaku setelah perbuatan dilakukan (non-retroaktif) adalah jawaban yang tepat karena asas legalitas (nullum delictum nulla poena sine praevia lege poenali) melarang pemberlakuan surut hukum pidana yang merugikan atau memberatkan pelaku. Opsi peraturan pidana baru dapat berlaku surut demi kepentingan negara keliru karena hukum pidana tidak boleh berlaku surut secara bebas kecuali perubahan peraturan baru yang lebih menguntungkan terdakwa (asas lex mitior dalam Pasal 3 ayat (1) KUHP Nasional); opsi hanya berlaku terhadap WNI keliru karena asas teritorial berlaku bagi setiap orang di wilayah RI tanpa memandang kewarganegaraan; dan opsi hakim bebas menerapkan hukum yang dianggap adil keliru karena hakim dilarang menjatuhkan pidana tanpa dasar undang-undang tertulis.",
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
      "summary": "Pelaksanaan telah dimulai namun terhalang bukan karena kehendak sendiri merupakan percobaan tindak pidana (poging).",
      "legalBasis": "Pasal 17 ayat (1) UU No. 1 Tahun 2023 (KUHP Nasional) jo. Pasal 53 ayat (1) KUHP lama.",
      "statuteText": "Percobaan melakukan Tindak Pidana terjadi jika niat untuk itu telah nyata dari adanya permulaan pelaksanaan, dan tidak selesainya pelaksanaan tersebut bukan semata-mata disebabkan oleh kehendak pelaku sendiri.",
      "analysis": "Percobaan tindak pidana (Poging) adalah jawaban yang tepat karena niat Andi sudah terwujud dalam permulaan pelaksanaan (memasukkan racun ke minuman) dan gagalnya akibat bukan karena kehendak Andi sendiri, melainkan diketahui pelayan. Opsi persiapan keliru karena perbuatan telah melampaui tahap persiapan menuju pelaksanaan langsung kejahatan; opsi turut serta (medeplegen) keliru karena mensyaratkan kerja sama sadar lebih dari satu pelaku; dan opsi pembantuan (medeplichtigheid) keliru karena merupakan pemberian bantuan sebelum atau saat orang lain berbuat, sedangkan Andi bertindak sendiri.",
      "ruuComparison": "Dalam KUHP Nasional (Pasal 17–18) dan sinkronisasi RUU KUHAP, percobaan (poging) tetap mensyaratkan pembuktian niat dan permulaan pelaksanaan secara objektif-subjektif oleh penyidik dan penuntut umum, serta penjatuhan pidana maksimalnya tetap dikurangi sepertiga dari ancaman pokok kecuali ditentukan lain."
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
      "legalBasis": "Pasal 20 huruf b UU No. 1 Tahun 2023 (KUHP Nasional) jo. Pasal 55 ayat (1) ke-1 KUHP lama.",
      "statuteText": "Setiap orang dipidana sebagai pelaku tindak pidana apabila: a. melakukan sendiri tindak pidana; b. menyuruh orang lain melakukan tindak pidana; c. turut serta melakukan tindak pidana; atau d. menggerakkan orang lain supaya melakukan tindak pidana.",
      "analysis": "Orang yang menyuruh melakukan (Doen Pleger) adalah jawaban yang tepat karena Toni merancang kejahatan dan menyuruh orang lain sebagai pelaksana fisik sementara ia sendiri tidak turun ke lokasi. Opsi pembantu keliru karena pembantuan (Pasal 21 KUHP Nasional / Pasal 56 KUHP lama) hanya bersifat membantu niat pelaku utama yang sudah ada; opsi pelaku tunggal keliru karena tindak pidana melibatkan lebih dari satu orang; dan opsi saksi keliru karena Toni berperan sebagai pengendali perbuatan pidana, bukan sekadar pihak yang mengetahui peristiwa.",
      "ruuComparison": "KUHP Nasional (Pasal 20) merumuskan kembali bentuk penyertaan secara lebih sistematis (pelaku, menyuruh melakukan, turut serta, dan penganjur). Dalam RUU KUHAP, pembuktian peran penyertaan menuntut surat dakwaan penuntut umum menguraikan secara cermat peran masing-masing peserta delik."
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
      "summary": "Dasar hukum pemberantasan tindak pidana korupsi di Indonesia adalah UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 43A Undang-Undang No. 31 Tahun 1999 sebagaimana telah diubah dengan Undang-Undang No. 20 Tahun 2001 tentang Pemberantasan Tindak Pidana Korupsi.",
      "statuteText": "Setiap orang yang secara melawan hukum melakukan perbuatan memperkaya diri sendiri atau orang lain atau suatu korporasi yang dapat merugikan keuangan negara atau perekonomian negara, dipidana penjara...",
      "analysis": "UU No. 31 Tahun 1999 jo. UU No. 20 Tahun 2001 adalah jawaban yang tepat karena merupakan lex specialis utama pemberantasan tindak pidana korupsi di Indonesia (meski sebagian pasal inti deliknya juga diselaraskan dengan KUHP Nasional). Opsi UU No. 31 Tahun 1971 keliru karena merupakan UU Tipikor lama yang telah dicabut; opsi UU No. 14 Tahun 1985 keliru karena mengatur tentang Mahkamah Agung; dan opsi UU No. 5 Tahun 1999 keliru karena mengatur larangan praktik monopoli dan persaingan usaha tidak sehat.",
      "ruuComparison": "RUU KUHAP menegaskan bahwa tindak pidana khusus seperti korupsi tetap tunduk pada hukum acara khusus sepanjang diatur dalam undang-undang sektoralnya (lex specialis derogat legi generali), namun standar perlindungan hak tersangka, pengawasan upaya paksa, dan pembuktian tetap diselaraskan dengan prinsip umum RUU KUHAP."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 59,
    "category": "Hukum Acara Pidana",
    "topicTag": "Tujuan Penangkapan",
    "question": "Dalam tahap penyidikan, penyidik melakukan penangkapan terhadap tersangka. Tujuan utama penangkapan menurut KUHAP adalah...",
    "options": [
      {
        "key": "A",
        "text": "Memberikan hukuman awal kepada pelaku"
      },
      {
        "key": "B",
        "text": "Mengganti pidana penjara sementara"
      },
      {
        "key": "C",
        "text": "Kepentingan penyidikan sesuai syarat undang-undang"
      },
      {
        "key": "D",
        "text": "Memaksa tersangka mengakui perbuatannya"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Penangkapan adalah tindakan pengekangan sementara guna kepentingan penyidikan, bukan penghukuman.",
      "legalBasis": "Pasal 1 angka 20 jo. Pasal 17 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP) jo. Putusan MK No. 21/PUU-XII/2014.",
      "statuteText": "Penangkapan adalah suatu tindakan penyidik berupa pengekangan sementara waktu kebebasan tersangka atau terdakwa apabila terdapat cukup bukti guna kepentingan penyidikan atau penuntutan dan atau peradilan dalam hal serta menurut cara yang diatur dalam undang-undang ini.",
      "analysis": "Kepentingan penyidikan sesuai syarat undang-undang adalah jawaban yang tepat karena penangkapan merupakan upaya paksa pengekangan sementara semata-mata untuk kepentingan penyidikan/penuntutan berdasarkan bukti permulaan yang cukup (minimal dua alat bukti sah pasca-Putusan MK No. 21/PUU-XII/2014). Opsi hukuman awal kepada pelaku keliru karena melanggar asas praduga tak bersalah sebelum adanya putusan berkekuatan hukum tetap; opsi mengganti pidana penjara sementara keliru karena penangkapan maksimal 1x24 jam (Pasal 19 ayat (1) KUHAP) bukanlah pengganti pidana penjara; dan opsi memaksa tersangka mengakui perbuatannya keliru karena melanggar hak non-self-incrimination dan Pasal 117 ayat (1) KUHAP.",
      "ruuComparison": "Dalam RUU KUHAP, syarat penangkapan diperketat dengan kewajiban adanya sekurang-kurangnya dua alat bukti yang sah, penyampaian hak tersangka secara tertulis, dan pengawasan yudisial oleh Hakim Pemeriksa Pendahuluan untuk mencegah penyalahgunaan upaya paksa."
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
      "legalBasis": "Pasal 54 jo. Pasal 56 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP) jo. UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Guna kepentingan pembelaan, tersangka atau terdakwa berhak mendapat bantuan hukum dari seorang atau lebih penasihat hukum selama dalam waktu dan pada setiap tingkat pemeriksaan, menurut tata cara yang ditentukan dalam undang-undang ini.",
      "analysis": "Memberikan kesempatan memperoleh bantuan hukum adalah jawaban yang tepat karena hak memperoleh bantuan hukum dari advokat berlaku pada setiap tingkat pemeriksaan (Pasal 54 KUHAP), bahkan wajib ditunjuk oleh pejabat yang bersangkutan bagi ancaman pidana tertentu (Pasal 56 KUHAP). Opsi menolak permohonan dan menunda tanpa alasan yang jelas keliru karena melanggar asas fair trial dan hak pembelaan tersangka; serta opsi menunggu persetujuan jaksa penuntut umum keliru karena hak tersangka didampingi advokat tidak bergantung pada persetujuan penuntut umum.",
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
      "summary": "KUHP Nasional mengatur secara tegas pertanggungjawaban pidana korporasi selain pengurus dan pengendalinya.",
      "legalBasis": "Pasal 45, Pasal 47 ayat (1), dan Pasal 48 UU No. 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana (KUHP Nasional).",
      "statuteText": "Korporasi merupakan subjek tindak pidana. Tindak pidana oleh korporasi dapat dipertanggungjawabkan kepada korporasi itu sendiri, pengurus yang mempunyai kedudukan fungsional, pemberi perintah, pemegang kendali, dan/atau pemilik manfaat korporasi.",
      "analysis": "Korporasi dapat dimintai pertanggungjawaban pidana adalah jawaban yang tepat karena KUHP Nasional secara eksplisit menempatkan korporasi sebagai subjek hukum pidana yang dapat dimintai pertanggungjawaban pidana bersama atau terpisah dari pengurus maupun pemegang kendalinya. Opsi hanya direktur atau hanya pegawai lapangan yang dipidana keliru karena menyempitkan pertanggungjawaban pada individu saja; sedangkan opsi korporasi tidak dapat dipidana keliru karena bertentangan langsung dengan Pasal 45 KUHP Nasional.",
      "ruuComparison": "RUU KUHAP mengakomodasi tata cara pemeriksaan korporasi sebagai tersangka/terdakwa (termasuk pemanggilan, penyitaan aset korporasi, hingga penjatuhan pidana tambahan terhadap korporasi), melengkapi PERMA No. 13 Tahun 2016 yang selama ini mengisi kekosongan hukum acara korporasi dalam KUHAP 1981."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 62,
    "category": "Hukum Acara Pidana",
    "topicTag": "Pembelaan Terpaksa (Noodweer)",
    "question": "Zidane memukul Materazzi secara proporsional untuk mempertahankan diri dari serangan pisau yang sedang berlangsung secara seketika dan melawan hukum. Perbuatan Zidane merupakan...",
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
      "summary": "Pembelaan seketika dan proporsional terhadap serangan melawan hukum adalah Noodweer (alasan pembenar).",
      "legalBasis": "Pasal 34 UU No. 1 Tahun 2023 (KUHP Nasional) jo. Pasal 49 ayat (1) KUHP lama.",
      "statuteText": "Setiap orang yang terpaksa melakukan perbuatan yang dilarang tidak dipidana, jika perbuatan tersebut dilakukan karena pembelaan terhadap serangan atau ancaman serangan seketika yang melawan hukum terhadap diri sendiri atau orang lain, kehormatan dalam arti kesusilaan, atau harta benda sendiri atau orang lain.",
      "analysis": "Pembelaan terpaksa (Noodweer) adalah jawaban yang tepat karena tindakan Zidane bersifat proporsional dan perlu untuk menangkis serangan pisau yang berlangsung seketika dan melawan hukum, sehingga merupakan alasan pembenar. Opsi penganiayaan biasa keliru karena sifat melawan hukum perbuatan terhapus oleh pembelaan terpaksa; opsi noodweer exces keliru karena terjadi bila pembelaan melampaui batas akibat keguncangan jiwa yang hebat (Pasal 43 KUHP Nasional / Pasal 49 ayat (2) KUHP lama); dan opsi percobaan pembunuhan keliru karena tidak ada niat membunuh melainkan sekadar membela diri secara seimbang.",
      "ruuComparison": "Dalam RUU KUHAP, jika dalam pemeriksaan pendahuluan atau persidangan terbukti adanya alasan pembenar seperti pembelaan terpaksa, Hakim Pemeriksa Pendahuluan maupun Majelis Hakim berwenang menghentikan penuntutan atau memutus lepas dari segala tuntutan hukum secara lebih akuntabel."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 63,
    "category": "Hukum Acara Pidana",
    "topicTag": "Sistem Peradilan Pidana Anak",
    "question": "Dasar hukum utama yang mengatur tentang Sistem Peradilan Pidana Anak (SPPA) saat ini adalah...",
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
      "summary": "Sistem Peradilan Pidana Anak diatur dalam UU No. 11 Tahun 2012 tentang SPPA.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 108 Undang-Undang No. 11 Tahun 2012 tentang Sistem Peradilan Pidana Anak (SPPA).",
      "statuteText": "Sistem Peradilan Pidana Anak adalah keseluruhan proses penyelesaian perkara Anak yang berhadapan dengan hukum, mulai tahap penyelidikan sampai dengan tahap pembimbingan setelah menjalani pidana, yang wajib mengutamakan pendekatan Keadilan Restoratif.",
      "analysis": "Undang-Undang Nomor 11 Tahun 2012 tentang SPPA adalah jawaban yang tepat karena mencabut dan menggantikan UU No. 3 Tahun 1997 dengan mengedepankan diversi dan pendekatan keadilan restoratif. Opsi UU No. 3 Tahun 1997 keliru karena undang-undang tentang Pengadilan Anak tersebut telah dicabut; sedangkan opsi UU No. 23 Tahun 2002 dan UU No. 35 Tahun 2014 tentang Perlindungan Anak keliru karena mengatur perlindungan anak secara materiil dan administratif, bukan hukum acara peradilan anak secara menyeluruh.",
      "ruuComparison": "RUU KUHAP memosisikan UU SPPA sebagai hukum acara khusus bagi anak yang berhadapan dengan hukum, sekaligus mengadopsi paradigma keadilan restoratif (restorative justice) dan diversi dari UU SPPA ke dalam sistem peradilan pidana umum bagi orang dewasa."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 64,
    "category": "Hukum Acara Pidana",
    "topicTag": "Tujuan Pemidanaan Modern",
    "question": "Menurut Pasal 51 jo. Pasal 54 ayat (2) KUHP Nasional (UU No. 1 Tahun 2023), tujuan pemidanaan modern meliputi...",
    "options": [
      {
        "key": "A",
        "text": "Membalas dendam kepada pelaku demi kepuasan korban semata"
      },
      {
        "key": "B",
        "text": "Memiskinkan pelaku sebagai tujuan tunggal pemidanaan"
      },
      {
        "key": "C",
        "text": "Mencegah tindak pidana, membina pelaku, memulihkan keseimbangan, dan menumbuhkan penyesalan"
      },
      {
        "key": "D",
        "text": "Menghukum seberat-beratnya untuk menderitakan dan merendahkan martabat pelaku"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Paradigma pemidanaan KUHP Nasional bergeser ke arah preventif, rehabilitatif, pemulihan keseimbangan, dan pembebasan rasa bersalah tanpa balas dendam.",
      "legalBasis": "Pasal 51 dan Pasal 54 ayat (2) UU No. 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana (KUHP Nasional).",
      "statuteText": "Pemidanaan bertujuan: a. mencegah dilakukannya Tindak Pidana dengan menegakkan norma hukum demi pelindungan dan pengayoman masyarakat; b. memasyarakatkan terpidana dengan mengadakan pembinaan dan pembimbingan; c. menyelesaikan konflik yang ditimbulkan akibat Tindak Pidana, memulihkan keseimbangan, serta mendatangkan rasa aman dan damai; dan d. menumbuhkan rasa penyesalan dan membebaskan rasa bersalah pada terpidana.",
      "analysis": "Mencegah tindak pidana, membina pelaku, memulihkan keseimbangan, dan menumbuhkan penyesalan adalah jawaban yang tepat karena merangkum empat tujuan pemidanaan modern dalam Pasal 51 KUHP Nasional. Opsi membalas dendam dan menghukum untuk menderitakan atau merendahkan martabat pelaku keliru karena Pasal 54 ayat (2) KUHP Nasional menegaskan bahwa pemidanaan tidak dimaksudkan untuk menderitakan dan merendahkan martabat manusia; sedangkan opsi memiskinkan pelaku sebagai tujuan tunggal keliru karena perampasan aset/denda hanyalah instrumen pemulihan dan sanksi tertentu, bukan tujuan tunggal pemidanaan.",
      "ruuComparison": "RUU KUHAP menyelaraskan hukum acara dengan tujuan pemidanaan KUHP Nasional melalui perluasan mekanisme penyelesaian perkara di luar pengadilan (keadilan restoratif), pidana kerja sosial, dan pengawasan pelaksanaan putusan oleh hakim."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 65,
    "category": "Hukum Acara Pidana",
    "topicTag": "Jenis Pidana Pokok KUHP Baru",
    "question": "Menurut Pasal 65 ayat (1) KUHP Nasional (UU No. 1 Tahun 2023), jenis-jenis pidana pokok meliputi...",
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
      "summary": "Pidana pokok dalam KUHP Nasional terdiri atas pidana penjara, pidana tutupan, pidana pengawasan, pidana denda, dan pidana kerja sosial.",
      "legalBasis": "Pasal 65 ayat (1) jo. Pasal 67 UU No. 1 Tahun 2023 tentang Kitab Undang-Undang Hukum Pidana (KUHP Nasional).",
      "statuteText": "Pidana pokok terdiri atas: a. pidana penjara; b. pidana tutupan; c. pidana pengawasan; d. pidana denda; dan e. pidana kerja sosial.",
      "analysis": "Opsi pidana penjara, pidana tutupan, pidana pengawasan, pidana denda, dan pidana kerja sosial tepat karena sesuai secara limitatif dengan Pasal 65 ayat (1) KUHP Nasional (sedangkan pidana mati ditempatkan sebagai pidana khusus yang selalu diancamkan secara alternatif menurut Pasal 67). Opsi yang mencantumkan pidana mati dan pidana kurungan keliru karena merujuk pada susunan pidana pokok KUHP lama (Pasal 10 KUHP) dan pidana kurungan telah dihapus dari daftar pidana pokok KUHP Nasional; sedangkan opsi yang mencantumkan pencabutan hak tertentu keliru karena merupakan pidana tambahan (Pasal 66 ayat (1) huruf a), bukan pidana pokok.",
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
        "text": "Perbuatan pelaku menjadi dibenarkan secara hukum (tidak melawan hukum)"
      },
      {
        "key": "B",
        "text": "Pelaku tidak dipidana walaupun perbuatannya tetap bersifat melawan hukum"
      },
      {
        "key": "C",
        "text": "Seluruh barang bukti wajib dikembalikan kepada pelaku tanpa pemeriksaan"
      },
      {
        "key": "D",
        "text": "Gugatan perdata yang berkaitan ikut gugur demi hukum"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Alasan pemaaf menghapus unsur kesalahan pelaku (subjektif), namun perbuatannya tetap bersifat melawan hukum.",
      "legalBasis": "Pasal 38, Pasal 40, dan Pasal 43 UU No. 1 Tahun 2023 (KUHP Nasional) jo. Pasal 191 ayat (2) KUHAP.",
      "statuteText": "Setiap orang yang pada waktu melakukan tindak pidana menyandang disabilitas mental dan/atau disabilitas intelektual yang dalam keadaan kekambuhan akut dan disertai gambaran psikotik atau mengalami keterbelakangan intelektual, tidak dapat dipertanggungjawabkan atau dikurangi pidananya.",
      "analysis": "Pelaku tidak dipidana walaupun perbuatannya tetap bersifat melawan hukum adalah jawaban yang tepat karena alasan pemaaf (schulduitsluitingsgrond) meniadakan unsur kesalahan pada diri pelaku meski perbuatannya tetap melawan hukum, sehingga pelaku diputus lepas dari segala tuntutan hukum (ontslag). Opsi perbuatan pelaku menjadi dibenarkan secara hukum keliru karena hapusnya sifat melawan hukum merupakan akibat dari alasan pembenar (rechtvaardigingsgrond), bukan alasan pemaaf; opsi seluruh barang bukti wajib dikembalikan tanpa pemeriksaan keliru karena status barang bukti tetap diputus sesuai Pasal 194 KUHAP; dan opsi gugatan perdata ikut gugur demi hukum keliru karena perkara perdata tidak otomatis gugur akibat adanya alasan pemaaf pidana.",
      "ruuComparison": "RUU KUHAP mengatur prosedur pemeriksaan kejiwaan/asesmen forensik psikiatri sejak tahap penyidikan dan kewenangan penuntut umum/hakim untuk menjatuhkan tindakan (maatregel) rehabilitasi atau perawatan alih-alih penahanan rutan biasa."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 68,
    "category": "Hukum Acara Pidana",
    "topicTag": "Pengakuan Bersalah (Plea Bargain)",
    "question": "Konsep Jalur Khusus / Pengakuan Bersalah (Plea Bargain) dalam rancangan pembaruan hukum acara pidana di Indonesia pada prinsipnya hanya dapat diterapkan apabila...",
    "options": [
      {
        "key": "A",
        "text": "Diterapkan pada seluruh tindak pidana termasuk tindak pidana berat dan terorisme"
      },
      {
        "key": "B",
        "text": "Terdakwa baru pertama kali melakukan tindak pidana dengan ancaman pidana tertentu (paling lama 5 tahun) dan bersedia memulihkan kerugian korban"
      },
      {
        "key": "C",
        "text": "Dikhususkan hanya bagi tindak pidana korupsi dengan kerugian negara di atas satu miliar rupiah"
      },
      {
        "key": "D",
        "text": "Diajukan setelah putusan pengadilan memperoleh kekuatan hukum tetap (inkracht)"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Jalur khusus pengakuan bersalah (plea bargain) mensyaratkan status pelaku pertama kali, ancaman pidana ringan/menengah (paling lama 5 tahun), serta kesediaan memulihkan kerugian/restitusi.",
      "legalBasis": "Pasal 203 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP) jo. Rancangan Pembaruan Hukum Acara Pidana (Konsep Jalur Khusus / Pengakuan Bersalah).",
      "statuteText": "Dalam pembaruan KUHAP, apabila terdakwa mengakui perbuatan yang didakwakan atas tindak pidana yang tidak tergolong tindak pidana berat dan memenuhi syarat pelaku pertama kali, hakim dapat memeriksa perkara dalam jalur khusus atau acara pemeriksaan singkat dengan pengurangan ancaman pidana yang terukur.",
      "analysis": "Syarat bahwa terdakwa baru pertama kali melakukan tindak pidana dengan ancaman pidana terbatas (paling lama 5 tahun) dan bersedia memulihkan kerugian korban adalah jawaban yang tepat karena mekanisme pengakuan bersalah (plea bargain / jalur khusus) dibatasi ketat agar tidak disalahgunakan. Opsi diterapkan pada tindak pidana berat dan terorisme keliru karena kejahatan berat dan berdampak luas dikecualikan; opsi khusus tindak pidana korupsi di atas satu miliar keliru karena korupsi besar tidak menjadi objek jalur khusus plea bargain; dan opsi diajukan setelah putusan inkracht keliru karena pengakuan bersalah dilakukan pada awal pemeriksaan sidang setelah pembacaan dakwaan, bukan setelah putusan berkekuatan hukum tetap.",
      "ruuComparison": "Pengaturan Jalur Khusus / Pengakuan Bersalah (Plea Bargain) merupakan salah satu pembaruan fundamental dalam RUU KUHAP guna mempercepat proses peradilan, mengurangi penumpukan perkara, dan meringankan beban lembaga pemasyarakatan melalui acara pemeriksaan singkat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 69,
    "category": "Hukum Acara Pidana",
    "topicTag": "Sistem Peradilan Pidana Terpadu",
    "question": "Koordinasi fungsional antara Penyidik dan Penuntut Umum dalam penanganan perkara pidana menurut KUHAP dilaksanakan dalam kerangka...",
    "options": [
      {
        "key": "A",
        "text": "Arbitrase pidana"
      },
      {
        "key": "B",
        "text": "Sistem Peradilan Pidana Terpadu (Integrated Criminal Justice System)"
      },
      {
        "key": "C",
        "text": "Mediasi perdata"
      },
      {
        "key": "D",
        "text": "Peradilan militer"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penyidik dan Penuntut Umum berkoordinasi secara fungsional dalam kerangka Sistem Peradilan Pidana Terpadu.",
      "legalBasis": "Pasal 1 angka 1, angka 2, angka 3, angka 4 jo. Pasal 138 dan Pasal 139 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "statuteText": "Penyidikan, penuntutan, dan pemeriksaan di sidang pengadilan dilaksanakan secara terpisah secara fungsional namun terkoordinasi antara penyidik, penuntut umum, dan pengadilan sesuai kewenangannya masing-masing berdasarkan undang-undang.",
      "analysis": "Sistem Peradilan Pidana Terpadu (Integrated Criminal Justice System) adalah jawaban yang tepat karena KUHAP menganut diferensiasi fungsional yang terkoordinasi antar-sub-sistem penegak hukum (Kepolisian, Kejaksaan, Pengadilan, Pemasyarakatan, serta Advokat). Opsi arbitrase pidana dan mediasi perdata keliru karena arbitrase dan mediasi perdata adalah mekanisme penyelesaian sengketa keperdataan/bisnis; sedangkan opsi peradilan militer keliru karena peradilan militer hanya mengadili tindak pidana yang dilakukan oleh prajurit TNI atau subjek hukum militer.",
      "ruuComparison": "RUU KUHAP memperjelas mekanisme koordinasi dan prapenuntutan antara Penyidik dan Penuntut Umum (membatasi bolak-balik berkas perkara berulang tanpa batas) serta memperkuat pengawasan yudisial oleh Hakim Pemeriksa Pendahuluan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 70,
    "category": "Hukum Acara Pidana",
    "topicTag": "Keadilan Restoratif di Penyidikan",
    "question": "Salah satu alasan penghentian penyidikan (SP3) demi hukum berdasarkan perkembangan regulasi penyidikan dan pembaruan KUHAP adalah...",
    "options": [
      {
        "key": "A",
        "text": "Penyidik sedang mengambil cuti tahunan"
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
        "text": "Salah satu saksi berhalangan hadir karena sakit"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penyelesaian damai melalui keadilan restoratif yang memenuhi syarat formil dan materiil dapat menjadi dasar penghentian penyidikan demi hukum.",
      "legalBasis": "Pasal 109 ayat (2) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP) jo. Peraturan Kepolisian Negara RI (Perpol) No. 8 Tahun 2021 tentang Penanganan Tindak Pidana Berdasarkan Keadilan Restoratif.",
      "statuteText": "Dalam hal penyidik menghentikan penyidikan karena tidak terdapat cukup bukti atau peristiwa tersebut ternyata bukan merupakan tindak pidana atau penyidikan dihentikan demi hukum, penyidik memberitahukan hal itu kepada penuntut umum, tersangka atau keluarganya.",
      "analysis": "Tercapainya penyelesaian perkara melalui mekanisme Keadilan Restoratif (Restorative Justice) adalah jawaban yang tepat karena berdasarkan Pasal 109 ayat (2) KUHAP jo. Perpol No. 8 Tahun 2021, kesepakatan Keadilan Restoratif dengan syarat materiil dan formil tertentu menjadi alasan sah penghentian penyidikan (SP3) demi hukum (sebagaimana pada tahap penuntutan juga diatur melalui Peraturan Kejaksaan RI No. 15 Tahun 2020 untuk SKP2). Opsi penyidik cuti tahunan, korban berpindah domisili, dan saksi sakit sementara keliru karena kendala administratif maupun ketidakhadiran sementara bukanlah dasar hukum penerbitan SP3.",
      "ruuComparison": "RUU KUHAP mengkodifikasi keadilan restoratif (Restorative Justice) langsung di tingkat undang-undang sebagai mekanisme sah penghentian penyidikan dan penuntutan (mengangkat norma yang selama ini diatur pada level Perpol No. 8 Tahun 2021 dan Perja No. 15 Tahun 2020 ke level undang-undang)."
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
        "text": "Hak memilih susunan majelis hakim di pengadilan"
      },
      {
        "key": "B",
        "text": "Hak memperoleh bantuan hukum atau pendampingan Advokat"
      },
      {
        "key": "C",
        "text": "Hak mengajukan kasasi langsung sebelum sidang tingkat pertama"
      },
      {
        "key": "D",
        "text": "Hak meminta Peninjauan Kembali sebelum putusan dijatuhkan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penyidik wajib memberitahukan hak memperoleh bantuan hukum sebelum pemeriksaan penyidikan dimulai (Pasal 114 KUHAP).",
      "legalBasis": "Pasal 114 jo. Pasal 54 dan Pasal 56 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).",
      "statuteText": "Dalam hal seorang disangka melakukan suatu tindak pidana sebelum dimulainya pemeriksaan oleh penyidik, penyidik wajib memberitahukan kepadanya tentang haknya untuk mendapatkan bantuan hukum atau bahwa ia dalam perkaranya itu wajib didampingi oleh penasihat hukum sebagaimana dimaksud dalam Pasal 56.",
      "analysis": "Hak memperoleh bantuan hukum atau pendampingan Advokat adalah jawaban yang tepat karena Pasal 114 KUHAP secara eksplisit mewajibkan penyidik memberitahukan hak tersangka atas bantuan hukum sebelum pemeriksaan dimulai (miranda rule versi Indonesia). Opsi memilih susunan majelis hakim keliru karena penetapan majelis hakim adalah kewenangan Ketua Pengadilan Negeri; opsi mengajukan kasasi langsung sebelum sidang tingkat pertama keliru karena kasasi adalah upaya hukum atas putusan pengadilan tingkat banding; dan opsi meminta Peninjauan Kembali sebelum putusan dijatuhkan keliru karena PK hanya dapat diajukan terhadap putusan yang telah berkekuatan hukum tetap.",
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
        "text": "Menghentikan penyidikan secara sepihak atas nama organisasi advokat"
      },
      {
        "key": "B",
        "text": "Menyatakan keberatan dan meminta pencatatan dalam BAP demi melindungi hak hukum tersangka"
      },
      {
        "key": "C",
        "text": "Menahan penyidik di ruang pemeriksaan"
      },
      {
        "key": "D",
        "text": "Membubarkan paksa pemeriksaan di kantor kepolisian"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Advokat berhak menyatakan keberatan jika terjadi intimidasi atau pertanyaan yang bersifat menjerat dalam pemeriksaan penyidikan.",
      "legalBasis": "Pasal 115 ayat (1) jo. Pasal 117 ayat (1) dan ayat (2) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP) jo. Pasal 16 UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Keterangan tersangka dan atau saksi kepada penyidik diberikan tanpa tekanan dari siapa pun dan atau dalam bentuk apa pun. Dalam hal penyidik sedang melakukan pemeriksaan terhadap tersangka, penasihat hukum dapat mengikuti jalannya pemeriksaan dengan cara melihat serta mendengar pemeriksaan.",
      "analysis": "Menyatakan keberatan dan meminta pencatatan dalam BAP adalah jawaban yang tepat karena meskipun KUHAP 1981 merumuskan peran penasihat hukum di penyidikan sebatas melihat dan mendengar (Pasal 115 ayat (1)), advokat tetap berkewajiban menjaga hak tersangka agar bebas dari tekanan dan pertanyaan menjerat (Pasal 117) dengan menyatakan keberatan resmi dan memasukkannya ke berita acara. Opsi menghentikan penyidikan secara sepihak, menahan penyidik di ruang pemeriksaan, dan membubarkan paksa pemeriksaan keliru karena advokat tidak memiliki wewenang menghentikan penyidikan, menahan aparat penegak hukum, maupun membubarkan paksa pemeriksaan kepolisian.",
      "ruuComparison": "RUU KUHAP menggeser peran advokat di tahap penyidikan dari pasif (\"melihat dan mendengar\") menjadi pendampingan aktif yang berhak mengajukan keberatan langsung terhadap pertanyaan yang bersifat menekan/menjerat, serta mewajibkan perekaman audio-visual pemeriksaan tersangka."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 73,
    "category": "Hukum Acara Pidana",
    "topicTag": "Saksi Mahkota (Crown Witness)",
    "question": "Dalam kepentingan penyidikan dan penuntutan perkara penyertaan, penegak hukum dapat memisahkan berkas (splitsing) dan menetapkan salah seorang Tersangka/Terdakwa sebagai saksi mahkota untuk...",
    "options": [
      {
        "key": "A",
        "text": "Mempercepat pembacaan putusan sela tanpa pembuktian"
      },
      {
        "key": "B",
        "text": "Membantu mengungkap dan membuktikan keterlibatan Tersangka/Terdakwa lain dalam perkara yang sama"
      },
      {
        "key": "C",
        "text": "Mengurangi jumlah saksi yang dipanggil dalam sidang tindak pidana tunggal"
      },
      {
        "key": "D",
        "text": "Menggantikan kedudukan alat bukti keterangan ahli di persidangan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Saksi mahkota adalah tersangka/terdakwa dalam perkara penyertaan yang berkasnya dipisah (splitsing) guna membuktikan perbuatan pelaku lain.",
      "legalBasis": "Pasal 142 dan Pasal 168 huruf c jo. Pasal 184 ayat (1) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP) jo. Yurisprudensi MA RI No. 1986 K/Pid/1989 jo. Pasal 10A UU No. 31 Tahun 2014.",
      "statuteText": "Tidak dapat didengar keterangannya dan dapat mengundurkan diri sebagai saksi: ... saudara seibu atau sebapak ... atau terdakwa yang bersama-sama melakukan tindak pidana sepanjang tidak dipisahkan berkas perkaranya (splitsing).",
      "analysis": "Membantu mengungkap dan membuktikan keterlibatan Tersangka/Terdakwa lain dalam perkara yang sama adalah jawaban yang tepat karena saksi mahkota (kroongetuige) merupakan salah seorang pelaku dalam tindak pidana penyertaan yang berkas perkaranya dipisah (splitsing menurut Pasal 142 KUHAP) untuk bersaksi mengungkap keterlibatan pelaku lain bila alat bukti kurang (dalam perkembangannya diperkuat konsep Justice Collaborator menurut Pasal 10A UU No. 31 Tahun 2014). Opsi mempercepat putusan sela tanpa pembuktian keliru karena putusan sela diputus sebelum tahap pembuktian; opsi mengurangi jumlah saksi pada tindak pidana tunggal keliru karena saksi mahkota justru lahir pada perkara penyertaan (bukan delik tunggal); dan opsi menggantikan alat bukti keterangan ahli keliru karena keterangan saksi mahkota adalah keterangan saksi fakta, bukan keterangan ahli.",
      "ruuComparison": "RUU KUHAP mengatur lebih ketat dan jelas mengenai saksi pelaku yang bekerja sama (justice collaborator / saksi mahkota), termasuk perlindungan hukum, pemisahan penahanan, dan keringanan tuntutan/pidana agar tidak bertentangan dengan hak tidak mempersalahkan diri sendiri (non-self-incrimination)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 74,
    "category": "Hukum Acara Pidana",
    "topicTag": "Perlindungan Saksi & Korban",
    "question": "Berdasarkan UU No. 13 Tahun 2006 jo. UU No. 31 Tahun 2014, setiap pelapor, pengadu, saksi, dan korban dalam tindak pidana berhak memperoleh...",
    "options": [
      {
        "key": "A",
        "text": "Penghapusan pidana secara mutlak dalam segala perkara"
      },
      {
        "key": "B",
        "text": "Pelindungan fisik, psikis, dan hukum dari ancaman"
      },
      {
        "key": "C",
        "text": "Imunitas mutlak dari segala tuntutan perdata dan pidana"
      },
      {
        "key": "D",
        "text": "Pengampunan grasi secara langsung dari Presiden"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pelapor, saksi, dan korban berhak memperoleh pelindungan atas keamanan pribadi, keluarga, dan harta bendanya serta bebas dari ancaman.",
      "legalBasis": "Pasal 5 ayat (1) huruf a dan Pasal 10 ayat (1) UU No. 13 Tahun 2006 jo. UU No. 31 Tahun 2014 tentang Perlindungan Saksi dan Korban.",
      "statuteText": "Seorang Saksi dan Korban berhak: memperoleh pelindungan atas keamanan pribadi, Keluarga, dan harta bendanya, serta bebas dari Ancaman yang berkenaan dengan kesaksian yang akan, sedang, atau telah diberikannya.",
      "analysis": "Pelindungan fisik, psikis, dan hukum dari ancaman adalah jawaban yang tepat karena negara melalui Lembaga Perlindungan Saksi dan Korban (LPSK) menjamin pelindungan tersebut bagi pelapor, saksi, dan korban sesuai Pasal 5 dan Pasal 10 UU Perlindungan Saksi dan Korban. Opsi penghapusan pidana secara mutlak dan imunitas mutlak keliru karena pelapor/saksi hanya dilindungi dari tuntutan hukum atas laporan atau kesaksian yang diberikan dengan iktikad baik (bukan penghapusan pidana atau imunitas tanpa batas); dan opsi pengampunan grasi secara langsung dari Presiden keliru karena grasi merupakan hak terpidana yang telah dijatuhi putusan berkekuatan hukum tetap.",
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
        "text": "Talak Ba'in Kubraa"
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
      "summary": "Taklik talak adalah perjanjian yang diucapkan calon mempelai pria setelah akad nikah dan dicantumkan dalam Akta Nikah berupa janji talak yang digantungkan pada terjadinya suatu keadaan tertentu.",
      "legalBasis": "Pasal 1 huruf e jo. Pasal 45 dan Pasal 46 Kompilasi Hukum Islam (KHI) (Instruksi Presiden No. 1 Tahun 1991).",
      "statuteText": "Taklik talak ialah perjanjian yang diucapkan calon mempelai pria setelah akad nikah yang dicantumkan dalam Akta Nikah berupa janji talak yang digantungkan kepada suatu keadaan tertentu yang mungkin terjadi di masa yang akan datang.",
      "analysis": "Taklik Talak adalah jawaban yang tepat karena redaksi pertanyaan mengutip secara persis definisi Taklik Talak dalam Pasal 1 huruf e KHI; apabila suami melanggar syarat taklik talak (misalnya meninggalkan istri 2 tahun berturut-turut atau tidak memberi nafkah wajib 3 bulan) dan istri tidak ridha serta mengadukannya ke Pengadilan Agama dengan membayar uang iwadl, talak dapat dijatuhkan (Pasal 46 jo. Pasal 116 huruf g KHI). Opsi Khulu' keliru karena merupakan perceraian yang terjadi atas permintaan istri dengan memberikan tebusan/iwadl kepada dan atas persetujuan suaminya (Pasal 1 huruf i KHI); opsi Talak Ba'in Kubraa keliru karena merupakan talak yang terjadi untuk ketiga kalinya sehingga bekas suami istri tidak dapat rujuk atau menikah kembali sebelum adanya muhallil (Pasal 120 KHI); dan opsi Mut'ah keliru karena merupakan pemberian bekas suami kepada istri yang dijatuhi talak sebagai penghibur (Pasal 1 huruf j KHI)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 76,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Beban Biaya Perkara Perceraian",
    "question": "Menurut UU No. 7 Tahun 1989 tentang Peradilan Agama, biaya perkara dalam bidang perkawinan (termasuk perceraian) pada umumnya dibebankan kepada...",
    "options": [
      {
        "key": "A",
        "text": "Pihak Penggugat atau Pemohon"
      },
      {
        "key": "B",
        "text": "Pihak yang dikalahkan secara mutlak"
      },
      {
        "key": "C",
        "text": "Pihak Tergugat atau Termohon saja"
      },
      {
        "key": "D",
        "text": "Kedua belah pihak secara sama rata"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Dalam perkara di bidang perkawinan (termasuk perceraian), biaya perkara dibebankan kepada Penggugat atau Pemohon, bukan kepada pihak yang kalah sebagaimana hukum acara perdata umum.",
      "legalBasis": "Pasal 89 ayat (1) UU No. 7 Tahun 1989 sebagaimana diubah dengan UU No. 3 Tahun 2006 dan UU No. 50 Tahun 2009 tentang Peradilan Agama jo. Pasal 60B UU No. 50 Tahun 2009.",
      "statuteText": "Biaya perkara dalam bidang perkawinan dibebankan kepada penggugat atau pemohon.",
      "analysis": "Pihak Penggugat atau Pemohon adalah jawaban yang tepat karena Pasal 89 ayat (1) UU Peradilan Agama merupakan ketentuan khusus (lex specialis) yang menyimpangi Pasal 181 ayat (1) HIR / Pasal 192 ayat (1) RBg, dengan menetapkan bahwa biaya perkara di bidang perkawinan dibebankan kepada Penggugat (dalam Cerai Gugat) atau Pemohon (dalam Cerai Talak), kecuali bagi pihak tidak mampu yang berperkara secara cuma-cuma/prodeo (Pasal 60B UU No. 50 Tahun 2009 jo. PERMA No. 1 Tahun 2014). Opsi pihak yang dikalahkan secara mutlak keliru karena pembebanan biaya kepada pihak yang kalah berlaku pada perkara perdata umum atau perkara PA non-perkawinan seperti sengketa waris dan ekonomi syariah (Pasal 89 ayat (2) jo. Pasal 181 HIR); opsi pihak Tergugat atau Termohon saja keliru karena bukan pihak yang secara hukum dibebani biaya perkara perkawinan; dan opsi kedua belah pihak secara sama rata keliru karena undang-undang tidak membagi biaya perkara perkawinan sama rata antara para pihak."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 77,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Nafkah Mut'ah",
    "question": "Apakah yang dimaksud dengan Mut'ah dalam hukum perkawinan Islam menurut Kompilasi Hukum Islam?",
    "options": [
      {
        "key": "A",
        "text": "Hak pemeliharaan dan pengasuhan anak yang belum mumayyiz (hadhanah)"
      },
      {
        "key": "B",
        "text": "Pemberian wajib dari calon mempelai pria kepada calon mempelai wanita saat akad nikah (mahar)"
      },
      {
        "key": "C",
        "text": "Pemberian bekas suami kepada istri yang dijatuhi talak berupa benda atau uang dan lainnya sebagai penghibur"
      },
      {
        "key": "D",
        "text": "Perceraian yang terjadi atas permintaan istri dengan memberikan tebusan kepada suaminya (khulu')"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Mut'ah adalah pemberian bekas suami kepada istri yang dijatuhi talak berupa benda atau uang dan lainnya sebagai penghibur.",
      "legalBasis": "Pasal 1 huruf j jo. Pasal 149 huruf a dan Pasal 158 Kompilasi Hukum Islam (KHI).",
      "statuteText": "Mut'ah adalah pemberian bekas suami kepada istri yang dijatuhi talak berupa benda atau uang dan lainnya.",
      "analysis": "Pemberian bekas suami kepada istri yang dijatuhi talak berupa benda atau uang dan lainnya sebagai penghibur adalah jawaban yang tepat karena Pasal 1 huruf j jo. Pasal 149 huruf a KHI menetapkan bahwa bilamana perkawinan putus karena talak, bekas suami wajib memberikan mut'ah yang layak kepada bekas istrinya, kecuali bekas istri tersebut qabla al-dukhul (belum dicampuri) yang maharnya telah ditetapkan (Pasal 158 KHI). Opsi pemeliharaan anak (hadhanah) keliru karena merupakan ketentuan Pasal 1 huruf g jo. Pasal 105 KHI; opsi pemberian saat akad nikah (mahar) keliru karena merupakan ketentuan Pasal 1 huruf d jo. Pasal 30 KHI; dan opsi perceraian dengan tebusan dari istri (khulu') keliru karena merupakan ketentuan Pasal 1 huruf i KHI."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 78,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Ikrar Wakaf",
    "question": "Pihak yang hendak mewakafkan tanah atau harta benda miliknya (Wakif) wajib menyatakan ikrar wakaf di hadapan...",
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
        "text": "Kepala Desa atau Lurah setempat"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Ikrar wakaf wajib dinyatakan oleh Wakif kepada Nazhir di hadapan Pejabat Pembuat Akta Ikrar Wakaf (PPAIW) dengan disaksikan dua orang saksi.",
      "legalBasis": "Pasal 17 ayat (1) dan Pasal 1 angka 6 UU No. 41 Tahun 2004 tentang Wakaf jo. Pasal 37 PP No. 42 Tahun 2006 tentang Pelaksanaan UU Wakaf jo. Pasal 218 KHI.",
      "statuteText": "Ikrar wakaf dilaksanakan oleh Wakif kepada Nadzir di hadapan PPAIW dengan disaksikan oleh 2 (dua) orang saksi.",
      "analysis": "Pejabat Pembuat Akta Ikrar Wakaf (PPAIW) adalah jawaban yang tepat karena menurut Pasal 17 ayat (1) UU No. 41 Tahun 2004, pernyataan kehendak wakaf wajib diikrarkan di hadapan PPAIW, yakni pejabat berwenang yang ditetapkan Menteri Agama (untuk wakaf tanah dijabat oleh Kepala Kantor Urusan Agama/KUA Kecamatan sesuai Pasal 37 PP No. 42 Tahun 2006) untuk menerbitkan Akta Ikrar Wakaf (AIW). Opsi Pejabat Pembuat Akta Tanah (PPAT) keliru karena PPAT berwenang membuat akta peralihan hak atas tanah keperdataan umum (jual beli, hibah, tukar-menukar), bukan Akta Ikrar Wakaf; opsi PNS Kecamatan keliru karena tidak ada jabatan umum PNS Kecamatan yang berwenang menerbitkan AIW kecuali Kepala KUA sebagai PPAIW; dan opsi Kepala Desa atau Lurah keliru karena hanya berfungsi dalam administrasi pertanahan desa atau sebagai saksi/penguat surat keterangan, bukan pejabat pembuat Akta Ikrar Wakaf."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 79,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Pemohon Itsbat Nikah",
    "question": "Menurut Pasal 7 ayat (4) Kompilasi Hukum Islam (KHI), salah satu pihak yang berhak mengajukan permohonan pengesahan nikah (Itsbat Nikah) ke Pengadilan Agama adalah...",
    "options": [
      {
        "key": "A",
        "text": "Suami atau istri"
      },
      {
        "key": "B",
        "text": "Saksi nikah secara mandiri"
      },
      {
        "key": "C",
        "text": "Jaksa Penuntut Umum"
      },
      {
        "key": "D",
        "text": "Penghulu Kantor Urusan Agama (KUA)"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pihak yang berhak mengajukan permohonan Itsbat Nikah ialah suami atau istri, anak-anak mereka, wali nikah, dan pihak yang berkepentingan dengan perkawinan itu.",
      "legalBasis": "Pasal 7 ayat (4) Kompilasi Hukum Islam (KHI) (Instruksi Presiden No. 1 Tahun 1991).",
      "statuteText": "Yang berhak mengajukan permohonan itsbat nikah ialah suami atau isteri, anak-anak mereka, wali nikah dan pihak yang berkepentingan dengan perkawinan itu.",
      "analysis": "Suami atau istri adalah jawaban yang tepat karena Pasal 7 ayat (4) KHI secara tegas menempatkan suami atau istri sebagai pihak utama yang memiliki kedudukan hukum (legal standing) untuk mengajukan permohonan Itsbat Nikah ke Pengadilan Agama (di samping anak-anak mereka, wali nikah, dan pihak berkepentingan lainnya seperti ahli waris). Opsi saksi nikah keliru karena tidak memiliki kepentingan hukum langsung sebagai subjek perkawinan dan hanya berperan sebagai alat bukti di persidangan; opsi Jaksa Penuntut Umum keliru karena Jaksa berwenang mengajukan pembatalan perkawinan dalam hal tertentu (Pasal 26 UU Perkawinan), bukan permohonan itsbat nikah; dan opsi Penghulu KUA keliru karena merupakan pejabat pencatat nikah administratif yang menindaklanjuti penetapan itsbat nikah, bukan pemohon."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 81,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Sumpah Li'an",
    "question": "Dalam perkara gugatan atau permohonan cerai atas alasan zina apabila suami tidak dapat melengkapi alat bukti dan istri menyanggah tuduhan tersebut, maka mekanisme sumpah khusus antara suami dan istri di hadapan sidang Pengadilan Agama disebut...",
    "options": [
      {
        "key": "A",
        "text": "Sumpah pemutus (decisoir)"
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
      "summary": "Sumpah khusus antara suami dan istri dalam perkara cerai atas alasan tuduhan zina di Pengadilan Agama disebut sumpah Li'an.",
      "legalBasis": "Pasal 87 dan Pasal 88 UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 125 sampai dengan Pasal 128 Kompilasi Hukum Islam (KHI).",
      "statuteText": "Pasal 88 ayat (1) UU No. 7 Tahun 1989: Apabila sumpah sebagaimana yang dimaksud dalam Pasal 87 ayat (1) dilakukan oleh suami, maka penyelesaiannya dapat dilaksanakan dengan cara lain. Pasal 125 KHI: Li'an menyebabkan putusnya perkawinan antara suami isteri untuk selama-lamanya.",
      "analysis": "Li'an adalah jawaban yang tepat karena Pasal 87–88 UU No. 7 Tahun 1989 jo. Pasal 125–128 KHI mengatur acara khusus apabila suami menuduh istrinya berzina tanpa empat saksi dan istri membantahnya, yaitu melalui sumpah Li'an (empat kali sumpah atas nama Allah bahwa tuduhannya benar dan kelima kalinya laknat Allah jika berdusta, yang dibalas empat kali sumpah sanggahan istri dan kelima kalinya murka Allah jika tuduhan suaminya benar), yang mengakibatkan putusnya perkawinan untuk selama-lamanya. Opsi sumpah pemutus (decisoir) keliru karena dalam Pasal 156 HIR merupakan sumpah perdata umum yang dimohonkan satu pihak untuk memutus sengketa ketika tidak ada bukti sama sekali, bukan tata cara khusus li'an; opsi islah keliru karena berarti perdamaian antar pihak yang bersengketa; dan opsi takhayyur keliru karena merupakan istilah metode ijtihad hukum Islam dalam memilih pendapat mazhab, bukan acara sumpah di pengadilan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 82,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Bukan Alasan Perceraian",
    "question": "Berikut ini yang BUKAN merupakan alasan sah perceraian menurut peraturan perundang-undangan perkawinan di Indonesia adalah...",
    "options": [
      {
        "key": "A",
        "text": "Salah satu pihak berbuat zina atau menjadi pemabuk, pemadat, atau penjudi yang sukar disembuhkan"
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
        "text": "Salah satu pihak tidak mempunyai pekerjaan tetap"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Tidak mempunyai pekerjaan tetap bukan merupakan alasan perceraian yang diakui secara limitatif dalam PP No. 9 Tahun 1975 maupun Kompilasi Hukum Islam.",
      "legalBasis": "Pasal 39 ayat (2) dan Penjelasannya UU No. 1 Tahun 1974 tentang Perkawinan jo. Pasal 19 PP No. 9 Tahun 1975 jo. Pasal 116 Kompilasi Hukum Islam (KHI).",
      "statuteText": "Perceraian dapat terjadi karena alasan atau alasan-alasan: a. Salah satu pihak berbuat zina atau menjadi pemabuk, pemadat, penjudi, dan lain sebagainya yang sukar disembuhkan; b. Salah satu pihak meninggalkan pihak lain selama 2 (dua) tahun berturut-turut tanpa izin pihak lain dan tanpa alasan yang sah atau karena hal lain di luar kemampuannya; c. Salah satu pihak mendapat hukuman penjara 5 (lima) tahun atau hukuman yang lebih berat setelah perkawinan berlangsung; d. Salah satu pihak melakukan kekejaman atau penganiayaan berat yang membahayakan pihak lain...",
      "analysis": "Tidak mempunyai pekerjaan tetap adalah jawaban yang tepat (sebagai pengecualian yang dicari) karena kondisi tersebut tidak tercantum dalam daftar limitatif alasan perceraian pada Pasal 19 PP No. 9 Tahun 1975 maupun Pasal 116 KHI (meskipun kelalaian memberi nafkah wajib yang memicu perselisihan terus-menerus/pelanggaran taklik talak dapat didalilkan dengan alasan huruf f atau huruf g). Sebaliknya, opsi mengenai perbuatan zina/pemabuk/pemadat/penjudi yang sukar disembuhkan merupakan alasan sah perceraian dalam Pasal 19 huruf a PP No. 9 Tahun 1975 dan Pasal 116 huruf a KHI; opsi meninggalkan pihak lain selama 2 tahun berturut-turut tanpa izin dan alasan sah tercantum dalam huruf b; dan opsi kekejaman atau penganiayaan berat yang membahayakan pihak lain tercantum dalam huruf d."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 83,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Kewenangan Voluntair Bidang Kewarisan (Pasca-UU No. 3 Tahun 2006)",
    "question": "Berdasarkan ketentuan hukum acara peradilan agama yang berlaku setelah berlakunya UU No. 3 Tahun 2006, kewenangan Pengadilan Agama dalam menyelesaikan permohonan voluntair di bidang kewarisan dibatasi hanya pada...",
    "options": [
      {
        "key": "A",
        "text": "Penetapan pertolongan pembagian harta peninggalan (P3HP) di luar sengketa yang dieksekusi oleh Pengadilan Negeri"
      },
      {
        "key": "B",
        "text": "Putusan penetapan pembagian harta warisan secara paksa apabila salah satu ahli waris tidak hadir di persidangan"
      },
      {
        "key": "C",
        "text": "Penetapan ahli waris (fatwa waris) atas permohonan para ahli waris tanpa sengketa"
      },
      {
        "key": "D",
        "text": "Pengesahan akta jual beli harta warisan yang belum dibagi oleh para ahli waris"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Sejak berlakunya UU No. 3 Tahun 2006, produk penetapan (voluntair) Pengadilan Agama di bidang kewarisan dibatasi hanya pada penetapan siapa yang menjadi ahli waris (bersifat deklaratoir), sedangkan pembagian harta warisan harus diajukan dalam bentuk gugatan (contentiosa).",
      "legalBasis": "Pasal 49 huruf b beserta Penjelasannya UU No. 3 Tahun 2006 tentang Perubahan atas UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 107 ayat (2) UU No. 7 Tahun 1989 (yang telah dihapus).",
      "statuteText": "Yang dimaksud dengan 'waris' adalah penentuan siapa yang menjadi ahli waris, penentuan mengenai harta peninggalan, penentuan bagian masing-masing ahli waris, dan melaksanakan pembagian harta peninggalan tersebut, serta penetapan pengadilan atas permohonan seseorang tentang penentuan siapa yang menjadi ahli waris.",
      "analysis": "Penjelasan Pasal 49 huruf b UU No. 3 Tahun 2006 mempertegas batas antara perkara voluntair dan contentiosa dalam sengketa kewarisan di Pengadilan Agama. Permohonan penetapan di luar sengketa hanya dimungkinkan sebatas penentuan siapa-siapa yang menjadi ahli waris (penetapan ahli waris / fatwa waris) yang putusannya bersifat deklaratoir sehingga tidak memerlukan eksekusi riil. Opsi mengenai penetapan pertolongan pembagian harta peninggalan (P3HP) dengan fiat eksekusi Pengadilan Negeri keliru karena Pasal 107 ayat (2) UU No. 7 Tahun 1989 telah resmi dihapus oleh UU No. 3 Tahun 2006, sekaligus menegaskan bahwa eksekusi putusan Peradilan Agama saat ini dilaksanakan langsung oleh Ketua Pengadilan Agama berdasarkan Pasal 54 UU No. 7 Tahun 1989 jo. Pasal 195 ayat (1) HIR / Pasal 206 ayat (1) RBg. Adapun opsi pembagian harta warisan secara paksa maupun pengesahan jual beli keliru karena setiap pembagian harta warisan yang berpotensi memerlukan eksekusi wajib diajukan melalui gugatan contentiosa, bukan permohonan penetapan."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 84,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Domisili Cerai Gugat",
    "question": "Pada asasnya, gugatan perceraian yang diajukan oleh istri (Cerai Gugat) diajukan kepada Pengadilan Agama yang daerah hukumnya meliputi tempat kediaman...",
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
        "text": "Orang tua suami"
      },
      {
        "key": "D",
        "text": "Orang tua istri"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Menyimpang dari asas actor sequitur forum rei, gugatan perceraian yang diajukan oleh istri (Cerai Gugat) pada asasnya diajukan ke Pengadilan Agama di tempat kediaman istri (Penggugat).",
      "legalBasis": "Pasal 73 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 132 ayat (1) Kompilasi Hukum Islam (KHI).",
      "statuteText": "Gugatan perceraian diajukan oleh istri atau kuasanya kepada Pengadilan yang daerah hukumnya meliputi tempat kediaman penggugat, kecuali apabila penggugat dengan sengaja meninggalkan tempat kediaman bersama tanpa izin tergugat.",
      "analysis": "Tempat kediaman istri (Penggugat) adalah jawaban yang tepat karena Pasal 73 ayat (1) UU No. 7 Tahun 1989 jo. Pasal 132 ayat (1) KHI memberikan perlindungan prosedural bagi pihak istri sehingga kompetensi relatif Cerai Gugat berada pada Pengadilan Agama tempat kediaman istri, kecuali apabila istri meninggalkan tempat kediaman bersama secara sengaja tanpa izin suami (dalam kondisi pengecualian tersebut gugatan diajukan di tempat kediaman suami/Tergugat). Opsi tempat kediaman suami (Tergugat) keliru karena merupakan asas umum Pasal 118 ayat (1) HIR atau berlaku sebagai pengecualian apabila istri pergi tanpa izin, bukan asas utama Cerai Gugat; opsi orang tua suami keliru karena domisili orang tua suami tidak menentukan kompetensi relatif perkara cerai; dan opsi orang tua istri keliru karena domisili orang tua istri tidak menjadi ukuran apabila istri mempunyai tempat kediaman sendiri yang berbeda."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 85,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Saksi Perkara Syiqaq",
    "question": "Yang dapat dijadikan sebagai saksi dalam perkara perceraian yang didasarkan pada alasan Syiqaq (perselisihan dan pertengkaran tajam terus-menerus) adalah...",
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
      "summary": "Dalam perkara perceraian atas alasan syiqaq, pihak keluarga dan orang-orang dekat suami maupun istri wajib/diperbolehkan didengar sebagai saksi.",
      "legalBasis": "Pasal 76 ayat (1) UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 22 ayat (2) PP No. 9 Tahun 1975 jo. Pasal 134 Kompilasi Hukum Islam (KHI).",
      "statuteText": "Apabila gugatan perceraian didasarkan atas alasan syiqaq, maka untuk mendapatkan putusan perceraian harus didengar keterangan saksi-saksi yang berasal dari keluarga atau orang-orang yang dekat dengan suami istri.",
      "analysis": "Pihak keluarga (seperti orang tua), pembantu rumah tangga, serta orang-orang yang dekat dengan suami atau istri adalah jawaban yang tepat karena Pasal 76 ayat (1) UU No. 7 Tahun 1989 jo. Pasal 22 ayat (2) PP No. 9 Tahun 1975 mengecualikan larangan saksi keluarga sedarah/semenda (Pasal 145 ayat (1) HIR / Pasal 172 RBg) pada perkara syiqaq, mengingat keretakan rumah tangga paling diketahui oleh keluarga dan orang terdekat para pihak. Opsi hanya pihak ketiga tanpa hubungan keluarga keliru karena bertentangan dengan kewajiban mendengar saksi keluarga dalam Pasal 76 ayat (1); opsi hanya pegawai pencatat nikah KUA keliru karena pejabat pencatat pernikahan umumnya tidak mengetahui konflik internal rumah tangga sehari-hari; dan opsi hanya saksi ahli psikologi keluarga keliru karena perkara syiqaq tidak membatasi saksi hanya pada psikolog keluarga."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 86,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Berlakunya Hukum Acara Perdata Umum di PA",
    "question": "Pasal berapakah dalam UU No. 7 Tahun 1989 tentang Peradilan Agama yang menegaskan bahwa Hukum Acara yang berlaku pada pengadilan dalam lingkungan Peradilan Agama adalah Hukum Acara Perdata yang berlaku pada pengadilan dalam lingkungan Peradilan Umum?",
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
      "summary": "Pasal 54 UU No. 7 Tahun 1989 menetapkan bahwa Hukum Acara yang berlaku di Peradilan Agama adalah Hukum Acara Perdata di lingkungan Peradilan Umum sepanjang tidak diatur khusus.",
      "legalBasis": "Pasal 54 UU No. 7 Tahun 1989 sebagaimana telah diubah dengan UU No. 3 Tahun 2006 dan UU No. 50 Tahun 2009 tentang Peradilan Agama.",
      "statuteText": "Hukum Acara yang berlaku pada Pengadilan dalam lingkungan Peradilan Agama adalah Hukum Acara Perdata yang berlaku pada Pengadilan dalam lingkungan Peradilan Umum, kecuali yang telah diatur secara khusus dalam Undang-undang ini.",
      "analysis": "Pasal 54 UU No. 7 Tahun 1989 adalah jawaban yang tepat karena menjadi pasal jembatan yang memberlakukan ketentuan HIR, RBg, dan Rv di Pengadilan Agama secara mutatis mutandis sepanjang tidak diatur secara khusus (seperti tata cara cerai talak, domisili cerai gugat, saksi syiqaq, dan sumpah li'an). Opsi Pasal 45 UU No. 7 Tahun 1989 keliru karena mengatur mengenai penyitaan/penyerahan dokumen atau tugas panitera/jurusita; opsi Pasal 62 UU No. 7 Tahun 1989 keliru karena mengatur kewajiban putusan dan penetapan memuat alasan/dasar hukum dan pertimbangan hakim; dan opsi Pasal 70 UU No. 7 Tahun 1989 keliru karena mengatur penetapan izin pengucapan ikrar talak."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 87,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Kewenangan Khusus Pengadilan Agama",
    "question": "Menurut Pasal 49 UU No. 7 Tahun 1989 yang telah diubah dengan UU No. 3 Tahun 2006, Pengadilan Agama bertugas dan berwenang memeriksa, memutus, dan menyelesaikan perkara di tingkat pertama antara...",
    "options": [
      {
        "key": "A",
        "text": "Orang-orang yang beragama Islam di bidang perkawinan dan tindak pidana jinayah secara nasional"
      },
      {
        "key": "B",
        "text": "Seluruh warga negara dalam perkara perdata umum dan pidana khusus"
      },
      {
        "key": "C",
        "text": "Orang-orang yang beragama Islam dalam bidang hukum pidana Islam saja"
      },
      {
        "key": "D",
        "text": "Orang-orang yang beragama Islam di bidang-bidang perdata tertentu yang ditentukan undang-undang"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pengadilan Agama berwenang memeriksa perkara perdata tertentu antara orang-orang yang beragama Islam meliputi perkawinan, waris, wasiat, hibah, wakaf, zakat, infaq, shadaqah, dan ekonomi syariah.",
      "legalBasis": "Pasal 49 UU No. 7 Tahun 1989 sebagaimana diubah dengan UU No. 3 Tahun 2006 dan UU No. 50 Tahun 2009 tentang Peradilan Agama.",
      "statuteText": "Pengadilan agama bertugas dan berwenang memeriksa, memutus, dan menyelesaikan perkara di tingkat pertama antara orang-orang yang beragama Islam di bidang: a. perkawinan; b. waris; c. wasiat; d. hibah; e. wakaf; f. zakat; g. infaq; h. shadaqah; dan i. ekonomi syari'ah.",
      "analysis": "Orang-orang yang beragama Islam di bidang-bidang perdata tertentu yang ditentukan undang-undang adalah jawaban yang tepat karena Pasal 49 UU No. 3 Tahun 2006 membatasi kompetensi absolut Pengadilan Agama pada sembilan bidang perdata tertentu (dari perkawinan hingga ekonomi syariah) bagi orang-orang yang beragama Islam (atau pihak yang menundukkan diri pada hukum syariah dalam sengketa ekonomi syariah). Opsi yang menyebut tindak pidana jinayah secara nasional keliru karena kewenangan jinayah hanya berlaku khusus di Mahkamah Syar'iyah Aceh berdasarkan otonomi khusus (UU No. 11 Tahun 2006 jo. Pasal 3A UU No. 3/2006), bukan kewenangan Pengadilan Agama secara nasional; opsi seluruh warga negara dalam perkara perdata umum dan pidana khusus keliru karena merupakan kewenangan Peradilan Umum; dan opsi bidang hukum pidana Islam saja keliru karena Pengadilan Agama adalah peradilan perdata Islam."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 88,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Sumber Hukum Acara PA",
    "question": "Sumber utama Hukum Acara Perdata yang berlaku dalam pemeriksaan persidangan di lingkungan Peradilan Agama berdasarkan asas Pasal 54 UU No. 7 Tahun 1989 adalah...",
    "options": [
      {
        "key": "A",
        "text": "HIR (Jawa dan Madura), RBg (luar Jawa dan Madura), serta ketentuan dalam Rv sepanjang relevan"
      },
      {
        "key": "B",
        "text": "Hanya Kompilasi Hukum Islam (KHI) tanpa aturan acara lain"
      },
      {
        "key": "C",
        "text": "UU No. 20 Tahun 1947 saja untuk seluruh tingkatan"
      },
      {
        "key": "D",
        "text": "UU No. 2 Tahun 1986 tentang Peradilan Umum"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Berdasarkan Pasal 54 UU No. 7 Tahun 1989, hukum acara yang berlaku di Peradilan Agama merujuk pada sumber hukum acara perdata Peradilan Umum (HIR, RBg, dan Rv) sepanjang tidak diatur khusus dalam UU Peradilan Agama.",
      "legalBasis": "Pasal 54 UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      "statuteText": "Hukum Acara yang berlaku pada Pengadilan dalam lingkungan Peradilan Agama adalah Hukum Acara Perdata yang berlaku pada Pengadilan dalam lingkungan Peradilan Umum, kecuali yang telah diatur secara khusus dalam Undang-undang ini.",
      "analysis": "HIR (Jawa dan Madura), RBg (luar Jawa dan Madura), serta ketentuan dalam Rv sepanjang relevan adalah jawaban yang tepat karena merujuk langsung pada sumber pokok hukum acara perdata Peradilan Umum yang diberlakukan oleh Pasal 54 UU No. 7 Tahun 1989 di lingkungan Peradilan Agama selain hukum acara khusus dalam UU Peradilan Agama itu sendiri. Opsi hanya Kompilasi Hukum Islam (KHI) keliru karena KHI terutama berisi hukum materiil (perkawinan, kewarisan, perwakafan) dan hanya mengatur sebagian ketentuan acara khusus, bukan sumber tunggal hukum acara; opsi UU No. 20 Tahun 1947 saja keliru karena hanya mengatur mengenai peradilan ulangan (banding) untuk wilayah Jawa dan Madura; dan opsi UU No. 2 Tahun 1986 keliru karena mengatur susunan dan kekuasaan Peradilan Umum, bukan kodifikasi hukum acara perdata."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 89,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Ketentuan Lengkap Masa Iddah",
    "question": "Ketentuan waktu tunggu (masa iddah) bagi seorang janda menurut Pasal 39 PP No. 9 Tahun 1975 jo. Pasal 153 ayat (2) Kompilasi Hukum Islam (KHI) adalah...",
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
        "text": "Putus karena kematian 130 hari, perceraian 3 kali suci (sekurang-kurangnya 90 hari) bagi yang masih haid, dan sedang hamil sampai melahirkan"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Waktu tunggu (iddah) adalah 130 hari jika putus karena kematian, 3 kali suci dengan sekurang-kurangnya 90 hari jika putus karena perceraian bagi yang masih haid, dan sampai melahirkan apabila sedang hamil.",
      "legalBasis": "Pasal 39 PP No. 9 Tahun 1975 tentang Pelaksanaan UU Perkawinan jo. Pasal 153 ayat (2) Kompilasi Hukum Islam (KHI).",
      "statuteText": "Waktu tunggu bagi seorang janda ditentukan sebagai berikut: a. Apabila perkawinan putus karena kematian, walaupun qabla al dukhul, waktu tunggu ditetapkan 130 (seratus tiga puluh) hari; b. Apabila perkawinan putus karena perceraian, waktu tunggu bagi yang masih haid ditetapkan 3 (tiga) kali suci dengan sekurang-kurangnya 90 (sembilan puluh) hari, dan bagi yang tidak haid ditetapkan 90 (sembilan puluh) hari; c. Apabila perkawinan putus karena perceraian sedang janda tersebut dalam keadaan hamil, waktu tunggu ditetapkan sampai melahirkan.",
      "analysis": "Putus karena kematian 130 hari, perceraian 3 kali suci (sekurang-kurangnya 90 hari) bagi yang masih haid, dan sedang hamil sampai melahirkan adalah jawaban yang tepat karena memuat ketiga rincian waktu tunggu secara akurat sesuai Pasal 39 PP No. 9 Tahun 1975 jo. Pasal 153 ayat (2) KHI (termasuk jika putus karena kematian sedang hamil menurut Pasal 153 ayat (2) huruf d KHI). Opsi 90 hari/60 hari/130 hari keliru karena menukar jangka waktu 90 hari dan 130 hari serta menetapkan angka tetap 60 hari dan 130 hari; opsi 100 hari/40 hari/6 bulan keliru karena angka-angka tersebut tidak dikenal dalam PP No. 9 Tahun 1975 maupun KHI; dan opsi 120 hari/60 hari/3 kali suci bagi wanita hamil keliru karena bertentangan dengan ketentuan huruf a, b, dan c."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 90,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Sita Jaminan di Pengadilan Agama",
    "question": "Tuan Budi menggugat pembagian harta bersama (gono-gini) di Pengadilan Agama dan memohonkan sita jaminan (conservatoir beslag) atas aset yang dikhawatirkan dialihkan mantan istrinya. Apakah Pengadilan Agama berwenang meletakkan sita jaminan?",
    "options": [
      {
        "key": "A",
        "text": "Tidak berwenang sama sekali karena kewenangan sita hanya ada di Pengadilan Negeri"
      },
      {
        "key": "B",
        "text": "Berwenang hanya jika memperoleh penetapan izin terlebih dahulu dari Ketua Pengadilan Negeri"
      },
      {
        "key": "C",
        "text": "Berwenang secara mandiri meletakkan sita jaminan sepanjang objeknya termasuk perkara yang menjadi kompetensi Pengadilan Agama"
      },
      {
        "key": "D",
        "text": "Berwenang hanya apabila diajukan bersamaan dengan laporan tindak pidana penggelapan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pengadilan Agama berwenang secara penuh dan mandiri meletakkan sita jaminan (conservatoir beslag) dalam perkara perdata Islam yang menjadi kompetensinya tanpa memerlukan izin Pengadilan Negeri.",
      "legalBasis": "Pasal 54 dan Pasal 78 huruf c UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 227 HIR / Pasal 261 RBg jo. Pasal 24 ayat (2) huruf c PP No. 9 Tahun 1975 jo. Pasal 136 ayat (2) KHI.",
      "statuteText": "Pasal 78 huruf c UU No. 7 Tahun 1989: Selama berlangsungnya gugatan perceraian, atas permohonan penggugat, Pengadilan dapat: ... c. menentukan hal-hal yang perlu untuk menjamin terpeliharanya barang-barang yang menjadi hak bersama suami istri atau barang-barang yang menjadi hak suami atau barang-barang yang menjadi hak istri.",
      "analysis": "Berwenang secara mandiri meletakkan sita jaminan sepanjang objeknya termasuk perkara yang menjadi kompetensi Pengadilan Agama adalah jawaban yang tepat karena berdasarkan Pasal 54 jo. Pasal 78 huruf c UU No. 7 Tahun 1989 (beserta Pasal 227 HIR / Pasal 261 RBg) dan kemandirian eksekusi sejak UU No. 7 Tahun 1989 (yang menghapus lembaga fiat eksekusi/pengukuhan Pengadilan Negeri), Pengadilan Agama berwenang penuh memeriksa, meletakkan sita jaminan (termasuk sita harta bersama/marital beslag), serta melaksanakan sita dan eksekusi sendiri melalui Jurusita Pengadilan Agama. Opsi tidak berwenang sama sekali keliru karena penyitaan dalam sengketa harta bersama atau ekonomi syariah muslim merupakan bagian tak terpisahkan dari hukum acara di Pengadilan Agama; opsi harus memperoleh izin Ketua Pengadilan Negeri keliru karena sejak berlakunya UU No. 7 Tahun 1989, Pengadilan Agama sudah menjadi peradilan mandiri sejajar dengan Peradilan Umum; dan opsi harus diajukan bersamaan laporan pidana penggelapan keliru karena sita jaminan merupakan tindakan upaya paksa keperdataan, tidak bergantung pada adanya laporan pidana."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 92,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Cerai Domisili Luar Negeri",
    "question": "Dalam gugatan perceraian (Cerai Gugat), apabila Penggugat dan Tergugat keduanya bertempat tinggal di luar negeri, maka selain dapat diajukan ke Pengadilan Agama tempat perkawinan dahulu dilangsungkan, gugatan dapat diajukan kepada...",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Agama tempat kedudukan terakhir Tergugat di luar negeri"
      },
      {
        "key": "B",
        "text": "Pengadilan Agama tempat kedudukan terakhir Penggugat di luar negeri"
      },
      {
        "key": "C",
        "text": "Pengadilan Agama Jakarta Pusat"
      },
      {
        "key": "D",
        "text": "Pengadilan Tinggi Agama Jakarta"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Apabila penggugat dan tergugat sama-sama bertempat tinggal di luar negeri, gugatan Cerai Gugat diajukan ke Pengadilan Agama tempat perkawinan dilangsungkan atau ke Pengadilan Agama Jakarta Pusat.",
      "legalBasis": "Pasal 73 ayat (3) UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      "statuteText": "Dalam hal penggugat dan tergugat bertempat kediaman di luar negeri, maka gugatan diajukan kepada Pengadilan yang daerah hukumnya meliputi tempat perkawinan mereka dilangsungkan atau kepada Pengadilan Agama Jakarta Pusat.",
      "analysis": "Pengadilan Agama Jakarta Pusat adalah jawaban yang tepat karena Pasal 73 ayat (3) UU No. 7 Tahun 1989 secara khusus memberikan kompetensi relatif kepada Pengadilan Agama di wilayah tempat perkawinan dilangsungkan atau Pengadilan Agama Jakarta Pusat apabila kedua belah pihak berdomisili di luar negeri (ketentuan serupa untuk Cerai Talak diatur dalam Pasal 66 ayat (4) UU No. 7 Tahun 1989). Opsi tempat kedudukan terakhir Tergugat atau Penggugat di luar negeri keliru karena di luar negeri tidak terdapat Pengadilan Agama RI yang mewilayahi alamat domisili tersebut (perwakilan RI/KBRI tidak memiliki wewenang mengadili perceraian); dan opsi Pengadilan Tinggi Agama Jakarta keliru karena merupakan pengadilan tingkat banding, bukan pengadilan tingkat pertama yang berwenang menerima gugatan perceraian."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 9201,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Penghapusan Hak Opsi Waris Islam",
    "question": "Dengan berlakunya UU No. 3 Tahun 2006 tentang Perubahan atas UU No. 7 Tahun 1989 tentang Peradilan Agama hingga saat ini, ketentuan mengenai 'hak opsi' bagi para pihak yang beragama Islam dalam menyelesaikan sengketa kewarisan dinyatakan...",
    "options": [
      {
        "key": "A",
        "text": "Tetap berlaku sehingga ahli waris bebas memilih antara Pengadilan Negeri atau Pengadilan Agama"
      },
      {
        "key": "B",
        "text": "Dihapuskan sehingga sengketa kewarisan bagi orang-orang yang beragama Islam menjadi kewenangan absolut Pengadilan Agama"
      },
      {
        "key": "C",
        "text": "Dialihkan sepenuhnya kepada Pengadilan Negeri apabila harta warisan berupa tanah bersertifikat"
      },
      {
        "key": "D",
        "text": "Berlaku hanya apabila nilai harta peninggalan melebihi Rp500.000.000,00"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "UU No. 3 Tahun 2006 menghapus hak opsi dalam sengketa kewarisan Islam, sehingga seluruh sengketa kewarisan bagi orang-orang yang beragama Islam merupakan kompetensi absolut Pengadilan Agama.",
      "legalBasis": "Penjelasan Umum alinea kedua jo. Pasal 49 huruf b UU No. 3 Tahun 2006 tentang Perubahan atas UU No. 7 Tahun 1989 tentang Peradilan Agama.",
      "statuteText": "Kalimat yang terdapat dalam penjelasan umum Undang-Undang Nomor 7 Tahun 1989 yang menyatakan bahwa para pihak sebelum berperkara dapat mempertimbangkan untuk memilih hukum apa yang akan dipergunakan dalam pembagian warisan, dinyatakan dihapus.",
      "analysis": "Penjelasan Umum UU No. 3 Tahun 2006 secara tegas menghapus klausul hak opsi dalam Penjelasan Umum UU No. 7 Tahun 1989, sehingga setiap sengketa kewarisan antara orang-orang yang beragama Islam wajib diperiksa dan diputus oleh Pengadilan Agama berdasarkan hukum kewarisan Islam (kecuali terdapat sengketa kepemilikan dengan pihak non-Muslim atau pihak ketiga di luar ahli waris yang harus diselesaikan terlebih dahulu di Peradilan Umum sesuai Pasal 50 ayat (2) UU No. 3 Tahun 2006). Opsi yang menyatakan hak opsi masih berlaku keliru karena ketentuan tersebut sudah dicabut sejak 2006. Opsi pengalihan ke Pengadilan Negeri karena objek tanah bersertifikat juga keliru karena kompetensi absolut didasarkan pada subjek hukum dan hubungan hukum kewarisan Islam, bukan jenis objek hartanya. Adapun pembatasan nilai Rp500.000.000,00 tidak pernah menjadi syarat pembatasan kompetensi absolut kewarisan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 9202,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Dispensasi Kawin (UU 16/2019 & PERMA 5/2019)",
    "question": "Berdasarkan UU No. 16 Tahun 2019 jo. PERMA No. 5 Tahun 2019, apabila calon mempelai beragama Islam belum mencapai batas usia minimal perkawinan 19 tahun dan terdapat alasan sangat mendesak, permohonan dispensasi kawin ke Pengadilan Agama diperiksa dan diputus oleh...",
    "options": [
      {
        "key": "A",
        "text": "Majelis hakim berjumlah tiga orang dalam persidangan yang terbuka untuk umum"
      },
      {
        "key": "B",
        "text": "Hakim tunggal dalam persidangan yang tertutup untuk umum dengan mengutamakan kepentingan terbaik bagi anak"
      },
      {
        "key": "C",
        "text": "Kepala Kantor Urusan Agama (KUA) setempat atas persetujuan camat"
      },
      {
        "key": "D",
        "text": "Panitera Pengadilan Agama melalui penerbitan akta penetapan administratif tanpa persidangan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Permohonan dispensasi kawin bagi calon mempelai di bawah usia 19 tahun diperiksa di Pengadilan Agama oleh hakim tunggal dalam sidang tertutup untuk umum demi kepentingan terbaik anak.",
      "legalBasis": "Pasal 7 ayat (1) dan ayat (2) UU No. 1 Tahun 1974 sebagaimana diubah dengan UU No. 16 Tahun 2019 jo. Pasal 1 angka 11, Pasal 6, dan Pasal 20 PERMA No. 5 Tahun 2019 tentang Pedoman Mengadili Permohonan Dispensasi Kawin.",
      "statuteText": "Pasal 7 ayat (1) UU No. 16 Tahun 2019: Perkawinan hanya diizinkan apabila pria dan wanita sudah mencapai umur 19 (sembilan belas) tahun. Pasal 1 angka 11 PERMA No. 5 Tahun 2019: Hakim adalah hakim tunggal pada Pengadilan Negeri dan Pengadilan Agama/Mahkamah Syar'iyah.",
      "analysis": "Sejak berlakunya UU No. 16 Tahun 2019 yang menyamakan batas usia minimal menikah bagi pria dan wanita menjadi 19 tahun serta PERMA No. 5 Tahun 2019, permohonan dispensasi kawin oleh orang tua diajukan ke Pengadilan Agama (bagi pemeluk Islam) dan diperiksa oleh hakim tunggal (diutamakan bersertifikat Hakim Anak/SPPA atau terlatih) dalam persidangan tertutup untuk umum guna melindungi privasi dan mendengarkan langsung keterangan anak tanpa paksaan. Opsi mengenai majelis hakim tiga orang dalam sidang terbuka keliru karena bertentangan dengan Pasal 1 angka 11 dan Pasal 6 PERMA No. 5 Tahun 2019. Opsi kewenangan Kepala KUA/camat keliru karena penyimpangan batas usia hanya dapat diberikan melalui penetapan pengadilan, bukan pejabat eksekutif kecamatan. Opsi penetapan administratif oleh panitera tanpa sidang juga keliru karena hakim wajib memeriksa alasan mendesak, bukti pendukung, dan kesediaan anak secara langsung."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 9203,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Gugatan Sederhana Ekonomi Syariah",
    "question": "Berdasarkan PERMA No. 14 Tahun 2016 jo. PERMA No. 4 Tahun 2019 yang berlaku saat ini, sengketa ekonomi syariah di Pengadilan Agama dapat diperiksa dan diputus dengan tata cara gugatan sederhana (small claim court) apabila nilai gugatan materiilnya paling banyak...",
    "options": [
      {
        "key": "A",
        "text": "Rp100.000.000,00 (seratus juta rupiah)"
      },
      {
        "key": "B",
        "text": "Rp200.000.000,00 (dua ratus juta rupiah)"
      },
      {
        "key": "C",
        "text": "Rp500.000.000,00 (lima ratus juta rupiah)"
      },
      {
        "key": "D",
        "text": "Rp1.000.000.000,00 (satu miliar rupiah)"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Sesuai ketentuan yang berlaku dalam PERMA No. 4 Tahun 2019 jo. PERMA No. 14 Tahun 2016, batas nilai gugatan materiil untuk acara gugatan sederhana sengketa ekonomi syariah di Pengadilan Agama adalah paling banyak Rp500.000.000,00.",
      "legalBasis": "Pasal 2 dan Pasal 3 ayat (2) PERMA No. 14 Tahun 2016 tentang Tata Cara Penyelesaian Perkara Ekonomi Syariah jo. Pasal 3 ayat (1) PERMA No. 4 Tahun 2019 tentang Perubahan atas PERMA No. 2 Tahun 2015 tentang Tata Cara Penyelesaian Gugatan Sederhana.",
      "statuteText": "Gugatan sederhana diajukan terhadap perkara cidera janji dan/atau perbuatan melawan hukum dengan nilai gugatan materiil paling banyak Rp500.000.000,00 (lima ratus juta rupiah).",
      "analysis": "Berdasarkan Pasal 2 dan Pasal 3 ayat (2) PERMA No. 14 Tahun 2016 yang tata cara pemeriksaannya mengikuti PERMA Gugatan Sederhana sebagaimana diubah oleh PERMA No. 4 Tahun 2019, batas maksimal nilai gugatan materiil yang dapat diselesaikan secara cepat oleh hakim tunggal paling lama 25 hari kerja adalah Rp500.000.000,00 (lima ratus juta rupiah). Opsi nilai Rp200.000.000,00 keliru karena merupakan batas nominal lama dalam PERMA No. 2 Tahun 2015 sebelum dinaikkan oleh PERMA No. 4 Tahun 2019. Adapun opsi nilai Rp100.000.000,00 maupun Rp1.000.000.000,00 tidak sesuai dengan ketentuan ambang batas normatif yang berlaku dalam PERMA No. 4 Tahun 2019."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 9204,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Kompetensi Ekonomi Syariah & Putusan MK 93/PUU-X/2012",
    "question": "Pasca-Putusan Mahkamah Konstitusi No. 93/PUU-X/2012 terkait pengujian Pasal 55 UU No. 21 Tahun 2008 tentang Perbankan Syariah, apabila timbul sengketa perbankan syariah (termasuk jika salah satu pihaknya non-Muslim yang berakad syariah) dan tidak disepakati penyelesaian melalui arbitrase/APS syariah, maka pengadilan yang berwenang absolut mengadilinya adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Negeri karena terdapat pihak yang beragama selain Islam"
      },
      {
        "key": "B",
        "text": "Pengadilan Agama sesuai prinsip kewenangan absolut dan asas penundukan diri pada hukum syariah"
      },
      {
        "key": "C",
        "text": "Pengadilan Niaga pada Pengadilan Negeri"
      },
      {
        "key": "D",
        "text": "Pengadilan Tata Usaha Negara (PTUN)"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Putusan MK No. 93/PUU-X/2012 membatalkan pilihan forum ke Peradilan Umum pada Penjelasan Pasal 55 ayat (2) UU Perbankan Syariah, sehingga sengketa perbankan/ekonomi syariah yang tidak diselesaikan lewat arbitrase/APS menjadi kewenangan absolut Pengadilan Agama meskipun melibatkan pihak non-Muslim yang menundukkan diri.",
      "legalBasis": "Pasal 49 huruf i dan Penjelasannya UU No. 3 Tahun 2006 tentang Perubahan atas UU No. 7 Tahun 1989 jo. Pasal 55 ayat (1) UU No. 21 Tahun 2008 tentang Perbankan Syariah jo. Putusan Mahkamah Konstitusi No. 93/PUU-X/2012.",
      "statuteText": "Penjelasan Pasal 49 huruf i UU No. 3 Tahun 2006: Yang dimaksud dengan 'antara orang-orang yang beragama Islam' adalah termasuk orang atau badan hukum yang dengan sendirinya menundukkan diri dengan sukarela kepada hukum Islam mengenai hal-hal yang menjadi kewenangan Peradilan Agama.",
      "analysis": "Putusan MK No. 93/PUU-X/2012 mengakhiri dualisme yurisdiksi dengan menyatakan bahwa klausul Penjelasan Pasal 55 ayat (2) UU No. 21 Tahun 2008 yang membuka opsi pilihan forum ke Peradilan Umum bertentangan dengan UUD 1945 dan tidak mengikat, sehingga secara litigasi peradilan, hanya Pengadilan Agama yang berwenang absolut memutus sengketa perbankan/ekonomi syariah (selain jalur non-litigasi/arbitrase syariah seperti Basyarnas sesuai akad), termasuk terhadap pihak non-Muslim yang secara sukarela menundukkan diri melalui akad syariah (Penjelasan Pasal 49 huruf i UU No. 3 Tahun 2006). Opsi Pengadilan Negeri karena faktor agama non-Muslim keliru karena Penjelasan Pasal 49 huruf i menganut asas penundukan diri pada akad syariah, bukan semata agama KTP. Opsi Pengadilan Niaga keliru karena Pengadilan Niaga berwenang untuk kepailitan/PKPU dan HKI, bukan sengketa akad perbankan syariah biasa. Opsi PTUN keliru karena PTUN hanya mengadili sengketa keputusan tata usaha negara pejabat pemerintah."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 9205,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Saat Terjadinya Perceraian pada Cerai Gugat",
    "question": "Berbeda dengan Cerai Talak, dalam perkara Cerai Gugat (gugatan perceraian yang diajukan oleh istri) di Pengadilan Agama, suatu perceraian dianggap resmi terjadi beserta segala akibat hukumnya terhitung sejak...",
    "options": [
      {
        "key": "A",
        "text": "Saat surat gugatan perceraian didaftarkan di Kepaniteraan Pengadilan Agama"
      },
      {
        "key": "B",
        "text": "Saat suami mengucapkan ikrar talak di depan sidang Pengadilan Agama"
      },
      {
        "key": "C",
        "text": "Saat putusan Pengadilan Agama memperoleh kekuatan hukum tetap (inkracht van gewijsde)"
      },
      {
        "key": "D",
        "text": "Saat akta cerai dicatat oleh Kepala Desa di buku register kependudukan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Dalam perkara Cerai Gugat, perceraian dianggap terjadi beserta segala akibat hukumnya terhitung sejak putusan Pengadilan Agama memperoleh kekuatan hukum tetap tanpa sidang ikrar talak.",
      "legalBasis": "Pasal 81 ayat (2) UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 146 ayat (1) Kompilasi Hukum Islam (KHI).",
      "statuteText": "Suatu perceraian dianggap terjadi beserta segala akibat hukumnya terhitung sejak jatuhnya putusan Pengadilan yang telah memperoleh kekuatan hukum tetap.",
      "analysis": "Berdasarkan Pasal 81 ayat (2) UU No. 7 Tahun 1989 jo. Pasal 146 ayat (1) KHI, putusan pengadilan dalam perkara Cerai Gugat menjatuhkan talak ba'in shughraa (Pasal 119 ayat (2) huruf c KHI) sehingga tidak memerlukan sidang pengucapan ikrar talak oleh suami; perkawinan putus secara hukum terhitung sejak putusan tersebut berkekuatan hukum tetap (inkracht). Opsi saat pendaftaran gugatan keliru karena pendaftaran hanya menandai dimulainya pemeriksaan perkara di pengadilan. Opsi saat pengucapan ikrar talak oleh suami keliru karena tahapan sidang ikrar talak hanya berlaku pada perkara permohonan Cerai Talak (Pasal 70–71 UU No. 7 Tahun 1989), bukan Cerai Gugat. Opsi pencatatan oleh Kepala Desa keliru karena wewenang menerbitkan Akta Cerai berada pada Panitera Pengadilan Agama (Pasal 84 UU No. 7 Tahun 1989) sebagai tindak lanjut administratif pasca-putus."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 9206,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Pemeliharaan Anak (Hadhanah) & Nafkah Anak",
    "question": "Menurut Kompilasi Hukum Islam (KHI) dan praktik peradilan agama saat ini, apabila terjadi perceraian antara suami dan istri yang beragama Islam, ketentuan mengenai hak pemeliharaan anak (hadhanah) dan beban biaya pemeliharaannya adalah...",
    "options": [
      {
        "key": "A",
        "text": "Anak yang belum mumayyiz (di bawah 12 tahun) mutlak diasuh oleh ayah tanpa melihat peran ibu"
      },
      {
        "key": "B",
        "text": "Pemeliharaan anak yang belum mumayyiz (belum berumur 12 tahun) adalah hak ibunya (sepanjang ibu layak), anak yang sudah mumayyiz berhak memilih, dan biaya pemeliharaan tetap ditanggung ayahnya"
      },
      {
        "key": "C",
        "text": "Biaya pemeliharaan anak sepenuhnya berpindah kepada ibu apabila hak asuh anak ditetapkan kepada ibu"
      },
      {
        "key": "D",
        "text": "Anak di bawah umur 12 tahun wajib diserahkan ke balai pengasuhan negara apabila kedua orang tua bercerai"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Menurut Pasal 105 KHI, anak di bawah 12 tahun (belum mumayyiz) berada di bawah pemeliharaan ibu sepanjang tidak terdapat halangan demi kepentingan terbaik anak, anak berusia 12 tahun ke atas berhak memilih, dan ayah tetap menanggung biaya pemeliharaannya.",
      "legalBasis": "Pasal 105 dan Pasal 156 Kompilasi Hukum Islam (KHI) jo. Pasal 41 huruf b UU No. 1 Tahun 1974 tentang Perkawinan jo. SEMA No. 1 Tahun 2017 (Rumusan Kamar Agama).",
      "statuteText": "Dalam hal terjadi perceraian: a. Pemeliharaan anak yang belum mumayyiz atau belum berumur 12 tahun adalah hak ibunya; b. Pemeliharaan anak yang sudah mumayyiz diserahkan kepada anak untuk memilih di antara ayah atau ibunya sebagai pemegang hak pemeliharaannya; c. Biaya pemeliharaan ditanggung oleh ayahnya.",
      "analysis": "Ketentuan Pasal 105 jo. Pasal 156 KHI secara tegas memisahkan hak pengasuhan fisik dengan kewajiban finansial: anak yang belum berumur 12 tahun hak asuhnya diberikan kepada ibu (kecuali menurut praktik peradilan/SEMA ibu terbukti lalai, berperilaku buruk, atau membahayakan kepentingan terbaik anak), anak usia 12 tahun ke atas berhak memilih sendiri antara ayah atau ibunya, dan biaya hidup/pendidikan anak tetap menjadi kewajiban ayah sesuai kemampuannya (dapat pula ditetapkan secara ex officio dalam putusan perceraian menurut SEMA No. 1 Tahun 2017 / SEMA No. 3 Tahun 2018). Opsi hak asuh mutlak pada ayah untuk anak di bawah 12 tahun keliru karena bertentangan dengan Pasal 105 huruf a KHI. Opsi peralihan biaya anak ke ibu keliru karena Pasal 105 huruf c KHI dan Pasal 41 huruf b UU Perkawinan tetap membebankan nafkah anak kepada ayah. Opsi penyerahan ke balai negara keliru karena orang tua kandung tetap menjadi pemegang kuasa asuh utama."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 9207,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Mediasi Wajib di Pengadilan Agama (PERMA 1/2016)",
    "question": "Dalam pemeriksaan perkara perdata (termasuk perceraian, waris, dan ekonomi syariah) di Pengadilan Agama apabila kedua belah pihak hadir di persidangan, konsekuensi hukum menurut PERMA No. 1 Tahun 2016 yang berlaku saat ini apabila hakim pemeriksa perkara tidak memerintahkan para pihak menempuh mediasi dan memutus pokok perkara adalah...",
    "options": [
      {
        "key": "A",
        "text": "Putusan tetap sah dan tidak dapat dikoreksi karena mediasi hanya bersifat imbauan moral"
      },
      {
        "key": "B",
        "text": "Melanggar ketentuan peraturan perundang-undangan tentang mediasi sehingga apabila diajukan upaya hukum, Pengadilan Tingkat Banding atau Mahkamah Agung dengan putusan sela memerintahkan Pengadilan Tingkat Pertama melaksanakan mediasi"
      },
      {
        "key": "C",
        "text": "Perkara langsung gugur secara otomatis sehingga Penggugat dilarang mengajukan gugatan ulang selamanya"
      },
      {
        "key": "D",
        "text": "Eksekusi putusan dialihkan menjadi kewenangan Kantor Urusan Agama (KUA) setempat"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Sesuai Pasal 3 ayat (3) dan ayat (4) PERMA No. 1 Tahun 2016 (menggantikan pendekatan lama dalam PERMA No. 1 Tahun 2008), hakim yang tidak memerintahkan mediasi telah melanggar aturan mediasi sehingga jika diajukan upaya hukum, Pengadilan Tingkat Banding atau MA menjatuhkan putusan sela yang memerintahkan Pengadilan Tingkat Pertama melaksanakan proses mediasi.",
      "legalBasis": "Pasal 82 UU No. 7 Tahun 1989 tentang Peradilan Agama jo. Pasal 3 ayat (1), ayat (3), dan ayat (4) serta Pasal 4 ayat (1) PERMA No. 1 Tahun 2016 tentang Prosedur Mediasi di Pengadilan.",
      "statuteText": "Pasal 3 ayat (3) PERMA No. 1 Tahun 2016: Hakim Pemeriksa Perkara yang tidak memerintahkan Para Pihak untuk menempuh Mediasi sehingga Para Pihak tidak melakukan Mediasi telah melanggar ketentuan peraturan perundang-undangan yang mengatur mengenai Mediasi di Pengadilan. (4) Dalam hal terjadi pelanggaran terhadap ketentuan sebagaimana dimaksud pada ayat (3), apabila diajukan upaya hukum maka Pengadilan Tingkat Banding atau Mahkamah Agung dengan putusan sela memerintahkan Pengadilan Tingkat Pertama untuk melakukan proses Mediasi.",
      "analysis": "Dalam hukum acara peradilan agama yang berlaku saat ini (Pasal 82 UU No. 7 Tahun 1989 jo. PERMA No. 1 Tahun 2016), kewajiban mediasi bersifat imperatif apabila kedua belah pihak hadir. Berbeda dari aturan lama PERMA No. 1 Tahun 2008 (yang langsung menyebut putusan batal demi hukum), Pasal 3 ayat (3)–(4) PERMA No. 1 Tahun 2016 menetapkan mekanisme korektif bahwa apabila diajukan banding atau kasasi, Pengadilan Tinggi Agama atau Mahkamah Agung menjatuhkan putusan sela yang memerintahkan Pengadilan Agama tingkat pertama melaksanakan mediasi paling lama 30 hari sebelum memutus upaya hukum tersebut. Opsi bahwa mediasi sekadar imbauan moral keliru karena Pasal 3 ayat (1) dan ayat (3) mewajibkannya secara tegas. Opsi gugatan gugur permanen maupun pengalihan eksekusi ke KUA keliru karena hukum acara perdata agama tidak mengenal sanksi demikian atas kelalaian prosedur mediasi."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 9208,
    "category": "Hukum Acara Peradilan Agama",
    "topicTag": "Kemandirian Eksekusi Putusan PA",
    "question": "Dalam sistem peradilan Indonesia yang berlaku saat ini setelah berlakunya UU No. 7 Tahun 1989 jo. UU No. 3 Tahun 2006 dan UU No. 50 Tahun 2009, pelaksanaan eksekusi paksa atas putusan Pengadilan Agama yang telah berkekuatan hukum tetap (misalnya sengketa harta bersama atau ekonomi syariah) dilakukan oleh...",
    "options": [
      {
        "key": "A",
        "text": "Ketua Pengadilan Negeri setempat setelah menerima permohonan pengukuhan (fiat eksekusi) dari Pengadilan Agama"
      },
      {
        "key": "B",
        "text": "Ketua Pengadilan Agama sendiri melalui Panitera dan Jurusita Pengadilan Agama tanpa memerlukan fiat eksekusi Pengadilan Negeri"
      },
      {
        "key": "C",
        "text": "Kantor Urusan Agama (KUA) bersama Badan Pertanahan Nasional secara langsung tanpa perintah pengadilan"
      },
      {
        "key": "D",
        "text": "Kejaksaan Negeri selaku eksekutor seluruh putusan perkara perdata agama"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Sejak UU No. 7 Tahun 1989 (yang menghapus lembaga fiat eksekusi) dan dipertegas oleh UU No. 3 Tahun 2006 serta UU No. 50 Tahun 2009, putusan Pengadilan Agama berkekuatan eksekutorial mandiri yang dilaksanakan langsung oleh Ketua Pengadilan Agama melalui Panitera/Jurusita Pengadilan Agama.",
      "legalBasis": "Pasal 54 dan Pasal 103 UU No. 7 Tahun 1989 sebagaimana diubah dengan UU No. 3 Tahun 2006 dan UU No. 50 Tahun 2009 tentang Peradilan Agama jo. Pasal 195 ayat (1) HIR / Pasal 206 ayat (1) RBg.",
      "statuteText": "Pasal 195 ayat (1) HIR (berlaku mutatis mutandis melalui Pasal 54 UU No. 7 Tahun 1989): Dalam hal menjalankan putusan pengadilan negeri dalam perkara yang pada tingkat pertama diperiksa oleh pengadilan negeri, maka perintah dan pimpinan untuk menjalankan putusan itu dilakukan oleh ketua pengadilan negeri yang dahulu memeriksa perkara itu.",
      "analysis": "Sebelum berlakunya UU No. 7 Tahun 1989, putusan Pengadilan Agama memang tidak memiliki daya paksa sendiri sehingga memerlukan pengukuhan (executoir verklaring / fiat eksekusi) dari Pengadilan Negeri. Namun sejak UU No. 7 Tahun 1989 (Pasal 54 jo. Pasal 103 mengenai jurusita) serta penguatan satu atap di bawah Mahkamah Agung melalui UU No. 3 Tahun 2006 dan UU No. 50 Tahun 2009, Pengadilan Agama adalah peradilan mandiri yang berwenang penuh memimpin aanmaning, sita eksekusi, hingga lelang/pengosongan langsung oleh Ketua Pengadilan Agama melalui Panitera dan Jurusita Pengadilan Agama tanpa fiat Pengadilan Negeri. Opsi fiat eksekusi oleh Ketua Pengadilan Negeri keliru karena praktik tersebut sudah dihapus sejak 1989. Opsi KUA/BPN keliru karena eksekusi paksa hanya boleh dilakukan atas perintah ketua pengadilan melalui jurusita. Opsi Kejaksaan Negeri keliru karena jaksa merupakan eksekutor putusan pidana (Pasal 270 KUHAP), bukan eksekutor putusan perkara perdata agama."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 93,
    "category": "Hukum Acara PHI",
    "topicTag": "Regulasi PPHI",
    "question": "Hukum acara penyelesaian perselisihan hubungan industrial melalui perundingan bipartit, mediasi, konsiliasi, arbitrase, hingga Pengadilan Hubungan Industrial hingga saat ini diatur dalam...",
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
      "summary": "Hukum acara penyelesaian perselisihan hubungan industrial diatur secara khusus dalam UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI) beserta tafsir putusan Mahkamah Konstitusi terkait.",
      "legalBasis": "Pasal 1 angka 1 jo. Pasal 55 jo. Pasal 125 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.",
      "statuteText": "Pasal 55 UU No. 2 Tahun 2004: Pengadilan Hubungan Industrial merupakan pengadilan khusus yang berada pada lingkungan peradilan umum.",
      "analysis": "Opsi Undang-Undang Nomor 2 Tahun 2004 tepat karena merupakan undang-undang hukum formil ketenagakerjaan yang membentuk Pengadilan Hubungan Industrial (PHI) menggantikan rezim P4D/P4P UU No. 22 Tahun 1957 (yang pelaksanaannya turut diperkuat putusan Mahkamah Konstitusi terkini seperti Putusan MK No. 168/PUU-XXI/2023 dan Putusan MK No. 132/PUU-XXIII/2025). Opsi UU No. 4 Tahun 2004 keliru karena mengatur Kekuasaan Kehakiman (yang telah dicabut oleh UU No. 48 Tahun 2009); UU No. 2 Tahun 2002 mengatur Kepolisian Negara RI; dan UU No. 4 Tahun 2002 mengatur pembentukan daerah otonom baru."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 94,
    "category": "Hukum Acara PHI",
    "topicTag": "Perjanjian Arbitrase PHI",
    "question": "Menurut Pasal 32 UU No. 2 Tahun 2004 tentang PPHI, kesepakatan para pihak yang berselisih dalam hubungan industrial untuk menyelesaikan sengketa melalui arbitrase dituangkan secara tertulis dalam...",
    "options": [
      {
        "key": "A",
        "text": "Berita acara penunjukan panitera"
      },
      {
        "key": "B",
        "text": "Surat perjanjian arbitrase"
      },
      {
        "key": "C",
        "text": "Putusan sela arbitrase"
      },
      {
        "key": "D",
        "text": "Risalah perundingan bipartit semata"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penyelesaian perselisihan kepentingan dan perselisihan antar serikat pekerja melalui arbitrase wajib didasari kesepakatan tertulis para pihak yang dituangkan dalam surat perjanjian arbitrase (Pasal 32 UU No. 2 Tahun 2004).",
      "legalBasis": "Pasal 32 jo. Pasal 29 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 32 ayat (1) UU No. 2 Tahun 2004: Penyelesaian perselisihan hubungan industrial melalui arbiter dilakukan atas dasar kesepakatan para pihak yang berselisih. Ayat (2): Kesepakatan para pihak yang berselisih sebagaimana dimaksud pada ayat (1) dinyatakan secara tertulis dalam surat perjanjian arbitrase, dibuat rangkap 3 (tiga) dan masing-masing pihak mendapatkan 1 (satu) yang mempunyai kekuatan hukum yang sama.",
      "analysis": "Opsi surat perjanjian arbitrase tepat sesuai Pasal 32 ayat (2) UU No. 2 Tahun 2004 yang mengharuskan kesepakatan tertulis rangkap tiga (berisi identitas para pihak, pokok persoalan perselisihan kepentingan atau antar serikat pekerja dalam satu perusahaan, serta pernyataan tunduk pada putusan arbitrase). Opsi berita acara penunjukan panitera keliru karena arbitrase bersifat non-litigasi di luar pengadilan; opsi putusan sela arbitrase adalah produk setelah pemeriksaan berjalan, bukan akta kesepakatan awal; dan opsi risalah perundingan bipartit semata hanya merupakan berita acara musyawarah internal perusahaan sebelum memasuki tahap mediasi, konsiliasi, atau arbitrase."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 95,
    "category": "Hukum Acara PHI",
    "topicTag": "Tenggang Waktu Kasasi PHI",
    "question": "Berdasarkan Pasal 110 UU No. 2 Tahun 2004, tenggang waktu pengajuan permohonan kasasi terhadap putusan Pengadilan Hubungan Industrial mengenai perselisihan hak atau PHK adalah selambat-lambatnya 14 hari...",
    "options": [
      {
        "key": "A",
        "text": "Kerja, terhitung sejak putusan diucapkan tanpa membedakan hadir atau tidak hadirnya para pihak"
      },
      {
        "key": "B",
        "text": "Kalender, terhitung sejak salinan resmi putusan diunggah ke direktori pengadilan"
      },
      {
        "key": "C",
        "text": "Kerja, terhitung sejak permohonan mediasi di instansi ketenagakerjaan dinyatakan gagal"
      },
      {
        "key": "D",
        "text": "Kerja, terhitung sejak putusan dibacakan bagi pihak yang hadir atau sejak tanggal menerima pemberitahuan putusan bagi pihak yang tidak hadir"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Batas pengajuan kasasi PHI adalah 14 hari kerja sejak putusan dibacakan bagi pihak yang hadir, atau sejak menerima pemberitahuan putusan bagi pihak yang tidak hadir; dan berdasarkan SEMA No. 3 Tahun 2018 serta Putusan MK No. 34/PUU-XVII/2019, kasasi merupakan upaya hukum terakhir (tanpa Peninjauan Kembali).",
      "legalBasis": "Pasal 110 UU No. 2 Tahun 2004 tentang PPHI jo. SEMA No. 3 Tahun 2018 jo. Putusan MK No. 34/PUU-XVII/2019.",
      "statuteText": "Pasal 110 UU No. 2 Tahun 2004: Putusan Pengadilan Hubungan Industrial pada Pengadilan Negeri mengenai perselisihan hak dan perselisihan pemutusan hubungan kerja mempunyai kekuatan hukum tetap apabila tidak diajukan permohonan kasasi kepada Mahkamah Agung dalam waktu selambat-lambatnya 14 (empat belas) hari kerja: a. bagi pihak yang hadir, terhitung sejak putusan dibacakan dalam sidang majelis hakim; b. bagi pihak yang tidak hadir, terhitung sejak tanggal menerima pemberitahuan putusan.",
      "analysis": "Opsi 14 hari kerja terhitung sejak putusan dibacakan bagi pihak yang hadir atau sejak menerima pemberitahuan putusan bagi pihak yang tidak hadir tepat karena sesuai langsung dengan bunyi Pasal 110 huruf a dan huruf b UU No. 2 Tahun 2004 (tanpa melalui tingkat banding di Pengadilan Tinggi, dan kasasi menjadi upaya hukum terakhir tanpa PK sesuai SEMA No. 3 Tahun 2018). Opsi yang menyamakan penghitungan hadir dan tidak hadir keliru karena melanggar pembedaan tegas huruf a dan b Pasal 110; opsi hari kalender keliru karena UU PPHI menghitung tenggang waktu dengan hari kerja; dan opsi sejak gagal mediasi keliru karena kegagalan mediasi merupakan syarat pengajuan gugatan tingkat pertama ke PHI, bukan kasasi."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 96,
    "category": "Hukum Acara PHI",
    "topicTag": "Definisi Perundingan Bipartit",
    "question": "Berdasarkan Pasal 1 angka 10 UU No. 2 Tahun 2004, yang dimaksud dengan perundingan bipartit dalam penyelesaian perselisihan hubungan industrial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Perundingan antara pekerja/buruh atau serikat pekerja/serikat buruh dengan pengusaha untuk menyelesaikan perselisihan hubungan industrial tanpa pihak ketiga"
      },
      {
        "key": "B",
        "text": "Perundingan antara satu serikat pekerja dengan serikat pekerja lain yang dimediasi pegawai Disnaker"
      },
      {
        "key": "C",
        "text": "Perundingan antara pekerja, pengusaha, dan mediator dari instansi ketenagakerjaan setempat"
      },
      {
        "key": "D",
        "text": "Perundingan perdamaian yang dipimpin oleh Majelis Hakim di ruang mediasi Pengadilan Negeri"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Perundingan bipartit adalah musyawarah wajib tahap awal secara langsung antara pekerja/serikat pekerja dengan pengusaha dalam satu perusahaan untuk menyelesaikan perselisihan tanpa campur tangan pihak ketiga.",
      "legalBasis": "Pasal 1 angka 10 jo. Pasal 3 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.",
      "statuteText": "Pasal 1 angka 10 UU No. 2 Tahun 2004: Perundingan bipartit adalah perundingan antara pekerja/buruh atau serikat pekerja/serikat buruh dengan pengusaha untuk menyelesaikan perselisihan hubungan industrial.",
      "analysis": "Opsi perundingan antara pekerja/serikat pekerja dengan pengusaha tanpa pihak ketiga tepat sesuai Pasal 1 angka 10 jo. Pasal 3 ayat (1) UU No. 2 Tahun 2004 sebagai forum wajib pertama (musyawarah untuk mufakat) sebelum sengketa dicatatkan ke instansi ketenagakerjaan. Opsi perundingan yang melibatkan pegawai Disnaker atau mediator mengacu pada pengertian mediasi (Pasal 1 angka 11) dan bukan bipartit; opsi antar serikat pekerja yang dimediasi mengabaikan unsur hubungan kerja pekerja–pengusaha; dan opsi di hadapan Majelis Hakim Pengadilan Negeri merupakan tahap pemeriksaan litigasi di PHI."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 97,
    "category": "Hukum Acara PHI",
    "topicTag": "Kewenangan Konsiliator PHI",
    "question": "Dalam mekanisme penyelesaian perselisihan hubungan industrial di luar pengadilan berdasarkan Pasal 1 angka 13 jo. Pasal 17 UU No. 2 Tahun 2004, jenis perselisihan yang menjadi kewenangan Konsiliator adalah...",
    "options": [
      {
        "key": "A",
        "text": "Perselisihan hak, perselisihan kepentingan, perselisihan PHK, dan perselisihan antar serikat pekerja/buruh"
      },
      {
        "key": "B",
        "text": "Perselisihan hak dan perselisihan kepentingan saja"
      },
      {
        "key": "C",
        "text": "Perselisihan hak serta tindak pidana pelanggaran ketenagakerjaan"
      },
      {
        "key": "D",
        "text": "Perselisihan kepentingan, perselisihan pemutusan hubungan kerja (PHK), dan perselisihan antar serikat pekerja/serikat buruh hanya dalam satu perusahaan"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Konsiliator hanya berwenang menangani tiga jenis perselisihan (perselisihan kepentingan, perselisihan PHK, dan perselisihan antar serikat pekerja dalam satu perusahaan), dan tidak berwenang atas perselisihan hak.",
      "legalBasis": "Pasal 1 angka 13 jo. Pasal 17 UU No. 2 Tahun 2004 tentang PPHI.",
      "statuteText": "Pasal 1 angka 13 UU No. 2 Tahun 2004: Konsiliasi Hubungan Industrial yang selanjutnya disebut konsiliasi adalah penyelesaian perselisihan kepentingan, perselisihan pemutusan hubungan kerja atau perselisihan antar serikat pekerja/serikat buruh hanya dalam satu perusahaan melalui musyawarah yang ditengahi oleh seorang atau lebih konsiliator yang netral.",
      "analysis": "Opsi mengenai perselisihan kepentingan, PHK, dan antar serikat pekerja dalam satu perusahaan tepat karena sesuai rumusan limitatif Pasal 1 angka 13 UU No. 2 Tahun 2004 (konsiliator tidak diberi kewenangan memeriksa perselisihan hak normatif). Opsi yang mencakup seluruh keempat jenis perselisihan (termasuk perselisihan hak) adalah kewenangan Mediator (Pasal 1 angka 11); opsi yang memasukkan perselisihan hak keliru karena perselisihan hak dikecualikan dari konsiliasi; dan opsi tindak pidana pelanggaran ketenagakerjaan keliru karena merupakan kompetensi penyidikan PPNS ketenagakerjaan/Polri dan peradilan pidana."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 99,
    "category": "Hukum Acara PHI",
    "topicTag": "Tahapan Mediasi Hubungan Industrial",
    "question": "Rangkaian kegiatan berikut ini merupakan bagian dari proses penyelesaian perselisihan di instansi ketenagakerjaan melalui jalur Mediasi Hubungan Industrial (Pasal 4 jo. Pasal 8–16 UU No. 2 Tahun 2004), KECUALI...",
    "options": [
      {
        "key": "A",
        "text": "Penerbitan anjuran tertulis oleh mediator apabila kesepakatan tidak tercapai"
      },
      {
        "key": "B",
        "text": "Pencatatan perselisihan pada instansi yang bertanggung jawab di bidang ketenagakerjaan"
      },
      {
        "key": "C",
        "text": "Musyawarah penyelesaian yang ditengahi oleh mediator netral dari instansi ketenagakerjaan"
      },
      {
        "key": "D",
        "text": "Pembuatan risalah perundingan bipartit secara internal antara pekerja dan pengusaha tanpa pihak ketiga"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pembuatan risalah perundingan bipartit merupakan tahap internal perusahaan sebelum pencatatan ke Disnaker dan bukan bagian dari proses mediasi; justru risalah bipartit adalah syarat pelimpahan menuju mediasi.",
      "legalBasis": "Pasal 3, Pasal 4 ayat (1)–(3), dan Pasal 8–16 UU No. 2 Tahun 2004 jo. Putusan MK No. 68/PUU-XIII/2015.",
      "statuteText": "Pasal 4 ayat (1) UU No. 2 Tahun 2004: Dalam hal perundingan bipartit gagal sebagaimana dimaksud dalam Pasal 3 ayat (3), maka salah satu atau kedua belah pihak mencatatkan perselisihannya kepada instansi yang bertanggung jawab di bidang ketenagakerjaan setempat dengan melampirkan bukti bahwa upaya-upaya penyelesaian melalui perundingan bipartit telah dilakukan.",
      "analysis": "Opsi pembuatan risalah perundingan bipartit secara internal merupakan pengecualian yang tepat karena perundingan bipartit beserta risalahnya dibuat lebih dahulu pada tahap wajib di tingkat perusahaan (Pasal 3 dan Pasal 6 UU PPHI) sebagai syarat administratif pencatatan sengketa ke instansi ketenagakerjaan. Sebaliknya, pencatatan perselisihan di Disnaker, musyawarah yang ditengahi mediator netral, serta penerbitan anjuran tertulis (yang berdasarkan Putusan MK No. 68/PUU-XIII/2015 tetap dimaknai dikeluarkan dalam bentuk risalah penyelesaian mediasi untuk syarat gugatan) adalah bagian langsung dari mekanisme mediasi (Pasal 4 dan Pasal 8–15)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 100,
    "category": "Hukum Acara PHI",
    "topicTag": "Gugatan Tanpa Risalah Mediasi/Konsiliasi",
    "question": "Berdasarkan Pasal 83 ayat (1) UU No. 2 Tahun 2004, apabila suatu gugatan sengketa hubungan industrial diajukan ke Pengadilan Hubungan Industrial tanpa dilampiri risalah penyelesaian melalui mediasi atau konsiliasi, maka Hakim PHI...",
    "options": [
      {
        "key": "A",
        "text": "Langsung menjatuhkan putusan akhir menolak seluruh pokok gugatan penggugat"
      },
      {
        "key": "B",
        "text": "Mengabaikan kekurangan lampiran tersebut dan langsung memeriksa pembuktian"
      },
      {
        "key": "C",
        "text": "Wajib mengembalikan gugatan kepada penggugat"
      },
      {
        "key": "D",
        "text": "Menjatuhkan putusan verstek yang mengabulkan gugatan tanpa mendengar pihak lawan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Sesuai Pasal 83 ayat (1) UU PPHI, Hakim PHI wajib mengembalikan gugatan kepada penggugat apabila berkas gugatan tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi.",
      "legalBasis": "Pasal 83 ayat (1) UU No. 2 Tahun 2004 tentang PPHI jo. Putusan MK No. 68/PUU-XIII/2015.",
      "statuteText": "Pasal 83 ayat (1) UU No. 2 Tahun 2004: Pengajuan gugatan yang tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi, maka hakim Pengadilan Hubungan Industrial wajib mengembalikan gugatan kepada penggugat.",
      "analysis": "Opsi wajib mengembalikan gugatan kepada penggugat tepat karena merupakan perintah imperatif Pasal 83 ayat (1) UU No. 2 Tahun 2004 untuk menjaga tertib beracara tripartit pra-litigasi (bipartit -> mediasi/konsiliasi -> PHI), di mana Putusan MK No. 68/PUU-XIII/2015 menegaskan bahwa risalah tersebut mencakup pula bentuk anjuran tertulis mediator/konsiliator. Opsi menolak gugatan pada putusan akhir keliru karena penyaringan dilakukan sejak tahap awal pemeriksaan administratif sebelum pokok perkara diperiksa; opsi mengabaikan lampiran melanggar Pasal 83 ayat (1); dan opsi putusan verstek keliru karena pengembalian gugatan ditujukan pada syarat formil gugatan Penggugat, bukan ketidakhadiran Tergugat."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 101,
    "category": "Hukum Acara PHI",
    "topicTag": "Pembebasan Biaya Perkara PHI",
    "question": "Dalam proses beracara di Pengadilan Hubungan Industrial berdasarkan Pasal 58 UU No. 2 Tahun 2004, para pihak yang berperkara dibebaskan dari pengenaan biaya perkara termasuk biaya eksekusi apabila nilai gugatannya...",
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
      "summary": "Pasal 58 UU PPHI membebaskan biaya perkara termasuk biaya eksekusi bagi gugatan di PHI yang nilai tuntutannya di bawah Rp150.000.000,00 untuk menjamin akses keadilan bagi pekerja/buruh.",
      "legalBasis": "Pasal 58 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 58 UU No. 2 Tahun 2004: Dalam proses beracara di Pengadilan Hubungan Industrial, pihak-pihak yang berperkara tidak dikenakan biaya termasuk biaya eksekusi yang nilai gugatannya di bawah Rp150.000.000,00 (seratus lima puluh juta rupiah).",
      "analysis": "Opsi di bawah Rp150.000.000,00 tepat karena sesuai angka normatif dalam Pasal 58 UU No. 2 Tahun 2004 (pembebasan mencakup tingkat PHI, kasasi di Mahkamah Agung, hingga biaya eksekusi apabila nilai gugatan di bawah seratus lima puluh juta rupiah). Apabila nilai gugatan mencapai Rp150.000.000,00 atau lebih, para pihak baru dikenakan panjar biaya perkara sesuai ketentuan peradilan umum. Ketiga opsi batas nominal lainnya (Rp50 juta, Rp200 juta, maupun Rp300 juta) tidak memiliki dasar dalam Pasal 58 UU No. 2 Tahun 2004."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 102,
    "category": "Hukum Acara PHI",
    "topicTag": "Batas Waktu Putusan PHI",
    "question": "Dalam rangka mewujudkan asas peradilan cepat pada sengketa ketenagakerjaan, Pasal 103 UU No. 2 Tahun 2004 mewajibkan Majelis Hakim PHI menjatuhkan putusan penyelesaian perselisihan selambat-lambatnya...",
    "options": [
      {
        "key": "A",
        "text": "30 hari kalender sejak gugatan didaftarkan"
      },
      {
        "key": "B",
        "text": "50 hari kerja terhitung sejak sidang pertama"
      },
      {
        "key": "C",
        "text": "50 hari kalender terhitung sejak pembacaan gugatan"
      },
      {
        "key": "D",
        "text": "90 hari kerja terhitung sejak anjuran mediator diterbitkan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 103 UU PPHI menetapkan batas waktu maksimal bagi Majelis Hakim PHI untuk memberikan putusan selambat-lambatnya 50 hari kerja terhitung sejak sidang pertama.",
      "legalBasis": "Pasal 103 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 103 UU No. 2 Tahun 2004: Majelis Hakim wajib memberikan putusan penyelesaian perselisihan hubungan industrial dalam waktu selambat-lambatnya 50 (lima puluh) hari kerja terhitung sejak sidang pertama.",
      "analysis": "Opsi 50 hari kerja terhitung sejak sidang pertama tepat sesuai bunyi tegas Pasal 103 UU No. 2 Tahun 2004. Karakteristik ini membedakan hukum acara PHI dari perdata biasa guna melindungi kepastian kerja dan kelangsungan usaha. Opsi 30 hari kalender keliru (30 hari kerja adalah batas waktu penyelesaian tugas mediator/konsiliator atau batas waktu kasasi di Mahkamah Agung); opsi 50 hari kalender keliru karena penghitungan UU PPHI memakai satuan hari kerja; dan opsi 90 hari kerja sejak anjuran mediator tidak diatur dalam Pasal 103."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 103,
    "category": "Hukum Acara PHI",
    "topicTag": "Jangka Waktu Perundingan Bipartit",
    "question": "Berdasarkan Pasal 3 ayat (2) UU No. 2 Tahun 2004, penyelesaian perselisihan hubungan industrial melalui perundingan bipartit wajib diselesaikan dalam tenggang waktu paling lama...",
    "options": [
      {
        "key": "A",
        "text": "30 hari kerja terhitung sejak tanggal dimulainya perundingan"
      },
      {
        "key": "B",
        "text": "30 hari kalender terhitung sejak perselisihan dilaporkan ke Disnaker"
      },
      {
        "key": "C",
        "text": "20 hari kerja terhitung sejak penandatanganan perjanjian kerja"
      },
      {
        "key": "D",
        "text": "14 hari kerja terhitung sejak pengajuan gugatan ke PHI"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Perundingan bipartit antara pekerja/serikat pekerja dan pengusaha wajib diselesaikan paling lama 30 hari kerja sejak dimulainya perundingan; bila gagal atau salah satu pihak menolak, dianggap gagal dan dicatatkan ke Disnaker.",
      "legalBasis": "Pasal 3 ayat (1)–(3) UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 3 ayat (2): Penyelesaian perselisihan melalui bipartit sebagaimana dimaksud pada ayat (1), harus diselesaikan paling lama 30 (tiga puluh) hari kerja sejak tanggal dimulainya perundingan. Ayat (3): Apabila dalam jangka waktu 30 (tiga puluh) hari sebagaimana dimaksud pada ayat (2) salah satu pihak menolak untuk berunding atau telah dilakukan perundingan tetapi tidak mencapai kesepakatan, maka perundingan bipartit dianggap gagal.",
      "analysis": "Opsi 30 hari kerja terhitung sejak tanggal dimulainya perundingan tepat sesuai Pasal 3 ayat (2) UU No. 2 Tahun 2004. Jika melampaui 30 hari kerja tanpa kesepakatan atau ada penolakan berunding dari salah satu pihak, perundingan dianggap gagal menurut ayat (3) sehingga sengketa dapat dicatatkan ke instansi ketenagakerjaan. Opsi 30 hari kalender sejak dilaporkan ke Disnaker keliru baik pada satuannya (kalender vs kerja) maupun titik mulainya; sedangkan 20 hari kerja dan 14 hari kerja tidak diatur dalam Pasal 3 UU PPHI (14 hari kerja adalah batas waktu pernyataan kasasi dalam Pasal 110)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 104,
    "category": "Hukum Acara PHI",
    "topicTag": "Kompetensi Relatif Pengadilan PHI",
    "question": "Dalam hal upaya mediasi atau konsiliasi tidak mencapai kesepakatan, berdasarkan Pasal 81 UU No. 2 Tahun 2004 gugatan perselisihan hubungan industrial diajukan kepada Pengadilan Hubungan Industrial pada Pengadilan Negeri...",
    "options": [
      {
        "key": "A",
        "text": "Yang daerah hukumnya meliputi tempat kediaman pribadi pekerja menurut KTP"
      },
      {
        "key": "B",
        "text": "Yang daerah hukumnya meliputi domisili kantor pusat pengusaha semata"
      },
      {
        "key": "C",
        "text": "Yang daerah hukumnya meliputi tempat pekerja/buruh bekerja"
      },
      {
        "key": "D",
        "text": "Pengadilan Negeri mana saja di seluruh Indonesia menurut pilihan bebas penggugat"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pasal 81 UU PPHI menentukan kompetensi relatif PHI berdasarkan tempat pekerja/buruh bekerja (lex loci laboris), menyimpangi asas umum actor sequitur forum rei dalam HIR/RBg.",
      "legalBasis": "Pasal 81 jo. Pasal 57 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 81 UU No. 2 Tahun 2004: Gugatan perselisihan hubungan industrial diajukan kepada Pengadilan Hubungan Industrial pada Pengadilan Negeri yang daerah hukumnya meliputi tempat pekerja/buruh bekerja.",
      "analysis": "Opsi Pengadilan Negeri yang daerah hukumnya meliputi tempat pekerja/buruh bekerja tepat sesuai asas khusus kompetensi relatif dalam Pasal 81 UU No. 2 Tahun 2004 guna memudahkan pekerja mengakses peradilan serta mempermudah pemeriksaan alat bukti di lokasi kerja (kantor cabang/pabrik) tanpa harus mengejar domisili kantor pusat perusahaan di kota lain. Opsi tempat tinggal menurut KTP pekerja dan domisili kantor pusat pengusaha keliru karena tidak sesuai rumusan Pasal 81; dan opsi Pengadilan Negeri mana saja melanggar ketentuan kompetensi relatif yang mengikat secara hukum acara."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 10401,
    "category": "Hukum Acara PHI",
    "topicTag": "Daluwarsa Gugatan PHK (Putusan MK 132/PUU-XXIII/2025)",
    "question": "Berdasarkan Pasal 82 UU No. 2 Tahun 2004 sebagaimana telah dimaknai melalui Putusan Mahkamah Konstitusi No. 94/PUU-XXI/2023 dan Putusan MK No. 132/PUU-XXIII/2025, tenggang waktu daluwarsa 1 (satu) tahun untuk mengajukan gugatan Pemutusan Hubungan Kerja (PHK) oleh pekerja ke PHI dihitung sejak...",
    "options": [
      {
        "key": "A",
        "text": "Tahapan mediasi atau konsiliasi dinyatakan gagal atau tidak mencapai kesepakatan"
      },
      {
        "key": "B",
        "text": "Tanggal pekerja pertama kali menandatangani perjanjian kerja waktu tertentu atau tidak tertentu"
      },
      {
        "key": "C",
        "text": "Tanggal putusan pengadilan tata usaha negara mengenai pengawasan ketenagakerjaan berkekuatan hukum tetap"
      },
      {
        "key": "D",
        "text": "30 hari kerja sebelum surat pemberitahuan PHK dikirim oleh pengusaha"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Melalui Putusan MK No. 132/PUU-XXIII/2025 (mempertegas Putusan MK No. 94/PUU-XXI/2023 atas Pasal 82 UU PPHI), daluwarsa 1 tahun pengajuan gugatan PHK ke PHI dihitung sejak tahapan mediasi atau konsiliasi gagal/tidak mencapai kesepakatan, bukan lagi tergerus sejak surat keputusan PHK diterima.",
      "legalBasis": "Pasal 82 UU No. 2 Tahun 2004 tentang PPHI jo. Putusan MK No. 94/PUU-XXI/2023 jo. Putusan MK No. 132/PUU-XXIII/2025.",
      "statuteText": "Pasal 82 UU No. 2 Tahun 2004 sebagaimana dimaknai Putusan MK No. 132/PUU-XXIII/2025: Gugatan oleh pekerja/buruh atas pemutusan hubungan kerja dapat diajukan hanya dalam tenggang waktu 1 (satu) tahun sejak tahapan mediasi atau konsiliasi tidak mencapai kesepakatan (gagal).",
      "analysis": "Opsi sejak tahapan mediasi atau konsiliasi gagal atau tidak mencapai kesepakatan tepat karena Putusan MK No. 132/PUU-XXIII/2025 memandang prosedur wajib pra-litigasi (bipartit dan mediasi/konsiliasi) kerap memakan waktu lama, sehingga tidak adil apabila masa daluwarsa 1 tahun pada Pasal 82 UU PPHI tergerus sejak diterimanya surat PHK sebelum risalah mediasi/konsiliasi selesai diterbitkan. Ketiga opsi lainnya—sejak penandatanganan perjanjian kerja, sejak putusan PTUN, maupun 30 hari sebelum surat PHK—sama sekali tidak berdasar pada Pasal 82 maupun putusan Mahkamah Konstitusi."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 10402,
    "category": "Hukum Acara PHI",
    "topicTag": "Upah Proses PHK (Putusan MK 168/PUU-XXI/2023)",
    "question": "Setelah dikeluarkannya Putusan Mahkamah Konstitusi No. 168/PUU-XXI/2023 (terhadap Pasal 157A ayat (3) UU Ketenagakerjaan sebagaimana diubah UU No. 6 Tahun 2023), batas akhir kewajiban pengusaha membayar upah proses beserta hak-hak pekerja selama perselisihan PHK adalah...",
    "options": [
      {
        "key": "A",
        "text": "Hanya sampai dengan terbitnya anjuran tertulis dari mediator Dinas Tenaga Kerja"
      },
      {
        "key": "B",
        "text": "Sampai berakhirnya proses penyelesaian perselisihan hubungan industrial yang berkekuatan hukum tetap sesuai ketentuan UU PPHI"
      },
      {
        "key": "C",
        "text": "Paling lama 3 bulan saja terhitung sejak pengusaha menerbitkan surat skorsing sepihak"
      },
      {
        "key": "D",
        "text": "Berhenti otomatis pada saat gugatan didaftarkan di Kepaniteraan Pengadilan Hubungan Industrial"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Putusan MK No. 168/PUU-XXI/2023 menegaskan bahwa kewajiban membayar upah proses dalam perselisihan PHK (Pasal 157A ayat (3)) berlaku sampai berakhirnya proses penyelesaian perselisihan hubungan industrial yang berkekuatan hukum tetap (inkracht) sesuai UU PPHI.",
      "legalBasis": "Pasal 157A ayat (1)–(3) UU No. 13 Tahun 2003 jo. UU No. 6 Tahun 2023 jo. Putusan MK No. 168/PUU-XXI/2023.",
      "statuteText": "Putusan MK No. 168/PUU-XXI/2023 menyatakan frasa 'sampai dengan selesainya proses penyelesaian perselisihan hubungan industrial' dalam Pasal 157A ayat (3) harus dimaknai: 'sampai berakhirnya proses penyelesaian perselisihan hubungan industrial yang berkekuatan hukum tetap sesuai dengan ketentuan dalam undang-undang PPHI'.",
      "analysis": "Opsi sampai berakhirnya proses penyelesaian perselisihan hubungan industrial yang berkekuatan hukum tetap sesuai UU PPHI tepat karena Putusan MK No. 168/PUU-XXI/2023 mengakhiri multitafsir setelah UU Cipta Kerja agar hak upah proses tidak terhenti di tengah proses peradilan (baik di PHI maupun kasasi di Mahkamah Agung) hingga putusan benar-benar berkekuatan hukum tetap. Opsi berhenti pada tahap anjuran mediator, dibatasi 3 bulan saat skorsing, maupun berhenti saat gugatan didaftarkan bertentangan dengan perlindungan pekerja dalam Pasal 157A sebagaimana ditafsirkan MK."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 10403,
    "category": "Hukum Acara PHI",
    "topicTag": "Putusan Sela Pembayaran Upah Proses di PHI",
    "question": "Berdasarkan Pasal 96 ayat (1) dan ayat (2) UU No. 2 Tahun 2004, apabila dalam persidangan pertama ternyata pengusaha terbukti secara nyata tidak melaksanakan kewajiban membayar upah beserta hak pekerja selama proses skorsing/PHK, tindakan hukum yang harus segera diambil Hakim Ketua Sidang adalah...",
    "options": [
      {
        "key": "A",
        "text": "Menunda pembayaran upah hingga putusan tingkat kasasi di Mahkamah Agung selesai diperiksa"
      },
      {
        "key": "B",
        "text": "Segera menjatuhkan Putusan Sela pada hari persidangan itu memerintahkan pengusaha membayar upah beserta hak-hak pekerja lainnya"
      },
      {
        "key": "C",
        "text": "Mengembalikan berkas perkara ke mediator untuk dilakukan perundingan bipartit ulang"
      },
      {
        "key": "D",
        "text": "Menyatakan gugatan penggugat gugur apabila pengusaha menolak hadir pada sidang pertama"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 96 UU PPHI mewajibkan Hakim Ketua Sidang menjatuhkan Putusan Sela pada hari persidangan pertama untuk memerintahkan pengusaha membayar upah dan hak pekerja bila terbukti nyata tidak dipenuhi selama proses skorsing/PHK.",
      "legalBasis": "Pasal 96 ayat (1)–(3) UU No. 2 Tahun 2004 tentang PPHI jo. Putusan MK No. 168/PUU-XXI/2023.",
      "statuteText": "Pasal 96 ayat (1) UU No. 2 Tahun 2004: Apabila dalam persidangan pertama, secara nyata-nyata pihak pengusaha terbukti tidak melaksanakan kewajibannya sebagaimana dimaksud dalam Pasal 155 ayat (3) Undang-Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan, Hakim Ketua Sidang harus segera menjatuhkan Putusan Sela berupa perintah kepada pengusaha untuk membayar upah beserta hak-hak lainnya yang biasa diterima pekerja/buruh yang bersangkutan. Ayat (2): Putusan sela sebagaimana dimaksud pada ayat (1) dapat dijatuhkan pada hari persidangan itu.",
      "analysis": "Opsi menjatuhkan Putusan Sela pada hari persidangan itu memerintahkan pembayaran upah tepat karena sesuai langsung dengan instrumen perlindungan darurat pekerja pada Pasal 96 ayat (1) dan ayat (2) UU No. 2 Tahun 2004 (yang jika tidak dilaksanakan pengusaha dalam 7 hari kerja dapat dimintakan penetapan sita jaminan oleh Hakim Ketua Sidang menurut ayat (3)). Opsi penundaan hingga kasasi melanggar sifat mendesak upah untuk penghidupan pekerja; opsi pengembalian ke mediator keliru bila risalah mediasi sudah lengkap; dan opsi gugatan gugur tidak tepat karena gugur hanya dikenakan jika Penggugat yang tidak hadir setelah dipanggil patut."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 10404,
    "category": "Hukum Acara PHI",
    "topicTag": "Ketiadaan Peninjauan Kembali (PK) di PHI",
    "question": "Dalam praktik hukum acara peradilan ketenagakerjaan terkini berdasarkan SEMA No. 3 Tahun 2018 jo. Putusan Mahkamah Konstitusi No. 34/PUU-XVII/2019, bagaimana kedudukan upaya hukum luar biasa Peninjauan Kembali (PK) terhadap putusan perkara di lingkungan Pengadilan Hubungan Industrial?",
    "options": [
      {
        "key": "A",
        "text": "Terbuka terhadap seluruh jenis perkara PHI dalam batas waktu 180 hari sejak putusan berkekuatan hukum tetap"
      },
      {
        "key": "B",
        "text": "Tidak dikenal adanya upaya hukum Peninjauan Kembali dalam perkara PHI sehingga putusan Kasasi Mahkamah Agung merupakan upaya hukum terakhir"
      },
      {
        "key": "C",
        "text": "Hanya boleh diajukan oleh pihak pengusaha apabila nilai gugatan di atas Rp150.000.000,00"
      },
      {
        "key": "D",
        "text": "Diajukan melalui Menteri Ketenagakerjaan sebelum diteruskan ke Pengadilan Tinggi"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "SEMA No. 3 Tahun 2018 dan Putusan MK No. 34/PUU-XVII/2019 menegaskan bahwa dalam perkara PHI tidak terdapat upaya hukum Peninjauan Kembali (PK); putusan kasasi Mahkamah Agung merupakan upaya hukum terakhir demi kepastian cepat hubungan kerja.",
      "legalBasis": "SEMA No. 3 Tahun 2018 (Rumusan Hukum Kamar Perdata Khusus) jo. Putusan MK No. 34/PUU-XVII/2019 jo. Pasal 57 dan Pasal 110 UU No. 2 Tahun 2004.",
      "statuteText": "Rumusan Hukum Kamar Perdata Khusus SEMA No. 3 Tahun 2018 jo. Putusan MK No. 34/PUU-XVII/2019 menegaskan bahwa terhadap perkara Perselisihan Hubungan Industrial tidak terdapat upaya hukum Peninjauan Kembali (PK) karena penyelesaian sengketa ketenagakerjaan dirancang berlangsung cepat dan tuntas hingga tingkat kasasi.",
      "analysis": "Opsi bahwa tidak dikenal upaya hukum PK dalam perkara PHI dan kasasi merupakan upaya hukum terakhir tepat karena telah menjadi pedoman baku Mahkamah Agung melalui SEMA No. 3 Tahun 2018 dan dinyatakan konstitusional oleh Mahkamah Konstitusi dalam Putusan No. 34/PUU-XVII/2019 (serta No. 46/PUU-XVII/2019). Opsi terbuka dengan batas 180 hari menyamakan secara keliru perkara PHI dengan perdata umum UU Mahkamah Agung; opsi syarat khusus bagi pengusaha di atas Rp150 juta keliru karena Rp150 juta adalah batas pembebasan biaya perkara (Pasal 58); dan opsi melalui Menteri Ketenagakerjaan maupun Pengadilan Tinggi keliru karena struktur PHI tidak mengenal tingkat banding maupun campur tangan kementerian dalam yudikatif."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 10405,
    "category": "Hukum Acara PHI",
    "topicTag": "Putusan PHI Tingkat Pertama dan Terakhir",
    "question": "Berdasarkan Pasal 56 huruf b dan huruf d jo. Pasal 109 UU No. 2 Tahun 2004, putusan Pengadilan Hubungan Industrial pada Pengadilan Negeri yang bersifat final pada tingkat pertama dan terakhir (tidak dapat diajukan kasasi) adalah putusan mengenai...",
    "options": [
      {
        "key": "A",
        "text": "Perselisihan hak dan perselisihan pemutusan hubungan kerja (PHK)"
      },
      {
        "key": "B",
        "text": "Perselisihan kepentingan dan perselisihan antar serikat pekerja/serikat buruh dalam satu perusahaan"
      },
      {
        "key": "C",
        "text": "Perselisihan hak dan perselisihan antar serikat pekerja/serikat buruh"
      },
      {
        "key": "D",
        "text": "Perselisihan pemutusan hubungan kerja dan perselisihan kepentingan saja"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 56 jo. Pasal 109 UU PPHI menetapkan bahwa putusan PHI mengenai perselisihan kepentingan dan perselisihan antar serikat pekerja/serikat buruh dalam satu perusahaan bersifat pertama dan terakhir (final, tidak dapat dikasasi).",
      "legalBasis": "Pasal 56 dan Pasal 109 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 56: Pengadilan Hubungan Industrial bertugas dan berwenang memeriksa dan memutus: a. di tingkat pertama mengenai perselisihan hak; b. di tingkat pertama dan terakhir mengenai perselisihan kepentingan; c. di tingkat pertama mengenai perselisihan pemutusan hubungan kerja; d. di tingkat pertama dan terakhir mengenai perselisihan antar serikat pekerja/serikat buruh dalam satu perusahaan. Pasal 109: Putusan Pengadilan Hubungan Industrial pada Pengadilan Negeri mengenai perselisihan kepentingan dan perselisihan antar serikat pekerja/serikat buruh dalam satu perusahaan merupakan putusan akhir dan bersifat tetap.",
      "analysis": "Opsi perselisihan kepentingan dan perselisihan antar serikat pekerja/serikat buruh dalam satu perusahaan tepat karena keduanya secara eksplisit disebut Pasal 56 huruf b dan d serta Pasal 109 UU No. 2 Tahun 2004 sebagai putusan tingkat pertama dan terakhir yang bersifat tetap. Sebaliknya, perselisihan hak dan perselisihan pemutusan hubungan kerja (PHK) diputus di tingkat pertama saja sehingga terhadapnya dapat diajukan kasasi ke Mahkamah Agung dalam 14 hari kerja menurut Pasal 110; oleh karena itu ketiga opsi lain yang mencampur perselisihan hak atau PHK ke dalam kategori final tingkat pertama adalah keliru."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 10406,
    "category": "Hukum Acara PHI",
    "topicTag": "Kompetensi Arbitrase Hubungan Industrial",
    "question": "Menurut Pasal 29 UU No. 2 Tahun 2004, tidak seluruh sengketa ketenagakerjaan dapat diselesaikan melalui Arbiter Hubungan Industrial. Jenis perselisihan yang menjadi kewenangan Arbitrase Hubungan Industrial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Perselisihan hak dan perselisihan pemutusan hubungan kerja (PHK)"
      },
      {
        "key": "B",
        "text": "Perselisihan kepentingan dan perselisihan antar serikat pekerja/serikat buruh hanya dalam satu perusahaan"
      },
      {
        "key": "C",
        "text": "Seluruh empat jenis perselisihan hubungan industrial tanpa pengecualian"
      },
      {
        "key": "D",
        "text": "Perselisihan PHK massal dan perselisihan hak atas upah lembur semata"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 29 UU PPHI membatasi kompetensi arbitrase hubungan industrial hanya pada perselisihan kepentingan dan perselisihan antar serikat pekerja/serikat buruh dalam satu perusahaan.",
      "legalBasis": "Pasal 29 jo. Pasal 1 angka 15 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 29 UU No. 2 Tahun 2004: Penyelesaian perselisihan hubungan industrial melalui arbitrase meliputi perselisihan kepentingan dan perselisihan antar serikat pekerja/serikat buruh hanya dalam satu perusahaan.",
      "analysis": "Opsi perselisihan kepentingan dan perselisihan antar serikat pekerja/serikat buruh hanya dalam satu perusahaan tepat sesuai batas yurisdiksi Pasal 29 UU No. 2 Tahun 2004 (sama dengan dua jenis sengketa yang diputus PHI pada tingkat pertama dan terakhir). Adapun perselisihan hak dan perselisihan PHK tidak dapat diselesaikan melalui jalur arbitrase menurut UU PPHI melainkan hanya dapat melalui mediasi/konsiliasi (khusus PHK) dan gugatan ke PHI; oleh sebab itu opsi yang memasukkan perselisihan hak, PHK, maupun keempat jenis perselisihan adalah keliru."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 10407,
    "category": "Hukum Acara PHI",
    "topicTag": "Pembatalan Putusan Arbitrase PHI ke MA",
    "question": "Terhadap putusan arbitrase hubungan industrial yang diduga mengandung dokumen palsu, tipu muslihat, melampaui kekuasaan arbiter, atau bertentangan dengan peraturan perundang-undangan, salah satu pihak menurut Pasal 52 UU No. 2 Tahun 2004 dapat mengajukan permohonan pembatalan kepada...",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Hubungan Industrial pada Pengadilan Negeri dalam waktu 14 hari kerja"
      },
      {
        "key": "B",
        "text": "Mahkamah Agung dalam waktu selambat-lambatnya 30 hari kerja sejak ditetapkannya putusan arbiter"
      },
      {
        "key": "C",
        "text": "Pengadilan Tinggi setempat dalam waktu 30 hari kalender"
      },
      {
        "key": "D",
        "text": "Menteri Ketenagakerjaan dalam waktu 14 hari kerja sejak salinan diterima"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 52 ayat (1)–(2) UU PPHI mengatur permohonan pembatalan putusan arbitrase diajukan langsung kepada Mahkamah Agung dalam 30 hari kerja sejak ditetapkan putusan arbiter, dan MA memutus dalam 30 hari kerja.",
      "legalBasis": "Pasal 52 ayat (1) dan ayat (2) UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 52 ayat (1): Terhadap putusan arbitrase, salah satu pihak dapat mengajukan permohonan pembatalan kepada Mahkamah Agung dalam waktu selambat-lambatnya 30 (tiga puluh) hari kerja sejak ditetapkannya putusan arbiter, apabila putusan diduga mengandung unsur-unsur sebagai berikut: a. surat atau dokumen yang diajukan dalam pemeriksaan, setelah putusan dijatuhkan, diakui atau dinyatakan palsu; b. setelah putusan diambil ditemukan dokumen yang bersifat menentukan, yang disembunyikan oleh pihak lawan; c. putusan diambil dari tipu muslihat yang dilakukan oleh salah satu pihak dalam pemeriksaan perselisihan; d. putusan melampaui kekuasaan arbiter hubungan industrial; atau e. putusan bertentangan dengan peraturan perundang-undangan.",
      "analysis": "Opsi kepada Mahkamah Agung dalam waktu selambat-lambatnya 30 hari kerja sejak ditetapkannya putusan arbiter tepat karena merupakan kekhususan UU PPHI dibandingkan arbitrase komersial UU No. 30 Tahun 1999 (yang pembatalannya diajukan ke PN). Dalam sengketa hubungan industrial, Pasal 52 secara langsung memberi yurisdiksi kepada Mahkamah Agung untuk memeriksa pembatalan putusan arbiter berdasar lima alasan limitatif tersebut. Opsi ke PHI pada PN, ke Pengadilan Tinggi, maupun ke Menteri Ketenagakerjaan keliru secara kompetensi maupun tenggang waktu."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 10408,
    "category": "Hukum Acara PHI",
    "topicTag": "Finalitas Putusan Arbitrase (Pasal 53 UU PPHI)",
    "question": "Berdasarkan Pasal 53 UU No. 2 Tahun 2004, apabila suatu perselisihan kepentingan atau perselisihan antar serikat pekerja telah diperiksa atau telah diputus melalui Arbitrase Hubungan Industrial, maka akibat hukumnya terhadap pengajuan gugatan ke Pengadilan Hubungan Industrial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Para pihak tetap bebas mengajukan gugatan ulang atas pokok perkara yang sama ke PHI dalam 14 hari"
      },
      {
        "key": "B",
        "text": "Perselisihan tersebut tidak dapat diajukan ke Pengadilan Hubungan Industrial"
      },
      {
        "key": "C",
        "text": "PHI bertindak sebagai pengadilan tingkat banding untuk mengadili ulang putusan arbiter"
      },
      {
        "key": "D",
        "text": "Putusan arbiter otomatis batal apabila salah satu pihak mendaftarkan gugatan di PHI"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 53 UU PPHI melarang sengketa hubungan industrial yang sedang atau telah diselesaikan melalui arbitrase diajukan kembali ke Pengadilan Hubungan Industrial (ne bis in idem jalur pilihan).",
      "legalBasis": "Pasal 53 jo. Pasal 51 ayat (1) UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 53 UU No. 2 Tahun 2004: Perselisihan hubungan industrial yang sedang atau telah diselesaikan melalui arbitrase tidak dapat diajukan ke Pengadilan Hubungan Industrial.",
      "analysis": "Opsi bahwa perselisihan tersebut tidak dapat diajukan ke Pengadilan Hubungan Industrial tepat sesuai Pasal 53 UU No. 2 Tahun 2004 karena pilihan jalur arbitrase menyingkirkan kewenangan mengadili PHI atas pokok perkara yang sama (putarannya bersifat final dan mengikat menurut Pasal 51 ayat (1), kecuali permohonan pembatalan terbatas ke Mahkamah Agung menurut Pasal 52). Ketiga opsi lain yang membolehkan gugatan ulang ke PHI, menjadikan PHI sebagai pengadilan banding, atau membatalkan putusan arbiter secara otomatis bertentangan langsung dengan prinsip finalitas arbitrase."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 10409,
    "category": "Hukum Acara PHI",
    "topicTag": "Komposisi Majelis Hakim PHI",
    "question": "Sesuai Pasal 88 ayat (1) dan ayat (2) UU No. 2 Tahun 2004, Ketua Pengadilan Negeri menetapkan Majelis Hakim Pengadilan Hubungan Industrial selambat-lambatnya 7 hari kerja setelah menerima gugatan, dengan komposisi...",
    "options": [
      {
        "key": "A",
        "text": "3 (tiga) orang Hakim Karier Pengadilan Negeri seluruhnya tanpa unsur eksternal"
      },
      {
        "key": "B",
        "text": "1 (satu) orang Hakim Karier sebagai Ketua Majelis dan 2 (dua) orang Hakim Ad-Hoc masing-masing dari unsur organisasi pengusaha dan serikat pekerja/serikat buruh"
      },
      {
        "key": "C",
        "text": "1 (satu) orang Hakim Ad-Hoc sebagai Ketua Majelis dengan didampingi 2 (dua) orang Mediator Dinas Tenaga Kerja"
      },
      {
        "key": "D",
        "text": "1 (satu) orang Hakim Karier Tunggal tanpa Hakim Anggota untuk seluruh jenis sengketa"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Majelis Hakim PHI terdiri dari komposisi tripartit yudisial: 1 orang Hakim Karier sebagai Ketua Majelis dan 2 orang Hakim Ad-Hoc masing-masing dari unsur serikat pekerja/buruh dan organisasi pengusaha.",
      "legalBasis": "Pasal 88 ayat (1) dan ayat (2) jo. Pasal 59 UU No. 2 Tahun 2004 tentang PPHI.",
      "statuteText": "Pasal 88 ayat (1): Ketua Pengadilan Negeri dalam waktu selambat-lambatnya 7 (tujuh) hari kerja setelah menerima gugatan harus sudah menetapkan Majelis Hakim yang terdiri atas 1 (satu) orang Hakim sebagai Ketua Majelis dan 2 (dua) orang Hakim Ad-Hoc masing-masing sebagai Hakim Anggota. Ayat (2): Hakim Ad-Hoc sebagaimana dimaksud dalam ayat (1) diambil dari unsur penasihat/pengusaha dan unsur serikat pekerja/serikat buruh.",
      "analysis": "Opsi 1 Hakim Karier sebagai Ketua Majelis dan 2 Hakim Ad-Hoc dari unsur organisasi pengusaha serta serikat pekerja tepat sesuai Pasal 88 ayat (1)–(2) UU No. 2 Tahun 2004 agar pemeriksaan perkara mempertimbangkan keseimbangan perspektif hukum positif, kondisi dunia usaha, dan perlindungan ketenagakerjaan. Opsi 3 Hakim Karier mengabaikan ciri khas majelis ad-hoc di PHI; opsi Hakim Ad-Hoc mengetuai Mediator Disnaker keliru karena mediator adalah pejabat eksekutif non-hakim dan Ketua Majelis selalu Hakim Karier; serta opsi Hakim Tunggal keliru karena PHI memeriksa secara majelis."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 10410,
    "category": "Hukum Acara PHI",
    "topicTag": "Kuasa Hukum di PHI (Pasal 87 UU PPHI)",
    "question": "Selain advokat, berdasarkan ketentuan khusus Pasal 87 UU No. 2 Tahun 2004 tentang PPHI, pihak yang diberi hak oleh undang-undang untuk bertindak sebagai kuasa hukum beracara di Pengadilan Hubungan Industrial adalah...",
    "options": [
      {
        "key": "A",
        "text": "Serikat pekerja/serikat buruh dan organisasi pengusaha untuk mewakili anggotanya"
      },
      {
        "key": "B",
        "text": "Pegawai mediator Dinas Tenaga Kerja yang sebelumnya menerbitkan anjuran tertulis"
      },
      {
        "key": "C",
        "text": "Lembaga swadaya masyarakat umum secara bebas tanpa keanggotaan pihak bersengketa"
      },
      {
        "key": "D",
        "text": "Jaksa Pengacara Negara secara otomatis untuk mewakili pekerja swasta"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pasal 87 UU PPHI memberikan hak beracara sebagai kuasa hukum di PHI kepada serikat pekerja/serikat buruh dan organisasi pengusaha khusus untuk mewakili anggotanya, termasuk pada tingkat perusahaan, kabupaten/kota, provinsi, hingga pusat/konfederasi.",
      "legalBasis": "Pasal 87 beserta Penjelasannya UU No. 2 Tahun 2004 tentang PPHI jo. Pasal 18 UU No. 18 Tahun 2003 tentang Advokat.",
      "statuteText": "Pasal 87 UU No. 2 Tahun 2004: Serikat pekerja/serikat buruh dan organisasi pengusaha dapat bertindak sebagai kuasa hukum untuk beracara di Pengadilan Hubungan Industrial untuk mewakili anggotanya.",
      "analysis": "Opsi serikat pekerja/serikat buruh dan organisasi pengusaha untuk mewakili anggotanya tepat sesuai Pasal 87 UU No. 2 Tahun 2004 sebagai pengecualian khusus (lex specialis) pemberian bantuan hukum di PHI agar pekerja maupun pengusaha tidak terbebani biaya kuasa hukum apabila tidak menggunakan advokat. Opsi mediator Disnaker keliru karena mediator wajib bersikap netral dan dilarang menjadi kuasa pihak; opsi LSM umum tanpa hubungan keanggotaan tidak memiliki dasar legitimasi dalam Pasal 87; dan opsi Jaksa Pengacara Negara hanya berwenang mewakili instansi pemerintah/BUMN dalam perkara keperdataan/TUN, bukan pekerja swasta."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 10411,
    "category": "Hukum Acara PHI",
    "topicTag": "Pendaftaran & Eksekusi Perjanjian Bersama (PB)",
    "question": "Apabila perundingan bipartit, mediasi, atau konsiliasi menghasilkan kesepakatan damai yang dituangkan dalam Perjanjian Bersama (PB), tindakan hukum wajib terhadap PB tersebut agar memiliki kekuatan eksekutorial menurut Pasal 7 ayat (1)–(4) UU No. 2 Tahun 2004 adalah...",
    "options": [
      {
        "key": "A",
        "text": "Cukup disimpan di bagian personalia perusahaan tanpa perlu didaftarkan di pengadilan"
      },
      {
        "key": "B",
        "text": "Wajib didaftarkan oleh para pihak di Pengadilan Hubungan Industrial pada Pengadilan Negeri setempat untuk memperoleh akta bukti pendaftaran"
      },
      {
        "key": "C",
        "text": "Diharuskan mendapat pengesahan melalui putusan sela Mahkamah Agung terlebih dahulu"
      },
      {
        "key": "D",
        "text": "Harus dibuat kembali dalam bentuk akta di hadapan Pejabat Pembuat Akta Tanah (PPAT)"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Perjanjian Bersama (PB) mengikat dan menjadi hukum bagi para pihak, serta wajib didaftarkan ke PHI pada PN wilayah dibuatnya PB agar memperoleh akta bukti pendaftaran yang memiliki kekuatan eksekutorial langsung apabila dilanggar.",
      "legalBasis": "Pasal 7 ayat (1)–(6) dan Pasal 13 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.",
      "statuteText": "Pasal 7 ayat (3) UU No. 2 Tahun 2004: Perjanjian Bersama sebagaimana dimaksud pada ayat (1) wajib didaftarkan oleh para pihak yang melakukan perjanjian pada Pengadilan Hubungan Industrial pada Pengadilan Negeri di wilayah para pihak mengadakan Perjanjian Bersama. Ayat (5): Apabila Perjanjian Bersama sebagaimana dimaksud pada ayat (3) dan ayat (4) tidak dilaksanakan oleh salah satu pihak, maka pihak yang dirugikan dapat mengajukan permohonan eksekusi kepada Pengadilan Hubungan Industrial pada Pengadilan Negeri di wilayah Perjanjian Bersama didaftar untuk mendapat penetapan eksekusi.",
      "analysis": "Opsi wajib didaftarkan pada PHI pada Pengadilan Negeri setempat untuk memperoleh akta bukti pendaftaran tepat karena berdasarkan Pasal 7 ayat (3)–(6) UU No. 2 Tahun 2004 pendaftaran tersebut mengubah PB menjadi dokumen berkekuatan eksekutorial setara putusan berkekuatan hukum tetap (dapat dimintakan penetapan eksekusi langsung ke Ketua PN/PHI tanpa gugatan baru jika salah satu pihak wanprestasi). Opsi disimpan di personalia saja keliru karena PB tanpa akta pendaftaran tidak dapat dieksekusi langsung secara yudisial; opsi putusan sela Mahkamah Agung keliru secara jenjang kewenangan; dan opsi akta PPAT keliru karena PPAT khusus mengurusi peralihan hak atas tanah."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 10412,
    "category": "Hukum Acara PHI",
    "topicTag": "Tenggang Waktu Jawaban atas Anjuran Mediator",
    "question": "Setelah mediator atau konsiliator mengeluarkan anjuran tertulis karena tidak tercapainya kesepakatan damai, berdasarkan Pasal 13 ayat (2) huruf c dan d UU No. 2 Tahun 2004, para pihak wajib memberikan jawaban tertulis dalam waktu selambat-lambatnya...",
    "options": [
      {
        "key": "A",
        "text": "7 hari kerja sejak menerima anjuran, dan pihak yang diam dianggap menyetujui"
      },
      {
        "key": "B",
        "text": "10 hari kerja setelah menerima anjuran, dan pihak yang tidak memberikan pendapat dianggap menolak anjuran"
      },
      {
        "key": "C",
        "text": "14 hari kalender sejak tanggal sidang mediasi pertama berlangsung"
      },
      {
        "key": "D",
        "text": "30 hari kerja sejak surat pemberitahuan pencatatan disampaikan ke perusahaan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 13 ayat (2) huruf c dan d UU PPHI memberi tenggang waktu 10 hari kerja bagi para pihak untuk menjawab anjuran tertulis mediator; sikap diam (tidak memberi jawaban) dalam batas tersebut dianggap menolak anjuran.",
      "legalBasis": "Pasal 13 ayat (2) huruf c–e jo. Pasal 23 ayat (2) UU No. 2 Tahun 2004 tentang PPHI.",
      "statuteText": "Pasal 13 ayat (2) huruf c: Para pihak harus sudah memberikan jawaban secara tertulis kepada mediator yang isinya menyetujui atau menolak anjuran tertulis dalam waktu selambat-lambatnya 10 (sepuluh) hari kerja setelah menerima anjuran tertulis. Huruf d: Pihak yang tidak memberikan pendapatnya sebagaimana dimaksud pada huruf c dianggap menolak anjuran tertulis.",
      "analysis": "Opsi 10 hari kerja setelah menerima anjuran dan sikap tidak memberi pendapat dianggap menolak anjuran tepat karena sesuai langsung dengan teks Pasal 13 ayat (2) huruf c dan d UU No. 2 Tahun 2004 (berlaku mutatis mutandis bagi anjuran konsiliator pada Pasal 23). Bila disetujui kedua pihak, dalam 3 hari kerja mediator membantu menuangkannya menjadi Perjanjian Bersama; bila ditolak oleh salah satu atau kedua pihak, terbuka hak mengajukan gugatan ke PHI. Opsi 7 hari kerja dengan anggapan diam sebagai persetujuan membalikkan makna hukum huruf d; sedangkan opsi 14 hari kalender maupun 30 hari kerja bukan merupakan batas waktu tanggapan anjuran."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 10413,
    "category": "Hukum Acara PHI",
    "topicTag": "Batas Waktu Penyelesaian Tugas Mediator",
    "question": "Dalam menyelesaikan perselisihan hubungan industrial melalui jalur mediasi di instansi yang bertanggung jawab di bidang ketenagakerjaan, mediator menurut Pasal 15 UU No. 2 Tahun 2004 wajib menyelesaikan tugasnya paling lama...",
    "options": [
      {
        "key": "A",
        "text": "7 hari kerja sejak tanggal pengajuan gugatan ke Pengadilan Negeri"
      },
      {
        "key": "B",
        "text": "10 hari kalender sejak dimulainya perundingan bipartit"
      },
      {
        "key": "C",
        "text": "30 hari kerja terhitung sejak menerima pelimpahan penyelesaian perselisihan"
      },
      {
        "key": "D",
        "text": "50 hari kerja terhitung sejak berlakunya perjanjian kerja bersama"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pasal 15 UU PPHI mewajibkan mediator menyelesaikan tugas mediasi selambat-lambatnya dalam waktu 30 hari kerja terhitung sejak menerima pelimpahan penyelesaian perselisihan.",
      "legalBasis": "Pasal 15 jo. Pasal 10 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 15 UU No. 2 Tahun 2004: Mediator menyelesaikan tugasnya dalam waktu selambat-lambatnya 30 (tiga puluh) hari kerja terhitung sejak menerima pelimpahan penyelesaian perselisihan sebagaimana dimaksud dalam Pasal 4 ayat (4).",
      "analysis": "Opsi 30 hari kerja terhitung sejak menerima pelimpahan penyelesaian perselisihan tepat sesuai Pasal 15 UU No. 2 Tahun 2004 (dengan kewajiban awal melakukan penelitian duduk perkara dan membuka sidang mediasi selambat-lambatnya 7 hari kerja menurut Pasal 10). Opsi 7 hari kerja sejak gugatan ke PN keliru karena itu merupakan tenggang waktu penetapan Majelis Hakim PHI (Pasal 88); opsi 10 hari kalender keliru karena 10 hari kerja adalah tenggang waktu mengeluarkan dan menjawab anjuran (Pasal 13); dan opsi 50 hari kerja keliru karena merupakan batas waktu putusan Majelis Hakim PHI (Pasal 103)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 10414,
    "category": "Hukum Acara PHI",
    "topicTag": "Definisi Perselisihan Kepentingan",
    "question": "Berdasarkan Pasal 1 angka 3 UU No. 2 Tahun 2004, perselisihan hubungan industrial yang timbul akibat tidak adanya kesesuaian pendapat mengenai pembuatan dan/atau perubahan syarat-syarat kerja dalam perjanjian kerja, peraturan perusahaan, atau perjanjian kerja bersama disebut...",
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
        "text": "Perselisihan pemutusan hubungan kerja (PHK)"
      },
      {
        "key": "D",
        "text": "Perselisihan antar serikat pekerja dalam satu perusahaan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Perselisihan yang menyangkut pembuatan atau perubahan syarat-syarat kerja (seperti perundingan kenaikan tunjangan baru atau draf PKB) adalah perselisihan kepentingan (interest dispute).",
      "legalBasis": "Pasal 1 angka 3 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 1 angka 3 UU No. 2 Tahun 2004: Perselisihan kepentingan adalah perselisihan yang timbul dalam hubungan kerja karena tidak adanya kesesuaian pendapat mengenai pembuatan, dan/atau perubahan syarat-syarat kerja yang ditetapkan dalam perjanjian kerja, atau peraturan perusahaan, atau perjanjian kerja bersama.",
      "analysis": "Opsi perselisihan kepentingan tepat sesuai Pasal 1 angka 3 UU No. 2 Tahun 2004, yakni sengketa pembentukan norma kerja baru yang belum menjadi hak mengikat (sehingga putusan PHI bersifat tingkat pertama dan terakhir). Opsi perselisihan hak (Pasal 1 angka 2) terjadi bila hak yang sudah ada tidak dipenuhi akibat perbedaan pelaksanaan/penafsiran; opsi perselisihan PHK (Pasal 1 angka 4) menyangkut pengakhiran hubungan kerja; dan opsi perselisihan antar serikat pekerja (Pasal 1 angka 5) terjadi antara sesama serikat pekerja/buruh dalam satu perusahaan."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 10415,
    "category": "Hukum Acara PHI",
    "topicTag": "Perselisihan Antar Serikat Pekerja/Buruh",
    "question": "Sesuai Pasal 1 angka 5 UU No. 2 Tahun 2004, syarat esensial agar suatu sengketa organisasi pekerja termasuk dalam kompetensi 'perselisihan antar serikat pekerja/serikat buruh' menurut hukum acara PHI adalah...",
    "options": [
      {
        "key": "A",
        "text": "Perselisihan terjadi antar serikat pekerja pada perusahaan yang berbeda lintas provinsi mengenai iuran konfederasi"
      },
      {
        "key": "B",
        "text": "Perselisihan terjadi hanya dalam satu perusahaan akibat ketidaksesuaian paham mengenai keanggotaan, pelaksanaan hak, dan kewajiban keserikatpekerjaan"
      },
      {
        "key": "C",
        "text": "Perselisihan melibatkan penggelapan dana kas serikat pekerja sebagai tindak pidana umum"
      },
      {
        "key": "D",
        "text": "Perselisihan menyangkut pembubaran serikat pekerja oleh pemerintah karena pelanggaran administratif"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 1 angka 5 UU PPHI mensyaratkan perselisihan antar serikat pekerja/serikat buruh terjadi 'hanya dalam satu perusahaan' mengenai keanggotaan serta pelaksanaan hak dan kewajiban keserikatpekerjaan.",
      "legalBasis": "Pasal 1 angka 5 jo. Pasal 2 huruf d UU No. 2 Tahun 2004 tentang PPHI.",
      "statuteText": "Pasal 1 angka 5 UU No. 2 Tahun 2004: Perselisihan antar serikat pekerja/serikat buruh adalah perselisihan antara serikat pekerja/serikat buruh dengan serikat pekerja/serikat buruh lain hanya dalam satu perusahaan, karena tidak adanya persesuaian paham mengenai keanggotaan, pelaksanaan hak, dan kewajiban keserikatpekerjaan.",
      "analysis": "Opsi perselisihan yang terjadi hanya dalam satu perusahaan mengenai keanggotaan serta pelaksanaan hak dan kewajiban keserikatpekerjaan tepat karena mencerminkan pembatasan tegas Pasal 1 angka 5 dan Pasal 2 huruf d UU No. 2 Tahun 2004 (misalnya sengketa representasi keanggotaan untuk perundingan PKB). Opsi lintas perusahaan yang berbeda bukan kompetensi PHI dalam konteks Pasal 1 angka 5; opsi tindak pidana penggelapan merupakan wewenang penyidik Polri dan peradilan pidana; dan opsi pembubaran organisasi akibat keputusan administratif tunduk pada UU Serikat Pekerja/Serikat Buruh serta prosedur khusus pengadilan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 10416,
    "category": "Hukum Acara PHI",
    "topicTag": "Pemeriksaan Acara Cepat PHI",
    "question": "Apabila terdapat kepentingan para pihak yang cukup mendesak sehingga permohonan pemeriksaan acara cepat dikabulkan di PHI berdasarkan Pasal 98 dan Pasal 99 UU No. 2 Tahun 2004, batas waktu maksimal untuk tahapan jawaban dan pembuktian masing-masing pihak ditentukan...",
    "options": [
      {
        "key": "A",
        "text": "Tidak melebihi 7 hari kalender bagi kedua belah pihak secara bersama"
      },
      {
        "key": "B",
        "text": "Tidak melebihi 14 hari kerja bagi masing-masing pihak"
      },
      {
        "key": "C",
        "text": "Paling lama 30 hari kerja untuk jawaban dan 30 hari kerja untuk pembuktian"
      },
      {
        "key": "D",
        "text": "Tidak dibatasi tenggang waktu dan diserahkan sepenuhnya pada kesepakatan advokat"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Dalam pemeriksaan acara cepat PHI (Pasal 98–99 UU PPHI), Ketua PN menetapkan majelis dan hari sidang dalam 7 hari kerja tanpa prosedur pemeriksaan biasa yang berbelit, dengan tenggang waktu jawaban dan pembuktian masing-masing maksimal 14 hari kerja.",
      "legalBasis": "Pasal 98 dan Pasal 99 ayat (1)–(2) UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 99 ayat (1): Dalam hal permohonan sebagaimana dimaksud dalam Pasal 98 ayat (1) dikabulkan, Ketua Pengadilan Negeri dalam jangka waktu 7 (tujuh) hari kerja setelah dikeluarkannya penetapan sebagaimana dimaksud dalam Pasal 98 ayat (2), menentukan majelis hakim, hari, tempat, dan waktu sidang tanpa melalui prosedur pemeriksaan. Ayat (2): Tenggang waktu untuk jawaban dan pembuktian kedua belah pihak, masing-masing ditentukan tidak melebihi 14 (empat belas) hari kerja.",
      "analysis": "Opsi tidak melebihi 14 hari kerja bagi masing-masing pihak tepat sesuai ketentuan normatif Pasal 99 ayat (2) UU No. 2 Tahun 2004, yang mempercepat penyelesaian sengketa ketenagakerjaan mendesak jauh di bawah batas normal 50 hari kerja. Opsi 7 hari kalender keliru karena 7 hari kerja dalam Pasal 99 ayat (1) adalah waktu bagi Ketua Pengadilan Negeri untuk menetapkan majelis dan hari sidang; opsi 30 hari kerja untuk masing-masing tahap justru melampaui batas maksimal keseluruhan perkara biasa (50 hari kerja pada Pasal 103); dan opsi tanpa batas waktu bertentangan dengan sifat acara cepat yang imperatif."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 10417,
    "category": "Hukum Acara PHI",
    "topicTag": "Batas Waktu Pemeriksaan Kasasi PHI di MA",
    "question": "Dalam rangka menjamin penyelesaian sengketa ketenagakerjaan yang cepat dan pasti di tingkat peradilan tertinggi, Pasal 115 UU No. 2 Tahun 2004 mewajibkan Mahkamah Agung memutus perkara kasasi perselisihan hak atau PHK dalam waktu selambat-lambatnya...",
    "options": [
      {
        "key": "A",
        "text": "14 hari kerja terhitung sejak putusan PHI tingkat pertama dibacakan"
      },
      {
        "key": "B",
        "text": "30 hari kerja terhitung sejak tanggal penerimaan permohonan kasasi"
      },
      {
        "key": "C",
        "text": "50 hari kerja terhitung sejak memori kasasi didaftarkan di Kepaniteraan PN"
      },
      {
        "key": "D",
        "text": "90 hari kalender terhitung sejak berkas perkara diterima di Kepaniteraan MA"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 115 UU PPHI menetapkan tenggang waktu penyelesaian perkara kasasi perselisihan hak dan PHK pada Mahkamah Agung selambat-lambatnya 30 hari kerja sejak tanggal penerimaan permohonan kasasi.",
      "legalBasis": "Pasal 115 jo. Pasal 110 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 115 UU No. 2 Tahun 2004: Penyelesaian perselisihan hak atau perselisihan pemutusan hubungan kerja pada Mahkamah Agung selambat-lambatnya 30 (tiga puluh) hari kerja terhitung sejak tanggal penerimaan permohonan kasasi.",
      "analysis": "Opsi 30 hari kerja terhitung sejak tanggal penerimaan permohonan kasasi tepat sesuai rumusan Pasal 115 UU No. 2 Tahun 2004 yang membatasi durasi pemeriksaan tingkat kasasi guna menghindari terkatung-katungnya status pekerja dan kewajiban upah proses pengusaha. Opsi 14 hari kerja sejak putusan dibacakan adalah batas pengajuan pernyataan kasasi (Pasal 110) sekaligus batas pengiriman berkas oleh Sub-Kepaniteraan PHI ke MA (Pasal 112); opsi 50 hari kerja adalah batas putusan tingkat pertama di PHI (Pasal 103); dan opsi 90 hari kalender tidak dikenal dalam Pasal 115 UU PPHI."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 10418,
    "category": "Hukum Acara PHI",
    "topicTag": "Prioritas Pemeriksaan Gugatan Gabungan (Pasal 86)",
    "question": "Dalam hal sebuah gugatan yang diajukan ke Pengadilan Hubungan Industrial menggabungkan perselisihan hak dan/atau perselisihan kepentingan yang diikuti dengan perselisihan pemutusan hubungan kerja (PHK), ketentuan wajib bagi Majelis Hakim menurut Pasal 86 UU No. 2 Tahun 2004 adalah...",
    "options": [
      {
        "key": "A",
        "text": "Mengembalikan gugatan karena penggabungan jenis perselisihan dilarang mutlak oleh UU PPHI"
      },
      {
        "key": "B",
        "text": "Memutus terlebih dahulu perkara perselisihan hak dan/atau perselisihan kepentingan sebelum memutus perselisihan PHK"
      },
      {
        "key": "C",
        "text": "Memutus perkara perselisihan PHK terlebih dahulu sambil mengabaikan tuntutan perselisihan hak"
      },
      {
        "key": "D",
        "text": "Memecah perkara sehingga perselisihan hak diadili oleh Pengadilan Tata Usaha Negara"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 86 UU PPHI membolehkan penggabungan perselisihan hak/kepentingan dengan PHK dengan syarat Majelis Hakim wajib memutus terlebih dahulu perselisihan hak dan/atau perselisihan kepentingan tersebut.",
      "legalBasis": "Pasal 86 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 86 UU No. 2 Tahun 2004: Dalam hal perselisihan hak dan/atau perselisihan kepentingan diikuti dengan perselisihan pemutusan hubungan kerja, maka Pengadilan Hubungan Industrial wajib memutus terlebih dahulu perkara perselisihan hak dan/atau perselisihan kepentingan.",
      "analysis": "Opsi memutus terlebih dahulu perselisihan hak dan/atau perselisihan kepentingan tepat sesuai Pasal 86 UU No. 2 Tahun 2004 karena kejelasan atas pemenuhan hak normatif atau syarat kerja sering menjadi landasan faktual untuk menilai sah atau tidaknya alasan PHK dan perhitungan pesangonnya (misalnya bila terkait perselisihan kepentingan yang bersifat final sekaligus terpisah jalur upaya hukumnya dari PHK yang dapat dikasasi). Opsi mengembalikan gugatan karena larangan penggabungan keliru karena justru Pasal 86 mengakui kumulasi terbatas tersebut; opsi mendahulukan PHK sambil mengabaikan hak bertentangan dengan asas mengadili seluruh petitum; dan opsi pelimpahan ke PTUN keliru karena sengketa pekerja swasta bukan kompetensi TUN."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 10419,
    "category": "Hukum Acara PHI",
    "topicTag": "Pengiriman Berkas Kasasi PHI ke Mahkamah Agung",
    "question": "Setelah menerima permohonan kasasi terhadap putusan Pengadilan Hubungan Industrial dalam perkara perselisihan hak atau PHK, Sub-Kepaniteraan PHI pada Pengadilan Negeri menurut Pasal 112 UU No. 2 Tahun 2004 wajib menyampaikan berkas perkara kepada Ketua Mahkamah Agung selambat-lambatnya...",
    "options": [
      {
        "key": "A",
        "text": "14 hari kerja terhitung sejak tanggal penerimaan permohonan kasasi"
      },
      {
        "key": "B",
        "text": "30 hari kalender setelah memori dan kontra memori kasasi selesai dibuat"
      },
      {
        "key": "C",
        "text": "60 hari kerja melalui Pengadilan Tinggi sebagai perantara"
      },
      {
        "key": "D",
        "text": "7 hari kerja sebelum pemeriksaan sidang pendahuluan di PHI"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pasal 112 UU PPHI mewajibkan Sub-Kepaniteraan PHI pada Pengadilan Negeri mengirimkan berkas perkara kasasi langsung ke Ketua Mahkamah Agung paling lambat 14 hari kerja sejak diterimanya permohonan kasasi.",
      "legalBasis": "Pasal 112 jo. Pasal 111 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 112 UU No. 2 Tahun 2004: Sub Kepaniteraan Pengadilan Hubungan Industrial pada Pengadilan Negeri dalam waktu selambat-lambatnya 14 (empat belas) hari kerja terhitung sejak tanggal penerimaan permohonan kasasi harus sudah menyampaikan berkas perkara kepada Ketua Mahkamah Agung.",
      "analysis": "Opsi 14 hari kerja terhitung sejak tanggal penerimaan permohonan kasasi tepat sesuai ketentuan akselerasi administrasi perkara dalam Pasal 112 UU No. 2 Tahun 2004 agar seluruh mata rantai pemeriksaan kasasi tidak melambat. Berbeda dari perkara perdata biasa yang berkasnya bisa memakan waktu lebih panjang termasuk penyerahan memori dan kontra memori kasasi berjenjang, UU PPHI menetapkan jadwal ketat sejak pernyataan kasasi (14 hari kerja) hingga pengiriman berkas (14 hari kerja) dan putusan MA (30 hari kerja). Opsi 30 hari kalender, perantaraan Pengadilan Tinggi selama 60 hari kerja (PHI tidak mengenal PT), maupun 7 hari sebelum sidang pendahuluan adalah keliru."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 10420,
    "category": "Hukum Acara PHI",
    "topicTag": "Dasar Pertimbangan Hakim PHI (Pasal 100)",
    "question": "Dalam mengambil putusan atas suatu perselisihan hubungan industrial, menurut Pasal 100 UU No. 2 Tahun 2004 terdapat 4 (empat) unsur dasar yang wajib dipertimbangkan oleh Majelis Hakim PHI, yaitu...",
    "options": [
      {
        "key": "A",
        "text": "Hukum, perjanjian yang ada, kebiasaan, dan keadilan"
      },
      {
        "key": "B",
        "text": "Undang-undang saja tanpa boleh mempertimbangkan kebiasaan perusahaan maupun perjanjian"
      },
      {
        "key": "C",
        "text": "Instruksi tertulis Menteri Ketenagakerjaan, anjuran mediator yang tidak mengikat, serta kepentingan pemodal"
      },
      {
        "key": "D",
        "text": "Pendapat hukum serikat buruh nasional, putusan arbitrase komersial luar negeri, dan surat edaran pajak"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pasal 100 UU PPHI menetapkan empat sumber pertimbangan Majelis Hakim PHI dalam memutus perkara: hukum, perjanjian yang ada, kebiasaan, dan keadilan.",
      "legalBasis": "Pasal 100 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.",
      "statuteText": "Pasal 100 UU No. 2 Tahun 2004: Dalam mengambil putusan, Majelis Hakim mempertimbangkan hukum, perjanjian yang ada, kebiasaan, dan keadilan.",
      "analysis": "Opsi hukum, perjanjian yang ada, kebiasaan, dan keadilan tepat karena merujuk secara utuh pada rumusan Pasal 100 UU No. 2 Tahun 2004, yang memberi ruang bagi hakim menilai kontrak kerja/peraturan perusahaan/PKB serta kebiasaan industri setempat secara adil selain peraturan perundang-undangan. Opsi yang membatasi hanya pada undang-undang melanggar sifat otonom hubungan kerja yang juga bersumber dari perjanjian dan kebiasaan baik; sementara instruksi menteri, kepentingan pemodal semata, maupun arbitrase komersial luar negeri bukan merupakan empat tolok ukur normatif dalam Pasal 100."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 10421,
    "category": "Hukum Acara PHI",
    "topicTag": "Persidangan Elektronik (e-Court / e-Litigasi) di PHI",
    "question": "Berdasarkan Pasal 57 UU No. 2 Tahun 2004 jo. PERMA No. 1 Tahun 2019 dan PERMA No. 7 Tahun 2022, bagaimana penerapan sistem peradilan elektronik (e-Court dan e-Litigasi) dalam perkara perselisihan hubungan industrial di PHI pada Pengadilan Negeri?",
    "options": [
      {
        "key": "A",
        "text": "Diterapkan dalam pendaftaran, pemanggilan, jawab-jinawab, dan pengucapan putusan elektronik di lingkungan Peradilan Umum tempat PHI berada, dengan tetap memberlakukan pembebasan biaya perkara bila nilai gugatan di bawah Rp150.000.000,00"
      },
      {
        "key": "B",
        "text": "Dilarang sama sekali di PHI karena sengketa ketenagakerjaan hanya boleh disidangkan secara lisan konvensional"
      },
      {
        "key": "C",
        "text": "Mewajibkan pekerja membayar biaya perkara secara penuh melalui e-Payment meskipun nilai gugatannya di bawah Rp150.000.000,00"
      },
      {
        "key": "D",
        "text": "Menghapus kewajiban melampirkan risalah mediasi atau konsiliasi apabila gugatan diajukan melalui portal e-Court"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Karena PHI berada pada Pengadilan Negeri dalam lingkungan Peradilan Umum yang tunduk pada hukum acara perdata (Pasal 57 UU PPHI), sistem e-Court dan e-Litigasi (PERMA No. 1 Tahun 2019 jo. PERMA No. 7 Tahun 2022) berlaku di PHI tanpa menghapus hak pembebasan biaya perkara di bawah Rp150 juta maupun syarat risalah mediasi.",
      "legalBasis": "Pasal 55, Pasal 57, Pasal 58, dan Pasal 83 UU No. 2 Tahun 2004 jo. PERMA No. 1 Tahun 2019 jo. PERMA No. 7 Tahun 2022.",
      "statuteText": "Pasal 57 UU No. 2 Tahun 2004: Hukum acara yang berlaku pada Pengadilan Hubungan Industrial adalah Hukum Acara Perdata yang berlaku pada Pengadilan dalam lingkungan Peradilan Umum, kecuali yang diatur secara khusus dalam undang-undang ini.",
      "analysis": "Opsi mengenai penerapan e-Court dan e-Litigasi di PHI dengan tetap menjaga hak pembebasan biaya perkara di bawah Rp150.000.000,00 tepat karena Pasal 57 UU No. 2 Tahun 2004 memberlakukan hukum acara perdata Peradilan Umum (termasuk modernisasi PERMA No. 1 Tahun 2019 jo. PERMA No. 7 Tahun 2022) sepanjang tidak menyimpangi kekhususan UU PPHI seperti pembebasan biaya perkara (Pasal 58) dan lampiran risalah mediasi/konsiliasi (Pasal 83). Opsi pelarangan total keliru karena justru perkara PHI di PN saat ini aktif didaftarkan melalui e-Court; opsi pemaksaan e-Payment melanggar Pasal 58; dan opsi penghapusan risalah mediasi melalui e-Court melanggar syarat formil imperatif Pasal 83 ayat (1)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 105,
    "category": "Hukum Acara PTUN",
    "topicTag": "Alat Bukti Sah PTUN",
    "question": "Berdasarkan Pasal 100 ayat (1) UU No. 5 Tahun 1986, rangkaian alat bukti yang sah dalam pemeriksaan sengketa Tata Usaha Negara di PTUN terdiri atas...",
    "options": [
      {
        "key": "A",
        "text": "Surat atau tulisan, keterangan saksi, dan sumpah pemutus saja"
      },
      {
        "key": "B",
        "text": "Surat atau tulisan, keterangan ahli, dan petunjuk jaksa"
      },
      {
        "key": "C",
        "text": "Keterangan saksi, pengakuan terdakwa, dan pemeriksaan setempat saja"
      },
      {
        "key": "D",
        "text": "Surat atau tulisan, keterangan ahli, keterangan saksi, pengakuan para pihak, dan pengetahuan hakim"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pasal 100 ayat (1) UU PTUN menetapkan secara limitatif 5 alat bukti sah di PTUN, yakni surat/tulisan, keterangan ahli, keterangan saksi, pengakuan para pihak, dan pengetahuan hakim.",
      "legalBasis": "Pasal 100 ayat (1) jo. Pasal 107 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "statuteText": "Alat bukti ialah: a. surat atau tulisan; b. keterangan ahli; c. keterangan saksi; d. pengakuan para pihak; e. pengetahuan hakim.",
      "analysis": "Opsi yang mencakup surat atau tulisan, keterangan ahli, keterangan saksi, pengakuan para pihak, dan pengetahuan hakim tepat karena sesuai persis dengan lima jenis alat bukti limitatif dalam Pasal 100 ayat (1) UU No. 5 Tahun 1986. Berbeda dari hukum acara perdata (Pasal 164 HIR / Pasal 284 RBg) yang mengenal persangkaan dan sumpah, PTUN secara khusus mengakomodasi alat bukti pengetahuan hakim (wetenschap van de rechter) guna mendukung prinsip pembuktian bebas (Pasal 107). Opsi mengenai sumpah pemutus salah karena sumpah merupakan instrumen pembuktian perdata; opsi yang menyebut petunjuk jaksa dan pengakuan terdakwa salah karena merupakan alat bukti perkara pidana (Pasal 184 KUHAP)."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 106,
    "category": "Hukum Acara PTUN",
    "topicTag": "Putusan Tidak Memenuhi Syarat Formil",
    "question": "Apabila putusan Pengadilan Tata Usaha Negara tidak memuat salah satu ketentuan isi putusan sebagaimana diwajibkan dalam Pasal 109 ayat (1) UU No. 5 Tahun 1986 (seperti kepala putusan atau alasan hukum), akibat hukumnya menurut Pasal 109 ayat (2) adalah...",
    "options": [
      {
        "key": "A",
        "text": "Putusan tetap sah dan wajib langsung dieksekusi oleh Pejabat Tata Usaha Negara"
      },
      {
        "key": "B",
        "text": "Putusan cukup diperbaiki secara lisan oleh panitera tanpa upaya hukum"
      },
      {
        "key": "C",
        "text": "Dapat menyebabkan batalnya putusan Pengadilan"
      },
      {
        "key": "D",
        "text": "Perkara otomatis gugur demi hukum sebelum pembacaan amar"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Tidak dipenuhinya salah satu syarat isi putusan dalam Pasal 109 ayat (1) UU PTUN dapat menyebabkan batalnya putusan Pengadilan sebagaimana diatur dalam Pasal 109 ayat (2).",
      "legalBasis": "Pasal 109 ayat (1) dan ayat (2) jo. Pasal 108 ayat (3) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "statuteText": "Pasal 109 ayat (1): Putusan Pengadilan harus memuat: a. kepala putusan yang berbunyi: 'DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA'; b. nama, jabatan, kewarganegaraan, tempat kediaman, atau tempat kedudukan para pihak yang bersengketa; c. ringkasan gugatan dan jawaban tergugat yang jelas; d. pertimbangan dan penilaian setiap bukti yang diajukan dan hal yang terjadi dalam persidangan selama sengketa itu diperiksa; e. alasan hukum yang menjadi dasar putusan; f. amar putusan tentang sengketa dan biaya perkara; g. hari, tanggal putusan, nama Hakim yang memutus, nama Panitera, serta keterangan tentang hadir atau tidak hadirnya para pihak. Ayat (2): Tidak dipenuhinya salah satu ketentuan sebagaimana dimaksud dalam ayat (1) dapat menyebabkan batalnya putusan Pengadilan.",
      "analysis": "Opsi mengenai akibat dapat menyebabkan batalnya putusan Pengadilan tepat karena merujuk langsung pada norma Pasal 109 ayat (2) UU No. 5 Tahun 1986. Frasa 'dapat menyebabkan batalnya putusan' berbeda dengan Pasal 108 ayat (3) UU PTUN yang mengancam putusan menjadi 'tidak sah dan tidak mempunyai kekuatan hukum' apabila tidak diucapkan dalam sidang terbuka untuk umum. Opsi yang menyatakan putusan tetap sah maupun cukup diperbaiki secara lisan oleh panitera keliru karena cacat formil muatan putusan menjadi dasar pembatalan pada tingkat banding atau kasasi, sedangkan opsi perkara gugur demi hukum keliru karena gugatan gugur hanya terjadi apabila penggugat atau kuasanya tidak hadir setelah dipanggil patut (Pasal 71)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 107,
    "category": "Hukum Acara PTUN",
    "topicTag": "Syarat Tertulis KTUN",
    "question": "Dalam kualifikasi Keputusan Tata Usaha Negara (KTUN) klasik menurut UU PTUN, syarat bahwa suatu penetapan harus bersifat 'tertulis' terutama dimaksudkan untuk...",
    "options": [
      {
        "key": "A",
        "text": "Persyaratan seremonial tata persuratan kementerian semata"
      },
      {
        "key": "B",
        "text": "Mengharuskan setiap keputusan ditandatangani langsung oleh menteri atau presiden"
      },
      {
        "key": "C",
        "text": "Memudahkan segi pembuktian di muka pengadilan mengenai badan/pejabat penerbit dan isinya"
      },
      {
        "key": "D",
        "text": "Membatasi gugatan PTUN hanya terhadap surat keputusan bernomor registrasi khusus"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Syarat tertulis pada KTUN bertujuan memudahkan pembuktian di pengadilan, termasuk memo atau nota dinas sepanjang jelas pejabat penerbit, maksud, dan pihak yang dituju, serta kini diperluas meliputi tindakan faktual oleh UU Administrasi Pemerintahan.",
      "legalBasis": "Penjelasan Pasal 1 angka 3 UU No. 5 Tahun 1986 jo. Pasal 1 angka 9 UU No. 51 Tahun 2009 jo. Pasal 87 huruf a UU No. 30 Tahun 2014.",
      "statuteText": "Istilah 'penetapan tertulis' terutama menunjuk kepada isi dan bukan kepada bentuk keputusan yang dikeluarkan oleh Badan atau Pejabat Tata Usaha Negara. Keputusan itu memang diharuskan tertulis, namun yang disyaratkan tertulis bukanlah bentuk formalnya seperti surat keputusan pengangkatan dan sebagainya. Persyaratan tertulis itu diharuskan untuk kemudahan segi pembuktian. Oleh karena itu sebuah memo atau nota dapat memenuhi syarat tertulis tersebut dan akan merupakan suatu Keputusan Badan atau Pejabat Tata Usaha Negara menurut Undang-undang ini apabila sudah jelas: a. Badan atau Pejabat Tata Usaha Negara mana yang mengeluarkannya; b. maksud serta mengenai hal apa isi tulisan itu; c. kepada siapa tulisan itu ditujukan dan apa yang ditetapkan di dalamnya.",
      "analysis": "Opsi mengenai kemudahan segi pembuktian tepat sesuai Penjelasan resmi Pasal 1 angka 3 UU No. 5 Tahun 1986 (yang tetap berlaku atas Pasal 1 angka 9 UU No. 51 Tahun 2009). Bahkan pasca berlakunya Pasal 87 huruf a UU No. 30 Tahun 2014 jo. PERMA No. 2 Tahun 2019, penetapan tertulis turut dimaknai mencakup tindakan faktual pemerintahan (onrechtmatige overheidsdaad) serta keputusan elektronik. Opsi seremonial persuratan, keharusan tanda tangan menteri/presiden, maupun syarat nomor registrasi formal keliru karena hukum administrasi menilai substansi wewenang dan akibat hukumnya, sehingga disposisi atau nota pun dapat dikualifikasikan sebagai KTUN."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 108,
    "category": "Hukum Acara PTUN",
    "topicTag": "Fundamentum Petendi di PTUN",
    "question": "Dalam menyusun fundamentum petendi (posita gugatan) pada kompetensi absolut Peradilan Tata Usaha Negara, prinsip pokok yang wajib terpenuhi adalah...",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan PTUN tidak berwenang memeriksa keabsahan tindakan administrasi pejabat negara"
      },
      {
        "key": "B",
        "text": "Posita harus mendalilkan wanprestasi dalam kontrak sewa-menyewa komersial"
      },
      {
        "key": "C",
        "text": "Dasar gugatan wajib bersumber dari sengketa kepemilikan kebendaan hukum perdata murni"
      },
      {
        "key": "D",
        "text": "Pokok sengketa terletak di lapangan hukum publik (administrasi pemerintahan) akibat terbitnya KTUN atau tindakan pemerintahan"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Fundamentum petendi gugatan di PTUN wajib berakar pada sengketa di bidang hukum publik administrasi pemerintahan, bukan hubungan hukum keperdataan murni.",
      "legalBasis": "Pasal 47 jo. Pasal 1 angka 10 UU No. 51 Tahun 2009 tentang Perubahan Kedua atas UU No. 5 Tahun 1986 jo. Pasal 2 PERMA No. 2 Tahun 2019.",
      "statuteText": "Pasal 47 UU No. 5 Tahun 1986: Pengadilan bertugas dan berwenang memeriksa, memutus, dan menyelesaikan sengketa Tata Usaha Negara. Pasal 1 angka 10 UU No. 51 Tahun 2009: Sengketa Tata Usaha Negara adalah sengketa yang timbul dalam bidang tata usaha negara antara orang atau badan hukum perdata dengan badan atau pejabat tata usaha negara, baik di pusat maupun di daerah, sebagai akibat dikeluarkannya keputusan tata usaha negara, termasuk sengketa kepegawaian berdasarkan peraturan perundang-undangan yang berlaku.",
      "analysis": "Opsi yang menempatkan pokok sengketa di lapangan hukum publik administrasi pemerintahan tepat karena kompetensi absolut PTUN dibatasi oleh Pasal 47 jo. Pasal 1 angka 10 UU PTUN dan kini diperluas mencakup sengketa tindakan faktual pemerintahan (PERMA No. 2 Tahun 2019), yang seluruhnya lahir dari pelaksanaan kewenangan publik (publiekrechtelijke handeling). Opsi yang menyatakan pengadilan tidak berwenang bertentangan langsung dengan Pasal 47, sedangkan dalil wanprestasi kontrak sewa maupun sengketa kebendaan perdata murni merupakan ranah peradilan umum (PN) dan dikecualikan oleh Pasal 2 huruf a UU No. 9 Tahun 2004."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 109,
    "category": "Hukum Acara PTUN",
    "topicTag": "Tujuan Tenggang Waktu 90 Hari",
    "question": "Berdasarkan rasio hukum Pasal 55 UU No. 5 Tahun 1986 jo. Pasal 5 PERMA No. 6 Tahun 2018, pembatasan tenggang waktu 90 hari untuk mengajukan gugatan ke PTUN terutama bertujuan melindungi...",
    "options": [
      {
        "key": "A",
        "text": "Kepentingan pribadi penggugat untuk menunda gugatan hingga nilai ganti rugi membengkak"
      },
      {
        "key": "B",
        "text": "Kepentingan majelis hakim agar terhindar dari kewajiban memeriksa pembuktian"
      },
      {
        "key": "C",
        "text": "Kepentingan advokat agar memperoleh waktu lebih panjang dalam menyusun surat kuasa"
      },
      {
        "key": "D",
        "text": "Kepentingan Pejabat Tata Usaha Negara sekaligus kepentingan umum demi kepastian hukum penyelenggaraan pemerintahan"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pembatasan tenggang waktu 90 hari menjaga keseimbangan antara hak gugat warga negara dan kepastian hukum administrasi pemerintahan demi kepentingan umum.",
      "legalBasis": "Pasal 55 UU No. 5 Tahun 1986 tentang PTUN jo. Pasal 5 ayat (1) dan ayat (2) PERMA No. 6 Tahun 2018.",
      "statuteText": "Pasal 55 UU No. 5 Tahun 1986: Gugatan dapat diajukan hanya dalam tenggang waktu sembilan puluh hari terhitung sejak saat diterimanya atau diumumkannya Keputusan Badan atau Pejabat Tata Usaha Negara. Pasal 5 ayat (1) PERMA No. 6 Tahun 2018: Tenggang waktu pengajuan gugatan di Pengadilan dihitung 90 (sembilan puluh) hari sejak keputusan atas upaya administratif diterima oleh Warga Masyarakat atau diumumkan oleh Badan dan/atau Pejabat Administrasi pemerintahan yang menangani penyelesaian upaya administratif.",
      "analysis": "Opsi mengenai perlindungan Pejabat TUN dan kepentingan umum demi kepastian hukum tepat karena penyelenggaraan pemerintahan tidak dapat digantung dalam ketidakpastian hukum tanpa batas waktu akibat ancaman pembatalan KTUN. Berdasarkan PERMA No. 6 Tahun 2018, 90 hari dihitung sejak keputusan atas upaya administratif diterima atau diumumkan, dan bagi pihak ketiga yang tidak dituju langsung oleh KTUN dihitung secara kasuistis sejak pertama kali mengetahui adanya KTUN yang merugikan kepentingannya. Opsi terkait pembengkakan ganti rugi penggugat keliru karena batas ganti rugi PTUN dibatasi PP No. 43 Tahun 1991, sedangkan opsi terkait penghindaran beban pembuktian hakim maupun waktu penyusunan surat kuasa advokat bukan merupakan tujuan normatif Pasal 55."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 113,
    "category": "Hukum Acara PTUN",
    "topicTag": "Alasan Gugatan PTUN",
    "question": "Menurut rumusan positif Pasal 53 ayat (2) UU No. 9 Tahun 2004 tentang Perubahan atas UU No. 5 Tahun 1986, alasan yang dapat digunakan oleh Penggugat dalam mengajukan gugatan ke PTUN adalah...",
    "options": [
      {
        "key": "A",
        "text": "Keputusan TUN tersebut hanya dapat dibatalkan apabila melanggar peraturan menteri teknis"
      },
      {
        "key": "B",
        "text": "Keputusan TUN merugikan keuntungan bisnis pribadi penggugat meskipun telah sesuai hukum"
      },
      {
        "key": "C",
        "text": "Keputusan TUN belum memperoleh persetujuan politis dari pimpinan DPRD setempat"
      },
      {
        "key": "D",
        "text": "Keputusan TUN yang digugat bertentangan dengan peraturan perundang-undangan yang berlaku dan/atau bertentangan dengan Asas-Asas Umum Pemerintahan yang Baik (AUPB)"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pasca perubahan UU No. 9 Tahun 2004, alasan gugatan PTUN dirumuskan dalam dua pilar: KTUN bertentangan dengan peraturan perundang-undangan yang berlaku dan/atau bertentangan dengan AUPB.",
      "legalBasis": "Pasal 53 ayat (2) huruf a dan huruf b UU No. 9 Tahun 2004 tentang Perubahan atas UU No. 5 Tahun 1986.",
      "statuteText": "Alasan-alasan yang dapat digunakan dalam gugatan sebagaimana dimaksud pada ayat (1) adalah: a. Keputusan Tata Usaha Negara yang digugat itu bertentangan dengan peraturan perundang-undangan yang berlaku; b. Keputusan Tata Usaha Negara yang digugat itu bertentangan dengan asas-asas umum pemerintahan yang baik.",
      "analysis": "Opsi mengenai pertentangan dengan peraturan perundang-undangan yang berlaku dan/atau Asas-Asas Umum Pemerintahan yang Baik (AUPB) tepat sesuai rumusan baku Pasal 53 ayat (2) huruf a dan b UU No. 9 Tahun 2004 (yang menyempurnakan UU No. 5 Tahun 1986 dengan memasukkan AUPB secara eksplisit, mencakup pula larangan penyalahgunaan wewenang atau detournement de pouvoir dan kesewenang-wenangan sebagaimana ditegaskan kembali dalam Pasal 10 ayat (1) UU No. 30 Tahun 2014). Opsi yang membatasi hanya pada pelanggaran peraturan menteri keliru karena pengujian mencakup seluruh jenjang peraturan perundang-undangan; opsi kerugian bisnis semata tanpa cacat yuridis serta ketiadaan persetujuan politis DPRD bukanlah alasan pembatalan KTUN secara hukum."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 114,
    "category": "Hukum Acara PTUN",
    "topicTag": "Pemeriksaan Acara Cepat",
    "question": "Dalam hukum acara Peradilan Tata Usaha Negara, ketentuan mengenai permohonan pemeriksaan sengketa dengan acara cepat akibat adanya kepentingan Penggugat yang cukup mendesak diatur dalam...",
    "options": [
      {
        "key": "A",
        "text": "Pasal 53 dan Pasal 55 UU No. 5 Tahun 1986"
      },
      {
        "key": "B",
        "text": "Pasal 62 dan Pasal 63 UU No. 5 Tahun 1986"
      },
      {
        "key": "C",
        "text": "Pasal 71 dan Pasal 72 UU No. 5 Tahun 1986"
      },
      {
        "key": "D",
        "text": "Pasal 98 dan Pasal 99 UU No. 5 Tahun 1986"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pemeriksaan sengketa TUN dengan acara cepat oleh Hakim Tunggal karena adanya kepentingan penggugat yang sangat mendesak diatur dalam Pasal 98 dan Pasal 99 UU PTUN.",
      "legalBasis": "Pasal 98 dan Pasal 99 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "statuteText": "Pasal 98 ayat (1): Apabila terdapat kepentingan penggugat yang cukup mendesak yang harus dapat disimpulkan dari alasan-alasan permohonannya, penggugat dalam gugatannya dapat memohon kepada Pengadilan supaya pemeriksaan sengketa dipercepat. Pasal 99 ayat (1): Pemeriksaan dengan acara cepat dilakukan dengan Hakim Tunggal. Ayat (2): Dalam hal permohonan sebagaimana dimaksud dalam Pasal 98 ayat (1) dikabulkan, Ketua Pengadilan dalam jangka waktu tujuh hari setelah dikeluarkannya penetapan sebagaimana dimaksud dalam Pasal 98 ayat (2) menentukan hari, tempat, dan waktu sidang tanpa melalui prosedur pemeriksaan persiapan sebagaimana dimaksud dalam Pasal 63. Ayat (3): Tenggang waktu untuk jawaban dan pembuktian bagi kedua belah pihak, masing-masing ditentukan tidak melebihi empat belas hari.",
      "analysis": "Opsi Pasal 98 dan Pasal 99 UU No. 5 Tahun 1986 tepat karena kedua pasal tersebut secara khusus mengatur syarat pengajuan permohonan acara cepat, penetapan Ketua Pengadilan dalam 14 hari (Pasal 98 ayat (3)), penunjukan Hakim Tunggal tanpa tahap pemeriksaan persiapan, serta pembatasan tenggang waktu jawaban dan pembuktian maksimal 14 hari (Pasal 99 ayat (1)–(3)). Adapun Pasal 53 dan Pasal 55 mengatur dasar gugatan serta tenggang waktu 90 hari; Pasal 62 dan Pasal 63 mengatur rapat permusyawaratan (dismissal) serta pemeriksaan persiapan; sedangkan Pasal 71 dan Pasal 72 mengatur ketidakhadiran penggugat (gugur) dan tergugat pada pemeriksaan acara biasa."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 115,
    "category": "Hukum Acara PTUN",
    "topicTag": "Objek Sengketa PTUN",
    "question": "Di antara penetapan-penetapan berikut ini, manakah yang secara sah merupakan Keputusan Tata Usaha Negara sebagai objek gugatan sengketa di PTUN?",
    "options": [
      {
        "key": "A",
        "text": "Keputusan pejabat berwenang yang diterbitkan semata-mata atas dasar hasil pemeriksaan badan peradilan"
      },
      {
        "key": "B",
        "text": "Surat perintah penangkapan atau penahanan yang dikeluarkan oleh penyidik atau penuntut umum berdasarkan KUHAP"
      },
      {
        "key": "C",
        "text": "Keputusan Kepala Kantor Pertanahan yang menerbitkan sertifikat hak atas tanah berdasarkan permohonan pendaftaran tanah"
      },
      {
        "key": "D",
        "text": "Keputusan Komisi Pemilihan Umum (KPU) mengenai penetapan hasil pemilihan umum secara nasional"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Keputusan Kepala Kantor Pertanahan mengenai penerbitan sertifikat hak atas tanah merupakan KTUN konkret, individual, dan final yang sah menjadi objek gugatan PTUN, sepanjang bukan penerbitan administratif hasil eksekusi perdata.",
      "legalBasis": "Pasal 1 angka 9 UU No. 51 Tahun 2009 jo. Pasal 2 huruf d, e, dan g UU No. 9 Tahun 2004 tentang Perubahan atas UU No. 5 Tahun 1986.",
      "statuteText": "Pasal 2 UU No. 9 Tahun 2004: Tidak termasuk dalam pengertian Keputusan Tata Usaha Negara menurut Undang-Undang ini: ... d. Keputusan Tata Usaha Negara yang dikeluarkan berdasarkan ketentuan Kitab Undang-Undang Hukum Pidana dan Kitab Undang-Undang Hukum Acara Pidana atau peraturan perundang-undangan lain yang bersifat hukum pidana; e. Keputusan Tata Usaha Negara yang dikeluarkan atas dasar hasil pemeriksaan badan peradilan berdasarkan ketentuan peraturan perundang-undangan yang berlaku; ... g. Keputusan Komisi Pemilihan Umum baik di pusat maupun di daerah mengenai hasil pemilihan umum.",
      "analysis": "Opsi mengenai Keputusan Kepala Kantor Pertanahan yang menerbitkan sertifikat hak atas tanah berdasarkan permohonan pendaftaran tanah tepat karena penerbitan sertifikat oleh Kepala BPN setempat bersifat tertulis, konkret (objek bidang tanah tertentu), individual (atas nama pemegang hak tertentu), dan final (langsung menimbulkan akibat hukum hak atas tanah), serta tidak termasuk pengecualian Pasal 2 UU PTUN. Sebaliknya, keputusan atas dasar hasil pemeriksaan badan peradilan dikecualikan oleh Pasal 2 huruf e; surat perintah penahanan berdasarkan KUHAP dikecualikan oleh Pasal 2 huruf d (menjadi objek praperadilan di PN); dan keputusan KPU tentang hasil pemilu dikecualikan oleh Pasal 2 huruf g (kewenangan Mahkamah Konstitusi)."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 116,
    "category": "Hukum Acara PTUN",
    "topicTag": "Fiktif Negatif",
    "question": "Apabila peraturan perundang-undangan tidak menentukan jangka waktu, setelah lewat waktu ... sejak diterimanya permohonan, badan atau pejabat TUN yang berdiam diri dianggap telah mengeluarkan keputusan penolakan (fiktif negatif menurut UU No. 5 Tahun 1986).",
    "options": [
      {
        "key": "A",
        "text": "4 (empat) bulan"
      },
      {
        "key": "B",
        "text": "3 (tiga) bulan"
      },
      {
        "key": "C",
        "text": "60 (enam puluh) hari"
      },
      {
        "key": "D",
        "text": "30 (tiga puluh) hari"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Berdasarkan ketentuan klasik Pasal 3 ayat (2) UU No. 5 Tahun 1986, apabila peraturan dasar tidak menetapkan batas waktu, sikap diam pejabat TUN selama 4 bulan dianggap sebagai keputusan penolakan (fiktif negatif).",
      "legalBasis": "Pasal 3 ayat (1)–(3) UU No. 5 Tahun 1986 jo. Pasal 53 UU No. 30 Tahun 2014 jo. SEMA No. 5 Tahun 2021.",
      "statuteText": "Pasal 3 ayat (2) UU No. 5 Tahun 1986: Jika suatu Badan atau Pejabat Tata Usaha Negara tidak mengeluarkan keputusan yang dimohon, sedangkan jangka waktu sebagaimana ditentukan dalam peraturan perundang-undangan dimaksud telah lewat, maka Badan atau Pejabat Tata Usaha Negara tersebut dianggap telah menolak mengeluarkan keputusan yang dimaksud. Ayat (3): Dalam hal peraturan perundang-undangan yang bersangkutan tidak menentukan jangka waktu sebagaimana dimaksud dalam ayat (2), maka setelah lewat jangka waktu empat bulan sejak diterimanya permohonan, Badan atau Pejabat Tata Usaha Negara yang bersangkutan dianggap telah mengeluarkan keputusan penolakan.",
      "analysis": "Opsi 4 (empat) bulan tepat karena merujuk secara normatif pada Pasal 3 ayat (3) UU No. 5 Tahun 1986 (mengenai fiktif negatif apabila peraturan dasar tidak menentukan tenggang waktu). Dalam perkembangan hukum positif, rezim ini sempat bergeser ke fiktif positif dalam Pasal 53 UU No. 30 Tahun 2014 (10 hari kerja, penetapan PTUN via PERMA No. 8 Tahun 2017); namun pasca UU Cipta Kerja (UU No. 6 Tahun 2023) dan SEMA No. 5 Tahun 2021 Kamar TUN, permohonan penetapan fiktif positif tidak lagi menjadi kewenangan PTUN, melainkan penyelesaian keengganan/sikap diam pejabat dapat ditempuh melalui gugatan tindakan faktual pemerintahan (PERMA No. 2 Tahun 2019) setelah upaya administratif. Opsi 3 bulan, 60 hari, maupun 30 hari tidak sesuai dengan ketentuan Pasal 3 ayat (3) UU No. 5 Tahun 1986."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 117,
    "category": "Hukum Acara PTUN",
    "topicTag": "Komponen Biaya Perkara",
    "question": "Komponen berikut ini termasuk yang diperhitungkan dalam perkiraan panjar dan rincian biaya perkara oleh UU Peradilan Tata Usaha Negara, KECUALI...",
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
        "text": "Biaya alih bahasa atau penerjemah"
      },
      {
        "key": "D",
        "text": "Biaya jasa honorarium advokat"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Biaya perkara PTUN mencakup biaya kepaniteraan/meterai, saksi, ahli, alih bahasa, serta pemeriksaan setempat atau tindakan atas perintah hakim, sedangkan honorarium advokat tidak termasuk dalam panjar biaya perkara pengadilan.",
      "legalBasis": "Pasal 59 ayat (1) jo. Pasal 111 ayat (1) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "statuteText": "Pasal 111 ayat (1) UU No. 5 Tahun 1986: Dalam biaya perkara termasuk: a. biaya kepaniteraan dan biaya meterai; b. biaya saksi, ahli, dan alih bahasa dengan catatan bahwa pihak yang meminta pemeriksaan lebih dari lima orang saksi harus membayar biaya untuk saksi yang lebih itu meskipun pihak tersebut dimenangkan; c. biaya pemeriksaan di tempat lain daripada ruangan sidang dan biaya lain yang diperlukan bagi pemutusan sengketa atas perintah Hakim Ketua Sidang.",
      "analysis": "Opsi mengenai biaya jasa honorarium advokat adalah pengecualian yang tepat karena hubungan imbalan jasa hukum antara pemberi kuasa dan advokat merupakan perjanjian keperdataan privat berdasarkan UU No. 18 Tahun 2003 tentang Advokat, sehingga tidak ditaksir oleh panitera sebagai uang muka (panjar) biaya perkara pengadilan (Pasal 59 ayat (1) UU PTUN) dan tidak dibebankan kepada pihak yang kalah dalam amar putusan. Sebaliknya, biaya saksi, biaya ahli, serta biaya alih bahasa atau penerjemah seluruhnya secara eksplisit dimasukkan sebagai komponen resmi biaya perkara dalam Pasal 111 ayat (1) huruf b UU No. 5 Tahun 1986."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 11701,
    "category": "Hukum Acara PTUN",
    "topicTag": "Kewajiban Upaya Administratif (PERMA 6/2018)",
    "question": "Berdasarkan UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan jo. PERMA No. 6 Tahun 2018, apabila seorang warga masyarakat langsung menggugat suatu Keputusan Tata Usaha Negara ke PTUN padahal belum menempuh upaya administratif yang tersedia, maka akibat hukumnya terhadap gugatan tersebut adalah...",
    "options": [
      {
        "key": "A",
        "text": "PTUN tidak berwenang mengadili dan gugatan dinyatakan tidak dapat diterima (niet ontvankelijke verklaard)"
      },
      {
        "key": "B",
        "text": "PTUN tetap wajib memeriksa pokok perkara karena asas pengadilan tidak boleh menolak perkara"
      },
      {
        "key": "C",
        "text": "PTUN membatalkan keputusan tersebut secara verstek tanpa memanggil pejabat penerbit"
      },
      {
        "key": "D",
        "text": "Ketua PTUN meneruskan gugatan ke Ombudsman Republik Indonesia untuk diputus secara mengikat"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pasca PERMA No. 6 Tahun 2018 dan UU No. 30 Tahun 2014, upaya administratif (keberatan dan/atau banding administratif) menjadi prasyarat wajib; gugatan yang langsung diajukan tanpa menempuh upaya administratif berakibat PTUN tidak berwenang dan gugatan dinyatakan tidak dapat diterima.",
      "legalBasis": "Pasal 75–78 UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan jo. Pasal 2 ayat (1) dan Pasal 3 ayat (1) PERMA No. 6 Tahun 2018.",
      "statuteText": "Pasal 2 ayat (1) PERMA No. 6 Tahun 2018: Pengadilan berwenang menerima, memeriksa, memutus dan menyelesaikan sengketa administrasi pemerintahan setelah menempuh upaya administratif. Pasal 75 ayat (1) UU No. 30 Tahun 2014: Warga Masyarakat yang dirugikan terhadap Keputusan dan/atau Tindakan dapat mengajukan Upaya Administratif kepada Pejabat Pemerintahan atau Atasan Pejabat yang menetapkan dan/atau melakukan Keputusan dan/atau Tindakan.",
      "analysis": "Opsi yang menyatakan PTUN tidak berwenang mengadili dan gugatan tidak dapat diterima tepat karena Pasal 2 ayat (1) PERMA No. 6 Tahun 2018 menempatkan penyelesaian upaya administratif (keberatan paling lama 21 hari kerja dan banding administratif 10 hari kerja menurut Pasal 77–78 UU No. 30 Tahun 2014 atau prosedur khusus sektoral) sebagai syarat kewenangan pengadilan (primum remedium administratif). Opsi yang mewajibkan pemeriksaan pokok perkara keliru karena asas ius curia novit/larangan menolak perkara tidak menghapus syarat kompetensi prosedural undang-undang; opsi putusan verstek salah karena hukum acara PTUN tidak mengenal verstek; dan opsi pelimpahan ke Ombudsman salah karena Ombudsman hanya mengeluarkan rekomendasi non-yudisial, bukan putusan pengadilan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 11702,
    "category": "Hukum Acara PTUN",
    "topicTag": "Fiktif Positif Pasca-SEMA 5/2021 & UU Cipta Kerja",
    "question": "Dalam perkembangan hukum acara PTUN terkini setelah berlakunya UU Cipta Kerja (UU No. 6 Tahun 2023) dan SEMA No. 5 Tahun 2021, bagaimana kedudukan permohonan penetapan keputusan fiktif positif yang diajukan pemohon ke PTUN?",
    "options": [
      {
        "key": "A",
        "text": "PTUN berwenang mengabulkan permohonan penetapan fiktif positif dalam waktu paling lama 21 hari kerja sesuai PERMA No. 8 Tahun 2017"
      },
      {
        "key": "B",
        "text": "Permohonan penetapan fiktif positif tidak lagi menjadi kewenangan PTUN untuk diperiksa dan diputus"
      },
      {
        "key": "C",
        "text": "Permohonan fiktif positif wajib diperiksa oleh Majelis Hakim Agung pada tingkat pertama di Mahkamah Agung"
      },
      {
        "key": "D",
        "text": "PTUN hanya berwenang menjatuhkan sanksi pidana denda kepada pejabat yang tidak menerbitkan izin"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Melalui UU Cipta Kerja jo. Rumusan Hukum Kamar TUN SEMA No. 5 Tahun 2021, permohonan penetapan keputusan fiktif positif sebagaimana diatur semula dalam Pasal 53 UU No. 30 Tahun 2014 dan PERMA No. 8 Tahun 2017 sudah tidak lagi menjadi kewenangan PTUN.",
      "legalBasis": "Pasal 53 UU No. 30 Tahun 2014 jo. UU No. 6 Tahun 2023 (Penetapan Perppu Cipta Kerja) jo. Rumusan Hukum Kamar TUN Angka 2 SEMA No. 5 Tahun 2021.",
      "statuteText": "Rumusan Hukum Kamar Tata Usaha Negara SEMA No. 5 Tahun 2021: Dengan diundangkannya Undang-Undang Cipta Kerja, permohonan fiktif positif sudah tidak lagi menjadi kewenangan Pengadilan Tata Usaha Negara.",
      "analysis": "Opsi bahwa permohonan penetapan fiktif positif tidak lagi menjadi kewenangan PTUN tepat karena perubahan ketentuan Pasal 53 UU Administrasi Pemerintahan melalui UU Cipta Kerja menghapus mekanisme pengajuan permohonan ke PTUN untuk memperoleh putusan pengabulan izin secara fiktif positif, yang ditegaskan kembali oleh Mahkamah Agung dalam SEMA No. 5 Tahun 2021. Opsi pengabulan dalam 21 hari kerja merujuk pada norma lama UU No. 30 Tahun 2014 jo. PERMA No. 8 Tahun 2017 sebelum perubahan; opsi pemeriksaan tingkat pertama oleh Mahkamah Agung keliru secara hierarki kompetensi; dan opsi penjatuhan pidana denda keliru karena PTUN tidak memiliki kewenangan yurisdiksi pidana."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 11703,
    "category": "Hukum Acara PTUN",
    "topicTag": "Penundaan Pelaksanaan KTUN (Schorsing)",
    "question": "Berdasarkan Pasal 67 ayat (2) dan ayat (4) UU No. 5 Tahun 1986, permohonan penundaan pelaksanaan Keputusan Tata Usaha Negara (schorsing) selama pemeriksaan sengketa berjalan hanya dapat dikabulkan apabila...",
    "options": [
      {
        "key": "A",
        "text": "Penggugat telah membayar uang jaminan penundaan sebesar nilai objek sengketa kepada panitera"
      },
      {
        "key": "B",
        "text": "Terdapat keadaan yang sangat mendesak yang mengakibatkan kepentingan Penggugat sangat dirugikan, sepanjang kepentingan umum dalam rangka pembangunan tidak mengharuskan dilaksanakannya keputusan tersebut"
      },
      {
        "key": "C",
        "text": "Tergugat tidak menghadiri sidang pertama setelah dipanggil secara patut oleh jurusita"
      },
      {
        "key": "D",
        "text": "Gugatan diajukan dalam tenggang waktu kurang dari 30 hari sejak keputusan diterima"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Penundaan pelaksanaan KTUN (schorsing) merupakan pengecualian terhadap asas praesumptio iustae causa yang hanya dapat dikabulkan bila ada keadaan sangat mendesak yang sangat merugikan penggugat serta tidak terhalang kepentingan umum dalam rangka pembangunan.",
      "legalBasis": "Pasal 67 ayat (1)–(4) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "statuteText": "Pasal 67 ayat (4): Permohonan penundaan sebagaimana dimaksud dalam ayat (2): a. dapat dikabulkan hanya apabila terdapat keadaan yang sangat mendesak yang mengakibatkan kepentingan penggugat sangat dirugikan jika Keputusan Tata Usaha Negara yang digugat itu tetap dilaksanakan; b. tidak dapat dikabulkan apabila kepentingan umum dalam rangka pembangunan mengharuskan dilaksanakannya keputusan tersebut.",
      "analysis": "Opsi mengenai keadaan sangat mendesak yang sangat merugikan penggugat tanpa menghalangi kepentingan umum pembangunan tepat karena merangkum dua syarat kumulatif Pasal 67 ayat (4) huruf a dan huruf b UU No. 5 Tahun 1986 (misalnya perintah pembongkaran bangunan yang menimbulkan kerugian tak terpulihkan). Opsi mengenai pembayaran uang jaminan keliru karena UU PTUN tidak mensyaratkan uang jaminan sebagaimana sita/uitvoerbaar bij voorraad dalam hukum acara perdata; opsi ketidakhadiran tergugat salah karena konsekuensinya adalah pemeriksaan tanpa hadirnya tergugat (Pasal 72), bukan schorsing otomatis; dan opsi pengajuan gugatan kurang dari 30 hari keliru karena tenggang waktu gugat adalah 90 hari dan tidak menentukan penundaan."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 11704,
    "category": "Hukum Acara PTUN",
    "topicTag": "Dismissal Process dan Verzet (14 Hari)",
    "question": "Dalam rapat permusyawaratan (dismissal process), apabila Ketua PTUN mengeluarkan penetapan bahwa gugatan tidak diterima atau tidak berdasar, upaya hukum yang tersedia bagi Penggugat menurut Pasal 62 ayat (3) UU No. 5 Tahun 1986 adalah...",
    "options": [
      {
        "key": "A",
        "text": "Mengajukan banding langsung kepada Pengadilan Tinggi Tata Usaha Negara dalam waktu 14 hari"
      },
      {
        "key": "B",
        "text": "Mengajukan perlawanan (verzet) kepada Pengadilan yang sama dalam tenggang waktu 14 hari setelah penetapan diucapkan"
      },
      {
        "key": "C",
        "text": "Mengajukan permohonan kasasi ke Mahkamah Agung dalam tenggang waktu 14 hari"
      },
      {
        "key": "D",
        "text": "Tidak tersedia upaya hukum apa pun sehingga perkara berakhir mutlak tanpa pemeriksaan singkat"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Terhadap penetapan dismissal oleh Ketua PTUN, Penggugat dapat mengajukan perlawanan (verzet) kepada Pengadilan tersebut dalam tenggang waktu 14 hari setelah diucapkan, untuk diperiksa dengan acara singkat.",
      "legalBasis": "Pasal 62 ayat (3)–(6) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "statuteText": "Pasal 62 ayat (3) huruf a: Terhadap penetapan sebagaimana dimaksud dalam ayat (1) dapat diajukan perlawanan kepada Pengadilan dalam tenggang waktu empat belas hari setelah diucapkan. Ayat (4): Perlawanan sebagaimana dimaksud dalam ayat (3) diperiksa dan diputus oleh Pengadilan dengan acara singkat. Ayat (6): Dalam hal perlawanan tidak dibenarkan oleh Pengadilan, terhadap putusan tersebut tidak dapat digunakan upaya hukum.",
      "analysis": "Opsi mengenai perlawanan (verzet) dalam 14 hari kepada Pengadilan tersebut tepat sesuai Pasal 62 ayat (3) huruf a UU No. 5 Tahun 1986; perlawanan itu diperiksa Majelis dengan acara singkat dan baru apabila perlawanan ditolak pada tingkat acara singkat itulah tertutup upaya hukum (Pasal 62 ayat (6)). Opsi banding ke PT TUN dan kasasi ke MA keliru karena penetapan dismissal merupakan produk administratif-yudisial Ketua PTUN pada tahap penyaringan awal yang belum dapat langsung dibanding/dikasasi; sedangkan opsi yang menyatakan tidak tersedia upaya hukum apa pun keliru karena hak perlawanan tetap dijamin sebelum acara singkat, berbeda dengan penetapan pemeriksaan persiapan Pasal 63 ayat (3) yang memang menutup upaya hukum dan hanya membuka gugatan baru."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 11705,
    "category": "Hukum Acara PTUN",
    "topicTag": "Kompetensi Relatif PTUN (Pasal 54)",
    "question": "Berdasarkan Pasal 54 UU No. 5 Tahun 1986, apabila baik Penggugat maupun Badan atau Pejabat Tata Usaha Negara (Tergugat) sama-sama berkedudukan atau berada di luar negeri, maka gugatan sengketa Tata Usaha Negara harus diajukan kepada...",
    "options": [
      {
        "key": "A",
        "text": "Pengadilan Tata Usaha Negara di wilayah tempat asal domisili KTP Penggugat di Indonesia"
      },
      {
        "key": "B",
        "text": "Pengadilan Tinggi Tata Usaha Negara secara langsung sebagai peradilan tingkat pertama"
      },
      {
        "key": "C",
        "text": "Pengadilan Tata Usaha Negara Jakarta"
      },
      {
        "key": "D",
        "text": "Mahkamah Agung Republik Indonesia melalui perwakilan kedutaan besar"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Sesuai asas actor sequitur forum rei dalam Pasal 54 UU PTUN, gugatan diajukan di tempat kedudukan Tergugat; namun apabila Penggugat dan Tergugat sama-sama berada di luar negeri, gugatan diajukan ke Pengadilan Tata Usaha Negara di Jakarta.",
      "legalBasis": "Pasal 54 ayat (1)–(6) UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "statuteText": "Pasal 54 ayat (1): Gugatan sengketa Tata Usaha Negara diajukan kepada Pengadilan yang berwenang yang daerah hukumnya meliputi tempat kedudukan tergugat. ... Ayat (5): Apabila penggugat dan tergugat berkedudukan atau berada di luar negeri, gugatan diajukan kepada Pengadilan di Jakarta. Ayat (6): Apabila tergugat berkedudukan di dalam negeri dan penggugat di luar negeri, gugatan diajukan kepada Pengadilan di tempat kedudukan tergugat.",
      "analysis": "Opsi Pengadilan Tata Usaha Negara Jakarta tepat sesuai Pasal 54 ayat (5) UU No. 5 Tahun 1986 yang menunjuk PTUN di ibu kota negara sebagai forum kompeten apabila kedua pihak berada di luar wilayah yurisdiksi PTUN daerah di Indonesia (misalnya sengketa terkait paspor/keputusan pejabat perwakilan RI di luar negeri terhadap WNI di luar negeri). Opsi berdasarkan domisili KTP Penggugat keliru karena Pasal 54 menganut patokan tempat kedudukan Tergugat (kecuali hal tertentu yang diatur PP berdasarkan ayat (4)); opsi PT TUN sebagai peradilan tingkat pertama salah karena pemeriksaan tingkat pertama pada pokoknya berada di PTUN (PT TUN hanya tingkat pertama bagi sengketa setelah banding administratif menurut Pasal 51 ayat (3)); dan opsi Mahkamah Agung keliru karena MA adalah peradilan kasasi dan peninjauan kembali."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 11706,
    "category": "Hukum Acara PTUN",
    "topicTag": "Pengecualian KTUN Pasal 2 UU PTUN",
    "question": "Di bawah ini merupakan ketetapan atau tindakan tertulis Badan/Pejabat TUN yang secara tegas DIKECUALIKAN dari pengertian KTUN menurut Pasal 2 UU No. 9 Tahun 2004 (sehingga bukan objek sengketa PTUN), KECUALI...",
    "options": [
      {
        "key": "A",
        "text": "Keputusan Tata Usaha Negara yang masih memerlukan persetujuan dari pejabat lain untuk dapat berlaku"
      },
      {
        "key": "B",
        "text": "Keputusan Tata Usaha Negara mengenai tata usaha Tentara Nasional Indonesia"
      },
      {
        "key": "C",
        "text": "Keputusan Kepala Daerah tentang pencabutan izin usaha pertambangan yang telah bersifat final"
      },
      {
        "key": "D",
        "text": "Keputusan Tata Usaha Negara yang dikeluarkan atas dasar hasil pemeriksaan badan peradilan"
      }
    ],
    "correctAnswer": "C",
    "explanation": {
      "summary": "Pasal 2 UU No. 9 Tahun 2004 mengecualikan 7 kelompok keputusan (termasuk keputusan yang masih perlu persetujuan, berdasarkan pemeriksaan badan peradilan, dan tata usaha TNI), sedangkan pencabutan izin usaha oleh Kepala Daerah yang bersifat final tetap merupakan objek sengketa PTUN.",
      "legalBasis": "Pasal 2 huruf c, e, dan f UU No. 9 Tahun 2004 jo. Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang PTUN.",
      "statuteText": "Pasal 2 UU No. 9 Tahun 2004: Tidak termasuk dalam pengertian Keputusan Tata Usaha Negara menurut Undang-Undang ini: a. Keputusan Tata Usaha Negara yang merupakan perbuatan hukum perdata; b. Keputusan Tata Usaha Negara yang merupakan pengaturan yang bersifat umum; c. Keputusan Tata Usaha Negara yang masih memerlukan persetujuan; d. Keputusan Tata Usaha Negara yang dikeluarkan berdasarkan ketentuan KUHP dan KUHAP atau peraturan perundang-undangan lain yang bersifat hukum pidana; e. Keputusan Tata Usaha Negara yang dikeluarkan atas dasar hasil pemeriksaan badan peradilan berdasarkan ketentuan peraturan perundang-undangan yang berlaku; f. Keputusan Tata Usaha Negara mengenai tata usaha Tentara Nasional Indonesia; g. Keputusan Komisi Pemilihan Umum baik di pusat maupun di daerah mengenai hasil pemilihan umum.",
      "analysis": "Opsi mengenai Keputusan Kepala Daerah tentang pencabutan izin usaha pertambangan yang telah bersifat final merupakan jawaban yang tepat karena pencabutan izin adalah penetapan tertulis yang konkret, individual, final, menimbulkan akibat hukum, serta tidak masuk dalam tujuh pengecualian Pasal 2 UU No. 9 Tahun 2004 sehingga sah menjadi objek sengketa PTUN (setelah upaya administratif). Ketiga opsi lainnya—yakni keputusan yang masih memerlukan persetujuan (Pasal 2 huruf c karena belum final), keputusan mengenai tata usaha TNI (Pasal 2 huruf f yang menjadi kewenangan Peradilan Tata Usaha Militer), dan keputusan atas dasar hasil pemeriksaan badan peradilan (Pasal 2 huruf e)—secara eksplisit dikecualikan dari yurisdiksi PTUN."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 11707,
    "category": "Hukum Acara PTUN",
    "topicTag": "Pembatasan Upaya Hukum Kasasi TUN",
    "question": "Berdasarkan Pasal 45A ayat (2) huruf c UU No. 5 Tahun 2004 tentang Mahkamah Agung, terhadap putusan Pengadilan Tinggi Tata Usaha Negara (PT TUN) mengenai perkara yang objek gugatannya berupa keputusan pejabat daerah yang jangkauannya berlaku di wilayah daerah yang bersangkutan berlaku pembatasan berupa...",
    "options": [
      {
        "key": "A",
        "text": "Dikecualikan dari pengajuan upaya hukum kasasi sehingga permohonan kasasinya dinyatakan tidak dapat diterima oleh Ketua Pengadilan tingkat pertama"
      },
      {
        "key": "B",
        "text": "Wajib diajukan kasasi langsung melompati Pengadilan Tinggi TUN dalam waktu 7 hari"
      },
      {
        "key": "C",
        "text": "Dapat langsung dimintakan peninjauan kembali sebelum putusan memiliki kekuatan hukum tetap"
      },
      {
        "key": "D",
        "text": "Hanya boleh diajukan kasasi apabila nilai sengketa melebihi Rp500.000.000,00"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pasal 45A ayat (2) huruf c jo. ayat (3) UU No. 5 Tahun 2004 membatasi upaya hukum kasasi terhadap perkara TUN yang objeknya berupa keputusan pejabat daerah dengan jangkauan wilayah daerah tersebut, dan penetapan penolakan Ketua Pengadilan tingkat pertama tidak dapat dibanding/dikasasi.",
      "legalBasis": "Pasal 45A ayat (1), ayat (2) huruf c, ayat (3), dan ayat (5) UU No. 5 Tahun 2004 jo. UU No. 3 Tahun 2009 tentang Mahkamah Agung.",
      "statuteText": "Pasal 45A ayat (2) huruf c: Perkara yang dikecualikan sebagaimana dimaksud pada ayat (1) terdiri atas: ... c. perkara tata usaha negara yang objek gugatannya berupa keputusan pejabat daerah yang jangkauan keputusannya berlaku di wilayah daerah yang bersangkutan. Ayat (3): Permohonan kasasi terhadap perkara sebagaimana dimaksud pada ayat (2) atau permohonan kasasi yang tidak memenuhi syarat-syarat formal, dinyatakan tidak dapat diterima dengan penetapan ketua pengadilan tingkat pertama dan berkas perkaranya tidak dikirimkan ke Mahkamah Agung.",
      "analysis": "Opsi mengenai pengecualian dari pengajuan kasasi dan penetapan tidak dapat diterima oleh Ketua Pengadilan tingkat pertama tepat sesuai Pasal 45A ayat (2) huruf c dan ayat (3) UU Mahkamah Agung (yang bertujuan menyaring beban perkara kasasi berskala lokal di MA, sehingga putusan PT TUN pada tingkat banding pada prinsipnya berkekuatan hukum tetap, meski dalam praktik yurisprudensi tersedia peninjauan kembali bila memenuhi syarat luar biasa Pasal 67 UU MA). Opsi kasasi langsung tanpa banding keliru karena bertentangan dengan susunan berjenjang PTUN–PT TUN; opsi PK sebelum inkracht bertentangan dengan syarat dasar PK; dan opsi batas nilai Rp500 juta keliru karena hukum acara PTUN tidak mengenal pembatasan nominal nilai sengketa untuk kasasi."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 11708,
    "category": "Hukum Acara PTUN",
    "topicTag": "Ganti Rugi dan Rehabilitasi di PTUN",
    "question": "Dalam hal gugatan sengketa Tata Usaha Negara dikabulkan dan Penggugat juga menuntut ganti rugi atas akibat hukum terbitnya KTUN yang dibatalkan, ketentuan mengenai besaran ganti rugi materiil dalam Pasal 3 ayat (1) PP No. 43 Tahun 1991 menetapkan batas...",
    "options": [
      {
        "key": "A",
        "text": "Minimal Rp250.000,00 dan maksimal Rp5.000.000,00, di samping hak rehabilitasi dalam sengketa kepegawaian"
      },
      {
        "key": "B",
        "text": "Minimal Rp10.000.000,00 dan maksimal tidak terbatas sesuai tuntutan immateriil penggugat"
      },
      {
        "key": "C",
        "text": "Penggugat hanya dapat menuntut pemulihan nama baik tanpa ganti rugi uang dalam bentuk apa pun"
      },
      {
        "key": "D",
        "text": "Dibebankan seluruhnya dari harta kekayaan pribadi Pejabat TUN tanpa melalui APBN atau APBD"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Berdasarkan Pasal 97 ayat (10)–(11) UU No. 5 Tahun 1986 jo. Pasal 3 ayat (1) PP No. 43 Tahun 1991, pembayaran ganti rugi dalam perkara PTUN dibatasi paling sedikit Rp250.000,00 dan paling banyak Rp5.000.000,00.",
      "legalBasis": "Pasal 97 ayat (10) dan ayat (11) UU No. 5 Tahun 1986 jo. Pasal 3 ayat (1) PP No. 43 Tahun 1991 tentang Ganti Rugi dan Tata Cara Pelaksanaannya pada Peradilan TUN.",
      "statuteText": "Pasal 97 ayat (10) UU No. 5 Tahun 1986: Kewajiban sebagaimana dimaksud pada ayat (9) dapat disertai pembebanan ganti rugi. Ayat (11): Dalam hal sengketa kepegawaian, selain kewajiban sebagaimana dimaksud pada ayat (9) dan ayat (10), dapat disertai pemberian rehabilitasi. Pasal 3 ayat (1) PP No. 43 Tahun 1991: Besarnya ganti rugi yang dapat diperoleh penggugat sebagaimana dimaksud dalam Pasal 2 paling sedikit Rp 250.000,- (dua ratus lima puluh ribu rupiah) dan paling banyak Rp 5.000.000,- (lima juta rupiah) dengan memperhatikan keadaan yang nyata.",
      "analysis": "Opsi batas minimal Rp250.000,00 dan maksimal Rp5.000.000,00 tepat sesuai ketentuan positif Pasal 3 ayat (1) PP No. 43 Tahun 1991 yang membatasi nilai ganti rugi dalam amar PTUN (di luar kompensasi khusus undang-undang sektoral atau klaim perdata tersendiri setelahnya), sementara Pasal 97 ayat (11) khusus mengatur rehabilitasi bagi sengketa kepegawaian. Opsi ganti rugi immateriil tak terbatas keliru karena fokus PTUN adalah pengujian keabsahan KTUN bukan tuntutan immateriil perdata murni; opsi larangan ganti rugi uang keliru karena bertentangan dengan Pasal 97 ayat (10); dan opsi pembebanan harta pribadi pejabat keliru karena pembayaran ganti rugi ditanggung oleh negara/daerah melalui mekanisme APBN/APBD sesuai Pasal 4 PP No. 43 Tahun 1991."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 11709,
    "category": "Hukum Acara PTUN",
    "topicTag": "Asas Dominus Litis & Pembuktian Bebas",
    "question": "Dalam sistem pembuktian Peradilan Tata Usaha Negara yang menganut asas hakim aktif (dominus litis), kewenangan Hakim menurut Pasal 107 UU No. 5 Tahun 1986 adalah...",
    "options": [
      {
        "key": "A",
        "text": "Hakim bersifat pasif dan hanya memutus berdasarkan alat bukti yang diajukan Penggugat semata"
      },
      {
        "key": "B",
        "text": "Hakim menentukan apa yang harus dibuktikan, beban pembuktian, dan penilaian kekuatan bukti dengan syarat minimal dua alat bukti berdasarkan keyakinan Hakim"
      },
      {
        "key": "C",
        "text": "Beban pembuktian mutlak hanya berada pada Tergugat tanpa keikutsertaan Penggugat"
      },
      {
        "key": "D",
        "text": "Cukup satu alat bukti akta autentik tanpa memerlukan keyakinan hakim untuk menjatuhkan putusan"
      }
    ],
    "correctAnswer": "B",
    "explanation": {
      "summary": "Pasal 107 UU PTUN menerapkan asas dominus litis dan teori pembuktian bebas terbatas: hakim aktif menentukan hal yang dibuktikan, pembagian beban pembuktian, dan penilaian pembuktian dengan syarat minimal dua alat bukti berdasarkan keyakinan hakim.",
      "legalBasis": "Pasal 107 jo. Pasal 80 UU No. 5 Tahun 1986 tentang Peradilan Tata Usaha Negara.",
      "statuteText": "Pasal 107 UU No. 5 Tahun 1986: Hakim menentukan apa yang harus dibuktikan, beban pembuktian beserta penilaian pembuktian, dan untuk sahnya pembuktian diperlukan sekurang-kurangnya dua alat bukti berdasarkan keyakinan Hakim.",
      "analysis": "Opsi mengenai kewenangan hakim menentukan objek pembuktian, beban pembuktian, dan penilaian bukti minimal dua alat bukti berdasarkan keyakinan hakim tepat karena merumuskan esensi Pasal 107 UU No. 5 Tahun 1986 untuk menyeimbangkan posisi warga negara dengan kekuasaan administrasi pemerintahan. Opsi hakim pasif keliru karena bertentangan dengan ciri khas dominus litis PTUN yang membedakannya dari perdata murni; opsi beban pembuktian mutlak di pihak tergugat tidak sesuai karena hakim membagi beban pembuktian secara proporsional; dan opsi cukup satu alat bukti tanpa keyakinan hakim bertentangan langsung dengan batas minimal dua alat bukti plus keyakinan hakim pada akhir Pasal 107."
    },
    "difficulty": "Sedang"
  },
  {
    "id": 11710,
    "category": "Hukum Acara PTUN",
    "topicTag": "AUPB dalam UU Administrasi Pemerintahan",
    "question": "Dalam pengujian keabsahan Keputusan atau Tindakan Pemerintahan di PTUN berdasarkan Pasal 10 ayat (1) UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan, manakah asas yang termasuk dalam 8 (delapan) Asas-Asas Umum Pemerintahan yang Baik (AUPB)?",
    "options": [
      {
        "key": "A",
        "text": "Kepastian hukum, kemanfaatan, ketidakberpihakan, kecermatan, tidak menyalahgunakan kewenangan, keterbukaan, kepentingan umum, dan pelayanan yang baik"
      },
      {
        "key": "B",
        "text": "Praduga tak bersalah, ne bis in idem, asas legalitas pidana, dan pembuktian terbalik"
      },
      {
        "key": "C",
        "text": "Kebebasan berkontrak, pacta sunt servanda, itikad baik perdata, dan konsensualisme"
      },
      {
        "key": "D",
        "text": "Asas oportunitas penuntutan, in absentia, dan pemisahan kekuasaan yudikatif mutlak"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "Pasal 10 ayat (1) UU No. 30 Tahun 2014 mengodifikasi 8 AUPB sebagai tolok ukur keabsahan keputusan/tindakan pemerintahan di PTUN: kepastian hukum, kemanfaatan, ketidakberpihakan, kecermatan, tidak menyalahgunakan kewenangan, keterbukaan, kepentingan umum, dan pelayanan yang baik.",
      "legalBasis": "Pasal 10 ayat (1) dan ayat (2) UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan jo. Pasal 53 ayat (2) huruf b UU No. 9 Tahun 2004.",
      "statuteText": "Pasal 10 ayat (1) UU No. 30 Tahun 2014: AUPB yang dimaksud dalam Undang-Undang ini meliputi asas: a. kepastian hukum; b. kemanfaatan; c. ketidakberpihakan; d. kecermatan; e. tidak menyalahgunakan kewenangan; f. keterbukaan; g. kepentingan umum; dan h. pelayanan yang baik.",
      "analysis": "Opsi yang menyebutkan kepastian hukum, kemanfaatan, ketidakberpihakan, kecermatan, tidak menyalahgunakan kewenangan, keterbukaan, kepentingan umum, dan pelayanan yang baik tepat karena sesuai dengan delapan AUPB positif dalam Pasal 10 ayat (1) UU No. 30 Tahun 2014 yang menjadi dasar pengujian materiil hakim PTUN. Opsi mengenai praduga tak bersalah dan legalitas pidana keliru karena merupakan asas hukum pidana/acara pidana; opsi kebebasan berkontrak dan pacta sunt servanda adalah asas hukum perikatan perdata (Pasal 1338 KUHPerdata); dan opsi asas oportunitas maupun in absentia terkait kewenangan penuntutan serta persidangan pidana khusus."
    },
    "difficulty": "Mudah"
  },
  {
    "id": 11711,
    "category": "Hukum Acara PTUN",
    "topicTag": "Pemaknaan Ulang KTUN (Pasal 87 UU 30/2014)",
    "question": "Dengan berlakunya Pasal 87 UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan, pengertian Keputusan Tata Usaha Negara (KTUN) dalam UU PTUN mengalami perluasan pemaknaan yang meliputi unsur berikut ini, KECUALI...",
    "options": [
      {
        "key": "A",
        "text": "Penetapan tertulis yang juga mencakup tindakan faktual pemerintahan"
      },
      {
        "key": "B",
        "text": "Keputusan Badan dan/atau Pejabat TUN di lingkungan eksekutif, legislatif, yudikatif, dan penyelenggara negara lainnya"
      },
      {
        "key": "C",
        "text": "Keputusan yang bersifat final dalam arti lebih luas dan berpotensi menimbulkan akibat hukum"
      },
      {
        "key": "D",
        "text": "Putusan pengadilan yang dijatuhkan dalam rangka pelaksanaan fungsi yudisial mengadili perkara perdata atau pidana"
      }
    ],
    "correctAnswer": "D",
    "explanation": {
      "summary": "Pasal 87 UU No. 30 Tahun 2014 memperluas makna KTUN (mencakup tindakan faktual, pejabat di semua cabang kekuasaan, final dalam arti luas, serta keputusan yang berpotensi menimbulkan akibat hukum), tetapi tidak mengubah sifat fungsi yudisial mengadili perkara perdata atau pidana menjadi KTUN.",
      "legalBasis": "Pasal 87 UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan jo. Pasal 2 huruf e UU No. 9 Tahun 2004.",
      "statuteText": "Pasal 87 UU No. 30 Tahun 2014: Dengan berlakunya Undang-Undang ini, Keputusan Tata Usaha Negara sebagaimana dimaksud dalam UU No. 5 Tahun 1986 tentang PTUN sebagaimana telah diubah dengan UU No. 9 Tahun 2004 dan UU No. 51 Tahun 2009 harus dimaknai sebagai: a. penetapan tertulis yang juga mencakup tindakan faktual; b. Keputusan Badan dan/atau Pejabat Tata Usaha Negara di lingkungan eksekutif, legislatif, yudikatif, dan penyelenggara negara lainnya; c. berdasarkan ketentuan perundang-undangan dan AUPB; d. bersifat final dalam arti lebih luas; e. Keputusan yang berpotensi menimbulkan akibat hukum; dan/atau f. Keputusan yang berlaku bagi Warga Masyarakat.",
      "analysis": "Opsi mengenai putusan pengadilan dalam rangka pelaksanaan fungsi yudisial mengadili perkara perdata atau pidana merupakan pengecualian yang tepat karena lembaga yudikatif (dan penyelenggara negara lainnya) yang dapat digugat ke PTUN menurut Pasal 87 huruf b hanyalah keputusan administratif-kepegawaian/tata usaha negara intern maupun eksternalnya, bukan putusan yudisial mengadili perkara yang tunduk pada upaya hukum banding/kasasi serta dikecualikan Pasal 2 huruf e UU No. 9 Tahun 2004. Sebaliknya, tindakan faktual, keputusan administratif di lingkungan eksekutif–legislatif–yudikatif–penyelenggara negara lainnya, serta keputusan final dalam arti luas dan berpotensi menimbulkan akibat hukum merupakan substansi perluasan langsung dalam Pasal 87 huruf a, b, d, dan e UU No. 30 Tahun 2014."
    },
    "difficulty": "Sulit"
  },
  {
    "id": 11712,
    "category": "Hukum Acara PTUN",
    "topicTag": "Persidangan Elektronik (e-Litigasi) PTUN",
    "question": "Dalam penyelenggaraan administrasi perkara dan persidangan secara elektronik (e-Court dan e-Litigasi) di Peradilan Tata Usaha Negara berdasarkan PERMA No. 7 Tahun 2022 (perubahan atas PERMA No. 1 Tahun 2019), pembaruan krusial terkait kedudukan Tergugat (Badan/Pejabat TUN) adalah...",
    "options": [
      {
        "key": "A",
        "text": "Persidangan elektronik tidak lagi bergantung pada persetujuan Tergugat apabila gugatan didaftarkan secara elektronik, dan batas waktu jawab-jinawab dihitung menurut hari kalender"
      },
      {
        "key": "B",
        "text": "Persidangan elektronik hanya dapat dilaksanakan jika Tergugat menandatangani akta notaris persetujuan terlebih dahulu"
      },
      {
        "key": "C",
        "text": "Tergugat Pejabat TUN dilarang mengajukan jawaban maupun duplik secara tertulis dalam sistem informasi pengadilan"
      },
      {
        "key": "D",
        "text": "Pembuktian surat dan saksi dalam e-Litigasi PTUN ditiadakan sepenuhnya dan diganti konferensi video otomatis"
      }
    ],
    "correctAnswer": "A",
    "explanation": {
      "summary": "PERMA No. 7 Tahun 2022 menghapus kendala persyaratan persetujuan Tergugat dalam e-Litigasi apabila perkara didaftarkan secara elektronik serta menetapkan penghitungan batas hari jawab-jinawab menggunakan hari kalender.",
      "legalBasis": "PERMA No. 1 Tahun 2019 jo. PERMA No. 7 Tahun 2022 tentang Perubahan atas PERMA No. 1 Tahun 2019 tentang Administrasi Perkara dan Persidangan di Pengadilan Secara Elektronik.",
      "statuteText": "Pasal 20 dan Pasal 21–24 PERMA No. 1 Tahun 2019 sebagaimana diubah dengan PERMA No. 7 Tahun 2022 mengatur bahwa persidangan secara elektronik dilaksanakan pada Sistem Informasi Pengadilan bagi perkara yang didaftarkan secara elektronik tanpa lagi disyaratkan persetujuan Tergugat, dengan penyampaian gugatan, jawaban, replik, duplik, dan putusan menggunakan dokumen elektronik bertanda tangan elektronik berdasarkan hitungan hari kalender.",
      "analysis": "Opsi yang menyatakan persidangan elektronik tidak lagi bergantung pada persetujuan Tergugat dan dihitung menurut hari kalender tepat karena itulah pembaruan utama PERMA No. 7 Tahun 2022 guna mengatasi hambatan praktik e-Litigasi ketika Pejabat TUN selaku Tergugat menolak bersidang secara elektronik. Opsi kewajiban akta notaris keliru karena bertentangan dengan efisiensi pendaftaran e-Court; opsi larangan penyampaian jawaban/duplik keliru karena justru dokumen jawab-jinawab diunggah ke Sistem Informasi Pengadilan; dan opsi peniadaan pembuktian surat dan saksi keliru karena pembuktian sah tetap wajib dilakukan sesuai Pasal 100 dan Pasal 107 UU PTUN, termasuk pemeriksaan fisik dokumen asli pada sidang pembuktian."
    },
    "difficulty": "Sedang"
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
      "analysis": "Dapat diajukan pada setiap tingkatan pemeriksaan selama belum ada putusan, dan hakim wajib menyatakannya secara ex officio adalah jawaban yang tepat karena kompetensi absolut menyangkut kewenangan atribusi mengadili antar lingkungan peradilan (Peradilan Umum, Agama, TUN, atau Militer) yang bersifat ketertiban umum sesuai Pasal 134 HIR / Pasal 160 RBg. Opsi hanya dapat diajukan bersama jawaban pertama keliru karena pembatasan waktu pada jawaban pertama berlaku bagi eksepsi kompetensi relatif (Pasal 133 HIR / Pasal 159 RBg); opsi hanya boleh diajukan oleh Penggugat keliru karena eksepsi diajukan oleh Tergugat; dan opsi baru dapat diajukan pada tingkat kasasi keliru karena ketidakwenangan absolut dapat diajukan dan diputus sejak pemeriksaan tingkat pertama, bukan harus menunggu tingkat kasasi."
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
      "analysis": "Gugatan tidak dapat diterima (Niet Ontvankelijke Verklaard / NO) adalah jawaban yang tepat karena cacat formil (obscuur libel, error in persona, plurium litis consortium, prematur) mencegah pemeriksaan pokok perkara sehingga diputus NO dan tidak melekat ne bis in idem atas pokoknya. Opsi gugatan ditolak (afgewezen) keliru karena dijatuhkan setelah pokok perkara diperiksa dan dalil penggugat dinyatakan tidak terbukti; opsi gugatan dinyatakan gugur (vervallen) keliru karena dijatuhkan apabila Penggugat tidak hadir pada sidang pertama meski dipanggil patut (Pasal 124 HIR); dan opsi gugatan dikabulkan sebagian keliru karena hakim tidak dapat mengabulkan tuntutan apabila syarat formil gugatan cacat."
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
      "analysis": "Vrijwaring adalah jawaban yang tepat karena merupakan penarikan paksa pihak ketiga atas permohonan salah satu pihak (lazimnya Tergugat) guna menanggung akibat gugatan berdasarkan Pasal 70–76 Rv. Opsi voeging keliru karena merupakan keikutsertaan sukarela pihak ketiga untuk memihak salah satu pihak; opsi tussenkomst keliru karena merupakan keikutsertaan sukarela pihak ketiga yang melawan kedua pihak demi haknya sendiri; dan opsi derden verzet keliru karena merupakan perlawanan pihak ketiga terhadap sita atau pelaksanaan putusan."
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
      "analysis": "14 hari sejak putusan diberitahukan dan 14 hari setelah pendaftaran permohonan kasasi adalah jawaban yang tepat karena Pasal 46 ayat (1) dan Pasal 47 ayat (1) UU Mahkamah Agung menetapkan kedua tenggang waktu imperatif 14 hari secara terpisah (pendaftaran kasasi dan pengajuan memori kasasi setelah akta kasasi dicatat). Opsi 7 hari dan 21 hari keliru karena jangka waktu tersebut tidak berlaku pada kasasi perdata (berbeda dengan banding etik KEAI yang 21 hari); sedangkan opsi 30 hari keliru karena bukan tenggang waktu kasasi perdata melainkan jangka waktu khusus lain seperti tenggang waktu peninjauan kembali (180 hari)."
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
      "analysis": "Ultra petita adalah jawaban yang tepat karena sesuai Pasal 178 ayat (3) HIR / Pasal 189 ayat (3) RBg dan dipertegas dalam Yurisprudensi Mahkamah Agung RI No. 556 K/Sip/1971, hakim dilarang mengabulkan melebihi tuntutan atau memutus hal yang tidak dituntut, dan pelanggarannya berakibat pembatalan putusan pada tingkat banding maupun kasasi. Opsi ne bis in idem keliru karena berarti perkara yang sama tidak boleh diperiksa kembali setelah putusan berkekuatan hukum tetap; opsi res judicata pro veritate habetur keliru karena berarti putusan hakim yang telah tetap harus dianggap benar; dan opsi ius curia novit keliru karena berarti hakim dianggap tahu akan hukumnya."
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
      "analysis": "Berusia sekurang-kurangnya 25 tahun dan magang sekurang-kurangnya 2 tahun terus-menerus pada kantor Advokat adalah jawaban yang tepat karena sesuai Pasal 3 ayat (1) huruf d dan huruf g UU No. 18 Tahun 2003 (dengan kelonggaran waktu magang dapat dimulai sebelum atau sesudah lulus ujian profesi advokat). Opsi batas usia 21 tahun, 27 tahun, atau 30 tahun beserta variasi lama magang maupun syarat pernah menjabat sebagai panitera pengadilan keliru karena bertentangan dengan rumusan Pasal 3 ayat (1) UU Advokat."
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
      "analysis": "Tidak melaksanakan tugas profesi Advokat selama memangku jabatan Pejabat Negara tersebut adalah jawaban yang tepat karena Pasal 20 ayat (3) UU No. 18 Tahun 2003 mewajibkan Advokat yang menjadi pejabat negara menonaktifkan pelaksanaan tugas profesinya selama memangku jabatan tersebut guna mencegah benturan kepentingan. Opsi tetap dapat beracara khusus perdata atau sepanjang memperoleh izin atasan keliru karena larangan praktik berlaku menyeluruh selama menjabat; dan opsi langsung diberhentikan secara tetap keliru karena statusnya bersifat nonaktif selama menjabat, bukan pemberhentian permanen."
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
      "analysis": "Dilarang beracara di sidang pengadilan, berpraktik, atau membuka kantor jasa hukum di Indonesia dan hanya dapat bekerja di kantor Advokat Indonesia sebagai karyawan atau tenaga ahli hukum asing adalah jawaban yang tepat sesuai Pasal 23 ayat (1) dan ayat (2) UU No. 18 Tahun 2003. Opsi bebas beracara di seluruh pengadilan maupun diperbolehkan membuka kantor cabang firma hukum asing dan beracara di Pengadilan Niaga keliru karena advokat asing mutlak dilarang beracara di pengadilan maupun membuka kantor jasa hukum sendiri di Indonesia; sedangkan opsi dilarang sama sekali bekerja di kantor Advokat Indonesia dalam kapasitas apa pun keliru karena kantor Advokat Indonesia diperbolehkan mempekerjakan advokat asing sebagai karyawan atau tenaga ahli di bidang hukum asing dengan izin Pemerintah dan rekomendasi Organisasi Advokat."
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
      "analysis": "Dilarang membedakan perlakuan terhadap Klien berdasarkan SARA maupun latar belakang sosial serta tidak dapat diidentikkan dengan Kliennya oleh pihak berwenang atau masyarakat adalah jawaban yang tepat karena merangkum prinsip nondiskriminasi (Pasal 18 ayat (1)) dan prinsip non-identifikasi Advokat dengan Kliennya (Pasal 18 ayat (2)). Opsi dapat disamakan kedudukannya dengan kesalahan Klien keliru karena bertentangan langsung dengan prinsip bahwa pembela perkara tidak sama dengan pelaku perkara; opsi berhak membedakan pelayanan berdasarkan status ekonomi dan afiliasi politik keliru karena Advokat dilarang melakukan diskriminasi terhadap Klien; dan opsi wajib menolak seluruh terdakwa korupsi keliru karena setiap tersangka/terdakwa berhak atas pembelaan hukum (access to justice)."
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
      "analysis": "Klien, teman sejawat Advokat, pejabat pemerintah, anggota masyarakat, serta DPP/DPC/DPD organisasi profesi tempat Teradu menjadi anggota adalah jawaban yang tepat karena menyebutkan secara lengkap kelima subjek hukum yang berwenang mengajukan pengaduan pelanggaran KEAI menurut Pasal 11 ayat (1) dan ayat (2), termasuk kewenangan pengurus organisasi profesi bertindak sebagai pengadu demi kepentingan hukum dan kepentingan umum. Opsi hanya klien penerima surat kuasa khusus keliru karena hak mengadu tidak terbatas hanya pada klien penerima kuasa; opsi hanya sesama teman sejawat dan ketua pengadilan negeri keliru karena mempersempit hak mengadu dengan mengecualikan klien dan masyarakat umum; serta opsi hanya klien dan penyidik kepolisian keliru karena penyidik kepolisian tidak disebut sebagai kategori khusus, melainkan pejabat pemerintah dan masyarakat tetap berhak mengadu."
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

