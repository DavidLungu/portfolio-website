import React from 'react'
import Navbar from '../components/Navbar'
import NavbarMobile from '../components/NavbarMobile'
import Footer from '../components/Footer'
import LandingImage2 from '../components/LandingImage2'
import LandingBG from "../assets/project-bg.avif"
import ProjectContainer from '../components/containers/ProjectContainer'

const Projects = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <LandingImage2 heading="PROJECTS" text="" background={LandingBG}/>
      <ProjectContainer />
      <Footer />
    </>
  )
}

export default Projects