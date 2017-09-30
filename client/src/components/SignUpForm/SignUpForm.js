import React, { Component } from "react";
import { Icon, Field, Control, Input, Button } from "bloomer";
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

        API.addNewUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }).then(newUser => {
            console.log(newUser);
            window.location = '/account';
        });
    }


    render() {
        return (
            <form className="form">
                <Field>
                <Control>
                   <Icon className={"sell"} isSize='medium' isAlign='left'>
                      <span className="fa fa-user fa-4x" aria-hidden="true" />
                   </Icon>
                    <Input type="text" placeholder='Full Name' name='name' value={this.state.name} onChange={this.handleChange} />
                </Control>
                </Field>
                <Field>
                <Control>
                   <Icon className={"sell"} isSize='medium' isAlign='left'>
                      <span className="fa fa-envelope-o fa-4x" aria-hidden="true" />
                   </Icon>
                    <Input type="email" placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} />
                </Control>
                </Field>
                <Field>
                <Control>
                   <Icon className={"sell"} isSize='medium' isAlign='left'>
                      <span className="fa fa-lock fa-4x" aria-hidden="true" />
                   </Icon>
                    <Input type='password' name='password' isColor='success' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                </Control>
                </Field>
                <Field>
                <Control>
                   <Icon className={"sell"} isSize='medium' isAlign='left'>
                      <span className="fa fa-lock fa-4x" aria-hidden="true" />
                   </Icon>
                    <Input type='password' name='confirmPass' isColor='success' placeholder='Repeat Password' value={this.state.confirmPass} onChange={this.handleChange} />
                </Control>
                </Field>
               <Field isGrouped>
                  <Control>
                     <Icon className={"sell"} isSize='medium' isAlign='left'>
                        <span className="fa fa-picture-o fa-4x" aria-hidden="true" />
                     </Icon>
                     <Input type="file"/>
                  </Control>
               </Field>
               <ul className={"tAndC"}>
                  <li>By creating an account, you're agreeing to the</li>
                  <li><a>SpotHero Terms and Conditions.</a></li>
                  <li className={"lastLine"}><a>Already have an account? Sign In</a></li>
               </ul>
                <Field isGrouped>
                    <Control>
                        {this.state.password === this.state.confirmPass
                            && (this.state.confirmPass !== '' && this.state.password !== '')
                            && this.state.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^&+=*.\-_]){3,}$/)
                            && this.state.email.match(/^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,6}?\.[a-zA-Z]{2,6}$/)?
                            <Button isColor='primary' className="btn btn-3" onClick={this.handleFormSubmit}>Submit</Button>
                            :<Button disabled className="btn btn-3" isColor='primary'>Submit</Button>}
                        {}
                    </Control>
                </Field>
            </form>
        )
    }
}

export default SignUpForm;
