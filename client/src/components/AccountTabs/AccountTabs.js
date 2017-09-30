import React from "react";
import { Tabs, TabList, Tab, Icon, TabLink } from "bloomer";
import "./AccountTabs.css";

const AccountTabs = props => {

		return (
<Tabs className="AcctTabs">
    <TabList>
        <Tab onClick =  { () => { props.changeActiveAccountTab("AccountSettings") }} className = { props.activeSettingsTab === "AccountSettings" ? "is-active" : "" }>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-cog' aria-hidden='true' /></Icon>
                <span>Settings</span>
            </TabLink>
        </Tab>

        <Tab onClick =  { () => { props.changeActiveAccountTab("Reservations") }} className = { props.activeSettingsTab === "Reservations" ? "is-active" : "" }>
            <TabLink>
                <Icon isSize='small'><span className='fa fa-calendar-plus-o' aria-hidden='true' /></Icon>
                <span>Reservations</span>
            </TabLink>
        </Tab>
    </TabList>
</Tabs>

)};

export default AccountTabs;
