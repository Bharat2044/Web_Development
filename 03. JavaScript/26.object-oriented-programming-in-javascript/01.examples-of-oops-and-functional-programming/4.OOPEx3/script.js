class Car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("Turbo is on");
    }
}

// Creating object
const carObj = new Car("red", 100);
carObj.turboOn();