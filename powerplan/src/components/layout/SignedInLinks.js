import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import '../../scss/main.scss';
import { AuthContext } from "../../config/context";


const SignedInLinks = () => {
    const { logOut } = useContext(AuthContext);

    return (
        <ul className={'navList'}>
            <li> <NavLink to={'/create'}> New Plan </NavLink> </li>
            <li> <div className={'logout'} onClick={e => logOut(e)} > Log Out </div> </li>
            <li> <NavLink to={'/'} className={'avatar'}> <i className="fa fa-lg fa-user" aria-hidden="true"></i> </NavLink> </li>
        </ul>
    )
}

export default SignedInLinks;