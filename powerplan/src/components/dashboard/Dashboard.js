import React, {Component} from 'react';
import '../../scss/main.scss';
import Notifications from "./Notifications";
import PlanList from "../plans/PlanList";
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { plans } = this.props;

        //console.log(this.props);
        return (
            <div className={'dashboard container'}>
                <div className="row">
                    <div className="plans col s12 m6">
                        <PlanList plans={plans}/>
                    </div>
                    <div className="notifications col s12 m5 offset-m1">
                        <Notifications/>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        plans: state.plan.plans
    }
}

export default connect(mapStateToProps)(Dashboard);