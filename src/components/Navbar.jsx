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
				<h1>David Lungu</h1>
			</Link>

			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<Link to="/about">&lt;About/&gt;</Link>
				<Link to="/projects">&lt;Projects/&gt;</Link>
				<Link to="/contact">&lt;Contact/&gt;</Link>
			</ul>
		</div>
	)
}

export default Navbar;