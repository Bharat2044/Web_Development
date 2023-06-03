// You are building a form where users can enter their names. You want to make sure that the first letter of the
// name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
// string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
// returns the modified string. Otherwise, it returns the original string without any changesK

const nameInput = document.getElementById("name-input");
nameInput.addEventListener("blur", function() {
    const name = nameInput.value;
    const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
    nameInput.value = capitalized;
});