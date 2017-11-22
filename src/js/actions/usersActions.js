import API from '../libs/API';
import { PUT_NAME, PUT_NAME_REJECTED, PUT_NAME_FULFILLED } from '../constants.js';

export function putUser(id) {
    return function(dispatch) {
        dispatch({type: PUT_NAME});

        API.putUser(id)
            .then((response) => {
                dispatch({
                    type: PUT_NAME_FULFILLED,
                    payload: response
                });
            })
            .catch((err) => {
                console.log('putName API request failed', err);
                dispatch({
                    type: PUT_NAME_REJECTED,
                    payload: err
                });
            });
    };
}