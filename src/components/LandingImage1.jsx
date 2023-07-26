import "./LandingImage1.css"
import React from 'react'
import IntroBG from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"
import CV from "../assets/cv.pdf"

const LandingImage1 = () => {
  return (
    <div className="landing__1">
      <div className="mask">
        <img className="intro-bg" src={IntroBG} alt="IntroBG"/>
      </div>
      <div className="content">
        <p>Hello, I'm</p>
        <h1>David Lungu</h1>
        <p>Software Developer</p> 
        <div className="buttons">
            <Link to="/about" className="btn btn-primary">About</Link>
            <Link to="/projects" className="btn btn-primary">Projects</Link>
            {/* <a href={CV} download className="btn btn-file">Download CV</a> */}
            <Link to="/contact" className="btn btn-primary">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default LandingImage1