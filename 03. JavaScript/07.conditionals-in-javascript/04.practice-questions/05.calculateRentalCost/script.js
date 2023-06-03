// A car rental company needs to calculate the cost of a rental based on the number of days rented and the type
// of car. They require a function that takes in the number of days rented and car type and returns the rental cost.
// The total cost would be the rental cost multiplied by the number of days rented.
// The rental costs are
//      Economy = Rs. 4000 /- per day
//      Midsizq = Rs. 10,000 /- per day
//      Luxury = Rs. 20,000 /- per day.


function totalCost(noOfDays, carType) {
    if(carType == "Economy")
        return 4000 * noOfDays;
    else if(carType == "Midsizq")
        return 10000 * noOfDays;
    else if(carType == "Luxury")
        return 20000 * noOfDays;
}

let noOfDays = 4;
let carType = "Luxury";

console.log(totalCost(noOfDays, carType))
