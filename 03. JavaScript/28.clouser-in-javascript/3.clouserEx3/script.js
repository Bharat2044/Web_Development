let errorMessage = "File not found";

setTimeout(function callback() {
    console.log(errorMessage);
}, 2000);


let pageCount = 0;
const items = [2, 4, 6, 7, 9];

items.forEach(function iterator(num) {
    pageCount++;
    console.log(num);
});

console.log("Page Count = ", pageCount);