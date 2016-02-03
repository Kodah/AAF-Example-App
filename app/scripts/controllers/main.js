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
		url: 'http://localhost:3000/recipes',
		headers: {'Content-Type': 'application/json'
		}
	}).then(function successCallback(response) {
		console.log('Reg successful');
		console.log(response);
		$scope.recipes = response.data;

	}, function errorCallback(response) {
		console.log(response);
	});
});
