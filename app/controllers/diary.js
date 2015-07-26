(function () {
    'use strict';

    angular
        .module('diaryApp')
        .controller('Diary', Diary);

    Diary.$inject = ['EntriesFactory', 'FileReaderFactory'];

    function Diary(EntriesFactory, FileReaderFactory) {
        var vm = this;

        vm.newEntry = {};
        vm.entries = EntriesFactory.getEntries();
        vm.addEntry = addEntry;
        vm.deleteEntry = deleteEntry;
        vm.enableEditor = enableEditor;
        vm.disableEditor = disableEditor;
        vm.saveEntry = saveEntry;
        vm.imageSrc = FileReaderFactory.getAvatar();
        vm.setAvatar = setAvatar;

        vm.orderByAttribute = '-Date';
        vm.totalItems = vm.entries.length;

        vm.currentPage = 1;
        vm.pageSize = 5;

        function addEntry() {
            EntriesFactory.addEntry(vm.newEntry.title, vm.newEntry.entry);
        }

        function deleteEntry(id) {
            EntriesFactory.deleteEntry(id);
        }

        function enableEditor(id) {
            EntriesFactory.enableEditor(id);
        }

        function disableEditor(id) {
            EntriesFactory.disableEditor(id);
        }

        function saveEntry(id) {
            EntriesFactory.saveEntry(id);
        }

        function setAvatar(img) {
            vm.imageSrc = FileReaderFactory.setAvatar(img);
        }

    }
})();
