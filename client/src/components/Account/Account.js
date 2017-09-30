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
		this.getMyReservations = this.getMyReservations.bind(this);
	}

	changeActiveAccountTab(tab) {
		this.setState(
			{ activeSettingsTab:tab }
		)
	};

	getMyReservations() {
		API.getCurrentUser().then(user => {
			console.log(user.data._id)
			API.getUserReservations(user.data._id).then(results => {
				console.log(results)
			})
		});
	}

	componentDidMount() {
		this.getMyReservations()
	}

	render(){

		return (
			<div className="acct">
				<AccountTabs
				activeSettingsTab = { this.state.activeSettingsTab }
				changeActiveAccountTab = { this.changeActiveAccountTab } />
			{ this.state.activeSettingsTab === "AccountSettings" ? <AccountSettings {...this.props}/> : <Reservations /> }
			</div>
			)
		}

}

export default Account;
