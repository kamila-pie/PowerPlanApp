import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// { title: '',
//     date: '',
//     exercises: [
//
// ]

const AddExercise = () => {

    const [plan, setPlan] = useState( [] );
    const [exercise, setExercise] = useState( [] );
    const [exerciseInput, setExerciseInput] = useState({} );

    const handleChange = ({name, value}) => {
        setExerciseInput(prevState => (
            {...prevState, [name]: value }
        ))
    }
    const addExercise = () => {
        setExercise(prevState => (
            [...prevState, {
                name: exerciseInput.exercise,
                series: exerciseInput.series,
                repeat: exerciseInput.repeat,
                weighted: exerciseInput.weighted,
                brake: exerciseInput.brake
            }]
        ))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // this.props.createPlan(state);
    }
    return (
        <div className="containerAddExcercise">
            {/*<Form className="plan-form" onSubmit={e => handleSubmit(e)}>*/}
                <h2>Add new exercise to your plan</h2>
                <div className="createPlanWrapper">
                    <div className="planExcercisesWrapper">
                        <div className="planCreator">
                            <Label htmlFor={'exercise'}>exercise</Label>
                            <Input type={'text'} name={'exercise'} onChange={e => handleChange(e.target)}
                                   placeholder={'exercise'}/>
                        </div>
                        <div className="exercises">
                            <div className="main exercisesInfo">
                                <div className="planCreatorExercises">
                                    <Label htmlFor={'series'}>series :</Label>
                                    <Input type={'number'} name={'series'} onChange={e => handleChange(e.target)}
                                           placeholder={'qty'}/>
                                </div>
                                <div className="planCreatorExercises">
                                    <Label htmlFor={'repeat'}>repeats :</Label>
                                    <Input type={'number'} name={'repeat'} onChange={e => handleChange(e.target)}
                                           placeholder={'qty'}/>
                                </div>
                            </div>
                            <div className="additional exercisesInfo">
                                <div className="planCreatorExercises">
                                    <Label htmlFor={'weighted'}>weighted [kg] : </Label>
                                    <Input type={'number'} name={'weighted'} onChange={e => handleChange(e.target)}
                                           placeholder={'kg'}/>
                                </div>
                                <div className="planCreatorExercises">
                                    <Label htmlFor={'brake'}>brake [sec] : </Label>
                                    <Input type={'number'} name={'brake'} onChange={e => handleChange(e.target)}
                                           placeholder={'time'}/>
                                </div>
                            </div>
                        </div>
                        <button className={'addBtn'} onClick={addExercise}> SAVE </button>
                    </div>
                </div>
            {/*</Form>*/}
        </div>
    );
}

export default AddExercise;
