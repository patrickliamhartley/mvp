angular.module('app.home',[])
  .controller('HomeController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $rootScope.backgroundImg = "url(/../../images/sunset.png)";


    $scope.add = function(val) {
      $rootScope.name = val;
      $rootScope.enemies = [];
      $rootScope.waveTimer= 10 - ($scope.difficulty / 3);
      $rootScope.difficulty=$scope.difficulty;
      $rootScope.height = window.innerHeight; 
      
      $rootScope.width = window.innerWidth;
      for (var i = 0; i <$scope.difficulty; i ++){
        $rootScope.enemies.push({
          x: null,
          y: null,
          time: null
        });
      }
      if ($scope.heroClass === "barb") {
        $rootScope.heroImg = "/../../images/warwalk.gif";
        $rootScope.health = 100;
        $rootScope.enemySize = 90;
      } else if ($scope.heroClass === "wiz") {
        $rootScope.heroImg = "/../../images/wiz3.gif";
        $rootScope.health = 75;
        $rootScope.enemySize = 150;
      }
      

      console.log($rootScope.name, $rootScope.difficulty, $rootScope.enemies);
      $location.path('/battlefield').replace();
    };
  }]);    
