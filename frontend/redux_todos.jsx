import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// import {allTodos} from './reducers/selector';
import TodoActions from './actions/todo_actions';
window.createTodo = TodoActions.createTodo;

const store = configureStore();
window.store = store;

// window.allTodos = allTodos;

document.addEventListener(
  'DOMContentLoaded',
  () => ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('content')
  )
);
