app.controller('passengerController',['$scope','$location','formArrivalValidation','$localstorage',function($scope,$location,formArrivalValidation,$localstorage){
	console.log("k");
	$scope.weluser=$localstorage.get('name');
	$scope.onFromChange = function () {

	console.log($scope.fromList);
	formArrivalValidation.settrainname($scope.fromList);
	$location.path('/passengerList');
}
$scope.onToChange = function () {

console.log($scope.toList);
}
	
	}]); 