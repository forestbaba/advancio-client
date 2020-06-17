import { combineReducers } from 'redux';
import * as userData from './User';
import * as commentData from './Comment'

const allReducers = combineReducers({
	userData: userData.reducer,
	commentData: commentData.reducer,
});

export default allReducers;