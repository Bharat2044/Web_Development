const gameScore = [200, 100, 310, 300, 250, 150];

//check if all values are numbers
console.log(typeof gameScore[1]);
const gameScoreCheck1 = gameScore.every((ele) => typeof ele === 'number')
console.log("Check1: ", gameScoreCheck1);

const gameScoreCheck2 = gameScore.every((ele) => ele >= 100)
console.log("Check2: ", gameScoreCheck2);

const gameScoreCheck3 = gameScore.every((ele) => ele < 100)
console.log("Check3: ", gameScoreCheck3);


let arr = ["HTML", "CSS", "JS", "REACT"];
// let ans = arr.every((ele) => {
//     return typeof ele === "string"
// });
let ans = arr.every((ele) => typeof ele === "string");
console.log(ans);