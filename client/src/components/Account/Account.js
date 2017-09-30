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
<<<<<<< HEAD
			{ this.state.activeSettingsTab === "AccountSettings" ? <AccountSettings {...this.props}/> : <Reservations {...this.props}/> }

=======
			{ this.state.activeSettingsTab === "AccountSettings" ? <AccountSettings {...this.props}/> : <Reservations {...this.props} /> }
>>>>>>> 3f38222bcdcf049321818ef14072ba0d0257a8b4
			</div>
			)
		}

}

export default Account;
