((angular) => {

    'use strict';

    const URL_API = 'http://pokeapi.co/api/v2/';

    class PokedexService {

        constructor($http){
            this.$http = $http;
        }

        getPokemons() {
            let url = URL_API + 'pokemon/';
            return this.$http.get(url);
        }

        getDetails(id) {
            let url = URL_API + 'pokemon/' + id;
            return this.$http.get(url);
        }

    }

    angular.module('app').service('$pokedex', PokedexService);

})(window.angular);
