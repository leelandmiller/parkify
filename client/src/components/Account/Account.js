import React, { Component } from 'react';
import "./Account.css";
import AccountTabs from '../AccountTabs';
import Reservations from '../Reservations';
import AccountSettings from '../AccountSettings';
import API from '../../utils/API';

class Account extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSettingsTab: "AccountSettings",
		};

		this.changeActiveAccountTab = this.changeActiveAccountTab.bind(this);
	}

	changeActiveAccountTab(tab) {
		this.setState(
			{ activeSettingsTab:tab }
		)
	}

	render(){

		return (
			<div className="acct">
				<AccountTabs
				activeSettingsTab = { this.state.activeSettingsTab }
				changeActiveAccountTab = { this.changeActiveAccountTab } />
			{ this.state.activeSettingsTab === "AccountSettings" ? <AccountSettings isLoggedIn={this.props.isLoggedIn} currentUser={ this.props.currentUser }/> : <Reservations reservations={this.props.reservations} /> }
			</div>
			)
		}

}

export default Account;
