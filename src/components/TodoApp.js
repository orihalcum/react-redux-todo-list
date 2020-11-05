import React from 'react';
import { connect } from "react-redux";
import { addTodo, delTodo } from "../store/actions/todoAction"

const TodoApp = ({ todos, addTodo, delTodo }) => {

  const addNewTodo = () => {
    let id = todos.length + 1
    const data = {
      id,
      title: `This is ${id}`,
      complete: false
    }
    addTodo(data)
  }

  return (
    <div>
      <h1>todo app</h1>
      <button onClick={addNewTodo}>add</button>
      {todos.map(todo =>
        <div key={todo.id}>
          <p>{todo.title}</p>
          <button onClick={() => delTodo(todo.id)}>delete</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  todos: state.todoReducer.todos
})

export default connect(mapStateToProps, { addTodo, delTodo })(TodoApp);