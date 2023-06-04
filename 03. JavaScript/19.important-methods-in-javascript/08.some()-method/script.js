const gameScore = [200, 100, 310, 300, 250, 150, "BHARAT"];

//check if any values are numbers
console.log(typeof gameScore[1]);
const gameScoreCheck1 = gameScore.some((ele) => typeof ele === 'string')
console.log("Check1: ", gameScoreCheck1);

const gameScoreCheck2 = gameScore.some((ele) => ele >= 100)
console.log("Check2: ", gameScoreCheck2);

const gameScoreCheck3 = gameScore.some((ele) => ele < 100)
console.log("Check3: ", gameScoreCheck3);


let arr = ["HTML", "CSS", "JS", "REACT"];
// let ans = arr.some((ele) => {
//     return typeof ele === "string"
// });
let ans = arr.some((ele) => typeof ele === "string");
console.log(ans);