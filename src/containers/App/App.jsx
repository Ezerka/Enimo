import React from "react";
import {hot} from "react-hot-loader";
import {Provider} from 'react-redux';
import store from './store';
import Router from './Router'
import {BrowserRouter} from "react-router-dom";
import '../../scss/index.scss';


class App extends React.Component {
    
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Router/>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default hot(module)(App) //HMR(Module can be updated without the need for full refresh)