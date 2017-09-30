import React from "react";
import { Container, Title, Subtitle, Button, Column, Columns, Notification, Icon} from "bloomer";
import "./HomeContainer.css";

const HomeContainer = props => {
	return(
		<div>
			<div id="home-hero" className="">
				<div className="hero">
					<img 
						alt="parkify hero" 
						src="assets/images/hero-1.jpg"
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
					<a className="button is-primary" href="/login">Start Now</a>
				</div>
			</Container>
			<div id="home-select">
				<Container>
					<Title isSize={2}>Sell your spot in a snap!</Title>
					<Columns isCentered>
					    <Column isSize='1/3'>
					    	<div className="round-number">
						    	<span>
						    		<Icon isSize='large' icon='pencil-square-o' />
						    	</span>
					    	</div>
					    	<Title isSize={5}  hasTextAlign='centered'>1. Fill out the form </Title>
					    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar 
					    	nibh quis ex vehicula vulputate. Nullam suscipit vehicula sapien ut dapibus.</p>
					    </Column>
					   	<Column isSize='1/3'>
						   	<div className="round-number">
						   		<span className="round-number">
						   			<Icon isSize='large' icon='car' />
						   		</span>
						   	</div>
					   		<Title isSize={5}  hasTextAlign='centered'>2. Start renting </Title>
					   		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar 
					    	nibh quis ex vehicula vulputate. Nullam suscipit vehicula sapien ut dapibus.</p>
					    
					    </Column>
					   	<Column isSize='1/3'>
						   	<div className="round-number">
						   		<span className="round-number">
						   			<Icon isSize='large' icon='money' />
						   		</span>
						   	</div>
					        <Title isSize={5}  hasTextAlign='centered'>3. Get Paid</Title>
					        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar 
					    	nibh quis ex vehicula vulputate. Nullam suscipit vehicula sapien ut dapibus.</p>
					    
					    </Column>
					</Columns>
				</Container>
			</div>
		</div>

	)
}


export default HomeContainer;
