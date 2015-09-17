import ImprintController from './controller/imprint';
import routing from './imprint.routing';

export default angular.module('todoApp.imprint', ['ngRoute'])
    .config(routing)
    .controller('ImprintController', ImprintController)
    .name;
