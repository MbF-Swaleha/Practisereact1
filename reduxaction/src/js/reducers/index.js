import {combineReducers} from 'redux';
import userReducer from './reducer-users';

const allReducers = combineReducers({
	users: userReducer 
});

export default allReducers;

