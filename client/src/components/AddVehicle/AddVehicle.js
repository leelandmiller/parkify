import React, {Component} from 'react';
import { Field, Label, Control, Input, Button } from 'bloomer';
import API from '../../utils/API';

class AddVehicle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            make: '',
            model: '',
            color: '',
            license_plate: ''
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

        const vehicle = {
            make: this.state.make,
            model: this.state.model,
            color: this.state.color,
            license_plate: this.state.license_plate
        };

        API.addVehicle(vehicle).then(vehicleAdded => {
            window.location = '/account';
        });
    }

    render() {
        return (
            <form>
                <Field>
                    <Label>Make</Label>
                    <Control>
                        <Input type='text' name='make' value={this.state.make} placeholder='Make' onChange={this.handleChange}/>
                    </Control>
                </Field>
                <Field>
                    <Label>Model</Label>
                    <Control>
                        <Input type='text' name='model' value={this.state.model} placeholder='Model' onChange={this.handleChange}/>
                    </Control>
                </Field>
                <Field>
                    <Label>Color</Label>
                    <Control>
                        <Input type='text' name='color' value={this.state.color} placeholder='Color' onChange={this.handleChange}/>
                    </Control>
                </Field>
                <Field>
                    <Label>License Plate Number</Label>
                    <Control>
                        <Input type='text' name='license_plate' value={this.state.license_plate} placeholder='License Plate' onChange={this.handleChange}/>
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Button onClick={this.handleFormSubmit} isColor='primary'>Add Vehicle</Button>
                    </Control>
                </Field>
            </form>
        )
    }
}

export default AddVehicle;
