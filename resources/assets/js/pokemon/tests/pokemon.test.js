
describe('Pokemon', function() {

    var scope,
        _PokemonModel,
        PokemonController;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller, PokemonModel) {

        _PokemonModel = PokemonModel;

        scope = $rootScope.$new();
        PokemonController = $controller('PokemonController as pokemonCtrl', {
            '$scope': scope
        });

    }));

    describe('Controller', function() {

        it('Constructor(): Check if $pokedex was loaded ', function(){
            expect(scope.pokemonCtrl.$pokedex).toBeDefined();
        });

        it('Constructor(): Check if PokemonModel was loaded ', function(){
            expect(scope.pokemonCtrl.PokemonModel).toBeDefined();
        });

        it('Init(): Check if the method is running without error during it', function(){
            expect(scope.pokemonCtrl.init()).toBe(true);
        });

    });

});
