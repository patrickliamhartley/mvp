angular.module('app.home',[])
  .controller('HomeController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    
    $scope.add = function(val) {
      $rootScope.name = val;

      console.log($rootScope.name);
      $location.path('/battlefield').replace();
    };
  }]);    
