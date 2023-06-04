// console.log("Hello");

// setTimeout(function() {
//     console.log("This will execute after 3 seconds");
// }, 3000);

// console.log("World");
// console.log("Everyone");

function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("Here is the cheese", cheese);
        callback(cheese);
    }, 2000)
}

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🍩";
        console.log("Here is the dough", dough);
        callback(dough);
    }, 2000)
}

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("Here is the pizza", pizza);
        callback(pizza);
    }, 2000)
}


getCheese((cheese) => {
    makeDough(cheese, (dough) => {          
        bakePizza(dough, (pizza) => {  
            console.log("Got the pizza", pizza);
        })
    })
})


// pizza -> dough -> cheese