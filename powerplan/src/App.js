import React from 'react';

import Login from "./components/login";
import Navbar from "./components/layout/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './scss/main.scss';


const App = () => {
    return (
        <BrowserRouter>
            <>
                <div className="App App-header">
                    <Navbar/>
                    <Login/>
                </div>
                {/*<Switch>*/}
                    {/*<Route path={"/"} component={App}/>*/}
                {/*</Switch>*/}
            </>
        </BrowserRouter>
    );
}

export default App;


