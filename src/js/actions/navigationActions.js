import {
    NAV_HOME,
    NAV_HOME_FULFILLED,
    NAV_HOME_REJECTED
} from '../constants.js';

export function goHome() {
    return function(dispatch) {
        dispatch({type: NAV_HOME});
    };
}
