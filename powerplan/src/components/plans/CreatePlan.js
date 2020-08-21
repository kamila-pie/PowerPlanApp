import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import AddExercise from "./AddExercise";
import ExerciseItem from "./ExerciseItem";

// { title: '',
//     date: '',
//     exercises: [
//
// ]
export class CreatePlan extends React.Component {
    constructor() {
        super();
        this.state = {
            isVisibleNewExcercise: false,
            exercises: [],
        }
    }

    handleChange = ({name, value}) => {
        // setExerciseInput(prevState => (
        //     {...prevState, [name]: value}
        // ))
    }

    showNewExcercise = () => {
        this.setState(prevState => ({...prevState, isVisibleNewExcercise: true}));
        // setExercise(prevState => (
        //     [...prevState, {
        //         name: exerciseInput.exercise,
        //         series: exerciseInput.series,
        //         repeat: exerciseInput.repeat,
        //         weighted: exerciseInput.weighted,
        //         brake: exerciseInput.brake
        //     }]
        // ))
        
    }

    addExercise = (item) => {
        const exercises = this.state.exercises;
        exercises.push(item);

        const link = `https://kamila-powerplanapp.firebaseio.com/excercise.json`;
        fetch(link,	{
            method:	'POST',
            body:	JSON.stringify(item)
        })

        this.setState(prevState => ({...prevState, isVisibleNewExcercise: false, exercises}));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.props.createPlan(state);
    }

    renderExcercises = () => {
        const { exercises } = this.state;

        return exercises.map(excercise => {
            return (
                <ExerciseItem
                    // key={excercise.id}
                    name={ excercise.name }
                    series={ excercise.series }
                    repeat={ excercise.repeat }
                    weight={ excercise.weight }
                    brake={ excercise.brake }
                />
            )
        });
    }

    render() {
        const { isVisibleNewExcercise } = this.state;

        return (
            <div className="container">
                <Form className="plan-form" onSubmit={e => this.handleSubmit(e)}>
                    <h2>Let's create new workout plan</h2>
                    <FormGroup className="createPlanWrapper">
                        <div className="planTitle">
                            <div className={"planTitleName"}>
                                <Label htmlFor={'title'}> title</Label>
                                <Input type={'text'} name={'title'} onChange={e => this.handleChange(e.target)}
                                       placeholder={'name your plan'}/>
                            </div>
                            <div className={"planTitleDate"}>
                                <Label htmlFor={'date'}>date</Label>
                                <Input type={'date'} name={'date'} onChange={e => this.handleChange(e.target)}/>
                            </div>
                        </div>
    
                        <div className="planExcercisesWrapper">

                            <button className={'addBtn'} onClick={this.showNewExcercise}>ADD EXCERCISE</button>
    
                            <AddExercise visible={ isVisibleNewExcercise }  addExercise={ item => this.addExercise(item) }/>
                            { this.renderExcercises() }    
                        </div>
                    </FormGroup>
                    <Button className={"btn"}>Create Plan</Button>
                </Form>
            </div>
        );
    }
}


export default CreatePlan;
