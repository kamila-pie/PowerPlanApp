import React from 'react';
import Login from "../auth/login";
import Navbar from "../layout/Navbar";
import {Router, Route, Switch} from 'react-router-dom'
import '../../scss/main.scss';
import Dashboard from "../dashboard/Dashboard";
import PlanDetalis from "../plans/PlanDetails";
import Register from "../auth/register";
import CreatePlan from "../plans/CreatePlan";
import history from '../../config/history';

const App = () => {
    return (
        <Router history={ history }>
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
        </Router>
    );
}

export default App;


