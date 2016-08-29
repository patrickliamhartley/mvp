angular.module('app.home',[])
  .controller('HomeController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    
    $scope.add = function(val) {
      $rootScope.name = val;
      $rootScope.difficulty=$scope.difficulty;

      console.log($rootScope.name, $rootScope.difficulty);
      $location.path('/battlefield').replace();
    };
  }]);    
