let text = "Hello world, welcome to the universe. welcome again.";
let result1 = text.lastIndexOf("welcome");
console.log(result1);

let result2 = text.lastIndexOf("Welcome");
console.log(result2);

let result3 = text.lastIndexOf("e");
console.log(result3);

let result4 = text.lastIndexOf("e", 5);
console.log(result4);

let result5 = text.lastIndexOf("a");
console.log(result5);