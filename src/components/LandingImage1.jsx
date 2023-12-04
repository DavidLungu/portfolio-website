import "./LandingImage1.css"
import React from 'react'
import IntroBG from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"
import CV from "../assets/cv.pdf"
import TypewriterComponent from "typewriter-effect"

const LandingImage1 = () => {
  return (
    <div className="landing__1">
        <div className="mask">
            <img className="intro-bg"  alt="IntroBG"/>
      </div>
        <div className="content">

            <h1 id="name"><span>&lt;David</span> <span id="surname">Lungu/&gt;</span></h1>
            <p><span>Software Developer</span> & <span>Full Stack Developer.</span></p>
            <div className="buttons">
                <Link to="/about" className="btn btn-primary">Learn More</Link>
                <Link to="/projects" className="btn btn-primary">See Projects</Link>

                {/* <a href={CV} download className="btn btn-file">Download CV</a> */}
            </div>
        </div>
    </div>
  )
}

export default LandingImage1