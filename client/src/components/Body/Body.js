import React, { Component } from "react";
import Account from '../Account';
import MapContainer from '../MapContainer';
import LoginForm from '../LoginForm';
import "./Body.css";
import { Container} from "bloomer";

class Body extends Component {

    render() { 
    	// let style = {
	    //   "min-height": "100%"
    	// }
		return (
			<Container 
				// style={style}
			>
				<Account />
				<MapContainer />
				<LoginForm />
			</Container>
		)
    }
}

export default Body;