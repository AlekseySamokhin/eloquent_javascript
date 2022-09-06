// 1 
function isEven(number) {
    const abs = Math.abs(number);

    if(abs === 0) {
        return true;
    } else if (abs === 1) {
        return false;
    } else {
        return isEven(abs - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// 2 
function isEven(number) {
    if(number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else if (number < 0) {
        return isEven(-number);
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// 3
function isEven(number) {
    if(number === 0) return true;
    else if(Math.abs(number) === 1) return false;
    else return isEven(Math.abs(number - 2));
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));