import React from 'react';
import '../../scss/main.scss';
import Notifications from "./Notifications";
import PlanList from "../plans/PlanList";



const Dashboard = () => {
    return (
        <div className={'dashboard container'}>
            <div className="row">
                <div className="plans col s12 m6">
                    <PlanList/>
                </div>
                <div className="notifications col s12 m5 offset-m1">
                    <Notifications/>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;