((angular) => {

    'use strict';

    var scope = {};

    class HomeController {

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
            scope.loader = true;
        }

        /**
        * Initialize HomeController
        */
        init(){

            scope.$pokedex.get('pokemon/?limit=151&offset=0').then((response) => {
                scope.items = response;
                scope.loader = false;
            });

            return true;
        }

    }

    angular.module('app').controller('HomeController', HomeController);

})(window.angular);
