import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingImage2 from '../components/LandingImage2'
import LandingBG from '../assets/coding-bg.jpg'

const About = () => {
  return (
    <>
      <Navbar />
      <LandingImage2 heading="ABOUT" text="I am a highly proficient Software Developer" background={LandingBG}/>
      <Footer />
    </>
  )
}

export default About