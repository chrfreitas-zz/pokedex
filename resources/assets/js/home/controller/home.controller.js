((angular) => {

    'use strict';

    class HomeController {

        getPokemons(){
            return 'Pokemons';
        }

    }

    angular.module('app').controller('HomeController', HomeController);

})(window.angular);
