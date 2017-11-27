import { combineReducers } from 'redux';

import navigation from './navigationReducer';
import data from './dataReducer';

export default combineReducers({
    navigation,
    data
})
