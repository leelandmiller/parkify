import React, { Component } from "react";
import "./MapContainer.css";
import { Container} from "bloomer";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import API from "../../utils/API";
import SimpleSearch from '../SimpleSearch';
 
export class MapContainer extends Component {

    componentDidMount() {

    }

    constructor(props) {
        super(props);

        this.state = {
            lat: "",
            lng: "",
            location: this.props.location,
            distance: this.props.distance,
            closeBy: []
        }

        // this.renderMarkers = this.renderMarkers.bind(this);
    }

    calculateGeoCode = () => {
        console.log('New dist');
    };

    // renderMarkers = () => {
    //     let searchLoc = this.state.location;
    //     let searchDist = this.state.dist;

    //     API.getSpotsByPoint(searchLoc, searchDist).then((res) => {
    //         this.setState({ closeBy: res.data });
    //     });
    // };


  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    } else {
        const style = {
         "min-height": '600px'
        }
        return (
            <div style={style}>
                <Map google={this.props.google} visible={true}>
                    {   
                        // Takes in close by locations from the SimpleSearch component
                        this.props.closeBy.map(location => (
                            <Marker
                                title={'The marker`s title will appear as a tooltip.'}
                                name={'La Jolla'}
                                position={{lat: location.lat, lng: location.lng}} />
                            
                            )
                        )
                    }
                </Map>
            </div>
        )
     }
  }

}

Map.defaultProps = {
    zoom: 10,
    initialCenter: {
        lat: 33.039139,
        lng: -117.295425
    }
};

 
export default GoogleApiWrapper({
  apiKey: "AIzaSyDMnsqUPNhL5y88Az9qe3HNEQ-MMyxjk54"
})(MapContainer)