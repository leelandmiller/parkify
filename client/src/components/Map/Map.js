import React, { Component } from 'react';

class Map extends Component {

	constructor() { 	
		super();
		
		this.state = {
		};
	}

	componentDidMount = () => {		
		let newScript = document.createElement("script");
		newScript.setAttribute("src", "https://maps.googleapis.com/maps/api/js?key=AIzaSyDMnsqUPNhL5y88Az9qe3HNEQ-MMyxjk54&callback=initMap");
		newScript.setAttribute("type", "text/javascript");
		newScript.async = true;
		document.body.appendChild(newScript);
	};

	// initMap = () => {
	// 	let uluru = {lat: -25.363, lng: 131.044};
	// 	let map = new google.maps.Map(document.getElementById('map'), {
	// 	  zoom: 4,
	// 	  center: uluru
	// 	});
	// 	let marker = new google.maps.Marker({
	// 	  position: uluru,
	// 	  map: map
	// 	});
	// };

	render() {
		return (       
			
			<div>
				<h1>Map</h1> 
				<div id="map" ref="map">
				</div>
			</div>
		)
	}
}

export default Map;