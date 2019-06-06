import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../Layout/index';
import Helloworld from '../page1/index';
import HelloSecondPage from '../page2/index'
import Home from '../HomeDashboard/index'
import MainWrapper from './Wrapper';

const wrappedRoutes = () => (
    <div>
        <Layout/>
        <div className="container__wrap">
            <Route exact path="/" component={Home}/>
            <Route exact path="/one" component={Helloworld}/>
            <Route exact path="/two" component={HelloSecondPage}/>
        </div>
    </div>
);

const Router = () => (
    <MainWrapper>
        <main>
            <Switch>
                <Route path="/" component={wrappedRoutes}/>
            </Switch>
        </main>
    </MainWrapper>
);

export default Router;
