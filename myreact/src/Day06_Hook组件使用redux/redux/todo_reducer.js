import {
  ADD_TODO,
  TOGGLE_COMPLETE,
  FILTER_DISPLAY,
  DELETE_TODO,
} from "./todo_action";

let initState = {
  display: "all",
  todos: [
    {
      id: ~~(Math.random() * 1000000),
      title: "react",
      isComplete: true,
    },
    {
      id: ~~(Math.random() * 1000000),
      title: "hooks",
      isComplete: false,
    },
    {
      id: ~~(Math.random() * 1000000),
      title: "redux",
      isComplete: false,
    },
  ],
};

function todoReducer(state = initState, action) {
  let nextState = null;
  console.log("...", state);
  switch (action.type) {
    case TOGGLE_COMPLETE:
      nextState = {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id == action.payload.id) {
            return {
              ...item,
              isComplete: action.payload.isComplete,
            };
          } else {
            return item;
          }
        }),
      };
      break;
    case ADD_TODO:
      nextState = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      break;
    case FILTER_DISPLAY:
      nextState = {
        ...state,
        display: action.payload,
      };
      break;
    case DELETE_TODO:
      nextState = {
        ...state,
        todos: [[], ...state.todos.splice(action.payload.id, 1)],
        // todos: [...state.todos.splice(action.payload.id, 1)],
        // todos: [...state.todos.filter(item => item.id !== action.payload.id)]
        // todos: state.todos.filter((item)=>(item.id!==action.payload.id))
      };
    default:
      nextState = state;
      break;
  }
  return nextState;
}

export default todoReducer;
