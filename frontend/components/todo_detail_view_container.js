import { connect } from 'react-redux';
import TodoActions from '../actions/todo_actions';
import TodoDetailView from './todo_detail_view';

const mapDispatchToProps = {
  destroyTodo: TodoActions.destroyTodo
};

export default connect(
  null,
  mapDispatchToProps
)(TodoDetailView);
