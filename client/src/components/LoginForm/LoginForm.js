import React, { Component } from "react";
import { Icon, Field, Label, Control, Input, Button } from "bloomer";
import "./LoginForm.css";
import parkingPic from '../../parking.png';
import API from '../../utils/API';
import PassportSignIn from '../PassportSignIn';


class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            email: '',
            password: '',
        };

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

        const email = this.state.email;
        const password = this.state.password;

        API.loginUser(email, password).then(user => {
            API.getCurrentUser().then(currentUser => {
                this.props.setCurrentUser(currentUser);
                window.location = '/account';
            });
        });
    }

    render() {
        return (
			  <div>
                <form className="form">
                   <img className="login-form-img" alt={"parking"} src={parkingPic}/>
                    <Field>
                        <Label>
                            Email
                        </Label>
                        <Control hasIcons>
                            <Input id="email" type="email" placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} />
                            <Icon isSize='small' isAlign='left'>
                                <span className="fa fa-user" aria-hidden="true" />
                            </Icon>
                            <Icon isSize='small' isAlign='right'>

                            </Icon>
                        </Control>
                    </Field>

                    <Field>
                        <Label>
                            Password
                        </Label>
                    <Control hasIcons>
                        <Input id="password" type='password' name='password' isColor='success' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                            <Icon isSize='small' isAlign='left'>
                                <span className="fa fa-user-secret" aria-hidden="true" />
                            </Icon>
                        <Icon isSize='small' isAlign='right'>

                        </Icon>
                    </Control>
                </Field>
               <Field isGrouped>
                  <ul>
                  <li className="terms">By logging in, I agree to them. Parkify <a>terms and conditions.</a> If I'm a seller, I also agree to the <a>Operator Dashboard terms.</a></li>
                     </ul>
               </Field>
                    <Field isGrouped>
                        <Control>
                            <Button id="login-submit" className="btn btn-3" isColor='primary' onClick={this.handleFormSubmit}>Submit</Button>
                        </Control>
                    </Field>
                </form>
                <PassportSignIn />
			  </div>
        )
    }
}

export default LoginForm;
