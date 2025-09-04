import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, User } from 'lucide-react';

function AboutContactSplit() {
  return (
    <motion.section
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* LEFT - ABOUT */}
      <motion.div
        className="flex flex-col justify-center px-8 py-16 space-y-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl text-center font-bold bg-blue-600 bg-clip-text text-transparent">
          Tentang Saya
        </h2>
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
              Selain itu, aku juga suka bermain alat <span className="italic text-indigo-700 dark:text-indigo-300">Musik</span>, bermain <span className="italic text-indigo-700 dark:text-indigo-300">voli</span>, dan <span className="italic text-indigo-700 dark:text-indigo-300" >badminton</span>. Aku ingin menjadi seorang programmer multitalenta yang bisa membangun aplikasi bermanfaat dengan antarmuka menarik dan pengalaman pengguna yang menyenangkan. </p> <p> Aku aktif mengikuti perkembangan dunia teknologi, membaca buku IT, serta berpartisipasi dalam proyek kolaboratif seperti open source. Aku percaya bahwa teknologi yang tepat bisa membawa perubahan positif untuk masyarakat. </p> <p> Selain itu, aku juga aktif dalam organisasi kampus dan komunitas teknologi. Aku percaya bahwa kolaborasi dan berbagi pengetahuan adalah kunci untuk berkembang bersama. 
            </p> 
            <p> 
                Aku selalu terbuka untuk belajar hal baru dan siap menghadapi tantangan. Dengan semangat yang tinggi, aku yakin bisa mencapai cita-cita sebagai programmer handal yang berkontribusi bagi masyarakat. 
            </p> 
            <p> 
              Terima kasih telah mengunjungi halaman ini! Jika kamu ingin tahu lebih banyak tentang aku, jangan ragu untuk menghubungiku melalui media sosial atau email. Aku senang bisa berbagi pengetahuan dan pengalaman dengan orang lain. 
            </p>
      </motion.div>

      {/* RIGHT - CONTACT */}
      <motion.div
        className="flex flex-col justify-center px-8 py-16 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl border-l border-gray-300 dark:border-gray-700"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl text-center font-bold bg-blue-600 bg-clip-text text-transparent"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hubungi Saya
        </motion.h1>

        <motion.p
          className="text-center text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Jangan ragu untuk menghubungi saya jika ingin berkolaborasi, berdiskusi proyek, atau sekadar menyapa!
        </motion.p>

        <motion.form
          action="https://formspree.io/f/mldnkgvq"
          method="POST"
          className="space-y-5"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold">Nama</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Nama kamu"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="kamu@example.com"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1 font-semibold">Subjek</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subjek"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-semibold">Pesan</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tulis pesan kamu di sini..."
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg font-semibold transition hover:from-blue-700 hover:to-indigo-700"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Kirim Pesan ✉️
          </motion.button>
        </motion.form>

        {/* Info Kontak */}
        <motion.div
          className="mt-8 text-center space-y-2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="flex items-center justify-center gap-2">
            <Mail size={18} /> 
            <a href="mailto:pramadytaa@gmail.com" className="text-blue-500 hover:underline">
              pramadytaa@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <Linkedin size={18} />
            <a
              href="https://linkedin.com/in/aidilprmdta"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/aidilprmdta
            </a>
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default AboutContactSplit;
