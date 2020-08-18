import React from "react";

const PlanDetalis = (props) => {
    //const id = props.match.params.id;
    return (
        <div className="planDetails">
            <div className="cardContent">
                <span className="cardTitle">Plan Title</span>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.    </p>
            </div>
            <div className="cardAction">
                <div>created by superUser</div>
                <div>Date: 18.08.2020</div>
            </div>
        </div>

    )
}
export default PlanDetalis;