app.controller('navigationController',['$scope','$location',function($scope,$location){
 
  // $scope.login = function() {
  // 	$location.path('/login');
  // }
  $scope.selected = true;
$scope.toggleLogin = function() {
  if($scope.selected) {
  	alert($scope.selected);
    $location.path('/login');
  }
};
$scope.toggleContact= function() {
  if($scope.selected) {
    $location.path('/contact');
  } 

};
$scope.toggleSign = function() {
  if($scope.selected) {
  	alert($scope.selected);
    $location.path('/sign');
  }
};
	}]); 