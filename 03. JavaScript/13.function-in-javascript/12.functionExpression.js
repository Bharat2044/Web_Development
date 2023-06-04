let sum = function(x, y) {
    return x+y;
};

//named function expression
let ans = function greet() {
    console.log("hello");
};

//anonymous function expression
(function(num) {
    console.log(Math.pow(num, 3));
})(3);

//calling function
console.log(sum(2, 5));

ans();