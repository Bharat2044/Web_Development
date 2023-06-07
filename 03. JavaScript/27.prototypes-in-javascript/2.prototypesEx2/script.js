function Person(name, age) {
    this.name = name;
    this.age = age;
}

const alice = new Person('Alice', 30);
console.log(alice.__proto__ === Person.prototype); // true

Person.prototype.sayHello = function () {
    console.log('Hello, my name is ' + this.name);
};

const bob = new Person('Bob', 35);
bob.sayHello(); // Hello, my name is Bob

bob.sayHello = function () {
    console.log('Hello from Bob!');
};
bob.sayHello(); // Hello from Bob!

let person = new Person('John');
person.sayHello(); // output: Hello, my name is John