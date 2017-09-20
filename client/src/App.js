import React, { Component } from 'react';
import Nav from './components/Nav';
import PageFooter from './components/PageFooter';
import Body from './components/Body';
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';


class App extends Component {
    render() {
    return (
            <div id='app-container'>
                <Nav /> 
                <Body/>
                <PageFooter />
            </div>           
        )
    }
}

export default App;
