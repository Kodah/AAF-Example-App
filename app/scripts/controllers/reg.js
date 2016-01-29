'use strict';

/**
* @ngdoc function
* @name assignmentApp.controller:RegCtrl
* @description
* # MainCtrl
* Controller of the assignmentApp
*/

angular.module('assignmentApp')
.controller('RegCtrl', function ($scope, $http, $location) {

	$scope.user = {};


	$scope.register = function(){
		$http({
			method: 'POST',
			url: 'http://localhost:3000/auth/register',
			data: JSON.stringify($scope.user),
			headers: {'Content-Type': 'application/json'
			}
		}).then(function successCallback(response) {
			console.log('Reg successful');
			$location.path('/login');

		}, function errorCallback(response) {
			console.log(response);
		});
	};
});