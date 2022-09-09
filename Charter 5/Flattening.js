// 1
function flatten(array) {
    return array.reduce((acc, current) => {
        return acc.concat(current);
    }, [])
}

// 2 
function flatten(array) {
    return [].concat(...array);
}

// 3 
function flatten(array) {
    return array.flat(Infinity);
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));