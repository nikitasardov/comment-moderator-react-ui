import { PUT_COMMENT, PUT_COMMENT_REJECTED, PUT_COMMENT_FULFILLED } from '../constants.js';

export default function reducer(state = {
    comment: null,
    requesting: false,
    haveData: false,
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
                gotData: true,
                comment: action.payload
            };
        }
    }

    return state;
}
