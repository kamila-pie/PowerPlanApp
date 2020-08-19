import React, { useContext } from 'react';
import '../../scss/main.scss';
import Notifications from "./Notifications";
import PlanList from "../plans/PlanList";
import {AuthContext} from "../../config/context";


const Dashboard = ({plans}) => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    //console.log(this.props);
    return (
        <div className={'dashboard container'}>
            <div className="row">
                <div className="plans col s12 m6">
                    <h3> Created Workout Plans</h3>
                    <PlanList plans={plans}/>
                </div>
                <div className="notifications col s12 m5 offset-m1">
                    <Notifications/>
                </div>

            </div>
        </div>
    )

}

export default Dashboard;