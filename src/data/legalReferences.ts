export interface LegalArticleSummary {
  lawCode: string;
  title: string;
  keyArticles: {
    article: string;
    topic: string;
    content: string;
  }[];
}

export const UPA_LEGAL_COMPENDIUM: LegalArticleSummary[] = [
  {
    lawCode: 'HIR / RBg',
    title: 'Hukum Acara Perdata',
    keyArticles: [
      {
        article: 'Pasal 118 ayat (1) HIR / 142 RBg',
        topic: 'Actor Sequitur Forum Rei',
        content: 'Gugatan perdata diajukan ke Pengadilan Negeri tempat tinggal Tergugat.'
      },
      {
        article: 'Pasal 125 ayat (1) HIR',
        topic: 'Putusan Verstek',
        content: 'Jika Tergugat tidak hadir pada hari sidang tanpa alasan sah, perkara diputus tanpa hadirnya Tergugat (Verstek).'
      },
      {
        article: 'Pasal 129 HIR',
        topic: 'Perlawanan (Verzet)',
        content: 'Tenggang waktu mengajukan verzet terhadap putusan verstek adalah 14 hari sejak pemberitahuan putusan diterima.'
      },
      {
        article: 'Pasal 226 HIR',
        topic: 'Sita Revindikatoir',
        content: 'Penyitaan atas benda bergerak milik Penggugat yang berada di tangan penguasaan pihak ketiga tanpa hak.'
      },
      {
        article: 'Pasal 227 HIR',
        topic: 'Sita Konservatoir',
        content: 'Penyitaan atas benda bergerak/tidak bergerak milik Tergugat untuk menjamin pembayaran hutang/ganti rugi.'
      }
    ]
  },
  {
    lawCode: 'KUHAP (UU 8/1981)',
    title: 'Hukum Acara Pidana',
    keyArticles: [
      {
        article: 'Pasal 19 ayat (1)',
        topic: 'Batas Penangkapan',
        content: 'Penangkapan hanya dapat dilakukan paling lama 1 (satu) hari atau 1 x 24 jam.'
      },
      {
        article: 'Pasal 21 ayat (1) & (4)',
        topic: 'Syarat Penahanan',
        content: 'Syarat subyektif (khawatir melarikan diri, merusak BB, mengulangi) dan obyektif (ancaman pidana >= 5 tahun atau pasal khusus).'
      },
      {
        article: 'Pasal 77 jo. Putusan MK 21/PUU-XII/2014',
        topic: 'Objek Praperadilan',
        content: 'Praperadilan menguji sah/tidaknya penangkapan, penahanan, penghentian penyidikan/penuntutan, dan penetapan tersangka.'
      },
      {
        article: 'Pasal 156 ayat (1)',
        topic: 'Keberatan (Eksepsi)',
        content: 'Diajukan segera setelah surat dakwaan selesai dibacakan terkait kewenangan mengadili atau dakwaan batal demi hukum.'
      },
      {
        article: 'Pasal 183 jo. 184',
        topic: 'Batas Minimum Pembuktian',
        content: 'Hakim tidak boleh menjatuhkan pidana kecuali sekurang-kurangnya dengan 2 alat bukti sah dan keyakinan hakim.'
      }
    ]
  },
  {
    lawCode: 'UU 5/1986 jo. UU 51/2009',
    title: 'Hukum Acara PTUN',
    keyArticles: [
      {
        article: 'Pasal 1 angka 9',
        topic: 'Unsur KTUN',
        content: 'Penetapan tertulis, pejabat TUN, tindakan hukum TUN, konkret, individual, dan final yang menimbulkan akibat hukum.'
      },
      {
        article: 'Pasal 55',
        topic: 'Tenggang Waktu Gugatan',
        content: 'Gugatan PTUN diajukan dalam tenggang waktu 90 hari sejak diterimanya atau diumumkannya KTUN.'
      },
      {
        article: 'Pasal 62',
        topic: 'Rapat Permusyawaratan (Dismissal)',
        content: 'Penyaringan awal oleh Ketua Pengadilan. Terhadap penetapan dismissal dapat diajukan perlawanan 14 hari.'
      }
    ]
  },
  {
    lawCode: 'KEAI & UU Advokat 18/2003',
    title: 'Kode Etik & Profesi Advokat',
    keyArticles: [
      {
        article: 'Pasal 4 huruf h KEAI jo. Ps 19 UU 18/2003',
        topic: 'Rahasia Jabatan Advokat',
        content: 'Advokat wajib memegang rahasia profesi terhadap semua informasi yang diperoleh dari klien.'
      },
      {
        article: 'Pasal 4 huruf k KEAI',
        topic: 'Batasan Hak Retensi',
        content: 'Hak retensi tidak boleh dipergunakan jika dapat merugikan kepentingan klien dalam perkara yang berjalan.'
      },
      {
        article: 'Pasal 5 huruf d KEAI',
        topic: 'Teman Sejawat',
        content: 'Dilarang merebut atau menerima perkara dari klien yang masih memiliki advokat lain tanpa pencabutan tertulis.'
      },
      {
        article: 'Pasal 22 UU 18/2003',
        topic: 'Bantuan Hukum Cuma-Cuma',
        content: 'Advokat wajib memberikan bantuan hukum pro bono kepada pencari keadilan yang tidak mampu.'
      }
    ]
  }
];
