// A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
// objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
// the unit price and quantity of each item.

let totalCost = (ele) => {
    return Object.values(ele) * Object.keys(ele);
} 

let arr = [{100 : 5}, {150 : 2}, {200 : 4}, {500 : 5}, {60 : 10}];

for(let x of arr) 
    console.log(totalCost(x));