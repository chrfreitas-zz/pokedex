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

    var scope = {};

    var PokemonController = function () {
        function PokemonController($pokedex, $routeParams, CommentModel, PokemonModel) {
            _classCallCheck(this, PokemonController);

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


        _createClass(PokemonController, [{
            key: 'init',
            value: function init() {

                scope.$pokedex.get('pokemon', scope.$routeParams.id).then(function (response) {
                    scope.pokemon = scope.PokemonModel;
                    scope.pokemon.setData(response);

                    scope.comment = scope.CommentModel;
                    scope.comment.setData(scope.pokemon);

                    scope.comment.get().then(function (response) {
                        scope.comment.all = response;
                    });
                });

                return true;
            }
        }, {
            key: 'sendComment',
            value: function sendComment() {
                scope.pokemon.comment.save(scope.comment.user, scope.comment.text);

                scope.clearFormComments();
            }
        }, {
            key: 'clearFormComments',
            value: function clearFormComments() {
                scope.comment.user = '';
                scope.comment.text = '';
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
        function CommentModel($q) {
            _classCallCheck(this, CommentModel);

            /**
            * Services
            */
            this.$q = $q;

            /**
            * Properties
            */
            this.pokemon = '';
        }

        _createClass(CommentModel, [{
            key: 'setData',
            value: function setData(params) {
                this.pokemon = params.name;
            }
        }, {
            key: 'save',
            value: function save(user, text, old) {
                var db = firebase.database().ref(this.pokemon);

                old.push({
                    user: user,
                    text: text
                });

                db.set(old);
            }
        }, {
            key: 'get',
            value: function get() {

                var db = firebase.database().ref(this.pokemon),
                    defer = this.$q.defer();

                db.once('value').then(function (response) {
                    defer.resolve(response.val());
                }).catch(function (err) {
                    defer.reject(err);
                });

                return defer.promise;
            }
        }], [{
            key: 'create',
            value: function create($q) {
                return new CommentModel($q);
            }
        }]);

        return CommentModel;
    }();

    angular.module('app').factory('CommentModel', CommentModel.create);
})(window.angular, window.firebase);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {

    'use strict';

    var PokemonModel = function () {
        function PokemonModel() {
            _classCallCheck(this, PokemonModel);

            this.name = '';
        }

        _createClass(PokemonModel, [{
            key: 'setData',
            value: function setData() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.name = params.name;
            }
        }], [{
            key: 'create',
            value: function create() {
                return new PokemonModel();
            }
        }]);

        return PokemonModel;
    }();

    angular.module('app').factory('PokemonModel', PokemonModel.create);
})(window.angular);
//# sourceMappingURL=bundle.js.map
