// 1 
function min(num1, num2) {
    if(num1 < num2) {
        return num1
    } else {
        return num2
    }
}

console.log(min(0, 10));
console.log(min(0, -10));

// 2
function min(num1, num2) {
    return (num1 < num2) ? num1 : num2; 
}

console.log(min(0, 10));
console.log(min(0, -10));

// 3 
function min(num1, num2) {
    return Math.min(num1, num2);
}

console.log(min(0, 10));
console.log(min(0, -10));