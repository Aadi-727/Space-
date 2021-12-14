// Image imports
import { logo, ham, close } from "./imports.js";
import { useState } from "react";
import "./Navbar.css";

// import "../../App.css";
import Tab from "../Tab";
const Navbar = () => {
	const [openNavbar, setOpenNavbar] = useState(false);

	return (
		<nav className="navbar">
			<img className="logo" src={logo} alt="Logo" />
			<img
				className="ham"
				style={{ display: openNavbar ? "none" : "inline-block" }}
				onClick={() => setOpenNavbar(!openNavbar)}
				src={ham}
				alt="Hamburger menu"
			/>

			<ul
				className="navbar-links"
				style={{ display: openNavbar ? "flex" : "none" }}
			>
				<img
					onClick={() => setOpenNavbar(!openNavbar)}
					className="close-button"
					src={close}
					alt="Close Button"
				/>
				<Tab route="/" title="home" num="00" />
				<Tab route="/destination" title="destination" num="01" />
				<Tab route="/crew" title="crew" num="02" />
				<Tab route="/technology" title="technology" num="03" />
			</ul>
		</nav>
	);
};

export default Navbar;
