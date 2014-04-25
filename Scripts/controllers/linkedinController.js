'use strict';

angular.module('app')
  .controller('LinkedinController', function ($scope,linkedinService,$http) {

	
	$scope.eventPermission=function(){
	IN.API.Profile("me").result(function(result){
	alert(result.values[0].firstName);
	});
	};

	$scope.getCompanyEmployees = function (company) {
	    var searchObject = {'company-name': company};
	    var employees = linkedinService.doPeopleSearch(searchObject);
	};
  });
