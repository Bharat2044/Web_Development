function first() {
    console.log("First");
}
setTimeout(first, 2000);


setTimeout(() => {
    console.log("Second");
}, 2000);


setTimeout(function()  {
    console.log("Third");
}, 2000)