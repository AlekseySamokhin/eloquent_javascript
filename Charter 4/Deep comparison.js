// 1 
function deepEqual(x, y) {
    if(x === y) return true;

    if( x === null || y === null || typeof(x) !== "object" || typeof(y) !== "object") return false;
    
    let aKeys = Object.keys(x);
    let bKeys= Object.keys(y);

    if(aKeys.length !== bKeys.length) return false;

    for(let key of aKeys) {
        if(!bKeys.includes(key) || !deepEqual(x[key], y[key])) return false;
    }

    return true;
 }

 // 2 
 function deepEqual(a, b) {
	if ((typeof a == "object" && typeof b == "object") && (a != null || b != null)) {
		for (var i = 0, j = 0; i < Object.keys(a).length, j < Object.keys(b).length; ++i, ++j) {
			var result = deepEqual(a[Object.keys(a)[i]], b[Object.keys(b)[j]]);
			if (result == false) break;
		}

		return result;
	} else {
		return (a === b);
	}
}

// 3 
function deepEqual(a, b) {
    const areObject = typeof(a) === "object" && typeof(b) === "object";

    const areNotNull = a !== null && b !== null;
    
    if(areObject && areNotNull) {
        if(Object.keys(a).length !== Object.keys(b).length) return false;

        for(let key in b) {
            if (!a.hasOwnProperty(key)) return false;
            if (typeof a[key] === "object" && typeof b[key] === "object") {
                const result = deepEqual(a[key], b[key]);
                if (!result) return false;
            } else {
                if (a[key] !== b[key]) return false;
            }
        }

        return true;
    } else {
        return a === b;
    }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));