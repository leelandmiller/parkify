import React, { Component } from "react";
import "./MapContainer.css";
import { Container} from "bloomer";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
        lat: '',
        lng: '',
        locations: [
            {
                lat: 32.842674,
                lng: -117.257767
            }           
        ]
    }

  }

  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    } else {
        const style = {
          width: '100vw',
          height: '100vh'
        }
        return (
            <Container>
                <div style={style}>
                    <Map google={this.props.google} visible={true}>
                        {
                            this.state.locations.map(location => (
                                <Marker
                                    title={'The marker`s title will appear as a tooltip.'}
                                    name={'La Jolla'}
                                    position={{lat: location.lat, lng: location.lng}} />
                                
                                )
                            )
                        }

                    </Map>
                </div>
            </Container>
        )
     }
  }

}

Map.defaultProps = {
    zoom: 14,
    initialCenter: {
        lat: 33.039139,
        lng: -117.295425
    }
};

 
export default GoogleApiWrapper({
  apiKey: "AIzaSyDMnsqUPNhL5y88Az9qe3HNEQ-MMyxjk54"
})(MapContainer)