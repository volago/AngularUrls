(function () {
    'use strict';

    angular.module('urlTestApp').controller('touristObjectController', touristObjectController);

    function touristObjectController($scope, $state) {

        $scope.msg = "Hello from TO controller, object = : " + $state.params.uname;

    }
})();