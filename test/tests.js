require('angular');
require('angular-mocks');

var testsContext = require.context(".", true, /-test$/);
testsContext.keys().forEach(testsContext);