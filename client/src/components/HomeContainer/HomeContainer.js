import React from "react";
import { Container, Title, Subtitle, Button, Column, Columns, Notification} from "bloomer";
import "./HomeContainer.css";

const HomeContainer = props => {
	return(
		<div>
			<div id="home-hero" className="">
				<div className="hero">
					<img 
						alt="parkify hero" 
						src="assets/images/parkify-hero.png"
						className="hero-img"
					></img>
					<div id="hero-text">
						<Title isSize={1}>Never be looking.<br/> Always be parking.</Title>
					</div>
				</div>
			</div>
			<Container>
				<div id="home-intro">
					<Title isSize={2}>Rent your parking spot</Title>
					<p>Sell your parking spot or rent one from a verified owner.</p>
					<Button isColor='success'>Start Now</Button>
				</div>
				<div id="home-select">
					<Title isSize={2}>Sell your spot in a snap!</Title>
					<Columns isCentered>
					    <Column isSize='1/3'>
					    	<Notification isColor='success' hasTextAlign='centered'> 1. Fill out the form </Notification>
					    </Column>
					   	<Column isSize='1/3'>
					        <Notification isColor='success' hasTextAlign='centered'> 2. Start renting </Notification>
					    </Column>
					   	<Column isSize='1/3'>
					        <Notification isColor='success' hasTextAlign='centered'> 3. Get Paid </Notification>
					    </Column>
					</Columns>
				</div>
			</Container>
		</div>

	)
}


export default HomeContainer;