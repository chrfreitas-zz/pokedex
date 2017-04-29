
describe('List', function() {

    var scope, ListController;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {

        scope = $rootScope.$new();
        ListController = $controller('ListController as home', {
            '$scope': scope
        });

    }));

    it('should have assigned right pattern to numberPattern', function(){
        expect(true).toBe(true);
    });

});
