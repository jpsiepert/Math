var app = angular.module('SchoolRef', ['ngRoute', 'firebase', 'textAngular']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'Home/home.html',
		controller: 'HomeCtrl'
	}).when('/math', {
		templateUrl: 'Math/math.html',
		controller: 'MathCtrl',
		resolve: {
			mathRef: function(mainService){
				return mainService.getMathEquations();
			}
		}
	}).when('/english', {
	 	templateUrl: 'English/english.html', 
	 	controller: 'EnglishCtrl',
	 	resolve: {
	 		englishRef: function(mainService){
	 			return mainService.getEnglishTips();
	 		}
	 	}
 	}).when('/science', {
		templateUrl: 'Science/science.html', 
		controller: 'ScienceCtrl', 
		resolve: {
			scienceRef: function(mainService){
				return mainService.getScienceEquations();
			}
		}
	}).when('/javascript', {
		templateUrl: 'JavaScript/javascript.html', 
		controller: 'JavascriptCtrl',
		resolve: {
			javascriptRef: function(mainService){
				return mainService.getJavascriptStuffs();
			}
		}
	})
})