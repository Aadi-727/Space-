import logo from "../assets/shared/logo.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css";
import Tab from "./Tab";
const Navbar = () => {
	return (
		<Router>
			<nav className="navbar">
				<img src={logo} alt="Logo" />
				<ul className="navbar-links">
					<Tab route="/" title="home" num="00" />
					<Tab route="/destination" title="destination" num="01" />
					<Tab route="/crew" title="crew" num="02" />
					<Tab route="/technology" title="technology" num="03" />
				</ul>
			</nav>
		</Router>
	);
};

export default Navbar;
