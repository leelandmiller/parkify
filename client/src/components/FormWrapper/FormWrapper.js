import React, { Component } from "react";
import LoginTabs from '../LoginTabs';
import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';
import "./FormWrapper.css";

class FormWrapper extends Component {
	constructor(props){
		super(props);

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
			<div className="pageWrapper" >
			<div className="formwrapper">
				<LoginTabs
					activeTab = { this.state.activeLoginFormTab }
					changeActiveTab = { this.changeActiveTab } />
				{ this.state.activeLoginFormTab === "login" ? <LoginForm setCurrentUser={this.props.setCurrentUser} /> : <SignUpForm /> }
			</div>
			</div>
		)
	}
}

export default FormWrapper;
