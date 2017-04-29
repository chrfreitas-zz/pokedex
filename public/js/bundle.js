'use strict';

(function (angular) {

   'use strict';

   var app = angular.module('app', ['ngRoute']);

   app.config(function ($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider.when('/', {
         templateUrl: '../views/home.html'
      }).otherwise({ redirectTo: '/' });
   });
})(window.angular);
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    var HomeController = function HomeController() {
        _classCallCheck(this, HomeController);
    };

    angular.module('app').controller('HomeController', HomeController);
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
        * Initialize list
        */


        _createClass(ListController, [{
            key: 'init',
            value: function init() {
                var _this = this;

                this.$pokedex.getPokemons().then(function (response) {
                    _this.pokemons = response.data.results;
                });
            }
        }, {
            key: 'detail',
            value: function detail() {}
        }]);

        return ListController;
    }();

    angular.module('app').controller('ListController', ListController);
})(window.angular);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    var URL_API = 'http://pokeapi.co/api/v2/';

    var PokedexService = function () {
        function PokedexService($http) {
            _classCallCheck(this, PokedexService);

            this.$http = $http;
        }

        _createClass(PokedexService, [{
            key: 'getPokemons',
            value: function getPokemons() {
                var url = URL_API + 'pokemon/';
                return this.$http.get(url);
            }
        }]);

        return PokedexService;
    }();

    angular.module('app').service('$pokedex', PokedexService);
})(window.angular);
//# sourceMappingURL=bundle.js.map
