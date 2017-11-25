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
    articles: [],
    viewID: 0,
    singleArticleData: null,
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
                viewID: 0,
                error: action.payload
            };
        }

        case GET_ALL_ARTICLES_FULFILLED: {
            return {
                ...state,
                requesting: false,
                haveData: true,
                articles: action.payload,
                viewID: 1
            };
        }

        case GET_ARTICLE: {
            return {
                ...state,
                requesting: true,
                haveData: false
            }
        }

        case GET_ARTICLE_REJECTED: {
            return {
                ...state,
                requesting: false,
                haveData: false,
                viewID: 0,
                error: action.payload
            };
        }

        case GET_ARTICLE_FULFILLED: {
            return {
                ...state,
                requesting: false,
                haveData: true,
                articles: state.articles.map((article) => {
                    // insert refreshed article into new state
                    if (article.id === action.payload.id) {
                        return action.payload;
                    }
                    return article;
                }),
                singleArticleData: action.payload,
                viewID: 4
            };
        }
    }

    return state;
}
