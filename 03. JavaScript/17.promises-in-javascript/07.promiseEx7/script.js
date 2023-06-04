function createPromise() {
    return new Promise(function execute(resolve, reject) {
        setTimeout(function fun() {
            console.log("Timer done");   
            resolve("Successful");         
        }, 3000)
    });
}

console.log("Start");
let x = createPromise();
console.log("Got a new promise");

x.then(function f(value) {
    console.log("Promise done", value);
}).catch(function g() {
    console.log("Haandled", value);
}) .finally((value) => {
    console.log("I will always be executed");
});

console.log("End");

for(let i=0; i<10000000000; i++) {
    // some code
}