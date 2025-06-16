import React from 'react';
import './Intro.css';
import vincentImage from '../../assets/vincent_wong.jpeg';

function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-text">
        <p className="intro-title">Hi, I'm Vincent 👋</p>
        <p className="intro-body">
          Aspiring Full-Stack Developer.<br />
          <p className='intro-body-sub'>
          I also love the gym 💪
          </p>
        </p>
        <a
          className="intro-title-box"
          href="../../../public/Vincent_Wong_Resume.pdf"
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
          href="mailto:vincent.wong3@ontariotechu.net"
        >
          vincent.wong3@ontariotechu.net
        </a>
      </div>
      <img className="intro-image" src={vincentImage} alt="headshot" />
    </div>
  );
}

export default Intro;
