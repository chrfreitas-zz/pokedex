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
        * Initialize list
        */
        init(){

            this.$pokedex.getPokemons().then((response) => {
                this.pokemons = response.data.results;
            });
        }
        
    }

    angular.module('app').controller('ListController', ListController);

})(window.angular);
