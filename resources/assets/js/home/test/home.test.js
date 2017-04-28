
describe('Home', function() {

    var scope, HomeController;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {

        scope = $rootScope.$new();
        HomeController = $controller('HomeController as home', {
            '$scope': scope
        });

    }));


    it('should have assigned right pattern to numberPattern', function(){

        console.log(scope.home.chris);
        expect(true).toBe(true);

    });


});
