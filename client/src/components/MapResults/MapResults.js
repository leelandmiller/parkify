import React, { Component } from "react";
import "./MapResults.css";
import { Container, Columns, Column, Field, Control, Select, Label} from "bloomer";
import API from "../../utils/API";

export class MapResults extends Component {

	constructor(props) {
		super(props);

		this.calculateMiles = this.calculateMiles.bind(this);
	}

	calculateMiles(km) {
		const half = (km/2);
		const quarter = (half/4);
		return half + quarter
	}

	render() {
		return(
			<div id="map-results">
				<h5>Available Spots</h5>
				<div class="results-filter">
					<form className="simplesearch-form">
						<Columns>
						    <Column >
						    	<Label>
						    		Select Date Range
						    	</Label>
								<Field>
									<Control>
										<Select
											onChange=""
			            					value=""
			            				>
										    <option value="1">Start Date</option>
										</Select>									
										<Select
											onChange=""
			            					value=""
			            				>
										    <option value="1">End Date</option>
										</Select>
									</Control>
								</Field>
						    </Column>
						</Columns>	
					</form>	
				</div>
				<div>
					<ul>
                        {this.props.closeBy.map(location => { 
                        	console.log("RESULT LOCATION", location.loc.formatted_address);
                        	return (
                            	<div>
	                            	<hr/>
	        						<a className="result-wrapper" href={"/reserve/" + location._id } onClick={this.props.onMarkerClick}>
	        							<Columns className="result-column">
	        								<Column>
	        									<img className="result-img" src="http://lorempixel.com/300/300/cats"></img>
	        								</Column>
	        								<Column>
	        									<li className="result-price">${location.cost.day}</li>
	        									<li className="result-title"></li>
	        									<li className="result-addr1">{location.loc.formatted_address.addr1}</li>
	        									<li className="result-addr2">{location.loc.formatted_address.addr2}</li>
	        									<li className="result-distance">{this.calculateMiles(location.distance).toFixed(2)} miles</li>
	        									<a href="/reserve">Reserve This Spot</a>
	        								</Column>
	        							</Columns>
	        						</a>
                                </div>
                            )}
                        )}
					</ul>
					<hr/>
				</div>
			</div>
		)
	}

}


export default MapResults;