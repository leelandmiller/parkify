import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarItem, NavbarStart, NavbarMenu, Icon, NavbarBurger, NavbarEnd,} from "bloomer";
import logo from './parkifyLogo.png';
import "./Nav.css";
import API from '../../utils/API';


class Nav extends Component {

    constructor(props) {
		super(props);

		this.state = {
			isActive: false,
		};
    }

    render() {

		return (
			<Navbar>
				<NavbarBrand>
				    <NavbarItem>
				        <NavbarItem href='/'><img className="logo" src={logo} alt="parkifyLogo" style={{ marginRight: 5 }} /></NavbarItem>
				    </NavbarItem>
				    <NavbarItem isHidden='desktop'>
				        <Icon icon='github' />
				    </NavbarItem>
				    <NavbarItem isHidden='desktop'>
				        <Icon icon='twitter' style={{ color: '#55acee' }} />
				    </NavbarItem>
				    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
				</NavbarBrand>
				<NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
				    <NavbarStart>
						<NavbarItem href='/search'>Find a Spot</NavbarItem>
						<NavbarItem href='/'>Sell a Spot</NavbarItem>
				    </NavbarStart>
				    <NavbarEnd>
				        <NavbarItem href="https://github.com/leelandmiller/parkify" isHidden='touch'>
				            <Icon icon='github' />
				        </NavbarItem>
				        	{this.props.isLoggedIn ?
								<NavbarItem href='/account'>Account</NavbarItem> :
								<NavbarItem href='/login'>Login/SignUp</NavbarItem>
							}
							{ this.props.isLoggedIn && <NavbarItem href='/auth/logout'>Logout</NavbarItem> }
				    </NavbarEnd>
				</NavbarMenu>
			</Navbar>
		)
    }
}

export default Nav;
