(function () {
    'use strict';

    angular.module('urlTestApp').controller('mapController', mapController);

    function mapController($scope, $state) {

        $scope.msg = "Hello from MAP controller";

        $scope.goToState = function () {
            $state.go("map.touristObject", { uname: 'zamek' });
        };
    }
})();