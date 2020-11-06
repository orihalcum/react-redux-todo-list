import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTodo, delTodo } from "../store/actions/todoAction"

const TodoApp = () => {

  const todos = useSelector(state => state.todoReducer.todos);
  const dispatch = useDispatch();

  const addNewTodo = () => {
    let id = Math.random()
    const data = {
      id,
      title: `This is ${id}`,
      complete: false
    }
    dispatch(addTodo(data))
  }

  return (
    <div>
      <h1>todo app</h1>
      <button onClick={addNewTodo}>add</button>
      {todos.map(todo =>
        <div key={todo.id}>
          <p><button onClick={() => dispatch(delTodo(todo.id))}>delete</button> {todo.title}</p>
        </div>
      )}
    </div>
  );
};

export default TodoApp;