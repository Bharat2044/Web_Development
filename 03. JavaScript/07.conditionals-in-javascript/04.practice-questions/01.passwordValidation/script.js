// Write a JavaScript program that checks if the entered password matches the confirmed password. If the
// passwords match, the program should log "Password Matched. Password validation Successful." to the console.
// Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the consoleK


let password = prompt("Enter Password: ");
let conformPassword = prompt("Enter Conform Password: ");

if(password === conformPassword)
    console.log("Password Matched. Password validation Successful.");
else
console.log("Password didn't match. Password validation unsuccessful");