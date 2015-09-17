'use strict';

module.exports = function($scope, TodoService, $location) {

  $scope.getTodos = TodoService.getTodos.bind(TodoService);
  $scope.selectedTodoId = parseInt($location.search().id);

  $scope.select = function(todo) {
    $scope.selectedTodoId = todo.id;
    $location.search('id', todo.id);
  };

};
