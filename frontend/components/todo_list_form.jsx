import React from 'react';

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: ""};
    this.createTodo = this.createTodo.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
  }

  createTodo(e) {
    e.preventDefault();
    this.props.createTodo({todo: {
      title: this.state.title,
      body: this.state.body,
      done: false
    }});
    this.setState({title: "", body: ""});
  }

  setTitle(e) {
    this.setState({title: e.currentTarget.value});
  }

  setBody(e) {
    this.setState({body: e.currentTarget.value});
  }


  render() {
    return (
      <form onSubmit={this.createTodo}>
        <label> Title:
          <input onChange={this.setTitle} value={this.state.title} />
        </label>
        <label> Body:
          <textarea onChange={this.setBody} value={this.state.body}></textarea>
          </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TodoListForm;
