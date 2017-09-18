import React, { Component } from "react";
import { Icon, Field, Label, Control, Input, Button } from "bloomer";
import "./LoginForm.css";

class LoginForm extends Component {
    constructor() {
      super();
      this.state = {
        isActive: false
      };

    }

render() {
    return (
        <div className="form">
            <Field>
                <Label>
                    Username
            </Label>
            <Control hasIcons>
                <Input isColor='success' placeholder='username' value="" />
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
                    Password
                </Label>
            <Control hasIcons>
                <Input isColor='success' placeholder='Password' value="" />
                    <Icon isSize='small' isAlign='left'>
                        <span className="fa fa-user-secret" aria-hidden="true" />
                    </Icon>
                <Icon isSize='small' isAlign='right'>
                    <span className="fa fa-check" aria-hidden="true" />
                </Icon>
            </Control>
                {/*<Help isColor='success'>This username is available</Help>*/}
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

export default LoginForm;
