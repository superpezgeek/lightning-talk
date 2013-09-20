'use strict';

angular.module('lightningTalkApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
        .when('/pretty', {
            templateUrl: 'views/pretty.html'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
