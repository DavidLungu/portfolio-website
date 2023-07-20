import "./HeroImage.css"
import React from 'react'
import IntroBG from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-bg" src={IntroBG} alt="IntroBG"/>
      </div>
      <div className="content">
        <p>Hello, I'm</p>
        <h1>David Lungu</h1>
        <p>Software Developer</p> 
        <div className="buttons">
            <Link to="/projects" className="btn btn-primary">Projects</Link>
            <Link to="/contact" className="btn btn-lt">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage