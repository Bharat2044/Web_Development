// object creation => 3 ways to create object in JavaScript

// 1. By object literal
let student = {
    roll : 101,
    name : "Bharat",
    marks : 99.99
}
console.log(student);
console.log(student.roll +" "+ student.name +" "+ student.marks);
console.log(student['roll'] +" "+ student['name'] +" "+ student['marks']);
console.log('\n');

// 2. By creating an instance of object directly
let emp = new Object();
console.log(emp);
emp.id = 105;
emp.name = "Alex";
emp.salary = 10000;
console.log(emp);
console.log(emp.id +" "+ emp.name +" "+ emp.salary);
console.log(emp['id'] +" "+ emp['name'] +" "+ emp['salary']);
console.log('\n');

// 3. By using an object constructor
function product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}
const p = new product(151, "Car", 55555.55);
console.log(p);
console.log(p.id +" "+ p.name +" "+ p.price);
console.log(p['id'] +" "+ p['name'] +" "+ p['price']);
console.log('\n');