import React, {useContext} from 'react';
import {AuthContext} from "../../config/context";
import {fireBase} from "../../config/firebaseConfig";

const Notifications = () => {
    const {user, plan} = useContext(AuthContext);
    const db = fireBase.firestore();

    const userName = user.email;
    const name = userName.substring(0, userName.lastIndexOf("@"));

    return (
        <div className={'notifications'}>
            <h5>Notifications</h5>
            <p> Hello <span className={'userName'}>{name}</span> ! Are you ready to create new plan!</p>
        </div>
    )
}

export default Notifications;