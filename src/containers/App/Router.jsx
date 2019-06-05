import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './Wrapper';

import Helloworld from '../page1/index';
import HelloSecondPage from '../page2/index'
import Home from '../Home/index'

const Pages = () => (
    <Switch>
        <Route path="/pages/one" component={Helloworld}/>
        <Route path="/pages/two" component={HelloSecondPage}/>
    
    </Switch>
);

const wrappedRoutes = () => (
    <div>
        <Layout/>
        <div className="container__wrap">
            <Route path="/pages" component={Pages}/>
        </div>
    </div>
);
const HomeDashboard = () => (
    <div>
        <Layout/>
        <div className={"container__wrap"}>
            <Route exact path="/" component={Home}/>
        </div>
    </div>
);

const Router = () => (
    <MainWrapper>
        <main>
            <Switch>
                <Route exact path="/" component={HomeDashboard}/>
                <Route path="/" component={wrappedRoutes}/>
            </Switch>
        </main>
    </MainWrapper>
);

export default Router;
