import "./Navbar.css"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	const [colour, setColour] = useState(false);
	const changeColour = () => {
		if(window.scrollY >= 1){
			setColour(true);
		}	else {
			setColour(false);
		}
	}

	window.addEventListener("scroll", changeColour)

	return (
		<div className={colour ? "header header-bg" : "header"}>
			<Link to="/">
				<h1>HeatedBread</h1>
			</Link>

			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/About">About</Link></li>
				<li><Link to="/Projects">Projects</Link></li>
				<li><Link to="/Contact">Contact</Link></li>
			</ul>
			<div className="slide-drawer" onClick={handleClick}>
				{ click ? (
					<FaTimes size={20} style={{color: "#fff"} }/>
				) : (
					<FaBars size={20} style={{color: "#fff"} }/>)
				}
			</div>
		</div>
	)
	}

export default Navbar;