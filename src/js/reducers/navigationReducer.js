import {
    NAV_HOME,
    NAV_HOME_FULFILLED,
    NAV_HOME_REJECTED,

    CHANGE_VIEW,
    CHANGE_VIEW_FULFILLED,
    CHANGE_VIEW_REJECTED
} from '../constants.js';

export default function reducer(state = {
    view: {
        viewID: 1
    }
}, action) {
    switch (action.type) {
        case NAV_HOME: {
            return {
                ...state,
                view: {
                    viewID: 1
                }
            }
        }

        case CHANGE_VIEW: {
            return {
                ...state,
                view: action.payload
            };
        }

        /*case NAV_HOME_FULFILLED: {
            return {
                ...state,
                requesting: false,
                haveData: true,
                articles: action.payload,
                viewID: 1
            };
        }*/
    }

    return state;
}
