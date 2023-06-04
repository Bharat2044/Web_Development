const gameScore = [200, 100, 310, 300, 250, 150]

// find score above 200
const above200 = gameScore.find((score) => score > 200 )   // It returns first matching element

console.log(above200);


let tech = ["HTML", "CSS", "JS", "REACT"];

let ans1 = tech.find((curr) => curr == "JS");
console.log(ans1);
ans1 ? console.log("JS is present") : console.log("JS is not present");

let ans2 = tech.find((curr) => curr == "JavaScript");
console.log(ans2);
ans2 ? console.log("JavaScript is present") : console.log("JavaScript is not present");