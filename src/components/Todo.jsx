import React from "react";
import { observer } from "mobx-react";

const Todo = observer(({ todo }) => (
  <li key={todo.id}>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => (todo.finished = !todo.finished)}
    />
    {todo.finished ? (<s>{todo.title}</s>) : (todo.title) }
  </li>
));

export default Todo;
