// You are working on an e-commerce website where customers can add items to their cart. The cart stores the
//     euantity of each item that the customer wants to purchase in an array of numbers. However, the website is
//     currently experiencing a bug where the euantity of each item is being recorded incorrectly by reducin[ it to
//     half. As a result, you need to write a JavaScript function that can double the euantity of each item in the cart
//     array to correct the bug.


let arr = [1, 2, 3, 4, 5]

for(let i=0; i<arr.length; i++)
    arr[i] *= 2;

for(let x of arr)
    console.log(x);