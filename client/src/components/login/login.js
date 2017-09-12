import React, { Component } from "react";
import { Tabs, TabList, Tab, Icon, TabLink } from "bloomer";
import "./login.css";

class Login extends Component {

    constructor() {

      super();

      this.state = {
        isActive: false
      };

    }

    render() { 

		return (
<Tabs>
    <TabList>
        <Tab>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-sign-in' aria-hidden='true' /></Icon>
                <span>Login</span>
            </TabLink>
        </Tab>
        <Tab isActive>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-user-plus' aria-hidden='true' /></Icon>
                <span>Sign Up</span>
            </TabLink>
        </Tab>

    </TabList>
</Tabs>

)}};

export default Login;