// 1
for(let line = "#"; line.length <= 7; line += "#") {
    console.log(line);
}

// 2 
let line = "";
for(let i = 1; i <= 7; i++) {
    line += "#";
    
    console.log(line);
}

// 3
let string = "#";
for(let i = 1; i < 8; i++) {
    console.log(string.repeat(i));
} 
