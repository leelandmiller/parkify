import React from "react";
import "./Account.css";
import AccountTabs from '../AccountTabs';
import Reservations from '../Reservations';
import AccountSettings from '../AccountSettings';

const Account = props => {

	return (
		<div>
		<AccountTabs 
		activeSettingsTab = { props.activeSettingsTab } 
		changeActiveAccountTab = { props.changeActiveAccountTab } />
		{ props.activeSettingsTab === "AccountSettings" ? <AccountSettings /> : <Reservations /> }
		</div>
	)
}

export default Account;
