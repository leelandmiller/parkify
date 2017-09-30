import React, { Component } from "react";
import { Subtitle, Card, CardHeader, CardHeaderTitle, Media, CardContent, MediaContent, Title, Columns, Column } from "bloomer";
import "./VehicleDetails.css";
import SellYourSpot from "../SellYourSpot/SellYourSpot";
import moment from 'moment'

class VehicleDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isActive: false,
        spot:{
          notLoc:false
        }
      };

    }
componentWillReceiveProps(nextProps){
  nextProps.spot?
  this.setState({
    spot:nextProps.spot
  }):null
}


render() {
    return(
<Columns>
	<Column className='column-custom'>
		<Card>
            <CardHeader>
                <CardHeaderTitle>
					Details
                </CardHeaderTitle>
            </CardHeader>
            <CardContent>
                <Media>
                    <MediaContent>
                        <Title isSize={6}>Your Spot</Title>
                        <hr />
                       <ul>
                       {this.state.spot.loc?console.log( this.state.spot.loc.formatted_address):null}
                         <li>Address: {this.state.spot.loc?this.state.spot.loc.formatted_address.addr1:""}</li>
                          <li>Price: {this.state.spot.loc?this.state.spot.cost.day:""}</li>
                          <li>Start Date: {this.state.spot.loc?moment(this.state.spot.createdAt).format('dddd, MMMM Do YYYY'):""}</li>
                       </ul>
                       <br/>
                        <Title isSize={6}>Vehicles</Title>
                        <hr />
                        <a href="/add/vehicle">Add Vehicle</a>
                    </MediaContent>
                </Media>
            </CardContent>
        </Card>
    </Column>
	<Column className='column-custom'>
		 {this.props.hasSpot?null:<SellYourSpot/>}
	</Column>
</Columns>

)}};


export default VehicleDetails;
