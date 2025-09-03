import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaCcVisa } from "react-icons/fa";

export default function Home() {
    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white flex flex-col items-center justify-center px-6 py-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* ✅ Gambar Profil */}
            <motion.img
                src="https://www.dl.dropboxusercontent.com/scl/fi/0r4tnmge3tkgwtinx6sam/2.JPG?rlkey=2ybrioll3gejykwgtopt1s7bf&st=addqwyjq"
                alt="Profile"
                className="w-64 h-64 rounded-full mb-6 border-4 border-blue-500 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            />

            {/* Judul */}
            <motion.h1
                className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                Hai! Saya Aidil 👋
            </motion.h1>

            {/* Deskripsi */}
            <motion.p
                className="text-lg sm:text-xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                Saya seorang <strong className="text-blue-600 dark:text-blue-400">web developer pemula</strong> yang gemar membangun aplikasi modern menggunakan React, Tailwind CSS, Node.js, Next.js dan teknologi web lainnya. Selamat datang di portofolio saya!
            </motion.p>

            {/* Tombol Sosial */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 mb-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <a
                    href="https://github.com/aidilprmdta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-full transition"
                >
                    <FaGithub /> GitHub
                </a>
                <a
                    href="https://linkedin.com/in/aidilprmdta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-full transition"
                >
                    <FaLinkedin /> LinkedIn
                </a>
                <a
                    href="mailto:pramadytaa@email.com"
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-medium py-2 px-5 rounded-full transition"
                >
                    <FaEnvelope /> Email
                </a>
                <a
                    href="https://www.instagram.com/aidilprmdta"
                    className="flex items-center gap-2 bg-pink-700 hover:bg-gray-800 text-white font-medium py-2 px-5 rounded-full transition"
                >
                    <FaInstagram /> Instagram
                </a>
                <a
                    href="https://www.instagram.com/aidilprmdta"
                    className="flex items-center gap-2 bg-pink-700 hover:bg-gray-800 text-white font-medium py-2 px-5 rounded-full transition"
                >
                    <FaCcVisa /> CV
                </a>
            </motion.div>

            {/* Footer */}
            <motion.div
                className="text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
            >
                © {new Date().getFullYear()} Aidil Pramadita Putra. All rights reserved.
            </motion.div>
        </motion.div>
    );
}
