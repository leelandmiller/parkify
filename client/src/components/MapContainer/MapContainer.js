import React, { Component } from "react";
import "./MapContainer.css";
import { Container} from "bloomer";
import {GoogleApiWrapper} from 'google-maps-react';
import {Map, InfoWindow, Marker } from 'google-maps-react';
 
export class MapContainer extends Component {

  constructor() {   
    super();
    
    this.state = {
      selectedPlace: {
        name: '92126'
      }
    };

  }


  render() {
        return (
            <Map google={this.props.google} zoom={14}>

            <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
            
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
            
            </InfoWindow>

            </Map>
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyDMnsqUPNhL5y88Az9qe3HNEQ-MMyxjk54"
})(MapContainer)