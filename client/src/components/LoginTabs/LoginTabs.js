import React, { Component } from "react";
import { Tabs, TabList, Tab, Icon, TabLink } from "bloomer";
import "./LoginTabs.css";

class LoginTabs extends Component {

    constructor() {

      super();

      this.state = {
        activeTab:"login",
      };

    }

  
    render() { 

		return (
<Tabs>
    <TabList>
        <Tab onClick =  { () => { this.setState({ activeTab:"login" }) }} className = { this.state.activeTab === "login" ? "is-active" : "" }>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-sign-in' aria-hidden='true' /></Icon>
                <span>Login</span>
            </TabLink>
        </Tab>

        <Tab onClick =  { () => { this.setState({ activeTab:"signUp" }) }} className = { this.state.activeTab === "signUp" ? "is-active" : "" }>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-user-plus' aria-hidden='true' /></Icon>
                <span>Sign Up</span>
            </TabLink>
        </Tab>
    </TabList>
</Tabs>
        

)}};

export default LoginTabs;