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
						src="assets/images/parked_cars.jpg"
						className="hero-img"
					/>
					<div id="hero-text">
						<Title isSize={1}>Never be looking.<br/> Always be parking.</Title>
					</div>
				</div>
			</div>
			<Container>
				<div id="home-intro">
					<Title isSize={2}>Sell your parking spot</Title>
					<p>Make extra moola with your parking spot.</p>
					<a className="" href="/login">Start Now</a>
				</div>
				<div id="home-select">
					<Title isSize={2}>Sell your spot in a snap!</Title>
					<Columns isCentered>
					    <Column isSize='1/3'>
					    	<div><span className="round-number">1</span></div>
					    	<Title isSize={5}  hasTextAlign='centered'>1. Fill out the form </Title>
					    </Column>
					   	<Column isSize='1/3'>
					   		<span className="round-number">2</span>
					   		<Title isSize={5}  hasTextAlign='centered'>2. Start renting </Title>
					    </Column>
					   	<Column isSize='1/3'>
					   		<span className="round-number">3</span>
					        <Title isSize={5}  hasTextAlign='centered'>3. Get Paid</Title>
					    </Column>
					</Columns>
				</div>
			</Container>
		</div>

	)
}


export default HomeContainer;
