import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    image: "https://www.dl.dropboxusercontent.com/scl/fi/o3d7qg35zqw0139hlsnz7/TicTacToe.png?rlkey=h5eclt7yudusreu06kb8zrlai&st=q4joho3v",
    title: "TicTacToe",
    description: "A simple todo application with CRUD functionality and local storage support.",
    link: "https://github.com/aidilprmdta/TicTacToe",
    tech: ["Java"],
  },
  {
    image: "https://www.dl.dropboxusercontent.com/scl/fi/5qtr20kjyvdg33kxjp1cj/Personal.png?rlkey=896y0tnasgxwot9gwl0v8dcez&st=whiuhkvw",
    title: "Personal Portfolio Website",
    description: "A personal portfolio website built using HTML, CSS, and JavaScript. Hosted on GitHub Pages.",
    link: "https://github.com/aidilprmdta/website-aidilprmdta",
    tech: ["Html", "CSS", "JavaScript", "Node.js"],
  },
  {
    image: "https://www.dl.dropboxusercontent.com/scl/fi/dv4wwisgwyng04r8lc7k2/Digital-Quran.png?rlkey=l1coyfum9xloeogyrq6s67t10&st=00gv8sda",
    title: "Website Digital-Quran",
    description: "A web app that lists and displays Qur'anic surahs and translations. Built using React.js, Tailwind CSS, and API from equran.id.",
    link: "https://github.com/aidilprmdta/Digital-Qur-an",
    tech: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
  },
  {
    image: "https://www.dl.dropboxusercontent.com/scl/fi/89sk17r62w7fauaz78nuq/Toko-Makanan.png?rlkey=2piqaw44alkjtehzauo3vr1ws&st=af0anp9v",
    title: "Toko Makanan",
    description: "A food store web app with product listing, cart, and checkout features. Built with Java and JavaFX.",
    link: "https://github.com/aidilprmdta/Toko-Makanan",
    tech: ["Java", "JavaFX"],
  },   
  {
    image: "https://www.dl.dropboxusercontent.com/scl/fi/349vc7gsxottv38fiuzws/hbd2.png?rlkey=zp44c8mr2kjzm8qwgzny7yuqj&st=dsapjxax",
    title: "Birthday-site-two",
    description: "Romantic birthday site for loved ones. Built with React, Tailwind CSS, Node.js, and Framer Motion for emotion & animation.",
    link: "https://github.com/aidilprmdta/hbd",
    tech: ["Html", "CSS", "JavaScript", "Node.js", "Framer Motion"],
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
      transition={{ duration: 0.6 }}
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                🔗 View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;