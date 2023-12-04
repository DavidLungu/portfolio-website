import React from 'react'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Footer from '../components/Footer'
import LandingImage2 from '../components/LandingImage2'
import LandingBG from '../assets/coding-bg.jpg'
import AboutForm from '../components/AboutForm'

const About = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <LandingImage2 heading="ABOUT" text="" background={LandingBG}/>
      <AboutForm />
      <Footer />
    </>
  )
}

export default About