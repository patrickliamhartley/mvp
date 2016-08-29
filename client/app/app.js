angular.module('app', ['ngRoute',
  'app.home'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      });
  }
);
