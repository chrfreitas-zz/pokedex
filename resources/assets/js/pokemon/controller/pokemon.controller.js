((angular) => {

    'use strict';

    var scope = {};

    class PokemonController {

        constructor($pokedex, $routeParams, CommentModel, PokemonModel){

            scope = this;

            /**
            * Services
            */
            scope.$pokedex = $pokedex;
            scope.$routeParams = $routeParams;
            scope.PokemonModel = PokemonModel;

            /**
            * Properties
            */
            scope.pokemon = {};
        }

        /**
        * Initialize PokemonController
        */
         init(){

            scope.$pokedex.get('pokemon', scope.$routeParams.id).then((response) => {                
                scope.pokemon = scope.PokemonModel;
                scope.pokemon.setData(response);
            });

            return true;
        }

    }

    angular.module('app').controller('PokemonController', PokemonController);

})(window.angular);
