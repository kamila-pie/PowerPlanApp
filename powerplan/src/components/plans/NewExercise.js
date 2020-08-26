import React, {useState} from 'react';
import {fireBase} from "../../config/firebaseConfig";
import {Input, Label} from "reactstrap";


const NewExercise = ({addExercise, toggleVisable}) => {
    const [exercise, setExercise] = useState({
        exercise: '',
        series: null,
        repeats: null,
        weighted: null,
        brake: null,
        duration: null
    });
    const db  = fireBase.firestore();

    const handleChange = ({name, value}) => {
        setExercise(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addExercise(exercise);
        db.collection('exercises').add({...exercise });
        toggleVisable();
    }


    return (
        <div className="containerAddExcercise">

            <h2>Add new exercise to your plan</h2>
            <div className="createPlanWrapper">
                <div className="addExcercisesWrapper">
                    <div className="planCreator">
                        <Label htmlFor={'exercise'}>exercise:</Label>
                        <Input type={'text'} name={'exercise'} onChange={e => handleChange(e.target)}
                               placeholder={'exercise'} required/>
                    </div>
                    <div className="planCreator planCreatorExercises">
                        <Label htmlFor={'series'}>series:</Label>
                        <Input type={'number'} name={'series'} onChange={e => handleChange(e.target)}
                               placeholder={'qty'}/>
                    </div>
                    <div className="planCreator planCreatorExercises">
                        <Label htmlFor={'repeat'}>repeats:</Label>
                        <Input type={'number'} name={'repeat'} onChange={e => handleChange(e.target)}
                               placeholder={'qty'}/>
                    </div>
                </div>
                <div className="exercises">
                    <div className="main exercisesInfo">
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
                            <div className="planCreatorExercises">
                                <Label htmlFor={'duration'}>duration [min] : </Label>
                                <Input type={'number'} name={'duration'} onChange={e => handleChange(e.target)}
                                       placeholder={'duration'}/>
                            </div>
                        </div>
                    </div>
                    <button className={'addBtn'} onClick={e => handleSubmit(e)}> SAVE </button>
                </div>
            </div>

        </div>
    )
}

export default NewExercise;