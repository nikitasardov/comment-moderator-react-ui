import API from '../libs/API';
import {DataNormalizer} from '../libs/DataNormalizer';
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

export function editUser(userID) {
    return function(dispatch) {
        dispatch({
            type: EDIT_USER,
            payload: userID
        });
    };
}

export function saveUser(id, newName) {
    return function(dispatch) {

        dispatch({type: PUT_USER});

        API.putUser(id, newName)
            .then((response) => {

                let newUser = {};
                newUser[id] = {id: id, name: newName};

                dispatch({
                    type: PUT_USER_FULFILLED,
                    payload: {
                        response,
                        user: newUser
                    }
                });
            })
            .catch((err) => {
                console.log('putName API request failed', err);
                dispatch({
                    type: PUT_USER_REJECTED,
                    payload: err
                });
            });

    };
}

export function cancelEditUser() {
    return function(dispatch) {
        dispatch({type: CANCEL_EDIT_USER});
    };
}

export function editComment(commentID) {
    return function(dispatch) {
        dispatch({
            type: EDIT_COMMENT,
            payload: commentID
        });
    };
}

export function saveComment(commentObj) {
    return function(dispatch) {

        dispatch({type: PUT_COMMENT});

        API.putComment(commentObj)
            .then((response) => {

                let newComment = {};
                newComment[commentObj.id] = {
                    id: commentObj.id,
                    text: commentObj.text,
                    commenter: commentObj.commenter
                };

                dispatch({
                    type: PUT_COMMENT_FULFILLED,
                    payload: {
                        response,
                        comment: newComment
                    }
                });
            })
            .catch((err) => {
                console.log('putName API request failed', err);
                dispatch({
                    type: PUT_COMMENT_REJECTED,
                    payload: err
                });
            });

    };
}

export function cancelEditComment() {
    return function(dispatch) {
        dispatch({type: CANCEL_EDIT_COMMENT});
    };
}