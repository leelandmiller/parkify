import React, { Component } from "react";
import { Card, CardHeader, CardHeaderTitle, Media, CardContent, MediaContent, Title, Columns, Column } from "bloomer";
import "./VehicleDetails.css";
import SellYourSpot from "../SellYourSpot/SellYourSpot";

class VehicleDetails extends Component {
    constructor() {
      super();
      this.state = {
        isActive: false
      };

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
                          <li>Address: </li>
                          <li>City: </li>
                          <li>State: </li>
                          <li>Price: </li>
                          <li>Start Date: </li>
                          <li>End Date: </li>
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
		 <SellYourSpot/>
	</Column>
</Columns>

)}};


export default VehicleDetails;
