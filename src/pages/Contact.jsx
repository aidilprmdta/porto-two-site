import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

function Contact() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-2xl bg-white/20 dark:bg-gray-800/40 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hubungi Saya
        </motion.h1>

        <motion.p
          className="text-center text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Jangan ragu untuk menghubungi saya jika ingin berkolaborasi, berdiskusi proyek, atau sekadar menyapa!
        </motion.p>

        {/* Form Contact */}
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
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
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

export default Contact;
