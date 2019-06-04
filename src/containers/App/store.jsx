import {combineReducers, createStore} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {dashboardReducer, sidebarReducer} from '../../redux/reducers/index';

const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form",
    theme: dashboardReducer,
    sidebar: sidebarReducer,
});

const store = createStore(reducer);

export default store;
