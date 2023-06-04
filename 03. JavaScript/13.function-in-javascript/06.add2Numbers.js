//function without argument and without return statement
function sum1() {
    console.log(5 + 2);
}

//function without argument and with return statement
function sum2() {
    return 2 + 3;
}

//function with argument and without return statement
function sum3(a, b) {
    console.log(a + b);
}

//function with both argument and return statement
function sum4(a, b) {
    return a+b;
}

//calling function
sum1();
console.log(sum2());
sum3(5, 5);
console.log(sum4(3, 9));