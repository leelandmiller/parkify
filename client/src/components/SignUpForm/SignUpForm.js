import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Icon, Field, Label, Control, Input, Button } from "bloomer";
import "./SignUpForm.css";
import API from '../../utils/API';



class SignUpForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPass: ''
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

        //TODO: check if passwords match before adding user

        API.addNewUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }).then(newUser => {
            console.log(newUser);
            this.props.history.push('/account')
        });
    }


    render() {
        return (
            <form className="form">
                <Field>
                    <Label>
                        Name
                    </Label>
                <Control>
                    <Input type="text" placeholder='Full Name' name='name' value={this.state.name} onChange={this.handleChange} />
                </Control>
                </Field>
                <Field>
                    <Label>
                        Email
                    </Label>
                <Control>
                    <Input type="email" placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} />
                </Control>
                </Field>

                <Field>
                    <Label>
                        Password
                    </Label>
                <Control hasIcons>
                    <Input type='password' name='password' isColor='success' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                        <Icon isSize='small' isAlign='left'>
                            <span className="fa fa-user" aria-hidden="true" />
                        </Icon>
                </Control>
                </Field>
                <Field>
                    <Label>
                        Repeat Password
                    </Label>
                <Control hasIcons>
                    <Input type='password' name='confirmPass' isColor='success' placeholder='Repeat Password' value={this.state.confirmPass} onChange={this.handleChange} />
                        <Icon isSize='small' isAlign='left'>
                            <span className="fa fa-user" aria-hidden="true" />
                        </Icon>
                </Control>
                </Field>
               <Field isGrouped>
                  <Control>
                     <Input type="file"/>
                  </Control>
               </Field>
                <Field isGrouped>
                    <Control>
                        {this.state.password === this.state.confirmPass
                            && (this.state.confirmPass !== '' && this.state.password !== '')
                            && this.state.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^&+=*.\-_]){3,}$/)
                            && this.state.email.match(/^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,6}?\.[a-zA-Z]{2,6}$/)?
                            <Button isColor='primary' onClick={this.handleFormSubmit}>Submit</Button>
                            :<Button disabled  isColor='primary'>Submit</Button>}
                        {}
                    </Control>
                    <Control>
                       <Button isColor='primary' className="btn btn-3">Cancel</Button>
                    </Control>
                </Field>
            </form>
        )
    }
}

export default withRouter(SignUpForm);
