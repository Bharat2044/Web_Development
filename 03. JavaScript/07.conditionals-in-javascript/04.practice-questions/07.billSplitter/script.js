// A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
// people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
// it and returns an object that contains the total bill and the bill to be paid by each person in the group.


function calculateBill(dishes, numPeople) {
    // Calculate the total cost of all dishes
    const totalCost = dishes * numPeople;
  
    // Calculate the bill to be paid by each person
    const perPerson = totalCost / numPeople;
  
    // Return an object containing the total bill and bill per person
    return {
      total: totalCost,
      perPerson: perPerson
    };
}
  
console.log(calculateBill(50, 5));