import React from 'react';
import { motion } from 'framer-motion';

const sertifikasiList = [
  // {
  //   nama: 'Panitia Kongres',
  //   penyelenggara: 'Himatif',
  //   tahun: 2024,
  //   deskripsi: 'Sertifikasi kepanitian kongres Himatif 2024 sebagai bentuk pengakuan atas kontribusi dalam organisasi.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/apysekdu2lyky7snwmxnb/KONGRES-Aidil-Pramadita.png?rlkey=wmzrnifolx42ldx8yhpxf173i&st=thiqxjhr',
  // },
  // {
  //   nama: 'Panitia Kurmatif',
  //   penyelenggara: 'Himatif',
  //   tahun: 2025,
  //   deskripsi: 'Sertifikasi kepanitian kurmatif Himatif 2025 sebagai bentuk pengakuan atas kontribusi dalam organisasi.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/atuiq12p3fu0pfq2dduwk/Aidil-Pramadita-Putra-3.pdf?rlkey=fd81086b777orx0uhyqxhg3ld&st=f9gmv0cz',
  // },
  // {
  //   nama: 'Panitia Himatif Cup',
  //   penyelenggara: 'Himatif',
  //   tahun: 2025,
  //   deskripsi: 'Sertifikasi kepanitian Himatif Cup 2025 sebagai bentuk pengakuan atas kontribusi dalam organisasi.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/6wnayjocvefcs9qybi8fe/Aidil-Pramadita-Putra-4.pdf?rlkey=b916krmsvude32jonq6bkahrm&st=cg13wj0d',
  // },
  {
    nama: 'Mini Bootcamp Lailatul Qoding',
    penyelenggara: 'Himatif',
    tahun: 2025,
    deskripsi: 'Sertifikasi partisipasi dalam Mini Bootcamp Lailatul Qoding 2025 sebagai bentuk pengakuan atas kontribusi dalam organisasi.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/bacmr83g4vs4os5plyhg5/Aidil-Pramadita-Putra.png?rlkey=jyhh1phphf6ejvz6yz43bqo0h&st=npawce33',
  },
  // {
  //   nama: 'Sertifikat Peserta_Webinar File Upload Vulnerabilities Mengamankan Server dari Takeover',
  //   penyelenggara: 'Institu Teknologi Tangerang Selatan (ITTS)',
  //   tahun: 2024,
  //   deskripsi: 'Sertifikasi partisipasi dalam webinar tentang File Upload Vulnerabilities yang diselenggarakan oleh ITTS.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/2kpbhtpkdz5gpropmck7t/002.Aidil-Pramadita_Sertifikat-Peserta_Webinar-File-Upload-Vulnerabilities-Mengamankan-Server-dari-Takeover.PDF?rlkey=oacc15pefltcq7syjpjdfb2yk&st=6mwitb58',
  // },
  // {
  //   nama: 'Sertifikat Peserta_Webinar Membuat Aplikasi Kasir Sederhana dengan PHP untuk Pemula',
  //   penyelenggara: 'Institu Teknologi Tangerang Selatan (ITTS)',
  //   tahun: 2024,
  //   deskripsi: 'Sertifikasi partisipasi dalam webinar tentang Membuat Aplikasi Kasir Sederhana dengan PHP untuk Pemula yang diselenggarakan oleh ITTS.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/k0hgpq65290mzgqd5302e/182.Aidil-Pramadita-Putra_Sertifikat-Peserta_Webinar-Membuat-Aplikasi-Kasir-Sederhana-dengan-PHP-untuk-Pemula-pages-79.pdf?rlkey=k7r60geoa4upn6n3s4lfduls5&st=i2cq5ij2',
  // },
  // {
  //   nama: 'Sertifikat Peserta_Webinar Website Statis dengan HTML dan CSS Dasar',
  //   penyelenggara: 'Institu Teknologi Tangerang Selatan (ITTS)',
  //   tahun: 2024,
  //   deskripsi: 'Sertifikasi partisipasi dalam webinar tentang Website Statis dengan HTML dan CSS Dasar yang diselenggarakan oleh ITTS.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/72494uexkwx3i2hklux4x/258.Aidil-Pramadita-Putra_Sertifikat-Peserta_Webinar-Website-Statis-dengan-HTML-dan-CSS-Dasar.pdf?rlkey=dmszt89ni319furx6a24qnjmk&st=j0bzy61c',
  // },
  {
    nama: 'Smart Retargeting: Maksimalkan Lookalike Audience di Meta Ads',
    penyelenggara: 'IdWebHost',
    tahun: 2025,
    deskripsi: 'Sertifikasi partisipasi dalam webinar "Smart Retargeting: Maksimalkan Lookalike Audience di Meta Ads" yang diselenggarakan oleh IdWebHost.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/7dr8g53ueq735vt6ffuox/Aidil-Pramadita-Putra-1.pdf?rlkey=k509idpc5zp88jrqacozqxzgi&st=1taxxabc',
  },
  {
    nama: 'Sharing Section Black Hat vs White Hat',
    penyelenggara: 'Alisi USR',
    tahun: 2024,
    deskripsi: 'Sertifikasi partisipasi dalam webinar "Sharing Section Black Hat vs White Hat" yang diselenggarakan oleh Alisi USR.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/3ie8xb3isq3vozs8bul01/ALISI-Aidil-Pramadita-Putra.pdf?rlkey=x9220vhwp5raa60p9mjxsz9dw&st=jwgit446',
  },
  // {
  //   nama: 'Peserta Asomatif',
  //   penyelenggara: 'Himatif',
  //   tahun: 2024,
  //   deskripsi: 'Sertifikasi partisipasi dalam Asomatif 2024 sebagai bentuk pengakuan atas kontribusi dalam organisasi.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/eg20hy3rp8vx7u6k5bpcm/ASOMATIF-Aidil-Pramadita-Putra.png?rlkey=bc6jai6mo3b54gvh5xuigkqb4&st=0t4xqspb',
  // },
  {
    nama: 'Devcoach 174 Flutter Bentangkan Sayap Kreativitasmu Dengan Flutter Desktop',
    penyelenggara: 'Dicoding Event',
    tahun: 2024,
    deskripsi: 'Sertifikasi partisipasi dalam event "Bentangkan Sayap Kreativitasmu dengan Flutter Desktop" yang diselenggarakan oleh Dicoding.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/y9q6auzyg47s7xfcvfkj0/devcoach-174-flutter-bentangkan-sayap-kreativitasmu-dengan-flutter-desktop-certificate.pdf?rlkey=618frqkmstsv23ww79yf1jdcu&st=4a0d3dg7',
  },
  {
    nama: 'Devcoach 179 Flutter Ciptakan Animasi Epik Dengan Animation',
    penyelenggara: 'Dicoding Event',
    tahun: 2024,
    deskripsi: 'Sertifikasi partisipasi dalam event "Ciptakan Animasi Epik dengan Animation" yang diselenggarakan oleh Dicoding.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/0n2bz83p41t3am89iycd7/devcoach-179-flutter-ciptakan-animasi-epik-dengan-animation-certificate.pdf?rlkey=ku5s49bkm3ww6joowdoene1yg&st=7frw3nxm',
  },
  {
    nama: 'Devcoach 180 Back End Deploy Aplikasi Dengan Aman Dan Cepat Menggunakan Cicd',
    penyelenggara: 'Dicoding Event',
    tahun: 2024,
    deskripsi: 'Sertifikasi partisipasi dalam event "Deploy Aplikasi dengan Aman dan Cepat Menggunakan CI/CD" yang diselenggarakan oleh Dicoding.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/xmi36w241j1idv1l6w245/devcoach-180-back-end-deploy-aplikasi-dengan-aman-dan-cepat-menggunakan-cicd-certificate.pdf?rlkey=j2er4fdnmtstc6pxt2x6ewd8v&st=zruq66r1',
  },
  {
    nama: 'Devcoach 182 Flutter Eksplorasi Dunia Melalui Maps Dan Location',
    penyelenggara: 'Dicoding Event',
    tahun: 2024,
    deskripsi: 'Sertifikasi partisipasi dalam event "Eksplorasi Dunia Melalui Maps dan Location" yang diselenggarakan oleh Dicoding.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/pyox775f97opxoqn7a57f/devcoach-182-flutter-eksplorasi-dunia-melalui-maps-dan-location-certificate.pdf?rlkey=w4m78fpx7t3paqgudpfca4d43&st=9hkzbvjd',
  },
  {
    nama: 'Devcoach 195 Kotlin 101 Mengenal Special Classes dan Collection',
    penyelenggara: 'Dicoding Event',
    tahun: 2024,
    deskripsi: 'Sertifikasi partisipasi dalam event "Mengenal Special Classes dan Collection" yang diselenggarakan oleh Dicoding.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/w22bq3vqyf9d6ve1vswo4/devcoach-195-kotlin-101-mengenal-special-classes-dan-collection-certificate.pdf?rlkey=alt1i7c106ptb581i581bn4ee&st=l3ys9x6w',
  },
  // {
  //   nama: 'Webinar: Basis Data',
  //   penyelenggara: 'Universitas Pelita Bangsa',
  //   tahun: 2024,
  //   deskripsi: 'Sertifikasi partisipasi dalam webinar tentang Basis Data yang diselenggarakan oleh Universitas Pelita Bangsa.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/fpgjssf96ybdhhnietdbv/E-Certificate-Aidil-Pramadita-Putra.pdf?rlkey=enzf1v7twyqmyypzbsmxba1i0&st=7842ylip',
  // },
  {
    nama: 'Idcamp Alumni Dialogue 3 Unlock Your Potential Menjadi Instruktur Fasilitator Dan Speaker Handal Sambil Bekerja',
    penyelenggara: 'Indosat Ooredoo Hutchison Digital Camp',
    tahun: 2025,
    deskripsi: 'Sertifikasi partisipasi dalam idcamp Alumni Dialogue 3 yang berfokus pada pengembangan potensi sebagai instruktur, fasilitator, dan speaker handal sambil bekerja.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/2munq0ti5w08xtpcsnicc/idcamp-alumni-dialogue-3-unlock-your-potential-menjadi-instruktur-fasilitator-dan-speaker-handal-sambil-bekerja-certificate.pdf?rlkey=0oku6nkz5n3pcsd7e2hkky31b&st=mm43qar0',
  },
  {
    nama: 'Idcamp Virtual Roadshow X Algobash Ctrlcareer Your Tech Career Cheat Code',
    penyelenggara: 'Indosat Ooredoo Hutchison Digital Camp',
    tahun: 2024,
    deskripsi: 'Sertifikasi partisipasi dalam idcamp Virtual Roadshow x Algobash CtrlCareer yang berfokus pada cheat code karir teknologi.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/sc6ibgc8pcrfnp7xvdm6n/idcamp-virtual-roadshow-x-algobash-ctrlcareer-your-tech-career-cheat-code-certificate.pdf?rlkey=wojkfi2mmohnllaut05k0htha&st=jwdvkdvl',
  },
  {
    nama: 'Idcamp x Dicoding Live 3 Automation And Ai Trends How They Are Shaping The Future',
    penyelenggara: 'Indosat Ooredoo Hutchison Digital Camp',
    tahun: 2024,
    deskripsi: 'Sertifikasi partisipasi dalam idcamp x Dicoding Live 3 yang membahas tren otomasi dan AI serta dampaknya terhadap masa depan.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/nyhcyeursuzjzp0rz3n1g/idcamp-x-dicoding-live-3-automation-and-ai-trends-how-they-are-shaping-the-future-certificate.pdf?rlkey=mkzw8xq6avfh31dd07ijta8ns&st=9oonubhl',
  },
  {
    nama: 'Idcamp X Dicoding Live 4 Mastering The Ai Driven Workplace Skills You Need For The Next Decade',
    penyelenggara: 'Indosat Ooredoo Hutchison Digital Camp',
    tahun: 2024,
    deskripsi: 'Sertifikasi partisipasi dalam idcamp x Dicoding Live 4 yang membahas keterampilan yang dibutuhkan untuk menguasai tempat kerja yang didorong oleh AI di dekade mendatang.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/llvqxgr9lxdhajcgub2fw/idcamp-x-dicoding-live-4-mastering-the-ai-driven-workplace-skills-you-need-for-the-next-decade-certificate.pdf?rlkey=s0jkp7s1bcaqckmvjl23weww0&st=fhra2y55',
  },
  {
    nama: 'JH - Sertifikat Event Born To Defend_170-170',
    penyelenggara: 'Jadi Hacker',
    tahun: 2025,
    deskripsi: 'Sertifikasi partisipasi dalam event "Born To Defend" yang diselenggarakan oleh Jadi Hacker.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/fbcagdtdnh4cfpcbqwxd7/JH-Sertifikat-Event-Born-To-Defend_170-170.pdf?rlkey=lwm7tjru7vo8c2fkx1mo9yez5&st=t01hsnaj',
  },
  {
    nama: 'JH - Sertifikat Event FROM ZERO TO HACKER-halaman-14',
    penyelenggara: 'Jadi Hacker',
    tahun: 2025,
    deskripsi: 'Sertifikasi partisipasi dalam event "FROM ZERO TO HACKER',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/onzi7yayy61leqy01k67k/JH-Sertifikat-Event-FROM-ZERO-TO-HACKER-halaman-14.pdf?rlkey=lwnltm59a5ozhb7rj3xxejs7w&st=lcoodjua',
  },
  // {
  //   nama: 'Seminar Nasional Public Speaking',
  //   penyelenggara: 'Speaking Official',
  //   tahun: 2024,
  //   deskripsi: 'Sertifikasi partisipasi dalam seminar Nasional Public Speaking sebagai bentuk pengakuan atas kontribusi dalam organisasi.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/ztsosfc9l7s7jk03sppez/PUBLIC-SPEAKING-Aidil-Pramadita-Putra.jpg?rlkey=gjbgustcvgxu1363gpzg3m4em&st=h4320s8g',
  // },
  // {
  //   nama: 'Reschedule Idcamp Alumni Dialogue 4 Failing Forward Turning Setbacks Into Growth In Tech',
  //   penyelenggara: 'Indosat Ooredoo Hutchison Digital Camp',
  //   tahun: 2025,
  //   deskripsi: 'Sertifikasi partisipasi dalam idcamp Alumni Dialogue 4 yang berfokus pada mengubah kemunduran menjadi pertumbuhan di bidang teknologi.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/8ybh77eduqojhf6np9rnb/reschedule-idcamp-alumni-dialogue-4-failing-forward-turning-setbacks-into-growth-in-tech-certificate.pdf?rlkey=f2cplm0c23q1odunjnsj24z7p&st=2eut0n78',
  // },
  // {
  //   nama: 'Webinar Pengembangan Diri ',
  //   penyelenggara: 'Teknik Informatika UIN Suska Riau',
  //   tahun: 2025,
  //   deskripsi: 'Sertifikasi partisipasi dalam webinar Pengembangan Diri yang diselenggarakan oleh Teknik Informatika UIN Suska Riau.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/pfpkqle8z7z0rhpwsx37i/Sertifikat-Aidil-Pramadita-Putra.pdf?rlkey=8y505bt1f2fgrolfgszizct63&st=p1qi2uzd',
  // },
  {
    nama: 'IDCH Talk Vol 51. Tren Website 2025',
    penyelenggara: 'IdCloudHost',
    tahun: 2025,
    deskripsi: 'Sertifikasi partisipasi dalam IDCH Talk Vol 51 yang membahas tren website di tahun 2025.',
    link: 'https://www.dl.dropboxusercontent.com/scl/fi/kq47hidesj41akdja0m5i/Sertifikat-Aidil-Pramadita-Putra.pdf?rlkey=u1szu58pws49x8nmkjse3adia&st=0j4r7433',
  },
  // {
  //   nama: 'Kuliah Umum: Startegi Adaptasi Mahasiswa Baru Dalam Meraih Kesuksesan Studi',
  //   penyelenggara: 'UIN Suska Riau',
  //   tahun: 2024,
  //   deskripsi: 'Sertifikasi partisipasi dalam kuliah umum yang membahas strategi adaptasi mahasiswa baru dalam meraih kesuksesan studi.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/0dmjvpyxm7yx5duh4rdwt/Sertifikat-Kuliah-Umum-Univesitas-2024-Sesi-Siang.pdf?rlkey=m8lrhgah3y82yxpjgwpxlshaj&st=tzonl3re',
  // },
  // {
  //   nama: 'Seminar: Analisis Data Berbasis SQL Untuk Pengambilan Keputusan',
  //   penyelenggara: 'Universitas Pelita Bangsa',
  //   tahun: 2024,
  //   deskripsi: 'Sertifikasi partisipasi dalam seminar yang membahas analisis data berbasis SQL untuk pengambilan keputusan.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/kj1rrgnzu8bsrkhz1fbqs/Sertifikat-Seminar-Online-Manajemen-Basis-Data-Aidil-Pramadita-Putra.pdf?rlkey=3r4rom4vwkayb9z69vvvxomwl&st=aa766oje',
  // },
  // {
  //   nama: 'Peserta Simatif',
  //   penyelenggara: 'Himatif',
  //   tahun: 2024,
  //   deskripsi: 'Sertifikasi partisipasi dalam Simatif 2024 sebagai bentuk pengakuan atas kontribusi dalam organisasi.',
  //   link: 'https://www.dl.dropboxusercontent.com/scl/fi/jwyzwgq9znm10xrrwlwal/SIMATIF-Aidil-Pramadita-Putra.png?rlkey=y0jrr12y67atfp2jhua22dreo&st=9nqsv6pb',
  // },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
    },
  }),
  hover: {
    scale: 1.03,
    y: -6,
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.15)',
  },
};

const Sertifikasi = () => {
  return (
    <motion.section
      className="min-h-screen py-16 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Sertifikat Event
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-6xl">
        {sertifikasiList.map((sertif, idx) => (
          <motion.div
            key={idx}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={idx}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {sertif.nama}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {sertif.penyelenggara} &bull; {sertif.tahun}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              {sertif.deskripsi}
            </p>
            <a
              href={sertif.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-sm font-semibold shadow-md transition"
            >
              Lihat Sertifikat
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Sertifikasi;