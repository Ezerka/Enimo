import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Layout from '../Layout/index';

import NotFound404 from '../DefaultPage/404/index';

import Profile from '../Account/Profile/index';
import EmailConfirmation from '../Account/EmailConfimation/index';
import LockScreen from '../Account/LockScreen/index';
import LogIn from '../Account/LogIn/index';
import LogInPhoto from '../Account/log_in_photo/index';
import Register from '../Account/Register/index';
import RegisterPhoto from '../Account/RegisterPhoto/index';


import HomeDashboard from '../Dashboards/HomeDashboard/index';
import SolarDashboard from '../Dashboards/SolarDashboard/index';
import UsageDashboard from '../Dashboards/UsageDashboard/index';
import SettingsDashboard from '../Dashboards/SettingsDashboard/index';
import HistoryDashboard from '../Dashboards/HistoryDashboard/index';

import Appliance1 from '../Dashboards/AppliancesDashboard/Appliance1/index';
import Appliance2 from '../Dashboards/AppliancesDashboard/Appliance2/index';


const Account = () => (
    <Switch>
        <Route path="/account/profile" component={Profile}/>
        <Route path="/account/email_confirmation" component={EmailConfirmation}/>
    </Switch>
);

const Usage = () => (
    <Switch>
        <Route exact path="/usage" component={UsageDashboard}/>
    </Switch>
);

const Appliance = () => (
    <Switch>
        <Route path={"/appliance/1"} component={Appliance1}/>
        <Route path={"/appliance/2"} component={Appliance2}/>
    </Switch>
);

const wrappedRoutes = () => (
    <div>
        <Layout/>
        <div className="container__wrap">
            <Route path="/appliance" component={Appliance}/>
            <Route path="/home" component={HomeDashboard}/>
            <Route path="/usage" component={Usage}/>
            <Route path="/solar" component={SolarDashboard}/>
            <Route path="/settings" component={SettingsDashboard}/>
            <Route path="/history" component={HistoryDashboard}/>
            <Route path="/account" component={Account}/>
        </div>
    </div>
);

const Router = () => (
    <MainWrapper>
        <main>
            <Switch>
                <Route exact path="/" component={LogIn}/>
                <Route path="/404" component={NotFound404}/>
                <Route path="/lock_screen" component={LockScreen}/>
                <Route path="/log_in" component={LogIn}/>
                <Route path="/log_in_photo" component={LogInPhoto}/>
                <Route path="/register" component={Register}/>
                <Route path="/register_photo" component={RegisterPhoto}/>
                <Route path="/" component={wrappedRoutes}/>
            </Switch>
        </main>
    </MainWrapper>
);

export default Router;
