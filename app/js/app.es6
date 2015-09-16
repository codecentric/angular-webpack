'use strict';

import 'es5-shim';
import 'jquery';
import 'angular';
import 'angular-route';
import packageJson from 'json!../../package.json';
import service from './service';
import controller from './controller';
import todoPage from '../views/todos.html';
import imprintPage from '../views/imprint.html';

var app = angular.module('todoApp', [ 'ngRoute', service, controller]);

app.constant('VERSION', packageJson.version);

app.config(function($routeProvider) {

  $routeProvider.when('/todos', {
    template: todoPage,
    controller: 'TodoController',
    controllerAs: 'TodoController'
  })
  .when('/imprint', {
    template: imprintPage,
    controller: 'ImprintController',
    controllerAs: 'ImprintController'
  })
  .otherwise({
    redirectTo: '/todos'
  });
});
