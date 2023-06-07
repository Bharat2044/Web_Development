function Student(name, studentId) {
    this.name = name;
    this.studentId = studentId;
}

Student.prototype = new Person();
Student.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and my student ID is ${this.studentId}`);
};

let student = new Student('Jane', '12345');
student.sayHello(); // output: Hello, my name is Jane and my student ID is 12345

function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};

let person = new Person('John');
person.sayHello(); // output: Hello, my name is John