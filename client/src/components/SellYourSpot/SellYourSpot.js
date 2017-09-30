import React, { Component } from "react";
import { Checkbox, Button, Select, Label, Title, Field, Control, Input, Icon, Card, CardHeader, CardHeaderTitle, Media, MediaContent, CardContent } from "bloomer";import "./SellYourSpot.css";
import Calendar from 'react-input-calendar'

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
		<Control hasIcon>
			<Icon isSize='small' isAlign='left'>
				<span className="fa fa-address-book-o" aria-hidden="true" />
			</Icon>
			<Input className={"fieldsForSellForm"} type='text' name='address' isColor='success' placeholder='Address'/>
		</Control>
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
		<Control>
			<Select className={"dropDown"}>
				<Label>Select:</Label>
					<Select className={"fieldsForSellForm"} name='schedule' isColor='success' placeholder='Start Date'/>
				<option><Checkbox>Monday</Checkbox></option>
				<option><Checkbox>Tuesday</Checkbox></option>
				<option><Checkbox>Wednesday</Checkbox></option>
				<option><Checkbox>Thursday</Checkbox></option>
				<option><Checkbox>Friday</Checkbox></option>
				<option><Checkbox>Saturday</Checkbox></option>
				<option><Checkbox>Sunday</Checkbox></option>
					</Select>
		</Control>
	</Field>
	
	<Field>
		<Control hasIcon>
			<Icon isSize='small' isAlign='left'>
				<span className="fa fa-stop" aria-hidden="true" />
			</Icon>
			{/*<Input className={"fieldsForSellForm"} type='text' name='endDate' isColor='success' placeholder='End Date'/>*/}
			<Calendar className={"calendar"}  format='DD/MM/YYYY' date='4-12-2014' />
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
