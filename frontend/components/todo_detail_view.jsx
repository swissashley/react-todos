import React from 'react';

class TodoDetailView extends React.Component {
  render() {
    const {body} = this.props.todo;

    const deleteButton = <button onClick={() => this.props.destroyTodo(this.props.todo)}>
      ❌
    </button>;

    return (
      <div>
        <p> {body} </p>
        <p> Delete: {deleteButton} </p>
      </div>
    );

  }
}

export default TodoDetailView;
