class Product {
    // properties -> variables -> data members
    name;
    price;
    rating;

    // constructor
    constructor(n, p, r) {
        console.log("Calling the constructor");
        this.name = n;
        this.price = p;
        this.rating = r;
        // return 10;   // if you are returning primitive, then it will be avoided in constructor
        // return {x: 10, y: 20}; // if you returned non-primitive, then it will be returned
        // return this;
    }

    // behaviours -> functions -> member functions
    display() {
        console.log("this refers to: ", this);
        console.log("Displaying the current product", this.name, this.price, this.rating);
    }    
}

// creating object  =>  new creates an empty plain object
const p = new Product("iphone", 120000, 4.9);
console.log(p);
// p.display();

console.log(p.rating);