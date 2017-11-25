import API from '../libs/API';
import {
    GET_ALL_ARTICLES,
    GET_ALL_ARTICLES_FULFILLED,
    GET_ALL_ARTICLES_REJECTED,

    GET_ARTICLE,
    GET_ARTICLE_REJECTED,
    GET_ARTICLE_FULFILLED
} from '../constants.js';

export function getAllArticles() {
    return function(dispatch) {
        dispatch({type: GET_ALL_ARTICLES});

        API.getBoardInfo()
            .then((response) => {
                dispatch({
                    type: GET_ALL_ARTICLES_FULFILLED,
                    payload: response
                });
            })
            .catch((err) => {
                console.log('getBoardInfo API request failed', err);
                dispatch({
                    type: GET_ALL_ARTICLES_REJECTED,
                    payload: err
                });
            });
    };
}

export function getArticle(id) {
    return function(dispatch) {
        dispatch({type: GET_ARTICLE});

        API.getArticle(id)
            .then((response) => {
                dispatch({
                    type: GET_ARTICLE_FULFILLED,
                    payload: response
                });
            })
            .catch((err) => {
                console.log('getArticle API request failed', err);
                dispatch({
                    type: GET_ARTICLE_REJECTED,
                    payload: err
                });
            });
    };
}