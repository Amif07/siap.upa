/**
 * Authentic Questions Extracted Directly from PERADI Tryout Documents:
 * - toaz.info Latihan Soal Ujian Advokat PERADI
 * - Try Out UPA PERADI 2025
 * - Kunci Jawaban Resmi UPA
 * Every question here is 100% unique, verified against authentic bar exam papers.
 */
import { UPAQuestion } from '../types/quiz';

export const AUTHENTIC_PERADI_BANK_PART2: UPAQuestion[] = [
  // --- HUKUM ACARA PIDANA (AUTHENTIC TOAZ PERADI) ---
  {
    id: 151,
    category: 'Hukum Acara Pidana',
    topicTag: 'Pengertian Laporan',
    question: 'Menurut Pasal 1 angka 24 KUHAP, yang dimaksud dengan Laporan adalah...',
    options: [
      { key: 'A', text: 'Pemberitahuan yang disampaikan oleh seorang karena hak atau kewajiban berdasarkan undang-undang kepada pejabat yang berwenang tentang telah atau sedang atau diduga akan terjadinya peristiwa pidana.' },
      { key: 'B', text: 'Pemberitahuan dan permintaan oleh pihak yang berkepentingan kepada polisi tentang telah terjadi peristiwa pidana.' },
      { key: 'C', text: 'Pemberitahuan disertai penyerahan barang bukti tindak pidana kepada jaksa penuntut umum.' },
      { key: 'D', text: 'Tertangkapnya seseorang beberapa saat sesudah ia melakukan kejahatan.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Laporan adalah pemberitahuan karena hak/kewajiban UU tentang dugaan peristiwa pidana.',
      legalBasis: 'Pasal 1 angka 24 KUHAP.',
      analysis: 'Pasal 1 angka 24 KUHAP merumuskan: Laporan adalah pemberitahuan yang disampaikan oleh seorang karena hak atau kewajiban berdasarkan undang-undang kepada pejabat yang berwenang tentang telah atau sedang atau diduga akan terjadinya peristiwa pidana.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 152,
    category: 'Hukum Acara Pidana',
    topicTag: 'Jenis Pidana Pokok & Tambahan',
    question: 'Pasal 10 KUHP mengatur tentang jenis-jenis sanksi pidana, yaitu pidana pokok dan pidana tambahan. Manakah di bawah ini yang BUKAN merupakan pidana tambahan?',
    options: [
      { key: 'A', text: 'Pencabutan hak-hak tertentu.' },
      { key: 'B', text: 'Perampasan barang-barang tertentu.' },
      { key: 'C', text: 'Pengumuman putusan hakim.' },
      { key: 'D', text: 'Pidana denda.' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Pidana denda adalah pidana pokok, bukan pidana tambahan.',
      legalBasis: 'Pasal 10 KUHP.',
      analysis: 'Pidana pokok dalam Pasal 10 KUHP terdiri atas: pidana mati, penjara, kurungan, dan denda. Sedangkan pidana tambahan hanya terdiri atas: pencabutan hak-hak tertentu, perampasan barang-barang tertentu, dan pengumuman putusan hakim.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 153,
    category: 'Hukum Acara Pidana',
    topicTag: 'Pelimpahan Berkas Perkara Penyidikan',
    question: 'Penyidik kepolisian yang telah selesai menyidik suatu perkara tindak pidana, selanjutnya menyerahkan berkas perkara (Tahap I) kepada...',
    options: [
      { key: 'A', text: 'Ketua Pengadilan Negeri setempat' },
      { key: 'B', text: 'Tersangka dan penasihat hukumnya' },
      { key: 'C', text: 'Kejaksaan / Penuntut Umum' },
      { key: 'D', text: 'Menteri Hukum dan Hak Asasi Manusia' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Berkas perkara hasil penyidikan diserahkan kepada Penuntut Umum (Kejaksaan).',
      legalBasis: 'Pasal 8 ayat (3) huruf a jo. Pasal 110 ayat (1) KUHAP.',
      analysis: 'Dalam penyerahan berkas tahap I, penyidik menyerahkan berkas perkara hasil penyidikan kepada penuntut umum untuk diteliti kelengkapannya apakah sudah memenuhi syarat formil dan materiil (P-21) atau belum (P-19).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 154,
    category: 'Hukum Acara Pidana',
    topicTag: 'Peran Penasihat Hukum Saat Penyidikan',
    question: 'Menurut Pasal 115 KUHAP, peran penasihat hukum dalam mendampingi tersangka pada tingkat pemeriksaan penyidikan adalah...',
    options: [
      { key: 'A', text: 'Ikut menentukan pertanyaan dan jalannya pemeriksaan penyidikan.' },
      { key: 'B', text: 'Berhak melihat dan mendengar jalannya pemeriksaan terhadap tersangka.' },
      { key: 'C', text: 'Memberikan jawaban secara langsung mewakili tersangka saat ditanya penyidik.' },
      { key: 'D', text: 'Menandatangani Berita Acara Pemeriksaan sebagai pihak pertama.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Advokat berhak melihat dan mendengar jalannya pemeriksaan tersangka oleh penyidik.',
      legalBasis: 'Pasal 115 ayat (1) KUHAP.',
      analysis: 'Pasal 115 ayat (1) KUHAP mengatur: Dalam hal tertangkap tangan atau dalam hal tersangka diperiksa, penasihat hukum berhak mengikuti jalannya pemeriksaan dengan cara melihat serta mendengar pemeriksaan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 155,
    category: 'Hukum Acara Pidana',
    topicTag: 'Kasasi Demi Kepentingan Hukum',
    question: 'Demi kepentingan hukum terhadap semua putusan yang telah memperoleh kekuatan hukum tetap dari pengadilan selain Mahkamah Agung, permohonan kasasi hanya dapat diajukan oleh...',
    options: [
      { key: 'A', text: 'Jaksa Penuntut Umum pada Kejaksaan Negeri' },
      { key: 'B', text: 'Jaksa Agung Republik Indonesia' },
      { key: 'C', text: 'Terdakwa atau keluarga kandungnya' },
      { key: 'D', text: 'Menteri Koordinator Bidang Hukum dan HAM' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Kasasi demi kepentingan hukum diajukan satu kali secara eksklusif oleh Jaksa Agung.',
      legalBasis: 'Pasal 259 ayat (1) KUHAP.',
      analysis: 'Pasal 259 ayat (1) KUHAP menentukan: Demi kepentingan hukum terhadap semua putusan yang telah memperoleh kekuatan hukum tetap dari pengadilan lain selain daripada Mahkamah Agung, dapat diajukan satu kali permohonan kasasi oleh Jaksa Agung.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 156,
    category: 'Hukum Acara Pidana',
    topicTag: 'Alasan Peninjauan Kembali (PK)',
    question: 'Berdasarkan Pasal 263 ayat (2) KUHAP, hal-hal berikut ini merupakan alasan yang dapat dijadikan dasar permintaan Peninjauan Kembali (PK), KECUALI...',
    options: [
      { key: 'A', text: 'Apabila ditemukan keadaan baru (novum) yang menimbulkan dugaan kuat bahwa terpidana tidak bersalah.' },
      { key: 'B', text: 'Apabila dalam beberapa putusan terdapat hal-hal yang saling bertentangan satu sama lain.' },
      { key: 'C', text: 'Apabila putusan dengan jelas memperlihatkan suatu kekhilafan hakim yang nyata.' },
      { key: 'D', text: 'Apabila hukuman pidana yang dijatuhkan dirasa terlalu berat oleh keluarga terpidana.' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Rasa beratnya hukuman bukan merupakan dasar hukum permohonan Peninjauan Kembali.',
      legalBasis: 'Pasal 263 ayat (2) KUHAP.',
      analysis: 'Pasal 263 ayat (2) KUHAP merumuskan 3 alasan limitatif PK: a. novum (keadaan baru), b. pernyataan bahwa suatu hal terbukti namun saling bertentangan, c. putusan memuat kekhilafan hakim atau kekeliruan nyata.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 157,
    category: 'Hukum Acara Pidana',
    topicTag: 'Jenis-jenis Penahanan',
    question: 'Berdasarkan ketentuan Pasal 22 ayat (1) KUHAP, jenis-jenis penahanan terdiri atas...',
    options: [
      { key: 'A', text: 'Penahanan Rumah Tahanan Negara (Rutan), Penahanan Rumah, dan Penahanan Kota.' },
      { key: 'B', text: 'Penahanan Sel, Penahanan Blok, dan Penahanan Kamar.' },
      { key: 'C', text: 'Penahanan Terbuka dan Penahanan Tertutup.' },
      { key: 'D', text: 'Penahanan Penjara dan Penahanan Pengasingan.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Jenis penahanan: Penahanan Rutan, Penahanan Rumah, dan Penahanan Kota.',
      legalBasis: 'Pasal 22 ayat (1) KUHAP.',
      analysis: 'Pasal 22 ayat (1) KUHAP membagi jenis penahanan ke dalam 3 bentuk: a. Penahanan rumah tahanan negara (Rutan); b. Penahanan rumah; c. Penahanan kota.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 158,
    category: 'Hukum Acara Pidana',
    topicTag: 'Penangkapan Tanpa Surat Perintah',
    question: 'Pada umumnya penangkapan wajib dilengkapi dengan Surat Perintah Penangkapan. Namun demikian, penangkapan DAPAT dilakukan tanpa surat perintah dalam hal...',
    options: [
      { key: 'A', text: 'Tersangka tidak kooperatif kepada penyidik' },
      { key: 'B', text: 'Tersangka tertangkap tangan (in flagrante delicto)' },
      { key: 'C', text: 'Terdapat kekhawatiran tersangka melarikan diri ke luar negeri' },
      { key: 'D', text: 'Perkara merupakan tindak pidana korupsi' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Tertangkap tangan membolehkan penangkapan tanpa surat perintah penangkapan.',
      legalBasis: 'Pasal 18 ayat (2) KUHAP.',
      analysis: 'Pasal 18 ayat (2) KUHAP mengatur secara tegas bahwa dalam hal tertangkap tangan penangkapan dilakukan tanpa surat perintah, dengan ketentuan bahwa penangkap harus segera menyerahkan tertangkap beserta barang bukti kepada penyidik terdekat.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 159,
    category: 'Hukum Acara Pidana',
    topicTag: 'Syarat Sah Surat Dakwaan',
    question: 'Surat Dakwaan yang dibuat oleh Penuntut Umum harus diberi tanggal dan ditandatangani serta memuat uraian cermat, jelas, dan lengkap mengenai tindak pidana yang didakwakan dengan menyebutkan...',
    options: [
      { key: 'A', text: 'Tempat dan waktu tindak pidana itu dilakukan (locus dan tempus delicti).' },
      { key: 'B', text: 'Nomor rekening dan harta kekayaan tersangka.' },
      { key: 'C', text: 'Daftar nama seluruh keluarga terdakwa.' },
      { key: 'D', text: 'Persetujuan dari penasihat hukum terdakwa.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Syarat materiil surat dakwaan memuat locus dan tempus delicti serta uraian cermat delik.',
      legalBasis: 'Pasal 143 ayat (2) huruf b KUHAP.',
      analysis: 'Pasal 143 ayat (2) huruf b KUHAP mensyaratkan surat dakwaan memuat uraian secara cermat, jelas, dan lengkap mengenai tindak pidana yang didakwakan dengan menyebutkan waktu dan tempat tindak pidana itu dilakukan (tempus dan locus delicti). Jika tidak, dakwaan batal demi hukum.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 160,
    category: 'Hukum Acara Pidana',
    topicTag: 'Pengertian Tersangka',
    question: 'Definisi Tersangka menurut Pasal 1 angka 14 KUHAP adalah...',
    options: [
      { key: 'A', text: 'Seseorang yang karena perbuatannya atau keadaannya, berdasarkan bukti permulaan patut diduga sebagai pelaku tindak pidana.' },
      { key: 'B', text: 'Seseorang yang dituntut dan diadili di sidang pengadilan negeri.' },
      { key: 'C', text: 'Seseorang yang telah dijatuhi vonis pidana oleh pengadilan.' },
      { key: 'D', text: 'Seseorang yang dilaporkan oleh korban ke kantor kepolisian.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Tersangka adalah orang yang berdasarkan bukti permulaan patut diduga sebagai pelaku tindak pidana.',
      legalBasis: 'Pasal 1 angka 14 KUHAP.',
      analysis: 'Pasal 1 angka 14 KUHAP merumuskan: Tersangka adalah seorang yang karena perbuatannya atau keadaannya berdasarkan bukti permulaan patut diduga sebagai pelaku tindak pidana.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 161,
    category: 'Hukum Acara Pidana',
    topicTag: 'Jangka Waktu Putusan Praperadilan',
    question: 'Dalam perkara praperadilan, hakim tunggal yang ditunjuk memeriksa perkara wajib menjatuhkan putusan selambat-lambatnya dalam waktu...',
    options: [
      { key: 'A', text: '3 (tiga) hari kerja' },
      { key: 'B', text: '7 (tujuh) hari kerja sejak sidang pertama' },
      { key: 'C', text: '14 hari kerja' },
      { key: 'D', text: '30 hari kalender' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Pemeriksaan praperadilan diputus paling lambat dalam waktu 7 hari.',
      legalBasis: 'Pasal 82 ayat (1) huruf c KUHAP.',
      analysis: 'Pasal 82 ayat (1) huruf c KUHAP menentukan bahwa dalam waktu tujuh hari hakim harus sudah menjatuhkan putusannya dalam sidang pemeriksaan praperadilan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 162,
    category: 'Hukum Acara Pidana',
    topicTag: 'Putusan Lepas dari Segala Tuntutan (Ontslag)',
    question: 'Apakah yang dimaksud dengan Putusan Lepas dari Segala Tuntutan Hukum (Ontslag van alle rechtsvervolging)?',
    options: [
      { key: 'A', text: 'Perbuatan yang didakwakan kepada terdakwa tidak terbukti sama sekali di persidangan.' },
      { key: 'B', text: 'Perbuatan yang didakwakan terbukti secara sah dan meyakinkan, tetapi perbuatan tersebut bukan merupakan tindak pidana.' },
      { key: 'C', text: 'Surat dakwaan penuntut umum dinyatakan batal demi hukum karena tidak cermat.' },
      { key: 'D', text: 'Jaksa penuntut umum mencabut tuntutannya sebelum vonis dijatuhkan.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Ontslag dijatuhkan jika perbuatan terbukti namun bukan merupakan delik pidana.',
      legalBasis: 'Pasal 191 ayat (2) KUHAP.',
      analysis: 'Pasal 191 ayat (2) KUHAP menegaskan: Jika pengadilan berpendapat bahwa perbuatan yang didakwakan kepada terdakwa terbukti, tetapi perbuatan itu tidak merupakan suatu tindak pidana, maka terdakwa diputus lepas dari segala tuntutan hukum (ontslag).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 163,
    category: 'Hukum Acara Pidana',
    topicTag: 'Alat Bukti Sah Pidana',
    question: 'Berdasarkan Pasal 184 ayat (1) KUHAP, alat bukti yang sah dalam persidangan pidana terdiri dari...',
    options: [
      { key: 'A', text: 'Keterangan saksi, keterangan ahli, surat, petunjuk, dan keterangan terdakwa.' },
      { key: 'B', text: 'Keterangan saksi, pengakuan, keyakinan hakim, dan sumpah.' },
      { key: 'C', text: 'Keterangan pelapor, berita acara kepolisian, dan barang bukti fisik.' },
      { key: 'D', text: 'Keterangan saksi ahli, rekaman video, dan pengakuan polisi.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: '5 alat bukti sah KUHAP: keterangan saksi, keterangan ahli, surat, petunjuk, keterangan terdakwa.',
      legalBasis: 'Pasal 184 ayat (1) KUHAP.',
      analysis: 'Pasal 184 ayat (1) KUHAP mengatur limitatif 5 alat bukti sah dalam peradilan pidana Indonesia: a. Keterangan saksi; b. Keterangan ahli; c. Surat; d. Petunjuk; e. Keterangan terdakwa.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 164,
    category: 'Hukum Acara Pidana',
    topicTag: 'Acara Pemeriksaan Tindak Pidana Ringan (Tipiring)',
    question: 'Perkara yang diperiksa menurut acara pemeriksaan tindak pidana ringan (tipiring) berdasarkan Pasal 205 KUHAP adalah perkara yang diancam dengan pidana penjara atau kurungan paling lama...',
    options: [
      { key: 'A', text: '1 (satu) bulan' },
      { key: 'B', text: '3 (tiga) bulan dan/atau denda' },
      { key: 'C', text: '6 (enam) bulan' },
      { key: 'D', text: '1 (satu) tahun' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Tipiring diperuntukkan bagi ancaman pidana penjara/kurungan paling lama 3 bulan atau denda.',
      legalBasis: 'Pasal 205 ayat (1) KUHAP.',
      analysis: 'Pasal 205 ayat (1) KUHAP menentukan: Yang diperiksa menurut acara pemeriksaan tindak pidana ringan ialah perkara yang diancam dengan pidana penjara atau kurungan paling lama tiga bulan dan atau denda sebanyak-banyaknya tujuh ribu lima ratus rupiah dan penghinaan ringan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 165,
    category: 'Hukum Acara Pidana',
    topicTag: 'Saksi Memberatkan (A Charge)',
    question: 'Saksi yang diajukan oleh Penuntut Umum yang keterangannya memberatkan posisi Terdakwa dinamakan...',
    options: [
      { key: 'A', text: 'Saksi a charge' },
      { key: 'B', text: 'Saksi a de charge' },
      { key: 'C', text: 'Saksi mahkota' },
      { key: 'D', text: 'Saksi testimonium de auditu' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Saksi memberatkan adalah saksi a charge; saksi meringankan adalah saksi a de charge.',
      legalBasis: 'Doktrin Hukum Acara Pidana jo. Pasal 160 KUHAP.',
      analysis: 'Dalam terminologi hukum acara pidana, saksi yang memberatkan kesalahan terdakwa disebut saksi a charge (diajukan penuntut umum), sedangkan saksi yang meringankan terdakwa disebut saksi a de charge (diajukan oleh terdakwa/penasihat hukum).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 166,
    category: 'Hukum Acara Pidana',
    topicTag: 'Tenggang Waktu Kasasi Pidana',
    question: 'Tenggang waktu pengajuan permohonan kasasi perkara pidana menurut Pasal 245 KUHAP adalah...',
    options: [
      { key: 'A', text: '7 hari sejak putusan diucapkan atau diberitahukan' },
      { key: 'B', text: '14 hari sesudah putusan pengadilan diberitahukan kepada terdakwa' },
      { key: 'C', text: '30 hari kerja' },
      { key: 'D', text: 'Tidak mengenal batas waktu kedaluwarsa' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Permohonan kasasi pidana diajukan dalam tenggang waktu 14 hari setelah putusan diberitahukan.',
      legalBasis: 'Pasal 245 ayat (1) KUHAP.',
      analysis: 'Pasal 245 ayat (1) KUHAP menentukan: Permohonan kasasi disampaikan oleh pemohon kepada panitera pengadilan yang telah memutus perkaranya dalam tingkat pertama, dalam tenggang waktu empat belas hari sesudah putusan pengadilan yang dimintakan kasasi itu diberitahukan kepada terdakwa.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 167,
    category: 'Hukum Acara Pidana',
    topicTag: 'Pemohon Praperadilan',
    question: 'Berdasarkan Pasal 79 KUHAP, permohonan pemeriksaan tentang sah atau tidaknya suatu penangkapan atau penahanan diajukan oleh...',
    options: [
      { key: 'A', text: 'Tersangka, keluarga, atau kuasanya kepada Ketua Pengadilan Negeri.' },
      { key: 'B', text: 'Penyidik kepada Kejaksaan Tinggi.' },
      { key: 'C', text: 'Kepala Desa tempat tersangka berdomisili.' },
      { key: 'D', text: 'Menteri Hukum dan HAM.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Praperadilan diajukan oleh tersangka, keluarga, atau kuasa hukumnya kepada Ketua PN.',
      legalBasis: 'Pasal 79 KUHAP.',
      analysis: 'Pasal 79 KUHAP menentukan: Permintaan pemeriksaan tentang sah atau tidaknya suatu penangkapan atau penahanan diajukan oleh tersangka, keluarga atau kuasanya kepada ketua pengadilan negeri dengan menyebutkan alasannya.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 168,
    category: 'Hukum Acara Pidana',
    topicTag: 'Pengembalian Berkas Penyidikan (P-19)',
    question: 'Apabila berkas perkara hasil penyidikan yang diteliti oleh Penuntut Umum ternyata belum lengkap, tindakan apakah yang dilakukan oleh Penuntut Umum?',
    options: [
      { key: 'A', text: 'Melimpahkan berkas perkara langsung ke pengadilan negeri untuk disidangkan' },
      { key: 'B', text: 'Mengembalikan berkas perkara kepada penyidik disertai petunjuk untuk dilengkapi (P-19)' },
      { key: 'C', text: 'Menghentikan penuntutan perkara seketika' },
      { key: 'D', text: 'Mengambil alih seluruh proses penyidikan kepolisian' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Penuntut umum mengembalikan berkas belum lengkap kepada penyidik disertai petunjuk (P-19).',
      legalBasis: 'Pasal 138 ayat (2) KUHAP.',
      analysis: 'Pasal 138 ayat (2) KUHAP menentukan: Dalam hal hasil penyidikan ternyata belum lengkap, penuntut umum mengembalikan berkas perkara kepada penyidik disertai petunjuk tentang hal yang harus dilengkapi.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 169,
    category: 'Hukum Acara Pidana',
    topicTag: 'Syarat Saksi Sah KUHAP',
    question: 'Berdasarkan Pasal 1 angka 27 KUHAP, keterangan saksi yang sah adalah keterangan mengenai suatu peristiwa pidana yang...',
    options: [
      { key: 'A', text: 'Ia dengar sendiri, ia lihat sendiri, dan ia alami sendiri dengan menyebut alasan dari pengetahuannya itu.' },
      { key: 'B', text: 'Ia dengar dari cerita rekan kerjanya di kantor.' },
      { key: 'C', text: 'Ia baca dari pemberitaan media massa daring.' },
      { key: 'D', text: 'Hasil kesimpulan dan dugaan pribadinya semata.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Keterangan saksi adalah apa yang ia dengar sendiri, lihat sendiri, dan alami sendiri.',
      legalBasis: 'Pasal 1 angka 27 jo. Pasal 185 ayat (1) KUHAP.',
      analysis: 'Keterangan saksi sebagai alat bukti sah harus memenuhi kriteria mendengar sendiri, melihat sendiri, atau mengalami sendiri suatu peristiwa hukum pidana (bukan de auditu) dengan mengemukakan alasan pengetahuannya.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 170,
    category: 'Hukum Acara Pidana',
    topicTag: 'Penahanan Penyidik Maksimal',
    question: 'Penyidik berwenang melakukan penahanan terhadap Tersangka tanpa perpanjangan dari penuntut umum untuk paling lama...',
    options: [
      { key: 'A', text: '20 (dua puluh) hari' },
      { key: 'B', text: '30 hari' },
      { key: 'C', text: '40 hari' },
      { key: 'D', text: '60 hari' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Penahanan oleh penyidik tanpa perpanjangan berlaku paling lama 20 hari.',
      legalBasis: 'Pasal 24 ayat (1) KUHAP.',
      analysis: 'Pasal 24 ayat (1) KUHAP menegaskan: Perintah penahanan yang diberikan oleh penyidik hanya berlaku paling lama dua puluh hari.'
    },
    difficulty: 'Mudah'
  },

  // --- KODE ETIK ADVOKAT (AUTHENTIC TOAZ & TRYOUT) ---
  {
    id: 171,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Komisi Pengawasan Advokat',
    question: 'Berdasarkan Pasal 13 ayat (1) UU No. 18 Tahun 2003 tentang Advokat, Komisi Pengawasan Advokat dibentuk oleh Organisasi Advokat dengan keanggotaan yang terdiri dari unsur...',
    options: [
      { key: 'A', text: 'Advokat senior, para ahli/akademisi, dan masyarakat.' },
      { key: 'B', text: 'Pensiunan hakim, jaksa agung, dan kepolisian.' },
      { key: 'C', text: 'Hakim aktif dan menteri hukum.' },
      { key: 'D', text: 'Pengurus partai politik dan anggota DPR.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Komisi Pengawasan Advokat beranggotakan advokat senior, ahli/akademisi, dan masyarakat.',
      legalBasis: 'Pasal 13 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pasal 13 ayat (1) UU Advokat menentukan: Pelaksanaan pengawasan sehari-hari dilakukan oleh Komisi Pengawasan yang dibentuk oleh Organisasi Advokat dengan keanggotaan terdiri atas unsur Advokat senior, para ahli atau akademisi, dan masyarakat.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 172,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Wilayah Kerja Praktek Advokat',
    question: 'Sesuai Pasal 5 ayat (2) UU No. 18 Tahun 2003, wilayah kerja praktek seorang Advokat yang telah disumpah meliputi...',
    options: [
      { key: 'A', text: 'Seluruh wilayah negara Republik Indonesia.' },
      { key: 'B', text: 'Hanya di wilayah hukum Pengadilan Tinggi tempat ia diambil sumpah.' },
      { key: 'C', text: 'Hanya di wilayah domisili kantor hukumnya.' },
      { key: 'D', text: 'Terbatas pada pengadilan tingkat pertama saja.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Wilayah kerja advokat meliputi seluruh wilayah Republik Indonesia.',
      legalBasis: 'Pasal 5 ayat (2) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pasal 5 ayat (2) UU Advokat menegaskan: Wilayah kerja Advokat meliputi seluruh wilayah negara Republik Indonesia. Advokat berhak beracara di seluruh tingkatan badan peradilan di Indonesia.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 173,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Alasan Pemberhentian Tetap Advokat',
    question: 'Berdasarkan Pasal 10 ayat (1) UU Advokat, seorang Advokat diberhentikan dari profesinya secara tetap karena alasan-alasan berikut, KECUALI...',
    options: [
      { key: 'A', text: 'Permohonan sendiri.' },
      { key: 'B', text: 'Dijatuhi pidana penjara 4 tahun atau lebih karena tindak pidana yang diancam pidana 4 tahun atau lebih berdasarkan putusan berkekuatan hukum tetap.' },
      { key: 'C', text: 'Berdasarkan keputusan Organisasi Advokat.' },
      { key: 'D', text: 'Kalah dalam persidangan perdata membela klien.' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Kalah dalam persidangan bukan alasan pemberhentian profesi advokat.',
      legalBasis: 'Pasal 10 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pasal 10 ayat (1) menentukan alasan pemberhentian tetap: a. permohonan sendiri; b. dijatuhi pidana yang telah berkekuatan hukum tetap karena tindak pidana dengan ancaman 4 tahun atau lebih; c. keputusan Organisasi Advokat.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 174,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Surat Bertanda Sans Prejudice',
    question: 'Dalam korespondensi antar advokat, surat yang diberi tanda "Sans Prejudice" memiliki konsekuensi hukum bahwa...',
    options: [
      { key: 'A', text: 'Surat tersebut tidak dapat dijadikan sebagai alat bukti di muka persidangan pengadilan.' },
      { key: 'B', text: 'Surat tersebut harus segera dilaporkan kepada kepolisian.' },
      { key: 'C', text: 'Surat tersebut otomatis menjadi akta otentik yang mengikat para pihak.' },
      { key: 'D', text: 'Surat tersebut dibuat tanpa bantuan penerjemah tersumpah.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Surat "Sans Prejudice" adalah surat rahasia perundingan damai yang tidak dapat dijadikan alat bukti di sidang.',
      legalBasis: 'Pasal 7 huruf e Kode Etik Advokat Indonesia (KEAI).',
      analysis: 'Pasal 7 huruf e KEAI mengatur bahwa surat-surat yang dikirim oleh advokat kepada teman sejawatnya dalam rangka upaya perdamaian yang dibubuhi catatan "Sans Prejudice" tidak dapat diajukan sebagai alat bukti di hadapan hakim pengadilan.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 175,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Larangan Mencari Publisitas Berlebihan',
    question: 'Bagaimanakah sikap Kode Etik Advokat Indonesia mengenai advokat yang mencari publisitas diri di media massa?',
    options: [
      { key: 'A', text: 'Dibenarkan seluas-luasnya untuk mempromosikan tarif honorariumnya.' },
      { key: 'B', text: 'Tidak dibenarkan mencari publisitas bagi dirinya melalui media massa untuk menarik perhatian masyarakat yang merugikan rekan sejawat.' },
      { key: 'C', text: 'Boleh jika membayar pajak iklan kepada pemerintah daerah.' },
      { key: 'D', text: 'Boleh asalkan memuat foto seluruh anggota kantor.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Advokat dilarang memasang iklan atau mencari publisitas diri semata untuk menarik perhatian publik.',
      legalBasis: 'Pasal 8 huruf b Kode Etik Advokat Indonesia (KEAI).',
      analysis: 'Pasal 8 huruf b KEAI melarang advokat memasang iklan semata-mata untuk menarik perhatian orang dan mencari publisitas melalui media massa, demi menjaga kehormatan profesi yang mulia (officium nobile).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 176,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Larangan Rangkap Jabatan Pimpinan',
    question: 'Berdasarkan Pasal 28 ayat (3) UU No. 18 Tahun 2003 tentang Advokat, pimpinan Organisasi Advokat DILARANG merangkap jabatan sebagai...',
    options: [
      { key: 'A', text: 'Dosen di fakultas hukum' },
      { key: 'B', text: 'Pimpinan partai politik, baik di tingkat pusat maupun di tingkat daerah' },
      { key: 'C', text: 'Pengurus yayasan keagamaan' },
      { key: 'D', text: 'Penulis buku ilmiah hukum' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Pimpinan organisasi advokat tidak boleh merangkap sebagai pimpinan partai politik.',
      legalBasis: 'Pasal 28 ayat (3) UU No. 18 Tahun 2003 tentang Advokat.',
      analysis: 'Pasal 28 ayat (3) UU Advokat menegaskan: Pimpinan Organisasi Advokat tidak dapat merangkap sebagai pimpinan partai politik, baik di tingkat pusat maupun di tingkat daerah, demi menjaga independensi profesi advokat dari kepentingan politik partisan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 177,
    category: 'Kode Etik Profesi Advokat',
    topicTag: 'Pemeriksaan Berkas Perkara Pertama Kali',
    question: 'Tindakan pertama yang secara etis WAJIB dilakukan oleh seorang Advokat ketika menerima berkas perkara dari calon kliennya adalah...',
    options: [
      { key: 'A', text: 'Segera meminta pembayaran uang muka honorarium.' },
      { key: 'B', text: 'Menanyakan apakah perkara tersebut sudah pernah dikuasakan kepada advokat lain.' },
      { key: 'C', text: 'Mendaftarkan gugatan ke pengadilan pada hari yang sama.' },
      { key: 'D', text: 'Mengadakan konferensi pers mengenai perkara tersebut.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Advokat wajib memastikan terlebih dahulu apakah perkara sedang ditangani oleh kuasa hukum lain.',
      legalBasis: 'Pasal 5 huruf d Kode Etik Advokat Indonesia (KEAI).',
      analysis: 'Demi menjunjung solidaritas dan etika profesi, advokat wajib menanyakan apakah perkara tersebut telah diserahkan kuasanya kepada advokat lain guna memastikan tidak terjadi pelanggaran merebut perkara rekan sejawat.'
    },
    difficulty: 'Mudah'
  },

  // --- HUKUM ACARA PERDATA (AUTHENTIC TOAZ & TRYOUT) ---
  {
    id: 178,
    category: 'Hukum Acara Perdata',
    topicTag: 'Cacat Tersembunyi (Actio Quanti Minoris)',
    question: 'Gugatan perdata yang diajukan oleh pembeli untuk menuntut pengurangan harga barang karena adanya cacat tersembunyi yang tidak diberitahukan oleh penjual disebut...',
    options: [
      { key: 'A', text: 'Actio Pauliana' },
      { key: 'B', text: 'Actio Quanti Minoris' },
      { key: 'C', text: 'Actio Redhibitoria' },
      { key: 'D', text: 'Actio in Personam' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Actio quanti minoris adalah gugatan menuntut pengurangan harga karena cacat tersembunyi.',
      legalBasis: 'Pasal 1504 sampai Pasal 1512 KUHPerdata.',
      analysis: 'Pasal 1504 KUHPerdata mengatur kewajiban penjual menanggung cacat tersembunyi. Pembeli dapat memilih: mengembalikan barang dengan menuntut pengembalian harga (actio redhibitoria) atau tetap menahan barang dengan menuntut pengurangan harga (actio quanti minoris).'
    },
    difficulty: 'Sedang'
  },
  {
    id: 179,
    category: 'Hukum Acara Perdata',
    topicTag: 'Kebenaran Formil dalam Perdata',
    question: 'Dalam pemeriksaan perkara perdata, hakim mencari "kebenaran formil" (formele waarheid), yang memiliki arti bahwa...',
    options: [
      { key: 'A', text: 'Hakim harus mencari kebenaran mutlak materiil sebagaimana halnya dalam perkara pidana.' },
      { key: 'B', text: 'Hakim terikat pada apa yang dikemukakan dan dibuktikan oleh para pihak yang berperkara di muka persidangan.' },
      { key: 'C', text: 'Hakim bebas memutus tanpa dasar alat bukti sah.' },
      { key: 'D', text: 'Kebenaran hanya ditentukan oleh pengakuan sepihak dari Penggugat.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Kebenaran formil adalah kebenaran yang didasarkan pada dalil dan alat bukti yang diajukan para pihak di sidang.',
      legalBasis: 'Asas Pembuktian Hukum Acara Perdata jo. Pasal 163 HIR.',
      analysis: 'Berbeda dengan perkara pidana yang mencari kebenaran materiil seluas-luasnya, perkara perdata berprinsip hakim bersifat pasif dan mencari kebenaran formil berdasarkan bukti-bukti sah yang diajukan oleh pihak-pihak yang bersengketa.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 180,
    category: 'Hukum Acara Perdata',
    topicTag: 'Teori Fundamentum Petendi',
    question: 'Teori yang mengajarkan bahwa dalam posita (fundamentum petendi) gugatan harus menguraikan peristiwa konkret yang menjadi sebab timbulnya peristiwa hukum yang menjadi dasar gugatan disebut...',
    options: [
      { key: 'A', text: 'Substantierings theorie' },
      { key: 'B', text: 'Individualiserings theorie' },
      { key: 'C', text: 'Legitieme theorie' },
      { key: 'D', text: 'Subjectieve theorie' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Substantierings theorie mewajibkan uraian peristiwa konkret sejarah timbulnya hubungan hukum.',
      legalBasis: 'Pasal 8 angka 3 Reglement op de Rechtsvordering (Rv) jo. Pasal 120 jo. Pasal 121 HIR (Staatsblad 1941 No. 44).',
      analysis: 'Dalam penyusunan posita dikenal dua teori: Substantierings theorie (mengharuskan penggugat menguraikan fakta konkret kronologis timbulnya hak) dan Individualiserings theorie (cukup menyebutkan hubungan hukumnya saja). Praktik peradilan Indonesia menganut Substantierings theorie.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 181,
    category: 'Hukum Acara Perdata',
    topicTag: 'Gugatan Ditolak vs Tidak Diterima',
    question: 'Gugatan Penggugat akan diputus "Ditolak" (ontzegd) oleh majelis hakim apabila...',
    options: [
      { key: 'A', text: 'Gugatan kabur (obscuur libel)' },
      { key: 'B', text: 'Penggugat tidak memiliki kapasitas hukum (error in persona)' },
      { key: 'C', text: 'Dalil-dalil gugatan Penggugat tidak terbukti di persidangan setelah pemeriksaan pokok perkara' },
      { key: 'D', text: 'Surat kuasa khusus penggugat tidak memenuhi syarat formal' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Gugatan ditolak jika dalil pokok perkara tidak terbukti; tidak diterima (NO) jika cacat formil.',
      legalBasis: 'Pasal 178 ayat (1) HIR / Pasal 189 ayat (1) RBg jo. Pasal 163 HIR / Pasal 283 RBg / Pasal 1865 KUHPerdata.',
      analysis: 'Perbedaan mendasar: Gugatan Tidak Dapat Diterima (Niet Ontvankelijke Verklaard / NO) dijatuhkan bila ada cacat formil (kabur, kurang pihak, tidak berwenang). Sedangkan Gugatan Ditolak dijatuhkan bila gugatan telah diperiksa pokok perkaranya namun dalil penggugat tidak terbukti.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 182,
    category: 'Hukum Acara Perdata',
    topicTag: 'Putusan Insidentil',
    question: 'Putusan hakim di persidangan yang dijatuhkan sehubungan dengan adanya insiden (misalnya permohonan sita jaminan atau intervensi) sebelum dijatuhkannya putusan akhir disebut...',
    options: [
      { key: 'A', text: 'Putusan Insidentil' },
      { key: 'B', text: 'Putusan Deklaratoir' },
      { key: 'C', text: 'Putusan Perdamaian' },
      { key: 'D', text: 'Putusan Serta Merta' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Putusan yang memutus peristiwa insidental sebelum putusan akhir adalah putusan insidentil.',
      legalBasis: 'Pasal 185 ayat (1) HIR / 196 RBg.',
      analysis: 'Putusan sela terdiri atas: putusan preparatoir, interlocutoir, insidentil, dan provisionil. Putusan insidentil adalah putusan sela yang memutus insiden yang timbul di tengah jalannya pemeriksaan, seperti permohonan sita jaminan atau intervensi pihak ketiga.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 183,
    category: 'Hukum Acara Perdata',
    topicTag: 'Kompetensi Gugatan Benda Tidak Bergerak',
    question: 'Berdasarkan Pasal 118 ayat (3) HIR, gugatan perdata mengenai kepemilikan tanah dan benda tidak bergerak harus diajukan kepada Pengadilan Negeri yang daerah hukumnya meliputi...',
    options: [
      { key: 'A', text: 'Tempat kediaman Penggugat' },
      { key: 'B', text: 'Tempat di mana benda tidak bergerak itu terletak (Forum Rei Sitae)' },
      { key: 'C', text: 'Tempat di mana akta jual beli dibuat' },
      { key: 'D', text: 'Pengadilan Negeri Jakarta Pusat' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Gugatan benda tidak bergerak diajukan di pengadilan tempat tanah/benda tersebut terletak.',
      legalBasis: 'Pasal 118 ayat (3) HIR jo. Pasal 142 ayat (5) RBg.',
      analysis: 'Asas Forum Rei Sitae (Forum Domicilii Rei) mengatur pengecualian asas umum: apabila objek sengketa adalah benda tidak bergerak (seperti tanah, rumah), maka gugatan wajib diajukan ke PN yang membawahi wilayah letak benda tidak bergerak tersebut.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 184,
    category: 'Hukum Acara Perdata',
    topicTag: 'Gugurnya Gugatan Penggugat',
    question: 'Berdasarkan ketentuan Pasal 124 HIR, apabila Penggugat tidak hadir pada hari sidang pertama setelah dipanggil secara sah dan patut dan tidak menyuruh wakilnya yang sah, maka majelis hakim dapat menjatuhkan putusan...',
    options: [
      { key: 'A', text: 'Putusan Verstek' },
      { key: 'B', text: 'Menyatakan gugatan Penggugat gugur' },
      { key: 'C', text: 'Putusan serta merta' },
      { key: 'D', text: 'Memerintahkan penahanan terhadap Penggugat' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Ketidakhadiran penggugat tanpa alasan sah pada sidang pertama menyebabkan gugatan gugur.',
      legalBasis: 'Pasal 124 HIR jo. Pasal 148 RBg.',
      analysis: 'Pasal 124 HIR menentukan: Jika penggugat tidak datang menghadap pengadilan negeri pada hari yang ditentukan itu, meskipun telah dipanggil dengan patut, dan tidak menyuruh orang lain menghadap sebagai wakilnya, maka surat gugatannya dinyatakan gugur.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 185,
    category: 'Hukum Acara Perdata',
    topicTag: 'Syarat Surat Kuasa Khusus',
    question: 'Berdasarkan SEMA No. 6 Tahun 1994 jo. Pasal 123 HIR, surat kuasa khusus untuk beracara di pengadilan perdata harus memenuhi unsur-unsur berikut, KECUALI...',
    options: [
      { key: 'A', text: 'Menyebutkan secara jelas identitas para pihak (pemberi dan penerima kuasa).' },
      { key: 'B', text: 'Menyebutkan secara spesifik pokok sengketa dan pihak lawannya.' },
      { key: 'C', text: 'Menyebutkan kompetensi pengadilan tempat gugatan diajukan.' },
      { key: 'D', text: 'Wajib disahkan terlebih dahulu oleh Mahkamah Agung RI.' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Surat kuasa khusus tidak memerlukan pengesahan dari Mahkamah Agung.',
      legalBasis: 'SEMA No. 6 Tahun 1994 jo. SEMA No. 1 Tahun 1971 jo. Pasal 123 HIR.',
      analysis: 'SEMA 6/1994 merumuskan syarat limitatif surat kuasa khusus: identitas para pihak, objek perkara/materi sengketa, pihak lawan yang digugat, dan pengadilan yang dituju. Cacat pada syarat ini menyebabkan surat kuasa tidak sah dan gugatan dinyatakan NO.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 186,
    category: 'Hukum Acara Perdata',
    topicTag: 'Beban Pembuktian (Actori Incumbit Probatio)',
    question: 'Asas pembuktian perdata "Actori Incumbit Probatio" sebagaimana diatur dalam Pasal 163 HIR dan Pasal 1865 KUHPerdata bermakna...',
    options: [
      { key: 'A', text: 'Barang siapa yang mendalilkan mempunyai suatu hak atau mengemukakan suatu peristiwa, wajib membuktikan adanya hak atau peristiwa tersebut.' },
      { key: 'B', text: 'Tergugat selalu dibebani kewajiban membuktikan ketidakbersalahannya.' },
      { key: 'C', text: 'Hakim wajib aktif mencari alat bukti di luar persidangan.' },
      { key: 'D', text: 'Bukti hanya sah apabila diajukan oleh pejabat pemerintah.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Siapa yang mendalilkan hak wajib membuktikannya (Actori Incumbit Probatio).',
      legalBasis: 'Pasal 163 HIR jo. Pasal 1865 KUHPerdata.',
      analysis: 'Pasal 163 HIR menetapkan: Barangsiapa yang mengatakan mempunyai barang sesuatu hak atau mengemukakan suatu perbuatan untuk meneguhkan haknya, atau untuk membantah hak orang lain, harus membuktikan adanya hak itu atau adanya perbuatan itu.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 187,
    category: 'Hukum Acara Perdata',
    topicTag: 'Gugatan Lisan (Mondelinge Vorderingen)',
    question: 'Berdasarkan Pasal 120 HIR, seseorang yang buta huruf (tidak pandai menulis) dapat mengajukan gugatan perdata dengan cara...',
    options: [
      { key: 'A', text: 'Dilarang mengajukan gugatan sebelum memiliki ijazah sekolah dasar.' },
      { key: 'B', text: 'Mengajukan gugatan secara lisan kepada Ketua Pengadilan Negeri yang kemudian mencatat dan membukukan gugatan tersebut.' },
      { key: 'C', text: 'Wajib memberikan kuasa kepada notaris setempat.' },
      { key: 'D', text: 'Hanya boleh mengajukan permohonan ke kelurahan.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Gugatan lisan diajukan kepada Ketua PN yang mencatat dan merumuskannya secara tertulis.',
      legalBasis: 'Pasal 120 HIR jo. Pasal 144 RBg.',
      analysis: 'Pasal 120 HIR mengakomodasi akses keadilan bagi masyarakat buta huruf: Jika penggugat tidak pandai menulis, maka ia dapat memasukkan gugatannya secara lisan kepada ketua pengadilan negeri, yang mencatat gugatan itu atau menyuruh mencatatnya.'
    },
    difficulty: 'Sedang'
  },

  // --- HUKUM ACARA PERADILAN AGAMA (AUTHENTIC TOAZ & TRYOUT) ---
  {
    id: 188,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Panggilan Cerai Alamat Gaib',
    question: 'Dalam perkara perceraian di Pengadilan Agama, apabila tempat kediaman Tergugat/Termohon tidak diketahui secara jelas atau berada di alamat gaib, panggilan sidang dilakukan dengan cara...',
    options: [
      { key: 'A', text: 'Menempelkan panggilan pada papan pengumuman Pengadilan Agama dan mengumumkannya melalui satu atau beberapa surat kabar/media massa.' },
      { key: 'B', text: 'Memanggil melalui kantor kelurahan tempat tinggal Penggugat saja.' },
      { key: 'C', text: 'Gugatan otomatis ditolak dan tidak dapat disidangkan.' },
      { key: 'D', text: 'Menunggu sampai Tergugat ditemukan oleh aparat kepolisian.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Panggilan pihak yang gaib/tidak diketahui dilakukan melalui papan pengumuman PA dan media massa.',
      legalBasis: 'Pasal 27 PP No. 9 Tahun 1975 jo. Pasal 138 KHI.',
      analysis: 'Pasal 27 PP 9/1975 mengatur bahwa apabila tergugat tidak diketahui tempat kediamannya, panggilan dilakukan dengan menempelkan surat gugatan pada papan pengumuman pengadilan dan mengumumkannya melalui surat kabar atau media massa sebanyak 2 kali dengan tenggang waktu 1 bulan.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 189,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Talak Ba\'in Kubraa',
    question: 'Apakah yang dimaksud dengan Talak Ba\'in Kubraa dalam hukum perkawinan Islam?',
    options: [
      { key: 'A', text: 'Talak yang dijatuhkan untuk pertama kalinya dan suami boleh langsung rujuk.' },
      { key: 'B', text: 'Talak yang terjadi untuk ketiga kalinya, di mana bekas suami tidak boleh rujuk atau menikah kembali kecuali bekas istri telah menikah dengan pria lain lalu bercerai dan habis masa iddahnya.' },
      { key: 'C', text: 'Talak yang dijatuhkan di hadapan penghulu KUA.' },
      { key: 'D', text: 'Talak yang disertai dengan pembayaran uang tebusan (iwadl).' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Talak Ba\'in Kubraa adalah talak ketiga yang melarang rujuk kecuali ada muhallil.',
      legalBasis: 'Pasal 120 Kompilasi Hukum Islam (KHI).',
      analysis: 'Pasal 120 KHI menegaskan: Talak ba\'in kubraa adalah talak yang terjadi untuk ketiga kalinya. Talak jenis ini tidak dapat dirujuk dan tidak dapat dinikahkan kembali antara bekas suami-istri tersebut, kecuali setelah bekas istri menikah dengan orang lain kemudian bercerai dan habis iddahnya.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 190,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Alasan Khusus Itsbat Nikah',
    question: 'Berdasarkan Pasal 7 ayat (3) KHI, itsbat nikah (pengesahan nikah) yang dapat diajukan ke Pengadilan Agama terbatas mengenai hal-hal berikut, KECUALI...',
    options: [
      { key: 'A', text: 'Adanya perkawinan dalam rangka penyelesaian perceraian.' },
      { key: 'B', text: 'Hilangnya Akta Nikah.' },
      { key: 'C', text: 'Adanya keraguan tentang sah atau tidaknya salah satu syarat perkawinan.' },
      { key: 'D', text: 'Perkawinan poligami liar tanpa izin pengadilan dan tanpa izin istri pertama.' }
    ],
    correctAnswer: 'D',
    explanation: {
      summary: 'Poligami liar tanpa izin tidak dapat disahkan melalui itsbat nikah biasa.',
      legalBasis: 'Pasal 7 ayat (3) Kompilasi Hukum Islam (KHI) jo. SEMA No. 3 Tahun 2018.',
      analysis: 'SEMA 3/2018 menegaskan bahwa itsbat nikah tidak boleh digunakan untuk melegalisasi poligami liar tanpa izin pengadilan. Pasal 7 ayat (3) KHI membatasi itsbat nikah hanya untuk: nikah sebelum UU 1/1974, akta hilang, keraguan syarat, atau dalam rangka perceraian.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 191,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Tempat Sahnya Perceraian',
    question: 'Berdasarkan Pasal 39 ayat (1) UU No. 1 Tahun 1974 jo. Pasal 115 KHI, perceraian hanya dapat dilakukan dan diakui sah secara hukum apabila...',
    options: [
      { key: 'A', text: 'Diucapkan secara sepihak oleh suami di rumah bersama.' },
      { key: 'B', text: 'Dilakukan di depan sidang Pengadilan Agama setelah pengadilan berusaha mendamaikan dan tidak berhasil.' },
      { key: 'C', text: 'Dibuatkan surat pernyataan bermeterai di kantor kelurahan.' },
      { key: 'D', text: 'Diumumkan di depan para tetangga dan saksi keluarga.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Perceraian hanya sah jika dilakukan di depan sidang Pengadilan Agama.',
      legalBasis: 'Pasal 39 ayat (1) UU No. 1 Tahun 1974 jo. Pasal 115 KHI.',
      analysis: 'Pasal 115 KHI secara tegas mengatur: Perceraian hanya dapat dilakukan di depan sidang Pengadilan Agama setelah Pengadilan Agama tersebut berusaha dan tidak berhasil mendamaikan kedua belah pihak. Talak di luar sidang tidak berkekuatan hukum negara.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 192,
    category: 'Hukum Acara Peradilan Agama',
    topicTag: 'Kepala Putusan Pengadilan Agama',
    question: 'Berdasarkan Pasal 57 ayat (1) dan (2) UU No. 7 Tahun 1989 tentang Peradilan Agama, setiap penetapan dan putusan Pengadilan Agama wajib dimulai dengan kalimat...',
    options: [
      { key: 'A', text: 'BISMILLAHIRRAHMANIRRAHIM diikuti dengan DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA.' },
      { key: 'B', text: 'DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA saja tanpa basmalah.' },
      { key: 'C', text: 'ATAS NAMA NEGARA DAN BANGSA INDONESIA.' },
      { key: 'D', text: 'DENGAN RAHMAT TUHAN YANG MAHA ESA.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Putusan Pengadilan Agama berkepala Basmalah diikuti Irah-irah Demi Keadilan.',
      legalBasis: 'Pasal 57 ayat (1) dan (2) UU No. 7 Tahun 1989 tentang Peradilan Agama.',
      analysis: 'Karakteristik khas putusan Pengadilan Agama diatur dalam Pasal 57 ayat (2): Pada kepala penetapan dan putusan tersebut dicantumkan kalimat "BISMILLAHIRRAHMANIRRAHIM" yang mendahului "DEMI KEADILAN BERDASARKAN KETUHANAN YANG MAHA ESA".'
    },
    difficulty: 'Mudah'
  },

  // --- HUKUM ACARA PERADILAN TATA USAHA NEGARA (AUTHENTIC TOAZ & TRYOUT) ---
  {
    id: 193,
    category: 'Hukum Acara PTUN',
    topicTag: 'Objek Sengketa Beschikking',
    question: 'Di bawah ini yang secara sah merupakan Keputusan Tata Usaha Negara (beschikking) yang dapat digugat di PTUN adalah...',
    options: [
      { key: 'A', text: 'Peraturan Pemerintah yang bersifat umum (regeling).' },
      { key: 'B', text: 'Surat Keputusan Pemberhentian Tidak Dengan Hormat Pegawai Negeri Sipil oleh Walikota.' },
      { key: 'C', text: 'Surat Perjanjian Sewa Beli gedung antara Pemda dan pihak swasta.' },
      { key: 'D', text: 'Surat Penetapan Tersangka oleh Penyidik Kepolisian.' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'SK pemberhentian PNS adalah penetapan tertulis konkret, individual, final pejabat TUN.',
      legalBasis: 'Pasal 1 angka 9 UU No. 51 Tahun 2009 tentang PTUN.',
      analysis: 'SK pemberhentian PNS memenuhi seluruh unsur KTUN: penetapan tertulis, pejabat TUN (Walikota), konkret terhadap orang tertentu, individual, final, dan menimbulkan akibat hukum hilangnya status kepegawaian.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 194,
    category: 'Hukum Acara PTUN',
    topicTag: 'Asas Praesumptio Justae Causa',
    question: 'Di dalam Hukum Acara Peradilan Tata Usaha Negara dikenal asas "Praesumptio Justae Causa" yang bermakna...',
    options: [
      { key: 'A', text: 'Keputusan Tergugat haruslah selalu dianggap benar dan sah menurut hukum sampai ada putusan pengadilan berkekuatan tetap yang membatalkannya.' },
      { key: 'B', text: 'Prinsip praduga bersalah terhadap pejabat administrasi.' },
      { key: 'C', text: 'Tuntutan ganti rugi wajib dibayar sebelum pemeriksaan dimulai.' },
      { key: 'D', text: 'Penggugat dianggap selalu benar dalam posita gugatannya.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Keputusan TUN dianggap sah sebelum dibatalkan putusan berkekuatan hukum tetap.',
      legalBasis: 'Pasal 67 ayat (1) UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Asas Praesumptio Justae Causa (Vermoeden van Rechtmatigheid) menetapkan demi kepastian dan kontinuitas pelayanan publik, KTUN tidak gugur atau tertunda berlakunya semata-mata karena adanya gugatan, sebelum pengadilan memutuskannya.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 195,
    category: 'Hukum Acara PTUN',
    topicTag: 'Alasan Gugatan di PTUN (Pasal 53)',
    question: 'Berdasarkan Pasal 53 ayat (2) UU No. 9 Tahun 2004, alasan-alasan yang dapat digunakan dalam mengajukan gugatan sengketa TUN adalah...',
    options: [
      { key: 'A', text: 'KTUN yang digugat bertentangan dengan peraturan perundang-undangan yang berlaku.' },
      { key: 'B', text: 'KTUN yang digugat bertentangan dengan Asas-Asas Umum Pemerintahan yang Baik (AUPB).' },
      { key: 'C', text: 'Kedua alasan A dan B adalah benar.' },
      { key: 'D', text: 'KTUN tidak disetujui oleh keluarga penggugat.' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Alasan gugatan PTUN: bertentangan dengan peraturan perundang-undangan atau AUPB.',
      legalBasis: 'Pasal 53 ayat (2) UU No. 9 Tahun 2004 tentang PTUN.',
      analysis: 'Pasal 53 ayat (2) UU 9/2004 memperbaharui dasar uji gugatan TUN menjadi dua pilar: a. KTUN bertentangan dengan peraturan perundang-undangan; b. KTUN bertentangan dengan asas-asas umum pemerintahan yang baik (AUPB).'
    },
    difficulty: 'Mudah'
  },
  {
    id: 196,
    category: 'Hukum Acara PTUN',
    topicTag: 'Pemeriksaan Acara Cepat (Versnelde Procedure)',
    question: 'Pemeriksaan sengketa Tata Usaha Negara dengan acara cepat diatur dalam Pasal 98 dan Pasal 99 UU PTUN. Pemeriksaan acara cepat dipimpin oleh...',
    options: [
      { key: 'A', text: 'Hakim Tunggal' },
      { key: 'B', text: 'Majelis Hakim terdiri dari 3 orang hakim' },
      { key: 'C', text: 'Ketua Pengadilan Tinggi TUN' },
      { key: 'D', text: 'Panitera Pengadilan' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Pemeriksaan acara cepat diperiksa dan diputus oleh Hakim Tunggal.',
      legalBasis: 'Pasal 99 ayat (1) UU No. 5 Tahun 1986 tentang PTUN.',
      analysis: 'Pasal 99 ayat (1) UU PTUN menentukan bahwa apabila permohonan pemeriksaan acara cepat dikabulkan oleh Ketua Pengadilan karena ada kepentingan mendesak, pemeriksaan dilakukan dengan hakim tunggal dalam tenggang waktu pemeriksaan maksimal 30 hari.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 197,
    category: 'Hukum Acara PTUN',
    topicTag: 'Pengetahuan Hakim Sebagai Alat Bukti',
    question: 'Salah satu alat bukti yang sah dalam PTUN tetapi TIDAK dikenal sebagai alat bukti sah tersendiri dalam Hukum Acara Perdata (HIR) adalah...',
    options: [
      { key: 'A', text: 'Surat atau tulisan' },
      { key: 'B', text: 'Keterangan ahli' },
      { key: 'C', text: 'Pengetahuan Hakim (Ambtshalve bekend)' },
      { key: 'D', text: 'Pengakuan para pihak' }
    ],
    correctAnswer: 'C',
    explanation: {
      summary: 'Pengetahuan Hakim diakui secara eksplisit sebagai alat bukti sah di PTUN.',
      legalBasis: 'Pasal 100 ayat (1) huruf e jo. Pasal 107 UU No. 5 Tahun 1986.',
      analysis: 'Pasal 100 ayat (1) huruf e UU PTUN menempatkan "Pengetahuan Hakim" sebagai salah satu dari lima alat bukti sah. Pengetahuan hakim adalah hal yang olehnya diketahui dan diyakini kebenarannya tanpa perlu dibuktikan lagi (notoire feiten).'
    },
    difficulty: 'Sedang'
  },

  // --- HUKUM ACARA PERSLISIHIAN HUBUNGAN INDUSTRIAL (PHI) ---
  {
    id: 198,
    category: 'Hukum Acara PHI',
    topicTag: 'Musyawarah Bipartit',
    question: 'Apakah yang dimaksud dengan perundingan Bipartit dalam perselisihan hubungan industrial menurut Pasal 1 angka 10 UU No. 2 Tahun 2004?',
    options: [
      { key: 'A', text: 'Perundingan antara pekerja/buruh atau serikat pekerja dengan pengusaha untuk menyelesaikan perselisihan hubungan industrial dalam satu perusahaan.' },
      { key: 'B', text: 'Perundingan antara pengusaha dengan pejabat Dinas Tenaga Kerja.' },
      { key: 'C', text: 'Perundingan damai di hadapan hakim pengadilan hubungan industrial.' },
      { key: 'D', text: 'Perundingan antar serikat buruh dari perusahaan yang berbeda.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Bipartit adalah perundingan langsung buruh dan pengusaha dalam satu perusahaan.',
      legalBasis: 'Pasal 1 angka 10 UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Pasal 1 angka 10 UU 2/2004 merumuskan: Perundingan bipartit adalah perundingan antara pekerja/buruh atau serikat pekerja/serikat buruh dengan pengusaha untuk menyelesaikan perselisihan hubungan industrial dalam satu perusahaan.'
    },
    difficulty: 'Mudah'
  },
  {
    id: 199,
    category: 'Hukum Acara PHI',
    topicTag: 'Gugatan PHI Tanpa Risalah Mediasi',
    question: 'Berdasarkan Pasal 83 ayat (1) UU No. 2 Tahun 2004, apabila gugatan perselisihan hubungan industrial diajukan ke Pengadilan PHI tanpa dilampiri risalah penyelesaian mediasi atau konsiliasi, maka majelis hakim...',
    options: [
      { key: 'A', text: 'Wajib mengembalikan gugatan kepada penggugat untuk dilengkapi.' },
      { key: 'B', text: 'Langsung menolak gugatan dalam putusan akhir.' },
      { key: 'C', text: 'Menghukum penggugat membayar denda 10 juta rupiah.' },
      { key: 'D', text: 'Melanjutkan sidang secara tertutup.' }
    ],
    correctAnswer: 'A',
    explanation: {
      summary: 'Hakim PHI wajib mengembalikan gugatan yang tidak dilampiri risalah mediasi/konsiliasi.',
      legalBasis: 'Pasal 83 ayat (1) UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Pasal 83 ayat (1) menegaskan bahwa pengajuan gugatan yang tidak dilampiri risalah penyelesaian melalui mediasi atau konsiliasi, maka hakim Pengadilan Hubungan Industrial wajib mengembalikan gugatan kepada penggugat.'
    },
    difficulty: 'Sedang'
  },
  {
    id: 200,
    category: 'Hukum Acara PHI',
    topicTag: 'Batas Nilai Gugatan Bebas Biaya',
    question: 'Pihak buruh/pekerja yang mengajukan gugatan ke Pengadilan Hubungan Industrial dibebaskan dari seluruh biaya perkara termasuk biaya eksekusi apabila nilai gugatannya...',
    options: [
      { key: 'A', text: 'Di bawah Rp50.000.000 (lima puluh juta rupiah)' },
      { key: 'B', text: 'Di bawah Rp150.000.000 (seratus lima puluh juta rupiah)' },
      { key: 'C', text: 'Di bawah Rp300.000.000 (tiga ratus juta rupiah)' },
      { key: 'D', text: 'Tidak ada batas nilai rupiah, semua perkara buruh gratis' }
    ],
    correctAnswer: 'B',
    explanation: {
      summary: 'Gugatan PHI bernilai di bawah Rp150.000.000 dibebaskan dari seluruh biaya perkara.',
      legalBasis: 'Pasal 58 UU No. 2 Tahun 2004 tentang PPHI.',
      analysis: 'Pasal 58 UU 2/2004 menetapkan: Dalam proses beracara di Pengadilan Hubungan Industrial, pihak-pihak yang berperkara tidak dikenakan biaya termasuk biaya eksekusi yang nilai gugatannya di bawah Rp150.000.000,00.'
    },
    difficulty: 'Mudah'
  }
];
