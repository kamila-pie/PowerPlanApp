import React from 'react';

import Login from "./components/login";
import Navbar from "./components/layout/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './scss/main.scss';
import Dashboard from "./components/dashboard/Dashboard";
import PlanDetalis from "./components/plans/PlanDetails";
import Register from "./components/register";
import CreatePlan from "./components/plans/CreatePlan";


const App = () => {
    return (
        <BrowserRouter>
            <>
                <div className="App App-header">
                    <Navbar/>
                    <Switch>
                        <Route exact path={'/'} component={Dashboard}/>
                        <Route path={'/plan/:id'} component={PlanDetalis}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/register'} component={Register}/>
                        <Route path={'/create'} component={CreatePlan}/>
                    </Switch>
                </div>
            </>
        </BrowserRouter>
    );
}

export default App;


