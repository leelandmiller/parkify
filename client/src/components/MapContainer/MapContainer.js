import React, { Component } from "react";
import "./MapContainer.css";
import { Container, Icon} from "bloomer";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import API from "../../utils/API";
import SimpleSearch from '../SimpleSearch';
 
export class MapContainer extends Component {

    componentDidMount() {
        this.setState({
            closeBy: [this.props.closeBy]
        })
    }

    constructor(props) {
        super(props);

        this.state = {
            lat: "",
            lng: "",
            location: this.props.location,
            distance: this.props.distance,
            closeBy: [],
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }

        // this.renderMarkers = this.renderMarkers.bind(this);
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    calculateGeoCode = () => {
        console.log('New dist');
    };

    onMarkerClick = (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
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
         "minHeight": '600px'
        }
        return (
            <div style={style}>
                <Map google={this.props.google} visible={true}>

                    {   
                        // Takes in close by locations from the SimpleSearch component
                        this.props.closeBy.map(location => (
                        
                                <Marker
                                    title={'The marker`s title will appear as a tooltip.'}
                                    name={location.name}
                                    addr1={location.addr1}
                                    addr2={location.addr2}
                                    price={location.price}
                                    distance={location.distance}
                                    position={{lat: location.lat, lng: location.lng}}
                                    onClick={this.onMarkerClick} />
                            )

                        )
                    }

                    <InfoWindow
                        // Information displayed on marker click
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <img className="result-img" src="http://lorempixel.com/400/200/cats"></img>
                            <h1>{this.state.selectedPlace.name}</h1>
                            <hr/>
                            <div>
                                <Icon icon='car' />
                                <br/>
                                {this.state.selectedPlace.addr1}<br/>
                                {this.state.selectedPlace.addr2}
                            </div>
                            <div>
                                {this.state.selectedPlace.distance} miles
                            </div>
                            <div>${this.state.selectedPlace.price}</div>
                            <button>Reserve This Spot</button>
                        </div>
                    </InfoWindow>



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