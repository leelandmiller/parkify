import React, { Component } from "react";
import "./SpotPreview.css";
import {Message, MessageHeader, MessageBody} from 'bloomer';

class SpotPreview extends Component {
	
	render() {
		return (
				<Message>
					<MessageHeader>
						<p>Spot Preview</p>
					</MessageHeader>
					<MessageBody>
						<ul>
							<li>Enter After: ---</li>
							<li>Exit Before: ---</li>
							<li>Total Time: ---</li>
							<li>Total Price: ---</li>
						</ul>

					</MessageBody>
				</Message>
		)
	}
}
export default SpotPreview;