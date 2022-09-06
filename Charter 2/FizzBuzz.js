// 1
for(let i = 1; i <= 100; i++) {
    let string = "";
    
    if(i % 3 === 0 && i % 5 === 0) {
        string = "FizzBuzz"
    } else if(i % 3 === 0) {
        string = "Fizz";
    } else if(i % 5 === 0) {
        string = "Buzz";
    } else {
        string = i;
    }

    console.log(string);
}

// 2
for(let i = 1; i <= 100; i++) {
    let string = "";

    if(i % 3 === 0) string += "Fizz";

    if(i % 5 === 0) string += "Buzz";

    console.log(string || i);
}

// 3
for(let i = 1; i <= 100; i++) {
    let string = "";

    if(i % 3 === 0) string += "Fizz";

    if(i % 5 === 0) string += "Buzz";

    if(i % 3 !== 0 && i % 5 !== 0) string += i;

    console.log(string);
}





