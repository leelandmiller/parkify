import React, { Component } from "react";
import { Table, thead, tr, th, tbody, td } from "bloomer";
import AccountTabs from "../AccountTabs";
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
        <div className="Table">
<Table isBordered isStriped isNarrow>
    <thead>
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ryu</td>
            <td>10000</td>
        </tr>
        <tr className='is-selected'>
            <td>Ken</td>
            <td>5000</td>
        </tr>
        <tr>
            <td>Akuma</td>
            <td>1200</td>
        </tr>
    </tbody>
</Table>
</div>
)
}
}

export default AccountSettings;
