// 1
function range(start, finish, step) {
    let array = [];

    if(step === undefined || step === 0) {
        step = 1;
    }

    if (step < 0 && (start > finish)) {
        for(let i = start; i >= finish; i += step) {
            array.push(i);
        }
    } else {
        for(let i = start; i <= finish; i += step) {
            array.push(i);
        }
    }

    return array;
}

function sum(array) {
    return array.reduce((previousValue , currentValue) => previousValue  + currentValue);
}

// 2 
function range(start, finish, step = (start > finish) ? -1 : 1) {
    let array = [];

    if (step < 0 && (start > finish)) {
        for(let i = start; i >= finish; i += step) {
            array.push(i);
        }
    } else {
        for(let i = start; i <= finish; i += step) {
            array.push(i);
        }
    }

    return array;
}

function sum(array) {
    return array.reduce((initValue , currValue) => initValue  + currValue);
}

// 3
function range(start, finish, step) {
	var array = [];
	var step = step || 1;

	if (step < 0) {
		for (var i = start; i >= finish; i += step)
            array.push(i);
	} else {
		for (var i = start; i <= finish; i += step)
            array.push(i);
	}

	return array;
}

function sum(array) {
    let sum = 0;
    for (let value of array) {
      total += value;
    }
    return sum;
  }

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));