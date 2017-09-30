import React, { Component } from 'react';
import Nav from './components/Nav';
import PageFooter from './components/PageFooter';
import FormWrapper from './components/FormWrapper';
import HomeContainer from './components/HomeContainer';
import SimpleSearch from './components/SimpleSearch';
import Account from './components/Account';
import ReservationWrapper from "./components/ReservationWrapper";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddVehicle from './components/AddVehicle';
import API from './utils/API';
import FourohFour from "./components/FourohFour";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true,
            hasSpot: false,
            spot: {},
            currentUser: {},
            reservations: []
        }
        this.setCurrentUser = this.setCurrentUser.bind(this);
    }

    componentDidMount() {
        API.getCurrentUser().then(user => {

            if (user.data) {
                this.setCurrentUser(user.data);

                API.getUserSpots(user.data._id).then(spot => {
                    if (spot.data) {
                        this.setState({
                            hasSpot:true,
                            spot: spot.data
                        });
                    }
                });

    			API.getUserReservations(user.data._id).then(results => {
    				if (results.data) {
                        console.log(results.data)
                        this.setState({
                            reservations: results.data
                        })
                    }
    			})

            } else {
                this.setState({
                    isLoggedIn: false
                })
            }
        });
    }


    setCurrentUser(currentUser) {
        this.setState({
            isLoggedIn: true,
            currentUser
        });
    }

    render() {
        return (
            <div id='app-container'>
                <Nav isLoggedIn={this.state.isLoggedIn} />
                <Router>
                    <div>
                        <Route exact path="/" component={HomeContainer}/>
                        <Route exact path="/login" render={() => <FormWrapper setCurrentUser={this.setCurrentUser}/>}/>
                        <Route exact path="/account" render={() => <Account {...this.state}/>}/>
                        <Route exact path="/search" component={SimpleSearch}/>
                        <Route exact path="/reserve/*" component={ReservationWrapper}/>
                        <Route exact path="/add/vehicle" component={AddVehicle}/>
                        <Route exact path="/404" component={FourohFour}/>
                    </div>
                </Router>
                <PageFooter />
            </div>
        )
    }
}

export default App;
