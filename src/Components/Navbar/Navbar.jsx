import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Chidest from '../../assets/Chidest.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'



const Navbar = () => {

const [sticky, setSticky] = useState(false);

useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 500 ? setSticky(true) : setSticky(false);
  })
},[]);

const [mobileMenu, setMobileMenu] = useState(false);
const toggleMenu = () => {
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}

  return (
    <nav  className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src= {Chidest} alt="" className='Chidest'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='profile' smooth={true} offset={-260} duration={500}>My Profile</Link></li>
        <li><Link to='Experiences' smooth={true} offset={-260} duration={500}>Experiences</Link></li>
        <li><Link to='Research' smooth={true} offset={-260} duration={500}>Research</Link></li>
        <li><Link to='Publications' smooth={true} offset={-260} duration={500}>Publication</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact me</Link></li>
      </ul>
      <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
};

export default Navbar
