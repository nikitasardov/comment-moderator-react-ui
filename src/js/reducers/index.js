import { combineReducers } from 'redux';

import navigation from './navigationReducer';
import articles from './articlesReducer';
import comments from './commentsReducer';

export default combineReducers({
    articles,
    comments,
    navigation
})
