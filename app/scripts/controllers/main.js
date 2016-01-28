'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignmentApp
 */
angular.module('assignmentApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
