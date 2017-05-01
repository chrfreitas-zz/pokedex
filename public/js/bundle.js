'use strict';

(function (angular) {

   'use strict';

   var app = angular.module('app', ['ngRoute']);

   app.config(function ($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider.when('/', {
         templateUrl: '../views/pokedex.html'
      }).when('/pokemon/:id', {
         templateUrl: '../views/pokemon.html'
      }).otherwise({ redirectTo: '/' });
   });
})(window.angular);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    var PokedexController = function () {
        function PokedexController($pokedex) {
            _classCallCheck(this, PokedexController);

            /**
            * Services
            */
            this.$pokedex = $pokedex;

            /**
            * Properties
            */
            this.items = [];
        }

        /**
        * Initialize PokedexController
        */


        _createClass(PokedexController, [{
            key: 'init',
            value: function init() {
                var _this = this;

                this.$pokedex.get('pokemon').then(function (response) {
                    _this.items = response;
                });

                return true;
            }
        }]);

        return PokedexController;
    }();

    angular.module('app').controller('PokedexController', PokedexController);
})(window.angular);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    /**
    * Constants of the service
    */

    var URL_API = 'https://pokeapi.co/api/v2/',
        DEFAULT_ROUTE = 'pokemon';

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
                    url = this.getRoute(route, id);

                this.$http.get(url).then(function (response) {

                    response = response.data;

                    if (!response) {
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

        }, {
            key: 'getRoute',
            value: function getRoute() {
                var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ROUTE;
                var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


                route = URL_API + route;

                if (id) {
                    route += '/' + id;
                }

                return route;
            }
        }]);

        return PokedexService;
    }();

    angular.module('app').service('$pokedex', PokedexService);
})(window.angular);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    var PokemonController = function () {
        function PokemonController($pokedex, $routeParams, CommentModel, PokemonModel) {
            _classCallCheck(this, PokemonController);

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


        _createClass(PokemonController, [{
            key: 'init',
            value: function init() {
                var _this = this;

                this.$pokedex.get('pokemon', this.$routeParams.id).then(function (response) {
                    _this.pokemon = _this.PokemonModel;
                    _this.pokemon.setData(response);
                });

                return true;
            }
        }, {
            key: 'sendComment',
            value: function sendComment() {
                debugger;
                this.pokemon.comment.save(this.comment.user, this.comment.text);

                this.comment.user = '';
                this.comment.text = '';
            }
        }]);

        return PokemonController;
    }();

    angular.module('app').controller('PokemonController', PokemonController);
})(window.angular);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular, firebase) {

    'use strict';

    var CommentModel = function () {
        function CommentModel() {
            _classCallCheck(this, CommentModel);

            this.get();
        }

        _createClass(CommentModel, [{
            key: 'setData',
            value: function setData(params) {
                this.pokemonName = params.name;
            }
        }, {
            key: 'save',
            value: function save(user, text) {

                var db = firebase.database().ref(this.pokemonName);

                this.all.push({
                    user: user,
                    text: text
                });

                db.set(this.all);
            }
        }, {
            key: 'get',
            value: function get() {
                var _this = this;

                var db = firebase.database().ref(this.pokemonName);

                db.once('value').then(function (response) {

                    _this.all = [];

                    if (response.val()) {
                        _this.all = response.val()[_this.pokemonName];
                    }
                });
            }
        }], [{
            key: 'instance',
            value: function instance() {
                return CommentModel;
            }
        }]);

        return CommentModel;
    }();

    angular.module('app').factory('CommentModel', CommentModel.instance);
})(window.angular, window.firebase);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    var PokemonModel = function () {
        function PokemonModel(CommentModel) {
            _classCallCheck(this, PokemonModel);

            this.CommentModel = CommentModel;
        }

        _createClass(PokemonModel, [{
            key: 'setData',
            value: function setData() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.name = params.name;

                this.comment = new this.CommentModel();
                this.comment.setData(this);
            }
        }], [{
            key: 'create',
            value: function create(CommentModel) {
                return new PokemonModel(CommentModel);
            }
        }]);

        return PokemonModel;
    }();

    angular.module('app').factory('PokemonModel', PokemonModel.create);
})(window.angular);
//# sourceMappingURL=bundle.js.map
