import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Layout from '../../../Layout/index';

import HomeDashboard from '../../../Dashboards/HomeDashboard/index';
import UsageDashboard from '../../../Dashboards/UsageDashboard/index';
import SolarDashboard from '../../../Dashboards/SolarDashboard/index';
import SettingsDashboard from '../../../Dashboards/SettingsDashboard/index';
import HistoryDashboard from '../../../Dashboards/HistoryDashboard/index';
import Appliance1 from "../../../Dashboards/AppliancesDashboard/Appliance1/index";
import Appliance2 from "../../../Dashboards/AppliancesDashboard/Appliance2/index";


const WrappedRoutes = () => (
    <div>
        <Layout/>
        <div className="container__wrap">
            <Switch>
                <Route path={"/Home"} component={HomeDashboard}/>
                <Route path={"/Usage"} component={UsageDashboard}/>
                <Route path={"/Solar"} component={SolarDashboard}/>
                <Route path={"/Settings"} component={SettingsDashboard}/>
                <Route path={"/History"} component={HistoryDashboard}/>
                <Route path={"/appliance/1"} component={Appliance1}/>
                <Route path={"/appliance/2"} component={Appliance2}/>
                <Redirect from={"*"} to={"/404"}/>
            </Switch>

        </div>
    </div>
);

export default (WrappedRoutes);
