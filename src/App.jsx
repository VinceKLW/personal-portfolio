import './index.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import { Analytics } from "@vercel/analytics/react"
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <motion.div
        className="portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Header />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </motion.div>
      <Analytics />
    </>
  )
}

export default App
