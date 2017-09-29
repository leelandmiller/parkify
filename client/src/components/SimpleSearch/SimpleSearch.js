import React, { Component } from "react";
import { Container, Field, Label, Control, Input, Icon, Select, Button, Column, Columns} from "bloomer";
import MapContainer from '../MapContainer';
import MapResults from '../MapResults';
import API from "../../utils/API";
import "./SimpleSearch.css";

export class SimpleSearch extends Component {

	constructor(props) {
		super(props);

		this.state = {
			// Takes in a zip code or address
			location: "",
			// Distance away from the search location
			distance: 10000,
	        closeBy: [
	            // {
	            //     name: "Encinitas",
	            //     addr1: "Encinitas Way",
	            //     addr2: "Encinitas, CA USA",
	            //     price: 45,
	            //     distance: 5,
	            //     lat: 33.039139,
	            //     lng: -117.295425
	            // },
	            // {
	            //     name: "Margaret's House",
	            //     addr1: "8825 Revelstoke Way",
	            //     addr2: "San Diego, CA 92126",
	            //     price: 25,
	            //     distance: 10,
	            //     lat: 32.931521,
	            //     lng: -117.132951
	            // }            
	        ]
		}

		this.handleSearchClick = this.handleSearchClick.bind(this);
		this.handleLocChange = this.handleLocChange.bind(this);
		this.handleDistChange = this.handleDistChange.bind(this);
	}

	handleLocChange = (event) => {
		 this.setState({ location: event.target.value });
		 // console.log('Location', this.state);
	};
	
	handleDistChange = (event) => {
		 this.setState({ distance: (event.target.value*1600) });
		 // console.log('Distance', this.state);
	};

	handleSearchClick = (event) => {
		event.preventDefault();

	    let searchLoc = {
	    	addr1: this.state.location,
	   		addr2: ""
	    };

	    let searchDist = this.state.distance;

	    let newSearch = {
	    	loc: searchLoc,
	    	distance: searchDist
	    };

	    API.getSpotsByPoint(newSearch).then((res) => {
	        this.setState({ closeBy: res.data.spots });
	        console.log("SPOTS BY POINT", res.data.spots);
	    });
	};

	convertLocation = () => {
		console.log("Lat and long");
	};


	render() { 
		
		return (
			<Container style={{ marginBottom: 20, marginTop: 20 }}>
				<h1>Search Available Parking Spots</h1>
				<form className="simplesearch-form">
					<Columns>
					    <Column isSize='3/4'>
							<Field >
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
										className='search-btn'
									>
										Search
									</Button>
								</Control>
							</Field>
					    </Column>
					</Columns>	
				</form>	
				<Container>
					<Columns isGapless="true"  className='map-results'>
						<Column isSize='1/3'>
							<MapResults
								closeBy={this.state.closeBy}
							/>
						</Column>
						<Column isSize='2/3'>
							<MapContainer 
								location={this.state.location}
								distance={this.state.distance}
								closeBy={this.state.closeBy}
							/>	
						</Column>
					</Columns>	
				</Container>
			</Container>
		)
	}
}


export default SimpleSearch;