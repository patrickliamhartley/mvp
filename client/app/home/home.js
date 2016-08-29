angular.module('app.home',[])
  .controller('HomeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    
    $scope.add = function(val){
      $rootScope.name = val;
      console.log($rootScope.name);
    };
  }]);    
