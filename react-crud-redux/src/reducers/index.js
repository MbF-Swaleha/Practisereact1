import {combineReducers} from 'redux';
import names from './nameReducer'

export default combineReducers({
	names: names
});