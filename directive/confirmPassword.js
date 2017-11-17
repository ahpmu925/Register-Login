(function () {

    angular
        .module('myApp')
        .directive('compareTo', compareTo);

    compareTo.$inject = ['$rootScope'];

    function compareTo($rootScope) {
        return {
            require: "ngModel",
            scope: {
                confirmPassword: '=compareTo'
            },
            link: function (scope, element, attributes, modelValue) {

                modelValue.$validators.compareTo = function (val) {
                    return val === scope.confirmPassword;
                };

                scope.$watch("confirmPassword", function () {
                    modelValue.$validate();
                });
            }
        };

       

    }

    

})();
