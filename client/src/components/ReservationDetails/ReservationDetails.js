import React, { Component } from 'react';
import { Field, Label, Control, Input, Button, Message, MessageHeader, MessageBody, Select } from 'bloomer';
import API from '../../utils/API';
import moment from 'moment';

class ReservationDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            start_date: '',
            end_date: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }



    handleChange(event) {
        const val = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: val
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const reservation = {

        }
    }

    render() {
        return (
            <div className='reservationDetails'>
                <Message>
                    <MessageHeader>
                        Reserve This Spot
                    </MessageHeader>
                    <MessageBody>
                        <Field>
                            <Label>Start Date</Label>
                                <Select>
                                    {this.props.openDays.map(openDay => {
                                        // console.log(openDay)
                                        return (<option>{moment(openDay).format('dddd, MMMM Do YYYY')}</option>)
                                    })}
                                </Select>
                        </Field>
                        <Field>
                            <Label>End Date</Label>
                            <Control>
                                <Input type='text' name='model' value={this.state.end_date} placeholder='End Date' onChange={this.handleChange}/>
                            </Control>
                        </Field>
                        <Button>
                            Reserve
                        </Button>
                    </MessageBody>
                </Message>
            </div>
        );
    }
}

export default ReservationDetails;
