import React, { useState, useEffect } from 'react';
import { fireBase } from './firebaseConfig';
import { Redirect } from 'react-router-dom';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const logOut = e => {
        e.preventDefault();
        if(user){
            fireBase.auth().signOut().then(()=>{
                return <Redirect to="/" />
            })
        }
    }
    useEffect(() => {
        fireBase.auth().onAuthStateChanged(setUser)
    }, []);
    return (
        <AuthContext.Provider value={{user, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;