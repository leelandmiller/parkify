import React, { Component } from "react";
import { Card, CardHeader, CardHeaderTitle, Media, Subtitle, CardContent, MediaContent, Title, Columns, Column } from "bloomer";
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
                        <Title isSize={6}>License Plate</Title>
                        <Subtitle isSize={6}>----------</Subtitle>
                        <a href="/add/plate">Add License Plate</a>
                        <hr />
                        <Title isSize={6}>Vehicles</Title>
                        <Subtitle isSize={6}>----------</Subtitle>
                        <a href="/add/vehicle">Add Vehicle</a>
                        <hr />
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
