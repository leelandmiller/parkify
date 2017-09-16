import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import {Container} from "bloomer";
 
 
class Map extends React.Component {

	constructor(props) {
	super(props);

	const {lat, lng} = this.props.initialCenter;
		this.state = {
		  currentLocation: {
		    lat: lat,
		    lng: lng
		  }
		}
	}

	componentDidUpdate(prevProps, prevState) {
	    if (this.props.centerAroundCurrentLocation) {
	        if (navigator && navigator.geolocation) {
	            navigator.geolocation.getCurrentPosition((pos) => {
	                const coords = pos.coords;
	                this.setState({
	                    currentLocation: {
	                        lat: coords.latitude,
	                        lng: coords.longitude
	                    }
	                })
	            })
	        }
	    }
	    this.loadMap();
	}

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom} = this.props;
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    // ...
  }

	render() {
		return (       
			<Container>
				<h1>Map</h1> 
				<div id="map" ref="map">
				 Loading map...
				</div>
			</Container>
		)
	}
}

Map.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object,
  centerAroundCurrentLocation: React.PropTypes.bool
}

Map.defaultProps = {
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  }
  centerAroundCurrentLocation: false
}

export default Map;
