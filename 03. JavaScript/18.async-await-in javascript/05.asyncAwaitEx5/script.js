function createPromise() {
    return new Promise(function execute(resolve, reject) {

        setTimeout(function fun() {
            console.log("Timer done");   
            resolve(10);         
        }, 3000)
    });
}

async function consume() {
    console.log("Inside function");

    const response = await createPromise();
    console.log("Response is ", response);
}

console.log("Start");
consume();
console.log("End");
