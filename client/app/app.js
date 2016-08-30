angular.module('app', ['ngRoute',
  'app.home',
  'app.battlefield',
  'app.gameover',
  'app.store'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .when('/store', {
        templateUrl: 'app/store/store.html',
        controller: 'StoreController'
      })
      .when('/gameover', {
        templateUrl: 'app/gameover/gameover.html',
        controller: 'GameoverController'
      })
      .when('/battlefield', {
        templateUrl: 'app/battlefield/battlefield.html',
        controller: 'BattlefieldController'
      });
  })
  .run(function ($rootScope){
    $rootScope.name = null;
  });
