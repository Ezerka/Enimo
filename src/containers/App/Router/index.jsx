import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainWrapper from '../MainWrapper';
import LogIn from '../../Account/LogIn/index'
import NotFound404 from '../../Account/404/index';
import Register from '../../Account/Register/index';
import WrappedRoutes from './WrappedRoutes';


const Router = () => (
    <MainWrapper>
        <main>
            <Switch>
                <Route exact path="/" component={LogIn}/>
                <Route path="/login" component={LogIn}/>
                <Route path="/register" component={Register}/>
                <Route path="/404" component={NotFound404}/>
                <Route path="/" component={WrappedRoutes}/>
            </Switch>
        </main>
    </MainWrapper>
);

export default Router;
