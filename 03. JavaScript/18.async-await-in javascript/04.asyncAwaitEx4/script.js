async function printHelloAfterThreeSeconds() {
    
    let data = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Printing: Hello");
        }, 3000);
    });

    let result = await data; // Wait until the asynchronous operation is resolved : 3 seconds
    console.log(result);
}

printHelloAfterThreeSeconds();