import React, { Component } from "react";
import { Icon, Field, Label, Control, Input, Button } from "bloomer";
import "./LoginForm.css";
import parkingPic from '../../parking.png';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            email: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        const val = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: val
        });
    }

    render() {
        return (
           
            <form className="form">
               <img alt={"parking"} src={parkingPic}/>
                <Field>
                    <Label>
                        Email
                    </Label>
                    <Control hasIcons>
                        <Input type="email" placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} />
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
                    <Input type='password' name='password' isColor='success' placeholder='Password' value={this.state.password} onChange={this.handleChange} />
                        <Icon isSize='small' isAlign='left'>
                            <span className="fa fa-user-secret" aria-hidden="true" />
                        </Icon>
                    <Icon isSize='small' isAlign='right'>
                    
                    </Icon>
                </Control>
                <Control>
                    <Button isLink>Cancel</Button>
                </Control>
            </Field>
           <Field isGrouped>
              <ul>
              <li className="terms">By logging in, I agree to them. Parkify <a>terms and conditions.</a> If I'm a seller, I also agree to the <a>Operator Dashboard terms.</a></li>
                 </ul>
           </Field>
                <Field isGrouped>
                    <Control>
                        <Button className="btn btn-3" isColor='primary'>Submit</Button>
                    </Control>
                    <Control>
                       <Button isColor='primary' className="btn btn-3">Cancel</Button>
                    </Control>
                </Field>
               
            </form>

        )
    }
}

export default LoginForm;
