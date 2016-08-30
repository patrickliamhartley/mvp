angular.module('app.gameover', [])
  .controller('GameoverController', ['$scope', '$rootScope','$location', function ($scope, $rootScope,$location) {
    $rootScope.backgroundImg = "url(/../../images/hell.png)";
  }]);