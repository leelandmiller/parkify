import React, { Component } from 'react';
import { Field, Label, Button, Message, MessageHeader, MessageBody, Select } from 'bloomer';
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
                                <Select onChange={this.props.changeEndDate}>
                                    {this.props.openDays.map((openDay, i) => {
                                        // console.log(openDay)
                                        return (<option key={`option-key-${i}`}>{moment(openDay).format('dddd, MMMM Do YYYY')}</option>)
                                    })}
                                </Select>
                        </Field>
                        <Field>
                            <Label>End Date</Label>
                            <span>{this.props.endDate}</span>
                        </Field>
                        <Button onClick={this.props.handleFormSubmit}>
                            Reserve
                        </Button>
                    </MessageBody>
                </Message>
            </div>
        );
    }
}

export default ReservationDetails;
