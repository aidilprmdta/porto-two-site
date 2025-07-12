import React from 'react';
import { motion } from 'framer-motion';

const sertifikasiList = [
  {
    nama: 'React Developer Certification',
    penyelenggara: 'Dicoding',
    tahun: 2023,
    deskripsi: 'Sertifikasi resmi pengembangan aplikasi React, membuktikan kemampuan membangun aplikasi web modern.',
    link: 'https://www.dicoding.com/certificates/XXXXXX',
  },
  {
    nama: 'Front-End Web Developer',
    penyelenggara: 'FreeCodeCamp',
    tahun: 2022,
    deskripsi: 'Menyelesaikan kurikulum front-end web development, termasuk HTML, CSS, JavaScript, dan React.',
    link: 'https://www.freecodecamp.org/certification/XXXXXX',
  },
  {
    nama: 'JavaScript Algorithms and Data Structures',
    penyelenggara: 'FreeCodeCamp',
    tahun: 2022,
    deskripsi: 'Menguasai algoritma dan struktur data menggunakan JavaScript.',
    link: 'https://www.freecodecamp.org/certification/XXXXXX',
  },
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
        Sertifikasi & Penghargaan
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
