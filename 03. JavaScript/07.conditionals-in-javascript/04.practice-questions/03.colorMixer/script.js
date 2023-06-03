// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// based on the following criteria:

//   If color1 is "red" and color2 is "blue" or vice versa, print "purple"J
//   If color1 is "red" and color2 is "yellow" or vice versa, print "orange"J
//   If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"J
//   If any other combination of colors is input, the program should print "Invalid color combination"K


let color1 = prompt("Enter first color name: ");
let color2 = prompt("Enter second color name: ");

if((color1=="red" && color2=="blue") || (color1=="blue" && color2=="red"))
    console.log("purple");
else if((color1=="red" && color2=="yellow") || (color1=="yellow" && color2=="red"))
    console.log("orange");
else if((color1=="blue" && color2=="yellow") || (color1=="yellow" && color2=="blue"))
    console.log("green");
else
    console.log("Invalid color combination");