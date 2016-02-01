'use strict';

/**
* @ngdoc function
* @name assignmentApp.controller:RegCtrl
* @description
* # RegCtrl
* Controller of the assignmentApp
*/

angular.module('assignmentApp')
.controller('RegCtrl', function ($scope, $http, $location) {

	$scope.user = {};


	$scope.register = function(){
		$http({
			method: 'POST',
			url: 'http://localhost:3000/register',
			data: JSON.stringify($scope.user),
			headers: {'Content-Type': 'application/json'
			}
		}).then(function successCallback(response) {
			console.log('Reg successful');
			console.log(response);
			$location.path('/login');

		}, function errorCallback(response) {
			console.log(response);
		});
	};
});