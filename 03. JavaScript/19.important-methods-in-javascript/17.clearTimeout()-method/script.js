function first() {
    console.log("First");
    clearTimeout(timeoutId1);
}
const timeoutId1 = setTimeout(first, 4000);
console.log(`Timeout ID ${timeoutId1} has been cleared`);


const timeoutId2 = setTimeout(() => {
    console.log("Second");
}, 2000);
clearTimeout(timeoutId2);
console.log(`Timeout ID ${timeoutId2} has been cleared`);

const timeoutId3 = setTimeout(function() {
    console.log("Third");
}, 3000);
clearTimeout(timeoutId3);
console.log(`Timeout ID ${timeoutId3} has been cleared`);