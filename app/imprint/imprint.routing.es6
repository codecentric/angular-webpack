'use strict';

import imprintPage from './views/imprint.html';

export default function routes($routeProvider) {
    $routeProvider.when('/imprint', {
        template: imprintPage,
        controller: 'ImprintController',
        controllerAs: 'ImprintController'
    });
}