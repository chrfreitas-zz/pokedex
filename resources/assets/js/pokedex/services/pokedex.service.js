((angular) => {

    'use strict';

    /**
    * Constants of the service
    */
    const URL_API = 'http://pokeapi.co/api/v2/',
          DEFAULT_ROUTE = 'pokemon';


    class PokedexService {

        constructor($http, $q){
            this.$http = $http;
            this.$q = $q;
        }

        /**
        * Method to get data at API
        */
        get(route, id) {

            let defer = this.$q.defer(),
                url = this.getRoute(route, id);

            this.$http.get(url).then((response)=> {

                response = response.data;

                if(!response){
                    defer.reject('There isn\'t result');
                }

                // It's necessary because the api doesn't has a pattern for responses
                response = response.results || response;

                defer.resolve(response);
            });

            return defer.promise;
        }

        /**
        * Build route for request
        */
        getRoute(route = DEFAULT_ROUTE, id = 0) {

            route = URL_API + route;

            if(id){
                route += `/${id}`;
            }

            return route;
        }


    }

    angular.module('app').service('$pokedex', PokedexService);

})(window.angular);
