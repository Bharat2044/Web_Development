class Product {
    // properties -> variables -> data members
    name;
    price;
    rating;

    // behaviours -> functions -> member functions
    display() {
        console.log("Displaying the current product");
    }
}

// creating object
const p1 = new Product();
console.log(Product);
console.log(p1);
p1.display();
console.log();

const p2 = Object.create(Product);
console.log(Product);
console.log(p2);
// p2.display();    // TypeError: p2.display is not a function