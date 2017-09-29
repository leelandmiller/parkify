import React, { Component } from "react";
import "./MapResults.css";
import { Container, Columns, Column, Field, Control, Select, Label} from "bloomer";
import API from "../../utils/API";

export class MapResults extends Component {

	constructor(props) {
		super(props);

		this.state = {
	        closeBy: [
	            {
	                lat: 33.039139,
	                lng: -117.295425
	            }           
	        ]
		}

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
                        {this.props.closeBy.map(location => (
                        	<div>
                        	<hr/>
							<a className="result-wrapper" href="#" onClick={this.props.onMarkerClick}>
								<Columns className="result-column">
									<Column>
										<img className="result-img" src="http://lorempixel.com/300/300/cats"></img>
									</Column>
									<Column>
										<li className="result-price">${location.price}</li>
										<li className="result-title">{location.name}</li>
										<li className="result-sub">{location.addr1}</li>
										<li className="result-sub">{location.addr2}</li>
										<li className="result-distance">{location.distance} miles</li>
									</Column>
								</Columns>
							</a>
                            </div>
                            )
                        )}
					</ul>
					<hr/>
				</div>
			</div>
		)
	}

}


export default MapResults;