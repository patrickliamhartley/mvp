angular.module('app.store', [])
  .controller('StoreController', ['$scope', '$rootScope','$location', function ($scope, $rootScope,$location) {
    $rootScope.backgroundImg = "url(/../../images/store.gif)";
    $scope.ahide = false;
    $scope.whide=false;
    $rootScope.itemImg = [];
    // $scope.gold = $rootScope.gold;

    $scope.armor = function() {
      $rootScope.itemImg.push("/../../images/armor.png");
      $scope.ahide = true;
      $rootScope.gold = $rootScope.gold - 50;
      $rootScope.health = $rootScope.health + 50;
    };

    $scope.wand = function(){
      $rootScope.itemImg.push("/../../images/wand.gif");
      $scope.whide = true;
      $rootScope.gold = $rootScope.gold - 100;
      $rootScope.enemySize = 300;
      $rootScope.defaultEnemy = "/../../images/frog.gif";
    };

    $scope.potion = function() {
      if ($rootScope.gold > 20) {
        $rootScope.gold = $rootScope.gold - 20;
        $rootScope.health = $rootScope.health + 10;
      }
    };

    $scope.battle = function() {
      $location.path('/battlefield').replace();
    };

  }]);