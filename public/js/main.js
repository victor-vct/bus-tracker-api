angular.module('farol-api',['ngRoute', 'ngResource'])
	.config(function($routeProvider) {

		$routeProvider.when('/busline', {
			templateUrl: 'partials/busline.html',
			controller: 'BusLineController'
		});
		
		$routeProvider.when('/busterminal', {
			templateUrl: 'partials/busterminal.html',
			controller: 'BusTerminalController'
		});
		
		$routeProvider.when('/busstop', {
			templateUrl: 'partials/busstop.html',
			controller: 'BusStopController'
		});
		
		$routeProvider.otherwise({redirectTo: '/busstop'});
	});
	
		// $routeProvider.when('/busstop/:busstopId/bus', {
			// templateUrl: 'partials/bus.html',
			// controller: 'BusListController'
		// });
		// $routeProvider.when('/bus/:busId/details', {
			// templateUrl: 'partials/busdetails.html',
			// controller: 'DetailsController'
		// });
		// $routeProvider.when('/bus/:busId/require/:busstopId', {
			// templateUrl: 'partials/busrequire.html',
			// controller: 'RequireController'
		// });
		// $routeProvider.when('/bus/:requireId', {
			// templateUrl: 'partials/busrequire.html',
			// controller: 'RequireController'
		// });
		// $routeProvider.when('/bus', {
			// templateUrl: 'partials/busline.html',
			// controller: 'BusLineController'
		// });	