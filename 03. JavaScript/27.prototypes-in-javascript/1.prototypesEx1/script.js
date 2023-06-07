// let name = "Bharat";
// console.log(name);
// console.log(name.length);
// console.log(name.__proto__);


let myHeros = ["thor", "spiderman"];
let dcHeros = ["ironman", "batman", "flash", "superman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// It gives access all the type like arrays, objects, strings etc.
Object.prototype.bharat = function() {
    console.log(`Bharat is present in all objects`);
}

console.log(myHeros.bharat());
console.log(dcHeros.bharat());
console.log(heroPower.bharat());
console.log();

// gives access only array
Array.prototype.heyBharat = function() {
    console.log(`Bharat is present only Array objects`);
}

console.log(myHeros.heyBharat());
console.log(dcHeros.heyBharat());
// console.log(heroPower.heyBharat());  // TypeError: heroPower.heyBharat is not a function


