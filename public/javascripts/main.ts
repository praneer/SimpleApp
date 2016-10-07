//angular module

angular.module('gitApp', ['ngRoute'])        
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'view.html',
                controller: 'MainCtrl'
            })
            .otherwise()
        $locationProvider.html5Mode(true);
    }])
    .controller('MainCtrl', function($scope) {
      $scope.text = "Test" ; 
    });

