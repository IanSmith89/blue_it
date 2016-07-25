'use strict';

angular.module('blueit')
  .config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl as HC'
    })
    .when('/register', {
      templateUrl: 'views/registration.html',
      controller: 'AuthCtrl as AC'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'SessionCtrl as SC'
    });
  });
