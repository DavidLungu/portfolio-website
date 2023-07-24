import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{
                        color: "#fff", 
                        marginRight: "2rem"
                    }}/>
                    <div>
                        <p>1234 Apple Boulevard,</p>
                        <p>Dallas, Texas.</p>
                    </div>
                </div>
                <div className="phone">
                    <FaPhone size={20} style={{
                        color: "#fff",
                        marginRight: "2rem"
                    }}/>
                    1-234-456-7890
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{
                        color: "#fff", 
                        marginRight: "2rem"
                    }}/>
                    davlungu3@gmail.com
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>I am David Lungu. I enjoy developing applications, 
                    discussing the developments of modern technology, 
                    and taking on new challenges.</p>
                    <div className="socials">
                        <FaTwitter size={30} style={{
                            color:"#fff",
                            marginRight: "1rem"
                        }}/>
                        <FaLinkedin size={30} style={{
                            color:"#fff",
                            marginRight: "1rem"
                        }}/>
                        <FaGithub size={30} style={{
                            color:"#fff",
                            marginRight: "1rem"
                        }}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer