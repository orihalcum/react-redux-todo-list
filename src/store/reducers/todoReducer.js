const initialState = {
  todos: [
    {
      id: 1,
      title: "title one",
      completed: false
    },
    {
      id: 2,
      title: "title two",
      completed: false
    }
  ]
}

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action
  console.log('todoReducer payload', payload)
  console.log('todoReducer state.todos', state.todos)
  switch (type) {
    case "ADD":
      return {
        ...state,
        todos: [...state.todos, payload]
      }
    case "DEL":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      }
    default: return {
      ...state
    }
  }
}

export default todoReducer;