'use strict';

(function (angular) {

   var app = angular.module('app', ['ngRoute']);

   app.config(function ($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider.when('/', {
         templateUrl: '../views/home.html',
         controller: 'HomeController'
      }).otherwise({ redirectTo: '/' });
   });
})(angular);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (angular) {
    'use strict';

    var HomeController = function () {
        function HomeController($http) {
            _classCallCheck(this, HomeController);

            this.$http = $http;
        }

        _createClass(HomeController, [{
            key: 'getPokemons',
            value: function getPokemons() {
                return;
            }
        }]);

        return HomeController;
    }();

    angular.module('app').controller('HomeController', HomeController);
})(angular);