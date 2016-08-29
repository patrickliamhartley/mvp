angular.module('app', ['ngRoute',
  'app.home',
  'app.battlefield'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .when('/battlefield', {
        templateUrl: 'app/battlefield/battlefield.html',
        controller: 'BattlefieldController'
      });
  })
  .run(function ($rootScope){
    $rootScope.name = null;
  });
