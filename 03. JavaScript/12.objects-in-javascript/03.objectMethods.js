let emp = {
    id : 101,
    name : "Bharat",
    salary : 100000
}

//1. Object.keys()  =>  used to copy print object keys
let keys = Object.keys(emp);
console.log(keys);
console.log();

//2. Object.values();  =>  used to copy print object values
let values = Object.values(emp);
console.log(values);
console.log();

//3. Object.entries()  =>  used to print object property [key,value]
console.log(Object.entries(emp)[1]);
console.log(Object.entries(emp)[2]);
console.log();

//4. Object.assign()  =>  used to copy object data
let ob1 = Object.assign(emp);
console.log(ob1);
let ob2 = Object.assign({x:16}, emp);   //let ob2 = Object.assign(emp, {x:16});
console.log(ob2);
console.log();

//5. Object.freeze()  =>  used to freeze object =>  after this you can't change, add and delete object data
console.log(Object.isFrozen(emp));
Object.freeze(emp);
emp.h = 10000001;
console.log(Object.isFrozen(emp));
console.log();

//6. Object.seal()  =>  used to seal object =>  after this you can change, but can't add and delete object data
console.log(Object.isSealed(emp));
Object.seal(emp);
//emp.id = 10000001;
console.log(Object.isSealed(emp));
console.log();