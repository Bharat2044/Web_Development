let arr = [1, 3, 5, 7];

arr.forEach(element => {
    console.log(element);
});

arr.forEach(function(element, index, arr) {
    console.log("Anynmous Function : ",index, element, arr);
})

arr.forEach((element, index, arr) => {
    console.log("Arrow Function : ", index, element, arr);
})


const itemsInCart = ["apple", "mike", "t-shirt", "comb"];
itemsInCart.forEach(element => {
    console.log(element, element.toUpperCase());
});


// let cartItemsPriceAsStrings = ['100', '58.58', '134', '2324'];
// let cartItemsPriceAsNumbers = cartItemsPriceAsStrings.forEach(element => Number(element));
// console.log(cartItemsPriceAsNumbers);
// forEach() method not returns any new array, but map() method returns new array