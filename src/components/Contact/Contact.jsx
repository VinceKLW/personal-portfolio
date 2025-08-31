import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-grouped'>
        <div className="contact-title-box">Contact</div>

        <h2 className='contact-title'>
            Get in Touch
        </h2>
        <h3>
            Would you like to get in contact? <a className="link" href='https://www.linkedin.com/in/vincentklw/'>Connect with me on LinkedIn</a> or <a className="link" href='mailto:vinceklwong@gmail.com'>drop me an email</a>! I'll keep an eye out for you 😼
        </h3>
    </div>
  )
}

export default Contact