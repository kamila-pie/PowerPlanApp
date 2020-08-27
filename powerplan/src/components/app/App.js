import React from 'react';
import Login from "../auth/login";
import Navbar from "../layout/Navbar";
import {Router, Route, Switch} from 'react-router-dom'
import '../../scss/main.scss';
import Dashboard from "../dashboard/Dashboard";
import PlanDetalis from "../plans/PlanDetails";
import Register from "../auth/register";
import history from '../../config/history';
import Home from "../dashboard/Home";
import NewPlan from "../plans/NewPlan";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const App = () => {
    return (
        <Router history={ history }>
            <>
                <div className="App App-header">
                    <Navbar/>
                    <Switch>
                        <Route exact path={'/dashboard'} component={Dashboard}/>
                        <Route path={'/plan/:id'} component={PlanDetalis}/>
                        <Route path={'/home'} component={Home}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/register'} component={Register}/>
                        <Route path={'/newPlan'} component={NewPlan}/>
                    </Switch>
                </div>
            </>
        </Router>
    );
}

export default App;


