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

async function orderPizza() {
    try {
        const cheese = await getCheese();
        console.log("Here is the cheese", cheese);

        const dough = await makeDough(cheese);
        console.log("Here is the dough", dough);

        const pizza = await bakePizza(dough);
        console.log("Here is the pizza", pizza);
    } catch(err) {
        console.log("Error occured", err);
    }
}

orderPizza();

// getCheese()
//     .then((cheese) => {
//         console.log("Here is the cheese", cheese);
//         return makeDough(cheese);
//     }).then((dough) => {
//         console.log("Here is the dough", dough);
//         return bakePizza(dough);
//     })
//     .then((pizza) => {
//         console.log("Here is the pizza", pizza);
//     })
//     .catch((data) => {
//         console.log("Error occured", data);
//     })
//     .finally(() => {
//         console.log("Process Ended");
//     });
