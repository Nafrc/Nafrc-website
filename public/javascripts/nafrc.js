$(document).ready(function(){
   $(".nav-link, button").click(function() {
          $('html,body').animate({
            scrollTop: $("#faceone").offset().top},
        'slow');
   });
  
});

// JavaScript Document
var Nafrc = angular.module('Nafrc',['ngRoute','ngSanitize']);
//end here

Nafrc.config(function($routeProvider) {
		$routeProvider
		
		.when('/', {
				templateUrl : './template/home.html',
				controller  : 'Nafrc'
			})
		.when('/list', {
				templateUrl : './template/list.html',
				controller  : 'List'
			})
		.when('/aboutnafrc', {
				templateUrl : './template/aboutnafrc.html',
				controller  : 'Nafrc'
			})
		.when('/leadershipstructure', {
				templateUrl : './template/leadershipstructure.html',
				controller  : 'Nafrc'
			})	
		.when('/pastcommandants', {
				templateUrl : './template/pastcommandants.html',
				controller  : 'Nafrc'
			})
		.when('/pastdptcommandants', {
				templateUrl : './template/pastdptcommandants.html',
				controller  : 'Nafrc'
			})	
		.when('/pastdirectors', {
				templateUrl : './template/pastdirectors.html',
				controller  : 'Nafrc'
			})
		.when('/pastdeputydirectors', {
				templateUrl : './template/pastdeputydirectors.html',
				controller  : 'Nafrc'
			})
		.when('/pastcommandingofficers', {
				templateUrl : './template/pastcommandingofficers.html',
				controller  : 'Nafrc'
			})	
		.when('/training', {
				templateUrl : './template/training.html',
				controller  : 'Nafrc'
			
			})
		.when('/workshop', {
				templateUrl : './template/workshop.html',
				controller  : 'Nafrc'
			})
		
		.when('/contactus', {
				templateUrl : './template/contactus.html',
				controller  : 'Nafrc'
			})
		.when('/event', {
				templateUrl : './template/event.html',
				controller  : 'Nafrc'
			})
		.when('/cmdachievement', {
				templateUrl : './template/cmdachievement.html',
				controller  : 'Nafrc'
			});		
			
});		

//creating a controller for send money
Nafrc.controller('Nafrc',["$scope","$http", function($scope,$http) {
	//geting the json data 

	$http.get('/json/nafrc.json').then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
     $scope.nafrcjsondata=response.data;
   
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    window.alert(response.data);
   
  });
  
}]);

Nafrc.controller('List',["$scope","$http", function($scope,$http) {
	// $http.get('/list/list.pdf').then(function successCallback(response) {
 //   // this callback will be called asynchronously
 //   // when the response is available
 //  // $scope.nafrcpdflist=response.data;
 //  // $scope.model.nafrcpdflist =response.data;
 //     $window.open(response);
   
 // }, function errorCallback(response) {
 //   // called asynchronously if an error occurs
 //   // or server returns response with an error status.
 //   window.alert(response);
   
 // });
	
  
}]);
//++++++++++++++++++++++++++++++++++++++ WING ++++++++++++++++++++++++++++++++
var Nafrcwing = angular.module('Nafrcwing',['ngRoute','ngSanitize']);

Nafrcwing.controller('Nafrcwing',["$scope","$http","$routeParams", function($scope,$http) {
		//geting the json data 
		$http.get('/json/wing.json').then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	     $scope.nafrcwing=response.data;
			var url = window.location.href;

			var id = url.substring(url.lastIndexOf('=') + 1);
			
		$scope.wingid=id;
			
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    window.alert(response);
	  });
}]);	

//++++++++++++++++++++++++++++++++++++++ Workshops ++++++++++++++++++++++++++++++++
var Nafrcworkshop = angular.module('Nafrcworkshop',['ngRoute','ngSanitize']);

Nafrcworkshop.controller('Nafrcworkshopproduct',["$scope","$http","$routeParams", function($scope,$http) {
	$http.get('/json/workshop.json').then(function successCallback(response) {
		var url = window.location.href;

			var id = url.substring(url.lastIndexOf('=') + 1);
			
		$scope.workshopid=id;
		$scope.nafrcworkshop=response.data;
	}, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	    window.alert(response);
	  });

	
}]);	
	
