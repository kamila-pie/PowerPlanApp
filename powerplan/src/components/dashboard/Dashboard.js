import React, { useContext } from 'react';
import '../../scss/main.scss';
import Notifications from "./Notifications";
import PlanList from "../plans/PlanList";
import {AuthContext} from "../../config/context";
import Home from "./Home";
import PlanDetalis from "../plans/PlanDetails";


const Dashboard = ({plans}) => {
    // const {user, logOut, register} = useContext(AuthContext);
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <div className={'dashboard container'}>
            {user ? (
                <div className="rowNotivication swing-in-bottom-fwd">
                    <div className="notifications">
                        <Notifications/>
                    </div>
                    <div className="plans">
                        <h3> Created Workout Plans</h3>
                        <PlanList plans={plans}/>
                        {/*dodaj okno modalne z szczegółami z-index jest ok, dodawanie do kalendarza*/}
                        <PlanDetalis/>
                    </div>
            </div> ) : (<Home/>)}
        </div>
    )
}

export default Dashboard;