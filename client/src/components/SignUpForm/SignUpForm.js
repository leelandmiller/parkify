import React, { Component } from "react";
import { Icon, Field, Label, Control, Input, Button } from "bloomer";
import "./SignUpForm.css";

class SignUpForm extends Component {


render() {
    return (
        <div className="form">
            <Field>
                <Label>
                    Username
            </Label>
            <Control>
                <Input type="text" placeholder='Text Input' />
            </Control>
            </Field>

            <Field>
                <Label>
                    Password
                </Label>
            <Control hasIcons>
                <Input isColor='success' placeholder='Password' value='' />
                    <Icon isSize='small' isAlign='left'>
                        <span className="fa fa-user" aria-hidden="true" />
                    </Icon>
                <Icon isSize='small' isAlign='right'>
                    <span className="fa fa-check" aria-hidden="true" />
                </Icon>
            </Control>
            </Field>
            <Field>
                <Label>
                    Repeat Password
                </Label>
            <Control hasIcons>
                <Input isColor='success' placeholder='Repeat Password' value='' />
                    <Icon isSize='small' isAlign='left'>
                        <span className="fa fa-user" aria-hidden="true" />
                    </Icon>
                <Icon isSize='small' isAlign='right'>
                    <span className="fa fa-check" aria-hidden="true" />
                </Icon>
            </Control>
            </Field>
            <Field isGrouped>
                <Control>
                    <Button isColor='primary'>Submit</Button>
                </Control>
                <Control>
                    <Button isLink>Cancel</Button>
                </Control>
            </Field>
            </div>
        )
    }
}

export default SignUpForm;
