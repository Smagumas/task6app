(function () {
    'use strict';

    angular
        .module('diaryApp')
        .filter('startFrom', startFrom);

    startFrom.$inject = [];

    function startFrom() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }
})();