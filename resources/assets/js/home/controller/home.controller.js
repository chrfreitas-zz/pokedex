((angular) => {
    'use strict';

    class HomeController {

        constructor($http){
            this.$http = $http;
        }

        getPokemons(){
            return
        }

    }

    angular.module('app').controller('HomeController', HomeController);

})(angular);
