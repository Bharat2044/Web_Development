let text = "The rain in SPAIN stays mainly in the plain";
let ans1 = text.match("ain");
console.log(ans1);

let ans2 = text.match(/ain/);
console.log(ans2);

let ans3 = text.match(/ain/g);
console.log(ans3);

let ans4 = text.match(/ain/gi);
console.log(ans4);
