// Example - 5
function calculatorFunction(operation, initialValue, numbers) {
    let total = initialValue;
    for(const num of numbers) {
        total = operation(total, num);
    }

    return total;
}

function sum(a, b) {
    return a + b;
}
function diff(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

console.log(calculatorFunction(sum, 0, [1, 5, 7]));
console.log(calculatorFunction(multiply, 1, [1, 5, 7]));;