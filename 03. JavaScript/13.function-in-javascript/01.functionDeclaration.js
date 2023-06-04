//function declaration
function greet() {
    console.log("Hello, Everyone!!");
    console.log("How are you?");
}

function square(x) {        // x is argument
    console.log(x * x);
}

function cube(x) {        // x is argument
    return x*x*x;
}

//calling function
greet();

square(5);          // 5 is parameter

let ans = cube(3);        // 3 is parameter
console.log(ans);