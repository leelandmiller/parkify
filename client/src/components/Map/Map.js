import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import { Container} from "bloomer";
 
 
class Map extends React.Component {

	render() {
		return (       
			<Container>
				<h1>Map</h1> 
				<div id="map" ref="map">
				</div>
			</Container>
		)
	}
}

export default Map;
