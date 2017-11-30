export const NAV_HOME = 'NAV_HOME,';
export const NAV_HOME_FULFILLED = 'NAV_HOME_FULFILLED,';
export const NAV_HOME_REJECTED = 'NAV_HOME_REJECTED';

/**
 * view.viewID = 0 - error fetching
 * view.viewID = 1 - list of articles
 * view.viewID = 2 - list of comments
 * view.viewID = 3 - user`s comments
 * view.viewID = 4 - single article with comments
 */
export const VIEW_ERROR = 0;
export const VIEW_LIST_OF_ARTICLES = 1;
export const VIEW_LIST_OF_COMMENTS = 2;
export const VIEW_USER_S_COMMENTS = 3;
export const VIEW_SINGLE_ARTICLE = 4;

export const CHANGE_VIEW = 'CHANGE_VIEW,';
export const CHANGE_VIEW_FULFILLED = 'CHANGE_VIEW_FULFILLED,';
export const CHANGE_VIEW_REJECTED = 'CHANGE_VIEW_REJECTED';

export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const GET_ALL_ARTICLES_REJECTED = 'GET_ALL_ARTICLES_REJECTED';
export const GET_ALL_ARTICLES_FULFILLED = 'GET_ALL_ARTICLES_FULFILLED';

export const GET_ARTICLE = 'GET_ARTICLE';
export const GET_ARTICLE_REJECTED = 'GET_ARTICLE_REJECTED';
export const GET_ARTICLE_FULFILLED = 'GET_ARTICLE_FULFILLED';

export const EDIT_USER = 'EDIT_USER';
export const CANCEL_EDIT_USER = 'CANCEL_EDIT_USER';

export const PUT_USER = 'PUT_USER';
export const PUT_USER_REJECTED = 'PUT_USER_REJECTED';
export const PUT_USER_FULFILLED = 'PUT_USER_FULFILLED';

export const EDIT_COMMENT = 'EDIT_COMMENT';
export const CANCEL_EDIT_COMMENT = 'CANCEL_EDIT_COMMENT';

export const PUT_COMMENT = 'PUT_COMMENT';
export const PUT_COMMENT_REJECTED = 'PUT_COMMENT_REJECTED';
export const PUT_COMMENT_FULFILLED = 'PUT_COMMENT_FULFILLED';