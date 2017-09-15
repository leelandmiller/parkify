import React, { Component } from "react";
import { Icon, Field, Label, Control, Input, Help, Button } from "bloomer";
import LoginTabs from "../LoginTabs";
import "./SignUpForm.css";

class SignUpForm extends Component {
    constructor() {
      super();

    }

render() {
    return (
        <div>
            <Field>
                <Label>
                    Name
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
                <Input isColor='success' placeholder='Password' value='bloomer' />
                    <Icon isSize='small' isAlign='left'>
                        <span className="fa fa-user" aria-hidden="true" />
                    </Icon>
                <Icon isSize='small' isAlign='right'>
                    <span className="fa fa-check" aria-hidden="true" />
                </Icon>
            </Control>
                <Help isColor='success'>This username is available</Help>
            </Field>
            <Field>
                <Label>
                    Repeat Password
                </Label>
            <Control hasIcons>
                <Input isColor='success' placeholder='Password' value='bloomer' />
                    <Icon isSize='small' isAlign='left'>
                        <span className="fa fa-user" aria-hidden="true" />
                    </Icon>
                <Icon isSize='small' isAlign='right'>
                    <span className="fa fa-check" aria-hidden="true" />
                </Icon>
            </Control>
                <Help isColor='success'>This username is available</Help>
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