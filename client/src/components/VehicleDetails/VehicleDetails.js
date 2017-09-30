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
	<Column>
		<Card>
    <CardHeader>
			  <CardHeaderTitle>
					Details
			  </CardHeaderTitle>
		 </CardHeader>
		 <CardContent>
			  <Media>
					<MediaContent>

                <Title isSize={6}>Vehicles</Title>
						<hr />
						<a href="/add/vehicle">Add Vehicle</a>
					</MediaContent>
			  </Media>
		 </CardContent>
	</Card>
</Column>
	<Column>
		 <SellYourSpot/>
	</Column>
</Columns>

)}};


export default VehicleDetails;
