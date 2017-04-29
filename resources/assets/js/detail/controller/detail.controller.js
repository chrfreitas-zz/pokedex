((angular) => {

    'use strict';

    class DetailController {

        constructor($pokedex, $routeParams){

            this.$pokedex = $pokedex;

            this.id = $routeParams.id;
        }

        /**
        * Initialize DetailController
        */
         init(){

            this.$pokedex.get('pokemon', this.id).then((response) => {
                console.log(response);
            });

        }

    }

    angular.module('app').controller('DetailController', DetailController);

})(window.angular);
