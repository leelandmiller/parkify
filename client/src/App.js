import React, { Component } from 'react';
import Nav from './components/Nav';
import PageFooter from './components/PageFooter';
import FormWrapper from './components/FormWrapper';
import Account from './components/Account';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

class App extends Component {
    render() {
    return (
            <div id='app-container'>
                <Nav />
               <Router>
                  <div>
							<Route path="/home" component={Home}/>
                     <Route exact path="/login" component={FormWrapper}/>
                     <Route exact path="/account" component={Account}/>
                     {/*<Route path="/search" component={Search}/>*/}
                  </div>
               </Router>
                <PageFooter />
            </div>           
        )
    }
}

export default App;
