angular.module('app.home',[])
  .controller('HomeController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    


    $scope.add = function(val) {
      $rootScope.name = val;
      $rootScope.enemies = [];
      $rootScope.waveTimer= 10 - ($scope.difficulty / 3);
      $rootScope.difficulty=$scope.difficulty;
      $rootScope.height = window.innerHeight; 
      $rootScope.health= 100;
      $rootScope.width = window.innerWidth;
      for (var i = 0; i <$scope.difficulty; i ++){
        $rootScope.enemies.push({
          x: null,
          y: null,
          time: null
        });
      }

      console.log($rootScope.name, $rootScope.difficulty, $rootScope.enemies);
      $location.path('/battlefield').replace();
    };
  }]);    
