(function () {
    'use strict';

    angular
        .module('diaryApp')
        .directive('ngFileSelect', ngFileSelect);

    ngFileSelect.$inject = ['FileReaderFactory'];

    function ngFileSelect(FileReaderFactory) {
        var fileOperations = {
            link: onChange
        }

        var params = '';
        function onChange(scope, element) {
            element.bind("change", function (event) {
                var file = document.querySelector('input[type=file]').files[0];
                var reader = new FileReader();
                reader.onloadend = function () {
                    scope.diary.setAvatar(reader.result);
                }
                if (file) {
                    reader.readAsDataURL(file);
                }
            });
        }

        return fileOperations.link;

    }

})();