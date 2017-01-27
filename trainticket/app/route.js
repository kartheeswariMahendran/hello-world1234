
app.config(['$routeProvider',function ($routeProvider){
               $routeProvider
               .when('/navigation',{
                                                templateUrl : 'partials/navigation.html',
                                                controller:'navigationController'
                                                
                                })
                                .when('/login',{
                                                templateUrl : 'partials/login.html',
                                                controller:'loginController'
                                })
                                .when('/sign',{
                                                templateUrl : 'partials/sign.html',
                                                controller:'signController'
                                })
                                .when('/contact',{
                                                templateUrl : 'partials/contact.html',
                                                
                                })
                                .when('/passenger',{
                                                templateUrl : 'partials/passenger.html',
                                                controller:'passengerController'
                                })
                                .when('/passengerList',{
                                                templateUrl : 'partials/passengerList.html',
                                              controller:'passengerListController'
                                })
                                .otherwise({
                                                redirectTo : 'navigation'
                                });
}]);
