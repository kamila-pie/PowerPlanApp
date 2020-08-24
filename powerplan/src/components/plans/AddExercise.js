import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// { title: '',
//     date: '',
//     exercises: [
//
// ]

export class AddExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
            excercise: {},
            exercises: []
        } 
    }

    componentWillReceiveProps(props) {
        if (!props.visible) {

        }
        this.setState(prevState => (
            {
                ...prevState,
                visible: props.visible,
                excercise: !props.visible ? {} : this.state.excercise,
            }));
      }

    handleChange = ({name, value}) => {
        this.setState(prevState => (
            { ...prevState,
                excercise: {
                    ...prevState.excercise,
                    [name]: value,
                 }
            })
        )
        // setExerciseInput(prevState => (
        //     {...prevState, [name]: value }
        // ))
    }
    // addExercise = () => {
    //     console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    //     // setExercise(prevState => (
    //     //     [...prevState, {
    //     //         name: exerciseInput.exercise,
    //     //         series: exerciseInput.series,
    //     //         repeat: exerciseInput.repeat,
    //     //         weighted: exerciseInput.weighted,
    //     //         brake: exerciseInput.brake
    //     //     }]
    //     // ))

    // }
    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.createPlan(state);
    }

    render() {
        if (!this.state.visible) {
            return <div></div>;
        }

        return (
            <div className="containerAddExcercise">

                    <h2>Add new exercise to your plan</h2>
                    <div className="createPlanWrapper">
                        <div className="planExcercisesWrapper">
                            <div className="planCreator">
                                <Label htmlFor={'exercise'}>exercise</Label>
                                <Input type={'text'} name={'exercise'} onChange={e => this.handleChange(e.target)}
                                       placeholder={'exercise'}/>
                            </div>
                            <div className="exercises">
                                <div className="main exercisesInfo">
                                    <div className="planCreatorExercises">
                                        <Label htmlFor={'series'}>series :</Label>
                                        <Input type={'number'} name={'series'} onChange={e => this.handleChange(e.target)}
                                               placeholder={'qty'}/>
                                    </div>
                                    <div className="planCreatorExercises">
                                        <Label htmlFor={'repeat'}>repeats :</Label>
                                        <Input type={'number'} name={'repeat'} onChange={e => this.handleChange(e.target)}
                                               placeholder={'qty'}/>
                                    </div>
                                </div>
                                <div className="additional exercisesInfo">
                                    <div className="planCreatorExercises">
                                        <Label htmlFor={'weighted'}>weighted [kg] : </Label>
                                        <Input type={'number'} name={'weighted'} onChange={e => this.handleChange(e.target)}
                                               placeholder={'kg'}/>
                                    </div>
                                    <div className="planCreatorExercises">
                                        <Label htmlFor={'brake'}>brake [sec] : </Label>
                                        <Input type={'number'} name={'brake'} onChange={e => this.handleChange(e.target)}
                                               placeholder={'time'}/>
                                    </div>
                                    <div className="planCreatorExercises">
                                        <Label htmlFor={'duration'}>duration [min] : </Label>
                                        <Input type={'number'} name={'duration'} onChange={e => this.handleChange(e.target)}
                                               placeholder={'duration'}/>
                                    </div>
                                </div>
                            </div>
                            <button className={'addBtn'} onClick={() => this.props.addExercise(this.state.excercise)}> SAVE </button>
                        </div>
                    </div>

            </div>
        );
    }
};

export default AddExercise;
