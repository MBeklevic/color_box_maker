import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Input, Button, FormGroup, Form, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/NewBoxForm.css"


class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { width: "", height: "", color: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let newBox = { ...this.state, id: uuidv4() }
        this.props.addBox(newBox);
        this.setState({ width: "", height: "", color: "" })
    }
    render() {
        return (
            <Form className='NewBoxForm' onSubmit={this.handleSubmit}>
                <FormGroup >
                    <Label htmlFor='width'>Width</Label>
                    <Input
                        id='width'
                        name='width'
                        type="number"
                        disabled
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='height'>Height</Label>
                    <Input
                        id='height'
                        name='height'
                        type="number"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='color'>Color</Label>
                    <Input
                        id='color'
                        name='color'
                        type="text"
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button>
                    Add Color
                </Button>

            </Form>
        )
    }
}


export default NewBoxForm;