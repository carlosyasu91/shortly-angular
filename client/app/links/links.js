angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) { //add Links as a parameter
  if (!Auth.isAuth) {
    $location.path('/signin');
  }
  Links.getAll()
  .then(function(data){
    $scope.data = data;
  })
  .catch(function(err){
    console.log(err);
  });
});
