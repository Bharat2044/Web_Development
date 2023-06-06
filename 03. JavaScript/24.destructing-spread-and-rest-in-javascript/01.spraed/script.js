// SPREAD
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = [arr1, arr2];
console.log(arr4);

const arr5 = [...arr1, ...arr2]
console.log(arr5);