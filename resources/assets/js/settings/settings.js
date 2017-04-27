((angular) => {

    var app = angular.module('app', ['ngRoute']);

    app.config(function($routeProvider, $locationProvider) {

       $locationProvider.html5Mode(true);

       $routeProvider
       .when('/', {
          templateUrl : '../views/home.html',
          controller     : 'HomeController'
       })

       .otherwise ({ redirectTo: '/' });

    });
})(angular)
