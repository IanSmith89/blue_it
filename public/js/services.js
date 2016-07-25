'use strict';

angular.module('blueit')
  .service('authService', ['$http', authService]);

function authService($http) {
  var registerUser = function(data) {
    return $http.post('/users', data)
      .then(function(res) {
        return res;
      }, function(err) {
        throw err;
      });
  };

  var loginUser = function(data) {
    return $http.post('/session', data)
      .then(function(res) {
        return res;
      }, function(err) {
        throw err;
      });
  };

  var logoutUser = function() {
    return $http.delete('/session')
      .then(function(res) {
        return res;
      }, function(err) {
        throw err;
      });
  };

  return {
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser
  };
}
