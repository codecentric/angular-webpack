'use strict';

import 'angular';
import EditTodoController from './edit_todo';
import FooterController from './footer';
import TodoController from './todo';
import TodoListController from './todo_list';
import ImprintController from './imprint';

export default angular.module('todoApp.controller', [])
    .controller('EditTodoController', EditTodoController)
    .controller('FooterController', FooterController)
    .controller('TodoController', TodoController)
    .controller('TodoListController', TodoListController)
    .controller('ImprintController', ImprintController)
    .name;
