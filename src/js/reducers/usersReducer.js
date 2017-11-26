import { PUT_USER, PUT_USER_REJECTED, PUT_USER_FULFILLED } from '../constants.js';

export default function reducer(state = {
    nameEditMode: false,
    comment: null,
    requesting: false,
    haveData: false,
    error: null
}, action) {
    switch (action.type) {
        case PUT_USER: {
            return {
                ...state,
                requesting: true,
                nameEditMode: false
            };
        }

        case PUT_USER_REJECTED: {
            return {
                ...state,
                requesting: false,
                error: action.payload
            };
        }

        case PUT_USER_FULFILLED: {
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
