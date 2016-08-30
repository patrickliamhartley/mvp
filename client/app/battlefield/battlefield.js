angular.module('app.battlefield', [])
  .controller('BattlefieldController', ['$scope', '$rootScope', '$timeout', '$interval', function ($scope, $rootScope, $timeout, $interval, key) {
    $rootScope.backgroundImg = "url(/../../images/graveyard.gif)";

    $scope.gold = 0;
    $scope.enemies = $rootScope.enemies;
    $scope.difficulty = $rootScope.difficulty;
    $scope.health = $rootScope.health;

    $scope.place = function () {
      for (var i = 0; i < $rootScope.difficulty; i ++) {
        $scope.enemies[i].x = Math.random() * $rootScope.width;
        $scope.enemies[i].y = Math.random() * $rootScope.height;
        $scope.enemies[i].time = Math.random() * $rootScope.waveTimer;
      }

    };

    $scope.showName = function() {
      $scope.name = $rootScope.name;
    //   console.log($rootScope.name);
    };

    $scope.fade = function(index, time) {
      
      $timeout(function () {
        console.log("settimeout",$scope.enemies[index]);
        if ($scope.enemies[index]) {
          console.log("exploding");
          $scope.enemies.splice(index, 1);
          $scope.health = $scope.health - 1;
        }

      }, (2 + time) * 1000);

      
    };

    $scope.kill = function (index) {
      $scope.enemies.splice(index, 1);
      console.log("index");
      
      $scope.gold++;
      console.log($scope.enemies);
    };

    $interval(function () {
     
      $scope.health= $scope.health - $scope.enemies.length;
      $scope.enemies = [];
      for (var i = 0; i < $scope.difficulty; i ++) {
        $scope.enemies.push({
          x: null,
          y: null,
          time: null
        });
      }
      $scope.place();
      $scope.$emit('refresh');
      console.log("placing");
    }, $rootScope.waveTimer * 1000);

    $scope.$on('refresh', function () {
      for (var i = 0; i < $scope.enemies.length; i ++) {
        $scope.fade(i, $scope.enemies[i].time);
      }  
    });
    
  }]);  