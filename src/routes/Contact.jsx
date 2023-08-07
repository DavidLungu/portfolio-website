import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingImage2 from '../components/LandingImage2'
import LandingBG from "../assets/talking-bg.jpg"
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <Navbar />
      <LandingImage2 heading="Contact" text="Let's chat!" background={LandingBG}/>
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact