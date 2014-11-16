(function() {

	'use strict';

	var app = angular.module('status', [], function($interpolateProvider) {
		$interpolateProvider.startSymbol("[["),
        $interpolateProvider.endSymbol("]]")
	});

	app.controller('statusController', function() {
		// code here
	});

	app.directive('status', function() {
		return {
			scope: {
				who: '@',
				message: '@'
			},
			replace: true,
			restrict: 'E',
			templateUrl: 'status.html'
		};
	});
})();