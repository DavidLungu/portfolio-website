import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingImage2 from '../components/LandingImage2'
import LandingBG from "../assets/talking-bg.jpg"

const Contact = () => {
  return (
    <>
      <Navbar />
      <LandingImage2 heading="CONTACT" text="Let's chat!" background={LandingBG}/>
      <Footer />
    </>
  )
}

export default Contact