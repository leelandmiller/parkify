import React, { Component } from "react";
import { Tabs, TabList, Tab, Icon, TabLink } from "bloomer";
import "./AccountTabs.css";
import AccountSettings from "../AccountSettings";
import Reservations from "../Reservations";

const AccountTabs = props => {

		return (
<Tabs className="table">
    <TabList>
        <Tab onClick =  { () => { props.changeActiveAccountTab("AccountSettings") }} className = { props.activeSettingsTab === "AccountSettings" ? "is-active" : "" }>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-sign-in' aria-hidden='true' /></Icon>
                <span>Settings</span>
            </TabLink>
        </Tab>

        <Tab onClick =  { () => { props.changeActiveAccountTab("Reservations") }} className = { props.activeSettingsTab === "Reservations" ? "is-active" : "" }>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-user-plus' aria-hidden='true' /></Icon>
                <span>Reservations</span>
            </TabLink>
        </Tab>
    </TabList>
</Tabs>

)};

export default AccountTabs;
