const a = [4, 1, 6, -2, -5, 3, 2, -8, 6, 7];

// find()
// const firstNegative = (num) => {
//     return num < 0;
// }
// const ans1 = a.find(firstNegative);

const ans1 = a.find((num) => num < 0);
console.log(ans1);

// findIndex()
const ans2 = a.findIndex((num) => num < 0);
console.log(ans2);

// every()
const ans3 = a.every((num) => num < 0);
console.log(ans3);

// some()
const ans4 = a.some((num) => num < 0);
console.log(ans4);

// forEach()
a.forEach((num) => {
    console.log("Array Num: ", num);
});
a.forEach((num, index) => {
    console.log("Array Num: ", num, index);
});

// map()
let ans5 = a.map((num) => {
    return num<0;
});
console.log(ans5);

let ans6 = a.map((num) => {
    return num<0;
});
console.log(ans6);

// filter()
let ans7 = a.filter((num) => {
    return num < 0;
});
console.log(ans7);