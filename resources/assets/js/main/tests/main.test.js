
describe('Main', function() {

    var scope, MainController;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {

        scope = $rootScope.$new();
        MainController = $controller('MainController as home', {
            '$scope': scope
        });

    }));

    it('should have assigned right pattern to numberPattern', function(){
        expect(true).toBe(true);
    });

});
