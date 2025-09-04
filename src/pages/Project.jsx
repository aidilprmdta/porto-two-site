import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    image: "https://www.dl.dropboxusercontent.com/scl/fi/o3d7qg35zqw0139hlsnz7/TicTacToe.png?rlkey=h5eclt7yudusreu06kb8zrlai&st=q4joho3v",
    title: "TicTacToe",
    description: "Aplikasi todo sederhana dengan fungsionalitas CRUD dan dukungan penyimpanan lokal.",
    link: "https://github.com/aidilprmdta/TicTacToe",
    tech: ["Java"],
  },
  {
    image: "https://www.dl.dropboxusercontent.com/scl/fi/5qtr20kjyvdg33kxjp1cj/Personal.png?rlkey=896y0tnasgxwot9gwl0v8dcez&st=whiuhkvw",
    title: "Personal Portfolio Website",
    description: "Situs web portofolio pribadi yang dibuat menggunakan HTML, CSS, dan JavaScript. Dihosting di GitHub Pages.",
    link: "https://github.com/aidilprmdta/website-aidilprmdta",
    demolink: "https://aidilprmdta.github.io/website-aidilprmdta/",
    tech: ["Html", "CSS", "JavaScript", "Node.js"],
  },
  {
    image: "https://www.dl.dropboxusercontent.com/scl/fi/dv4wwisgwyng04r8lc7k2/Digital-Quran.png?rlkey=l1coyfum9xloeogyrq6s67t10&st=00gv8sda",
    title: "Website Digital-Quran",
    description: "Aplikasi web yang mencantumkan dan menampilkan surah dan terjemahan Al-Qur'an. Dibuat menggunakan React.js, Tailwind CSS, dan API dari equran.id.",
    link: "https://github.com/aidilprmdta/Digital-Qur-an",
    demolink: "https://digital-qur-an.vercel.app/",
    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    image: "https://www.dl.dropboxusercontent.com/scl/fi/89sk17r62w7fauaz78nuq/Toko-Makanan.png?rlkey=2piqaw44alkjtehzauo3vr1ws&st=af0anp9v",
    title: "Toko Makanan",
    description: "Aplikasi web toko makanan dengan fitur daftar produk, keranjang belanja, dan pembayaran. Dibuat dengan Java dan JavaFX.",
    link: "https://github.com/aidilprmdta/Toko-Makanan",
    tech: ["Java", "JavaFX"],
  },
  // {
  //   image: "https://www.dl.dropboxusercontent.com/scl/fi/3wgcexeupfjzb5zy355nw/hbd1.png?rlkey=zwffm6e2fkvay78oim8cc2uwp&st=ot6ivn51",
  //   title: "Birthday-site",
  //   description: "Selamat datang di Situs Ulang Tahun! Situs web ini dirancang khusus untuk memberikan ucapan selamat ulang tahun yang romantis dan istimewa kepada orang-orang terkasih. Dibuat dengan ❤️ menggunakan React, Tailwind CSS, Node.js, dan Framer Motion untuk animasi yang halus dan pengalaman pengguna yang menyenangkan.",
  //   link: "https://github.com/aidilprmdta/Birthday-site",
  //   tech: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Framer Motion"],
  // },     
  {
    image: "https://www.dl.dropboxusercontent.com/scl/fi/349vc7gsxottv38fiuzws/hbd2.png?rlkey=zp44c8mr2kjzm8qwgzny7yuqj&st=dsapjxax",
    title: "Birthday-site-two",
    description: "Situs web ulang tahun untuk sahabat. Dibuat dengan React, Tailwind CSS, Node.js, dan Framer Motion untuk emosi dan animasi.",
    link: "https://github.com/aidilprmdta/hbd",
    demolink: "hhttps://aidilprmdta.github.io/hbd/",
    tech: ["Html", "CSS", "JavaScript", "Node.js", "Framer Motion"],
  },
  {
    image: "https://www.dropbox.com/scl/fi/3tlw9kpky6m6ylw0ajesn/Ativerse.png?rlkey=1y84a5qmd6fh8puz1ject7hhg&st=e32hzd0f&raw=1",
    title: "Ativerse",
    description: "Situs web kelas untuk ativerse. Dibuat dengan React, Tailwind CSS, Node.js, dan Framer Motion",
    link: "https://github.com/aidilprmdta/web-ativerse",
    demolink: "https://ativerse.vercel.app/",
    tech: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Framer Motion", "Supabase", "AOS", "Gsap"],
  },
  {
    image: "https://www.dropbox.com/scl/fi/axbhkmzbatl1ulbmhgi1l/Video.png?rlkey=kmx90vicehq6hhlykxvqxktqs&st=2nsq5hpc&raw=1",
    title: "Video Cinematic SMAN 1 Pekanbaru - Reuni Akbar Ke-2",
    description: "Sebuah video cinematic untuk ajakan reuni, berisi footage kegiatan, pesan ajakan, dan ditutup dengan credit scene.",
    link: "https://drive.google.com/file/d/1LL_z9yIPBNK6B1WALJ_5iFUtulQ2En34/view?usp=drive_link",
    tech: ["Capcut", "Canva", "Kolase foto"],
  },
  {
    image: "https://www.dropbox.com/scl/fi/ccryx2eh9o3nvnyn1jcfp/Design.png?rlkey=8srwz80d8ztuw8n212qc75v03&st=z6jrxeb0&raw=1",
    title: "Design Poster",
    description: "Kumpulan desain untuk acara kampus.",
    link: "https://drive.google.com/drive/folders/1fYZmzlt8cxTF5Ml5pP7WhEDy8GUFSWHr?usp=drive_link",
    tech: ["Canva"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
    },
  }),
};

function Project() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-700/30 text-blue-800 dark:text-blue-200 px-3 py-1 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                🔗 View Project
              </a>

              {project.demolink && (
              <a
              href={project.demolink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-600 text-right dark:text-blue-400 hover:underline"
              >
                🔗 Live Demo
              </a>
            )}
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;