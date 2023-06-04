let str1 = "PW Skills is the best educational platform.";
let pattern1 = /PW Skills/;
console.log(pattern1.test(str1));

let pattern2 = /pw skills/;
console.log(pattern2.test(str1));

let pattern3 = /pw skills/i;
console.log(pattern3.test(str1));


let str2 = "Bharat is a student.";
let pat1 = /bharat/;
console.log(pat1.test(str2));
let pat2 = /bharat/i;
console.log(pat2.test(str2));


let string = "Bharat is a good student.Bharat Kumar";
let patt1 = /Bharat/;
let patt2 = /Bharat/i;
let patt3 = /bharat/;
let patt4 = /bharat/i;
console.log(string.match(patt1));
console.log(string.match(patt2));
console.log(string.match(patt3));
console.log(string.match(patt4));


let patt5 = /Bharat/g;
console.log(string.match(patt5));


let str = "The numbers are: 1 2 3 4 5 6 7";
let patt6 = /[1-5]/;
let patt7 = /[1-5]/g;
console.log(str.match(patt6));
console.log(str.match(patt7));

console.log(str.replace(5, 10));