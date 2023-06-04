function myRepeatFun1() {
    console.log("Hi");
}
// setInterval(myRepeatFun1, 2000);


// passing arguments
function myRepeatFun1(a, b) {
    console.log(a + b);
}
// setInterval(myRepeatFun1, 2000, 10, "Hello");


// passing another function
function timer() {
    const date = new Date();
    const newTime = date.toLocaleTimeString();
    console.log(newTime);
}
setInterval(timer, 1000);
