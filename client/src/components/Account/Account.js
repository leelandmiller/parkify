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
			currentUser: {}
		};
		this.changeActiveAccountTab = this.changeActiveAccountTab.bind(this);
	}

	changeActiveAccountTab(tab) {
		this.setState(
			{ activeSettingsTab:tab }
		)
	};

	componentDidMount() {
        API.getCurrentUser().then(currentUser => {
            this.setState({ currentUser })
        })
    }


	render(){

		return (
			<div className="acct">
				<AccountTabs
				activeSettingsTab = { this.state.activeSettingsTab }
				changeActiveAccountTab = { this.changeActiveAccountTab } />
			{ this.state.activeSettingsTab === "AccountSettings" ? <AccountSettings currentUser={ this.state.currentUser }/> : <Reservations /> }
			</div>
			)
		}

}

export default Account;
