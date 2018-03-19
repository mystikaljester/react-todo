
// actions
const FETCH_TODOS = 'todos/FETCH';
const ADD_TODO = 'todos/ADD';

// reducer
export default function (
  state = {
      todos: [{}],
  }, action = {},
) {
  switch(action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.todos
      }
    case ADD_TODO:
      var todos = state.todos.slice();
      todos.splice(0,0,action.todo);

      return {
        ...state,
        todos
      }
      
    default:
      return state;
  }
}

// action creators
export function fetchTodos() {
  const todos = [
    { id: 1, text: 'this is text'},
    { id: 2, text: 'do this now'},
    { id: 3, text: 'do this tomorrow'},
  ];
  return {
    type: FETCH_TODOS,
    todos,
  }
}

export function addTodo(value) {

}
