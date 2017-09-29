import React, { Component } from "react";
import { Columns, Column } from "bloomer";
import "./ReservationWrapper.css";
import SpotPreview from "../SpotPreview";
import AccountInfo from "../AccountInfo";
import PaymentInfo from "../PaymentInfo";
import SpotDetails from "../SpotDetails";



class ReservationWrapper extends Component {

		
		render(){
			return (
				<Columns>
					<Column>
					<SpotPreview/>
					<AccountInfo/>
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
