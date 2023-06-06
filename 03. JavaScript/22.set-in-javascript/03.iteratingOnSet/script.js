let mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add({"a": 1, "b": 2});
mySet.add({"a": 1, "b": 2});
mySet.add(5);

for (const item of mySet) {
    console.log(item);              // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
}
console.log(); 
  
for (const item of mySet.keys()) {
    console.log(item);              // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
}
console.log(); 
  
  
for (const item of mySet.values()) {
    console.log(item);             // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
}
console.log(); 
  
  
// key and value are the same here
for (const [key, value] of mySet.entries()) {
    console.log(key);               // 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5
}
console.log(); 
  
  
// Convert Set object to an Array object, with Array.from
const myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// converting between Set and Array
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]
  
// intersect can be simulated via
const intersection = new Set([...mySet].filter((x) => mySet2.has(x)));
  
// difference can be simulated via
const difference = new Set([...mySet].filter((x) => !mySet2.has(x)));
  
// Iterate set entries with forEach()
mySet2.forEach((value) => {
    console.log(value);         // 1 2 3 4
});
  