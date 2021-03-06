angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    $http({
        method: 'POST',
        url: 'http://localhost:1337/auth/signin',
        data: {password: $scope.loginData.password,
            identifier: $scope.loginData.username}
    }).then(function successCallback(response) {(
        console.log(response),
        $scope.token = response.data.token,
        $scope.username = response.data.user.username,
        $state.go('app.user'))
    }, function () {
        console.log("bite");
    });

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('User', function($scope) {
})

.controller('loginCtrl', function($scope, $http) {
  $scope.getUsers = function(){
    /*$http.get('http://localhost:1337/user', { headers : { 'Authorization' : 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoidGhhcnNhbjUiLCJlbWFpbCI6Imp1bGlvbGVtZWdhYm9zc0BqdWxpby5mciIsImZpcnN0TmFtZSI6IiIsImxhc3ROYW1lIjoiIiwiaWQiOjJ9LCJpYXQiOjE0NzYzNzA1MTF9.G9Xtxg7bf6Uv3H33W8IBWT0IZTKOenULg7LKbMMDCZg'} })
        .then(function successCallback(response) {
      $scope.users = response.data;
          console.log($scope.users);

    });*/

  };
  $scope.getUsers();
});