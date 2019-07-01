import {combineReducers, createStore} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {
    cryptoTableReducer,
    customizerReducer,
    newOrderTableReducer,
    sidebarReducer,
    themeReducer,
} from '../../redux/reducers/index';

const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form",
    theme: themeReducer,
    sidebar: sidebarReducer,
    cryptoTable: cryptoTableReducer,
    newOrder: newOrderTableReducer,
    customizer: customizerReducer,
});
const store = createStore(reducer);

export default store;
