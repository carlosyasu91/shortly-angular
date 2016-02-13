angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function() {
   Links.addOne({url: $scope.linkInput})
    .then(function(newLink) {
      $scope.link = newLink;
    })
    .catch(function(err){
      console.log(err);
    });
    $scope.linkInput = '';
  };
});
