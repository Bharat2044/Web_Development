let bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
};

let eagle1 = Object.create(bird);   // prototype
console.log(`Eagle1: ${eagle1}`);
console.log(`Eagle1 has wings: ${eagle1.hasWings}`);
console.log(`Eagle1 can fly: ${eagle1.canFly}`);
console.log(`Eagle1 has feathers: ${eagle1.hasFeathers}`);
console.log();

let eagle2 = Object.create(bird);   // prototype
console.log(`Eagle2: ${eagle2}`);
console.log(`Eagle2 has wings: ${eagle2.hasWings}`);
console.log(`Eagle2 can fly: ${eagle2.canFly}`);
console.log(`Eagle2 has feathers: ${eagle2.hasFeathers}`);
console.log();

let penguin = Object.create(bird);   // prototype
console.log(`Penguin: ${penguin}`);
console.log(`Penguin has wings: ${penguin.hasWings}`);
console.log(`Penguin can fly: ${penguin.canFly}`);
console.log(`Penguin has feathers: ${penguin.hasFeathers}`);
