import { combineReducers } from 'redux';

import articles from './articlesReducer';
import comments from './commentsReducer';

export default combineReducers({
    articles,
    comments
})
