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

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

