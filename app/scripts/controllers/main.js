'use strict';

/**
* @ngdoc function
* @name assignmentApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the assignmentApp
*/
angular.module('assignmentApp')
.controller('MainCtrl', function ($scope, $http) {

  $http({
    method: 'GET',
    url: 'localhost:3000/recipe'
  }).then(function successCallback(response) {
    $scope.recipes = response.data;
  });
});
