angular.module('app.battlefield',[])
  .controller('BattlefieldController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    
    $scope.showName = function() {
      $scope.name = $rootScope.name;
    //   console.log($rootScope.name);
    };
    
  }]);  