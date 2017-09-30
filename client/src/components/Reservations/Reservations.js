import React, { Component } from "react";
import { Table, thead, tr, th, tbody, td, Button } from "bloomer";

import "./Reservations.css";

	class Reservations extends Component {
		constructor(props) {
			super(props);
			this.state = {
				isActive: false
			};
		}

		render() {
		    return (
		        <div className="reservations">
				<Table isBordered isStriped isNarrow className="reservations">
				    <thead>
				        <tr>
				            <th className={"resHeader"}>Reservations</th>
				        </tr>
				    </thead>
				    <tbody>
				        <tr className='is-selected'>
				            <td style={{ height: '150px' }}><Button href="/search" className="reservationButton btn btn-3" style={{ top: '60px' }}>Reserve A Spot</Button></td>
				        </tr>
				        <tr>
							<td className={"resHistoryHeader"}><b>Reservation History</b></td>
				        </tr>
						<tr className={"ReservationAddress"}>
							<th>Address:</th>
						</tr>
						<tr className={"ReservationDate"}>
							<th>Date: </th>
						</tr>
						<tr className={"ReservationTime"}>
							<th>Time: </th>
						</tr>
						<tr className={"ReservationPrice"}>
							<th>Price:</th>
						</tr>
				    </tbody>
				</Table>
			</div>
		)
	}
}

export default Reservations;
