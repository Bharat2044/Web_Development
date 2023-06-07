function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
}

const john = new Person("John", 30);
john.greet(); // Outputs: "Hello, my name is John and I'm 30 years old."

Person.prototype.changeName = function (newName) {
    this.name = newName;
}

john.changeName("Johnny");
john.greet(); // Outputs: "Hello, my name is Johnny and I'm 30 years old."