import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../Layout/index';
import Wrapper from '../App/Wrapper'

import Home from '../HomeDashboard/index'
import Machines from '../MachinesDashboard/index'
import Solar from '../SolarDashboard/index'
import Usage from '../UsageDashboard/index'
import Login from '../LogIn/index'
import Settings from '../SettingsPage/index'
import History from '../HistoryPage/index'

const wrappedRoutes = () => (
    <div>
        <Layout/>
        <div className="container__wrap">
            <Route exact path="/home" component={Home}/>
            <Route exact path="/machines" component={Machines}/>
            <Route exact path="/usage" component={Usage}/>
            <Route exact path="/solar" component={Solar}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/history" component={History}/>
        </div>
    </div>
);

const Router = () => (
    <Wrapper>
        <main>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route path="/" component={wrappedRoutes}/>
            </Switch>
        </main>
    </Wrapper>
);

export default Router;