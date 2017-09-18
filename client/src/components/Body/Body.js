import React, { Component } from "react";
import Account from '../Account';
import FormWrapper from '../FormWrapper';
import MapContainer from '../MapContainer';
import SimpleSearch from '../SimpleSearch';
import LoginForm from '../LoginForm';
import "./Body.css";
import { Container} from "bloomer";

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
		return (
			<Container>
				<SimpleSearch />
				<MapContainer />
				<FormWrapper 
					activeTab = {this.state.activeLoginFormTab} 
					changeActiveTab = { this.changeActiveTab } />
				<Account activeSettingsTab = {this.state.activeSettingsTab} 
					changeActiveAccountTab = { this.changeActiveAccountTab } />
			</Container>
		)
    }
}

export default Body;
