// Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2.
// Use a for loop and continue statement.


let arr = [1, 3, 34, 45, 4, 3, 32, 4543, 56, 345];

for(let x of arr) {
    if(x%3 == 0 && x%2 != 0)
        console.log(x)
}