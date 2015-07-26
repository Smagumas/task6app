(function () {
    'use strict';

    angular
        .module('diaryApp')
        .factory('SessionStorageFactory', SessionStorageFactory);

    SessionStorageFactory.$inject = ['$sessionStorage', '$localStorage', 'DataHandlerFactory'];

    function SessionStorageFactory($sessionStorage, $localStorage, DataHandlerFactory) {
        var factory = {
            userLogin: userLogin,
            checkLoginStatus: checkLoginStatus,
            userLogout: userLogout
        };

        return factory;
        ////////////////////////////

        function userLogin(username) {
            var userId = DataHandlerFactory.getObjectInArray($localStorage.users, 'Username', username).Id;
            $sessionStorage.user = {
                    UserId: userId,
                    Username: username
                };
        }

        function checkLoginStatus() {
            return !!$sessionStorage.user;
        }

        function userLogout() {
            delete $sessionStorage.user;
        }
    }
})();