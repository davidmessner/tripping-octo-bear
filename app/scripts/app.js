'use strict';

angular.module('playgroundApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/applets', {
                templateUrl: 'views/applets.html'
            })
            .when('/about', {
                templateUrl: 'views/about.html'
            })
            .when('/ulam', {
                templateUrl: 'views/applets/ulam.html',
                controller: 'UlamCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
