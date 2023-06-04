// Example - 2
function sayHello() {
    return () => {
        console.log("Hello Everyone");
    }
}

let guessValue = sayHello();
console.log(guessValue);
guessValue();


function returnFunction() {
    return function() {
        return 7;
    }
}

const exampleFun = returnFunction();
console.log(exampleFun);
console.log(exampleFun());;