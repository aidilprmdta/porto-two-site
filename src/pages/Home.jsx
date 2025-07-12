import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white flex flex-col items-center justify-center px-6 py-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <motion.h1
                className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                Halo! Saya Aidil 👋
            </motion.h1>

            <motion.p
                className="text-lg sm:text-xl max-w-2xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                Saya seorang <strong className="text-blue-600 dark:text-blue-400">web developer pemula</strong> yang gemar membangun aplikasi modern menggunakan React, Tailwind CSS, dan teknologi web lainnya. Selamat datang di portofolio saya!
            </motion.p>

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
            </motion.div>

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
