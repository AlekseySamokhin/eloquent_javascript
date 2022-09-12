var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("пицца", 0.069);
storePhi("тронул дерево", -0.081);

console.log(map);

Object.prototype.nonsense = "Алекскей";

for(var prop in map) {
    console.log(prop);
}

console.log("nonsense" in map);
// → true
console.log("toString" in map);
// → true