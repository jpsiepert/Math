var app = angular.module('SchoolRef')

app.service('mainService', function($firebase){

	var fbUrl = 'https://school-references.firebaseio.com/';

	this.getMathEquations = function(){
		return $firebase(new Firebase(fbUrl + '/math')).$asArray();
	};

	this.getEnglishTips = function(){
		return $firebase(new Firebase(fbUrl + '/english')).$asArray();
	}

	this.getScienceEquations = function(){
		return $firebase(new Firebase(fbUrl + '/science')).$asArray();
	}

	this.getJavascriptStuffs = function(){
		return $firebase(new Firebase(fbUrl + '/javascript')).$asArray();
	}
})	
