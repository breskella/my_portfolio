import { useEffect, useState } from 'react'
import Header from './components/1-header/Header'
import Hero from './components/2-hero/hero'
import About from './components/3-about/About'
import Skills from './components/4-skills/skills'
import Experience from './components/5-experience/Experience'
import Certifications from './components/6-certificates/Certifications'
import Projects from './components/7-projects/Projects'
import Contact from './components/8-contact/Contact'
import Footer from './components/9-footer/Footer'

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBIN(true);
      } else {
        setshowScrollBIN(false);
      }
    });
  }, []);

  const [showScrollBIN, setshowScrollBIN] = useState(false);
  return (
    <div id="up" className='container'>
      <Header />
      <Hero />
      <div className='divider' />
      <About />
      <div className='divider' />
      <Skills />
      <div className='divider' />
      <Experience />
      <div className='divider' />
      <Certifications />
      <div className='divider' />
      <Projects />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />

        <a style={{opacity: showScrollBIN? 1 : 0, transition: "1s"}} href="#up" className="scroll2Top">
          <i className="fa-solid fa-arrow-up"></i>
        </a>

    </div>

  )
}

export default App;
