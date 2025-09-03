import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Freelance",
    company: "personal projects",
    period: "Mar 2019 - Jun 2020",
    description: [
      "Sebagai seorang freelancer, saya telah mengerjakan berbagai proyek pribadi yang mencakup desing dan gambar animasi.",
    ],
    skills: [
      "🎥 Videografi & Penyuntingan Video",
      "🎨 Desain",
      "💬 Komunikasi",
      "👥 Kerja Sama Tim",
    ],
    experience: [
      " Mengerjakan proyek desain grafis dan gambar animasi untuk klien lokal",
      " Membuat konten visual untuk media sosial",    
    ]
  },
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
      " Menciptakan konten visual yang menarik untuk media sosial",
      " Mengorganisir dan mendokumentasikan acara jurusan",
      " Mengembangkan strategi komunikasi yang efektif untuk meningkatkan visibilitas jurusan",
      " Membangun hubungan dengan audiens melalui interaksi di media sosial",
      " Menganalisis kinerja konten dan memberikan rekomendasi untuk perbaikan",
      " Mengikuti tren desain dan teknologi terbaru untuk meningkatkan kualitas konten"
    ]
  },
  {
    role: "Anggota Divisi HID - Kongres XVIII Departemen Teknik Informatika 2024",
    company: "Himpunan Mahasiswa Teknik Informatika",
    period: "Okt 2024 - Des 2024",
    description: [
      "Joining the Public Relations, Information, and Documentation (HID) team for this department-level event provided me with new experience in the world of formal event documentation. I was tasked with designing and documenting the entire event using a camera. This experience taught me to work quickly, meticulously, and remain creative even under time pressure. All documentation was then archived for final reports and post-event content."
    ],
    skills: [
      "🎨 Graphic Design",
      "📸 Photography",
      "💪 Teamwork",
      "👨‍💻 Problem Solving",
      "⌚ Time Management"    
    ],
  },
  {
    role: "Member of the XI Curmative HID Division",
    company: "Himpunan Mahasiswa Teknik Informatika",
    period: "Mar 2025 - Mar 2025",
    description: [
      "For this spiritually-themed event, I was once again entrusted with being a member of the HID division. In addition to design, I was also responsible for documenting the event. Furthermore, I was also responsible for the registration process, orderly recording the attendance. This activity taught me how to multitask, maintain communication with the team, and consistently produce neat, publishable documentation."
    ],
    skills: [
      "🎨 Graphic Design",
      "📸 Photography",
      "💪 Teamwork",
      "Communication",
      "Multitasking",    
    ],
  },
  {
    role: "Members of the HID Division of the HIMATIF Cup 2025",
    company: "Himpunan Mahasiswa Teknik Informatika",
    period: "Mei 2025 - Mei 2025",
    description: [
      "At this annual sporting event, I was entrusted with the role of designer and part of the documentation and videography team. Throughout the event, I captured key moments from each match using a camera, from the atmosphere of the match to the winning moments of the participating teams. This experience taught me the importance of speed, accuracy, and creativity in conveying information visually—especially in dynamic competitive situations. I also learned how to maintain good team coordination so that all content can be published quickly and remains engaging."
    ],
    skills: [
      "🎨 Graphic Design",
      "📸 Photography",
      "Content Design for Social Media",
      "Videography",
      "Multitasking",   
    ],
  },
  {
    role: "Members of the HID Upgrading Division of HIMATIF 2025",
    company: "Himpunan Mahasiswa Teknik Informatika",
    period: "Mei 2025 - Mei 2025",
    description: [
      "HIMATIF Upgrading 2025 is an internal event organized by and for members of the Informatics Engineering Student Association (HIMATIF). The goal of this event is to strengthen relationships among members, build solidarity, and enhance organizational spirit within the HIMA environment. As a committee member from the Information Relations and Documentation (HID) division, I was tasked with designing and documenting the event through photography. Although internal in nature, this event still demanded professionalism and strong collaboration across divisions. I learned the importance of maintaining design quality consistent with the organization's identity and ensuring smooth documentation, even in a short timeframe. This experience strengthened my skills in working in a small organization, while maintaining neat, structured, and communicative work standards."
    ],
    skills: [
      "🎨 Poster Design",
      "📸 Photography",
      "Manajemen aktu",
      "Teamwork",
      "Komunikasi",   
    ],
  },
  {
    role: "Member of the 2025 Asomatic HID Division",
    company: "Himpunan Mahasiswa Teknik Informatika",
    period: "Feb 2025 - Sekarang",
    description: [
      "ASOMATIVE 2025 is a four-day student community service camp focused on character development and social engagement for new students, including community service, visits to orphanages, environmental projects, and outreach to schools. In this program, I served as part of the Information Relations and Documentation (HID) division, specifically in content creation and video editing. I participated in managing footage from various activities, creating visual narratives, and editing the material into short and long-form video content for internal publications and social media. This experience honed my skills in video storytelling, documentation file management, and how to convey the spirit of collaboration, education, and social awareness through visual media. ASOMATIVE 2025 also broadened my perspective on the importance of community service as part of a student's role."
    ],
    skills: [
      "🎨 Poster Design",
      "📸 Photography",
      "Manajemen aktu",
      "Teamwork",
      "Komunikasi",   
    ],
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
      
      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-2 gap-8">
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
