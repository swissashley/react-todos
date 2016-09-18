const TodoActions = {
  REQUEST_TODOS: "REQUEST_TODOS",
  RECEIVE_TODOS: "RECEIVE_TODOS",
  CREATE_TODO: "CREATE_TODO",
  RECEIVE_TODO: "RECEIVE_TODO",
  DESTROY_TODO: "DESTROY_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  UPDATE_TODO: "UPDATE_TODO",

  requestTodos: () => ({
    type: TodoActions.REQUEST_TODOS
  }),
  receiveTodos: todos => ({
    type: TodoActions.RECEIVE_TODOS,
    todos
  }),
  createTodo: todo => ({
    type: TodoActions.CREATE_TODO,
    todo
  }),
  receiveTodo: todo => ({
    type: TodoActions.RECEIVE_TODO,
    todo
  }),
  toggleTodo: todo => ({
    type: TodoActions.UPDATE_TODO,
    todo: {
      id: todo.id,
      title: todo.title,
      body: todo.body,
      done: !todo.done
    }
  }),
  destroyTodo: todo => ({
    type: TodoActions.DESTROY_TODO,
    todo
  }),
  removeTodo: todo => ({
    type: TodoActions.REMOVE_TODO,
    todo
  })
};

export default TodoActions;
