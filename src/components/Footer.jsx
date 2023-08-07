import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
        <Link to="/" className="footer__logo">HeatedBread</Link>

        <ul className="permalinks">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/About">About</Link></li>
				<li><Link to="/Projects">Projects</Link></li>
				<li><Link to="/Contact">Contact</Link></li>
			</ul>

        <div className="footer__socials">
            <a href="https://twitter.com/HeatedBread" target="_blank" rel="noopener noreferrer"><FaTwitter size={25}/></a>
            <a href="https://www.linkedin.com/in/david-lungu-723a85242/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
            <a href="https://github.com/HeatedBread" target="_blank" rel="noopener noreferrer"><FaGithub size={25}/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; David Lungu. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer