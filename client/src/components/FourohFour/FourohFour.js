import React, { Component } from "react";
import "./FourohFour.css";

class FourohFour extends Component {
	
	render() {
		return (
	<div className={"fourOhFour"}>
		<ul>
			<li><code className={"codes"}>{"> 404. The page you requested can not be found."}</code></li>
			<li><code className={"codesOne"}>{">"}</code><code className={"codesTwo"}>{"|"}</code></li>

		</ul>
	
	</div>
		)
	}
}

export default FourohFour;
