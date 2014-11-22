var app = angular.module('SchoolRef')

app.controller('EnglishCtrl', function($scope, englishRef){

	$scope.submitEnglishButton = true;
	$scope.submitEnglish = false;

	$scope.englishes = englishRef;

	$scope.showEnglishForm = function(){
		$scope.submitEnglishButton = false;
		$scope.submitEnglish = true;
	}

	$scope.hideEnglishForm = function(){
		$scope.submitEnglishButton = true;
		$scope.submitEnglish = false;

	}


	$scope.addEnglishTip = function(){
		$scope.english.timestamp = Date.now();
		$scope.englishes.$add($scope.english);
		$scope.english = '';
		$scope.submitEnglishButton = true;
		$scope.submitEnglish = false;
	}
})	