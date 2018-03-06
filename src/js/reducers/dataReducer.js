import {
    GET_ALL_ARTICLES,
    GET_ALL_ARTICLES_FULFILLED,
    GET_ALL_ARTICLES_REJECTED,

    GET_ARTICLE,
    GET_ARTICLE_REJECTED,
    GET_ARTICLE_FULFILLED,

    EDIT_USER,
    CANCEL_EDIT_USER,

    PUT_USER,
    PUT_USER_REJECTED,
    PUT_USER_FULFILLED,

    EDIT_COMMENT,
    CANCEL_EDIT_COMMENT,

    PUT_COMMENT,
    PUT_COMMENT_REJECTED,
    PUT_COMMENT_FULFILLED
} from '../constants.js';

export default function reducer(state = {
    requesting: false,
    dataFetched: false,
    userInEditMode: null,
    commentInEditMode: null,
    articles: {},
    comments: {},
    users: {},
    error: null
}, action) {
    switch (action.type) {
        case GET_ALL_ARTICLES: {
            return {
                ...state,
                dataFetched: false,
                requesting: true
            }
        }

        case GET_ALL_ARTICLES_REJECTED: {
            return {
                ...state,
                requesting: false,
                dataFetched: false,
                error: action.payload
            };
        }

        case GET_ALL_ARTICLES_FULFILLED: {
            return {
                ...state,
                requesting: false,
                dataFetched: true,
                articles: action.payload.articles,
                comments: action.payload.comments,
                users: action.payload.users
            };
        }


        case GET_ARTICLE: {
            return {
                ...state,
                requesting: true,
                dataFetched: false,
                userInEditMode: null,
                commentInEditMode: null
            }
        }

        case GET_ARTICLE_REJECTED: {
            return {
                ...state,
                requesting: false,
                dataFetched: false,
                error: action.payload
            };
        }

        case GET_ARTICLE_FULFILLED: {
            return {
                ...state,
                requesting: false,
                dataFetched: true,
                articles: Object.assign(
                    {},
                    state.articles,
                    action.payload.articles
                ),

                comments: Object.assign(
                    {},
                    state.comments,
                    action.payload.comments
                ),
                users: Object.assign(
                    {},
                    state.users,
                    action.payload.users
                )
            };
        }


        case EDIT_USER: {
            return {
                ...state,
                requesting: false,
                dataFetched: true,
                userInEditMode: action.payload
            };
        }

        case CANCEL_EDIT_USER: {
            return {
                ...state,
                requesting: false,
                dataFetched: true,
                userInEditMode: null
            };
        }

        case PUT_USER: {
            return {
                ...state,
                requesting: true,
                userInEditMode: null
            };
        }

        case PUT_USER_REJECTED: {
            return {
                ...state,
                requesting: false,
                userInEditMode: null,
                dataFetched: false,
                error: action.payload
            };
        }

        case PUT_USER_FULFILLED: {
            return {
                ...state,
                requesting: false,
                userInEditMode: null,
                dataFetched: true,
                response: action.payload.response,
                users: Object.assign({}, state.users, action.payload.user)
            };
        }


        case EDIT_COMMENT: {
            return {
                ...state,
                requesting: false,
                dataFetched: true,
                commentInEditMode: action.payload
            };
        }

        case CANCEL_EDIT_COMMENT: {
            return {
                ...state,
                requesting: false,
                dataFetched: true,
                commentInEditMode: null
            };
        }

        case PUT_COMMENT: {
            return {
                ...state,
                requesting: true,
                commentInEditMode: null
            };
        }

        case PUT_COMMENT_REJECTED: {
            return {
                ...state,
                requesting: false,
                dataFetched: false,
                commentInEditMode: null,
                error: action.payload
            };
        }

        case PUT_COMMENT_FULFILLED: {
            return {
                ...state,
                requesting: false,
                dataFetched: true,
                commentInEditMode: null,
                response: action.payload.response,
                comments: Object.assign({}, state.comments, action.payload.comment)
            };
        }

        default: {
            return state;
        }
    }
}