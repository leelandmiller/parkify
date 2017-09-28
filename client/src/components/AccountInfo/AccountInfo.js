import React, { Component } from "react";
import "./AccountInfo.css";
import {Message, MessageHeader, MessageBody} from 'bloomer';

class AccountInfo extends Component {
	
	render() {
		return (
			<Message>
				<MessageHeader>
					<p>Account Info</p>
				</MessageHeader>
				<MessageBody>
				<ul>
					<li>shamoonlina@gmail.com</li>
					<li><a>change user</a></li>
				</ul>
				</MessageBody>
			</Message>
		)
	}
}
export default AccountInfo;