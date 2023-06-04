let text = "Mr. Blue has a blue house";
let position1 = text.search("Blue");
console.log(position1);

let position2 = text.search("blue");
console.log(position2);

let position3 = text.search(/Blue/);
console.log(position3);

let position4 = text.search(/blue/);
console.log(position4);

let position5 = text.search(/blue/i);
console.log(position5);