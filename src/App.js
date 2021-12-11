// 🕉️🕉️🕉️🕉️🕉️🕉️🕉️
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
	// Setup router with homepage
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
		</Router>
	);
};

export default App;
