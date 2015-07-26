(function () {
    'use strict';

    angular
        .module('diaryApp')
        .factory('EntriesFactory', EntriesFactory);

    EntriesFactory.$inject = ['$sessionStorage', 'LocalStorageFactory', 'DataHandlerFactory'];

    function EntriesFactory($sessionStorage, LocalStorageFactory, DataHandlerFactory) {
        var userId = '';
        var allUserEntries = [];

        var factory = {
            getEntries: getEntries,
            addEntry: addEntry,
            deleteEntry: deleteEntry,
            enableEditor: enableEditor,
            disableEditor: disableEditor,
            saveEntry: saveEntry
        };

        return factory;
        ////////////////////////////

        init();

        function init() {
            factory.getEntries();
        }

        function getEntries() {
            userId = $sessionStorage.user.UserId;
            allUserEntries = LocalStorageFactory.getUserStoredEntries(userId) ? LocalStorageFactory.getUserStoredEntries(userId) : [];
            console.log('test');
            return allUserEntries;
        }

        function addEntry(title, entry) {
            var entryId = DataHandlerFactory.getLastId(allUserEntries);
            entryId++;
            allUserEntries.push({
                Id: entryId,
                Title: title,
                Date: new Date(),
                Entry: entry,
                EditorEnabled: false
            });
            LocalStorageFactory.storeEntries(allUserEntries, userId);
        };

        function deleteEntry(id) {
            var index = -1;
            var entryArr = allUserEntries;
            for (var i = 0; i < entryArr.length; i++) {
                if (entryArr[i].Id === id) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                alert("Something gone wrong");
            }
            allUserEntries.splice(index, 1);
        }

        function enableEditor(id) {
            var EntryObject = DataHandlerFactory.getObjectInArray(allUserEntries, 'Id', id);
            EntryObject.EditorEnabled = true;
            EntryObject.editableTitle = EntryObject.Title;
            EntryObject.editableEntry = EntryObject.Entry;
        }

        function disableEditor(id) {
            var EntryObject = DataHandlerFactory.getObjectInArray(allUserEntries, 'Id', id);
            EntryObject.EditorEnabled = false;
        }

        function saveEntry(id) {
            var EntryObject = DataHandlerFactory.getObjectInArray(allUserEntries, 'Id', id);
            EntryObject.Title = EntryObject.editableTitle;
            EntryObject.Entry = EntryObject.editableEntry;
            factory.disableEditor(id);
        }

    }
})();
