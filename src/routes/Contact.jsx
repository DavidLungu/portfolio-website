import React from 'react'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Footer from '../components/Footer'
import LandingImage2 from '../components/LandingImage2'
import LandingBG from "../assets/talking-bg.jpg"
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <LandingImage2 heading="CONTACT" text="" background={LandingBG}/>
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact