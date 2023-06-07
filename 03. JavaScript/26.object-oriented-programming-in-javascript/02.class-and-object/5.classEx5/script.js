class Car {
    setMake(make) {
        this.make = make;
    }
    
    setModel(model) {
        this.model = model;
    }

    setYear(year) {
        this.year = year;
    }

    honk() {
        console.log("Beep Beep!");
    }
}

const myCar = new Car();
myCar.setMake("Toyota");
myCar.setModel("Camry");
myCar.setYear(2020);

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
myCar.honk();