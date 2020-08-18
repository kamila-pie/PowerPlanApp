import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { createPlan } from "../../store/actions/planActions";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


class CreatePlan extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createPlan(this.state);
    }
    render() {
        return (
            <div className="container">
                <Form className="plan-form" onSubmit={this.handleSubmit} >
                    <h2>Let's create new plan</h2>
                    <div>
                        <Label htmlFor={'title'}>Title</Label>
                        <Input type={'text'} id={'title'} onChange={this.handleChange} placeholder={'name your plan'}/>
                    </div>
                    <FormGroup>
                        <Label>Plan Content</Label>
                        <textarea id="content" onChange={this.handleChange} placeholder={'content'}/>
                    </FormGroup>
                    <Button>Create Plan</Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        createPlan: (plan) => dispatch(createPlan(plan))
    }
}

export default connect(null, mapDispatchToProp)(CreatePlan);
