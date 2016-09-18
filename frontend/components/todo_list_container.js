import { connect } from 'react-redux';
import { allTodos } from '../reducers/selector';
import TodoList from './todo_list';
import TodoActions from '../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(TodoActions.requestTodos()),
  createTodo: (todo) => dispatch(TodoActions.createTodo(todo)),
  toggleTodo: (todo) => dispatch(TodoActions.toggleTodo(todo)),
  destroyTodo: (todo) => dispatch(TodoActions.destroyTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
