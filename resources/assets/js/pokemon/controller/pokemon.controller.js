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
            scope.CommentModel = CommentModel;

            /**
            * Properties
            */
            scope.pokemon = {};
            scope.comment = {};
        }

        /**
        * Initialize PokemonController
        */
         init(){

            scope.$pokedex.get('pokemon', scope.$routeParams.id).then((response) => {
                scope.pokemon = scope.PokemonModel;
                scope.pokemon.setData(response);

                scope.comment = scope.CommentModel;
                scope.comment.setData(scope.pokemon);

                scope.comment.get().then(function(response) {
                    scope.comment.all = response;
                });

            });

            return true;
        }

        sendComment(){
            scope.pokemon.comment.save(scope.comment.user, scope.comment.text);

            scope.clearFormComments();
        }

        clearFormComments(){
            scope.comment.user = '';
            scope.comment.text = '';
        }

    }

    angular.module('app').controller('PokemonController', PokemonController);

})(window.angular);
