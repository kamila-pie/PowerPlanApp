import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import '../../scss/main.scss';
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {AuthContext} from "../../config/context";



const Navbar = () => {
    const {user} = useContext(AuthContext);

    return (
        <nav className="navWrapper">

            <div className="containerNav">
                <Link to={'/'} className={'brandLogo'}>
                    <span>Power</span>Plan</Link>
                {
                    user ? (<SignedInLinks/> ) : (  <SignedOutLinks/>)
                }

            </div>
        </nav>
    )
}

export default Navbar;