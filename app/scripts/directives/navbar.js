angular.module('playgroundApp')
    .directive('navbar', function () {
        return {
            restrict: 'A',
            templateUrl: 'views/partials/navbar.html'
        }
    });