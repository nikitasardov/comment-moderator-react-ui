import { GET_ALL_ARTICLES, GET_ALL_ARTICLES_FULFILLED, GET_ALL_ARTICLES_REJECTED } from '../constants.js';

export default function reducer(state = {
    articles: [],
    gotData: false,
    error: null
}, action) {
    switch (action.type) {
        case GET_ALL_ARTICLES: {
            return {
                ...state,
                requesting: true
            }
        }

        case GET_ALL_ARTICLES_REJECTED: {
            return {
                ...state,
                requesting: false,
                error: action.payload
            };
        }

        case GET_ALL_ARTICLES_FULFILLED: {
            return {
                ...state,
                requesting: false,
                gotData: true,
                articles: action.payload,
            };
        }
    }

    return state;
}
