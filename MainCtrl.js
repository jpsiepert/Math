var app = angular.module('SchoolRef');

app.controller('MainCtrl', function($scope, $location){

	$scope.goToMath = function(){
		$location.path('/math');
	}

	$scope.goToEnglish = function(){
		$location.path('/english');
	}

	$scope.goToScience = function(){
		$location.path('/science')
	}

	$scope.goToJavascript = function(){
		$location.path('/javascript')
	}

	$scope.goToHome = function(){
		$location.path('/')
	}


})