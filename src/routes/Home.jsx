import React from 'react'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import LandingImage1 from '../components/LandingImage1'
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <LandingImage1 />
    </>
  )
}

export default Home