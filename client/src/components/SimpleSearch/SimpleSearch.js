import React, { Component } from "react";
import { Container, Field, Label, Control, Input, Icon, Select, Button, Column, Columns} from "bloomer";
import MapContainer from '../MapContainer';
import "./SimpleSearch.css";

export class SimpleSearch extends Component {

	constructor(props) {
		super(props);

		this.state = {
			// Takes in a zip code or address
			location: "",
			// Categorized by hourly dail
			distance: "",
	        closeBy: [
	            {
	                lat: 33.039139,
	                lng: -117.295425
	            }           
	        ]
		}

		this.handleSearchClick = this.handleSearchClick.bind(this);
		this.handleLocChange = this.handleLocChange.bind(this);
		this.handleDistChange = this.handleDistChange.bind(this);
	}

	handleLocChange = (event) => {
		 this.setState({ location: event.target.value });
		 console.log(this.state);
	};
	
	handleDistChange = (event) => {
		 this.setState({ distance: event.target.value });
		 console.log(this.state);
	};

	handleSearchClick = (event) => {
		event.preventDefault();

		let searchLoc = this.state.location;
		let searchDist = this.state.dist;

		const newSearch = {location: searchLoc, distance: searchDist};
		console.log("Searching", this.state);

		//Send call to DB for spots near search location
	};

	convertLocation = () => {
		console.log("Lat and long");
	};

	render() { 
		return (
			<Container style={{ marginBottom: 20 }}>
				<form>
					<Label>Search Available Parking Spots</Label>
					<Columns>
					    <Column isSize='3/4'>
							<Field>
								<Control hasIcons>
								<Input 
									isColor='success' 
									placeholder='Search by zip code or city and state'
									onChange={this.handleLocChange}
	            					value={this.state.loc}
            					/>
								<Icon isSize='small' isAlign='left'>
								    <span className="fa fa-map-marker" aria-hidden="true" />
								</Icon>
								</Control>
							</Field>
					    </Column>
					    <Column isSize='12'>
							<Field>
								<Control>
								<Select
									onChange={this.handleDistChange}
	            					value={this.state.distance}
	            				>
								    <option value="1">1 Mile</option>
								    <option value="5">5 Miles</option>
								    <option value="10">10 Miles</option>
								    <option value="25">25 Miles</option>
								    <option value="50">50 Miles</option>
								</Select>
								</Control>
							</Field>
					    </Column>
					    <Column isSize='2'>
							<Field>
								<Control>
									<Button 
										isColor='primary' 
										onClick={this.handleSearchClick}
									>
										Search
									</Button>
								</Control>
							</Field>
					    </Column>
					</Columns>	
				</form>	
				<MapContainer 
					location={this.state.location}
					distance={this.state.distance}
					closeBy={this.state.closeBy}
				/>	
			</Container>
		)
	}
}


export default SimpleSearch;