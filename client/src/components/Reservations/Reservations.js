import React, { Component } from "react";
import { Table, thead, tr, th, tbody, td, Button } from "bloomer";

import "./Reservations.css";

class Reservations extends Component {
    constructor() {
      super();
      this.state = {
        isActive: false
      };

    }

render() {
    return (
        <div>
<Table isBordered isStriped isNarrow isSize={1} className="reservations">
    <thead>
        <tr>
            <th>Reservations</th>
        </tr>
    </thead>
    <tbody>
        <tr className='is-selected'>
            <td style={{ height: '150px' }}><Button className="reservationButton" style={{ top: '60px' }}>Reserve A Spot</Button></td>
        </tr>
        <tr>
            <td>Reservation History</td>
        </tr>
        <tr>
            <td>---</td>
        </tr>
            <tr>
            <td>---</td>
        </tr>
    </tbody>
</Table>
</div>
)
}
}

export default Reservations;