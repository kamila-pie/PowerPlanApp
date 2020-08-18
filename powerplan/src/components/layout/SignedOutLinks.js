import React from 'react';
import { NavLink } from "react-router-dom";
import '../../scss/main.scss';

const SignedOutLinks = () => {
    return (
        <ul className={'navList'}>
            <li> <NavLink to={'/'}> New Plan </NavLink> </li>
            <li> <NavLink to={'/'}> Log Out </NavLink> </li>
            <li> <NavLink to={'/'} className={'avatar'}> <i className="fa fa-lg fa-user" aria-hidden="true"></i> </NavLink> </li>
        </ul>
    )
}

export default SignedOutLinks;