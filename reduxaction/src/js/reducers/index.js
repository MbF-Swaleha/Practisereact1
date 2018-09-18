import {combineReducers} from 'redux';
import userReducer from '../../js/reducers/reducer-users.js';

const allReducers = combineReducers({
	users: userReducer 
});

export default allReducers;

