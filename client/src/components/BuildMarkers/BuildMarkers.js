import React, { Component } from "react";
import "./BuildMarkers.css";
import { Container} from "bloomer";
import {Marker} from 'google-maps-react';
 
export class BuildMarkers extends Component {

	constructor(props) {
		super(props);
		this.state = {
			locations: [
				{
			        lat: 33.039139,
			        lng: -117.295425
			    }			
			]
		}
	}

	renderMarkers() {
		return this.state.locations.map(
			location => (
			<Marker
				title={'The marker`s title will appear as a tooltip.'}
				name={'La Jolla'}
				position={{lat: 32.842674, lng: -117.257767}} />
			)
		);
	}

	render() {
		return (
			this.renderMarkers()
	    )
	}

}




export default BuildMarkers;