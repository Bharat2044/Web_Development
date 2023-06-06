const mySet1 = new Set();

mySet1.add(1);
mySet1.add(5); 
mySet1.add(5); 
mySet1.add("some text");       
                        
console.log(mySet1.size);           // 3                 
console.log(mySet1);                // Set(3) { 1, 5, 'some text' }
console.log();

const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 });        // o is referencing a different object, so this is okay
console.log(mySet1.size);         // 5                  
console.log(mySet1);              // Set(5) { 1, 5, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }
console.log();  

console.log(mySet1.has(1));                         // true
console.log(mySet1.has(3));                         // false, since 3 has not been added to the set
console.log(mySet1.has(5));                         // true
console.log(mySet1.has(Math.sqrt(25)));             // true
console.log(mySet1.has("Some Text".toLowerCase())); // true
console.log(mySet1.has(o));                         // true

console.log(mySet1.size);               // 5                    
console.log(mySet1);                    // Set(5) { 1, 5, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }
console.log();                        

mySet1.delete(5);                                
console.log(mySet1.has(5));            // false, 5 has been removed

console.log(mySet1.size);             // 4               
console.log(mySet1);                 // Set(4) { 1, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 } }
console.log();

mySet1.add(5);  

console.log(mySet1.size);          // 5              
console.log(mySet1);              // Set(5) { 1, 'some text', { a: 1, b: 2 }, { a: 1, b: 2 }, 5 }
console.log(); 