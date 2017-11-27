import {
    GET_ALL_ARTICLES,
    GET_ALL_ARTICLES_FULFILLED,
    GET_ALL_ARTICLES_REJECTED,

    GET_ARTICLE,
    GET_ARTICLE_REJECTED,
    GET_ARTICLE_FULFILLED
} from '../constants.js';

export default function reducer(state = {
    requesting: false,
    haveData: false,
    data: {
        articles: {},
        comments: {},
        users: {}
    },
    singleArticleData: null,
    error: null
}, action) {
    switch (action.type) {
        case GET_ALL_ARTICLES: {
            return {
                ...state,
                singleArticleData: null,
                haveData: false,
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
                haveData: true,
                articles: action.payload.articles,
                comments: action.payload.comments,
                users: action.payload.users
            };
        }

        case GET_ARTICLE: {
            return {
                ...state,
                singleArticleData: null,
                requesting: true,
                haveData: false
            }
        }

        case GET_ARTICLE_REJECTED: {
            return {
                ...state,
                requesting: false,
                error: action.payload
            };
        }

        case GET_ARTICLE_FULFILLED: {
            return {
                ...state,
                requesting: false,
                articles: Object.assign(
                    {},
                    state.data.articles,
                    action.payload.articles
                ),
                /*articles: mapObject(state.data.articles, articleID => {
                    const article = state.data.articles[articleID];
                    // insert refreshed article into new state
                    if (article.id === action.payload.id) {
                        return action.payload.articles.id;
                    }
                    return article.id;
                }),*/
                comments: Object.assign(
                    {},
                    state.data.comments,
                    action.payload.comments
                ),
                users: Object.assign(
                    {},
                    state.data.users,
                    action.payload.users
                ),
                singleArticleData: action.payload
            };
        }
    }

    return state;
}

/*
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

*/


/*
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

*/