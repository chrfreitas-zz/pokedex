((angular) => {

    'use strict';

    class ListController {

        constructor($pokedex){

            /**
            * Services
            */
            this.$pokedex = $pokedex;

            this.pokemons = [];
        }

        /**
        * Initialize ListController
        */
        init(){

            this.$pokedex.get('pokemon').then((response) => {
                this.pokemons = response;
            });
        }

    }

    angular.module('app').controller('ListController', ListController);

})(window.angular);
