
import { useState } from 'react'
import './index.css'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import SideBar from './components/SideBar/SideBar'

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: -30 },  // start slightly above
  visible: {
    opacity: 1,
    y: 0,                         // move to natural position
    transition: { duration: 1, ease: 'easeOut' }
  }
};

function App() {

  return (
    <motion.div
      className="portfolio"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <Intro/>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
    </motion.div>
  )
}

export default App
