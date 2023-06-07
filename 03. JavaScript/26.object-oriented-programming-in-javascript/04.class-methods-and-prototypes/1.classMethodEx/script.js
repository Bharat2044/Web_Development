class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello ji, my name is ${this.name}.`);
    }
}

const person = new Person("Bharat");
person.sayHello();