var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http,$log) {

            $http.get("http://jsonplaceholder.typicode.com/users")
                 .then(function (response) {
                     $scope.employees = response.data;
                     $log.info(response);
                 },function (reason) {
                     $scope.error = reason.data;
                     $log.info(reason);
                 });
        });