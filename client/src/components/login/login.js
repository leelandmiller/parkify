import React, { Component } from "react";
import { Tabs, TabList, Tab, Icon, TabLink } from "bloomer";
import Form from "./loginForm.js"
import "./login.css";

const activeTab = [ 'login', 'signUp' ];

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
                <Icon id="login" isSize='small'><span className='fa fa-sign-in' aria-hidden='true' /></Icon>
                <span>Login</span>
            </TabLink>
        </Tab>

        <Tab isActive>
            <TabLink>
                <Icon id="signUp" isSize='small'><span className='fa fa-user-plus' aria-hidden='true' /></Icon>
                <span>Sign Up</span>
            </TabLink>
        </Tab>
    </TabList>
</Tabs>

)}};

export default Login;