let newPromise = new Promise((resolve, reject) => {
    let randomNumber = Math.random();
    console.log(randomNumber);
    
    if (randomNumber > 0.5) {
        resolve("The Promise is resolved. The number is greater than 0.5");
    } else {
        reject("The Promise is rejected. The number is lesser than 0.5");
    }
});

console.log(newPromise);