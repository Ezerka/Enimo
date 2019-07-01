import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import {hot} from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import Router from './Router';
import store from './store';
import ScrollToTop from './ScrollToTop';
import {config as i18nextConfig} from '../../translations';

i18next.init(i18nextConfig);

class App extends Component {
    state = {
        loading: true,
        loaded: false,
    };


    componentDidMount() {
        window.addEventListener('load', () => {
            this.setState({loading: false});
            setTimeout(() => this.setState({loaded: true}), 500);
        });
    }

    render() {
        const {loaded, loading} = this.state;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <I18nextProvider i18n={i18next}>
                        <ScrollToTop>
                            <Fragment>
                                {!loaded &&
                                <div className={`load${loading ? '' : ' loaded'}`}>
                                    <div className="load__icon-wrap">
                                        <svg className="load__icon">
                                            <path fill="#ff4831" enableBackground={true}
                                                  d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
                                        </svg>
                                    </div>
                                </div>
                                }
                                <div>
                                    <Router/>
                                </div>
                            </Fragment>
                        </ScrollToTop>
                    </I18nextProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default hot(module)(App);
