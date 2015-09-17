'use strict';

import imprint from './imprint';

export default angular.module('todoApp.service', [])
    .service('ImprintService', imprint)
    .name;
