//Constructor function  
function Bike(company) {
    this.company = company;
}

Bike.prototype.getCompany = function () {
    return this.company;
}

//Another constructor function  
function Vehicle(name, price) {
    this.name = name;
    this.price = price;
}

let bike = new Bike("Honda");
Vehicle.prototype = bike; //Now Bike treats as a parent of Vehicle.

let vehicle = new Vehicle("Shine", 98000);
console.log(vehicle.getCompany() + " " + vehicle.name + " " + vehicle.price);