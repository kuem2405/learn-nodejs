///<reference path="angular.js" />

var myApp = angular.module('myModule', []);

myApp.controller('myController', myController);

function myController($scope) {
	var employee = {
		FirstName : 'Mark',
		LastName : 'Hastings',
		Gender : 'Male'
	};

	$scope.employee = employee;
}