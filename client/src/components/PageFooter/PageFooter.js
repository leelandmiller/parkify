import React, { Component } from "react";
import "./PageFooter.css";
import {Footer, Container, Content, Column, Columns, Icon} from 'bloomer';

class PageFooter extends Component {

    render() { 
		return (
			<Footer id='footer'>
			    <Container>
			        <Content>
			            <Columns>
			                <Column>
			                    <p>
			                        Made with <Icon hasTextColor='danger'><span className="fa fa-heart" aria-hidden="true" /></Icon>  by <a>Team MAuLL</a>
			                    </p>
			                </Column>
			            </Columns>
			            <Content isSize='small'>
			                <p><a target="https://github.com/leelandmiller/parkify">Fork Parkify</a> | Copyright 2017</p>
			            </Content>
			        </Content>
			    </Container>
			</Footer>
		)
    }

}

export default PageFooter;