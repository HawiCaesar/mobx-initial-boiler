import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";

const store = new TodoListModel();

render(
  <div>
    <DevTools />
    <TodoList store={store} />
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Take coffee");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get cookie as well");
}, 2000);

// playing around in the console
window.store = store;
