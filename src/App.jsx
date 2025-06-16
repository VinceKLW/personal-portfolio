
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

function App() {

  return (
    <>
      <div className='portfolio'>
        <SideBar/>
        <section id='intro'>
          <Intro/>
        </section>
        <About/>
        <section id='experiences'>
        <Experience/>
        </section>
        <Education/>
        <Skills/>
        <section id="projects">
        <Projects/>
        </section>
        <section id="contact">
        <Contact/>
        </section>
      </div>
    </>
  )
}

export default App
