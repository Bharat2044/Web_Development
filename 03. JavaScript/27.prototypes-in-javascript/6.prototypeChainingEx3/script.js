function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add a property to the Car prototype
Car.prototype.year = 2022;
Car.prototype.model = "Fortuner"

// Create a new Car object
const myCar = new Car("Toyota", "Camry");

// Access the instance object property
console.log(myCar.model); // Output: Camry

// Access the year property on the myCar object
console.log(myCar.year); // Output: 2022

//Access the not defined property
console.log(myCar.horsePower); //Output: undefined