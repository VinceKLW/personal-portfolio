import React from 'react'
import './Skills.css'

function Skill(props) {
    return (
        <>
        <div className='skill-box'>
            {props.skill}
        </div>
        </>
    )
}

function Skills() {
    const skillsData = [
        {skill: "Python"},
        {skill: "Java"},
        {skill: "C++"},
        {skill: "React"},
        {skill: "FastAPI"},
        {skill: "Electron JS"},
        {skill: "MySQL"},
        {skill: "HTML"},
        {skill: "CSS"},
        {skill: "Tailwind"},
        {skill: "Github"},
        {skill: "Photoshop"},
        {skill: "Illustrator"},
        {skill: "Azure"},
        {skill: "Figma"},
        {skill: "VSCode"},
        {skill: "Vite"},
        {skill: "Snowflake"},
        {skill: "Tableau Server Client"},
        {skill: "Informatica Cloud"},
        {skill: "Pinecone DB"},
        {skill: "Chroma DB"},
    ]

  return (
    <div className='skills-grouped'>
        <h3 className='skills-title'>Skills</h3>
        {skillsData.map((exp,ind) => (
            <Skill key={ind} {...exp}/>
        ))}
    </div>
  )
}

export default Skills