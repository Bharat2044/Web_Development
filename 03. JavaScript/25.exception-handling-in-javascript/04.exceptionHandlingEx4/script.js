// let x = undefined;
// console.log(x[0]);  // TypeError: Cannot read properties of undefined (reading '0')


try {
    console.log("try block starting");
    console.log("Hello, World");    
    // console.log(a);
    console.log("try block ending");
} catch (err) {
    console.log("Error handled", err);
} finally {
    console.log("Finally block always will be executed");
}

console.log("End");