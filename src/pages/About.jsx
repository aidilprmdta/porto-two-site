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
            Hai! Aku <span className="font-semibold text-indigo-700 dark:text-indigo-300">Aidil Pramadita Putra</span> aku berasal dari <span className="font-medium text-indigo-700 dark:text-indigo-300">Duri</span>. Saat ini aku adalah mahasiswa semester 3 di Program Studi Teknik Informatika, Fakultas Sains dan Teknologi, Universitas Islam Negeri Sultan Syarif Kasim.
          </p>

          <p>
            Aku memiliki ketertarikan besar dalam bidang <span className="font-semibold text-indigo-700 dark:text-indigo-300">pemrograman</span>, mulai dari pengembangan web, robotic, hingga keamanan siber . Awalnya aku bercita-cita menjadi pembuat animasi, tapi kini berfokus untuk menguasai berbagai bahasa pemrograman.
          </p>

          <p>
            Passion aku adalah membangun aplikasi web yang menarik dan fungsional. Aku suka belajar teknologi baru seperti <span className="font-semibold text-indigo-700 dark:text-indigo-300">React</span>, <span className="font-semibold text-indigo-700 dark:text-indigo-300">Next.js</span>, <span className="font-semibold text-indigo-700 dark:text-indigo-300">Tailwind CSS</span>, <span className="font-semibold text-indigo-700 dark:text-indigo-300">Node.js</span>, dan <span className="font-semibold text-indigo-700 dark:text-indigo-300">Framer Motion</span>. Aku percaya bahwa kombinasi desain yang baik dan pengalaman pengguna yang menyenangkan adalah kunci untuk aplikasi yang sukses.
          </p>

          <p>
            Aku juga memiliki soft skill yang baik seperti <span className="font-semibold text-indigo-700 dark:text-indigo-300">komunikasi</span>, <span className="font-semibold text-indigo-700 dark:text-indigo-300">kerja tim</span>, <span className="font-semibold text-indigo-700 dark:text-indigo-300">Manajemen waktu</span>, <span className="font-semibold text-indigo-700 dark:text-indigo-300">Kreatif</span>, <span className="font-semibold text-indigo-700 dark:text-indigo-300">Inovatif</span>, dan <span className="font-semibold text-indigo-700 dark:text-indigo-300">Empati</span>.
          </p>

          <p>
            Selain itu, aku juga suka bermain alat <span className="italic text-indigo-700 dark:text-indigo-300">Musik</span>, bermain <span className="italic text-indigo-700 dark:text-indigo-300">voli</span>, dan <span className="italic text-indigo-700 dark:text-indigo-300" >badminton</span>. Aku ingin menjadi seorang programmer multitalenta yang bisa membangun aplikasi bermanfaat dengan antarmuka menarik dan pengalaman pengguna yang menyenangkan.
          </p>

          <p>
            Aku aktif mengikuti perkembangan dunia teknologi, membaca buku IT, serta berpartisipasi dalam proyek kolaboratif seperti open source. Aku percaya bahwa teknologi yang tepat bisa membawa perubahan positif untuk masyarakat.
          </p>

          <p>
            Selain itu, aku juga aktif dalam organisasi kampus dan komunitas teknologi. Aku percaya bahwa kolaborasi dan berbagi pengetahuan adalah kunci untuk berkembang bersama.
          </p>

          <p>
            Aku selalu terbuka untuk belajar hal baru dan siap menghadapi tantangan. Dengan semangat yang tinggi, aku yakin bisa mencapai cita-cita sebagai programmer handal yang berkontribusi bagi masyarakat.
          </p>

          <p>
            Terima kasih telah mengunjungi halaman ini! Jika kamu ingin tahu lebih banyak tentang aku, jangan ragu untuk menghubungiku melalui media sosial atau email. Aku senang bisa berbagi pengetahuan dan pengalaman dengan orang lain.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
