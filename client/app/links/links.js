angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) { //add Links as a parameter
  $scope.data = {};
  var getAll = function(){
    Links.getAll()
    .then(function(data){
      $scope.data.links = data;
    })
    .catch(function(err){
      console.log(err);
    });
  }
  getAll();
});
