a = 1;
b = 2;

console.log(a);
console.log(b);
// console.log(c);      // ReferenceError: c is not defined

{
    b = 102;
    c = 3;
}

console.log(a);
console.log(b);
console.log(c);

