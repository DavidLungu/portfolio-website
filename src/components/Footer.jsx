import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <Link to="/" className="home">
                    <FaHome size={60} style={{
                                color: "#fff",
                    }}/>
                </Link>
                <div className="email">
                    {/* <FaMailBulk size={20} style={{
                        color: "#fff", 
                        marginRight: "2rem"
                    }}/> */}
                    davlungu3@gmail.com
                </div>
                <div className="phone">
                    {/* <FaPhone size={20} style={{
                        color: "#fff",
                        marginRight: "2rem"
                    }}/> */}
                    1-234-456-7890
                </div>
            </div>
            <div className="right">
                    <div className="socials">
                        <a href="https://twitter.com/HeatedBread" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} style={{
                                color:"#fff"
                            }}/>
                        </a>
                        <a href="https://www.linkedin.com/in/david-lungu-723a85242/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{
                                color:"#fff"
                            }}/>
                        </a>
                        <a href="https://github.com/HeatedBread" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{
                                color:"#fff"
                            }}/>
                        </a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer