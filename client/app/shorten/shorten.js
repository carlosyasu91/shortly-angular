angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
   Links.addOne({url: $scope.linkInput})
    .then(function(resp) {
      $scope.link = resp.data;
      $scope.message = undefined;
    })
    .catch(function(err){
      $scope.message = err.data.error;
      $scope.link = undefined;
    });
    $scope.linkInput = '';
  };
});
