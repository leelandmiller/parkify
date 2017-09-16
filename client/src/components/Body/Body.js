import React, { Component } from "react";
import Account from '../Account';
import FormWrapper from '../FormWrapper';
import Map from '../Map';
import MapContainer from '../MapContainer';
import LoginForm from '../LoginForm';
import "./Body.css";
import { Container} from "bloomer";
import VehicleDetails from '../VehicleDetails';

class Body extends Component {
    constructor() {

      super();

      this.state = {
        activeLoginFormTab:"login",
        activeSettingsTab: "AccountSettings",
      };
	this.changeActiveTab = this.changeActiveTab.bind(this);
	this.changeActiveAccountTab = this.changeActiveAccountTab.bind(this);
    }
	changeActiveTab(tab) { 
		this.setState(
			{ activeLoginFormTab:tab }
		)
	};
		changeActiveAccountTab(tab) { 
		this.setState(
			{ activeSettingsTab:tab }
		)
	};

    render() { 
    	let style = {
	      height: "100%"
    	}
	return (
		<Container 
		 	style={style}
		>
		<FormWrapper 
			activeTab = {this.state.activeLoginFormTab} 
			changeActiveTab = { this.changeActiveTab } />
		<Account activeSettingsTab = {this.state.activeSettingsTab} 
			changeActiveAccountTab = { this.changeActiveAccountTab } />
		<MapContainer />
		<Map />
		</Container>
		)
    }
}

export default Body;
