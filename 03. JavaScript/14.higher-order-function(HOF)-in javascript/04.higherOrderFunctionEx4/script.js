// Example - 4
const myNums = [2, 3, 4, 5, 6];
const sumArray = arr => {
    let total = 0;
    // arr.forEach(element => {
    //     total += element;
    // });
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

console.log(sumArray(myNums));
