import React from 'react'
import './Experience.css'
import fidelitylogo from '../../assets/fidelity_logo.jpeg'

function ExperienceBox({ company, role, date, logo }) {
    return (
        <div className='experience-box'>
            <img src={logo} className='experience-logo' alt={`${company} logo`} />
            <div className='experience-container'>
                <div className='experience-left'>
                    <p className='experience-company'>{company}</p>
                    <p className='experience-role'>{role}</p>
                </div>
                <p className='experience-date'>{date}</p>
            </div>
        </div>
    )
}

function Experience() {
    const experienceData = [
        { company: 'Fidelity Investments', role: 'IT Architect - FCC IT Architecture', date: 'July 2025 - Present', logo: fidelitylogo },
        { company: 'Fidelity Investments', role: 'Data Engineer - FIC ML DevOps', date: 'January 2025 - July 2025', logo: fidelitylogo },
    ]

    return (
        <div className='experience-grouped'>
            <h3 className='experience-title'>Work Experience</h3>
            {experienceData.map((exp, index) => (
                <ExperienceBox key={index} {...exp} />
            ))}
        </div>
    )
}

export default Experience
