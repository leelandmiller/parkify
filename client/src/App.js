import React, { Component } from 'react';
import Nav from './components/Nav';
import PageFooter from './components/PageFooter';
import FormWrapper from './components/FormWrapper';
import HomeContainer from './components/HomeContainer';
import SimpleSearch from './components/SimpleSearch';
import Account from './components/Account';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

class App extends Component {
    render() {
    return (
            <div id='app-container'>
                <Nav />
               <Router>
                  <div>
                     <Route exact path="/" component={HomeContainer}/>
                     <Route exact path="/login" component={FormWrapper}/>
                     <Route exact path="/account" component={Account}/>
                     <Route exact path="/search" component={SimpleSearch}/>
                  </div>
               </Router>
                <PageFooter />
            </div>           
        )
    }
}

export default App;
