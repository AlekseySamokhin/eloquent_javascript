// 1 
function reverseArray(array) {
    return array.reduce(function(a, b) {
        return [b].concat(a);
    }, []);
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(arrayValue) {
    const arrayLength = arrayValue.length;
    for(let i = 0; i < Math.floor(arrayLength / 2); i++) {
        const old = arrayValue[i];
        arrayValue[i] = arrayValue[arrayLength - 1 - i];
        arrayValue[arrayLength - 1 - i] = old;
    }

    return arrayValue;
}

// 2
function reverseArray(array) {
    let newArray = [];

    for(let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    
    return newArray;
}

function reverseArrayInPlace(arrayValue) {
    let newArray = [];
    const arrayLength = arrayValue.length;
    
    for(let i = arrayLength - 1; i >= 0; i--) {
        newArray.unshift(arrayValue.pop());
    }

    for(let i = arrayLength - 1; i >= 0; i--) {
        arrayValue[i] = newArray.shift();
    }

    return arrayValue;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);