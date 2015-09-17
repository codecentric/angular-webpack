'use strict';

import 'es5-shim';
import 'jquery';
import 'angular';
import 'angular-route';

import './styles/app.css';
import './styles/normalize.css';
import './styles/unsemantic-grid-responsive.css';

import packageJson from 'json!../package.json';

//import service from './service';
import controller from './controller';
import todos from './todos';
import imprint from './imprint';

var app = angular.module('todoApp', ['ngRoute', controller, todos, imprint]);

app.constant('VERSION', packageJson.version);

app.config(function ($routeProvider) {

    $routeProvider
        .otherwise({
            redirectTo: '/todos'
        });
});
