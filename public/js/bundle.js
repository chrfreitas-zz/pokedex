'use strict';

(function (angular) {

   'use strict';

   var app = angular.module('app', ['ngRoute']);

   app.config(function ($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider.when('/', {
         templateUrl: '../views/list.html'
      }).when('/pokemon/:id', {
         templateUrl: '../views/detail.html'
      }).otherwise({ redirectTo: '/' });
   });
})(window.angular);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    var DetailController = function () {
        function DetailController($pokedex, $routeParams) {
            _classCallCheck(this, DetailController);

            this.$pokedex = $pokedex;

            this.id = $routeParams.id;
        }

        /**
        * Initialize DetailController
        */


        _createClass(DetailController, [{
            key: 'init',
            value: function init() {

                this.$pokedex.get('pokemon', this.id).then(function (response) {
                    console.log(response);
                });
            }
        }]);

        return DetailController;
    }();

    angular.module('app').controller('DetailController', DetailController);
})(window.angular);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    var ListController = function () {
        function ListController($pokedex) {
            _classCallCheck(this, ListController);

            /**
            * Services
            */
            this.$pokedex = $pokedex;

            this.pokemons = [];
        }

        /**
        * Initialize ListController
        */


        _createClass(ListController, [{
            key: 'init',
            value: function init() {
                var _this = this;

                this.$pokedex.get('pokemon').then(function (response) {
                    _this.pokemons = response;
                });
            }
        }]);

        return ListController;
    }();

    angular.module('app').controller('ListController', ListController);
})(window.angular);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    var MainController = function MainController() {
        _classCallCheck(this, MainController);
    };

    angular.module('app').controller('MainController', MainController);
})(window.angular);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    /**
    * Constants of the service
    */

    var URL_API = 'http://pokeapi.co/api/v2/',
        DEFAULT_ROUTE = 'pokemon';

    /**
    * Build route for request
    */
    function buildRoute() {
        var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ROUTE;
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


        route = URL_API + route;

        if (id) {
            route += '/' + id;
        }

        return route;
    }

    var PokedexService = function () {
        function PokedexService($http, $q) {
            _classCallCheck(this, PokedexService);

            this.$http = $http;
            this.$q = $q;
        }

        /**
        * Method to get data at API
        */


        _createClass(PokedexService, [{
            key: 'get',
            value: function get(route, id) {

                var defer = this.$q.defer(),
                    url = buildRoute(route, id);

                this.$http.get(url).then(function (response) {

                    response = response.data;

                    if (!response) {
                        defer.reject('There isn\'t result');
                    }

                    // It's necessary because the api doesn't has a pattern for responses
                    if (response.results) {
                        response = response.data.results;
                    }

                    defer.resolve(response);
                });

                return defer.promise;
            }
        }]);

        return PokedexService;
    }();

    angular.module('app').service('$pokedex', PokedexService);
})(window.angular);
//# sourceMappingURL=bundle.js.map
