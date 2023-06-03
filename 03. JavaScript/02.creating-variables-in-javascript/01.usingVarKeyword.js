var a = 1;
var b = 2;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

{
    b = 102;
    var c = 3;
}

var d = 4;

console.log(a);
console.log(b);
console.log(c);
console.log(d);



var x = 10;
function f1() {
    var x = 101;
    console.log(x);
    var y = 20;
}

function f2() {
    console.log(x);
}

console.log(x);
f1();
f2();
// console.log(y);  // ReferenceError: y is not defined