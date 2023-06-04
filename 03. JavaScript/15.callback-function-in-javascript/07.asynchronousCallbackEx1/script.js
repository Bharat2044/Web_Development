console.log("Start");

setTimeout(() => {
    console.log("Set Timeout is being executed");
}, 2000);

console.log("End");


function display(){
    console.log("Timer displayed after 2 second")
}

setTimeout(display, 2000)
console.log("One")
console.log("Two")
