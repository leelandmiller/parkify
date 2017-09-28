import React, {Component} from "react";
import { Table, thead, tr, th, tbody, td } from "bloomer";
import VehicleDetails from "../VehicleDetails";
import "./AccountSettings.css";

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    render() {
        return (
            <div className="accountDetails">
                <Table isBordered isStriped isNarrow className="table">
                    <thead>
                        <tr>
                            <th>Account Settings</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='is-selected'>
                            <td>Userame/Email</td>
                            <td id="email-td">{this.props.currentUser.email}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td id="name-td">{this.props.currentUser.name}</td>
                        </tr>
                    </tbody>
                </Table>
                <VehicleDetails/>
            </div>
        )
    }
}

export default AccountSettings;
