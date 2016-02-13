// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  if($location.$$path ==='/signout'){
    Auth.signout();
  }

  // if ($scope.user.password && $scope.user.password.length < 6) {
  $scope.error = $scope.user.password;
    // $scope.message = 'Password needs to be at least 6 characters';
  // } else if ($scope.user.password && $scope.user.password.length >= 6) {
    // console.log('good');
    // $scope.clean =  true;
    // $scope.message = 'Good job!';
  // }
  $scope.validPassword = function() {
    console.log('calling valid password');
    if ($scope.user.password && $scope.user.password.length < 6) {
      $scope.error =  true;
      $scope.clean =  false;
      $scope.message = 'Password needs to be at least 6 characters';
    } else if ($scope.user.password && $scope.user.password.length >= 6){
      $scope.error =  false;
      $scope.clean =  true;
      $scope.message = 'Good job!';
    }
  };

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
