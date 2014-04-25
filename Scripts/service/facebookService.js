'use strict';

angular.module('app')
.factory('facebookService', function ($q) {
    return {
        		
		EventsModel:[],
		
		GetAPIData:function(apiName){
			var apiDefer=$q.defer();
			FB.api(apiName, function(response) {
			  apiDefer.resolve(response);
			});
			return apiDefer.promise;
		}
       
    };
    
});



