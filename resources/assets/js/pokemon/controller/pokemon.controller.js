((angular) => {

    'use strict';

    class PokemonController {

        constructor($pokedex, $routeParams){

            /**
            * Services
            */
            this.$pokedex = $pokedex;

            /**
            * Properties
            */
            this.id = $routeParams.id;
        }

        /**
        * Initialize PokemonController
        */
         init(){

            this.$pokedex.get('pokemon', this.id).then((response) => {
                console.log(response);
            });

        }

    }

    angular.module('app').controller('PokemonController', PokemonController);

})(window.angular);
