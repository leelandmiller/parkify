import React, { Component } from "react";
import { Button, Title, Field, Control, Input, Icon, Card, CardHeader, CardHeaderTitle, Media, MediaContent, CardContent } from "bloomer";import "./SellYourSpot.css";

class SellYourSpot extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false
		};
		
	}
	
	render() {
		return(
<div className={"SellYourSpot"}>
	<Card>
		<CardHeader>
			<CardHeaderTitle>
				Sell A Spot
			</CardHeaderTitle>
		</CardHeader>
		<CardContent>
			<Media>
				<MediaContent>
<Title isSize={6}>Fill out this form to sell your spot.</Title>
<hr />
<form className="form">
	
	<Field>

			<Icon isSize='small' isAlign='left'>
				<span className="fa fa-address-book-o" aria-hidden="true" />
			</Icon>
			<Input className={"fieldsForSellForm"} type='text' name='address' isColor='success' placeholder='Address'/>

	</Field>
	
	<Field>
		<Control hasIcon>
			<Icon isSize='small' isAlign='left'>
				<span className="fa fa-globe" aria-hidden="true" />
			</Icon>
			<Input className={"fieldsForSellForm"} type='text' name='city' isColor='success' placeholder='City'/>
		</Control>
	</Field>
	
	<Field>
		<Control hasIcon>
			<Icon isSize='small' isAlign='left'>
				<span className="fa fa-location-arrow" aria-hidden="true" />
			</Icon>
			<Input className={"fieldsForSellForm"} type='text' name='state' isColor='success' placeholder='State'/>
		</Control>
	</Field>
	
	<Field>
		<Control hasIcon>
			<Icon isSize='small' isAlign='left'>
				<span className="fa fa-usd" aria-hidden="true" />
			</Icon>
			<Input className={"fieldsForSellForm"} type='text' name='cost' isColor='success' placeholder='Price'/>
		</Control>
	</Field>
	
	<Field>
		<Control hasIcon>
			<Icon isSize='small' isAlign='left'>
				<span className="fa fa-play" aria-hidden="true" />
			</Icon>
			<Input className={"fieldsForSellForm"} type='text' name='schedule' isColor='success' placeholder='Start Date'/>
		</Control>
	</Field>
	
	<Field>
		<Control hasIcon>
			<Icon isSize='small' isAlign='left'>
				<span className="fa fa-stop" aria-hidden="true" />
			</Icon>
			<Input className={"fieldsForSellForm"} type='text' name='endDate' isColor='success' placeholder='End Date'/>
		</Control>
	</Field>
	
	<Field>
		<Control>
			<Button id="login-submit" className="butt" isColor='primary'>Submit</Button>
		</Control>
	</Field>

</form>
				</MediaContent>
			</Media>
		</CardContent>
	</Card>
</div>
	)}};
export default SellYourSpot;
