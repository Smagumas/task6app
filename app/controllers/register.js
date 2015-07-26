(function () {
    'use strict';

    angular
        .module('diaryApp')
        .controller('Register', Register);

    Register.$inject = ['UserFactory'];

    function Register(UserFactory) {
        var vm = this;

        vm.userRegister = userRegister;

        function userRegister() {
            var username = vm.registerForm.username;
            var email = vm.registerForm.email;
            var password = vm.registerForm.password;

            if (UserFactory.checkIfUsernameExists(username)) {
                alert('This username already exists!');
            } else {
                UserFactory.registerUser(username, email, password);
            }

        }


    }
})();