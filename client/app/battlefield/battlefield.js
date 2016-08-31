angular.module('app.battlefield', [])
  .controller('BattlefieldController', ['$scope', '$rootScope', '$timeout', '$interval', '$location', function ($scope, $rootScope, $timeout, $interval, $location, key) {
    $rootScope.backgroundImg = "url(/../../images/graveyard.gif)";

    $rootScope.gold = 0;
    $scope.enemies = $rootScope.enemies;
    $scope.difficulty = $rootScope.difficulty;
  



    $scope.place = function () {
      for (var i = 0; i < $rootScope.difficulty; i ++) {
        $scope.enemies[i]={};

        $scope.enemies[i].x = Math.random() * $rootScope.width;
        $scope.enemies[i].y = Math.random() * $rootScope.height;
        $scope.enemies[i].time = Math.random() * $rootScope.waveTimer;
        $scope.enemies[i].alive = true;
        $scope.enemies[i].url = $rootScope.defaultEnemy;
        $scope.fade(i, $scope.enemies[i].time, $scope.enemies[i].x);
      }

    };

    $scope.store = function() {
      console.log($location);
      $location.path('/store').replace();
    };

    $scope.showName = function() {
      $scope.name = $rootScope.name;
    //   console.log($rootScope.name);
    };

    $scope.explode = function (ind, testVal) {

      console.log($scope.enemies[ind].x,testVal);
      if ($scope.enemies[ind].x === testVal) {
        
        $rootScope.health = $rootScope.health - 5;
        $scope.enemies[ind].url = "/../../images/explodeOnce.gif";
        if ($rootScope.health < 0) {
          $scope.gameover();
        }
      }  
    };

    $scope.remove = function (ind, testVal) {

      if ($scope.enemies[ind].x === testVal) {
        console.log('removing');
        $scope.enemies[ind] = 0;
      }  
    };

    $scope.gameover = function() {
      $location.path('/gameover').replace();
    };





    $scope.fade = function(index, time, x) {
      $timeout(function () {
        $scope.$apply(function () {
          $scope.explode(index, x );
        });

        $timeout(function () {
          $scope.$apply(function() { 
            $scope.remove(index, x);
          });  
        }, 500);

      }, (2 + time) * 1000);

      
    };

    $scope.once= function(x,y,imgPath){
      var p = angular.element("<img id=zap style=top:"+y+"px; left:"+x+"px src="+imgPath+">")[0]; // now it's node
      document.body.appendChild(p);


    };

    $scope.kill = function (index) {

      $scope.enemies[index].url = "/../../images/bop.gif";
      if ($scope.enemies[index].alive) {
        $rootScope.gold++;
      }
      $scope.enemies[index].alive = false;
      $timeout(function () {
        $scope.enemies[index]=0;

      }, 500);


      console.log("killenemies",$scope.enemies);
      
      
    };

    $interval(function () {

      $scope.place();
      $scope.$emit('refresh');
      console.log("placing");
    }, $rootScope.waveTimer * 1000);

    
  }]);  