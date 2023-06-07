const Product = function(n, p, r) {
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("iphone", 120000, 4.9);
console.log(p);

let x = {
    p: Product
}

x.p("airpods", 20000.5, 5);
console.log(x);

/*
* 1. this keyword in javascript is different than other languages
* 2. this keyword refers to the context from where we called

* 3. In the function constructor also
*   - If you return primitive it is ignored and we return the object referred by this
*   - If you return a custom object, then the custom object is returned
*   - If you don't returned anything, then object is referred by this is returned
*/