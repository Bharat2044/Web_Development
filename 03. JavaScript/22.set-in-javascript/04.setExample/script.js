let myArray = [1, 2, 3, 4, 3, 2]
let newSet = new Set([...myArray])
console.log(newSet);

newSet.add(9)
newSet.clear()
console.log(newSet);
console.log(newSet.has(9));


