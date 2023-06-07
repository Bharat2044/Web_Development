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

// creating object  =>  new creates an empty plain object
const p = new Product();

console.log(p);

p.display();