let a = 1;
let b = 2;

console.log(a);
console.log(b);
//console.log(c);     //ReferenceError: c is not defined
//console.log(d);       //ReferenceError: Cannot access 'd' before initialization

{
    b = 102;
    let c = 3;
}

let d = 4;

console.log(a);
console.log(b);
//console.log(c);     //ReferenceError: c is not defined
console.log(d);