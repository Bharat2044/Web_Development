const Product = (n, p, r) => {
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("iphone", 120000, 4.9);
console.log(p);     // TypeError: Product is not a constructor


// The theory of this keyword pointing to calling context is not applicable with arrow function