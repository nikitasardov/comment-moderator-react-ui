import {
    NAV_HOME,

    CHANGE_VIEW,
    CHANGE_VIEW_FULFILLED,
    CHANGE_VIEW_REJECTED,

} from '../constants.js';

export function goHome() {
    return function(dispatch) {
        dispatch({type: NAV_HOME});
    };
}

export function changeView(viewID, data={}) {
    return function(dispatch) {
        dispatch({
            type: CHANGE_VIEW,
            payload: {
                viewID: viewID,
                data: data,
                hasData: false
            }
        });
    };
}