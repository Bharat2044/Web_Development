const person = {
    firstName: 'Bharat',
    lastName: 'Kumar',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName);