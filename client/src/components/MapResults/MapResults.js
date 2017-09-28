import React, { Component } from "react";
import "./MapResults.css";
import { Container, Columns, Column} from "bloomer";
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
			<div>
				<h5>Available Spots</h5>
				<div>
					<ul>
                        {this.props.closeBy.map(location => (
                        	<div>
                        	<hr/>
							<a href="#">
								<Columns>
									<Column isSize='1/4'>
										<img className="result-img"></img>
									</Column>
									<Column isSize='2/4'>
										<li className="result-title">{location.name}</li>
										<li className="result-sub">{location.addr1}</li>
										<li className="result-sub">{location.addr2}</li>
										<li className="result-distance">{location.distance} miles</li>
									</Column>
									<Column isSize='1/4'>
										<li className="result-price">${location.price}</li>
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