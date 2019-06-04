import {MOBILE_SIDEBAR_VISIBILITY, WEB_SIDEBAR_VISIBILITY,} from '../actions/sidebarActions';

const initialState = {
    show: false,
    collapse: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case WEB_SIDEBAR_VISIBILITY:
            return {...state, collapse: !state.collapse};
        case MOBILE_SIDEBAR_VISIBILITY:
            return {...state, show: !state.show};
        default:
            return state;
    }
}
