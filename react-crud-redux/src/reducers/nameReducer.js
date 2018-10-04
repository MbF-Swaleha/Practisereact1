
import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
   switch (action.type){

   	case actionTypes.CREATE_NEW_NAMES:
   	return [
     ...state,
     Object.assign({}, action.name)
   	];
   	case actionTypes.REMOVE_NAMES:
   	return state.filter((data, i) => i !== action.id);
   	default:
   	  return state;
   }
};