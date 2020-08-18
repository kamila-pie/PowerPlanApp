import React from 'react';
import { NavLink } from "react-router-dom";
import '../../scss/main.scss';

const SignedOutLinks = () => {
    return (
        <ul className={'navList'}>
            <li> <NavLink to={'/register'}> Signup </NavLink> </li>
            <li> <NavLink to={'/login'}> Login </NavLink> </li>
           </ul>
    )
}

export default SignedOutLinks;