app.controller('loginController',['$scope','formArrivalValidation','$location','$localstorage',function($scope,formArrivalValidation,$location,$localstorage){
	$scope.master = {};
  $scope.pass={};

  //$scope.a=$localstorage.get('name');
  var post = $localstorage.getObject('post');
          $scope.a=post.name;
          $scope.b=post.password;
  console.log($scope.master);
      $scope.save = function(username,pswd) {

        $scope.master = angular.copy(username);
         $scope.pass=angular.copy(pswd);
        console.log($scope.master);
        $scope.val=formArrivalValidation.validateInfoField($scope.master,$scope.pass,$scope.a,$scope.b);
        console.log($scope.val);
        if($scope.val==true)
        {
        	alert ("username is correct");
          if($scope.captcha != $scope.crcttext){
         alert("Invalid captcha")
        }
        else
        {
        	 $location.path('/passenger');
        }
        }
        else
        {
          alert ("incorrect");
        }
        
   
      };
      $scope.past = function() {
            console.log("d");
            $scope.val ="  ";
      }
console.log($scope.master);
console.log("something")
 $scope.refresh = function() {
var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
                     var i;
                     for (i=0;i<6;i++){
                       var a = alpha[Math.floor(Math.random() * alpha.length)];
                       var b = alpha[Math.floor(Math.random() * alpha.length)];
                       var c = alpha[Math.floor(Math.random() * alpha.length)];
                       var d = alpha[Math.floor(Math.random() * alpha.length)];
                       var e = alpha[Math.floor(Math.random() * alpha.length)];
                       var f = alpha[Math.floor(Math.random() * alpha.length)];
                       var g = alpha[Math.floor(Math.random() * alpha.length)];
                      }
                    var code = a + b + c +  d +  e + f +  g;
                    
                    $scope.captcha=code;
            
                  //   $scope.valid = function() {
                  //     if ($scope.captcha == $scope.crcttext){
                  //     	alert("true")
                  //       // return true;
                  //     }
                  //     else{        
                  //     	console.log("false")
                  //       // return false;
                  //     }
                  // }
	                  }
            
	}]); 