(function() {

	'use strict';

	var app = angular.module('time-line', [], function($interpolateProvider) {
		$interpolateProvider.startSymbol("[["),
        $interpolateProvider.endSymbol("]]")
	});

	var template = '<article class="status-panel"><label class="panel-title">[[who]]</label><div class="panel-content">[[message]]</div></article>';

	// var abc = {};
	// abc.template = '<article class="status-panel"><label class="panel-title">[[who]]</label><div class="panel-content">[[message]]</div></article>';

	app.controller('timeController', function($scope) {
	});

	app.directive('timeLine', function() {
		return {
			scope: {
				who: '@',
				message: '@'
			},
			replace: true,
			restrict: 'AE',
			template: template
			//template: template
			// link: function(scope, element, attribute) {
			// 	element.css('background-color', '#ddd');
			// 	scope.$watch(function() {
			// 		scope.message = 'Hello, loint!'
			// 	});
			// }
		}
	});

	template = '<h1>[[who]]</h1>';

	// app.directive('helloWorld', function() {
	// 	return {
	// 		replace: true,
	// 		restrict: 'AE',
	// 		template: '<p style="background-color:{{color}}">Hello World</p>',
	// 		link: function(scope, elem, attrs) {
	// 			elem.bind('click', function() {
	// 				elem.css('background-color', 'white');
	// 				scope.$apply(function() {
	// 					scope.color = "white";
	// 				});
	// 			});
	// 			elem.bind('mouseover', function() {
	// 				elem.css('cursor', 'pointer');
	// 			});
	// 		}
	// 	};
	// });

})();