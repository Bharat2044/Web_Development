// let x = undefined;
// console.log(x[0]);  // TypeError: Cannot read properties of undefined (reading '0')


try {
    let x = undefined;
    console.log(x[0]);
} catch (err) {
    console.log("Error handling in catch", err);
}