import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faCss3Alt, faJs, faReact, faNodeJs,
  faJava, faGithub, faGitlab
} from '@fortawesome/free-brands-svg-icons';
import {
  SiAdobelightroom, SiCanva, SiNetlify, SiTailwindcss, SiVercel
} from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { icon: faHtml5,
    name: 'HTML5',
    desc: 'Menguasai HTML5 untuk membangun struktur halaman web yang semantik.',
    type: 'fa'
   },
  { icon: faCss3Alt,
    name: 'CSS3',
    desc: 'Menciptakan tampilan modern dengan CSS3, Flexbox, Grid, dan animasi.',
    type: 'fa'
  },
  { icon: SiTailwindcss,
    name: 'Tailwind CSS',
    desc: 'Utility-first CSS untuk membangun UI modern & konsisten.',
    type: 'react'
   },
  { icon: faJs, 
    name: 'JavaScript', 
    desc: 'Membuat website dinamis & integrasi REST API.', 
    type: 'fa'
   },
  { icon: faReact, 
    name: 'React', 
    desc: 'Membangun SPA menggunakan React, Hooks & state management.', 
    type: 'fa' 
  },
  { icon: faNodeJs, 
    name: 'Node.js', 
    desc: 'Membangun backend API ringan dan scalable.', 
    type: 'fa'
  },
  { icon: faJava, 
    name: 'Java', 
    desc: 'OOP, backend & desktop app, integrasi database.', 
    type: 'fa' 
  },
  { icon: faGithub, 
    name: 'Github', 
    desc: 'Version control, branching, pull request.', 
    type: 'fa' 
  },
  { icon: faGitlab, 
    name: 'GitLab', 
    desc: 'CI/CD, issue tracking, pipeline.', 
    type: 'fa' 
  },
  { icon: SiCanva, 
    name: 'Canva', 
    desc: 'Desain visual & media sosial profesional.', 
    type: 'react' 
  },
  { icon: SiAdobelightroom, 
    name: 'Adobe Lightroom', 
    desc: 'Editing foto & peningkatan kualitas visual.', 
    type: 'react' 
  },
  { icon: SiVercel, 
    name: 'Vercel', 
    desc: 'Deploy modern apps dengan CI/CD.', 
    type: 'react' 
  },
  { icon: SiNetlify, 
    name: 'Netlify', 
    desc: 'Deployment static site, form handler & serverless.', 
    type: 'react' 
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: 'spring', stiffness: 60 }
  }),
  hover: {
    scale: 1.06,
    y: -4,
    transition: { type: 'spring', stiffness: 120 }
  }
};

function Skills() {
  return (
    <motion.section
      className="min-h-screen py-16 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack & Tools
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white/70 dark:bg-gray-800/80 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col items-center transition-all"
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {skill.type === 'fa' ? (
              <FontAwesomeIcon icon={skill.icon} className="text-5xl mb-4 text-blue-500" />
            ) : (
              <skill.icon className="text-5xl mb-4 text-blue-500" />
            )}
            <h3 className="text-xl font-semibold mb-2 text-center">{skill.name}</h3>
            <p className="text-sm text-center text-gray-700 dark:text-gray-300">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
