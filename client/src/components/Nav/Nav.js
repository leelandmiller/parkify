import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarItem, NavbarLink, NavbarStart, NavbarMenu, 
	NavbarDropdown, Icon, NavbarBurger, NavbarDivider, NavbarEnd, Field,
	Control, Button } from "bloomer";
import logo from './parkifyLogo.jpg';
import { NavLink } from 'react-router-dom'
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
			<Navbar>
				<NavbarBrand>
				    <NavbarItem>
				        <img className="logo" src={logo} alt="parkifyLogo" style={{ marginRight: 5 }} />
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
				        <NavbarItem href='/'>Home</NavbarItem>
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

				        <NavbarItem href="https://github.com/leelandmiller/parkify" isHidden='touch'>
				            <Icon icon='github' />
				        </NavbarItem>
				        	<NavbarItem href='/login'>Login/SignUp</NavbarItem>
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




// import React from "react";
// import { Link } from "react-router-dom";

// const Navpills = () =>
//   <ul className="nav nav-tabs">
//     <li className={window.location.pathname === "/" ? "active" : ""}>
//       <Link to="/">Home</Link>
//     </li>
//     <li className={window.location.pathname === "/about" ? "active" : ""}>
//       <Link to="/about">About</Link>
//     </li>
//     <li className={window.location.pathname === "/blog" ? "active" : ""}>
//       <Link to="/blog">Blog</Link>
//     </li>
//     <li className={window.location.pathname === "/contact" ? "active" : ""}>
//       <Link to="/contact">Contact</Link>
//     </li>
//     <li
//       className={window.location.pathname === "/contact/learn" ? "active" : ""}
//     >
//       <Link to="/contact/learn">Learn</Link>
//     </li>
//   </ul>;

// export default Navpills;