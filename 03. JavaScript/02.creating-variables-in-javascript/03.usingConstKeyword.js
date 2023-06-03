a = 1;
b = 2;

console.log(a);
console.log(b);
// console.log(c);      // ReferenceError: c is not defined
// console.log(d);      // ReferenceError: d is not defined

{
    b = 102;
    c = 3;
}

d = 4;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// const x;    // SyntaxError: Missing initializer in const declaration