import React from 'react';
import './Intro.css';
import vincentImage from '../../assets/vincent_wong.jpeg';
import Typed from 'typed.js';
import { useState } from 'react';


function Intro() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Aspiring Full-Stack Developer...', 'Aspiring Tech Leader...', 'Aspiring Software Developer...'],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
      backDelay: 3000
    });

    return () => {
      typed.destroy();
    };
  }, []); 

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      const audio = new Audio('/high5.mov');
      audio.volume = 0.3;
      audio.play();

      setClicked(true)
      setTimeout(() => {
        setClicked(false);
      }, 500); 
    }


  return (
    <div className="intro-container">
      <img className="intro-image" src={vincentImage} alt="headshot" />
      <div className="intro-text">
        <p className="intro-title">Hi, I'm Vincent <button onClick={handleClick} className={clicked ? 'emoji-button grow' : 'emoji-button'}>👋</button></p>
        <p className="intro-body">
          <span ref={el}></span><br />
          <span className="intro-body-sub">I also love the gym 💪</span>
        </p>
        <div className="intro-links">
          <a
            className="intro-title-box"
            href="/Vincent_Wong_Resume.pdf"
            download
          >
            Resume
          </a>
          <a
            className="intro-title-box"
            href="https://github.com/VinceKLW"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="intro-title-box"
            href="https://www.linkedin.com/in/vincentklw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="intro-title-box"
            href="mailto:vinceklwong@gmail.com"
          >
            vinceklwong@gmail.com  
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
