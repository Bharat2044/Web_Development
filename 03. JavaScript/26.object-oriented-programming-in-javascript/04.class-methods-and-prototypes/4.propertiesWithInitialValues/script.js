class Person {
    constructor(fName, lName, age, city) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.city = city;
        this.level = 0;
        this.skills = [];
    }

    getFullName() {
        const fullName = this.fName + ' ' + this.lName;
        return fullName;
    }
}

const person1 = new Person('Bharat', 'Kumar', 21, 'Samastipur');
const person2 = new Person('Deepak', 'Singh', 18, 'Patna');
console.log(person1.level);
console.log(person2.level);
console.log(person1.skills);
console.log(person2.skills);

console.log(person1.getFullName());
console.log(person2.getFullName());