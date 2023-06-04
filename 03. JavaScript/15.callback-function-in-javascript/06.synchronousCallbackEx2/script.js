console.log("Start");

function function1() {
    console.log("Executing Function 01");
}

function function2(callback) {
    callback();
    console.log("Executing Function 02");
}

function2(function1);
console.log("End");