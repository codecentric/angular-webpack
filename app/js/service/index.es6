'use strict';

import 'angular';
import imprint from './imprint';
import todos from './todos';

export default angular.module('todoApp.service', [])
    .service('ImprintService', imprint)
    .service('TodoService', todos)
    .name;
