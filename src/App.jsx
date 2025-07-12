import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './pages/NavBar'
import './index.css'
import Experience from './pages/Experience'
import Project from './pages/Project'
import Sertifikasi from './pages/Sertifikasi'
import TechStack from './pages/TechStack'

function App() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sertifikasi" element={<Sertifikasi />} />
        <Route path="/techstack" element={<TechStack />} />
      </Routes>
      </main>
    </>
  )
}

export default App
