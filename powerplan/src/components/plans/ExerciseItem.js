import React from 'react';

const ExerciseItem = (props) => {
    return (
        <div className="listWrapper">
            <ul>
                <li className={"listElement"}>
                    <div>
                        <div>{props.name}{`exercise: pull ups`}</div>
                        <div>{props.series}{props.repeat}{props.weight}{props.brake}{`3 x 15, weight: 5kg brake: 30sec`}</div>
                    </div>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </li>
            </ul>
        </div>
    )
}

export default ExerciseItem;