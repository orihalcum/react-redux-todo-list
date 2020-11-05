import React from 'react';
import { Provider } from "react-redux";
import TodoApp from './components/TodoApp';
import store from "./store"

const App = () => {
  return (
    <Provider store={ store }>
      <div>
        <TodoApp/>
      </div>
    </Provider>
  );
};

export default App;