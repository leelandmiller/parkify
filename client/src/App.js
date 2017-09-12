import React, { Component } from 'react';
import Nav from './components/Nav';
import PageFooter from './components/PageFooter';
import Body from './components/Body';
import Account from './components/Account';
import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='app-container'>
        <Nav /> 
        <Body />
        <Account />
        <Login />
        <PageFooter />
      </div>
    );
  }
}

export default App;
