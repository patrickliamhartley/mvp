angular.module('app.store', [])
  .controller('StoreController', ['$scope', '$rootScope','$location', function ($scope, $rootScope,$location) {
    $rootScope.backgroundImg = "url(/../../images/store.gif)";
  }]);