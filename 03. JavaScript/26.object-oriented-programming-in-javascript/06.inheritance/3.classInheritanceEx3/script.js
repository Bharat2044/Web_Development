class Bird {
    useWings() {
        console.log("Flying");
    }
}

class Eagle extends Bird {
    useWings() {
        super.useWings();
        console.log("Barely Flapping");
    }
}

class Penguin extends Bird {
    useWings() {
        console.log("Diving");
    }
}

let badEagle = new Eagle();
let kingPengyin = new Penguin();

badEagle.useWings();
kingPengyin.useWings();