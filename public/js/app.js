var app = angular.module('app', ['ngAnimate']);

app.controller('MainController', function($scope, $animate){
	$scope.message = 'Hello Helene';
	$scope.isSelected = '';
	
	$scope.names = [];
	
	$scope.user = {
		name: '',
		country: '',
	};

	$scope.add = function(name, country){
		$scope.names.push({name:name, country:country});
        $scope.user.name = '';
        $scope.user.country  ='';
	};

	$scope.selected = function(selected){
		$scope.isSelected = selected;
		alert($scope.isSelected);
	}

});

app.directive('contactForm', function(){
    return function(scope, element, attrs){
           element.text('Name: ' + scope.names);
    }
});