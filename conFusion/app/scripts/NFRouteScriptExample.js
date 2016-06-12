var app= angular.module("Demo",["ngRoute"])
				.config(function($routeProvider,$locationProvider) {
					$routeProvider.
					when("/home",{
						templateUrl: "Templates/home.html",
                        controller: "homeController",
                        controllerAs: "homeCtrl"
					})
					.when("/courses",{
						templateUrl: "Templates/courses.html",
                        controller: "coursesController"
					})
					.when("/students", {
                        templateUrl: "Templates/students.html",
                        controller: "studentsController"
                    })
                    .when("/students/:id", {
                        templateUrl: "Templates/studentDetails.html",
                        controller: "studentDetailsController"
                    })
                    /*.otherwise({
            			redirectTo: "/home"
       				 })*/
					/*$locationProvider.html5Mode(true);*/
				})
				.controller("homeController", function () {
                 this.message = "Home Page";
            })
				 .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })
				 .controller("studentsController", function ($scope,studentService,$route) {
                	
                    /*$scope.$on('$routeChangeStart', function(event,next,current){
                        if(!confirms("Are you sure want to navigate away from this page")){
                            event.preventDefault();
                        }

                    });*/
                	init();
                    
    				function init() {
      			    $scope.students = studentService.getStudents();
    				}

                    $scope.$on('$routeChangeStart', function(event,next,current){
                        if(!confirm("Are you sure want to navigate away from this page" + next.$$route.originalPath)){
                            event.preventDefault();
                        }

                    });
            })
				 .controller("studentDetailsController", function ($scope,studentService,$routeParams) {
				 	$scope.student = {};                	
                	init();

    				function init() {
      			    var id = ($routeParams.id) ? parseInt($routeParams.id) : 0;
      				if (id > 0) {
            			$scope.student = studentService.getStudent(id);
        			  }
    				}
            });