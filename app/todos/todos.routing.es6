'use strict';

import todoPage from './views/todos.html';

export default function routes($routeProvider) {
    $routeProvider.when('/todos', {
        template: todoPage,
        controller: 'TodoController',
        controllerAs: 'TodoController'
    });
}