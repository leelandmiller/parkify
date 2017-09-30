import React, { Component } from "react";
import { Columns, Column } from "bloomer";
import moment from 'moment';
import "./ReservationWrapper.css";
import SpotPreview from "../SpotPreview";
import AccountInfo from "../AccountInfo";
import PaymentInfo from "../PaymentInfo";
import SpotDetails from "../SpotDetails";
import ReservationDetails from '../ReservationDetails';
import API from '../../utils/API';

class ReservationWrapper extends Component {

	constructor(props) {
		super(props);
		this.state = {
			thisSpot: {},
			openDays: []
		}

		this.getStartDateOptions = this.getStartDateOptions.bind(this);
		// this.renderStartDateOptions = this.renderStartDateOptions.bind(this);
		this.getAllOpenDays = this.getAllOpenDays.bind(this);
		this.checkIfDatesConflict = this.checkIfDatesConflict.bind(this);
	}

	componentDidMount() {
        const spotId = window.location.pathname.substring(9);
        // console.log(spotId);

        API.getSpot(spotId).then(spotInfo => {
            console.log(spotInfo.data.spot[0])
			const thisSpot = spotInfo.data.spot[0];

			this.setState({
				thisSpot
			});

			this.getStartDateOptions()
        });
    }

	getAllOpenDays(spotObj, resArr) {
		console.log(spotObj)

		const end_dates = spotObj.schedule.end_dates.end;

		const endDate = moment(end_dates);
		const openDays = spotObj.schedule.open_times.map(ele => ele.day)
		const openDates = []
		const checkDistance = moment().add(15, 'd').isAfter(endDate)? 15 : endDate.diff(moment(), 'days')
		for(let i =0; i< checkDistance; i++ ){
			let testDate = endDate.add(i, 'd');
			openDays.forEach(day => {
				if(testDate.format('ddd').toLowerCase() === day){
					openDates.push(testDate)
				}
			})
		}

		const filteredDates =[]
	    openDates.forEach(testDate => {
	        let passed = true;
	        resArr.forEach(resData => {
	            if(this.checkIfDatesConflict(resData)({start:testDate, end:testDate})){
	                passed = false;
	            }
	        })
	        if(passed){
	            filteredDates.push(testDate)
	        }
	    })

		return filteredDates
	}


	checkIfDatesConflict(testRes) {
	    //dates to use for all compares
	    const startDay = moment(testRes.start);
	    const endDay = moment(testRes.end);
	    return ele => {
	        //dates from array
	        const eleStart = moment(ele.start);
	        const eleEnd = moment(ele.end);
	        if (startDay.isBetween(eleStart, eleEnd) || endDay.isBetween(eleStart, eleEnd)) {
	            return true
	        } else {
	            return false
	        }
	    }
	}



	getStartDateOptions() {
		// console.log(thisSpot.spot.schedule.end_dates.end)

		const spotId = this.state.thisSpot._id
		API.getAllReservations(spotId).then(results => {

			const today = moment().format("ddd").toLowerCase();
			const openDays = this.getAllOpenDays(this.state.thisSpot, results.data.reservations)

			// console.log(results)
			// console.log(this.getAllOpenDays(this.state.thisSpot, results.data.reservations));
			this.setState({
				openDays
			})
			console.log(this.state.openDays)
		})
	}

	// renderStartDateOptions() {
	// 	return (
	// 		{
	// 			this.state.openDays.map(openDay => (
	// 				<option>openDay.format('dddd, MMMM Do YYYY')</option>
	// 			))
	// 		}
	// 	);
	// }

	render(){

		return (
			<Columns>
				<Column>
				<SpotPreview/>
				<ReservationDetails openDays={this.state.openDays}/>
				<PaymentInfo/>
				</Column>
			<Column>
				<SpotDetails/>
				</Column>
			</Columns>
		)
	}
	}
export default ReservationWrapper;
