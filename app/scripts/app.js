'use strict';

/**
 * @ngdoc overview
 * @name assignmentApp
 * @description
 * # assignmentApp
 *
 * Main module of the application.
 */
angular
  .module('assignmentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
