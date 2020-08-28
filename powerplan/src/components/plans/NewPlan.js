import React, {useState, useContext} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {fireBase} from "../../config/firebaseConfig";
import NewExercise from "./NewExercise";
import {AuthContext} from "../../config/context";

const NewPlan = () => {
    const {user} = useContext(AuthContext);

    const [plan, setPlan] = useState({
        title: false,
        date: false,
        exercises: []
    });
    const db = fireBase.firestore();
    const [isVisable, setIsVisable] = useState(false);

    const toggleVisable = () => {
        setIsVisable( prevState => !prevState);
    }

    const addExercise = (obj) => {
        setPlan(prevState => ({
            ...prevState,
            exercises: [...prevState.exercises, obj]}))
    }

    const handleChange = ({name, value}) => {
        setPlan(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('plans').add({...plan});
        clear();
    }
    const clear = () => {

    }

    return (
        <div className="container containerPlan ">
            <Form className="plan-form" onSubmit={e => handleSubmit(e)}>
                <h2>Let's create new workout plan</h2>
                <FormGroup className="createPlanWrapper">
                    <div className="planTitle">
                        <div className={"planTitleName"}>
                            <Label htmlFor={'title'}> title</Label>
                            <Input type={'text'} name={'title'} onChange={e => handleChange(e.target)}
                                   placeholder={'name your plan'} required/>
                        </div>
                        <div className={"planTitleDate"}>
                            <Label htmlFor={'date'}>date</Label>
                            <Input type={'date'} name={'date'} onChange={e => handleChange(e.target)}/>
                        </div>
                    </div>

                    <div className="planExcercisesWrapper">
                        <button className={'addBtn'} onClick={toggleVisable}>ADD EXCERCISE</button>
                        {isVisable ?  <NewExercise addExercise={addExercise} toggleVisable={toggleVisable}  /> : null}
                        {plan.exercises.length > 0 ? (
                            <ul className={'exerciseList'}>
                                {
                                    plan.exercises.map( (el, i) => (
                                        <li key={i} className={'exerciseListEl'}>{el.exercise} series: {el.series}, repeats: {el.repeats}, weighted: {el.weighted}, brake: {el.brake}, duration: {el.duration}</li>))
                                }
                            </ul>
                        ): null }
                    </div>
                </FormGroup>
                <Button className={"btn"}>Create Plan</Button>
            </Form>
        </div>

    )
}

export default NewPlan;

                                    // map ((el, i) => <li key={i} className={'listElement'}>
                                    // {el.exercise} {el.series} x {el.repeat}<br/> weight: {el.weight}kg brake: {el.brake}s duration: {el.duration}min</li> )}
// useEffect(() => {
//         db.collection("plans").get()
//             .then(snapshot => snapshot.Od.docChanges.forEach(el => console.log(el.doc.Xe.proto.mapValue.fields)))
//     }, []);