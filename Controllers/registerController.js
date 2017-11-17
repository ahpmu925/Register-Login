(function () {


    angular.module('quizApp')
        .controller('registerController', RegisterController);

    RegisterController.$inject = ["$window", 'userService', 'toastr'];

    function RegisterController($window, userService, toastr) {


        var vm = this;

        vm.user = {};

        vm.registerForm;

        vm.onRegisterBtnClicked = _onRegisterBtnClicked;

        vm.passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

        vm.showErrorMessage = _showErrorMessage;

        function _onRegisterBtnClicked() {

            userService.register(vm.user, _onRegisterSuccess, _onRegisterError);

        }

        function _onRegisterSuccess(response) {
            toastr.success("You have successfully registered");
            $window.location.href = '/loginAngular.html';
        };
        function _onRegisterError(response) {
            toastr.error("Oops!");
        };

  
        function _showErrorMessage(propertyName, ruleName) {
            if (!vm.registerForm) {
                return false;
            }
            return vm.registerForm[propertyName].$error[ruleName];
        }
    }
})();
