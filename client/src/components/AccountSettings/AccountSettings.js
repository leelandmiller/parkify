import React, { Component } from "react";
import { Table, thead, tr, th, tbody, td } from "bloomer";
import VehicleDetails from "../VehicleDetails";
import "./AccountSettings.css";

class AccountSettings extends Component {
    constructor() {
      super();
      this.state = {
        isActive: false
      };

    }

render() {
    return (
        <div>
<Table isBordered isStriped isNarrow isSize={1} className="table">
    <thead>
        <tr>
            <th>Account Settings</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr className='is-selected'>
            <td>Userame/Email</td>
            <td>someone@somewhere.com</td>
        </tr>
        <tr>
            <td>Password</td>
            <td>************</td>
        </tr>
    </tbody>
</Table>
<VehicleDetails />
</div>
)
}
}

export default AccountSettings;
