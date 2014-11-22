var app = angular.module('SchoolRef')

app.controller('ScienceCtrl', function($scope, scienceRef){
	$scope.sciences = scienceRef;
	$scope.submitScienceButton = true;
	$scope.submitScience = false;

	$scope.showScienceForm = function(){
		$scope.submitScienceButton = false;
		$scope.submitScience = true;
	};

	$scope.hideScienceForm = function(){
		$scope.submitScienceButton = true;
		$scope.submitSciene = false;
	}

	$scope.addScienceFormula = function(){
		$scope.science.timestamp = Date.now();
		$scope.sciences.$add($scope.science);
		$scope.science = '';
		$scope.submitScienceButton = true;
		$scope.submitScience = false;
	}

})