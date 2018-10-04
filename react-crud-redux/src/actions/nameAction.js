import * as actionTypes from './actionTypes';

export const createName = (name) => {
   return {
   	type: actionTypes.CREATE_NEW_NAMES,
   	name: name
   }
};

export const deleteName = (id) => {
   return {
   	type: actionTypes.REMOVE_NAMES,
   	id: id
   }
};
