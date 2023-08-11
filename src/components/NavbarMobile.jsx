import React from "react"
import "./NavbarMobile.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { MdWork } from "react-icons/md"
import { BsFillChatLeftDotsFill } from "react-icons/bs"
import { useState } from "react"
import { Link } from 'react-router-dom'

const NavbarMobile = () => {
    const [activeNav, setActiveNav] = useState(window.location.pathname);

    return (
        <nav>
            <Link to="/" onClick={() => setActiveNav('/')} className={activeNav === "/" ? 'active' : ''}><AiOutlineHome/></Link>
            <Link to="/about" onClick={() => setActiveNav('/about')} className={activeNav === "/about" ? 'active' : ''}><AiOutlineUser/></Link>
            <Link to="/projects" onClick={() => setActiveNav('/projects')} className={activeNav === "/projects" ? 'active' : ''}><MdWork/></Link>
            <Link to="/contact" onClick={() => setActiveNav('/contact')} className={activeNav === "/contact" ? 'active' : ''}><BsFillChatLeftDotsFill/></Link>
        </nav>
    )
}

export default NavbarMobile;