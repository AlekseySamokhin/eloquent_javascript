// 1
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(a) {
        return new Vector(this.x + a.x, this.y + a.y);
    }

    minus(a) {
        return new Vector(this.x - a.x, this.y - a.y);
    }

    get length() {
        return Math.sqrt((this.x*this.x) + (this.y*this.y));
    }
}

// 2
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

Object.prototype.plus = function(a) {
    return new Vec(this.x + a.x, this.y + a.y);
}

Object.prototype.minus = function(a) {
    return new Vec(this.x - a.x, this.y - a.y);
}

Object.defineProperty(Vec.prototype, "length", {
    get: function() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
})

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);