import React, {useEffect, useState} from "react";
import {fireBase} from "../../config/firebaseConfig";

const PlanDetalis = () => {
    const [plans, setPlans] = useState([]);
    const db = fireBase.firestore();

    useEffect(() => {
        db.collection("plans").get()
            .then(snapshot => snapshot.docs.forEach(el => setPlans(prevState => ([...prevState, el.data()] ) )))
    }, []);


    return (
        <div className="planDetails">
            <div className="cardContent">
                <span className="cardTitle">Plan Details</span>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </div>
            <div> {plans.map((el, i) => <li key={i} className={'plansList'}>
                Title: {el.title} | Scheduled: {el.date} </li> )}
                {/*{plans.exercises.forEach( (el, i ) => <li key={i}>{el.exercise}</li> )}*/}

            </div>
            <div>
                {/*{plan.exercises.length > 0 ? (*/}
                {/*    <ul className={'exerciseList'}>*/}
                {/*        {*/}
                {/*            plan.exercises.map( (el, i) => (*/}
                {/*                <li key={i} className={'exerciseListEl'}>{el.exercise} series: {el.series}, repeats: {el.repeats}, weighted: {el.weighted}, brake: {el.brake}, duration: {el.duration}</li>))*/}
                {/*        }*/}
                {/*    </ul>*/}
                {/*): null }*/}
            </div>
        </div>

    )
}
export default PlanDetalis;