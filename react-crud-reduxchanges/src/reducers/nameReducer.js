const nameReducer = (state = [], action) => {
   switch(action.type) {
     case 'ADD_NAME':
       return state.concat([action.data]);
      case 'DELETE_NAME':
       return state.filter((name)=>name.id !== action.id);
      case 'EDIT_NAME':
       return state.map((name)=>name.id === action.id ? {...name,editing:!name.editing}:name);
      case 'UPDATE':
       return state.map((name)=>{
         if(name.id === action.id) {
          return{
            ...name,
            name:action.data.newName,
            editing: !name.editing
          }
         }else return name;
       })
      default:
       return state;
   }
}


export default nameReducer;