'use strict';

angular.module('app')
.factory('linkedinService', function ($q, $http) {
    return {
        		
		EventsModel:[],
		
		GetAPIData:function(apiName){
			var apiDefer=$q.defer();
			FB.api(apiName, function(response) {
			  apiDefer.resolve(response);
			});
			return apiDefer.promise;
		},

		doPeopleSearch: function (searchObject) {
		    IN.API.PeopleSearch().params(searchObject).result(function (result) {
		        return JSON.stringify(result);
		    })

	//	    $http.get('http://api.linkedin.com/v1/people-search?keywords=Princess').then(function(result) { 
    //    alert(JSON.stringify(result)) 
    //})
		}
    };
    
});



