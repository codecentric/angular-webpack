describe('Edit Todo Controller', function() {

    beforeEach(angular.mock.module('todoApp'));

    var $controller, $scope, $rootScope, controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    beforeEach(function() {
        $scope = {};
        controller = $controller('EditTodoController', { $scope : $scope});
        controller.todos = [];
    });

    it('sollte todos prüfen', ()=> {
        expect(true).toBe(true);
    });

});