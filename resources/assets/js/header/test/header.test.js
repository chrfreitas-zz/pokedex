
describe('Controller: Header', function() {

    var scope, HeaderController;
    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {

        scope = $rootScope.$new();
        HeaderController = $controller('HeaderController', {
            $scope: scope
        });

    }));

    it('Results header', function() {

        console.log(scope);
        expect(true).toEqual(true);

    });
});
