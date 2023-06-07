const person = {
    firstName: 'Bharat',
    lastName: 'Kumar',

    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Rohan Sharma';
console.log(person.firstName);
console.log(person.lastName);