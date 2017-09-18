import React, { Component } from "react";
import { Container, Field, Label, Control, Input, Icon, Help, Select, Button, Column, Columns} from "bloomer";
import "./SimpleSearch.css";

export class SimpleSearch extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}
	}

	render() { 
		return (
			<Container style={{ marginBottom: 20 }}>
				<form>
					<Label>Search Available Parking Spots</Label>
					<Columns>
					    <Column isSize='3/4'>
							<Field>
								<Control hasIcons>
								<Input isColor='success' placeholder='Search by zip code or city and state'/>
								<Icon isSize='small' isAlign='left'>
								    <span className="fa fa-map-marker" aria-hidden="true" />
								</Icon>
								</Control>
							</Field>
					    </Column>
					    <Column isSize='12'>
							<Field>
								<Control>
								<Select>
								    <option>Hourly</option>
								    <option>Daily</option>
								</Select>
								</Control>
							</Field>
					    </Column>
					    <Column isSize='2'>
							<Field>
								<Control>
									<Button isColor='primary'>
										Search
									</Button>
								</Control>
							</Field>
					    </Column>
					</Columns>	
				</form>		
			</Container>
		)
	}
}


export default SimpleSearch;