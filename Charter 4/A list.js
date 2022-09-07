// 1 
function arrayToList(array) {
    let list = null;

    for(let i = array.length - 1; i >= 0; i--) {
        list = { 
            value: array[i], 
            rest: list, 
        };
    }

    return list;
}

function listToArray(list) {
    let array = [];

    array.push(list.value);

    let rest = list.rest;

    while(rest) {
        array.push(rest.value);
        rest = rest.rest;
    }

    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));