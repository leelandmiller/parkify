import React, { Component } from "react";
import "./ReservationWrapper.css";
import SpotPreview from "../SpotPreview";
import AccountInfo from "../AccountInfo";
import PaymentInfo from "../PaymentInfo";
import SpotDetails from "../SpotDetails";



class ReservationWrapper extends Component {

		
		render(){
			return (
				<div>
					<SpotPreview/>
					<AccountInfo/>
					<PaymentInfo/>
					<SpotDetails/>
				</div>
			)
		}
	}
export default ReservationWrapper;
