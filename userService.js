(function () {
    angular.module('myApp')
        .factory('userService', userService);

    userService.$inject = ["$log", "$http"];

    function userService($log, $http) {


        var svc = {};
        svc.login = _login;
        svc.register = _register;
        svc.getCurrentUser = _getCurrentUser;
        svc.logout = _logout;
        return svc;

      

        function _login(data, onSuccess, onError) {

            var settings = {
                url: 'http://pacoima-ypi.azurewebsites.net/api/users/login/force',
                method: 'POST',
                headers: {},
                cache: false,
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(data),
                withCredentials: true,
            };

            return $http(settings)
                .then(onSuccess, onError)

        }

        function _register(data, onSuccess, onError) {

            var settings = {
                url: 'http://pacoima-ypi.azurewebsites.net/api/users/register/employer',
                method: 'POST',
                headers: {},
                cache: false,
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(data),
                withCredentials: true,
            };

            return $http(settings)
                .then(onSuccess, onError)

        }


        function _getCurrentUser(onSuccess, onError) {

            var settings = {
                url: 'http://pacoima-ypi.azurewebsites.net/api/people/CurrentUser',
                method: 'GET',
                headers: {},
                cache: false,
                contentType: 'application/json; charset=UTF-8',
                withCredentials: true,
            };

            return $http(settings)
                .then(onSuccess, onError)

        }

        function _logout(onSuccess, onError) {

            var settings = {
                url: 'http://pacoima-ypi.azurewebsites.net/api/users/logout',
                method: 'GET',
                headers: {},
                cache: false,
                contentType: 'application/json; charset=UTF-8',
                withCredentials: true,
            };

            return $http(settings)
                .then(onSuccess, onError)
         }
    }
})();



    
