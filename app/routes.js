module.exports = function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('main', {
			url: '/',
			templateUrl: 'app/modules/app/hello.html',
			controller: 'AppController',
			controllerAs: 'vm'
		});
}