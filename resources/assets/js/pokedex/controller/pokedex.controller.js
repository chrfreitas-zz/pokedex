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
        }

        /**
        * Initialize PokedexController
        */
        init(){

            scope.$pokedex.get('pokemon').then((response) => {
                scope.items = response;
            });

            return true;
        }

    }

    angular.module('app').controller('PokedexController', PokedexController);

})(window.angular);
