var app = angular.module('SchoolRef')

app.controller('JavascriptCtrl', function($scope, javascriptRef){
	$scope.javascripts = javascriptRef
	$scope.submitJavascriptButton = true;
	$scope.submitJavascript = false;

	$scope.showJavascriptForm = function(){
		$scope.submitJavascriptButton = false;
		$scope.submitJavascript = true;
	}

	$scope.hideJavascriptForm = function(){
		$scope.submitJavascriptButton = true;
		$scope.submitJavascript = false;
	}

	$scope.addJavascript = function(javascript){
	
		//var d = new Date();
		javascript.timestamp = Date.now();
		$scope.javascripts.$add(javascript);
		$scope.javascript = '';
		$scope.submitJavascriptButton = true;
		$scope.submitJavascript = false;
		
	}

})

//Title: Array vs Object 
//Code: var myArr = [val1, val2, val3]; var myObj = {key: value, key: value, key: value}; 
//Example: var numArr = [1, 2, 3]: arrays have order, meaning they have indexes, which are their "keys" (hence in Javascript why arrays are objects with order) So you can say numArr[1] = 2; (remember indexing starts at 0) var numObj = {three: 3, seven: 7, eight: 8}; where numObj[three] = 3 

// Title: Recursion! 
// Code: var fn = function(num){ if(num < 1){ return 0 }else { console.log(num) fn(num - 1) } } 
// Example: fn(3) will return (or print to the console): 3, 2, 1 the if statement will be falsey (num = 3) so will show 3, then we call the function again, with num -1, so a 2 now, which again the if statement will be falsey and go on to show 2, then 1, then it will be 0, where we aren't having anything print to the console and will end the function call. 
