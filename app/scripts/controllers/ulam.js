'use strict';

angular.module('playgroundApp')
    .controller('UlamCtrl', function ($scope) {
        $scope.seedId = 5;
        $scope.width = 1;
        $scope.colors = [
            {id: 0, value: 'red'},
            {id: 1, value: 'blue'},
            {id: 2, value: 'green'}
        ];
        $scope.newColor = 'black';
        $scope.paper = new Raphael(document.getElementById('ulam-canvas-container'), 600, 600);
        $scope.addColor = function () {
            $scope.colors.push({
                id: $scope.seedId++,
                value: $scope.newColor
            });
        };
        $scope.removeColor = function (colorId) {
            $scope.colors = _.reject($scope.colors, function (color) {
                return color.id === colorId;
            });
        };
        $scope.draw = function () {
            var circle = $scope.paper.circle(250, 250, 100);
            circle.attr('stroke', 'black');
            circle.attr('fill', 'red');
        };
    });
