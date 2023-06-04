function h1(x, fn) {     // h is higher-order function and fn is callback
    console.log(x * x);

    fn();
}

function exe1() {
    console.log("Done with callback.");
}

h1(5, exe1);

h1(5, function() {
    console.log("Done with callback.");
})

console.log();

function h2(x, fn) {     // h is higher-order function and fn is callback
    console.log(x * x);

    fn(x * x);
}
function exe2(n) {
    console.log("Square value is", n);
}
h2(8, exe2);
