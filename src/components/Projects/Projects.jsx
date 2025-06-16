import React from 'react';
import './Projects.css';

import handArithmetic from '../../assets/handArithmetic.jpeg';
import github_logo from '../../assets/github.svg';
import youtube_logo from '../../assets/youtube.png';
import nexus from '../../assets/nexus.png';
import prepifi from '../../assets/prepifi.png';
import trashtech from '../../assets/trashtech.jpg';

const projectsData = [
  {
    image: nexus,
    name: 'Nexus AI',
    date: '2025',
    desc: 'We envisioned a centralized, AI-powered productivity hub to simplify note-taking, document management, and task tracking while integrating smart assistance. Inspired by tools like Microsoft Copilot, Apple Notes, and chat-based AI systems, Nexus AI combines these features into a single, easy-to-access Electron.js desktop application, streamlining workflows for users.',
    website: 'https://www.youtube.com/watch?v=CGtVsQfq9-U',
    github: 'https://devpost.com/software/nexus-ai-g2eq10',
    websitelogo: youtube_logo,
  },
  {
    image: prepifi,
    name: 'Prepify',
    date: '2025',
    desc: 'Prepifi simulates a realistic interview environment to help individuals prepare effectively. By leveraging cutting-edge AI technologies, it provides tailored interview questions, evaluates responses, and offers constructive feedback, all in real time.',
    website: 'https://www.youtube.com/watch?v=nQI_Awl1dcY',
    github: 'https://devpost.com/software/prepifi',
    websitelogo: youtube_logo,
  },
  {
    image: handArithmetic,
    name: 'Hand Arithmetic',
    date: '2024',
    desc: 'Using a live webcam feed and computer vision technology, Hand Arithmetic detects the number of fingers being held up and translates those gestures into numbers. Users can solve simple math problems by just showing their hands!',
    website: 'https://www.youtube.com/watch?v=CGtVsQfq9-U',
    github: 'https://github.com/VinceKLW/handArithmetic',
    websitelogo: youtube_logo,
  },
  {
    image: trashtech,
    name: 'Trash Tech',
    date: '2023',
    desc: 'Trash It utilizes advanced computer vision technology to identify and categorize waste through user-uploaded photos. It offers personalized recycling suggestions, educational tips, and real-time tracking, turning recycling into an effortless and rewarding experience.',
    github: 'https://devpost.com/software/hackhive-2024',
  },
];

function Project({ image, name, date, desc, website, github, websitelogo }) {
  return (
    <div className="project-box">
      <img className="project-img" src={image} alt={`${name} screenshot`} />
      <div className="project-text">
        <p className="project-name">{name}</p>
        <p className="project-date">{date}</p>
        <p className="project-desc">{desc}</p>

        <div className="project-links">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" aria-label={`${name} Website`}>
              <img className="yt-logo" src={websitelogo} alt="Website Link" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${name} GitHub`}>
              <img className="github-logo" src={github_logo} alt="GitHub Link" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-container">
      <div className="project-grouped">
        <div className="project-title-box">My Projects</div>
        <h2 className="project-title">Here are my latest projects</h2>
        <h3>
          These are some projects I've developed over the years, from
          <br />
          personal explorations to hackathon winning projects!
        </h3>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
