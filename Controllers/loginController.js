(function () {


    angular.module('quizApp')
        .controller('loginController', LoginController);

    LoginController.$inject = ["$window", 'userService', 'toastr'];

    function LoginController($window, userService, toastr) {


        var vm = this;

        vm.user = null;

        vm.loginForm;

        vm.onLoginBtnClicked = _onLoginBtnClicked;

        vm.hasValidationError = _hasValidationError;
        vm.showValidationErrors = _showValidationErrors;
        vm.showErrorMessage = _showErrorMessage;

        function _onLoginBtnClicked() {

            userService.login(vm.user, _onLoginSuccess, _onLoginError);

        }

        function _onLoginSuccess(response) {
            toastr.success("You have successfully logged in!"); 
            $window.location.href = '/homepageAngular.html';
        };
        function _onLoginError(response) {
            toastr.error("Oops!");
        };

        function _hasValidationError(propertyName) {
            return (vm.loginForm.$submitted || (vm.loginForm[propertyName].$dirty && vm.loginForm[propertyName].$touched))
                && vm.loginForm[propertyName].$invalid;
        }

        function _showValidationErrors(propertyName) {
            return (vm.loginForm.$submitted || (vm.loginForm[propertyName].$dirty && vm.loginForm[propertyName].$touched));
        };

        function _showErrorMessage(propertyName, ruleName) {
            return vm.loginForm[propertyName].$error[ruleName];
        }

    }
})();
