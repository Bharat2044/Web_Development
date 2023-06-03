let a = 4;
let b = 2;
let exp = '**';

switch(exp) {
    case '+':
        console.log("Sum = " + (a + b));
        break;
    case '-':
        console.log("Difference = " + (a - b));
        break;    
    case '*':
        console.log("Multiplication = " + (a * b));
        break;    
    case '/':
        console.log("Division = " + (a / b));
        break;
    case '%':
        console.log("Remainder = " + (a % b));
        break;
    case '**':
        console.log("Exponential = " + (a ** b));
        break;
    default:
        console.log("Please enter +, -, *, /, % or **");
}