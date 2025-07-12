import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-3xl bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl rounded-2xl shadow-xl p-10 border border-gray-200 dark:border-gray-700"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tentang Saya
        </motion.h1>

        <div className="space-y-5 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          <p>
            Hai! Aku <span className="font-semibold text-indigo-700 dark:text-indigo-300">Aidil Pramadita Putra</span> dari <span className="font-medium">Duri</span>. Saat ini aku adalah mahasiswa semester 3 di Program Studi Teknik Informatika, Fakultas Sains dan Teknologi, Universitas Islam Negeri Sultan Syarif Kasim.
          </p>

          <p>
            Aku memiliki ketertarikan besar dalam bidang <span className="font-semibold">pemrograman</span>, mulai dari pengembangan web hingga keamanan siber. Awalnya bercita-cita menjadi pembuat animasi, tapi kini berfokus untuk menguasai berbagai bahasa pemrograman.
          </p>

          <p>
            Selain itu, aku juga suka <span className="italic">musik</span>, <span className="italic">voli</span>, dan <span className="italic">badminton</span>. Aku ingin menjadi seorang programmer multitalenta yang bisa membangun aplikasi bermanfaat dengan antarmuka menarik dan pengalaman pengguna yang menyenangkan.
          </p>

          <p>
            Aku aktif mengikuti perkembangan dunia teknologi, membaca buku IT, serta berpartisipasi dalam proyek kolaboratif seperti open source. Aku percaya bahwa teknologi yang tepat bisa membawa perubahan positif untuk masyarakat.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
