import React, { Component } from "react";
import Account from '../Account';
import FormWrapper from '../FormWrapper';
import SimpleSearch from '../SimpleSearch';
import HomeContainer from '../HomeContainer';
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
				<HomeContainer />
				<SimpleSearch />
				<FormWrapper 
					activeTab = {this.state.activeLoginFormTab} 
					changeActiveTab = { this.changeActiveTab } />
				<Account activeSettingsTab = {this.state.activeSettingsTab} 
					changeActiveAccountTab = { this.changeActiveAccountTab } />
			</Container>d
		)
    }
}

export default Body;
