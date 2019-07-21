import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';


// const initialState = {
//     todos: {}
// };


// function reducer(initialState, action){
//     switch(action, type){
//         case NEW_TODO:
//             return  {
//                 ...state, todos: [...state.todos, action.payload]
//     };
//     default:
//     return state;
//     }
// };

  
  export default (todos = [], action) => {
    switch (action.type) {
      case ADD_TODO:
        return todos.concat(action.payload);
      case TOGGLE_COMPLETE:
        todos[action.payload].complete = !todos[action.payload].complete;
        return todos;
      default:
        return todos;
    }
  };
  