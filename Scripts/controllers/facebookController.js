'use strict';

angular.module('app')
	.controller('FacebookController', function($scope, facebookService) {
		$scope.Events = [];

		$scope.testPermission = function() {
			console.log('Welcome!  Fetching your information.... ');
			FB.api('/me/permissions', function(response) {
				console.log('Good to see you, ' + response.name + '.');
			});
		};

		$scope.GetEvents = function() {
			$scope.Events = [];
			facebookService.GetAPIData('/me/events').then(function(result) {
				if (result != null && result.data != null && result.data.length > 0) {
					angular.forEach(result.data, function(value, key) {
						$scope.Events.push(value);
					});
				}
			});
		};

		$scope.GetEventByID = function (id) {
		    facebookService.GetAPIData('/'+id).then(function (result) {
		        if (result != null) {
		            var event = $scope.Events.filter(function (ev) {
		                return ev.id === id.toString();
		            })
		            if (event)
		                event[0].details = result;
		        }
		    });
		};

		$scope.eventPermission = function() {
			FB.login(function(response) {
				if (response.authResponse) {
					console.log('Welcome!  Fetching your information.... ');
				} else {
					console.log('User cancelled login or did not fully authorize.');
				}
			}, {
				scope: 'user_events'
			});
		};
	});