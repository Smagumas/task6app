(function () {
    'use strict';

    angular
        .module('diaryApp')
        .factory('DataHandlerFactory', DataHandlerFactory);

    DataHandlerFactory.$inject = [];

    function DataHandlerFactory() {
        var factory = {
            getObjectInArray: getObjectInArray,
            getLastId: getLastId,
            getIndexOfObjectInArray: getIndexOfObjectInArray
        }

        return factory;
        ////////////////////////////

        function getObjectInArray(array, key, value) {
            var lookup = {};
            var arrayLength = array.length;
            for (var i = 0; i < arrayLength; i++) {
                lookup[array[i][key]] = array[i];
                if (array[i][key] === value) {
                    return array[i];
                }
            }
            return 'couldnt find object with this key and value:' + key + value;
        }

        function getIndexOfObjectInArray(array, key, value) {
            var lookup = {};
            var arrayLength = array.length;
            for (var i = 0; i < arrayLength; i++) {
                lookup[array[i][key]] = array[i];
                if (array[i][key] === value) {
                    return i;
                }
            }
            return 'couldnt find object with this key and value:' + key + value;
        }

        function getLastId(array) {
            if (array) {
                var count = array.length;
                var id = 0;
                for (var i = 0; i < count; i++) {
                    if (id < array[i].Id) {
                        id = array[i].Id;
                    }
                }
                return id;
            }
            return false;
        }

    }
})();
