const MyClass = class {
    constructor(expression) {
        this.result = expression;
    }
};

const myInstance = new MyClass(10 + 2);
console.log(myInstance.result);