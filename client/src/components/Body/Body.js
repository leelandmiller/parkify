import React, { Component } from "react";
import Account from '../Account';
import LoginForm from '../LoginForm';
import Map from '../Map';
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
			<LoginForm />
			<Map />
			</Container>
		)
    }
}

export default Body;