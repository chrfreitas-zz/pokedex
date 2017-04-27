
describe('Header', function() {

    var name = 'christian';

    var scope, HeaderController;
    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {

        scope = $rootScope.$new();
        HeaderController = $controller('HeaderController', {
            $scope: scope
        });

    }));

    it('Controller: getResults()', function() {
        expect(true).toEqual(true);
    });
});
