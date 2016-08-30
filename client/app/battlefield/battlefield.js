angular.module('app.battlefield', [])
  .controller('BattlefieldController', ['$scope', '$rootScope', '$timeout', '$interval', '$location', function ($scope, $rootScope, $timeout, $interval, $location, key) {
    $rootScope.backgroundImg = "url(/../../images/graveyard.gif)";

    $rootScope.gold = 0;
    $scope.enemies = $rootScope.enemies;
    $scope.difficulty = $rootScope.difficulty;


    $scope.place = function () {
      for (var i = 0; i < $rootScope.difficulty; i ++) {
        $scope.enemies[i].x = Math.random() * $rootScope.width;
        $scope.enemies[i].y = Math.random() * $rootScope.height;
        $scope.enemies[i].time = Math.random() * $rootScope.waveTimer;
        $scope.enemies[i].alive=true;
        $scope.enemies[i].url="/../../images/walkskel.gif";
        $scope.fade(i, $scope.enemies[i].time,$scope.enemies[i].x);
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

    $scope.explode=function (ind,testVal, $location, $scope){

      if ($scope.enemies[ind].x === testVal) {
        
        $rootScope.health = $rootScope.health - 1;
        $scope.enemies[ind].url = "/../../images/explodeOnce.gif";
        if ($rootScope.health < 0) {
          $scope.gameover();
        }
      }  
    };

    $scope.remove = function (ind, testVal){

      if ($scope.enemies[ind].x === testVal) {
        
        $scope.enemies.splice(ind, 1);
      }  
    };

    $scope.gameover = function(){
      $location.path('/gameover').replace();
    };





    $scope.fade = function(index, time, x, $location) {
      var setScope=$scope;
      var loc= $location;
      $timeout(function () {
        $scope.explode(index, x, loc, setScope );

        $timeout(function () { 
          $scope.remove(index, x, setScope);
        }, 500);

      }, (2 + time) * 1000);

      
    };

    $scope.once= function(x,y,imgPath){
      var p = angular.element("<img id=zap style=top:"+y+"px; left:"+x+"px src="+imgPath+">")[0]; // now it's node
      document.body.appendChild(p);


    };

    $scope.kill = function (index) {
      // var x =$scope.enemies[index].x;
      // var y =$scope.enemies[index].y;
      // console.log(x,y);
      // $scope.once(x,y,'/../../images/bop.gif');
      $scope.enemies[index].url = "/../../images/bop.gif";
      if ($scope.enemies[index].alive) {
        $rootScope.gold++;
      }
      $scope.enemies[index].alive = false;
      $timeout(function () {
        $scope.enemies.splice(index, 1);

      }, 500);


      console.log("killenemies",$scope.enemies);
      
      
    };

    $interval(function () {
     
      // $rootScope.health= $rootScope.health - $scope.enemies.length;
      $scope.enemies = [];
      for (var i = 0; i < $scope.difficulty; i ++) {
        $scope.enemies.push({
          x: null,
          y: null,
          time: null,

        });
      }
      $scope.place();
      $scope.$emit('refresh');
      console.log("placing");
    }, $rootScope.waveTimer * 1000);

    // $scope.$on('refresh', function () {
    //   console.log("refresh",$scope.enemies.length);
    //   for (var i = 0; i < $scope.enemies.length; i ++) {
    //     $scope.fade(i, $scope.enemies[i].time);
    //   }  
    // });
    
  }]);  