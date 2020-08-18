import React from 'react';
import PlanSummary from "./PlanSummary";


const PlanList = ({plans}) => {
    return (
        <div className="planList">
            { plans && plans.map(plan => {
                return (
                    <PlanSummary plan={plan} key={plan.id} />
                )
            })}
        </div>
    )
}

export default PlanList;