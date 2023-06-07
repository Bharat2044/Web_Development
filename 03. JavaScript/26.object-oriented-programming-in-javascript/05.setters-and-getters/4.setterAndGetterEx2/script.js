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
    get ratingGetter() {
        console.log(this.#rating);
    }

    // Setters
    set ratingSetter(r) {
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
p.ratingSetter = 10;
p.ratingGetter;

p.display();
Product.custom();