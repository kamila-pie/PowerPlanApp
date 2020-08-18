import React from 'react';
import { NavLink } from "react-router-dom";
import '../../scss/main.scss';

const SignedInLinks = () => {
    return (
        <ul className={'navList'}>
            <li> <NavLink to={'/'}> Signup </NavLink> </li>
            <li> <NavLink to={'/'}> Login </NavLink> </li>
        </ul>
    )
}

export default SignedInLinks;