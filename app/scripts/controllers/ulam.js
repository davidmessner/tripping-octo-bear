'use strict';

angular.module('playgroundApp')
    .controller('UlamCtrl', function ($scope) {
        $scope.seedId = 5;
        $scope.width = 3;
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
            console.log('gen spiral');
            var spiral = ulam.Spiral($scope.width, $scope.colors.length),
                paper = $scope.paper,
                blockWidth = (paper.width / spiral.width),
                blockHeight = (paper.height / spiral.width);

            console.log('draw spiral');
            for (var x = 0; x < spiral.width; x++) {
                for (var y = 0; y < spiral.width; y++) {
                    var block = paper.rect(blockWidth * x, blockHeight * y, blockWidth, blockHeight);
                    block.attr('fill', $scope.colors[spiral.matrix[x][y]].value);
                }
            }
        };
    });
