var app = angular
        .module("myModule", ["ngResource","ngRoute"])
        .config(function($routeProvider,$locationProvider) {
            $routeProvider.
                    when("/employee/:id",{
                        templateUrl: "Templates/userDetails.html",
                        controller: "userController",
                        controllerAs: "homeCtrl"
                    })
        })
        .controller("myController", function ($scope, $http,$log) {

          // $scope.employees = UserService.query;

            $http.get("http://jsonplaceholder.typicode.com/users")
                 .then(function (response) {
                     $scope.employees = response.data;
                     $log.info(response);
                 },function (reason) {
                     $scope.error = reason.data;
                     $log.info(reason);
                 })
        })
        .controller("userController", function ($scope,UserService,$routeParams) {

                $scope.employees = UserService.query;
                $scope.employee = UserService.get({user:$routeParams.id});

          }); 
        