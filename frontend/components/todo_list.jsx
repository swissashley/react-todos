import React from 'react';
import TodoListItem from './todo_list_item';
import TodoListForm from './todo_list_form';

class TodoList extends React.Component {


  componentDidMount() {
    this.props.requestTodos();
  }

  render() {

    const todoList = this.props.todos.map(todo => (
      <TodoListItem
        key={todo.id}
        toggleTodo={this.props.toggleTodo}
        destroyTodo={this.props.destroyTodo}
        todo={todo} />
    ));

    return (
      <div>
        <TodoListForm createTodo={this.props.createTodo}/>
        <ul> {todoList} </ul>
      </div>
    );
  }
}

export default TodoList;
