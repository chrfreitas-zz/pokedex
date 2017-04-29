((angular) => {

    'use strict';

    class DetailController {

        constructor($pokedex, $routeParams){

            /**
            * Services
            */
            this.$pokedex = $pokedex;

            this.id = $routeParams.id;

        }

        /**
        * Initialize list
        */
        init(){

            var url = this.id;

            this.$pokedex.getDetails(url).then((response) => {
                console.log(response);
            });

        }

    }

    angular.module('app').controller('DetailController', DetailController);

})(window.angular);
