//1. Accessing Data
let emp1 = {
    id : 101,
    name : "Bharat",
    salary : 100000
}
console.log(emp1);
console.log("Accessing data using dot notation: ", emp1.id +" "+ emp1.name +" "+ emp1.salary);
console.log("Accessing data using square bracket notation: ", emp1['id'] +" "+ emp1['name'] +" "+ emp1['salary']);
console.log('\n');

//2. Adding Data
let emp2 = {
    id : 101,
    name : "Bharat",
    salary : 100000
}
console.log("Before adding data: ", emp2);
emp2.items = 10;
emp2['type'] = 'intern';
console.log("After adding data: ", emp2);
console.log('\n');

//3. Changing/Updating Data
let emp3 = {
    id : 101,
    name : "Bharat",
    salary : 100000
}
console.log("Before updating/changing data: ", emp3);
emp3.name = 'Deepak';
emp3['salary'] = 5555555;
console.log("After updating/changing data: ", emp3);
console.log('\n');

//4. Dleting Data
let emp4 = {
    id : 101,
    name : "Bharat",
    salary : 100000
}
console.log("Before deleting data: ", emp4);
delete emp4.name;
console.log("After deleting data: ", emp4);
console.log('\n');