angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $state, UserSrv) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  // Form data for the login modal
  $scope.loginData = {};
  $scope.registerData = {};
  $scope.user = UserSrv.user;
  $scope.token = UserSrv.token;

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
        UserSrv.doLogin($scope.loginData.username,$scope.loginData.password).then(function(data){
            $state.go('app.user');
        },
            function(){
                console.log('KO')
            }
        );
    }

    $scope.loginData = {
        username : "tharsan4",
        password : "password"
    }

    $scope.doSignUp = function() {
        $http({
            method: 'POST',
            url: 'http://localhost:1337/auth/signup',
            data: {username: $scope.registerData.username
                ,
                password: $scope.registerData.password,
                email: $scope.registerData.email,
                lastname: $scope.registerData.lastname,
                firstname: $scope.registerData.firstname}
        }).then(function successCallback(response) {(
                console.log(response),
                $state.go('app.login'))
        }, function () {
            console.log("rate");
        });
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

.controller('User', function($scope, $ionicHistory,UserSrv) {
    console.log($scope.username);
    $scope.user = UserSrv.user;
    $scope.token = UserSrv.token;
})

.controller('signupCtrl', function($scope) {
})

.controller('cameraCtrl', function($scope) {

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