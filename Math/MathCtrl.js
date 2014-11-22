var app = angular.module('SchoolRef');

app.controller('MathCtrl', function($scope, mathRef){
	$scope.submitEquation = false;
	$scope.submitEquationButton = true;
	$scope.equations = mathRef;

	$scope.showEquationForm = function(){
		$scope.submitEquation = true;
		$scope.submitEquationButton = false;
	};

	$scope.hideEquationForm = function(){
		$scope.submitEquationButton = true;
		$scope.submitEquation = false;
	};

	$scope.addMathEquation = function(){
		$scope.math.timestamp = Date.now();
		var str = $scope.equation.formula;
		for(var i = 0; i<str.length;i++){
			if(str[i] === 'p' && str[i + 1] === 'i'){
				 str = str.slice(0, i) + 'π' + str.slice(i+2)
			} else if(str[i] === '*'){
				str = str.slice(0, i) + ' • ' + str.slice(i+1);
			}
				$scope.equation.formula = str;
			}
	if($scope.equation.example){
		var str2 = $scope.equation.example;
		for(var i = 0; i<str2.length;i++){
			if(str2[i] === 'p' && str2[i + 1] === 'i'){
				 str2 = str2.slice(0, i) + 'π' + str2.slice(i+2)
			} else if(str2[i] === '*'){
				str2 = str2.slice(0, i) + ' • ' + str2.slice(i+1);
			}
				$scope.equation.example = str2;
			}
		}
		$scope.equations.$add($scope.equation);
		$scope.equation = '';
		$scope.submitEquationButton = true;
		$scope.submitEquation = false;
	};

})