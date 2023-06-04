function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000)
    });    
}

function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🍩";
            resolve(dough);
        }, 2000)
    });      
}

function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000)
    });      
}


getCheese()
    .then((cheese) => {
        console.log("Here is the cheese", cheese);
        return makeDough(cheese);
    }).then((dough) => {
        console.log("Here is the dough", dough);
        return bakePizza(dough);
    })
    .then((pizza) => {
        console.log("Here is the pizza", pizza);
    })
    .catch((data) => {
        console.log("Error occured", data);
    })
    .finally(() => {
        console.log("Process Ended");
    });
