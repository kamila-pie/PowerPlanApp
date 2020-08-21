import React, { useState, useEffect } from 'react';
import { fireBase } from './firebaseConfig';
import { Redirect } from 'react-router-dom';
import history from './history';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const logOut = e => {
        e.preventDefault();
        if(user){
            fireBase.auth().signOut().then(()=>{
                return <Redirect to='/login' />
            })
        }
    }

    const register = (e, email, password) => {
        e.preventDefault();
        fireBase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('działa');
                history.push('/dashboard');
            })
            .catch(() => {
                console.log("Konto nie istnieje");
            })
    }

    useEffect(() => {
        fireBase.auth().onAuthStateChanged(setUser)
    }, []);

    return (
        <AuthContext.Provider value={{user, logOut, register}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;