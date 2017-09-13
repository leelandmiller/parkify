import React, { Component } from 'react';
import Nav from './components/nav';
import PageFooter from './components/PageFooter';
import Body from './components/Body';
import Account from './components/Account';
import Form from './components/login/loginForm';
import Login from './components/login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Body />
        <Account />
        <Login />
        <Form />
        <PageFooter /> 
      </div>
    );
  }
}

export default App;
