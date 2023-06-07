class Product {
    // properties -> variables -> data members
    name;
    price;
    rating;

    // constructor
    constructor() {
        console.log("Calling the constructor");
        this.name = "iphone";
        this.price = 120000;
        this.rating = 4.9;
    }

    // behaviours -> functions -> member functions
    display() {
        console.log("this refers to: ", this);
        console.log("Displaying the current product", this.name, this.price, this.rating);
    }    
}

// creating object  =>  new creates an empty plain object
const p = new Product();
console.log(p);
p.display();