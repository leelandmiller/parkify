import React, { Component } from "react";
import { Tabs, TabList, Tab, Icon, TabLink } from "bloomer";
import "./LoginTabs.css";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

const LoginTabs = props => {

		return (
<Tabs className="form">
    <TabList>
        <Tab onClick =  { () => { props.changeActiveTab("login") }} className = { props.activeTab === "login" ? "is-active" : "" }>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-sign-in' aria-hidden='true' /></Icon>
                <span>Login</span>
            </TabLink>
        </Tab>

        <Tab onClick =  { () => { props.changeActiveTab("signUp") }} className = { props.activeTab === "signUp" ? "is-active" : "" }>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-user-plus' aria-hidden='true' /></Icon>
                <span>Sign Up</span>
            </TabLink>
        </Tab>
    </TabList>
</Tabs>

)};

export default LoginTabs;
