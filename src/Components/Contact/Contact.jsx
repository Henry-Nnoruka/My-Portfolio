import React, { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import linkedin_icon from '../../assets/linkedin_icon.png';
import researchgate_icon from '../../assets/researchgate_icon.png';
import scholar_icon from '../../assets/scholar_icon.png';
import orcid_icon from '../../assets/orcid_icon.png';
import white_arrow from '../../assets/white-arrow.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJs service ID, template ID, and Public key
    const serviceId = 'service_1fgzcqe';
    const templateId = 'template_7kz0g7x';
    const publicKey = 'YEvXTClOqpmwIM2O1';

    // Create a new object that contains dynamic template paras
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web Chidest',
      message: message,
    };

    // Send the email using Emailjs
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  }

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send me a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find my contact
          information below. Your feedback, questions, and suggestions are 
          important to us as we strive to provide exceptional service to our
          community.</p>
        <ul>
          <li><img src={mail_icon} alt="" />henrychukwudi781@gmail.com</li>
          <li><img src={phone_icon} alt='' />+234-706-446-0768</li>
          <li><img src={location_icon} alt=''/> Lagos state, Nigeria</li>
        </ul>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/henry-nnoruka-gmnse-7168381a6/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>
          <a href="https://www.researchgate.net/profile/Nnoruka-Henry" target="_blank" rel="noopener noreferrer">
            <img src={researchgate_icon} alt="ResearchGate" />
          </a>
          <a href="https://scholar.google.com/citations?user=-nZxEGkAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer">
            <img src={scholar_icon} alt="Google Scholar" />
          </a>
          <a href="https://orcid.org/my-orcid?orcid=0009-0005-0913-2039" target="_blank" rel="noopener noreferrer">
            <img src={orcid_icon} alt="Orcid" />
          </a>
        </div>
      </div>
      <div className="contact-col">
        <form onSubmit={handleSubmit} className='emailform'>
          <label>Your name</label>
          <input type="text" name='name' value={name} 
            placeholder='Enter your name' onChange={(e) => setName(e.target.value)} required />
          <label>Email</label>
          <input type="email" name='email' value={email} 
            placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required />
          <label>Write your messages here</label>
          <textarea name="message" rows="6" value={message} 
            placeholder='Enter your message' onChange={(e) => setMessage(e.target.value)} required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
      </div>
    </div>
  )
};

export default Contact;
