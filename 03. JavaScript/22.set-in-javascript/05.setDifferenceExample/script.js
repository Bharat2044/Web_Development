// Set difference
let set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(4);
set1.add(7);

let set2 = new Set();
set1.add(1);
set1.add(3);
set1.add(7);
set1.add(5);
set1.add(11);

function setDifference(setA, setB){
    return new Set([...setA].filter(el => !setB.has(el)))
}


console.log(setDifference(set1, set2));