import {
    NAV_HOME,
    NAV_HOME_FULFILLED,
    NAV_HOME_REJECTED
} from '../constants.js';

export default function reducer(state = {
    viewID: 0
}, action) {
    switch (action.type) {
        case NAV_HOME: {
            return {
                ...state,
                viewID: 1
            }
        }

        /*case NAV_HOME_REJECTED: {
            return {
                ...state,
                requesting: false,
                viewID: 0,
                error: action.payload
            };
        }

        case NAV_HOME_FULFILLED: {
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
