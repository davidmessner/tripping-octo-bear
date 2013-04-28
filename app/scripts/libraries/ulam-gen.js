(function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.prototype.equals = function (other) {
        return (this.x === other.x && this.y === other.y);
    };

    Point.prototype.add = function (other) {
        this.x += other.x;
        this.y += other.y;
    };

    function Spiral(width, stopCount) {
        if (!(this instanceof Spiral)) return new Spiral(width);

        if (width % 2 === 0) throw new Error('The width value must be an odd number.');
        if (stopCount < 1) throw new Error('There must be at least one step.');

        this.matrix = [];

        //  Generate blank matrix
        for (var x = 0; x < width; x++) {
            var part = [];
            for (var y = 0; y < width; y++) part.push(0);
            this.matrix.push(part);
        }

        //  Walk spiral
        var position = new Point(Math.floor(width / 2.0), Math.floor(width / 2.0));
        var end = new Point(width - 1, width - 1);
        var facing = 0;
        var crum = 0;
        var jumpDist = 1;
        var currJump = 0;
        var currDist = 0;

        while (!position.equals(end)) {
            this.matrix[position.x][position.y] = crum;
            crum = (crum + 1) % stopCount;
            position.add(this.directions[facing]);

            currJump = (currJump + 1) % jumpDist;
            if (currJump === 0) {
                facing = (facing + 1) % this.directions.length;

                currDist = (currDist + 1) % 2;
                if (currDist === 0) jumpDist++;
            }
        }
    }

    Spiral.prototype.directions = [
        new Point(1, 0),    //  RIGHT
        new Point(0, -1),   //  UP
        new Point(-1, 0),   //  LEFT
        new Point(0, 1)     //  DOWN
    ];

    ulam = {
        Point: Point,
        Spiral: Spiral
    }
})();