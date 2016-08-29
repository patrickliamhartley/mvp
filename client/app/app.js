angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/home.html',
        controller: 'HomeController'
      });
  }
]);
