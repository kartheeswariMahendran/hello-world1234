app.controller('signController',['$scope','$location','$localstorage','$timeout',function($scope,$location,$localstorage,$timeout){
$scope.postobj=$localstorage.getObject('post')?$localstorage.getObject('post'):[];
$scope.master1={};
$scope.master2={};
$scope.master3={};
$scope.master4={};
$scope.loginAlertMessage = false;
//$scope.postobj=[];
$scope.signsave = function(uname,password,mobile,email) {
  $scope.loginAlertMessage=true; 
         $timeout(function ()
          { 
          $scope.loginAlertMessage = false; 
          }, 1000);  
	      $scope.master1=uname;
        $scope.master2=password;
        $scope.master3=mobile;
        $scope.master4=email;
	      $localstorage.set('name',$scope.master1);
        console.log($localstorage.get('name'));
        $scope.postobj.push({
                name: $scope.master1,
                password: $scope.master2,
                phone: $scope.master3,
                email: $scope.master4

              });
          $localstorage.setObject('post',$scope.postobj); 


          var post = $localstorage.getObject('post');
          alert("postname"+post.name);
          $location.path('/navigation');
          
	
	 
}

	}]); 
