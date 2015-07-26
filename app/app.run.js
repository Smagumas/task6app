(function () {
    'use strict';

    angular
        .module('diaryApp')
        .run(routeRun);

    routeRun.$inject = ['$rootScope', '$state', 'UserFactory'];

    function routeRun($rootScope, $state, UserFactory) {

        $rootScope.$on('$stateChangeStart',
            function (event, toState, fromState) {
                var shouldLogin = !!toState.authenticate;
                var isLoggedIn = UserFactory.isLoggedIn;
                var stateName = toState.name;
                var states = {
                    'login': redirectToDiaryIfLoggedIn,
                    'register': redirectToDiaryIfLoggedIn,
                    'logout': handleLogout
                }

                states.hasOwnProperty(stateName) && states[stateName]();

                if (shouldLogin && !isLoggedIn) {
                    event.preventDefault();
                    $state.go('login');
                }

                function redirectToDiaryIfLoggedIn() {
                    if (isLoggedIn) {
                        event.preventDefault();
                        $state.go('diary');
                    }
                }

                function handleLogout() {
                    if (isLoggedIn) {
                        UserFactory.userLogout();
                        event.preventDefault();
                        $state.go('login');
                    }
                }

            });
    }

})();