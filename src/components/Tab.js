import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Tab = ({ route, title, num }) => {
	return (
		<>
			<li>
				<span>{num}</span>
				<Link to={route}>{title}</Link>
			</li>
		</>
	);
};
Tab.propTypes = {
	route: PropTypes.string,
	text: PropTypes.string,
	num: PropTypes.string,
};
Tab.defaultProps = {
	route: "/",
	text: "route",
	num: "00",
};
export default Tab;
