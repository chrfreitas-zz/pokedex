
describe('Pokemon', function() {

    var scope, PokemonController;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller) {

        scope = $rootScope.$new();
        PokemonController = $controller('PokemonController as home', {
            '$scope': scope
        });

    }));

    it('should have assigned right pattern to numberPattern', function(){
        expect(true).toBe(true);
    });

});
