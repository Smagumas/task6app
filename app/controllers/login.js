(function () {
    'use strict';

    angular
        .module('diaryApp')
        .controller('Login', Login);

    Login.$inject = ['UserFactory'];

    function Login(UserFactory) {
        var vm = this;

        vm.loginForm = {};
        vm.userLogin = userLogin;

        function userLogin() {
            var username = vm.loginForm.username;
            var password = vm.loginForm.password;
            var loginSuccess = UserFactory.isLoginSuccess(username, password);
            if (!loginSuccess) {
                alert('Wrong username/password!');
            } else if (loginSuccess) {
                UserFactory.userLogin(username);
            }
            
        }    

    }
})();
