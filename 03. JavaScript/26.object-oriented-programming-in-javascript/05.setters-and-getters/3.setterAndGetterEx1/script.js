class Product {
    // properties -> variables -> data members  => private date
    // name;
    // price;
    #rating;

    // constructor
    constructor(n, p, r) {
        console.log("Calling the constructor");
        this.name = n;
        this.price = p;
        this.#rating = r;
    }

    static custom() {
        console.log("Calling a static method");
    }

    // Getters 
    getRating() {
        console.log(this.#rating);
    }

    // Setters
    setRating(r) {
        if(r < 0)
            return;
        
            this.#rating = r;
    }

    // behaviours -> functions -> member functions
    display() {
        console.log("Displaying the current product", this.name, this.price, this.#rating);
    }    
}

// creating object  =>  new creates an empty plain object
const p = new Product("iphone", 1200000, 4.9);
console.log(p);
p.setRating(10);
p.getRating();

p.display();
Product.custom();