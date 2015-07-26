(function () {
    'use strict';

    angular
        .module('diaryApp')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = ['$state', 'LocalStorageFactory', 'SessionStorageFactory', 'DataHandlerFactory'];

    function UserFactory($state, LocalStorageFactory, SessionStorageFactory, DataHandlerFactory) {

        var users = LocalStorageFactory.getRegisteredUsers() ? LocalStorageFactory.getRegisteredUsers() : [];
        var LoginStatus = !!SessionStorageFactory.checkLoginStatus();
        var factory = {
            isLoggedIn: LoginStatus,
            registerUser: registerUser,
            checkIfUsernameExists: checkIfUsernameExists,
            isLoginSuccess: isLoginSuccess,
            userLogin: userLogin,
            userLogout: userLogout
        }

        return factory;
        ////////////////////////////

        function registerUser(username, email, password) {
            var userId = DataHandlerFactory.getLastId(users);
            userId++;
            users.push({
                Id: userId,
                Username: username,
                Email: email,
                Password: password
            });
            LocalStorageFactory.storeUsers(users);
            userLogin(username);
        }

        function checkIfUsernameExists(username) {
            var count = users.length;
            for (var i = 0; i < count; i++) {
                if (users[i].Username === username) {
                    return true;
                }
            }
            return false;
        }

        function isLoginSuccess(username, password) {
            var count = users.length;
            for (var i = 0; i < count; i++) {
                if (users[i].Username === username && users[i].Password === password) {
                    return true;
                }
            }
            return false;
        }

        function userLogin(username) {
            SessionStorageFactory.userLogin(username);
            factory.isLoggedIn = true;
            $state.go('diary');
        }

        function userLogout() {
            SessionStorageFactory.userLogout();
            factory.isLoggedIn = false;
        }
    }
})();
