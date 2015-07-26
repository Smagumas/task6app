(function () {
    'use strict';

    angular
        .module('diaryApp')
        .factory('FileReaderFactory', FileReaderFactory);

    FileReaderFactory.$inject = ['$sessionStorage', 'LocalStorageFactory'];

    function FileReaderFactory($sessionStorage, LocalStorageFactory) {
        var userId = $sessionStorage.user.UserId;

        var factory = {
            setAvatar: setAvatar,
            getAvatar: getAvatar
        };

        return factory;
        ////////////////////////////

        function setAvatar(img) {
            LocalStorageFactory.setUserAvatar(img, userId);
        }

        function getAvatar() {
            return LocalStorageFactory.getUserAvatar(userId);
        }
       
    }
})();
