
import { useState } from 'react'
import './index.css'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <div className='portfolio'>
        <Intro/>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
