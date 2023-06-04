function createPromise() {
    return new Promise(function execute(resolve, reject) {

        setTimeout(function fun() {
            console.log("Timer done");   
            reject(10);         
        }, 3000)
    });
}

async function consume() {
    try {
        console.log("Inside function");
        const response1 = await createPromise();
        const response2 = await createPromise();
        console.log("Response is", response1);
    }
    catch(err) {
        console.log("Handled", err);
    }
}

console.log("Start");
consume();
console.log("End");
