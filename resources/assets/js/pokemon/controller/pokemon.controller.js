((angular) => {

    'use strict';


    class PokemonController {

        constructor($pokedex, PokemonModel, $routeParams){

            /**
            * Services
            */
            this.$pokedex = $pokedex;
            this.PokemonModel = PokemonModel;

            /**
            * Properties
            */
            this.pokemon = {};
            this.routeId = $routeParams.id;

        }

        /**
        * Initialize PokemonController
        */
         init(){

            this.$pokedex.get('pokemon', this.routeId).then((response) => {
                this.pokemon = new this.PokemonModel(response);
            });


            return true;
        }


    }

    angular.module('app').controller('PokemonController', PokemonController);

})(window.angular);
