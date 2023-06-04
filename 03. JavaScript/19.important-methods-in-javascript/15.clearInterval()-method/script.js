function myRepeatFun1() {
    console.log("Hi");
    clearInterval(interval);
}
let interval = setInterval(myRepeatFun1, 2000);

