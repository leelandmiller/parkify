import React, { Component } from "react";
import "./FourohFour.css";
import { Button } from 'bloomer';

class FourohFour extends Component {
	
	render() {
		return (
	<div className={"fourOhFour"}>
		<p className={"error"}>404 <br/>Page Not Found.<br/><Button href="/" id="backHome">Go Back Home</Button></p>
		
	</div>
		)
	}
}

export default FourohFour;
