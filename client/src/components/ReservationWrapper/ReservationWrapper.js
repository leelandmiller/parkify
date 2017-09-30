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
			openDays: [],
			startDate: '',
			endDate: ''
		}

		this.getStartDateOptions = this.getStartDateOptions.bind(this);
		// this.renderStartDateOptions = this.renderStartDateOptions.bind(this);
		this.getAllOpenDays = this.getAllOpenDays.bind(this);
		this.checkIfDatesConflict = this.checkIfDatesConflict.bind(this);
		this.changeEndDate = this.changeEndDate.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

			moment.updateLocale('en', {
			    weekdaysMin : ['sun', 'mon', 'tue', 'wed', 'thr', 'fri', 'sat']
			});

			this.getStartDateOptions()
        });
    }

	getAllOpenDays(spotObj, resArr) {
		console.log(spotObj)

		const end_dates = spotObj.schedule.end_dates.end;


		const endDate = moment(end_dates);
		const startDate = moment()
		const openDays = spotObj.schedule.open_times.map(ele => ele.day)
		const openDates = []
		const checkDistance = moment().add(15, 'd').isAfter(endDate)? 15 : endDate.diff(moment(), 'days')
		for(let i =0; i< checkDistance; i++ ){
			let mEndDate = moment(endDate)
			let testDate = moment(mEndDate.add(i, 'd'));
			openDays.forEach(day => {
				if(testDate.format('ddd').toLowerCase().replace('thu', 'thr') === day){
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
		})
	}

	changeEndDate(event){
		let val = event.target.value;
		let valMoment = moment(val, 'dddd, MMMM Do YYYY').add(1, 'd');


		this.setState({
			startDate: moment(val, 'dddd, MMMM Do YYYY'),
			endDate: valMoment.format('dddd, MMMM Do YYYY'),
			endDateMoment: valMoment
		})
    }

	handleFormSubmit(event) {
		event.preventDefault();

		API.getCurrentUser().then(renter => {
			console.log(renter)
			let reservationObj = {
				spot: this.state.thisSpot._id,
				start: this.state.startDate.toDate(),
				end: this.state.endDateMoment.toDate(),
				renter: renter._id
			};

			API.addReservation(reservationObj).then((results) => {
				console.log(results)
				// window.location = '/account'
			})
		})
	}

	render(){

		return (
			<Columns>
				<Column>
				<SpotPreview/>
				<ReservationDetails handleFormSubmit={this.handleFormSubmit} openDays={this.state.openDays} endDate={this.state.endDate} changeEndDate={this.changeEndDate}/>
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
