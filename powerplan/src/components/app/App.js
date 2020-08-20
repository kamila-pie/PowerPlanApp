import React from 'react';
import Login from "../auth/login";
import Navbar from "../layout/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import '../../scss/main.scss';
import Dashboard from "../dashboard/Dashboard";
import PlanDetalis from "../plans/PlanDetails";
import Register from "../auth/register";
import CreatePlan from "../plans/CreatePlan";
import {AuthContext} from "../../config/context";

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


