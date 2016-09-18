import TodoActions from '../actions/todo_actions';
import { fetchTodos, createTodo, updateTodo, destroyTodo } from '../util/todo_api_util';

const todoMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case TodoActions.REQUEST_TODOS: {
      const success = data => dispatch(TodoActions.receiveTodos(data));
      fetchTodos(success);
      return next(action);
    }

    case TodoActions.CREATE_TODO: {
      const success = data => dispatch(TodoActions.receiveTodo(data.todo));
      const error = (err) => console.log(err);
      createTodo(action.todo, success, error);
      return next(action);
    }

    case TodoActions.UPDATE_TODO: {
      const success = data => dispatch(TodoActions.receiveTodo(data.todo));
      const error = (err) => console.log(err);
      updateTodo(action.todo, success, error);
      return next(action);
    }

    case TodoActions.DESTROY_TODO: {
      const success = data => dispatch(TodoActions.removeTodo(data.todo));
      const error = (err) => console.log(err);
      destroyTodo(action.todo, success, error);
      return next(action);
    }

    default:
      return next(action);
  }
};

export default todoMiddleware;
