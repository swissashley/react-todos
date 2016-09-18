import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detail: false};
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail() {
    this.setState({detail: !this.state.detail});
  }

  render() {
    const {title, body, done} = this.props.todo;
    const status = <button onClick={() => this.props.toggleTodo(this.props.todo)}>
      {done ? "✅" : "❎"}
    </button>;

    let detailView = <span></span>;
    if (this.state.detail)
      detailView = <TodoDetailViewContainer todo={this.props.todo}/>;

    return (
      <li>
        <h2 onClick={this.toggleDetail}> {title} </h2>
        {detailView}
        <p> Completed: {status} </p>
      </li>
    );
  }

}

export default TodoListItem;
