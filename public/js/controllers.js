'use strict';

angular.module('blueit')
  .controller('HomeCtrl', [HomeCtrl])
  .controller('AuthCtrl', ['$location', 'authService', AuthCtrl])
  .controller('SessionCtrl', ['$location', 'authService', SessionCtrl]);

function HomeCtrl() {
  var vm = this;
  vm.title = 'Homepage';
}

function AuthCtrl($location, authService) {
  var vm = this;
  vm.title = 'User Registration';
  vm.registerUser = registerUser;

  function registerUser(data) {
    authService.registerUser(data)
      .then(function(res) {
        if (res.status === 200) {
          $location.path('/login');
          Materialize.toast('User registered successfully', 4000);
        }
      })
      .catch(function(err) {
        console.error(err);
      });
  }
}

function SessionCtrl($location, authService) {
  var vm = this;
  vm.title = 'User Login';
  vm.loginUser = loginUser;
  vm.logoutUser = logoutUser;

  function loginUser(data) {
    authService.loginUser(data)
      .then(function(res) {
        if (res.status === 200) {
          $location.path('/');
          Materialize.toast('Logged in', 4000);
        }
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  function logoutUser() {
    authService.logoutUser()
      .then(function(res) {
        if (res.status === 200) {
          $location.path('/');
          Materialize.toast('Logged out', 4000);
        }
      })
      .catch(function(err) {
        console.error(err);
      });
  }
}
