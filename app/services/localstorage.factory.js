(function () {
    'use strict';

    angular
        .module('diaryApp')
        .factory('LocalStorageFactory', LocalStorageFactory);

    LocalStorageFactory.$inject = ['$localStorage', 'DataHandlerFactory'];

    function LocalStorageFactory($localStorage, DataHandlerFactory) {
        var factory = {
            storeEntries: storeEntries,
            getUserStoredEntries: getUserStoredEntries,
            storeUsers: storeUsers,
            getRegisteredUsers: getRegisteredUsers,
            setUserAvatar: setUserAvatar,
            getUserAvatar: getUserAvatar
        };

        return factory;
        ////////////////////////////

        function storeEntries(entries, userId) {
            $localStorage['user' + userId] = entries;
        }

        function getUserStoredEntries(userId) {
            return $localStorage['user' + userId];
        }

        function storeUsers(users) {
            $localStorage.users = users;
        }

        function getRegisteredUsers() {
            return $localStorage.users;
        }

        function setUserAvatar(img, userId) {
            localStorage['user-avatar-' + userId] = img;
        }

        function getUserAvatar(userId) {
            return localStorage['user-avatar-' + userId];
        }
    }
})();