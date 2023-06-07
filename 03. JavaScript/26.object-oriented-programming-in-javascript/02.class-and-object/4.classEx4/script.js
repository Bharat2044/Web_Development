class Person {
    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const myPerson = new Person();
myPerson.setName("Bharat");
myPerson.setAge(20);
myPerson.introduce();