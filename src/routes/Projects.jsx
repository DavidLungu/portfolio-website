import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingImage2 from '../components/LandingImage2'
import LandingBG from "../assets/project-bg.avif"
import ProjectContainer from '../components/containers/ProjectContainer'

const Projects = () => {
  return (
    <>
      <Navbar />
      <LandingImage2 heading="PROJECTS" text="Some of my most recent works" background={LandingBG}/>
      <ProjectContainer />
      <Footer />
    </>
  )
}

export default Projects