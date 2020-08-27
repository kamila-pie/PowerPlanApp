import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import '../../scss/main.scss';
import { AuthContext } from "../../config/context";


const SignedInLinks = () => {
    const { logOut, user } = useContext(AuthContext);


    return (
        <ul className={'navList'}>
            <li> <NavLink to={'/home'}> Home </NavLink> </li>
            <li> <NavLink to={'/newPlan'}> New Plan </NavLink> </li>
            <li> <div className={'logout'} onClick={e => logOut(e)} > Log Out </div> </li>
            <li> <NavLink to={'/dashboard'} className={'avatar'}> <i className="fa fa-lg fa-user" aria-hidden="true"></i> {user.email}</NavLink> </li>
        </ul>
    )
}

export default SignedInLinks;