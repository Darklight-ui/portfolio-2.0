/** @format */

import "./App.css";
import BodyComponent from "./components/BodyComponent";
import HeroComponent from "./components/HeroComponent";
import NavbarComponents from "./components/NavbarComponents";

function App() {
	return (
		<div className='app'>
			<NavbarComponents />
			<HeroComponent />
			<BodyComponent />
		</div>
	);
}

export default App;
