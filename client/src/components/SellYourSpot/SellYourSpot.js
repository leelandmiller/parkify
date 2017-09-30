import React, { Component } from "react";

import { Checkbox, Button, Select, Label, Title, Field, Control, Input, Icon, Card, CardHeader, CardHeaderTitle, Media, MediaContent, CardContent } from "bloomer";
import "./SellYourSpot.css";
import DatePicker from 'react-datepicker'
import API from './../../utils/API'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css';


class SellYourSpot extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false,
			address: '',
			city: '',
			state: '',
			cost: 1,
			schedule: '',
			endDate: '',
			days:{
				sun:false,
				mon:false,
				tue:false,
				wed:false,
				thr:false,
				fri:false,
				sat:false,
			},
			dropdown:false,
		startDate: moment()
		};
		this.handleInput = this.handleInput.bind(this)
		this.sendSpot = this.sendSpot.bind(this)
		this.handleDayChecks = this.handleDayChecks.bind(this)
		this.handleChange = this.handleChange.bind(this);

	}

handleChange(date) {
	this.setState({
		startDate: date
	});
}

	handleInput(event){

		this.setState({
			[event.target.name]:event.target.value
		})
	}

	handleDayChecks(event){
		const days = {
			sun:this.state.days.sun,
			mon:this.state.days.mon,
			tue:this.state.days.tue,
			wed:this.state.days.wed,
			thr:this.state.days.thr,
			fri:this.state.days.fri,
			sat:this.state.days.sat,
		}
		days[event.target.value] = event.target.checked
		console.log(days)
		this.setState({
			days: days
		})
	}

	sendSpot(){
		let formatted_address = this.state.address+' ,'+this.state.city+' ,'+this.state.state+' ,'
		let open_times = [];
		for(let day in this.state.days){
			if(this.state.days[day]){
				open_times.push({
					day
				})
			}
		}
		let spotObj = {
			loc:{
				formatted_address
			},
			cost:{
				day:this.state.cost,
				hr:1
			}
		}
		let scheduleObj = {
			end_dates:{
				end: this.state.endDate
			},
			open_times
		}
		API.addSpot(spotObj, scheduleObj).then(results => {
			console.log(results.data)
			window.location.reload
		})

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
			<Icon className={"sell"} isSize='small' isAlign='left'>
				<span className="fa fa-address-book-o" aria-hidden="true" />
			</Icon>
			<Input onChange={this.handleInput} className={"fieldsForSellForm"} type='text' name='address' isColor='success' placeholder='Address'/>
		</Control>
	</Field>

	<Field>
		<Control hasIcon>
			<Icon className={"sell"} isSize='small' isAlign='left'>
				<span className="fa fa-globe" aria-hidden="true" />
			</Icon>
			<Input onChange={this.handleInput} className={"fieldsForSellForm"} type='text' name='city' isColor='success' placeholder='City'/>
		</Control>
	</Field>

	<Field>
		<Control hasIcon>
			<Icon className={"sell"} isSize='small' isAlign='left'>
				<span className="fa fa-location-arrow" aria-hidden="true" />
			</Icon>
			<Input onChange={this.handleInput} className={"fieldsForSellForm"} type='text' name='state' isColor='success' placeholder='State'/>
		</Control>
	</Field>

	<Field>
		<Control hasIcon>
			<Icon className={"sell"} isSize='small' isAlign='left'>
				<span className="fa fa-usd" aria-hidden="true" />
			</Icon>
			<Input onChange={this.handleInput} className={"fieldsForSellForm"} type='text' name='cost' isColor='success' placeholder='Price'/>
		</Control>
	</Field>

	<Field>
		<Control hasIcon>
			<Icon className={"sell"} isSize='small' isAlign='left'>
				<span className="fa fa-play" aria-hidden="true" />
			</Icon>
		<div className={'dropdown' + (this.state.dropdown?' is-active': '')}>
		  <div className="dropdown-trigger">
		    <button onClick={event=>{
		    	event.preventDefault()
		    	this.setState({
		    		dropdown: (!this.state.dropdown)
		    	})
		    }} className="button dropButt" aria-haspopup="true" aria-controls="dropdown-menu">
		      <span>Dropdown button</span>
		      <span className="icon is-small">
		        <i className="fa fa-angle-down" aria-hidden="true"></i>
		      </span>
		    </button>
		  </div>
		  <div className="dropdown-menu" id="dropdown-menu" role="menu">
		    <div className="dropdown-content">
		    	<Checkbox className={"check"} onChange={this.handleDayChecks} value='mon'>Monday</Checkbox>
				<Checkbox className={"check"} onChange={this.handleDayChecks} value='tue'>Tuesday</Checkbox>
				<Checkbox className={"check"} onChange={this.handleDayChecks} value='wed'>Wednesday</Checkbox>
				<Checkbox className={"check"} onChange={this.handleDayChecks} value='thr'>Thursday</Checkbox>
				<Checkbox className={"check"} onChange={this.handleDayChecks} value='fri'>Friday</Checkbox>
				<Checkbox className={"check"} onChange={this.handleDayChecks} value='sat'>Saturday</Checkbox>
				<Checkbox className={"check"} onChange={this.handleDayChecks} value='sun'>Sunday</Checkbox>
		    </div>
		  </div>
		</div>
		</Control>
	</Field>

	<Field>
		<Control hasIcon>
			<Icon className={"sell"} isSize='small' isAlign='left'>
				<span className="fa fa-stop" aria-hidden="true" />
			</Icon>
			<DatePicker className={"calendar"}
			        selected={this.state.startDate}
			        onChange={this.handleChange}
			        minDate={moment().add(1, 'd')}
			    />
		</Control>
	</Field>

	<Field>
		<Control>
			<Button onClick={this.sendSpot} id="login-submit" className="butt" isColor='primary'>Submit</Button>
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
