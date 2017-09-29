import React, { Component } from "react";
import "./SpotDetails.css";
import {Message, MessageHeader, MessageBody} from 'bloomer';
class SpotDetails extends Component {
	
	render() {
		return (
			<div>
			<Message>
				<MessageHeader>
					<p>Spot Details</p>
				</MessageHeader>
				<MessageBody>
					<ul>
						<li><img className="login-form-img" alt={"parking"} src="assets/images/parking.png"/></li>
						
					<li><b>7973 La Jolla Shores Dr. (7955 La Jolla Shores Dr.) - Hotel La Jolla - Valet Lot
						<br>
						</br>
						7973 La Jolla Shores Drive, San Diego, CA</b></li>
					<li></li>
						<li><a>See on Map</a></li>
					<li>Amenities</li>
					<li></li>
					<li>Valet</li>
					<li>Handicap Accessible</li>
					<li>On Site Staff</li>
					<li>Mobile Pass Accepted</li>
					<li>Paved</li>
					<li>Things You Should Know</li>
					<li></li>
					<li>This facility does NOT allow in/out privileges. You CANNOT enter & exit more than once.</li>
					</ul>
				</MessageBody>
			</Message>
			</div>
		)
	}
}
export default SpotDetails;
