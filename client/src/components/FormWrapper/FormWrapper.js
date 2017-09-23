import React, { Component } from "react";
import LoginTabs from '../LoginTabs';
import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';
import "./FormWrapper.css";



class FormWrapper extends Component {
	constructor(){
		super();
		
		this.state = {
			activeLoginFormTab:"login",

		};
		
		this.changeActiveTab = this.changeActiveTab.bind(this);
	}
	
	changeActiveTab(tab) {
		this.setState(
			{ activeLoginFormTab:tab }
		)
	};
	
	
	
	render(){
		return(
			<div className="formwrapper">
				<LoginTabs
					activeTab = { this.state.activeLoginFormTab }
					changeActiveTab = { this.changeActiveTab } />
				{ this.state.activeLoginFormTab === "login" ? <LoginForm /> : <SignUpForm /> }
			</div>
		)
	}
	
}

export default FormWrapper;
