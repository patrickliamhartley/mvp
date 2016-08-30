angular.module('app.battlefield', [])
  .controller('BattlefieldController', ['$scope', '$rootScope', '$timeout', '$interval', function ($scope, $rootScope, $timeout, $interval, key) {
    $scope.gold = 0;
    $scope.enemies = $rootScope.enemies;
    $scope.difficulty = $rootScope.difficulty;

    $scope.place = function () {
      for (var i = 0; i < $rootScope.difficulty; i ++) {
        $scope.enemies[i].x = Math.random() * $rootScope.width;
        $scope.enemies[i].y = Math.random() * $rootScope.height;
        $scope.enemies[i].time = Math.random() * 5;
      }
      $scope.$emit('refresh');

    };

    $scope.showName = function() {
      $scope.name = $rootScope.name;
    //   console.log($rootScope.name);
    };

    $scope.fade = function(key, time) {
      
      $timeout(function () {
        key.hidden = true;
      }, time*1000);
      
    };

    $scope.kill = function (key) {
      key.hidden=true;
      console.log("index");
      
      $scope.gold++;
      console.log($scope.enemies);
    };

    $interval(function (){

      $scope.enemies= [];
      for (var i = 0; i < $scope.difficulty; i ++) {
        $scope.enemies.push({
          x: null,
          y: null,
          time: null
        });
      }
      $scope.place();
      console.log("placing");
    }, 5000);

    $scope.$on('refresh', function () {
      for (var i = 0; i < $scope.difficulty; i ++) {
        $scope.fade($scope.enemies[i],$scope.enemies[i].time);
      }  
    });
    
  }]);  