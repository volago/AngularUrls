(function () {
    'use strict';

    angular.module('urlTestApp').controller('mapController', mapController);

    function mapController($scope) {

        $scope.msg = "Hello from MAP controller";
    }
})();