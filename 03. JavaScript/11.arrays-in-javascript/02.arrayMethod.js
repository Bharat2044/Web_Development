//1. pop() method
console.log('1. pop() method');
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let last = arr1.pop();
console.log("Before deleted form last array length: ", arr1.length);
console.log(arr1);
console.log("After deleted form last array length: ", arr1.length);
console.log("Deleted element: ", last);
console.log('\n');

//2. push() method
console.log('2. push() method');
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log("Before insert at last array length: ", arr2.length);
let len1 = arr2.push(9);
console.log(arr2);
console.log("After insert at last array length: ", arr2.length);
console.log("Length of array: ", len1);
console.log('Inserting more than one element at a time in last');
arr2.push(10, 11, 12);
console.log(arr2);
console.log('\n');

//3. shift() method
console.log('3. shift() method');
let arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log("Before deleted form start array length: ", arr3.length);
let first = arr3.shift();
console.log(arr3);
console.log("After deleted form start array length: ", arr3.length);
console.log("Deleted element: ", first);
console.log('\n');

//4. unshift() method
console.log('4. unshift() method');
let arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log("Before insert at begin array length: ", arr2.length);
let len2 = arr4.unshift(9);
console.log(arr4);
console.log("After insert at begin array length: ", arr2.length);
console.log("Length of array: ", len2);
console.log('Inserting more than one element at a time in starting');
arr4.unshift(10, 11, 12);
console.log(arr4);
console.log('\n');

//5. concat() method()
console.log('5. concat() method()');
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
console.log('concat 2 array')
let newArr1 = arr5.concat(arr6);
console.log(newArr1);
let arr7 = [7, 8, 9];
console.log('concat more than 2 array')
let newArr2 = arr5.concat(arr6, arr7);
console.log(newArr2);
console.log('\n');

//6. join() method
console.log('6. join() method');
let arr8 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let result1 = arr8.join();
console.log(arr8);
console.log(result1);
console.log(typeof result1);
let result2 = arr8.join('-');
console.log(result2);
console.log('\n');

//7. slice method()
console.log('7. slice method()');
let arr9 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let part1 = arr9.slice(2, 5);
console.log(arr9);
console.log(part1);
let part2 = arr9.slice(4);
console.log(part2);
console.log('\n');

//8. splice() method
console.log('8. splice() method');
let temp = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let x = temp.splice(2, 5);
console.log(temp);
console.log(x);

let arr10 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log("Before splice or update array are: ");
console.log(arr10);
let removed = arr10.splice(2, 3, 101, 102, 103);
console.log("After splice or update array are: ");
console.log(arr10);
console.log("Deleted part: ", removed);
console.log('\n');

//9. reverse() method
console.log('9. reverse() method');
let arr11 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log("Before reversed array are: ");
console.log(arr11);
arr11.reverse();
console.log("After reversed array are: ");
console.log(arr11);
console.log('\n');

//10. sort() method
console.log('10. sort() method');
let arr12 = [11, 2, -3, 14, 55, 6, 7, -8];
console.log("Before sort array are: ");
console.log(arr12);
arr12.sort();
console.log("After sort array are: ");
console.log(arr12);
console.log('\n');

//11. indexOf() method
console.log('11. indexOf() method');
let arr13 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log('Index of element 4 is: ', arr13.indexOf(4));
console.log('Index of element 4 after index 6 is: ', arr13.indexOf(4, 6));
console.log('Index of element 111 is: ', arr13.indexOf(111));
console.log('\n');

//12. includes() method
console.log('12. includes() method');
let arr14 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr14.includes(2));
console.log(arr14.includes(9));
console.log('\n');

//13. at() method
console.log('13. at() method');
let arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr15.at(4));
console.log('\n');
