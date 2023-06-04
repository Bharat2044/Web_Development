const calculate = (a, b, operation) => {
    return operation(a, b);
}

// method 1
const addition = calculate(8, 4, function(n1, n2) {
    return n1 + n2;
});

console.log(addition);

// method 2
const subtraction = calculate(8, 4, (n1, n2) => {
    return n1 - n2;
});

console.log(subtraction);

// method 3
const multiplication = (n1, n2) => n1 * n2;

const ans = calculate(8, 4, multiplication);
console.log(ans);

// method 4
const division = function(n1, n2) {
    return n1 / n2;
} 

const divAns = calculate(8, 4, division);
console.log(divAns);