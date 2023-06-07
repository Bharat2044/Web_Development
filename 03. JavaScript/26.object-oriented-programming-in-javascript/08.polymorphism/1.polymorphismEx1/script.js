// parent class
class Person {
    constructor(name) {
        this.name = name;
        this.occupation = "Unemployed";
    }

    greet() {
        console.log(`Hello ${this.name}.`);
    }

}

// inheriting parent class
class Student extends Person {

    constructor(name) {
        // call the super class constructor and pass in the name parameter
        super(name);

        // Overriding an occupation property
        this.occupation = 'Student';
    }

    // overriding Person's method
    greet() {
        console.log(`Hello Student ${this.name}.`);
        console.log('Occupation: ' + this.occupation);
    }
}

let p = new Student('Jack');
p.greet();