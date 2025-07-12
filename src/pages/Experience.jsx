import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Jurnalistik",
    company: "SMA IT Al-Kautsar",
    period: "Okt 2021 - Sep 2022",
    description: [
      "Sebagai siswa yang sangat tertarik dengan jurnalisme, saya memiliki spesialisasi dalam fotografi, penyuntingan video, dan desain. Dengan keterampilan kolaborasi dan komunikasi yang kuat, saya mampu menghasilkan konten berkualitas tinggi yang menarik minat audiens."
    ],
    skills: [
      "📷 Fotografi",
      "🎥 Videografi & Penyuntingan Video",
      "🎨 Desain",
      "💬 Komunikasi",
      "👥 Kerja Sama Tim",
    ],
    experience: [
      " Anggota Jurnalisme OSIS, SMA IT AL-KAUTSAR (2021-2022)",
      " Fotografi untuk acara sekolah",
      " Penyuntingan video untuk keperluan promosi",
      " Desain konten media sosial"
    ]
  },
  {
    role: "Informasi dan Komunikasi",
    company: "Himpunan Mahasiswa Teknik Informatika",
    period: "Jan 2025 - Des 2025",
    description: [
      "Saya merupakan anggota aktif Departemen INFOKOM (Informasi dan Komunikasi) Himpunan Mahasiswa Teknik Informatika (HIMATIF) UIN Suska Riau.",
      "Departemen ini berperan sebagai tim informasi, komunikasi, dan pemasaran digital untuk jurusan Teknik Informatika. Kami bertugas untuk merancang dan membuat konten yang kreatif dan informatif serta relevan bagi audiens melalui berbagai platform media sosial."
    ],
    skills: [
      "🎨 Desain grafis",
      "🎥 Videografi dan dokumentasi",
      "📸 Fotografi acara",
      "🖌️ Penyuntingan konten visual dan media sosial"
    ],
    experience: [
      "Tujuan kami adalah untuk memastikan bahwa tampilan visual dan komunikasi organisasi tetap segar, inspiratif, dan estetis, sehingga pesan organisasi dapat tersampaikan dengan baik dan menarik bagi berbagai mahasiswa TI."
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      damping: 18
    }
  })
};

function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 text-black dark:text-white py-16 px-4 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold mb-12 text-center tracking-tight text-blue-600 dark:text-blue-400"
      >
        Experience
      </motion.h2>

      <div className="w-full max-w-3xl space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-[1.015] hover:shadow-2xl"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{exp.role}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</span>
            </div>

            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{exp.company}</p>

            <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-800 dark:text-gray-300 leading-relaxed">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {exp.skills?.length > 0 && (
              <>
                <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-200">Keahlian:</h3>
                <ul className="list-disc ml-6 text-gray-800 dark:text-gray-300">
                  {exp.skills.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {exp.experience?.length > 0 && (
              <>
                <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-200">Pengalaman:</h3>
                <ul className="list-disc ml-6 text-gray-800 dark:text-gray-300">
                  {exp.experience.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
