// Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
// to perform the operation on the two numbersK
// The calculator function should:
// | Take in two numbers, num1 and num2, and a string representing a mathematical operator, operatorJ
// | Use a switch statement to determine which operation to perform based on the value of the operatorJ
// | If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
// operation and store the result in a variable called resultJ
// | If the operator is not one of the valid operators, log "Invalid operator" to the consoleK


let x = Number(prompt("Enter first number: "));
let y = Number(prompt("Enter second number: "));

let operation = prompt("Enter operation (+, -, *, /): ");

switch(operation) {
    case '+':
        console.log(x+y);
        break;
    case '-':
        console.log(x-y);
        break;
    case '*':
        console.log(x-y);
        break;    
    case '/':
        console.log(x-y);
        break; 
    default:
        console.log("Invalid operator");
}