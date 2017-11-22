import API from '../libs/API';
import { PUT_COMMENT, PUT_COMMENT_REJECTED, PUT_COMMENT_FULFILLED  } from '../constants.js';

export function putComment(id) {
    return function(dispatch) {
        dispatch({type: PUT_COMMENT});

        API.putComment(id)
            .then((response) => {
                dispatch({
                    type: PUT_COMMENT_FULFILLED,
                    payload: response
                });
            })
            .catch((err) => {
                console.log('putComment API request failed', err);
                dispatch({
                    type: PUT_COMMENT_REJECTED,
                    payload: err
                });
            });
    };
}