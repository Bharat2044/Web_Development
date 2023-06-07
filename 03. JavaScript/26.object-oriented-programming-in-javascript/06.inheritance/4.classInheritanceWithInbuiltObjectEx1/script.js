class Moment extends Date {
    constructor() {
        super();
    }
}

let m = new Moment();

console.log("Current date: " + m.getDate() + "-" + (m.getMonth() + 1) + "-" + m.getFullYear());  