'use strict';

/**
* @ngdoc function
* @name assignmentApp.controller:LoginCtrl
* @description
* # LoginCtrl
* Controller of the assignmentApp
*/
angular.module('assignmentApp')
.controller('LoginCtrl', function ($scope, $http) {

	$scope.user = {};

	// $scope.login = function(){
	// 	$http({
	// 		method: 'POST',
	// 		url: 'http://localhost:3000/auth/login',
	// 		data: JSON.stringify($scope.user),
	// 		headers: {'Content-Type': 'application/json'
	// 		}
	// 	}).then(function successCallback(response) {
	// 		console.log('Reg successful');
	// 		$location.path('/login');

	// 	}, function errorCallback(response) {
	// 		console.log(response);
	// 	});
	// };

});
