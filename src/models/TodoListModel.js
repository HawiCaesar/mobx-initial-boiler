import { observable, computed, action } from "mobx";
import faker from 'faker';

import TodoModel from "./TodoModel";
import dataFetch from '../dataFetch';

export default class TodoListModel {
  @observable todos = dataFetch();

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @computed
  get finishedTodos() {
    return this.todos.filter(todo => todo.finished).length;
  }

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(title));
  }
}
