import * as fs from 'fs';
import { TRYOUT_2025_BANK } from './src/data/tryOut2025Bank';

// Map of specific overrides for questions that had wrong keys, wrong summaries, or weak legal bases
const overrides: Record<number, {
  correctAnswer?: 'A' | 'B' | 'C' | 'D';
  category?: string;
  topicTag?: string;
  optionsMod?: (opts: { key: 'A' | 'B' | 'C' | 'D'; text: string }[]) => { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  summary?: string;
  legalBasis?: string;
  analysis?: string;
}> = {
  207: {
    legalBasis: 'Undang-Undang Republik Indonesia Nomor 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).',
  },
  215: {
    correctAnswer: 'B',
    summary: 'Penyidik menyerahkan tanggung jawab atas tersangka dan barang bukti kepada penuntut umum (Tahap II).',
    legalBasis: 'Pasal 8 ayat (3) huruf b jo. Pasal 110 ayat (4) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).',
    analysis: 'Pasal 8 ayat (3) huruf b KUHAP menegaskan setelah penyidikan selesai (Tahap I dinyatakan lengkap/P-21), penyidik menyerahkan tanggung jawab atas tersangka dan barang bukti kepada penuntut umum (Tahap II).',
  },
  221: {
    correctAnswer: 'A',
    summary: 'Pemberitahuan karena hak atau kewajiban undang-undang tentang peristiwa pidana disebut Laporan.',
    legalBasis: 'Pasal 1 angka 24 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).',
    analysis: 'Pasal 1 angka 24 KUHAP merumuskan Laporan sebagai pemberitahuan yang disampaikan seseorang karena hak atau kewajiban berdasarkan UU kepada pejabat berwenang tentang terjadinya dugaan peristiwa pidana.',
  },
  222: {
    correctAnswer: 'C',
    summary: 'Penangkapan tanpa surat perintah hanya sah dilakukan dalam hal tertangkap tangan.',
    legalBasis: 'Pasal 18 ayat (2) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).',
    analysis: 'Pasal 18 ayat (2) KUHAP secara tegas menentukan: "Dalam hal tertangkap tangan penangkapan dilakukan tanpa surat perintah, dengan ketentuan bahwa penangkap harus segera menyerahkan tertangkap beserta barang bukti kepada penyidik."',
  },
  223: {
    correctAnswer: 'C',
    summary: 'Penahanan hanya dapat dikenakan pada tindak pidana berancaman 5 tahun atau lebih, atau delik tertentu yang diatur dalam Pasal 21 ayat (4) huruf b KUHAP.',
    legalBasis: 'Pasal 21 ayat (1) dan ayat (4) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).',
    analysis: 'Pasal 21 ayat (4) huruf a KUHAP mensyaratkan penahanan hanya terhadap tindak pidana yang diancam dengan pidana penjara 5 tahun atau lebih. Opsi C (kurang dari 5 tahun) adalah pengecualian yang bukan alasan penahanan.',
  },
  224: {
    correctAnswer: 'A',
    category: 'Hukum Acara Pidana',
    summary: 'Saksi yang memberatkan terdakwa yang diajukan oleh Penuntut Umum disebut saksi a charge.',
    legalBasis: 'Pasal 160 ayat (1) huruf c UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).',
    analysis: 'Dalam hukum acara pidana, saksi a charge adalah saksi yang memberatkan yang diajukan penuntut umum, sedangkan saksi a de charge adalah saksi meringankan yang diajukan pihak terdakwa (Pasal 65 jo. Pasal 116 ayat 3 KUHAP).',
  },
  225: {
    correctAnswer: 'C',
    summary: 'Tertangkap tangan adalah tertangkap saat sedang melakukan atau segera beberapa saat sesudah melakukan tindak pidana.',
    legalBasis: 'Pasal 1 angka 19 UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).',
    analysis: 'Pasal 1 angka 19 KUHAP mendefinisikan tertangkap tangan mencakup: sedang melakukan tindak pidana, dengan segera sesudah dilakukan, atau sesaat sesudah diserukan oleh khalayak ramai.',
  },
  226: {
    correctAnswer: 'B',
    summary: 'Putusan lepas dari segala tuntutan hukum (onslag van rechtvervolging) dijatuhkan bila perbuatan terbukti namun bukan tindak pidana.',
    legalBasis: 'Pasal 191 ayat (2) UU No. 8 Tahun 1981 tentang Hukum Acara Pidana (KUHAP).',
    analysis: 'Pasal 191 ayat (2) KUHAP menyatakan: "Jika pengadilan berpendapat bahwa perbuatan yang didakwakan kepada terdakwa terbukti, tetapi perbuatan itu tidak merupakan suatu tindak pidana, maka terdakwa diputus lepas dari segala tuntutan hukum."',
  },
  227: {
    correctAnswer: 'C',
    optionsMod: (opts) => {
      return opts.map(o => o.key === 'C' ? { key: 'C', text: 'Pengadilan Negeri di mana benda tidak bergerak itu terletak (forum rei sitae)' } : o);
    },
    summary: 'Gugatan atas benda tidak bergerak diajukan di Pengadilan Negeri tempat benda itu terletak (forum rei sitae).',
    legalBasis: 'Pasal 118 ayat (3) HIR / Pasal 142 ayat (3) RBg.',
    analysis: 'Pasal 118 ayat (3) HIR menetapkan: apabila objek sengketa adalah barang tidak bergerak, maka gugatan diajukan kepada Pengadilan Negeri yang daerah hukumnya meliputi tempat letak barang tidak bergerak tersebut (asas forum rei sitae).',
  },
  228: {
    correctAnswer: 'C',
    summary: 'Gugatan dinyatakan gugur apabila Penggugat tidak hadir pada hari sidang pertama setelah dipanggil patut.',
    legalBasis: 'Pasal 124 HIR / Pasal 148 RBg.',
    analysis: 'Pasal 124 HIR menentukan jika penggugat tidak datang pada hari sidang pertama meskipun telah dipanggil secara patut, maka surat gugatannya dinyatakan gugur dan penggugat dihukum membayar biaya perkara.',
  },
  229: {
    correctAnswer: 'C',
    summary: 'Gugatan diputus verstek apabila Tergugat tidak hadir pada hari sidang pertama tanpa alasan yang sah.',
    legalBasis: 'Pasal 125 ayat (1) HIR / Pasal 149 ayat (1) RBg.',
    analysis: 'Pasal 125 ayat (1) HIR menegaskan jika tergugat tidak datang pada hari sidang pertama dan tidak menyuruh wakilnya yang sah meskipun telah dipanggil dengan patut, gugatan diputus dengan verstek (tanpa hadirnya Tergugat).',
  },
  230: {
    correctAnswer: 'C',
    legalBasis: 'Pasal 279-282 Reglement op de Rechtsvordering (Rv) jo. Doktrin Hukum Acara Perdata.',
    summary: 'Tussenkomst adalah campur tangan pihak ketiga yang masuk membela haknya sendiri tanpa memihak.',
    analysis: 'Tussenkomst adalah intervensi pihak ketiga yang berdiri sendiri untuk mempertahankan hak miliknya melawan Penggugat dan Tergugat sekaligus tanpa memihak salah satu.',
  },
  231: {
    correctAnswer: 'C',
    legalBasis: 'Pasal 129 ayat (1) dan (2) HIR / Pasal 153 ayat (1) dan (2) RBg.',
    summary: 'Upaya hukum terhadap putusan verstek adalah Verzet (perlawanan).',
    analysis: 'Berdasarkan Pasal 129 HIR, pihak Tergugat yang dijatuhi putusan verstek berhak mengajukan upaya hukum perlawanan (verzet) dalam tenggang waktu 14 hari.',
  },
  232: {
    correctAnswer: 'B',
    summary: 'Gugatan atas cacat tersembunyi dapat berupa actio quanti minoris (tuntutan pengurangan harga) atau actio redhibitoria.',
    legalBasis: 'Pasal 1504 sampai Pasal 1507 Kitab Undang-Undang Hukum Perdata (KUHPerdata).',
    analysis: 'Pasal 1504 KUHPerdata mengatur kewajiban penjual menanggung cacat tersembunyi, di mana pembeli dapat memilih membatalkan pembelian atau menuntut pengurangan harga melalui actio quanti minoris (Pasal 1507 KUHPerdata).',
  },
  233: {
    correctAnswer: 'C',
    summary: 'Kebenaran formil adalah kebenaran yang bersandarkan pada alat bukti sah yang diajukan para pihak di persidangan.',
    legalBasis: 'Pasal 163 jo. Pasal 164 HIR / Pasal 283 jo. Pasal 284 RBg jo. Pasal 1865 KUHPerdata.',
    analysis: 'Hukum acara perdata mencari kebenaran formil (formeel waarheid), yaitu hakim terikat pada dalil dan bukti-bukti sah yang diajukan para pihak tanpa mencari kebenaran materiil di luar persidangan.',
  },
  234: {
    correctAnswer: 'B',
    summary: 'Eksepsi adalah bantahan yang ditujukan terhadap gugatan yang tidak menyangkut pokok perkara.',
    legalBasis: 'Pasal 125 ayat (2) dan Pasal 136 HIR / Pasal 162 RBg.',
    analysis: 'Eksepsi merupakan tangkisan formal Tergugat mengenai formalitas gugatan (kompetensi, keabsahan kuasa, obscuur libel) yang tidak langsung membantah materi pokok perkara.',
  },
  235: {
    correctAnswer: 'A',
    summary: 'Substantieringstheorie mewajibkan gugatan menyebut peristiwa konkret yang menjadi dasar timbulnya hubungan hukum.',
    legalBasis: 'Doktrin Hukum Acara Perdata Indonesia jo. Putusan Mahkamah Agung RI No. 547 K/Sip/1972.',
    analysis: 'Substantieringstheorie mewajibkan Penggugat menguraikan fakta konkret peristiwa hukum dalam posita, sedangkan individualiseringstheorie cukup menyebutkan hubungan hukumnya saja.',
  },
  236: {
    correctAnswer: 'B',
    summary: 'Eksepsi kewenangan relatif wajib diajukan bersama-sama dalam jawaban pertama terhadap gugatan.',
    legalBasis: 'Pasal 125 ayat (2) dan Pasal 133 HIR / Pasal 159 RBg.',
    analysis: 'Pasal 133 HIR menentukan eksepsi kompetensi relatif harus diajukan pada permulaan sidang dalam jawaban pertama sebelum Tergugat menjawab pokok perkara.',
  },
  237: {
    correctAnswer: 'C',
    summary: 'Gugatan ditolak apabila dalil gugatan tidak terbukti atau tidak berdasar hukum (afgewezen).',
    legalBasis: 'Doktrin Hukum Acara Perdata & Yurisprudensi Mahkamah Agung RI No. 556 K/Sip/1971.',
    analysis: 'Bila gugatan kabur atau kurang pihak, putusannya adalah tidak dapat diterima (NO). Gugatan ditolak (afgewezen) apabila telah diperiksa pokok perkaranya dan ternyata dalil penggugat tidak terbukti menurut hukum.',
  },
  238: {
    category: 'Hukum Acara Perdata',
    correctAnswer: 'B',
    summary: 'Putusan insidentil adalah putusan sela yang dijatuhkan hakim mendahului putusan akhir.',
    legalBasis: 'Pasal 185 ayat (1) HIR / Pasal 196 ayat (1) RBg.',
    analysis: 'Pasal 185 ayat (1) HIR mengatur putusan sela/insidentil yang bukan putusan akhir dijatuhkan untuk memperlancar jalannya pemeriksaan perkara (seperti putusan sela eksepsi kompetensi atau sita jaminan).',
  },
  239: {
    correctAnswer: 'D',
    summary: 'Sidang pertama perkara perdata yang dihadiri kedua belah pihak diwajibkan menempuh proses mediasi.',
    legalBasis: 'Pasal 130 HIR / Pasal 154 RBg jo. Pasal 17 PERMA No. 1 Tahun 2016 tentang Prosedur Mediasi di Pengadilan.',
    analysis: 'Pasal 17 PERMA 1/2016 mewajibkan majelis hakim pada hari sidang pertama menjelaskan prosedur mediasi dan mewajibkan para pihak menempuh mediasi sebelum pemeriksaan perkara dilanjutkan.',
  },
  240: {
    correctAnswer: 'A',
    summary: 'Gugatan rekonvensi (gugatan balik) wajib diajukan bersama-sama dengan jawaban Tergugat.',
    legalBasis: 'Pasal 132b ayat (1) HIR / Pasal 158 ayat (1) RBg.',
    analysis: 'Pasal 132b ayat (1) HIR mengatur secara imperatif: "Tergugat wajib mengajukan gugatan balasan (rekonvensi) bersama-sama dengan jawabannya baik dengan surat maupun dengan lisan."',
  },
  241: {
    correctAnswer: 'A',
    summary: 'KUHPerdata mengatur hubungan hukum privat antar individu atau badan hukum perdata.',
    legalBasis: 'Pasal 1 jo. Buku I sampai Buku IV Kitab Undang-Undang Hukum Perdata (Burgerlijk Wetboek).',
    analysis: 'Hukum perdata substantif (KUHPerdata) mengatur hak dan kewajiban hubungan privat-privat antar sesama anggota masyarakat dan subjek hukum perdata.',
  },
  242: {
    correctAnswer: 'A',
    summary: 'Tergugat adalah subjek hukum yang ditarik ke pengadilan karena diduga melanggar hak orang lain atau ketentuan undang-undang.',
    legalBasis: 'Pasal 118 ayat (1) HIR / Pasal 142 ayat (1) RBg jo. Doktrin Hukum Acara Perdata.',
    analysis: 'Tergugat adalah pihak yang disengketakan dalam gugatan perdata karena adanya perbuatan melawan hukum atau ingkar janji (wanprestasi) yang merugikan penggugat.',
  },
  243: {
    correctAnswer: 'C',
    summary: 'Tangkisan mengenai wilayah kekuasaan pengadilan disebut eksepsi kompetensi relatif.',
    legalBasis: 'Pasal 118 ayat (1) jo. Pasal 133 HIR / Pasal 159 RBg.',
    analysis: 'Kompetensi relatif menyangkut batas wilayah hukum Pengadilan Negeri mana yang berwenang mengadili perkara perdata tersebut berdasarkan tempat tinggal tergugat (actor sequitur forum rei).',
  },
  244: {
    correctAnswer: 'C',
    summary: 'Sita revindikasi hanya dapat dimintakan atas barang bergerak milik Penggugat yang berada di tangan Tergugat.',
    legalBasis: 'Pasal 226 ayat (1) HIR / Pasal 260 ayat (1) RBg.',
    analysis: 'Pasal 226 HIR secara limitatif mengatur bahwa sita revindikasi (revindicatoir beslag) hanya berlaku bagi penuntutan kembali barang bergerak milik penggugat.',
  },
  246: {
    correctAnswer: 'C',
    summary: 'Surat kuasa khusus yang tidak sempurna atau cacat formil berakibat gugatan dinyatakan tidak dapat diterima (NO).',
    legalBasis: 'Pasal 123 HIR jo. Surat Edaran Mahkamah Agung (SEMA) No. 1 Tahun 1971 dan SEMA No. 6 Tahun 1994.',
    analysis: 'SEMA No. 1/1971 menegaskan bahwa surat kuasa khusus yang tidak menyebutkan secara spesifik pihak lawan, objek perkara, dan pengadilan berakibat gugatan dinilai cacat formil dan diputus tidak dapat diterima (Niet Ontvankelijke Verklaard).',
  },
  247: {
    correctAnswer: 'C',
    summary: 'Mewakili pihak beracara di sidang pengadilan secara mutlak mensyaratkan Surat Kuasa Khusus.',
    legalBasis: 'Pasal 123 ayat (1) HIR / Pasal 147 ayat (1) RBg jo. SEMA No. 1 Tahun 1971.',
    analysis: 'Kuasa umum tidak berlaku untuk mewakili di persidangan. Pasal 123 ayat (1) HIR mewajibkan pemberian kuasa khusus yang tertuang dalam surat kuasa khusus.',
  },
  248: {
    correctAnswer: 'A',
    summary: 'Actor sequitur forum rei berarti gugatan diajukan ke Pengadilan Negeri tempat tinggal Tergugat.',
    legalBasis: 'Pasal 118 ayat (1) HIR / Pasal 142 ayat (1) RBg.',
    analysis: 'Asas dasar hukum acara perdata Indonesia menentukan bahwa pihak yang digugat berhak diadili di pengadilan tempat domisilinya (actor sequitur forum rei).',
  },
  249: {
    category: 'Hukum Acara Perdata',
    correctAnswer: 'A',
    summary: 'Anatomi surat gugatan terdiri dari Identitas para pihak, Fundamentum Petendi (Posita), dan Petitum.',
    legalBasis: 'Pasal 8 No. 3 Reglement op de Rechtsvordering (Rv) jo. Pasal 118 HIR.',
    analysis: 'Syarat isi surat gugatan meliputi: 1. Identitas para pihak; 2. Fundamentum petendi (uraian fakta peristiwa dan dasar hukum); 3. Petitum (tuntutan yang dimohonkan dikabulkan hakim).',
  },
  250: {
    correctAnswer: 'A',
    summary: 'Sita jaminan (conservatoir beslag) diletakkan atas barang bergerak atau barang tidak bergerak milik Tergugat.',
    legalBasis: 'Pasal 227 ayat (1) HIR / Pasal 261 ayat (1) RBg.',
    analysis: 'Pasal 227 ayat (1) HIR mengatur bahwa sita jaminan dimintakan terhadap barang bergerak maupun barang tidak bergerak kepunyaan Tergugat guna menjamin dipenuhinya tuntutan pembayaran ganti rugi penggugat.',
  },
  251: {
    category: 'Hukum Acara Perdata',
    correctAnswer: 'A',
    summary: 'Alasan peninjauan kembali perkara perdata adalah ditemukannya bukti surat baru yang menentukan (novum).',
    legalBasis: 'Pasal 67 huruf b UU No. 14 Tahun 1985 jo. UU No. 5 Tahun 2004 jo. UU No. 3 Tahun 2009 tentang Mahkamah Agung.',
    analysis: 'Pasal 67 huruf b UU Mahkamah Agung mengatur permohonan PK dapat diajukan apabila setelah perkara diputus ditemukan surat-surat bukti yang bersifat menentukan yang pada waktu perkara diperiksa tidak dapat ditemukan.',
  },
  252: {
    correctAnswer: 'D',
    summary: 'Profesi Advokat diatur dalam Undang-Undang No. 18 Tahun 2003.',
    legalBasis: 'Undang-Undang Republik Indonesia Nomor 18 Tahun 2003 tentang Advokat (LNRI Tahun 2003 No. 49).',
    analysis: 'UU No. 18 Tahun 2003 disahkan pada tanggal 5 April 2003 sebagai undang-undang yang mengatur profesi advokat di Indonesia.',
  },
  253: {
    correctAnswer: 'D',
    summary: 'PERADIN bukan merupakan salah satu dari 8 organisasi advokat pendiri PERADI dalam Pasal 32 ayat (3) UU Advokat.',
    legalBasis: 'Pasal 32 ayat (3) UU No. 18 Tahun 2003 tentang Advokat.',
    analysis: 'Delapan organisasi advokat pendiri PERADI adalah IKADIN, AAI, IPHI, HAPI, SPI, AKHI, HKHPM, dan APSI. PERADIN tidak termasuk dalam 8 organisasi tersebut.',
  },
  254: {
    correctAnswer: 'C',
    summary: 'Memberikan pendidikan hukum formal bukan merupakan jasa hukum advokat dalam Pasal 1 angka 2 UU Advokat.',
    legalBasis: 'Pasal 1 angka 2 UU No. 18 Tahun 2003 tentang Advokat.',
    analysis: 'Jasa hukum advokat menurut UU adalah konsultasi hukum, bantuan hukum, menjalankan kuasa, mewakili, mendampingi, membela, dan tindakan hukum lain untuk klien. Menyelenggarakan pendidikan formal bukan kategori jasa hukum.',
  },
  255: {
    correctAnswer: 'B',
    summary: 'Induk organisasi advokat yang dibentuk oleh delapan organisasi profesi advokat adalah PERADI.',
    legalBasis: 'Pasal 32 ayat (4) UU No. 18 Tahun 2003 tentang Advokat jo. Deklarasi Pendirian PERADI 21 Desember 2004.',
    analysis: 'PERADI didirikan pada 21 Desember 2004 sebagai perwujudan satu-satunya wadah tunggal profesi advokat yang diamanatkan oleh UU No. 18 Tahun 2003.',
  },
  256: {
    correctAnswer: 'D',
    summary: 'Wilayah kerja Advokat meliputi seluruh wilayah Negara Republik Indonesia.',
    legalBasis: 'Pasal 5 ayat (2) UU No. 18 Tahun 2003 tentang Advokat.',
    analysis: 'Pasal 5 ayat (2) UU Advokat menyatakan secara tegas: "Wilayah kerja Advokat meliputi seluruh wilayah negara Republik Indonesia."',
  },
  257: {
    correctAnswer: 'D',
    summary: 'Sebelum lahirnya PERADI, 8 organisasi berhimpun dalam KKAI (Komite Kerja Advokat Indonesia).',
    legalBasis: 'Pasal 32 ayat (3) dan (4) UU No. 18 Tahun 2003 tentang Advokat.',
    analysis: 'KKAI dibentuk untuk koordinasi bersama dalam menyusun kode etik bersama tahun 2002 dan verifikasi keanggotaan advokat menjelang berdirinya wadah tunggal PERADI.',
  },
  258: {
    correctAnswer: 'C',
    summary: 'Nama PERADI lahir dalam Deklarasi Advokat Indonesia pada tanggal 21 Desember 2004 di Jakarta.',
    legalBasis: 'Piagam Deklarasi PERADI tanggal 21 Desember 2004 di Jakarta.',
    analysis: 'Nama PERADI tidak tertulis dalam teks UU No. 18/2003, melainkan disepakati dan dideklarasikan bersama oleh 8 organisasi pada 21 Desember 2004.',
  },
  259: {
    correctAnswer: 'C',
    summary: 'Advokat berstatus sebagai penegak hukum, bebas dan mandiri.',
    legalBasis: 'Pasal 5 ayat (1) UU No. 18 Tahun 2003 tentang Advokat.',
    analysis: 'Pasal 5 ayat (1) UU Advokat: "Advokat berstatus sebagai penegak hukum, bebas dan mandiri yang dijamin oleh hukum dan peraturan perundang-undangan."',
  },
  261: {
    correctAnswer: 'A',
    summary: 'Pengertian advokat dirumuskan secara tegas dalam Pasal 1 angka 1 UU No. 18 Tahun 2003.',
    legalBasis: 'Pasal 1 angka 1 UU No. 18 Tahun 2003 tentang Advokat.',
    analysis: 'Pasal 1 angka 1 UU Advokat merumuskan: "Advokat adalah orang yang berprofesi memberi jasa hukum, baik di dalam maupun di luar pengadilan yang memenuhi persyaratan berdasarkan ketentuan Undang-Undang ini."',
  },
  264: {
    correctAnswer: 'A',
    summary: 'Hakim mewakili kepentingan kekuasaan negara, Jaksa/Polisi mewakili penuntutan pemerintah, Advokat mewakili kepentingan masyarakat/klien.',
    legalBasis: 'Penjelasan Umum UU No. 18 Tahun 2003 tentang Advokat jo. Doktrin Catur Wangsa Penegak Hukum.',
    analysis: 'Dalam doktrin peradilan yang adil (fair trial), hakim menegakkan keadilan atas nama negara, jaksa/polisi mewakili kepentingan umum dan pemerintah, sedangkan advokat mewakili kepentingan hukum masyarakat pencari keadilan.',
  },
  301: {
    correctAnswer: 'B',
    summary: 'Perselisihan yang timbul karena tidak dipenuhinya hak disebut perselisihan hak.',
    legalBasis: 'Pasal 1 angka 2 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.',
    analysis: 'Pasal 1 angka 2 UU 2/2004: "Perselisihan hak adalah perselisihan yang timbul karena tidak dipenuhinya hak, akibat adanya perbedaan pelaksanaan atau penafsiran terhadap ketentuan peraturan perundang-undangan, perjanjian kerja, peraturan perusahaan, atau perjanjian kerja bersama."',
  },
  302: {
    correctAnswer: 'B',
    summary: 'Sebelum berlakunya UU No. 2 Tahun 2004, perselisihan perburuhan diatur dalam UU No. 22 Tahun 1957.',
    legalBasis: 'Pasal 125 ayat (1) huruf a UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.',
    analysis: 'Sebelum diundangkannya UU 2/2004, penyelesaian sengketa buruh diselesaikan oleh P4D/P4P berdasarkan UU No. 22 Tahun 1957 tentang Penyelesaian Perselisihan Perburuhan.',
  },
  304: {
    correctAnswer: 'B',
    summary: 'Perselisihan mengenai pengakhiran hubungan kerja adalah perselisihan pemutusan hubungan kerja (PHK).',
    legalBasis: 'Pasal 1 angka 4 UU No. 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial.',
    analysis: 'Pasal 1 angka 4 UU 2/2004 menegaskan perselisihan PHK adalah perselisihan yang timbul karena tidak adanya kesesuaian pendapat mengenai pengakhiran hubungan kerja yang dilakukan oleh salah satu pihak.',
  },
  305: {
    correctAnswer: 'C',
    summary: 'Hukum formil Pengadilan Hubungan Industrial saat ini diatur dalam UU No. 2 Tahun 2004.',
    legalBasis: 'Undang-Undang Republik Indonesia Nomor 2 Tahun 2004 tentang Penyelesaian Perselisihan Hubungan Industrial (LNRI Tahun 2004 No. 6).',
    analysis: 'UU No. 2 Tahun 2004 merupakan hukum formil khusus (lex specialis) yang mengatur prosedur beracara dan pembentukan Pengadilan Hubungan Industrial.',
  },
};

const updatedBank = TRYOUT_2025_BANK.map((q) => {
  const ov = overrides[q.id];
  if (!ov) return q;

  let opts = q.options;
  if (ov.optionsMod) {
    opts = ov.optionsMod(opts);
  }

  return {
    ...q,
    category: ov.category || q.category,
    correctAnswer: ov.correctAnswer || q.correctAnswer,
    options: opts,
    explanation: {
      summary: ov.summary || q.explanation.summary,
      legalBasis: ov.legalBasis || q.explanation.legalBasis,
      analysis: ov.analysis || q.explanation.analysis,
    },
  };
});

const fileHeader = `import { UPAQuestion } from '../types/quiz';\n\nexport const TRYOUT_2025_BANK: UPAQuestion[] = `;
fs.writeFileSync('src/data/tryOut2025Bank.ts', fileHeader + JSON.stringify(updatedBank, null, 2) + ';\n');
console.log('Successfully updated tryOut2025Bank.ts with all verified questions!');
