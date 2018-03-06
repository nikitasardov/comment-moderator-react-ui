import reducer from '../../src/js/reducers/dataReducer';
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
} from '../../src/js/constants.js';

describe('Request Reducer (default state)', () => {

    it('has a default state', () => {
        expect(reducer(undefined, {
            type: 'unexpected'
        })).toEqual({
            requesting: false,
            dataFetched: false,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: null
        });
    });

});

describe('Request Reducer (All articles)', () => {

    it('can handle GET_ALL_ARTICLES', () => {
        expect(reducer(undefined, {
            type: 'GET_ALL_ARTICLES'
        })).toEqual({
            requesting: true,
            dataFetched: false,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: null
        });
    });

    it('can handle GET_ALL_ARTICLES_REJECTED', () => {
        expect(reducer(undefined, {
            type: 'GET_ALL_ARTICLES_REJECTED',
            payload: 'some payload'
        })).toEqual({
            requesting: false,
            dataFetched: false,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: 'some payload'
        });
    });

    it('can handle GET_ALL_ARTICLES_FULFILLED', () => {
        expect(reducer(undefined, {
            type: 'GET_ALL_ARTICLES_FULFILLED',
            payload: {
                articles: {articlesPayload: true},
                comments: {commentsPayload: true},
                users: {usersPayload: true}
            }
        })).toEqual({
            requesting: false,
            dataFetched: true,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {articlesPayload: true},
            comments: {commentsPayload: true},
            users: {usersPayload: true},
            error: null
        });
    });

});

describe('Request Reducer (Single article)', () => {

    it('can handle GET_ARTICLE', () => {
        expect(reducer(undefined, {
            type: 'GET_ARTICLE'
        })).toEqual({
            requesting: true,
            dataFetched: false,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: null
        });
    });

    it('can handle GET_ARTICLE_REJECTED', () => {
        expect(reducer(undefined, {
            type: 'GET_ARTICLE_REJECTED',
            payload: 'some payload'
        })).toEqual({
            requesting: false,
            dataFetched: false,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: 'some payload'
        });
    });

    it('can handle GET_ARTICLE_FULFILLED', () => {
        expect(reducer(undefined, {
            type: 'GET_ARTICLE_FULFILLED',
            payload: {
                articles: {articlesPayload: true},
                comments: {commentsPayload: true},
                users: {usersPayload: true}
            }
        })).toEqual({
            requesting: false,
            dataFetched: true,
            userInEditMode: null,
            commentInEditMode: null,
            articles: Object.assign(
                {},
                {articlesPayload: true}
            ),
            comments: Object.assign(
                {},
                {commentsPayload: true}
            ),
            users: Object.assign(
                {},
                {usersPayload: true}
            ),
            error: null
        });
    });

});

describe('Request Reducer (Entering user edit mode)', () => {

    it('can handle EDIT_USER', () => {
        expect(reducer(undefined, {
            type: 'EDIT_USER',
            payload: 100500
        })).toEqual({
            requesting: false,
            dataFetched: true,
            userInEditMode: 100500,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: null
        });
    });

    it('can handle CANCEL_EDIT_USER', () => {
        expect(reducer(undefined, {
            type: 'CANCEL_EDIT_USER'
        })).toEqual({
            requesting: false,
            dataFetched: true,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: null
        });
    });

});

describe('Request Reducer (Editing user)', () => {

    it('can handle PUT_USER', () => {
        expect(reducer(undefined, {
            type: 'PUT_USER'
        })).toEqual({
            requesting: true,
            dataFetched: false,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: null
        });
    });

    it('can handle PUT_USER_REJECTED', () => {
        expect(reducer(undefined, {
            type: 'PUT_USER_REJECTED',
            payload: 'some payload'
        })).toEqual({
            requesting: false,
            dataFetched: false,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: 'some payload'
        });
    });

    it('can handle PUT_USER_FULFILLED', () => {
        expect(reducer(undefined, {
            type: 'PUT_USER_FULFILLED',
            payload: {
                response: {responsePayload: true},
                user: {user: 'user data'}
            }
        })).toEqual({
            requesting: false,
            dataFetched: true,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: Object.assign(
                {},
                {user: 'user data'}
            ),
            error: null,
            response: {responsePayload: true}
        });
    });

});

describe('Request Reducer (Entering comment edit mode)', () => {

    it('can handle EDIT_COMMENT', () => {
        expect(reducer(undefined, {
            type: 'EDIT_COMMENT',
            payload: 100500
        })).toEqual({
            requesting: false,
            dataFetched: true,
            userInEditMode: null,
            commentInEditMode: 100500,
            articles: {},
            comments: {},
            users: {},
            error: null
        });
    });

    it('can handle CANCEL_EDIT_COMMENT', () => {
        expect(reducer(undefined, {
            type: 'CANCEL_EDIT_COMMENT'
        })).toEqual({
            requesting: false,
            dataFetched: true,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: null
        });
    });

});

describe('Request Reducer (Editing comment)', () => {

    it('can handle PUT_COMMENT', () => {
        expect(reducer(undefined, {
            type: 'PUT_COMMENT'
        })).toEqual({
            requesting: true,
            dataFetched: false,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: null
        });
    });

    it('can handle PUT_COMMENT_REJECTED', () => {
        expect(reducer(undefined, {
            type: 'PUT_COMMENT_REJECTED',
            payload: 'some payload'
        })).toEqual({
            requesting: false,
            dataFetched: false,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: {},
            users: {},
            error: 'some payload'
        });
    });

    it('can handle PUT_COMMENT_FULFILLED', () => {
        expect(reducer(undefined, {
            type: 'PUT_COMMENT_FULFILLED',
            payload: {
                response: {responsePayload: true},
                comment: {comment: 'comment data'}
            }
        })).toEqual({
            requesting: false,
            dataFetched: true,
            userInEditMode: null,
            commentInEditMode: null,
            articles: {},
            comments: Object.assign(
                {},
                {comment: 'comment data'}
            ),
            users: {},
            error: null,
            response: {responsePayload: true}
        });
    });

});