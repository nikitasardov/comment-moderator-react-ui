import API from '../libs/API';
import {DataNormalizer} from '../libs/DataNormalizer';
import {
    GET_ALL_ARTICLES,
    GET_ALL_ARTICLES_FULFILLED,
    GET_ALL_ARTICLES_REJECTED,

    GET_ARTICLE,
    GET_ARTICLE_REJECTED,
    GET_ARTICLE_FULFILLED
} from '../constants.js';

let normalizer = new DataNormalizer();

export function getAllArticles() {
    return function(dispatch) {
        dispatch({type: GET_ALL_ARTICLES});

        API.getBoardInfo()
            .then((response) => {
                dispatch({
                    type: GET_ALL_ARTICLES_FULFILLED,
                    payload: normalizer.normalizeData(response)
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
                    payload: normalizer.normalizeData(response)
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

/*
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
*/

/*
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
*/