import { PUT_COMMENT, PUT_COMMENT_REJECTED, PUT_COMMENT_FULFILLED } from '../constants.js';

export default function reducer(state = {
    comment: null,
    requesting: false,
    gotData: false,
    error: null
}, action) {
    switch (action.type) {
        case PUT_COMMENT: {
            return {
                ...state,
                requesting: true
            };
        }

        case PUT_COMMENT_REJECTED: {
            return {
                ...state,
                requesting: false,
                error: action.payload
            };
        }

        case PUT_COMMENT_FULFILLED: {
            return {
                ...state,
                requesting: true,
                gitData: true,
                comment: action.payload
            };
        }
    }

    return state;
}
