import React from "react";
import LoginTabs from '../LoginTabs';
import SignUpForm from '../SignUpForm';
import LoginForm from '../LoginForm';
import "./FormWrapper.css";

const FormWrapper = props => {
 
		return (
			<div>
			<LoginTabs 
			activeTab = { props.activeTab } 
			changeActiveTab = { props.changeActiveTab } />
			{ props.activeTab === "login" ? <LoginForm /> : <SignUpForm /> }
			</div>
		)
}

export default FormWrapper;
