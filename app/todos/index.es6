'use strict';

import routing from './todos.routing';
import EditTodoController from './controller/edit_todo';
import TodoController from './controller/todo';
import TodoListController from './controller/todo_list';
import todos from './service/todos';

export default angular.module('todoApp.todos', ['ngRoute'])
    .config(routing)
    .service('TodoService', todos)
    .controller('EditTodoController', EditTodoController)
    .controller('TodoController', TodoController)
    .controller('TodoListController', TodoListController)
    .name;
