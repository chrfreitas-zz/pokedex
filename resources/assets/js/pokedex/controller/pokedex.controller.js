((angular) => {

    'use strict';

    var scope = {};

    class PokedexController {

        constructor($pokedex){

            scope = this;

            /**
            * Services
            */
            scope.$pokedex = $pokedex;

            /**
            * Properties
            */
            scope.items = [];
            scope.loading = true;
        }

        /**
        * Initialize PokedexController
        */
        init(){

            scope.$pokedex.get('pokemon/?limit=151&offset=0').then((response) => {
                scope.items = response;
                scope.loading = false;
            });

            return true;
        }

    }

    angular.module('app').controller('PokedexController', PokedexController);

})(window.angular);
