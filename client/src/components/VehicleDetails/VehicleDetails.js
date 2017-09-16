import React, { Component } from "react";
import { Card, CardHeader, CardHeaderTitle, Icon, CardImage, Image, Media, MediaLeft, Subtitle, Content, small, CardHeaderIcon, CardContent, MediaContent, Title } from "bloomer";
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
                <a href="#">Add License Plate</a>
                <hr />
                <Title isSize={6}>Vehicles</Title>
                <Subtitle isSize={6}>----------</Subtitle>
                <a href="#">Add Vehicle</a>
            </MediaContent>
            <MediaContent>
                <Title isSize={6}>Credit Cards</Title>
                <Subtitle isSize={6}>----------</Subtitle>
                <a href="#">Add Credit Card</a>
                <hr />
            </MediaContent>
        </Media>
    </CardContent>
</Card>
</div>
)}};

export default VehicleDetails;