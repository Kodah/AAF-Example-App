'use strict';

/**
* @ngdoc function
* @name assignmentApp.controller:LoginCtrl
* @description
* # LoginCtrl
* Controller of the assignmentApp
*/
angular.module('assignmentApp')
.controller('LoginCtrl', function ($scope, $http, $location) {

	$scope.user = {};

	$scope.login = function(){
		$http({
			method: 'POST',
			url: 'http://localhost:3000/authentication',
			data: JSON.stringify($scope.user),
			headers: {'Content-Type': 'application/json'
			}
		}).then(function successCallback(response) {
			console.log('Login successful -' + response.data);
			// $location.path('/login');

		}, function errorCallback(response) {
			console.log(response);
		});
	};

});
