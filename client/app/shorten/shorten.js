angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function() {
   Links.addOne({url: $scope.linkInput})
    .then(function(newLink) {
      $scope.link = newLink;
      $scope.message = undefined;
    })
    .catch(function(err){
      $scope.message = err.data.error;
      $scope.link = undefined;
    });
    $scope.linkInput = '';
  };
});
