import React, { useState } from "react";
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
      ]
    },
    {
      role: "Anggota Divisi HID - Kongres XVIII Departemen Teknik Informatika 2024",
      company: "Himpunan Mahasiswa Teknik Informatika",
      period: "Okt 2024 - Des 2024",
      description: [
        "Bergabung dengan tim Humas, Informasi, dan Dokumentasi (HID) untuk acara tingkat departemen ini memberi saya pengalaman baru dalam dunia dokumentasi acara formal. Saya ditugaskan untuk merancang dan mendokumentasikan seluruh acara menggunakan kamera. Pengalaman ini mengajarkan saya untuk bekerja cepat, teliti, dan tetap kreatif bahkan di bawah tekanan waktu. Semua dokumentasi kemudian diarsipkan untuk laporan akhir dan konten pasca-acara."
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
      role: "Anggota Divisi HID Kurmatif XI",
      company: "Himpunan Mahasiswa Teknik Informatika",
      period: "Mar 2025 - Mar 2025",
      description: [
        "Untuk acara bertema spiritual ini, saya kembali dipercaya menjadi anggota divisi HID. Selain desain, saya juga bertanggung jawab untuk mendokumentasikan acara. Selain itu, saya juga bertanggung jawab atas proses registrasi dan pencatatan kehadiran yang tertib. Kegiatan ini mengajarkan saya cara bekerja multitasking, menjaga komunikasi dengan tim, dan secara konsisten menghasilkan dokumentasi yang rapi dan layak publikasi."
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
      role: "Anggota Divisi HID HIMATIF CUP 2025",
      company: "Himpunan Mahasiswa Teknik Informatika",
      period: "Mei 2025 - Mei 2025",
      description: [
        "Pada acara olahraga tahunan ini, saya dipercaya sebagai desainer dan bagian dari tim dokumentasi dan videografi. Sepanjang acara, saya mengabadikan momen-momen penting dari setiap pertandingan menggunakan kamera, mulai dari atmosfer pertandingan hingga momen-momen kemenangan tim-tim peserta. Pengalaman ini mengajarkan saya pentingnya kecepatan, akurasi, dan kreativitas dalam menyampaikan informasi secara visual—terutama dalam situasi kompetisi yang dinamis. Saya juga belajar bagaimana menjaga koordinasi tim yang baik agar semua konten dapat dipublikasikan dengan cepat dan tetap menarik."
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
      role: "Anggota Divisi HID HIMATIF UPGRADING 2025",
      company: "Himpunan Mahasiswa Teknik Informatika",
      period: "Mei 2025 - Mei 2025",
      description: [
        "HIMATIF Upgrading 2025 merupakan acara internal yang diselenggarakan oleh dan untuk anggota Himpunan Mahasiswa Teknik Informatika (HIMATIF). Tujuan acara ini adalah untuk mempererat hubungan antar anggota, membangun solidaritas, dan meningkatkan semangat berorganisasi di lingkungan HIMA. Sebagai panitia dari divisi Hubungan Informasi dan Dokumentasi (HID), saya ditugaskan untuk merancang dan mendokumentasikan acara ini melalui fotografi. Meskipun bersifat internal, acara ini tetap menuntut profesionalisme dan kolaborasi yang kuat antar divisi. Saya belajar pentingnya menjaga kualitas desain yang konsisten dengan identitas organisasi dan memastikan dokumentasi yang lancar, meskipun dalam waktu singkat. Pengalaman ini memperkuat keterampilan saya dalam bekerja di organisasi kecil, sekaligus mempertahankan standar kerja yang rapi, terstruktur, dan komunikatif."
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
      role: "Anggota Divisi HID Asomatif 2025",
      company: "Himpunan Mahasiswa Teknik Informatika",
      period: "Feb 2025 - Sekarang",
      description: [
        "ASOMATIVE 2025 adalah program pengabdian masyarakat mahasiswa selama empat hari yang berfokus pada pengembangan karakter dan keterlibatan sosial bagi mahasiswa baru, termasuk pengabdian masyarakat, kunjungan ke panti asuhan, proyek lingkungan, dan penjangkauan ke sekolah-sekolah. Dalam program ini, saya bertugas di divisi Hubungan Informasi dan Dokumentasi (HID), khususnya dalam pembuatan konten dan penyuntingan video. Saya berpartisipasi dalam mengelola rekaman berbagai kegiatan, membuat narasi visual, dan menyunting materi menjadi konten video pendek dan panjang untuk publikasi internal dan media sosial. Pengalaman ini mengasah keterampilan saya dalam bercerita melalui video, mengelola berkas dokumentasi, dan menyampaikan semangat kolaborasi, edukasi, dan kepedulian sosial melalui media visual. ASOMATIVE 2025 juga memperluas perspektif saya tentang pentingnya pengabdian masyarakat sebagai bagian dari peran seorang mahasiswa."
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
      role: "Anggota Divisi Dokumentasi Forta Faste 2025",
      company: "Himpunan Mahasiswa Teknik Informatika",
      period: "Juni 2025 - Sekarang",
      description: [
        "Bergabung sebagai anggota divisi dokumentasi pada kegiatan FORTA FASTE 2025 (Forum Ta’aruf Fakultas Sains dan Teknologi). Dalam peran ini, aku bertanggung jawab untuk mendesain materi visual acara, membuat animasi logo, serta mendokumentasikan rangkaian kegiatan.",
        "Melalui pengalaman ini, aku belajar bagaimana menyampaikan identitas acara melalui desain kreatif dan animasi, sekaligus memastikan seluruh momen penting terdokumentasi dengan baik. Kegiatan ini juga mengasah keterampilan kolaborasi dalam tim kreatif serta ketelitian dalam menghasilkan dokumentasi yang rapi dan terorganisir."
      ],
      skills: [
        "Desain Grafis",
        "Animasi Logo",
        "Dokumentasi Acara",
        "Kerja Tim",
        "Komunikasi",
        "Pemecahan Masalah",
        "Perencanaan Strategis"   
      ],
    },
    {
      role: "Ketua Tim Humas, Informasi, dan Dokumentasi (HID) SIMATIF 2025",
      company: "Himpunan Mahasiswa Teknik Informatika",
      period: "Juni 2025 - Sekarang",
      description: [
        "Saya memimpin tim HID yang beranggotakan 11 orang untuk SIMATIF 2025, sebuah acara yang bertujuan untuk mempromosikan mahasiswa teknologi informasi. Saya bertanggung jawab untuk mengoordinasikan kegiatan tim dan memastikan tujuan acara tercapai.",
        "Prestasi:",
        "- Mengembangkan sistem komunikasi terstruktur menggunakan WhatsApp Community untuk menyederhanakan koordinasi dalam tim HID",
        "- Mengoptimalkan distribusi tugas untuk mengelola beban kerja yang tinggi dan memastikan saluran komunikasi yang jelas",
        "- Mengawasi semua aspek kreatif dan dokumentasi untuk acara mendatang, termasuk perencanaan konten, alokasi sumber daya, dan kolaborasi tim",
        "- Meningkatkan kesadaran dan partisipasi mahasiswa teknologi informasi melalui kegiatan penjangkauan yang efektif",
        "Dengan pengalaman ini, saya memiliki kemampuan untuk memimpin tim dan mengelola proyek yang kompleks, memastikan tujuan acara tercapai melalui komunikasi dan kolaborasi tim yang efektif."
      ],
      skills: [
        "Desain Grafis",
        "Produksi Video",
        "Kerja Tim",
        "Komunikasi",
        "Manajemen Waktu",
        "Pemecahan Masalah",
        "Kepemimpinan",
        "Perencanaan Strategis"   
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
        damping: 18,
      },
    }),
  };

  // 🔹 Komponen teks bisa expand/collapse
  function ExpandableText({ text, limit = 150 }) {
    const [expanded, setExpanded] = useState(false);
    const isLong = text.length > limit;
    const displayText = expanded
      ? text
      : text.slice(0, limit) + (isLong ? "..." : "");

    return (
      <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
        {displayText}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="ml text-blue-500 hover:underline font-medium"
          >
            {expanded ? "Sembunyikan" : "Baca selengkapnya"}
          </button>
        )}
      </p>
    );
  }

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
          className="text-4xl mb-12 text-center tracking-tight text-blue-600 dark:text-blue-400"
        >
          Experience
        </motion.h2>

        <div className="w-full max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                {exp.company}
              </p>

              {/* 🔹 Description pakai ExpandableText */}
              <div className="mt-3">
                <ExpandableText text={exp.description.join(" ")} limit={150} />
              </div>

              {exp.skills?.length > 0 && (
                <>
                  <h3 className="mt-4 font-semibold text-gray-900 dark:text-gray-200">
                    Keahlian:
                  </h3>
                  <ul className="list-disc ml-6 text-gray-800 dark:text-gray-300">
                    {exp.skills.map((item, index) => (
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