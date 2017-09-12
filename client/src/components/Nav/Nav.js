import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarItem, NavbarLink, NavbarStart, NavbarMenu,
	NavbarDropdown, brand, Icon, NavbarBurger, NavbarDivider, NavbarEnd, Field,
	Control, Button} from "bloomer";
import "./Nav.css";

class Nav extends Component {

    constructor() {

      super();

      this.state = {
        isActive: false
      };

    }

    render() {

		return (
			<Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
				<NavbarBrand>
				    <NavbarItem>
				        <img alt="parkify logo" style={{ marginRight: 5 }} />
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
				        <NavbarItem href='#/'>Home</NavbarItem>
				        <NavbarItem hasDropdown isHoverable>
				            <NavbarLink href='#/documentation'>Documentation</NavbarLink>
				            <NavbarDropdown>
				                <NavbarItem href='#'>One A</NavbarItem>
				                <NavbarItem href='#'>Two B</NavbarItem>
				                <NavbarDivider />
				                <NavbarItem href='#'>Two A</NavbarItem>
				            </NavbarDropdown>
				        </NavbarItem>
				    </NavbarStart>
				    <NavbarEnd>
				        <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden='touch'>
				            <Icon icon='github' />
				        </NavbarItem>
				        <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
				            <Icon icon='twitter' style={{ color: '#55acee' }} />
				        </NavbarItem>
				        <NavbarItem>
				            <Field isGrouped>
				                <Control>
				                    <Button id="log-in" href="/auth/google">
				                        <span>Sign in test</span>
				                    </Button>
				                </Control>
				            </Field>
				        </NavbarItem>
				    </NavbarEnd>
				</NavbarMenu>
			</Navbar>
		)
    }

}

export default Nav;
