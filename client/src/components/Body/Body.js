import React, { Component } from "react";
import Account from '../Account';
import FormWrapper from '../FormWrapper';
import Map from '../Map';
import "./Body.css";
import { Container} from "bloomer";

class Body extends Component {
    constructor() {

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

    render() { 
    	let style = {
	      height: "100%"
    	}
		return (
			<Container 
			 style={style}
			>
			<FormWrapper activeTab={this.state.activeLoginFormTab} changeActiveTab={ this.changeActiveTab }/>
			<Map />
			</Container>
		)
    }
}

export default Body;