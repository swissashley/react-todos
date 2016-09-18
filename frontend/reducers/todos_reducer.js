import TodoActions from '../actions/todo_actions';
import merge from "lodash/merge";

const defaultState = {};

const todosReducer = (state = defaultState, action) => {
  switch(action.type) {
    case TodoActions.REQUEST_TODOS:
      return state;

    case TodoActions.RECEIVE_TODOS: {
      const todoArr = action.todos;
      const newState = {};
      todoArr.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    }

    case TodoActions.RECEIVE_TODO: {
      const todo = {[action.todo.id]: action.todo};
      return merge({}, state, todo);
    }

    case TodoActions.REMOVE_TODO: {
      const newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    }

    default:
      return state;
  }
};

export default todosReducer;
