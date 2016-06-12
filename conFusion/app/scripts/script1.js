var app = angular.module("myModule",[])
				 .controller('myController',  function($scope){

				 	var employees = [
				 		{Name:Ben,Gender:Male,Salary:55000,City:London},
				 		{Name:Sara,Gender:Female,Salary:68000,City:Chennai},
				 		{Name:Mark,Gender:Male,Salary:75000,City:London},
				 		{Name:Pam,Gender:Female,Salary:65000,City:Chennai},
				 		{Name:todd,Gender:Male,Salary:85000,City:Lodnon}

				 	];

				 	$scope.employees = employees;
				 	
				 });