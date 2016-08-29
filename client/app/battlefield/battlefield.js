angular.module('app.battlefield', [])
  .controller('BattlefieldController', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout,key) {
    $scope.gold = 0;
    $scope.enemies = $rootScope.enemies;

    $scope.place = function () {
      for (var i = 0; i < $rootScope.difficulty; i ++) {
        $scope.enemies[i].x = Math.random() * $rootScope.width;
        $scope.enemies[i].y = Math.random() * $rootScope.height;
        $scope.enemies[i].time = Math.random() * 5;
      }

    };

    $scope.showName = function() {
      $scope.name = $rootScope.name;
    //   console.log($rootScope.name);
    };

    $scope.fade = function() {
      $timeout(function () {
        $scope.hidden = true;
      }, 5000);
    };

    $scope.kill = function (key) {
      key.hidden=true;
      console.log("index");
      
      $scope.gold++;
      console.log($scope.enemies);
    };
    
  }]);  