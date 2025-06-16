import React from 'react';
import './Education.css';
import ontariotech from '../../assets/ontariotech.png'; // Replace with your actual logo file

function EducationItem({ school, degree, date, logo }) {
    return (
        <div className="education-item">
            <img src={logo} className="education-logo" alt={`${school} logo`} />
            <div className="education-content">
                <div className="education-left">
                    <p className="education-school">{school}</p>
                    <p className="education-degree">{degree}</p>
                </div>
                <p className="education-date">{date}</p>
            </div>
        </div>
    );
}

function Education() {
    const educationData = [
        {
            school: 'Ontario Tech University',
            degree: 'BSc. Computer Science, Data Science Specialization',
            date: '2023 - 2028 (Expected)',
            logo: ontariotech,
        },
    ];

    return (
        <div className='education-grouped'>
            <h3 className="education-title">Education</h3>
            {educationData.map((edu, index) => (
                <EducationItem key={index} {...edu} />
            ))}
        </div>
    );
}

export default Education;
