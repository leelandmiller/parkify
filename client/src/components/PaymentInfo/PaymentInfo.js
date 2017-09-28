import React, { Component } from "react";
import "./PaymentInfo.css";
import {Message, MessageHeader, MessageBody, Input} from 'bloomer';

class PaymentInfo extends Component {
	
	render() {
		return (
			<Message>
				<MessageHeader>
					<p>Payment Info</p>
				</MessageHeader>
				<MessageBody>
<ul>
	<li><b>Payment Method:</b></li>
	<li>Debit or Credit Card</li>
	<i className="fa fa-cc-mastercard" aria-hidden="true"></i>
	<i className="fa fa-paypal" aria-hidden="true"></i>
	<i className="fa fa-cc-visa" aria-hidden="true"></i>
	<i className="fa fa-cc-amex" aria-hidden="true"></i>
	<i className="fa fa-cc-discover" aria-hidden="true"></i>
	<li>Cardholder Name</li>
	<li><Input type="text"></Input></li>
	<li>Debit/Credit Card Number</li>
	<li><Input type="text"></Input></li>
</ul>
				</MessageBody>
			</Message>
		)
	}
}
export default PaymentInfo;