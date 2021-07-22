import React from "react"
import { Switch, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Band from "./components/pages/Band";
import Booking from "./components/pages/Booking";
import Multimedia from "./components/pages/Multimedia"
import Layout from './components/pages/Layout.css'
export default function App() {

	return <div id="main">

		<Navigation />
		{/* navigation components with Switch and Route */}

		<Switch>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/band">
			<Band/>
			</Route>
			<Route path="/media">
				<Multimedia/>
			</Route>
			<Route path="/book">
				<Booking/>
			</Route>
		</Switch>
		<Route exact path="/">
			<Welcome />
		</Route>
	</div>


}





