(function () {
    'use strict';

    angular.module('urlTestApp').controller('backendController', backendController);

    function backendController($scope) {

        $scope.msg = "Hello from BACKEND controller";
    }
})();