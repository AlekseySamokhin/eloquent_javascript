// 1
function countBs(string) {
    let count = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] === "B") {
            count++
        }
    }

    return count;
}

console.log(countBs("BBC"));

function countChar(string, char) {
    let count = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] === char) {
            count++
        }
    }

    return count;
}

console.log(countChar("kakkerlak", "k"));

// 2
function countChar(string, char) {
    let counted = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] ===  char) counted += 1;
    }

    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}

console.log(countBs("BBC"));