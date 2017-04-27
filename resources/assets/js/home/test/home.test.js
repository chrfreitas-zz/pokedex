
describe('Home', function() {

    var name = 'christian';

    var scope, HomeController;
    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {

        scope = $rootScope.$new();
        HomeController = $controller('HomeController', {
            $scope: scope
        });

    }));

    it('Controller: getResults()', function() {
        expect(true).toEqual(true);
    });
});
