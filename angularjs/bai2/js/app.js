///<reference path="angular.js" />

var myApp = angular.module('myModule', []);

myApp.controller('myController', myController);

function myController($scope) {
	$scope.message = 'Hello angularjs';
}