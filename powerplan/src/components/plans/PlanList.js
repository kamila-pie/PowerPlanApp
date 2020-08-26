import React, {useEffect, useState} from 'react';
import PlanSummary from "./PlanSummary";
import {fireBase} from "../../config/firebaseConfig";


const PlanList = () => {
    const [plans, setPlans] = useState([]);

    const db = fireBase.firestore();

    useEffect(() => {
        db.collection("plans").get()
            .then(snapshot => snapshot.docs.forEach(el => setPlans(prevState => ([...prevState, el.data()] ) )))
    }, []);

    return (
        <ul> {plans.map((el, i) => <li key={i}>{el.title}</li>)}</ul>
    )
}

export default PlanList;