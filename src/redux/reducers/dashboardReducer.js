import {COLOR_TO_DARK, COLOR_TO_LIGHT,} from '../actions/dashboardActions';

const initialState = {
    className: 'theme-dark',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case COLOR_TO_DARK:
            return {className: 'theme-dark'};
        case COLOR_TO_LIGHT:
            return {className: 'theme-light'};
        default:
            return state;
    }
}
