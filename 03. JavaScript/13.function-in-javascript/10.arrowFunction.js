/// One parameter, and a single return statement
const square = x => x * x;

// Multiple parameters, and a single return expression
const diff = (x, y) => x - y;

// Multiple statements in function expression
const sum = (x, y) => {
console.log(`Adding ${x} and ${y}`);
return x + y;
};

// Returning an object
const sumAndDifference = (x, y) => ({ sum: x + y, difference: x - y });

// calling a function
console.log(square(5));     // 25
console.log(diff(8, 2));   // 6
console.log(sum(1, 2));    // 3
console.log(sumAndDifference(5, 3)); // { sum: 8, difference: 2 }