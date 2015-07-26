(function () {
    'use strict';

    angular
        .module('diaryApp')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                    url: '/',
                    templateUrl: 'app/views/login.html',
                    controller: 'Login',
                    controllerAs: 'login'
                })
            .state('register', {
                    url: '/register',
                    templateUrl: 'app/views/register.html',
                    controller: 'Register',
                    controllerAs: 'register'
                })
			.state('diary',	{
				    url: '/diary',
				    templateUrl: 'app/views/entries.html',
				    controller: 'Diary',
				    controllerAs: 'diary',
                    authenticate: true
				})
            .state('logout', {
				    url: '/logout',
				    templateUrl: 'app/views/logout.html',
				    authenticate: true
				})
    }
})();