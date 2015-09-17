(function () {
    'use strict';
    var app = angular.module('urlTestApp', [
        'ui.router'
    ]);

    app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', configRoutes]);

    function configRoutes($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');               

        $stateProvider
            .state('backend', {
                url: '/pl/backend',
                templateUrl: 'app/backend.html',
                controller: 'backendController'
            })
            .state('map', {
                url: '/pl',
                templateUrl: 'app/map.html',
                controller: 'mapController'
            })
            .state('map.touristObject', {
                url: '/:uname',
                templateUrl: 'app/touristObject.html',
                controller: 'touristObjectController'
            })
            ;

        $urlRouterProvider.otherwise('/pl');
    };

    //app.run(['$state', function ($state) {

    //}]);

})();