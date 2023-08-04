import "./Navbar.css"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);



	return (
		<div className={"header header-bg"}>
			<Link to="/">
				<h1>HeatedBread</h1>
			</Link>

			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<a><Link to="/About">About</Link></a>
				<a><Link to="/Projects">Projects</Link></a>
				<a><Link to="/Contact">Contact</Link></a>
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