import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {createPlan} from "../../store/actions/planActions";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


class CreatePlan extends Component {
    state = {
        title: '',
        date: '',
        exercise: '',
        series: null,
        repeat: null,
        weighted: null,
        brake: null

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
                <Form className="plan-form" onSubmit={this.handleSubmit}>
                    <h2>Let's create new workout plan</h2>
                    <FormGroup className="createPlanWrapper">
                        <div className="planTitle">
                            <div className={"planTitleName"}>
                                <Label htmlFor={'title'}> title</Label>
                                <Input type={'text'} id={'title'} onChange={this.handleChange}
                                       placeholder={'name your plan'}/>
                            </div>
                            <div className={"planTitleDate"}>
                                <Label htmlFor={'date'}>date</Label>
                                <Input type={'date'} id={'date'} onChange={this.handleChange}/>
                            </div>
                        </div>

                        <div className="planExcercisesWrapper">
                            <h3> Add exercises: </h3>
                            <div className="planCreator">
                                <Label htmlFor={'exercise'}>exercise</Label>
                                <Input type={'text'} id={'exercise'} onChange={this.handleChange}
                                       placeholder={'exercise'}/>
                            </div>
                            <div className="exercises">
                                <div className="main exercisesInfo">
                                    <div className="planCreatorExercises">
                                        <Label htmlFor={'series'}>series :</Label>
                                        <Input type={'number'} id={'series'} onChange={this.handleChange}
                                               placeholder={'qty'}/>
                                    </div>
                                    <div className="planCreatorExercises">
                                        <Label htmlFor={'repeat'}>repeats :</Label>
                                        <Input type={'number'} id={'repeat'} onChange={this.handleChange}
                                               placeholder={'qty'}/>
                                    </div>
                                </div>
                                <div className="additional exercisesInfo">
                                    <div className="planCreatorExercises">
                                        <Label htmlFor={'weighted'}>weighted [kg] : </Label>
                                        <Input type={'number'} id={'weighted'} onChange={this.handleChange}
                                               placeholder={'kg'}/>
                                    </div>
                                    <div className="planCreatorExercises">
                                        <Label htmlFor={'brake'}>brake [sec] : </Label>
                                        <Input type={'number'} id={'brake'} onChange={this.handleChange}
                                               placeholder={'time'}/>
                                    </div>
                                </div>
                            </div>
                            <button className={'addBtn'}>ADD EXCERCISE</button>
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
