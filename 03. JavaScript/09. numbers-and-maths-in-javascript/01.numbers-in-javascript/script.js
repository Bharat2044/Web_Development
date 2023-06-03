console.log(Number);

const score = 400;
console.log(score);
console.log();

const balance = new Number(100);
console.log(balance);
console.log();

const result = balance.toString();
console.log(typeof result);
console.log(result.length);
console.log();

console.log(balance.toFixed());
console.log(balance.toFixed(1));
console.log(balance.toFixed(2));
console.log();

let x = 123.89667877;
console.log(x.toFixed(5));
console.log(x.toPrecision(5));
console.log(x.toPrecision(3));
console.log();

const a = 1000000;
console.log(a.toLocaleString());
console.log(a.toLocaleString('en-IN'));
console.log();

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log();

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log();

// NUmber datatype maximum and minimum value
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log();

console.log(Number.isInteger);
