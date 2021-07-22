import React from "react"
import { NavLink, Switch, Route } from "react-router-dom"
import Button from "react-bootstrap/Button"
import ButtonGroup  from "react-bootstrap/ButtonGroup"
import '../components/Navigation.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation() {

	return <ul className="navigation">
	
			<li>
<NavLink to="/"><Button className="custom-btn"  >Welcome</Button></NavLink>
		</li>
		<li>
<NavLink to="/about"><Button className="custom-btn"   >Band Info</Button></NavLink>
		</li>
		<li>
<NavLink to="/band"><Button className="custom-btn"  >Who is who?</Button></NavLink>
		</li>
		<li>
<NavLink to="/media"><Button className="custom-btn"  >Multimedia</Button></NavLink>
		</li>
		<li>
<NavLink to="/book"><Button className="custom-btn" >Book Us</Button></NavLink>
		</li>	
	</ul>
	
}