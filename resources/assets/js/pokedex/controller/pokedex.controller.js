((angular) => {

    'use strict';

    class PokedexController {

        constructor($pokedex){

            /**
            * Services
            */
            this.$pokedex = $pokedex;

            /**
            * Properties
            */
            this.items = [];
        }

        /**
        * Initialize PokedexController
        */
        init(){

            this.$pokedex.get('pokemon').then((response) => {
                this.items = response;
            });

            return true;
        }

    }

    angular.module('app').controller('PokedexController', PokedexController);

})(window.angular);
