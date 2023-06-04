function squareOfANumber(num) {
    console.log(num * num);
}

function operation(num, func) {
    func(num);
}

// Calling the function.
operation(5, squareOfANumber);