app.controller('passengerListController',['$scope','$location','$http','formArrivalValidation',function($scope,$location,$http,formArrivalValidation){
console.log("un");
$scope.trainn=formArrivalValidation.gettrainname();
$scope.arr=[];
$scope.arr1=[];
$scope.arr2=[];
$scope.arr3=[];
 $http.get("assets/data/data.json").then(function (response) 
 		{

	        $scope.myWelcome = response.data.trains[0];
	        var keepGoing = true;
        angular.forEach($scope.myWelcome, function(key,value) 
        {
  			$scope.arr.push(key);//madurai,trichy
  			$scope.arr1.push(value);//object
  					
        angular.forEach($scope.arr1,function(val)
        {
        if(val==$scope.trainn && keepGoing==true)
        {
        	

			$scope.arr2.push(key);
			keepGoing = false;
	
        	$scope.arr3.push("trainname:"+$scope.arr2[0].train_name);
        	$scope.arr3.push("timing:"+$scope.arr2[0].timing);
        	$scope.arr3.push("available_seats:"+$scope.arr2[0].available_seats);
	    }
	    });
        });

	    });

		}]); 
