// import React, {useState} from 'react';
// import {Link} from "react-router-dom";
// import SignedInLinks from "./SignedInLinks";
// import SignedOutLinks from "./SignedOutLinks";
// import NewExercise from "../plans/NewExercise";
//
// const EnterPage = () => {
//
//     const [isVisable, setIsVisable] = useState(true);
//
//     const handleEnter = () => {
//         setIsVisable( prevState => !prevState);
//     }
//     return (
//         <>
//             {isVisable ?  <NewExercise addExercise={addExercise} toggleVisable={toggleVisable}  /> : null}
//             <div className="color-change-2x">
//                 <button onClick={handleEnter}>
//                     <h3 className={'enter '} >Enter</h3>
//                 </button>
//             </div>
//         </>
//     )
// }
// export default EnterPage;