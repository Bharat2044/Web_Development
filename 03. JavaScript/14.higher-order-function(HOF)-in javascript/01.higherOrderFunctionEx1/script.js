// Example - 1
const powerTwo = (n) => n ** 2;

function powerCube(n, powerTwo) {
    return n * powerTwo(n);
}

console.log(powerCube(3, powerTwo));

