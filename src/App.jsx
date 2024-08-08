import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Title from './Components/Title/Title';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Profiles from './Components/Profiles/Profiles';
import Publications from './Components/Publications/Publications';
import Experiences from './Components/Experiences/Experiences';
import Research from './Components/Research/Research';

const App = () => {
  
  //const [playState, setPlayState] = useState(false);


  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle='My Profile' title='Qualification and Research Interest'/>
    <Profiles/>
    <Title subTitle='Experiences' title='Lab Photos'/>
    <Experiences/>
    <Title subTitle='My Research' title='Research Carried out'/>
    <Research/>
    <Title subTitle='MY PUBLICATION' title='Still in View'/>
    <Publications/>
    <Title subTitle='Contact ME' title='Get in Touch'/>
     <Contact/>
    <Footer/>
    </div>
        </div>
  )
}

export default App


