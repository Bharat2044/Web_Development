let arr = [1, 3, 5, 7];

arr.map(element => {
    console.log(element);
});

arr.map(function(element, index, arr) {
    console.log("Anynmous Function : ",index, element, arr);
})

arr.map((element, index, arr) => {
    console.log("Arrow Function : ", index, element, arr);
})


const itemsInCart = ["apple", "mike", "t-shirt", "comb"];
itemsInCart.map(element => {
    console.log(element, element.toUpperCase());
});


let cartItemsPriceAsStrings = ['100', '58.58', '134', '2324'];
// let cartItemsPriceAsNumbers = cartItemsPriceAsStrings.map(element => {
//     return Number(element)
// });
let cartItemsPriceAsNumbers = cartItemsPriceAsStrings.map(element => Number(element));
console.log(cartItemsPriceAsNumbers);