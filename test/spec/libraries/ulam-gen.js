'use strict';

describe('Library: Ulam Generator', function () {

    describe('Point', function () {
        it('should handle equality by value not by reference', function () {
            var pointA = new ulam.Point(1, 1),
                pointB = new ulam.Point(1, 1),
                pointC = new ulam.Point(1, 2);
            expect(pointA.equals(pointB));
            expect(!pointA.equals(pointC));
        });

        it('should add another point to itself', function () {
            var pointA = new ulam.Point(1, 1),
                pointB = new ulam.Point(2, 3);

            expect(pointA.x === 1);
            expect(pointA.y === 1);
            pointA.add(pointB);
            expect(pointA.x === 3);
            expect(pointA.y === 4);
        });

    });

    describe('Spiral', function () {
        it('should fail to create a spiral with an odd width', function () {
            var spiral, exception;
            try {
                spiral = new ulam.Spiral(4, 3);
            } catch (e) {
                exception = e;
            } finally {
                expect(!spiral);
                expect(exception.message === 'The width value must be an odd number.');
            }
        });

        it('should fail to create a spiral with a stopCount less than 1', function () {
            var spiral, exception;
            try {
                spiral = new ulam.Spiral(5, 0);
            } catch (e) {
                exception = e;
            } finally {
                expect(!spiral);
                expect(exception.message === 'There must be at least one step.');
            }
        });

        it('should correctly create a 3x3 spiral with 3 stops', function () {
            var spiral = new ulam.Spiral(3, 3);
            expect(spiral.matrix[0][0] === 1);
            expect(spiral.matrix[1][1] === 0);
            expect(spiral.matrix[2][2] === 2);
        });

        it('should correctly create a 5x5 spiral with 4 stops', function () {
            var spiral = new ulam.Spiral(5, 4);
            expect(spiral.matrix[1][0] === 3);
            expect(spiral.matrix[2][3] === 3);
            expect(spiral.matrix[4][2] === 2);
        });
    });
});