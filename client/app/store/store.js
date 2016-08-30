angular.module('app.store', [])
  .controller('StoreController', ['$scope', '$rootScope','$location', function ($scope, $rootScope,$location) {
    $rootScope.backgroundImg = "url(/../../images/store.gif)";
    $scope.ahide = false;
    // $scope.gold = $rootScope.gold;

    $scope.armor = function(){
      $rootScope.itemImg[0] = "/../../images/armor.png";
      $scope.ahide = true;
      $rootScope.gold = $rootScope.gold - 50;



    };

    $scope.potion = function() {
      $rootScope.gold = $rootScope.gold - 20;
      $rootScope.health = $rootScope.health + 10;
    };

    $scope.battle = function() {
      $location.path('/battlefield').replace();
    };

  }]);