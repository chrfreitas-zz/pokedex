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

    var scope = {};

    var PokedexController = function () {
        function PokedexController($pokedex) {
            _classCallCheck(this, PokedexController);

            scope = this;

            /**
            * Services
            */
            scope.$pokedex = $pokedex;

            /**
            * Properties
            */
            scope.items = [];
        }

        /**
        * Initialize PokedexController
        */


        _createClass(PokedexController, [{
            key: 'init',
            value: function init() {

                scope.$pokedex.get('pokemon').then(function (response) {
                    scope.items = response;
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

    var CommentController = function () {
        function CommentController($routeParams, CommentModel) {
            _classCallCheck(this, CommentController);

            scope = this;

            /**
            * Services
            */
            scope.$routeParams = $routeParams;
            scope.CommentModel = CommentModel;

            /**
            * Properties
            */
            scope.comment = {
                new: '',
                all: []
            };
        }

        /**
        * Initialize CommentController
        */


        _createClass(CommentController, [{
            key: 'init',
            value: function init() {

                scope.comment = scope.CommentModel;
                scope.comment.setData(scope.$routeParams.id);

                scope.comment.get().then(function (response) {
                    scope.comment.all = response || [];
                });

                return true;
            }

            /**
            * Add new comment in the list and save de list
            */

        }, {
            key: 'send',
            value: function send() {

                scope.comment.all.push({
                    user: scope.comment.new.user,
                    text: scope.comment.new.text
                });

                scope.comment.all = JSON.parse(angular.toJson(scope.comment.all));

                scope.comment.save(scope.comment.all);

                scope.clearForm();
            }

            /**
            * Just clear the form for new comment.
            */

        }, {
            key: 'clearForm',
            value: function clearForm() {
                scope.comment.new = {};
            }
        }]);

        return CommentController;
    }();

    angular.module('app').controller('CommentController', CommentController);
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

            /**
            * Properties
            */
            scope.pokemon = {};
            scope.loading = true;
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
                    scope.loading = false;
                });

                return true;
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
            value: function setData(pokemon) {
                this.pokemon = pokemon;
            }
        }, {
            key: 'save',
            value: function save(list) {
                var db = firebase.database().ref(this.pokemon);
                db.set(list);
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
            this.image = '';
            this.abilities = [];
            this.experience = 0;
        }

        _createClass(PokemonModel, [{
            key: 'setData',
            value: function setData() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.name = params.name;
                /*jshint camelcase: false */
                this.image = params.sprites.front_default;
                this.abilities = params.abilities;
                /*jshint camelcase: false */
                this.experience = params.base_experience;
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
