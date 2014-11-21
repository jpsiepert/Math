var app = angular.module("SchoolRef", []);

app.config($routeProvider, function(){
	$routeProvider
	.when("/", {
		templateUrl: "home.html",
		controller: "HomeCtrl"
	})
})