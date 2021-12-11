// 🕉️🕉️🕉️🕉️🕉️🕉️🕉️
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
	// Setup router with homepage
	return (
		<div className="App">
			<Navbar />
			<h1>Zoyo</h1>
		</div>
	);
};

export default App;
