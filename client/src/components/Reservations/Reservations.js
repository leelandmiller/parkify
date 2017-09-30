import React, { Component } from "react";
import { Table, thead, tr, th, tbody, td, Button } from "bloomer";
import moment from 'moment';

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
				    </tbody>
				</Table>
				<Table isBordered isStriped isNarrow className='res-table'>
					<tbody>
						<tr>
							<th>Address:</th>
							<th>Start Date: </th>
							<th>End Date: </th>
							<th>Price:</th>
						</tr>
						{
							this.props.reservations.reservations.map(reservation => (
								<tr>
									<td>{reservation.spot.loc.formatted_address.addr1}</td>
									<td>{moment(reservation.start).format('dddd, MMMM Do YYYY')}</td>
									<td>{moment(reservation.end).format('dddd, MMMM Do YYYY')}</td>
									<td>${reservation.spot.cost.day}</td>
								</tr>
							))
						}
					</tbody>
				</Table>

					  <div className={"textForRes"}>
						  <h1 className={"lineOne"}>Book more than a great space!</h1>
						  <h3>Stop wasting time looking for parking</h3>
				
						  <p>Book with Parkify and have more time for free time.</p>
					  </div>

			</div>
		)
	}
}

export default Reservations;
