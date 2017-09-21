import React, { Component } from "react";
import { Card, CardHeader, CardHeaderTitle, Media, Subtitle, CardContent, MediaContent, Title } from "bloomer";
import "./VehicleDetails.css";

class VehicleDetails extends Component {
    constructor() {
      super();
      this.state = {
        isActive: false
      };

    }

render() {
    return(
<div className="details">
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
                <a href="/plate">Add License Plate</a>
                <hr />
                <Title isSize={6}>Vehicles</Title>
                <Subtitle isSize={6}>----------</Subtitle>
                <a href="/vehicles">Add Vehicle</a>
            </MediaContent>
            <MediaContent>
                <Title isSize={6}>Credit Cards</Title>
                <Subtitle isSize={6}>----------</Subtitle>
                <a href="/cards">Add Credit Card</a>
                <hr />
            </MediaContent>
        </Media>
    </CardContent>
</Card>
</div>
)}};

export default VehicleDetails;
