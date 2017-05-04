
describe('Home', function() {

    var scope,
        pokedex,
        HomeController;


    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller, $pokedex) {

        pokedex = $pokedex;

        scope = $rootScope.$new();
        HomeController = $controller('HomeController as homeCtrl', {
            '$scope': scope
        });

    }));

    describe('Controller', function() {

        it('Constructor(): Check if $pokedex was loaded ', function(){
            expect(scope.homeCtrl.$pokedex).toBeDefined();
        });

        it('Init(): Check if the method is running without error during it', function(){
            expect(scope.homeCtrl.init()).toBe(true);
        });

    });


    describe('Service', function() {

        it('Constructor(): Check if $q was loaded ', function(){
            expect(pokedex.$q).toBeDefined();
        });

        it('Constructor(): Check if $http was loaded ', function(){
            expect(pokedex.$http).toBeDefined();
        });

        it('GetRoute: Check if method is defined', function(){
            expect(pokedex.getRoute).toBeDefined();
        });

        it('GetRoute(): Check if method is working with default route', function(){
            expect(pokedex.getRoute()).toContain('pokemon');
        });

        it('GetRoute(route): Check if method is returning string with first parameter', function(){
            expect(pokedex.getRoute('charizard')).toContain('charizard');
        });

        it('GetRoute(route, id): Check if method is returning string with second parameter', function(){
            expect(pokedex.getRoute('pokemons', 1)).toContain(1);
        });

        it('Get: Check if the method is defined', function(){
            expect(pokedex.get).toBeDefined();
        });

    });

});
