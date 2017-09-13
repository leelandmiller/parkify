import React, { Component } from "react";
import { Tabs, TabList, Tab, Icon, TabLink } from "bloomer";
import "./LoginTabs.css";

class LoginTabs extends Component {

    constructor() {

      super();

      this.state = {
        isActive: false
      };

    }


  handleClick = () => {
    console.log('this is:', this);
  }
  
    render() { 

		return (
<Tabs>
    <TabList>
        <Tab onClick={this.handleClick}>
            <TabLink id="login">
                <Icon isSize='small'><span className='fa fa-sign-in' aria-hidden='true' /></Icon>
                <span>Login</span>
            </TabLink>
        </Tab>

        <Tab isActive>
            <TabLink id="signUp">
                <Icon isSize='small'><span className='fa fa-user-plus' aria-hidden='true' /></Icon>
                <span>Sign Up</span>
            </TabLink>
        </Tab>
    </TabList>
</Tabs>

)}};

export default LoginTabs;