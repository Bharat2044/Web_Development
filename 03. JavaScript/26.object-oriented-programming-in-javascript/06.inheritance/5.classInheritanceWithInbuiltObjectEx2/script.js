class Moment extends Date {
    constructor(year) {
        super(year);
    }
}

let m = new Moment("August 15, 1947 20:22:10");
console.log(`Year value: ${m.getFullYear()}`);