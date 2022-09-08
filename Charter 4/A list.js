// 1 
function arrayToList(array) {
    let list = null;

    for(let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list,
        }
    }

    return list;
}

console.log(arrayToList([10, 20]));

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

function prepend(value, rest) {
    return {
        value: value,
        rest: rest 
    }
}

console.log(prepend(10, prepend(20, null)));

function nth(list, index) {
    if (!list) return undefined;
    else if (index == 0) return list.value;
    else return nth(list.rest, index - 1);
  }

  console.log(nth(arrayToList([10, 20, 30]), 1));


// 2
function arrayToList(array) {
	for (var i = array.length - 1; i >= 0; --i) {
		var rest = list || null;
		var list = {};

		list.value = array[i];
		list.rest = rest;
	}

	return list;
}

console.log(arrayToList([10, 20]));

function listToArray(list) {
	var array = [];
	array.push(list.value);
	var rest = list.rest;

	while (rest) {
		array.push(rest.value);
		rest = rest.rest;
	}

	return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(value, list) {
	return {
        value, 
        rest: list
    }
}

console.log(prepend(10, prepend(20, null)));

function nth(list, index) {
	if (!list.rest && index != 0) return undefined;
	return (index != 0) ? nth(list.rest, --index) : list.value;
}

console.log(nth(arrayToList([10, 20, 30]), 1));