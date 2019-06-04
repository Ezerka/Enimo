import React, {Fragment} from "react";
import {hot} from "react-hot-loader";
import {Provider} from 'react-redux';
import store from './store';
import Router from './Router'
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/index.scss';


class App extends React.Component {
    state = {
        loading: true,
        loaded: false
    };
    
    componentDidMount() {
        window.addEventListener('load', () => {
            this.setState({loading: false});
            setTimeout(() => this.setState({loaded: true}), 4000)
        })
    }
    
    render() {
        const {loaded, loading} = this.state;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Fragment>
                        {!loaded && (<div className={`load${loading ? '' : ' loaded'}`}>
                            <div className="load__icon-wrap">
                                <svg className="load__icon">
                                    <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
                                </svg>
                            </div>
                        </div>)
                        }
                        <div>
                            <Router/>
                        </div>
                    </Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default hot(module)(App) //HMR(Module can be updated without the need for full refresh)