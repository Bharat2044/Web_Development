console.log("Hello, How are you?");
console.log("Congratulations !! You have enrolled to the course.");
console.log("I completed HTML & CSS. Hurray !!");

let assignmentCompletion = false;

try {
    if (assignmentCompletion === false)
        throw new Error("You have not completed the Assignment");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("You can now create Static webpages");
}

console.log("You are now learning Javascript");