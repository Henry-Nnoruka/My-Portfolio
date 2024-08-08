import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h2>NNORUKA HENRY CHUKWUDI</h2>
        <p>Electrical/Electronic Engineering </p>
        <p>Enthusiastic Electrical/Electronic Engineering Student with years of experience.
           Secures team success through hard work, attention to detail and excellent organisation.
            Driven student with passion for academics. Excels in discussion-driven environments with 
            strong skills in research, communication and instruction. Works collaboratively to
             gather and disseminate data for diverse projects.</p>
             <p>Explore my work and learn more about my journey in Electrical and Electronic Engineering.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
