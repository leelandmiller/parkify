import React, { Component } from "react";
import Account from '../Account';
import Login from '../Login';
import MapContainer from '../MapContainer';
import "./Body.css";
import { Container} from "bloomer";

class Body extends Component {

    render() { 
    	let style = {
	      height: "100%"
    	}
		return (
			<Container 
			 style={style}
			>
			<Account />
			<Login />
			<MapContainer />
			</Container>
		)
    }

}

export default Body;