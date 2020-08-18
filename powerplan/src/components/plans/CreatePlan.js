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
                    <FormGroup className="createPlanWrapper">
                        <div className={"newPlanDetails"}>
                            <Label htmlFor={'title'}>Title</Label>
                            <Input type={'text'} id={'title'} onChange={this.handleChange} placeholder={'name your plan'}/>
                        </div>
                        <div className={"newPlanDetails"}>
                            <Label>Notes</Label>
                            <textarea id="content" onChange={this.handleChange} placeholder={'notes'}/>
                        </div>
                        <div className="newPlanDetails">
                             <div  className="planCreator">
                                 <Label htmlFor={'exercise'}>Exercise</Label>
                                 <Input type={'text'} id={'exercise'} onChange={this.handleChange} placeholder={'exercise'}/>
                             </div>

                             <div  className="planCreator">
                                 <Label htmlFor={'series'}>Series</Label>
                                 <Input type={'text'} id={'series'} onChange={this.handleChange} placeholder={'give me number'}/>
                             </div>
                             <div  className="planCreator">
                                 <Label htmlFor={'repeat'}>repeat</Label>
                                 <Input type={'text'} id={'repeat'} onChange={this.handleChange} placeholder={'give me number'}/>
                             </div>
                             <div  className="planCreator">
                                 <Label htmlFor={'weighted'}>weighted</Label>
                                 <Input type={'text'} id={'weighted'} onChange={this.handleChange} placeholder={'kg'}/>
                             </div>
                             <div  className="planCreator">
                                 <Label htmlFor={'brake'}>brake</Label>
                                 <Input type={'text'} id={'brake'} onChange={this.handleChange} placeholder={'time brake'}/>
                             </div>
                        </div>
                    </FormGroup>
                    <Button className={"btn"}>Create Plan</Button>
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
