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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
						tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
						purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis
						lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
						a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
					</MessageBody>
				</Message>
		)
	}
}
export default SpotPreview;