import ImprintController from './controller/imprint';
import ImprintService from './service/imprint';
import routing from './imprint.routing';

export default angular.module('todoApp.imprint', ['ngRoute'])
    .config(routing)
    .controller('ImprintController', ImprintController)
    .service('ImprintService', ImprintService)
    .name;
