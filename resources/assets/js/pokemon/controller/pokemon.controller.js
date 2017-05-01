((angular) => {

    'use strict';

    class PokemonController {

        constructor($pokedex, $routeParams, CommentModel, PokemonModel){

            /**
            * Services
            */
            this.$pokedex = $pokedex;
            this.$routeParams = $routeParams;
            this.PokemonModel = PokemonModel;
            this.CommentModel = CommentModel;

            /**
            * Properties
            */
            this.pokemon = {};
            this.comment = {};
        }

        /**
        * Initialize PokemonController
        */
         init(){

            this.$pokedex.get('pokemon', this.$routeParams.id).then((response) => {
                this.pokemon = this.PokemonModel;
                this.pokemon.setData(response);
            });

            return true;
        }

        sendComment(){            
            this.pokemon.comment.save(this.comment.user, this.comment.text);
        }

    }

    angular.module('app').controller('PokemonController', PokemonController);

})(window.angular);
