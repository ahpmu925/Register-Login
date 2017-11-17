(function () {


    angular.module('quizApp')
        .controller('homepageController', HomepageController);

    HomepageController.$inject = ["$window", 'userService', 'toastr'];

    function HomepageController($window, userService, toastr) {


        var vm = this;

        vm.user = null;
    
        vm.onLogOutBtnClicked = _onLogOutBtnClicked;

        userService.getCurrentUser(_onLoadSuccess, _onLoadError);
     

        function _onLoadSuccess(response) {
            toastr.success("You are now logged in");
            vm.firstName = response.data.item.firstName;
            
        };
        function _onLoadError(response) {
            toastr.error("Oops!");
        };

        function _onLogOutBtnClicked() {

            userService.logout(_onLogOutSuccess, _onLogOutError);

        }

        function _onLogOutSuccess(response) {
            toastr.success("You are now logged out");
            $window.location.href = '/loginAngular.html';
        };
        function _onLogOutError(response) {
            toastr.error("Oops!");
        };


    }
})();
