import React from 'react';

const PlanSummary = ({plan}) => {
    return (
        <div className="planSummary">
            <div className="cardContent">
                <span className="cardTitle">{plan.title}</span>
                <p>Posted by User</p>
                <p>Date: Thuersday 18.08.2020</p>
            </div>
        </div>
    )
}
export default PlanSummary;