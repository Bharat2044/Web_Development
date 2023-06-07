class ComplexNumber {
    #real;
    #img;

    constructor(r, i) {
        this.#real = r;
        this.#img = i;
    }

    get real() {
        return this.#real;
    }

    get img() {
        return this.#img;
    }

    addComplexNumber(c) {
        this.#real += c.real;
        this.#img += c.img;
    }

    display() {
        console.log(`${this.#real} + ${this.#img}i`);
    }
}

const c1 = new ComplexNumber(2, 5);
c1.display();
const c2 = new ComplexNumber(9, 8);
c2.display();
c1.addComplexNumber(c2);
c1.display();
