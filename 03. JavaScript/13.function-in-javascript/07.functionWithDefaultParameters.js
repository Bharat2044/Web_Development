//function declaration
function display(message = "Hi") {
    console.log(message);
}

function sum(num1, num2 = 5, num3 = 2) {
    return num1+num2+num3;
}

//calling function
display();
display("Hello, Everyone!!");
console.log(sum(1));
console.log(sum(2, 3));
console.log(sum(1, 2, 3));