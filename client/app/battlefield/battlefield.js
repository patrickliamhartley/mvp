angular.module('app.battlefield',[])
  .controller('BattlefieldController', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
    $scope.gold=0;
    $scope.enemies= $rootScope.enemies;

    $scope.showName = function() {
      $scope.name = $rootScope.name;
    //   console.log($rootScope.name);
    };

    $scope.fade= function() {
      $timeout(function (){
        $scope.hidden=true;
      },2000);
    };

    $scope.kill= function (){
      $scope.hidden=true;
      $scope.gold++;
    };
    
  }]);  