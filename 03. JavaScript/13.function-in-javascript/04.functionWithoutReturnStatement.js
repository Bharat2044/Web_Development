//function declaration
function greet(msg) {
    console.log(msg);
}
function printName(name) {
    if(name == undefined)
        return;
    console.log(name);
}

//calling function
greet("Hello");         //Hello

printName();            //no output
printName("Bharat");    //Bharat