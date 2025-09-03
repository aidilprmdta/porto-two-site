import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import {
  Home, UserRound, Phone, Briefcase, Folder,
  BadgeCheck, Award, Github, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', icon: <Home size={18} />, label: 'Home' },
    { to: '/about', icon: <UserRound size={18} />, label: 'About' },
    { to: '/experience', icon: <Briefcase size={18} />, label: 'Experience' },
    { to: '/project', icon: <Folder size={18} />, label: 'Project' },
    { to: '/sertifikasi', icon: <Award size={18} />, label: 'Sertifikat' },
    { to: '/TechStack', icon: <BadgeCheck size={18} />, label: 'Tech Stack' },
  ];

  const linkClass =
    'flex items-center gap-1 px-1 py-2 rounded-md transition duration-300 ease-in-out hover:bg-blue-200 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white hover:-translate-y-0.5';

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 text-black dark:text-white relative">
      <div className="font-extrabold text-xl tracking-tight text-blue-600 dark:text-blue-400">
  Aidil Pramadita Putra
</div>


      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map(({ to, icon, label }) => (
          <Link key={label} to={to} className={linkClass}>
            {icon} {label}
          </Link>
        ))}
      </div>

      {/* Desktop github + theme toggle */}
      <div className="hidden md:flex items-center gap-3">
        <a
          href="https://github.com/aidilprmdta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-blue-900 transition"
        >
          <Github size={18} /> Github
        </a>
        <ThemeToggle />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 flex flex-col gap-4 p-4 md:hidden z-20 shadow-lg"
          >
            {navLinks.map(({ to, icon, label }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {icon} {label}
              </Link>
            ))}

            {/* Github link */}
            <a
              href="https://github.com/aidilprmdta"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              <Github size={20} /> Github
            </a>

            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
